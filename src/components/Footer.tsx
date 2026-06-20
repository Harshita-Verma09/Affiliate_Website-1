// Footer component — edit your social channel URLs here
import { Link } from "@tanstack/react-router";

const INSTAGRAM_CHANNELS = [
  { name: "Fashion Deals Hub", url: "https://www.instagram.com/fashion_deal_hub09?igsh=MTZyZzN3MmpzYjF4ZA%3D%3D" },
  { name: "Home Beauty_Harshita", url: "https://www.instagram.com/home__beauty09/reels/" },
];

const WHATSAPP_CHANNELS = [
  { name: "WhatsApp Channel 1", url: "https://whatsapp.com/channel/0029VbCrcoB3rZZZrNQZHa0t" },
  { name: "WhatsApp Channel 2", url: "https://whatsapp.com/channel/0029Vb8c0jiGU3BJUsK8lj09" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <h4>Glam Affiliate</h4>
            <p style={{ maxWidth: 360 }}>
              Curated women's fashion picks from India & US — handpicked deals,
              styles & trends. Shop the look through our affiliate links.
            </p>
          </div>

          <div>
            <h4>Follow on Instagram</h4>
            <ul className="social-list">
              {INSTAGRAM_CHANNELS.map((c) => (
                <li key={c.url}>
                  <a className="social-link" href={c.url} target="_blank" rel="noopener noreferrer">
                    <span className="social-dot dot-ig" /> {c.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Join WhatsApp</h4>
            <ul className="social-list">
              {WHATSAPP_CHANNELS.map((c) => (
                <li key={c.url}>
                  <a className="social-link" href={c.url} target="_blank" rel="noopener noreferrer">
                    <span className="social-dot dot-wa" /> {c.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="copyright">
          © {new Date().getFullYear()} Glam Affiliate · <Link to="/">Home</Link> ·{" "}
          <Link to="/blog">Blog</Link>
          <br />
          <span style={{ fontSize: 11 }}>
            Affiliate disclosure: We may earn a commission on purchases made through links.
          </span>
        </div>
      </div>
    </footer>
  );
}
