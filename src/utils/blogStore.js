// LocalStorage-backed blog store for demo purposes

const STORAGE_KEY = "tcs_blog_posts_v1";

export function getAllPosts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const posts = raw ? JSON.parse(raw) : [];
    return Array.isArray(posts)
      ? posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      : [];
  } catch (e) {
    return [];
  }
}

export function saveAllPosts(posts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

export function slugify(text) {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function upsertPost(post) {
  const posts = getAllPosts();
  const now = new Date().toISOString();
  const slug = post.slug || slugify(post.title || "post");
  const existingIdx = posts.findIndex((p) => p.slug === slug);
  const normalized = {
    id:
      post.id ||
      crypto.randomUUID?.() ||
      `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    slug,
    title: post.title || "Untitled",
    description: post.description || "",
    content: post.content || "",
    image: post.image || "",
    tags: Array.isArray(post.tags) ? post.tags : [],
    createdAt: post.createdAt || now,
    updatedAt: now,
  };
  if (existingIdx >= 0) {
    posts[existingIdx] = { ...posts[existingIdx], ...normalized };
  } else {
    posts.push(normalized);
  }
  saveAllPosts(posts);
  return normalized;
}

export function deletePost(slug) {
  const posts = getAllPosts();
  const next = posts.filter((p) => p.slug !== slug);
  saveAllPosts(next);
}

export function getPostBySlug(slug) {
  const posts = getAllPosts();
  return posts.find((p) => p.slug === slug) || null;
}

// Seed a sample post if none exists
export function seedIfEmpty() {
  const posts = getAllPosts();
  if (posts.length === 0) {
    upsertPost({
      title: "Welcome to our Blog",
      description: "News, guides, and insights from Titan Career Solutions.",
      content:
        "This is your first post. Use the admin dashboard to add more posts with images, descriptions, and full content. You can also add tags to organize posts.",
      image: "",
      tags: ["announcement"],
    });
  }
}
