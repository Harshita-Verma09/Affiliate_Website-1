
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
      {
        property: "og:description",
        content: "Handpicked women's fashion deals from India & US.",
      },
    ],
  }),
  component: Index,
});

/*
============================================================
PRODUCTS CONFIG — edit karo yahan:
  - image: Cloudinary URL (f_auto,q_auto,w_600 lagao)
  - link: affiliate URL
  - region: "India" | "US"
============================================================
*/

type Product = {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  region: "India" | "US";
};

// FEATURE section — yahan sirf inspiration cards hain, koi link nahi
// Heights vary karo taki Pinterest jaisa masonry effect aae
const FEATURE: (Omit<Product, "link" | "region"> & { tall?: boolean })[] = [
  {
    id: "1",
    title: "Sunset Chic: Bold & Effortless Elegance",
    description:
      "A striking combination of vibrant mustard trousers and a classic black top, crafted for a confident, fashion-forward look that turns heads wherever you go. ✨",
    image:
      "https://res.cloudinary.com/dlwijjefj/image/upload/f_auto,q_auto,w_600/v1779688829/fashion/feature1.webp",
    tall: false,
  },
  {
    id: "2",
    title: "Bold In Black",
    description:
      "Effortless grace meets modern luxury for your next big occasion.",
    image:
      "https://res.cloudinary.com/dlwijjefj/image/upload/f_auto,q_auto,w_600/v1779689427/fashion/feature2.webp",
    tall: true,
  },
  {
    id: "3",
    title: "Warm & Minimalist",
    description:
      "Neutral tones and chic layers crafted for your perfect chilly-day aesthetic.",
    image:
      "https://res.cloudinary.com/dlwijjefj/image/upload/f_auto,q_auto,w_600/v1779694869/fashion/feature3.jpg",
    tall: true,
  },
  {
    id: "4",
    title: "Elegant In Purple",
    description:
      "Define your style statement with a blend of comfort and modern flair. Step out in style with this trending coordinated lavender look.",
    image:
      "https://res.cloudinary.com/dlwijjefj/image/upload/v1780125939/fashion/feature7.webp",
    tall: false,
  },
  {
    id: "5",
    title: "The Ultimate Lookbook ✨",
    description:
      "From traditional elegance to everyday chic, find a style for every mood.",
    image:
      "https://res.cloudinary.com/dlwijjefj/image/upload/v1780126445/fashion/fashion9.png",
    tall: false,
  },
  {
    id: "6",
    title: "Serene Blue Dreams🩵",
    description:
      "Shine bright in this beautifully detailed, powder-blue traditional look. Experience a perfect blend of comfort, heritage, and timeless charm.",
    image:
      "https://res.cloudinary.com/dlwijjefj/image/upload/v1780128105/fashion/fashion11.png",
    tall: true,
  },
];

