import React, { useRef, useEffect, useState } from "react";
import "./RichTextEditor.css";

const RichTextEditor = ({
  value,
  onChange,
  placeholder = "Enter content...",
}) => {
  const editorRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [currentFormat, setCurrentFormat] = useState("p");
  const [activeFormats, setActiveFormats] = useState({
    bold: false,
    italic: false,
    underline: false,
  });
  // Link popover state
  const [isLinkOpen, setIsLinkOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const linkRangeRef = useRef(null);
  const linkInputRef = useRef(null);

  // Debug: Log whenever activeFormats changes
  useEffect(() => {
    console.log("activeFormats changed to:", activeFormats);
  }, [activeFormats]);

  useEffect(() => {
    if (editorRef.current && value !== editorRef.current.innerHTML) {
      // Only update if the editor is not focused and no modal is open (prevents resets)
      if (!isFocused && !isLinkOpen) {
        editorRef.current.innerHTML = value || "";
      }
    }
  }, [value, isFocused, isLinkOpen]);

  const handleInput = () => {
    if (onChange) {
      onChange(editorRef.current.innerHTML);
    }
    // Prevent any automatic state changes during input
    console.log("Input handled - activeFormats should remain unchanged");
  };

  const handleFocus = () => {
    setIsFocused(true);
    console.log("Editor focused - activeFormats:", activeFormats);
    console.log("Editor content:", editorRef.current?.innerHTML);

    // Check if there are any bold elements in the content
    if (editorRef.current) {
      const boldElements = editorRef.current.querySelectorAll("strong, b");
      console.log("Bold elements found:", boldElements.length);
      if (boldElements.length > 0) {
        console.log(
          "Bold elements:",
          Array.from(boldElements).map((el) => el.outerHTML)
        );
      }
    }

    // DO NOT change activeFormats on focus - let them stay as they are
    console.log("Focus event - keeping activeFormats unchanged");
  };

  const handleSelectionChange = () => {
    // Do nothing - we don't want automatic state changes
  };

  // Toggle formatting and update button state
  const toggleFormat = (format) => {
    console.log(
      "Toggle format called for:",
      format,
      "Current state:",
      activeFormats[format]
    );
    const newState = !activeFormats[format];
    setActiveFormats((prev) => ({
      ...prev,
      [format]: newState,
    }));

    // Apply the formatting without affecting other states
    applyFormat(format);
  };

  // Handle button clicks with explicit event handling
  const handleButtonClick = (format, e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Button clicked for:", format);

    // Only allow state changes through explicit button clicks
    const newState = !activeFormats[format];
    console.log(`Setting ${format} to:`, newState);

    setActiveFormats((prev) => ({
      ...prev,
      [format]: newState,
    }));

    // Apply the formatting
    applyFormat(format);
  };

  // Check if click is directly on button
  const isDirectButtonClick = (e) => {
    return (
      e.target.closest(".toolbar-btn") === e.target ||
      e.target.closest(".toolbar-btn") === e.currentTarget
    );
  };

  // Initialize content when component mounts
  useEffect(() => {
    if (editorRef.current && value) {
      editorRef.current.innerHTML = value;
    }
    // Ensure all format states start as false
    setActiveFormats({
      bold: false,
      italic: false,
      underline: false,
    });
  }, []);

  // Reset format states when value changes
  useEffect(() => {
    setActiveFormats({
      bold: false,
      italic: false,
      underline: false,
    });
  }, [value]);

  const execCommand = (command, value = null) => {
    // Ensure the editor is focused before executing command
    editorRef.current.focus();

    // Execute the command
    const success = document.execCommand(command, false, value);

    // Update the content and trigger onChange
    handleInput();

    return success;
  };

  // Separate function for formatting commands that doesn't affect button states
  const applyFormat = (command, value = null) => {
    console.log("Applying format:", command);
    editorRef.current.focus();
    document.execCommand(command, false, value);
    handleInput();
  };

  const insertBulletList = () => {
    execCommand("insertUnorderedList");
  };

  const insertNumberedList = () => {
    execCommand("insertOrderedList");
  };

  const setAlignment = (alignment) => {
    // First try browser command
    const cmd =
      alignment === "justify"
        ? "justifyFull"
        : "justify" + alignment.charAt(0).toUpperCase() + alignment.slice(1);
    const ok = execCommand(cmd);
    if (ok) return;

    // Fallback: apply CSS text-align to the current block
    try {
      const selection = window.getSelection();
      if (!selection || selection.rangeCount === 0) return;
      const range = selection.getRangeAt(0);
      let node = range.commonAncestorContainer;
      if (node.nodeType === Node.TEXT_NODE) node = node.parentElement;

      const isBlockTag = (el) => {
        if (!el || !el.tagName) return false;
        const t = el.tagName.toLowerCase();
        return [
          "p",
          "div",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "li",
          "blockquote",
        ].includes(t);
      };

      while (node && node !== editorRef.current && !isBlockTag(node)) {
        node = node.parentElement;
      }

      const target =
        node && node !== editorRef.current ? node : editorRef.current;
      if (target && target.style) {
        target.style.textAlign =
          alignment === "justify" ? "justify" : alignment;
        handleInput();
      }
    } catch (e) {
      // ignore
    }
  };

  const insertLink = () => {
    // Save current selection to restore when confirming
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      linkRangeRef.current = selection.getRangeAt(0).cloneRange();
    }
    setLinkUrl("");
    setIsLinkOpen(true);
    // Focus input next tick
    setTimeout(() => linkInputRef.current?.focus(), 0);
  };

  const restoreSavedRange = () => {
    if (linkRangeRef.current) {
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(linkRangeRef.current);
    }
  };

  const confirmInsertLink = () => {
    const url = linkUrl.trim();
    setIsLinkOpen(false);
    if (!url) return;

    restoreSavedRange();
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) return;

    const range = sel.getRangeAt(0);
    if (range.collapsed) {
      // If no text selected, insert the URL as link text
      const a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = url.replace(/^https?:\/\//i, "");
      range.insertNode(a);
      // Move caret after link
      range.setStartAfter(a);
      range.setEndAfter(a);
      sel.removeAllRanges();
      sel.addRange(range);
    } else {
      // Wrap selection with link
      const contents = range.extractContents();
      const a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.appendChild(contents);
      range.insertNode(a);
      const newRange = document.createRange();
      newRange.setStartAfter(a);
      newRange.setEndAfter(a);
      sel.removeAllRanges();
      sel.addRange(newRange);
    }
    handleInput();
  };

  const cancelInsertLink = () => {
    setIsLinkOpen(false);
  };

  const clearFormatting = () => {
    execCommand("removeFormat");
    // Reset all format states when clearing formatting
    setActiveFormats({
      bold: false,
      italic: false,
      underline: false,
    });
  };

  const insertHeading = (level) => {
    execCommand("formatBlock", `<h${level}>`);
  };

  const isActive = (command) => {
    // ONLY use our internal state, never check DOM
    const isActiveState = activeFormats[command] || false;
    console.log(
      `isActive check for ${command}:`,
      isActiveState,
      "activeFormats:",
      activeFormats
    );
    return isActiveState;
  };

  const getCurrentBlockFormat = () => {
    try {
      const selection = window.getSelection();
      if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const container = range.commonAncestorContainer;
        const blockElement =
          container.nodeType === Node.TEXT_NODE
            ? container.parentElement
            : container;

        if (blockElement) {
          const tagName = blockElement.tagName.toLowerCase();
          if (tagName.startsWith("h")) {
            return tagName;
          }
        }
      }
    } catch (e) {
      // Handle any errors gracefully
    }
    return "p";
  };

  return (
    <div
      className="rich-text-editor"
      onClick={(e) => {
        console.log("Rich text editor container clicked");
        // Prevent any automatic button activation when clicking on the container
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <div
        className="editor-toolbar"
        onMouseDown={(e) => {
          // Keep focus in the editor when clicking toolbar buttons
          if (e.target.closest(".toolbar-btn")) {
            e.preventDefault();
          }
        }}
        onClick={(e) => {
          console.log("Toolbar clicked");
          // Only allow button clicks, prevent any other activation
          if (!e.target.closest(".toolbar-btn")) {
            e.stopPropagation();
          }
        }}
      >
        <div className="toolbar-group">
          <button
            type="button"
            className={`toolbar-btn ${isActive("bold") ? "active" : ""}`}
            onClick={(e) => {
              if (isDirectButtonClick(e)) {
                handleButtonClick("bold", e);
              }
            }}
            title="Bold"
          >
            <strong>B</strong>
          </button>
          <button
            type="button"
            className={`toolbar-btn ${isActive("italic") ? "active" : ""}`}
            onClick={(e) => handleButtonClick("italic", e)}
            title="Italic"
          >
            <em>I</em>
          </button>
          <button
            type="button"
            className={`toolbar-btn ${isActive("underline") ? "active" : ""}`}
            onClick={(e) => handleButtonClick("underline", e)}
            title="Underline"
          >
            <u>U</u>
          </button>
        </div>

        <div className="toolbar-group">
          <select
            className="toolbar-select"
            value={currentFormat}
            onChange={(e) => {
              if (e.target.value === "p") {
                execCommand("formatBlock", "<p>");
              } else {
                insertHeading(e.target.value.slice(-1));
              }
              setCurrentFormat(e.target.value);
            }}
            title="Heading"
          >
            <option value="p">Paragraph</option>
            <option value="h1">Heading 1</option>
            <option value="h2">Heading 2</option>
            <option value="h3">Heading 3</option>
            <option value="h4">Heading 4</option>
          </select>
        </div>

        <div className="toolbar-group">
          <button
            type="button"
            className="toolbar-btn"
            onClick={insertBulletList}
            title="Bullet List"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7,5H21V7H7V5M7,13V11H21V13H7M4,6.5A1.5,1.5 0 0,1 5.5,8A1.5,1.5 0 0,1 4,9.5A1.5,1.5 0 0,1 2.5,8A1.5,1.5 0 0,1 4,6.5M4,14.5A1.5,1.5 0 0,1 5.5,16A1.5,1.5 0 0,1 4,17.5A1.5,1.5 0 0,1 2.5,16A1.5,1.5 0 0,1 4,14.5M7,19V17H21V19H7Z" />
            </svg>
          </button>
          <button
            type="button"
            className="toolbar-btn"
            onClick={insertNumberedList}
            title="Numbered List"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7,13H21V11H7M7,19H21V17H7M7,7H21V5H7M3,8A1,1 0 0,1 4,7A1,1 0 0,1 5,8A1,1 0 0,1 4,9A1,1 0 0,1 3,8M3,14A1,1 0 0,1 4,13A1,1 0 0,1 5,14A1,1 0 0,1 4,15A1,1 0 0,1 3,14M3,2A1,1 0 0,1 4,1A1,1 0 0,1 5,2A1,1 0 0,1 4,3A1,1 0 0,1 3,2Z" />
            </svg>
          </button>
        </div>

        <div className="toolbar-group">
          <button
            type="button"
            className="toolbar-btn"
            onClick={() => setAlignment("left")}
            title="Align Left"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,3H21V5H3V3M3,7H15V9H3V7M3,11H21V13H3V11M3,15H15V17H3V15M3,19H21V21H3V19Z" />
            </svg>
          </button>
          <button
            type="button"
            className="toolbar-btn"
            onClick={() => setAlignment("center")}
            title="Align Center"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,3H21V5H3V3M7,7H17V9H7V7M3,11H21V13H3V11M7,15H17V17H7V15M3,19H21V21H3V19Z" />
            </svg>
          </button>
          <button
            type="button"
            className="toolbar-btn"
            onClick={() => setAlignment("right")}
            title="Align Right"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,3H21V5H3V3M9,7H21V9H9V7M3,11H21V13H3V11M9,15H21V17H9V15M3,19H21V21H3V19Z" />
            </svg>
          </button>
          <button
            type="button"
            className="toolbar-btn"
            onClick={() => setAlignment("justify")}
            title="Justify"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,3H21V5H3V3M3,7H21V9H3V7M3,11H21V13H3V11M3,15H21V17H3V15M3,19H21V21H3V19Z" />
            </svg>
          </button>
        </div>

        <div className="toolbar-group">
          <button
            type="button"
            className="toolbar-btn"
            onClick={insertLink}
            title="Insert Link"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7C4.24,7 2,9.24 2,12C2,14.76 4.24,17 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17C19.76,17 22,14.76 22,12C22,9.24 19.76,7 17,7Z" />
            </svg>
          </button>
          <button
            type="button"
            className="toolbar-btn"
            onClick={clearFormatting}
            title="Clear Formatting"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6,5V5.18L15.36,14.54L21,20.18L19.73,21.45L14.1,15.82L13,16.93V21H11V15L6,10V8L13,15L19.73,8.27L21,9.55L14.1,16.45L6,8.37V5H6Z" />
            </svg>
          </button>
        </div>
      </div>

      {isLinkOpen && (
        <div className="rte-overlay" onClick={cancelInsertLink}>
          <div className="link-popover" onClick={(e) => e.stopPropagation()}>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>Insert link</div>
            <input
              ref={linkInputRef}
              className="link-input"
              type="url"
              placeholder="https://example.com"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") confirmInsertLink();
                if (e.key === "Escape") cancelInsertLink();
              }}
            />
            <div className="link-actions">
              <button
                type="button"
                className="toolbar-btn"
                onClick={confirmInsertLink}
              >
                Insert
              </button>
              <button
                type="button"
                className="toolbar-btn"
                onClick={cancelInsertLink}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <div
        ref={editorRef}
        className={`editor-content ${isFocused ? "focused" : ""}`}
        contentEditable
        onInput={handleInput}
        onFocus={handleFocus}
        onBlur={() => setIsFocused(false)}
        onKeyUp={() => {}}
        onMouseUp={() => {}}
        onKeyDown={() => {}}
        onMouseDown={() => {}}
        onPaste={async (e) => {
          e.preventDefault();
          try {
            const text = await navigator.clipboard.readText();
            const selection = window.getSelection();
            if (selection.rangeCount > 0) {
              const range = selection.getRangeAt(0);
              range.deleteContents();
              range.insertNode(document.createTextNode(text));
            }
          } catch (error) {
            // Fallback to clipboardData for older browsers
            const text = e.clipboardData.getData("text/plain");
            const selection = window.getSelection();
            if (selection.rangeCount > 0) {
              const range = selection.getRangeAt(0);
              range.deleteContents();
              range.insertNode(document.createTextNode(text));
            }
          }
        }}
        placeholder={placeholder}
      />
    </div>
  );
};

export default RichTextEditor;
