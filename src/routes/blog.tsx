
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
      {
        property: "og:description",
        content: "Style guides & trends for the modern woman.",
      },
    ],
  }),
  component: Blog,
});

/* ============================================================
   BLOG POST CONTENT FORMAT
   Each block in the `content` array is one of:
     { type: "p",        text: "paragraph text" }
     { type: "h2",       text: "Section Heading" }
     { type: "h3",       text: "Sub-heading" }
     { type: "ul",       items: ["bullet one", "bullet two"] }
     { type: "ol",       items: ["step one", "step two"] }
     { type: "cta",      text: "Button label", href: "https://..." }
     { type: "products", items: [{ label: "Product Name", href: "https://..." }] }
============================================================ */
type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "cta"; text: string; href: string }
  | { type: "products"; items: { label: string; href: string }[] };

type Post = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  link: string;
  category: string;
  date: string;
  content: Block[];
};

/* ============================================================
   POSTS — edit content here
============================================================ */
const POSTS: Post[] = [
  {
    id: "1",
    title: "Dress Like a Boss: The Power Dressing Blueprint for Modern Women",
    excerpt:
      "A polished outfit can help you look professional, feel confident, and make a strong impact during meetings and presentations.",
    image:
      "https://res.cloudinary.com/dlwijjefj/image/upload/v1780158439/fashion/blog1.jpg",
    link: "https://amzn.to/3QbVQZ1",
    category: "Office Wear",
    date: "June 2026",
    content: [
      {
        type: "p",
        text: "First impressions matter, especially in the workplace. A polished outfit can help you look professional, feel confident, and make a strong impact during meetings and presentations.",
      },
      {
        type: "p",
        text: "The look above is a perfect example of modern office fashion. A tailored navy blazer paired with matching trousers and a classic white blouse creates a timeless business outfit that works in almost any professional setting.",
      },
      { type: "h2", text: "Why This Office Look Works" },
      {
        type: "ul",
        items: [
          "Professional and polished appearance",
          "Suitable for meetings and corporate environments",
          "Easy to style with different accessories",
          "Works year-round",
        ],
      },
      { type: "h2", text: "Essential Pieces to Recreate This Look" },
      { type: "h3", text: "1. Tailored Navy Blazer" },
      {
        type: "p",
        text: "A structured blazer instantly elevates your outfit and creates a professional appearance. Best for: Corporate professionals and office workers.",
      },
      { type: "h3", text: "2. White Button-Down Shirt" },
      {
        type: "p",
        text: "A white shirt remains one of the most versatile wardrobe staples for working women. Best for: Daily office wear.",
      },
      { type: "h3", text: "3. Slim-Fit Dress Pants" },
      {
        type: "p",
        text: "Comfortable yet professional, tailored trousers create a clean and sophisticated silhouette. Best for: Business casual and formal workplaces.",
      },
      { type: "h3", text: "4. Structured Tote Bag" },
      {
        type: "p",
        text: "A professional tote bag adds both style and functionality while carrying work essentials. Best for: Professionals who carry laptops and documents.",
      },
      { type: "h2", text: "Quick Style Tips" },
      {
        type: "ul",
        items: [
          "Pair navy and white for a timeless corporate look.",
          "Choose minimal jewelry for a polished appearance.",
          "Stick to neutral-colored shoes and handbags.",
          "Invest in quality basics that can be mixed and matched.",
        ],
      },
      { type: "h2", text: "Final Thoughts" },
      {
        type: "p",
        text: "Building a professional wardrobe doesn't require dozens of outfits. A few well-fitted essentials — a blazer, white shirt, tailored pants, and a structured handbag — can help you create countless office-ready looks.",
      },
      { type: "h2", text: "Recommended Products" },
      {
        type: "products",
        items: [
          { label: "Professional Blazers", href: "https://amzn.to/3QbVQZ1" },
          { label: "Office Tote Bags", href: "https://amzn.to/43aVAwi" },
          { label: "Dress Pants", href: "https://amzn.to/4dUqONg" },
          { label: "Classic Pumps", href: "https://amzn.to/4edT3Yl" },
        ],
      },
      {
        type: "cta",
        text: "Check Current Prices & Best-Selling Options →",
        href: "https://amzn.to/3QbVQZ1",
      },
    ],
  },
  {
    id: "2",
    title: "The Psychology of Power Dressing: Why Successful Women Dress Differently",
    excerpt:
      "Discover the most stylish floral maxi dresses, cozy cardigans, and accessories that are trending this season.",
    image:
      "https://res.cloudinary.com/dlwijjefj/image/upload/v1780149282/fashion/Amazon7.png",
    link: "https://amzn.to/4fPeqjV",
    category: "SUMMER WEAR",
    date: "May 2026",
    content: [
      {
        type: "p",
        text: "Floral maxi dresses continue to be one of the most loved fashion staples for women in 2026. Comfortable, feminine, and easy to style, they work perfectly for brunch dates, vacations, weekend outings, and casual events.",
      },
      {
        type: "p",
        text: "The look featured here combines a beautiful blue floral maxi dress with a cozy white cardigan, elegant ankle boots, and a structured handbag, creating a timeless outfit that feels both relaxed and polished.",
      },
      {
        type: "h2",
        text: "Fashion Pieces You'll Need"
      },
      {
        type: "ol",
        items: [
          "Floral maxi dress with soft blue prints",
          "Lightweight oversized white cardigan",
          "White ankle boots for a modern touch",
          "Structured white handbag for a polished finish",
          "Minimal jewelry for effortless elegance"
        ]
      },
      {
        type: "p",
        text: "One of the biggest reasons floral dresses remain popular is their versatility. Pair them with sandals for summer, ankle boots for fall, or a cardigan during cooler evenings. A single dress can create multiple stylish looks throughout the year.",
      },
      {
        type: "h2",
        text: "Styling Tips"
      },
      {
        type: "ol",
        items: [
          "Choose neutral accessories to balance floral prints.",
          "Layer with a cardigan for transitional weather.",
          "Wear ankle boots for a chic, fashion-forward look.",
          "Keep accessories minimal and elegant.",
          "Select lightweight fabrics for maximum comfort."
        ]
      },
      {
        type: "p",
        text: "If you're updating your wardrobe this season, investing in a high-quality floral maxi dress is one of the easiest ways to create stylish outfits with minimal effort.",
      },

      {
        type: "products",
        items: [
          { label: "Floral maxi dress with soft blue prints", href: "https://amzn.to/4fPeqjV" },
          { label: "Wear ankle boots for a chic, fashion-forward look.", href: "https://amzn.to/4vjV4Ie" },
          { label: "Long Sleeve Shrug Sweater", href: "https://amzn.to/3PVnfyi" },
          { label: "Small Quilted Crossbody Bag, Trendy Designer Mini Shoulder Bag", href: "https://amzn.to/4dCXSuc" },
        ],
      },
      {
        type: "cta",
        text: "Shop Floral Dresses →",
        href: "https://amzn.to/4fPeqjV",
      },
    ],
  },
  {
    id: "3",
    title: "The Executive Woman's Style Guide: Dress Sharp, Lead Strong",
    excerpt:
      "One shrug, five outfits — discover how this floral mesh cardigan instantly transforms any look.",
    image:
      "https://res.cloudinary.com/dlwijjefj/image/upload/v1780375418/fashion/blog2a.png",
    link: "https://amzn.to/4dVvZMV",
    category: "STYLE SECRETS",
    date: "Jun 2026",
    content: [
      {
        type: "p",
        text: "How many times have you stared at your closet before a party, wedding, or dinner date — wondering how to give your simple outfit a glamorous upgrade? The right outerwear can completely change your fashion game. Today, we are sharing a fashion secret that deserves a permanent spot in every woman's wardrobe.",
      },
      {
        type: "p",
        text: "We are talking about the OYOANGLE Women's Floral Embroidered Open Front Crop Jacket Long Sleeve Mesh Summer Cardigan Top. This unique, eye-catching piece instantly elevates even the simplest outfit into a premium designer look — without breaking the bank.",
      },
      { type: "h2", text: "1. Gorgeous Floral Embroidery & Premium Mesh Design" },
      {
        type: "p",
        text: "The standout feature of this cardigan is its exquisite floral embroidery. Vibrant red and yellow flowers are delicately embroidered onto sheer black mesh fabric, giving this jacket a rich, high-end look that rivals pieces costing three times the price. Because the material is sheer, it highlights your silhouette with absolute grace rather than hiding it.",
      },
      { type: "h2", text: "2. Open Front & Cropped Fit: A Modern Twist" },
      {
        type: "p",
        text: "Designed with a stylish open-front silhouette, this jacket eliminates the hassle of buttons or zippers. The cropped length hits perfectly at the waistline, offering a clean, sharp, and trendy look. Paired with elegant long sleeves, it strikes the perfect balance between sophisticated coverage and modern style.",
      },
      { type: "h2", text: "3. How to Style It" },
      {
        type: "ol",
        items: [
          "Evening Dresses — layer over a sleeveless black or white slip dress for an instant elegant look.",
          "Crop Top & Jeans — style over a white crop top and high-waisted blue jeans for a chic day-out vibe.",
          "Indo-Western Fusion — pair over a solid-coloured saree blouse or kurta for a unique ethnic-modern statement.",
          "Party Night Out — throw over a sequin skirt and bralette for a sophisticated evening look.",
          "Beach Cover-Up — lightweight enough to wear over a bikini top and shorts on a resort day.",
        ],
      },
      { type: "h2", text: "4. Summer-Friendly & Lightweight Fabric" },
      {
        type: "p",
        text: "This OYOANGLE summer cardigan is crafted from ultra-lightweight and breathable mesh fabric. It keeps you cool, comfortable, and completely unrestricted — so you can enjoy your event to the fullest without sacrificing style.",
      },
      { type: "h2", text: "Final Verdict" },
      {
        type: "p",
        text: "Absolutely yes. Finding a budget-friendly, highly versatile fashion piece that can be styled in over five different ways is a rare find. The OYOANGLE Floral Mesh Cardigan instantly injects confidence, texture, and glamour into your overall look. If you have been looking for that one piece that makes every outfit feel complete — this is it.",
      },
      {
        type: "cta",
        text: "Buy OYOANGLE Cardigan on Amazon →",
        href: "https://amzn.to/4dVvZMV",
      },
    ],
  },
  {
    id: "4",
    title: "From Professional to Unstoppable: The Power Dressing Guide Every Woman Needs",
    excerpt:
      "The chocolate brown biker jacket is 2026's most wanted piece — here's how to wear it and where to get it.",
    image: "https://res.cloudinary.com/dlwijjefj/image/upload/v1780377902/fashion/blog3a.png",
    link: "https://amzn.to/3RKK886",
    category: "Style Guide",
    date: "Jun 2026",
    content: [
      {
        type: "p",
        text: "There are outfits you wear. And then there are outfits that wear the room. A rich chocolate-brown leather biker jacket. A fitted black turtleneck. High-waisted blue jeans. Knee-high brown boots. This is not just a fashion look — this is a statement.",
      },
      { type: "h2", text: "Why Brown Leather is 2026's Most Wanted" },
      {
        type: "p",
        text: "Everyone owns a black leather jacket. But the women who actually turn heads chose brown. The deep chocolate tone is warmer, richer, and more versatile than black. It pairs effortlessly with blues, creams, whites, and olive greens — and it photographs beautifully in every light.",
      },

      { type: "h2", text: "4 Ways to Style This Jacket" },
      {
        type: "ol",
        items: [
          "Weekend Brunch — wide-leg cream trousers and white sneakers.",
          "Evening Out — over a satin slip dress with block-heel mules.",
          "Office Ready — over a white button-down with tailored black trousers.",
          "Airport Style — jogger pants, white tee, chunky sneakers.",
        ],
      },
      { type: "h2", text: "Our Verdict" },
      {
        type: "products",
        items: [
          { label: "Leather Jacket Faux Cropped Coat Cute Short Zip", href: "https://amzn.to/4fg5pjR" },
          { label: "Neck Tops for Women Sleeveless Slim Fit Basic Casual T Shirts ", href: "https://amzn.to/43bkagB" },
          { label: "High-waisted medium-wash blue skinny jeans", href: "https://amzn.to/435LTiP" },
          { label: "Boots Chunky Block Heel Pointed Toe Zipper Booties", href: "https://amzn.to/4dKn7uJ" },
        ],
      },
      {
        type: "cta",
        text: "Get This Look on Amazon →",
        href: "https://amzn.to/4fg5pjR",
      },
    ],
  },
  {
    id: "5",
    title: "Power Dressing Guide: How to Rule the Corporate World with Style",
    excerpt:
      "First impression is the last impression. Here's your ultimate roadmap to dressing like the leader you are.",
    image: "https://res.cloudinary.com/dlwijjefj/image/upload/v1780467773/fashion/blog4.jpg",
    link: "https://amzn.to/3RKK886",
    category: "Career Fashion",
    date: "Jun 2026",
    content: [
      {
        type: "p",
        text: "You've definitely heard the classic saying — 'First impression is the last impression.' The moment you step into a business meeting, a corporate boardroom, or a networking event, your outfit speaks for you before you even say a word. In today's fast-paced professional landscape, fashion isn't just about looking good; it is a powerful extension of your competence, ambition, and confidence.",
      },
      {
        type: "p",
        text: "If you are ready to climb the corporate ladder and ensure you are taken seriously the moment you walk into a room, this Power Dressing Guide is your ultimate roadmap.",
      },
      { type: "h2", text: "1. The Power of a Tailored Pantsuit (Classic Charcoal Grey)" },
      {
        type: "p",
        text: "When it comes to executive style, a pantsuit is the undisputed gold standard. But if you want to break away from standard black and try something ultra-premium, Charcoal Grey or Deep Slate Grey is the absolute best choice.",
      },
      {
        type: "p",
        text: "The perfect fit is everything. A suit should never be too tight or overly slouchy. The shoulder lines must align perfectly with your frame, and the trouser length should be tailored to cleanly skim your footwear. Pairing a structured grey blazer with a deep black satin shirt or a premium silk blouse creates a striking, high-contrast look that feels deeply sophisticated yet undeniably powerful.",
      },
      {
        type: "p",
        text: "Pro Tip: If you prefer wearing your blazer unbuttoned, always loop a sleek premium leather belt through your trousers. This cinches your waistline and provides a clean, structured silhouette — crucial for high-end formal styling.",
      },
      { type: "h2", text: "2. Accessories That Command Respect (Less is More)" },
      {
        type: "p",
        text: "The golden rule of power dressing is minimalism. You don't need to wear a lot of pieces; instead, focus on investing in a few high-quality items that exude luxury and class.",
      },
      {
        type: "ol",
        items: [
          "The Luxury Handbag — A structured black leather tote bag anchors your entire look and instantly elevates your professional aesthetic.",
          "Sunglasses — A pair of premium dark sunglasses in a classic square or soft cat-eye frame adds an elite touch when walking through corporate districts.",
          "Subtle Jewelry — A delicate metallic chain bracelet, elegant stud earrings, or a premium understated watch. Anything more becomes a distraction.",
        ],
      },
      { type: "h2", text: "3. Footwear: Walk with Authority" },
      {
        type: "p",
        text: "Your confidence begins with your posture, and your posture begins with your footwear. Classic black pointed-toe stiletto heels are the perfect match for a sharp pantsuit — they provide elegant height and automatically encourage a confident, upright posture. If you prefer comfort without compromising sophistication, premium pointed-toe formal flats or sleek block heels work exceptionally well too.",
      },
      { type: "h2", text: "4. Grooming & Body Language: The Final Polish" },
      {
        type: "p",
        text: "Even the finest designer suit will fall flat without the right presentation and posture. Keep a clean low bun or perfectly styled straight open hair. For makeup, stay polished and neutral — nude lip shades, well-defined brows, and minimal eye makeup. And always walk with your shoulders rolled back, maintain direct eye contact, and greet people with a firm, confident handshake.",
      },
      { type: "h2", text: "Shop the Power Dressing Look" },
      {
        type: "products",
        items: [
          { label: "Women's Fall Business Pant Suit Office Work Outfits", href: "https://amzn.to/4dLgiZR" },
          { label: "Button Shirts for Women Solid Formal Office", href: "https://amzn.to/4fW0xAv" },
          { label: " Laptop Tote Bag for Women, Leather Work Bag Waterproof", href: "https://amzn.to/43Q8HDf" },
          { label: "Black Sunglasses for Women Simple Trendy Style", href: "https://amzn.to/4x6vQ1S" },
          { label: "Women Belts For Jeans Dresses Pants Ladies Leather Waist Belt", href: "https://amzn.to/43czSIg" },
        ],
      },
      {
        type: "cta",
        text: "Shop the Full Look on Amazon →",
        href: "https://amzn.to/4dLgiZR",
      },
    ],
  },
  {
    id: "6",
    title: "Power Dressing for Women: Why Minimalism Is the Secret to a Strong Professional Presence",
    excerpt:
      "Discover how minimalist power dressing helps women project confidence, authority, and professionalism in every corporate setting.",
    image: "https://res.cloudinary.com/dlwijjefj/image/upload/v1780557208/fashion/blog5a.jpg",
    link: "https://amzn.to/4dQDu9a",
    category: "Power Dressing",
    date: "Jun 2026",
    content: [
      {
        type: "p",
        text: "\"In today's professional world, your appearance speaks before you do — and minimalism is the most powerful language it can speak.\"",
      },
      {
        type: "p",
        text: "Whether you are stepping into a high-stakes boardroom meeting, leading a team presentation, or attending a professional networking event, power dressing for women is one of the most underrated career tools available. Your clothing communicates confidence, competence, and credibility — often before you have spoken a single word.",
      },
      {
        type: "p",
        text: "In a world flooded with fast fashion and constant trend cycles, the professionals who make the strongest impression are not the ones wearing the loudest outfits. They are the ones who have mastered the art of minimalist professional style — intentional, refined, and quietly authoritative.",
      },
      {
        type: "h2",
        text: "What Is Power Dressing for Women?",
      },
      {
        type: "p",
        text: "Power dressing is the practice of choosing clothing that visually projects confidence, authority, and professionalism. It is not about wearing the most expensive designer brands or chasing every seasonal trend. It is about creating a polished, intentional professional appearance that aligns with your goals and commands respect in any room you enter.",
      },
      {
        type: "p",
        text: "A well-fitted blazer, perfectly tailored trousers, a curated neutral color palette, and clean minimalist accessories consistently make a far stronger statement than overly complicated, trend-driven outfits. This is the foundation of modern corporate fashion for women.",
      },
      {
        type: "h2",
        text: "Why Minimalism Is the Secret Weapon of Professional Style",
      },
      {
        type: "p",
        text: "Minimalism in fashion is about removing everything that distracts and keeping only what elevates. A clean, sophisticated look shifts all focus onto your personality, intelligence, and natural confidence. It creates a strong personal brand: a visual identity that is immediately recognizable and consistently impressive.",
      },
      {
        type: "p",
        text: "Research in professional psychology consistently shows that people who dress in a neat, minimal, and intentional way are perceived as more competent, trustworthy, and leadership-ready. This is the real power of minimalist work wardrobe choices.",
      },
      {
        type: "h2",
        text: "Benefits of Minimalist Power Dressing",
      },
      {
        type: "ol",
        items: [
          "A timeless and elegant professional appearance that never dates",
          "Greater personal confidence in high-stakes professional settings",
          "Faster and easier wardrobe decisions every morning",
          "A stronger and more recognizable personal brand",
          "A polished, credible, and organized visual image",
          "Reduced decision fatigue and more mental energy for important work"
        ],
      },
      {
        type: "h2",
        text: "The 6 Essential Elements of a Minimalist Power Wardrobe",
      },
      {
        type: "h3",
        text: "01. Neutral Color Palette",
      },
      {
        type: "p",
        text: "Black, charcoal grey, navy blue, crisp white, and warm beige are timeless shades that communicate sophistication and authority in every professional environment.",
      },
      {
        type: "h3",
        text: "02. Tailored Fit",
      },
      {
        type: "p",
        text: "The single biggest upgrade you can make to your wardrobe. Even an affordable suit appears premium when it fits perfectly. Proper shoulder alignment, clean trouser length, and waist definition create a polished silhouette.",
      },
      {
        type: "h3",
        text: "03. Quality Over Quantity",
      },
      {
        type: "p",
        text: "Five exceptional pieces are worth more than twenty average ones. Invest in wardrobe staples such as a structured blazer, tailored trousers, and elegant blouses that can be mixed and matched effortlessly.",
      },
      {
        type: "h3",
        text: "04. Elegant Accessories",
      },
      {
        type: "p",
        text: "A structured leather tote, minimalist watch, delicate bracelet, or subtle earrings can elevate your outfit without overwhelming it. In professional style, less is always more.",
      },
      {
        type: "h3",
        text: "05. Confidence",
      },
      {
        type: "p",
        text: "The most powerful element of any outfit is the confidence with which you wear it. Strong posture, direct eye contact, and self-assurance create a lasting impression no clothing item can replace.",
      },
      {
        type: "h3",
        text: "06. Intentional Footwear",
      },
      {
        type: "p",
        text: "Classic pointed-toe heels, sleek block heels, or premium leather flats complete the visual line of your outfit while maintaining both professionalism and comfort.",
      },
      {
        type: "h2",
        text: "Building a Strong Professional Image Through Minimalist Style",
      },
      {
        type: "p",
        text: "Your clothing is a form of non-verbal communication. Every outfit choice sends a message about your professionalism, attention to detail, and personal standards. A minimalist wardrobe creates a consistent, trustworthy image that leaves a lasting impression in interviews, client meetings, and leadership roles.",
      },
      {
        type: "p",
        text: "The professionals who stand out in competitive corporate environments are rarely those making the loudest fashion statements. They are the ones whose appearance is always sharp, intentional, and quietly confident. In a world of visual noise, simplicity remains the ultimate sophistication.",
      },
      {
        type: "h2",
        text: "Recommended Power Dressing Essentials",
      },
      {
        type: "products",
        items: [
          {
            label: "Women's Fall Business Pant Suit Office Work Outfits",
            href: "https://amzn.to/4dQDu9a"
          },
          {
            label: "Button Shirts for Women Solid Formal Office",
            href: "https://amzn.to/43ONwS6"
          },
          {
            label: "Laptop Tote Bag for Women, Leather Work Bag Waterproof",
            href: "https://amzn.to/43Q8HDf"
          },
          {
            label: "Black Sunglasses for Women Simple Trendy Style",
            href: "https://amzn.to/3S1tDVi"
          },
          {
            label: "Women Belts For Jeans Dresses Pants Ladies Leather Waist Belt",
            href: "https://amzn.to/43aNSCw"
          }
        ],
      },
      {
        type: "cta",
        text: "Shop the Power Dressing Collection on Amazon →",
        href: "https://amzn.to/4dQDu9a",
      },
    ],
  }








];

