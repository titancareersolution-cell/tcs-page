import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { listPosts } from "../services/blogApi";
import useAuth from "../hooks/useAuth";
import "./Blog.css";

const Blog = () => {
  const [query, setQuery] = useState("");
  const [posts, setPosts] = useState([]);
  const { user, loading } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const rows = await listPosts();
        setPosts(rows);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

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

  return (
    <div className="blog-page">
      <div className="blog-header">
        <h1>Blog</h1>
      </div>
      <div className="blog-content">
        <div className="blog-section">
          <div className="blog-toolbar">
            <input
              className="blog-search"
              type="search"
              placeholder="Search posts..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {user && (
              <Link className="cta-button" to="/admin">
                Go to Admin
              </Link>
            )}
          </div>
          {filtered.length === 0 ? (
            <p>No posts yet.</p>
          ) : (
            <div className="blog-grid">
              {filtered.map((post) => (
                <article key={post.slug} className="blog-card">
                  {post.image ? (
                    <Link to={`/blog/${post.slug}`}>
                      <img src={post.image} alt={post.title} />
                    </Link>
                  ) : (
                    <Link
                      to={`/blog/${post.slug}`}
                      style={{ display: "block" }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: 180,
                          background: "#f1f1f1",
                        }}
                      />
                    </Link>
                  )}
                  <div className="blog-card-body">
                    <h3 className="blog-card-title">
                      <Link
                        to={`/blog/${post.slug}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="blog-card-desc">{post.description}</p>
                    {post.tags?.length > 0 && (
                      <div className="blog-tags">
                        {post.tags.map((t) => (
                          <span className="blog-tag" key={t}>
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="blog-card-footer">
                      <Link className="cta-button" to={`/blog/${post.slug}`}>
                        Read More
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