// PRODUCTS — affiliate links wale cards
const PRODUCTS: Product[] = [
  {
    id: "1",
    title: "Western High Low Knee Long One Piece Dress",
    description:
      "Step into confidence with a look that blends comfort, style, and feminine charm perfectly.",
    image:
      "https://res.cloudinary.com/dlwijjefj/image/upload/v1779727145/fashion/Amazon1.png",
    link: "https://amzn.to/43jXuL2",
    region: "India",
  },
  {
    id: "2",
    title: "PRETTYGARDEN Women Blouses Spring Dressy Cap Sleeve Mock Neck Work Shirts",
    description:
      "Look fresh, feel comfortable, and stay confident with daily wear outfits designed for modern women.",
    image:
      "https://res.cloudinary.com/dlwijjefj/image/upload/v1780149239/fashion/Amazon5.png",
    link: "https://amzn.to/3PwiVWb",
    region: "US",
  },
  {
    id: "3",
    title: "Libas Woven Design Silk Blend Anarkali Kurta With Palazzo and Dupatta",
    description:
      "Designed for the woman who loves tradition with a touch of modern fashion. A graceful look that never goes out of style.",
    image:
      "https://res.cloudinary.com/dlwijjefj/image/upload/v1779727234/fashion/Amazon2.png",
    link: "https://amzn.to/4dpAosw",
    region: "India",
  },
  {
    id: "4",
    title: "Elegant Office Wear Knot Neck Blouse | Women's Premium Chiffon Office Top",
    description:
      "Lightweight, breathable, and effortlessly chic — perfect for work, shopping, casual outings, and everyday wear.",
    image:
      "https://res.cloudinary.com/dlwijjefj/image/upload/v1780149252/fashion/Amazon6.png",
    link: "https://amzn.to/4dJvs0c",
    region: "US",
  },
  {
    id: "5",
    title: "Shasmi Girl's & Women's Solid Color V-Neck A-Line Maxi Dress for Women | New Year Party Outfit",
    description:
      "Elegant. Confident. Unforgettable",
    image:
      "https://res.cloudinary.com/dlwijjefj/image/upload/v1779727289/fashion/Amazon3.png",
    link: "https://amzn.to/4eZAmsu",
    region: "India",
  },
  {
    id: "6",
    title: "Women's Co-ord Set | Short Sleeve Top & Bottom | Comfortable Fit Wear",
    description:
      "Tradition wrapped in elegance ✨ Because every woman deserves to shine with confidence and grace.",
    image:
      "https://res.cloudinary.com/dlwijjefj/image/upload/v1779728436/fashion/Amazon4.png",
    link: "https://amzn.to/4dJwCJk",
    region: "India",
  },
  {
    id: "7",
    title: "Summer Dresses for Women 2026 Vacation,Smocked Floral Maxi Dress,Boho Beach Sundress with Pocket Fashion Clothing",
    description:
      "Discover effortless elegance with this beautifully crafted outfit, designed to highlight your natural grace while keeping you comfortable and stylish throughout the day.",
    image:
      "https://res.cloudinary.com/dlwijjefj/image/upload/v1780149282/fashion/Amazon7.png",
    link: "https://amzn.to/4fPeqjV",
    region: "US",
  },
  {
    id: "8",
    title: "Gufrina Women's Pink Floral Printed Button Down Western Shirt with Collared Neck and Half Sleeves in Relaxed Fit Style",
    description:
      "Simple, stylish, and easy to wear — the perfect choice for women who love comfort without compromising on fashion",
    image:
      "https://res.cloudinary.com/dlwijjefj/image/upload/v1779727302/fashion/feature8.png",
    link: "https://amzn.to/4nE0I5m",
    region: "India",
  },
  {
    id: "9",
    title: "Women's Satin Pants Dress Casual Pleated Pull on High Waist Pants Baggy Front Tapered Trouser",
    description:
      "Designed for the woman who loves tradition with a touch of modern fashion. A graceful look that never goes out of style",
    image:
      "https://res.cloudinary.com/dlwijjefj/image/upload/v1780150900/fashion/Amazon8.png",
    link: "https://amzn.to/4eeM15C",
    region: "US",
  },
  {
    id: "10",
    title: "Libas Women's Silk Blend Floral Straight Kurtis",
    description:
      "Refresh your daily wardrobe with versatile and comfortable outfits that keep you looking stylish from morning to evening",
    image:
      "https://res.cloudinary.com/dlwijjefj/image/upload/v1779688281/fashion/Amazon9.png",
    link: "https://amzn.to/4307jxL",
    region: "India",
  },
  {
    id: "11",
    title: "Purses and Handbags Top Handle Satchel Shoulder Bags Messenger Tote Bag for Ladies",
    description:
      "Walk in style, leave an impression. This sling bag does the talking",
    image:
      "https://res.cloudinary.com/dlwijjefj/image/upload/v1780639233/fashion/Amazon12.png",
    link: "https://amzn.to/4vtbrCr",
    region: "US",
  },
  {
    id: "12",
    title: "Bag for Women - Laser Cut Sling Bag with Gold Chain, Stylish Women's Cross body Handbag for Girls",
    description:
      "Your outfit's missing piece? A touch of gold and a lot of confidence",
    image:
      "https://res.cloudinary.com/dlwijjefj/image/upload/v1780638792/fashion/Amazon11.png",
    link: "https://amzn.to/4oalZUI",
    region: "India",
  },
  {
    id: "13",
    title: "SilverArrow womens Twilight Drift Heeled Sandal | Block Heel |Fashion Sandals |Toe Strap ",
    description:
      "Walk Bold. Stand Tall. Leave Them Looking.",
    image:
      "https://res.cloudinary.com/dlwijjefj/image/upload/v1780639655/fashion/Amazon13.png",
    link: "https://amzn.to/4tVSIOY",
    region: "India",
  },
  {
    id: "14",
    title: "Women Satin Clutch Purse Handbag Evening Bag for Wedding Banquet Vintage Rhinestone Necklace Earring Jewelry Set",
    description:
      "The kind of shine that turns every entrance into a grand arrival.",
    image:
      "https://res.cloudinary.com/dlwijjefj/image/upload/v1780640143/fashion/Amazon14.png",
    link: "https://amzn.to/43cT34O",
    region: "US",
  },
  {
    id: "15",
    title: "Adokoo Women's Everyday Comfort Sneakers | Trendy Low-Top Canvas Shoes for Walking, Travel & Casual Wear",
    description:
      "Comfort that keeps up with your day, style that stands out",
    image:
      "https://res.cloudinary.com/dlwijjefj/image/upload/v1780641348/fashion/Amazon15.png",
    link: "https://amzn.to/3RPOJ98",
    region: "US",
  },
  {
    id: "16",
    title: "Women's Lightweight Slip-On Summer Sandals for Everyday Comfort",
    description:
      "Lightweight comfort, effortless style, and a confident stride for every occasion.",
    image:
      "https://res.cloudinary.com/dlwijjefj/image/upload/v1780641730/fashion/Amazon16.png",
    link: "https://amzn.to/4uidt7o",
    region: "India",
  },
  {
    id: "17",
    title: "Women's Fashion Ankle Boots with Block Heel | Chic Suede Lace-Up Western Style Boots",
    description:
      "Designed for the modern woman, these fashionable ankle boots offer a sleek silhouette, sturdy heel, and timeless appeal.",
    image:
      "https://res.cloudinary.com/dlwijjefj/image/upload/v1780644440/fashion/Amazon17d.png",
    link: "https://amzn.to/4wWUty2",
    region: "India",
  },
  {
    id: "18",
    title: "Dokotoo Sleeveless Crewneck Midi Dress with Tie Belt",
    description:
      "Grace in every step, confidence in every detail. Soft color, strong presence.",
    image:
      "https://res.cloudinary.com/dlwijjefj/image/upload/v1780732827/Amazon21.png",
    link: "https://amzn.to/4g4hj0t",
    region: "US",
  },
  {
    id: "19",
    title: "Elegant YARA Wedge Sandals for Women – Perfect for Casual & Party Wear",
    description:
      "Suitable for casual, office, party, and festive occasions, Versatile Style for Every Occasion",
    image:
      "https://res.cloudinary.com/dlwijjefj/image/upload/v1780645069/fashion/Amazon18b.png",
    link: "https://amzn.to/4uW1s8s",
    region: "India",
  },
  {
    id: "20",
    title: "Women's Premium Faux Leather Black Clutch Purse | Elegant Party & Casual Handbag with Metal Emblem",
    description:
      "Carry your essentials in style with this premium faux leather black clutch",
    image:
      "https://res.cloudinary.com/dlwijjefj/image/upload/v1780645763/fashion/Amazon19.jpg",
    link: "https://amzn.to/4wXzgEf",
    region: "India",
  },
  {
    id: "21",
    title: "Nowry Women's Fashion Flats Sandals | Bold Style, Effortless Attitude | Perfect for Party, Wedding & Casual Wear",
    description:
      "Turn heads with every step in these stylish Nowry flats, designed for women who carry confidence, elegance, and attitude wherever they go.",
    image:
      "https://res.cloudinary.com/dlwijjefj/image/upload/v1780731753/Amazon20.png",
    link: "https://amzn.to/4nHtF0v",
    region: "India",
  },
  {
    id: "22",
    title: "Elegance is the art of being remembered without trying. Elegant Homecoming Dress for Women ",
    description:
      "Elegance isn't loud—it's unforgettable. Understated luxury, undeniable confidence.",
    image:
      "https://res.cloudinary.com/dlwijjefj/image/upload/v1780733817/Amazon22.png",
    link: "https://amzn.to/49LIIjT",
    region: "US",
  },
  {
    id: "23",
    title: "Classic Denim Shirt Outfit Ideas | Effortless Western Fashion for Women",
    description:
      "A denim shirt and a fearless attitude never go out of style.",
    image:
      "https://res.cloudinary.com/dlwijjefj/image/upload/v1780734270/Amazon23.png",
    link: "https://amzn.to/4fpL23K",
    region: "US",
  },
  {
    id: "25",
    title: "Elegance That Speaks Without Words — Floral Embroidered Cotton Shirt",
    description:
      "A graceful blend of delicate floral embroidery and effortless confidence, designed for women who make a statement through style, not noise.",
    image:
      "https://res.cloudinary.com/dlwijjefj/image/upload/v1780898382/Amazon25.png",
    link: "https://amzn.to/4ujNpZK",
    region: "India",
  },
  {
    id: "26",
    title: "Confidence in Every Detail — Elegant Eyelet Lace Blouse for Women",
    description:
      "Turn heads effortlessly with this chic eyelet lace top that blends feminine charm, modern confidence, and timeless style for every occasion.",
    image:
      "https://res.cloudinary.com/dlwijjefj/image/upload/v1780897839/Amazon24.png",
    link: "https://amzn.to/43gOJBD",
    region: "US",
  },
  {
    id: "27",
    title: "Own the Sunshine — Chic Wide Brim Sun Hat for Confident Women",
    description:
      "From beach walks to vacation escapes, this stylish bowknot sun hat adds effortless glamour, elegance, and eye-catching confidence to every summer look.",
    image:
      "https://res.cloudinary.com/dlwijjefj/image/upload/v1780899331/Amazon26.png",
    link: "https://amzn.to/4e4mtHb",
    region: "US",
  },
  {
    id: "28",
    title: "Pretty Hat Enough to Be Noticed, Confident Enough to Be Remembered",
    description:
      "A flawless blend of beauty, confidence, and effortless charm. The perfect beach hat for women who were born to stand out, not fit in.",
    image:
      "https://res.cloudinary.com/dlwijjefj/image/upload/v1780899827/Amazon27.png",
    link: "https://amzn.to/4v3U8IA",
    region: "India",
  },
  {
    id: "29",
    title: "Own the Street – Vintage Leather Look Cropped Jacket for Fearless Women",
    description:
      "Pair it with leggings, jeans, or boots and create a bold fashion statement that speaks before you do.",
    image:
      "https://res.cloudinary.com/dlwijjefj/image/upload/v1781959675/Amazon28.jpg",
    link: "https://amzn.to/44m1viA",
    region: "US",
  },
  {
    id: "30",
    title: "Vacation Vibes Ribbed Lounge Set – Effortless Style for Every Getaway",
    description:
      "Stay cool, comfortable, and effortlessly chic with this matching ribbed shorts set—perfect for vacations, brunches, and sunny-day outings. 🌴✨",
    image:
      "https://res.cloudinary.com/dlwijjefj/image/upload/v1781960344/Amazon29.jpg",
    link: "https://amzn.to/4uLieXm",
    region: "US",
  },
  {
    id: "31",
    title: "Power & Elegance Women's Blazer Suit Set – Tailored Confidence for Every Occasion",
    description:
      "Step into every meeting with confidence in this tailored blazer and trouser set, designed to deliver a polished, and powerful look from office hours to business events. ✨",
    image:
      "https://res.cloudinary.com/dlwijjefj/image/upload/v1781960771/Amazon30.png",
    link: "https://amzn.to/4oHT8HA",
    region: "US",
  },
  {
    id: "32",
    title: "✨ Elegance with Attitude – Satin Blouse That Turns Heads",
    description:
      "Walk in with confidence and let your style do the talking. This luxurious satin blouse delivers a bold, sophisticated look that instantly upgrades any outfit. 🔥👑",
    image:
      "https://res.cloudinary.com/dlwijjefj/image/upload/v1781961309/Amazon31.png",
    link: "https://amzn.to/4vSww9u",
    region: "US",
  },
  {
    id: "33",
    title: "💎 Silk Confidence – The Top That Makes Every Outfit Look Expensive",
    description:
      "Turn simple looks into statement looks with this luxe satin top. Soft shine, effortless elegance, and undeniable confidence—perfect for women who know their worth and dress like it. ✨",
    image:
      "https://res.cloudinary.com/dlwijjefj/image/upload/v1781963232/Amazon32.png",
    link: "https://amzn.to/4gxa7Ks",
    region: "US",
  },
  {
    id: "34",
    title: "Too Classy to Compete – Satin Top for Women Who Stand Out",
    description:
      " Soft, stylish, and effortlessly chic—this satin top adds a touch of luxury to every outfit and makes you look confident wherever you go.",
    image:
      "https://res.cloudinary.com/dlwijjefj/image/upload/v1781963598/Amazon33.png",
    link: "https://amzn.to/4acnVGw",
    region: "US",
  },

];