/* ============================================================
   BLOCK RENDERER — renders each content block
============================================================ */
function RenderBlock({ block }: { block: Block }) {
  const headingBase: React.CSSProperties = {
    fontWeight: 600,
    color: "var(--color-text-primary, #111)",
    margin: "1.75rem 0 0.6rem",
    lineHeight: 1.3,
  };

  switch (block.type) {
    case "p":
      return (
        <p style={{ margin: "0 0 1.1rem", fontSize: 16, lineHeight: 1.85, color: "var(--color-text-primary, #333)" }}>
          {block.text}
        </p>
      );

    case "h2":
      return (
        <h2 style={{ ...headingBase, fontSize: 20, borderBottom: "1px solid var(--color-border-tertiary, #eee)", paddingBottom: "0.4rem" }}>
          {block.text}
        </h2>
      );

    case "h3":
      return (
        <h3 style={{ ...headingBase, fontSize: 16 }}>
          {block.text}
        </h3>
      );

    case "ul":
      return (
        <ul style={{ margin: "0 0 1.1rem", paddingLeft: "1.4rem" }}>
          {block.items.map((item, i) => (
            <li key={i} style={{ fontSize: 15, lineHeight: 1.8, color: "var(--color-text-primary, #333)", marginBottom: 4 }}>
              {item}
            </li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol style={{ margin: "0 0 1.1rem", paddingLeft: "1.4rem" }}>
          {block.items.map((item, i) => (
            <li key={i} style={{ fontSize: 15, lineHeight: 1.8, color: "var(--color-text-primary, #333)", marginBottom: 6 }}>
              {item}
            </li>
          ))}
        </ol>
      );

    case "products":
      return (
        <ul style={{ margin: "0 0 1.1rem", paddingLeft: 0, listStyle: "none" }}>
          {block.items.map((item, i) => (
            <li key={i} style={{ marginBottom: 8 }}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer sponsored"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 15,
                  color: "var(--color-text-primary, #111)",
                  textDecoration: "none",
                  padding: "7px 14px",
                  borderRadius: 8,
                  border: "0.5px solid var(--color-border-secondary, #ddd)",
                  fontFamily: "inherit",
                  background: "var(--color-background-secondary, #fafafa)",
                }}
              >
                🛍️ {item.label} →
              </a>
            </li>
          ))}
        </ul>
      );

    case "cta":
      return (
        <div style={{ margin: "2rem 0 1rem" }}>
          <a
            href={block.href}
            target="_blank"
            rel="noopener noreferrer sponsored"
            style={{
              display: "inline-block",
              padding: "11px 26px",
              borderRadius: 8,
              background: "#111",
              color: "#fff",
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
              fontFamily: "inherit",
            }}
          >
            {block.text}
          </a>
        </div>
      );

    default:
      return null;
  }
}

/* ============================================================
   FULL POST VIEW
============================================================ */
function PostView({ post, onBack }: { post: Post; onBack: () => void }) {
  return (
    <main style={{ maxWidth: 740, margin: "0 auto", padding: "2rem 1.25rem 5rem" }}>
      {/* Back — top */}
      <button
        onClick={onBack}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: 14,
          color: "var(--color-text-secondary, #666)",
          padding: "0 0 1.5rem",
          fontFamily: "inherit",
        }}
      >
        ← Back to Blog
      </button>

      {/* Meta */}
      <p style={{ fontSize: 13, color: "var(--color-text-secondary, #888)", margin: "0 0 0.5rem" }}>
        {post.category} · {post.date}
      </p>

      {/* Title */}
      <h1
        style={{
          fontSize: "clamp(1.5rem, 4vw, 2rem)",
          fontWeight: 700,
          lineHeight: 1.25,
          margin: "0 0 1.5rem",
          color: "var(--color-text-primary, #111)",
        }}
      >
        {post.title}
      </h1>

      {/* Hero image */}
      <img
        src={post.image}
        alt={post.title}
        loading="eager"
        decoding="async"
        style={{
          width: "100%",
          maxHeight: 940,
          objectFit: "cover",
          borderRadius: 12,
          display: "block",
          marginBottom: "2rem",
        }}
      />

      {/* Structured content */}
      <div>
        {post.content.map((block, i) => (
          <RenderBlock key={i} block={block} />
        ))}
      </div>

      {/* Back — bottom */}
      <button
        onClick={onBack}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          marginTop: "2.5rem",
          background: "none",
          border: "0.5px solid var(--color-border-secondary, #ccc)",
          borderRadius: 8,
          cursor: "pointer",
          fontSize: 14,
          color: "var(--color-text-secondary, #666)",
          padding: "8px 18px",
          fontFamily: "inherit",
        }}
      >
        ← Back to Blog
      </button>
    </main>
  );
}

/* ============================================================
   BLOG GRID VIEW
============================================================ */
function Blog() {
  const [activePost, setActivePost] = useState<Post | null>(null);

  const handleOpen = (post: Post) => {
    setActivePost(post);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setActivePost(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Nav />

      {activePost ? (
        <PostView post={activePost} onBack={handleBack} />
      ) : (
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
                    width={500}
                    height={1200}
                  />
                  <div className="blog-body">
                    <span className="blog-meta">
                      {p.category} · {p.date}
                    </span>
                    <h2 className="blog-title">{p.title}</h2>
                    <p className="blog-excerpt">{p.excerpt}</p>
                    <button
                      className="btn btn-outline"
                      onClick={() => handleOpen(p)}
                      style={{ cursor: "pointer", fontFamily: "inherit" }}
                    >
                      Read More →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>
      )}

      <Footer />
    </>
  );
}