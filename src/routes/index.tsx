import { createFileRoute } from "@tanstack/react-router";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Glam Affiliate — Women Fashion Picks (India & US)" },
      {
        name: "description",
        content:
          "Handpicked women's fashion deals from India & US. Trendy outfits, ethnic wear, western styles — shop via our affiliate links.",
      },
      { property: "og:title", content: "Glam Affiliate — Women Fashion Picks" },
      { property: "og:description", content: "Handpicked women's fashion deals from India & US." },
    ],
  }),
  component: Index,
});

/* ============================================================
   EDIT YOUR PRODUCTS HERE
   - image: Cloudinary URL. Add f_auto,q_auto,w_600 transformations
     for auto-format + optimization. Example:
     https://res.cloudinary.com/<cloud>/image/upload/f_auto,q_auto,w_600/<id>.jpg
   - link: your affiliate URL
   - region: "India" | "US" (shows as badge)
============================================================ */
type Product = {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  region: "India" | "US";
};

const PRODUCTS: Product[] = [
  {
    id: "1",
    title: "Floral Anarkali Kurta Set",
    description: "Elegant printed Anarkali with dupatta — perfect for festivals & weddings.",
    image:
      "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_600/sample.jpg",
    link: "https://your-affiliate-link.com/product-1",
    region: "India",
  },
  {
    id: "2",
    title: "Boho Maxi Summer Dress",
    description: "Breezy floral maxi dress — perfect for beach days and brunches.",
    image:
      "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_600/sample.jpg",
    link: "https://your-affiliate-link.com/product-2",
    region: "US",
  },
  {
    id: "3",
    title: "Designer Saree with Blouse",
    description: "Premium silk saree with handcrafted embroidery and matching blouse piece.",
    image:
      "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_600/sample.jpg",
    link: "https://your-affiliate-link.com/product-3",
    region: "India",
  },
  {
    id: "4",
    title: "Casual Denim Jacket",
    description: "Classic blue denim jacket — versatile staple for every wardrobe.",
    image:
      "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_600/sample.jpg",
    link: "https://your-affiliate-link.com/product-4",
    region: "US",
  },
  {
    id: "5",
    title: "Embroidered Lehenga Choli",
    description: "Heavy embroidered bridal lehenga set with dupatta in royal colors.",
    image:
      "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_600/sample.jpg",
    link: "https://your-affiliate-link.com/product-5",
    region: "India",
  },
  {
    id: "6",
    title: "Knit Cardigan Sweater",
    description: "Cozy oversized knit cardigan — autumn essential in soft neutral tones.",
    image:
      "https://res.cloudinary.com/demo/image/upload/f_auto,q_auto,w_600/sample.jpg",
    link: "https://your-affiliate-link.com/product-6",
    region: "US",
  },
];

function Index() {
  return (
    <>
      <Nav />
      <main>
        <section className="hero">
          <h1>Discover Your Style, Effortlessly</h1>
          <p>
            Handpicked women's fashion from <strong>India</strong> & <strong>US</strong> —
            trendy outfits, festive ethnic wear and everyday western looks.
          </p>
          <div className="hero-tags">
            <span className="tag">🇮🇳 India Fashion</span>
            <span className="tag">🇺🇸 US Fashion</span>
            <span className="tag">✨ Trending Picks</span>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Featured Picks</h2>
          <p className="section-sub">Curated styles you'll fall in love with.</p>
          <div className="grid">
            {PRODUCTS.map((p, i) => (
              <article className="card" key={p.id}>
                <div className="card-img-wrap">
                  <span className="badge">{p.region}</span>
                  <img
                    src={p.image}
                    alt={p.title}
                    className="card-img"
                    loading={i < 3 ? "eager" : "lazy"}
                    decoding="async"
                    width={600}
                    height={750}
                  />
                </div>
                <div className="card-body">
                  <h3 className="card-title">{p.title}</h3>
                  <p className="card-desc">{p.description}</p>
                  <a
                    className="btn"
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                  >
                    Explore More →
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