function Index() {
  return (
    <>
      <Nav />

      {/* ── Hero ── */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Discover Your Style,{" "}
            <span className="hero-accent">Effortlessly</span>
          </h1>
          <p className="hero-subtitle">
            Handpicked women's fashion from India &amp; US — trendy outfits,
            festive ethnic wear and everyday western looks.
          </p>
          <div className="hero-badges">
            <span className="badge badge-india">🇮🇳 India Fashion</span>
            <span className="badge badge-us">🇺🇸 US Fashion</span>
          </div>
        </div>
      </section>

      {/* ── Trending / Feature Section ── */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">✨ Trending Picks</h2>
          <p className="section-sub">
            Pick Your Style — Curated looks you'll fall in love with.
          </p>
        </div>

        {/* Pinterest-style masonry grid */}
        <div className="masonry-grid">
          {FEATURE.map((p) => (
            <div
              key={p.id}
              className={`masonry-card ${p.tall ? "masonry-tall" : "masonry-short"}`}
            >
              <div className="masonry-img-wrap">
                <img
                  src={p.image}
                  alt={p.title}
                  className="masonry-img"
                  loading="lazy"
                />
                <div className="masonry-overlay">
                  <h3 className="masonry-title">{p.title}</h3>
                  <p className="masonry-desc">{p.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Affiliate Products Section ── */}
      <section className="section section-dark">
        <div className="section-header">
          <h2 className="section-title">🛍️ Featured Picks</h2>
          <p className="section-sub">
            Curated styles you'll fall in love with — shop now via affiliate
            links.
          </p>
        </div>

        <div className="products-grid">
          {PRODUCTS.map((p) => (
            <a
              key={p.id}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="product-card"
            >
              <div className="product-img-wrap">
                <img
                  src={p.image}
                  alt={p.title}
                  className="product-img"
                  loading="lazy"
                />
                <span
                  className={`region-badge ${p.region === "India" ? "region-india" : "region-us"}`}
                >
                  {p.region === "India" ? "🇮🇳 India" : "🇺🇸 US"}
                </span>
              </div>
              <div className="product-info">
                <h3 className="product-title">{p.title}</h3>
                <p className="product-desc">{p.description}</p>
                <span className="product-cta">Explore More →</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <Footer />

      <style>{`
        /* ── Base ── */
        * { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── Hero ── */
        .hero-section {
          background: linear-gradient(135deg, #fff0f6 0%, #fce4ec 50%, #f3e5f5 100%);
          padding: 80px 24px 60px;
          text-align: center;
        }
        .hero-content { max-width: 680px; margin: 0 auto; }
        .hero-title {
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 800;
          color: #1a1a2e;
          line-height: 1.2;
          margin-bottom: 16px;
          font-family: Georgia, serif;
        }
        .hero-accent { color: #c2185b; }
        .hero-subtitle {
          font-size: 1.1rem;
          color: #555;
          margin-bottom: 28px;
          line-height: 1.6;
        }
        .hero-badges { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .badge {
          padding: 8px 20px;
          border-radius: 999px;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.3px;
        }
        .badge-india { background: #fff3e0; color: #e65100; border: 1.5px solid #ffb74d; }
        .badge-us    { background: #e3f2fd; color: #1565c0; border: 1.5px solid #90caf9; }

        /* ── Section ── */
        .section { padding: 60px 24px; background: #fff; }
        .section-dark { background: #fafafa; }
        .section-header { text-align: center; margin-bottom: 40px; }
        .section-title {
          font-size: clamp(1.5rem, 3vw, 2.2rem);
          font-weight: 800;
          color: #1a1a2e;
          font-family: Georgia, serif;
          margin-bottom: 8px;
        }
        .section-sub { color: #777; font-size: 1rem; }

        /* ── Masonry Grid (Pinterest style) ── */
        .masonry-grid {
          columns: 2 220px;
          column-gap: 14px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .masonry-card {
          break-inside: avoid;
          margin-bottom: 14px;
          border-radius: 16px;
          overflow: hidden;         /* image card ke andar rahegi */
          position: relative;
          cursor: pointer;
          display: block;           /* card khud wrap karega image ko */
          background: #eee;
        }
        /* Card ki height = image ki height — card chota nahi rahega */
        .masonry-tall  { height: 480px; }   /* tall card — full outfit visible */
        .masonry-short { height: 320px; }   /* short card */

        .masonry-img-wrap {
          position: relative;
          width: 100%;
          height: 100%;             /* parent card ki puri height le */
        }

        .masonry-img {
          width: 100%;
          height: 100%;
          object-fit: cover;        /* card ke andar fit, koi cut nahi */
          object-position: top;     /* model ka upper body / face dikhega */
          display: block;
          transition: transform 0.45s ease;
        }
        .masonry-card:hover .masonry-img { transform: scale(1.05); }

        .masonry-overlay {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 24px 16px 18px;
          background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%);
          color: #fff;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .masonry-card:hover .masonry-overlay { opacity: 1; }
        .masonry-title { font-size: 1rem; font-weight: 700; margin-bottom: 5px; }
        .masonry-desc  { font-size: 0.82rem; line-height: 1.4; opacity: 0.88; }

        /* ── Products Grid ── */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 20px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .product-card {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
          text-decoration: none;
          color: inherit;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          display: flex;
          flex-direction: column;
        }
        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 28px rgba(0,0,0,0.14);
        }
        .product-img-wrap {
          position: relative;
          width: 100%;
          height: 370px;          /* fixed height — sabke equal */
          overflow: hidden;
          flex-shrink: 0;
        }
        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;      /* fills properly, no cut look */
          object-position: top;   /* face/top of garment visible */
          display: block;
          transition: transform 0.4s ease;
        }
        .product-card:hover .product-img { transform: scale(1.05); }

        .region-badge {
          position: absolute;
          top: 10px; left: 10px;
          padding: 4px 10px;
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 700;
          backdrop-filter: blur(6px);
        }
        .region-india { background: rgba(255,243,224,0.92); color: #e65100; }
        .region-us    { background: rgba(227,242,253,0.92); color: #1565c0; }

        .product-info { padding: 14px 16px 18px; display: flex; flex-direction: column; gap: 6px; }
        .product-title { font-size: 0.97rem; font-weight: 700; color: #1a1a2e; line-height: 1.3; }
        .product-desc  { font-size: 0.82rem; color: #666; line-height: 1.45; }
        .product-cta   {
          margin-top: 8px;
          font-size: 0.85rem;
          font-weight: 700;
          color: #c2185b;
          letter-spacing: 0.2px;
        }

        /* ── Responsive ── */
        @media (max-width: 480px) {
          .masonry-grid { columns: 2 140px; column-gap: 10px; }
          .masonry-tall  { height: 300px; }
          .masonry-short { height: 210px; }
          .product-img-wrap { height: 200px; }
          .products-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
        }
      `}</style>
    </>
  );
}