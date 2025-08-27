import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPost } from "../services/blogApi";
import "./BlogDetail.css";

const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const row = await getPost(slug);
        setPost(row);
      } catch (err) {
        setPost(null);
      }
    })();
  }, [slug]);

  if (!post) {
    return (
      <div className="blog-detail-page">
        <div className="blog-detail-content">
          <p>Post not found.</p>{" "}
          <Link className="blog-back-link cta-button" to="/blog">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-detail-page">
      <div className="blog-detail-content">
        <Link className="blog-back-link cta-button" to="/blog">
          ← Back to Blog
        </Link>

        <div className="blog-detail-card">
          <h1 style={{ marginTop: 0 }}>{post.title}</h1>
          {post.image && (
            <img
              className="blog-detail-image"
              src={post.image}
              alt={post.title}
            />
          )}
          <p style={{ color: "#555" }}>{post.description}</p>
          <div
            className="blog-content"
            style={{ lineHeight: 1.7 }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          {post.tags?.length > 0 && (
            <div className="blog-tags" style={{ marginTop: 12 }}>
              {post.tags.map((t) => (
                <span className="blog-tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
