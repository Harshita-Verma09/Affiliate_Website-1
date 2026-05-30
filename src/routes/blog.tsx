import { createFileRoute } from "@tanstack/react-router";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Fashion Blog — Style Tips & Trends | Glam Affiliate" },
      {
        name: "description",
        content:
          "Women's fashion blog — style guides, trend reports & outfit inspiration from India & US.",
      },
      { property: "og:title", content: "Fashion Blog — Glam Affiliate" },
      { property: "og:description", content: "Style guides & trends for the modern woman." },
    ],
  }),
  component: Blog,
});

/* ============================================================
   EDIT YOUR BLOG POSTS HERE
   - image: Cloudinary URL with f_auto,q_auto,w_800 transforms
   - link: optional — link to full post or affiliate page
============================================================ */
type Post = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  link: string;
  category: string;
  date: string;
};

const POSTS: Post[] = [
  {
    id: "1",
    title: "10 Must-Have Ethnic Wear for Wedding Season",
    excerpt:
      "From lehengas to anarkalis — the ultimate guide to looking stunning at every wedding function this year.",
    image:
      "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_800/sample.jpg",
    link: "https://your-affiliate-link.com/blog-1",
    category: "Ethnic Wear",
    date: "May 2026",
  },
  {
    id: "2",
    title: "Summer 2026 Trends: What's Hot in US Fashion",
    excerpt:
      "Pastel midis, slip dresses, and chunky sandals — here's everything trending in US summer fashion.",
    image:
      "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_800/sample.jpg",
    link: "https://your-affiliate-link.com/blog-2",
    category: "Trends",
    date: "May 2026",
  },
  {
    id: "3",
    title: "Capsule Wardrobe: 15 Essentials Every Woman Needs",
    excerpt:
      "Build a versatile wardrobe with these timeless pieces that mix, match and never go out of style.",
    image:
      "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_800/sample.jpg",
    link: "https://your-affiliate-link.com/blog-3",
    category: "Style Guide",
    date: "Apr 2026",
  },
  {
    id: "4",
    title: "Saree Draping Styles: 7 Modern Looks to Try",
    excerpt:
      "Move beyond the traditional — modern saree drapes that turn heads and make a statement.",
    image:
      "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_800/sample.jpg",
    link: "https://your-affiliate-link.com/blog-4",
    category: "Ethnic Wear",
    date: "Apr 2026",
  },
];

function Blog() {
  return (
    <>
      <Nav />
      <main>
        <section className="hero">
          <h1>Fashion Blog & Style Diary</h1>
          <p>Latest trends, outfit ideas, and styling tips — for the modern woman.</p>
        </section>

        <section className="section">
          <div className="grid">
            {POSTS.map((p, i) => (
              <article className="blog-card" key={p.id}>
                <img
                  className="blog-img"
                  src={p.image}
                  alt={p.title}
                  loading={i < 2 ? "eager" : "lazy"}
                  decoding="async"
                  width={800}
                  height={500}
                />
                <div className="blog-body">
                  <span className="blog-meta">
                    {p.category} · {p.date}
                  </span>
                  <h2 className="blog-title">{p.title}</h2>
                  <p className="blog-excerpt">{p.excerpt}</p>
                  <a
                    className="btn btn-outline"
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                  >
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
