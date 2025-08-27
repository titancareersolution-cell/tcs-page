import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { deletePostApi, listPosts, upsertPostApi } from "../services/blogApi";
import useAuth from "../hooks/useAuth";
import RichTextEditor from "../components/RichTextEditor";
import "./Admin.css";
import { supabase } from "../lib/supabaseClient";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    content: "",
    image: "",
    tags: "",
  });
  const [editingSlug, setEditingSlug] = useState("");
  const [query, setQuery] = useState("");
  const [errors, setErrors] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [pendingDeleteSlug, setPendingDeleteSlug] = useState("");

  const { user, loading } = useAuth();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    if (loading) return;
    if (!user) {
      if (isLoggingOut) {
        return;
      }
      navigate("/admin/login");
      return;
    }
    (async () => {
      const rows = await listPosts();
      setPosts(rows);
    })();
  }, [navigate, user, loading]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return posts;
    return posts.filter((p) =>
      [p.title, p.description, p.tags?.join(" ")]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [posts, query]);

  const resetForm = () => {
    setForm({ title: "", description: "", content: "", image: "", tags: "" });
    setEditingSlug("");
  };

  const startEdit = (post) => {
    setEditingSlug(post.slug);
    setForm({
      title: post.title,
      description: post.description,
      content: post.content,
      image: post.image,
      tags: post.tags?.join(", ") || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate required fields
    const newErrors = {};
    const title = (form.title || "").trim();
    const description = (form.description || "").trim();
    const image = (form.image || "").trim();
    const tagsInput = (form.tags || "").trim();
    const contentHtml = form.content || "";
    const contentText = contentHtml
      .replace(/<[^>]*>/g, " ")
      .replace(/&nbsp;/g, " ")
      .trim();

    if (!title) newErrors.title = "Title is required";
    if (!description) newErrors.description = "Description is required";
    if (!contentText) newErrors.content = "Content is required";
    if (!image) newErrors.image = "Image URL is required";
    if (!tagsInput) newErrors.tags = "At least one tag is required";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    (async () => {
      const tags = form.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);
      const payload = {
        slug:
          editingSlug ||
          (form.title && form.title.trim()
            ? form.title
                .toLowerCase()
                .trim()
                .replace(/[^a-z0-9\s-]/g, "")
                .replace(/\s+/g, "-")
                .replace(/-+/g, "-")
            : `post-${Date.now()}`),
        title: form.title,
        description: form.description,
        content: form.content,
        image: form.image,
        tags,
      };
      const saved = await upsertPostApi(payload);
      const rows = await listPosts();
      setPosts(rows);
      setEditingSlug(saved.slug);
      // Reload admin page after successful create/update
      window.location.reload();
    })();
  };

  const handleDelete = async (slug) => {
    setPendingDeleteSlug(slug);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    // Allow empty-string slugs; only guard null/undefined
    if (pendingDeleteSlug === null || pendingDeleteSlug === undefined) return;
    await deletePostApi(pendingDeleteSlug);
    const rows = await listPosts();
    setPosts(rows);
    if (editingSlug === pendingDeleteSlug) resetForm();
    setPendingDeleteSlug("");
    setShowDeleteModal(false);
  };

  const cancelDelete = () => {
    setPendingDeleteSlug("");
    setShowDeleteModal(false);
  };

  const handleLogout = async () => {
    setIsLoggingOut(true);
    await supabase.auth.signOut();
    navigate("/blog");
  };

  return (
    <div className="admin-page">
      <div className="admin-content">
        <div className="admin-header">
          <h1 style={{ margin: 0 }}>Blog Admin</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 12,
              flexWrap: "wrap",
              marginTop: 12,
            }}
          >
            <Link className="cta-button" to="/blog">
              View Blog
            </Link>
            <button className="btn-primary" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>

        <div className="admin-card">
          <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
            <label>
              <div>Title</div>
              <input
                className="admin-input"
                value={form.title}
                onChange={(e) =>
                  setForm((f) => ({ ...f, title: e.target.value }))
                }
                required
              />
              {errors.title && <div className="error-text">{errors.title}</div>}
            </label>
            <label>
              <div>Description</div>
              <input
                className="admin-input"
                value={form.description}
                onChange={(e) =>
                  setForm((f) => ({ ...f, description: e.target.value }))
                }
              />
              {errors.description && (
                <div className="error-text">{errors.description}</div>
              )}
            </label>
            <label>
              <div>Image URL</div>
              <input
                className="admin-input"
                value={form.image}
                onChange={(e) =>
                  setForm((f) => ({ ...f, image: e.target.value }))
                }
                placeholder="https://..."
              />
              {errors.image && <div className="error-text">{errors.image}</div>}
            </label>
            <label>
              <div>Tags (comma separated)</div>
              <input
                className="admin-input"
                value={form.tags}
                onChange={(e) =>
                  setForm((f) => ({ ...f, tags: e.target.value }))
                }
                placeholder="guide, tips"
              />
              {errors.tags && <div className="error-text">{errors.tags}</div>}
            </label>
            <label>
              <div>Content</div>
              <RichTextEditor
                value={form.content}
                onChange={(content) => setForm((f) => ({ ...f, content }))}
                placeholder="Write your blog content here..."
              />
              {errors.content && (
                <div className="error-text">{errors.content}</div>
              )}
            </label>
            <div className="admin-actions">
              <button
                className="btn-primary"
                type="button"
                onClick={handleSubmit}
              >
                {editingSlug ? "Update Post" : "Create Post"}
              </button>
              <button className="btn-primary" type="button" onClick={resetForm}>
                Reset
              </button>
              {editingSlug && (
                <Link className="cta-button" to={`/blog/${editingSlug}`}>
                  Open Post
                </Link>
              )}
            </div>
          </form>
        </div>

        <div className="admin-card">
          <div className="admin-toolbar">
            <input
              className="admin-search"
              type="search"
              placeholder="Filter posts..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div style={{ color: "#666" }}>{filtered.length} posts</div>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Slug</th>
                  <th>Updated</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((p) => (
                  <tr key={p.slug || p.id || p.created_at}>
                    <td>{p.title}</td>
                    <td>{p.slug}</td>
                    <td>
                      {new Date(p.updated_at || p.created_at).toLocaleString()}
                    </td>
                    <td style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                      <button
                        className="cta-button"
                        onClick={() => startEdit(p)}
                      >
                        Edit
                      </button>
                      <button
                        className="cta-button"
                        onClick={() => handleDelete(p.slug)}
                      >
                        Delete
                      </button>
                      <Link className="cta-button" to={`/blog/${p.slug}`}>
                        Open
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {showDeleteModal && (
        <div className="admin-modal-overlay" role="dialog" aria-modal="true">
          <div className="admin-modal">
            <h3>Delete this post?</h3>
            <p>This action cannot be undone.</p>
            <div className="admin-modal-actions">
              <button className="btn-primary" onClick={confirmDelete}>
                Delete
              </button>
              <button className="btn-secondary" onClick={cancelDelete}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
