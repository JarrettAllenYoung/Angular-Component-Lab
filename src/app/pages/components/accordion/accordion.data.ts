import type { FaqAccordionItem } from "../../../components/faq-accordion/faq-accordion.component";

/**
 * Editable content model (no HTML string soup).
 * We compile these blocks to `contentHtml` at the bottom.
 */

type Inline =
  | { kind: "text"; text: string }
  | { kind: "strong"; text: string }
  | { kind: "link"; text: string; href: string; target?: "_blank" | "_self" };

type Block =
  | { type: "p"; parts: Inline[] }
  | { type: "ul"; items: Inline[][] }
  | { type: "ol"; items: Inline[][] };

const t = (text: string): Inline => ({ kind: "text", text });
const b = (text: string): Inline => ({ kind: "strong", text });
const a = (text: string, href: string, target: "_blank" | "_self" = "_blank"): Inline => ({
  kind: "link",
  text,
  href,
  target,
});

const p = (...parts: Inline[]): Block => ({ type: "p", parts });
const pText = (text: string): Block => ({ type: "p", parts: [t(text)] });
const ul = (items: Inline[][]): Block => ({ type: "ul", items });
const ol = (items: Inline[][]): Block => ({ type: "ol", items });

const escapeHtml = (s: string) =>
  s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const escapeAttr = (s: string) => escapeHtml(s);

const renderInline = (part: Inline) => {
  if (part.kind === "text") return escapeHtml(part.text);
  if (part.kind === "strong") return `<strong>${escapeHtml(part.text)}</strong>`;
  // link
  const href = escapeAttr(part.href);
  const target = part.target ?? "_blank";
  const rel = target === "_blank" ? ` rel="noopener"` : "";
  return `<a href="${href}" target="${target}"${rel}>${escapeHtml(part.text)}</a>`;
};

const renderBlock = (block: Block) => {
  if (block.type === "p") {
    return `<p>${block.parts.map(renderInline).join("")}</p>`;
  }

  const tag = block.type === "ol" ? "ol" : "ul";

  return `<${tag}>${block.items
    .map((li) => `<li>${li.map(renderInline).join("")}</li>`)
    .join("")}</${tag}>`;
};

/**
 * ✅ Edit content here (no HTML needed).
 */
const ITEMS: { title: string; content: Block[] }[] = [
  {
    title: "What are the ingredients in Bio Complete 3?",
    content: [
      pText("Tributyrin (from Corebiome®), Acacia Gum, Sunfiber®, Bacillus coagulans, Bifidobacterium bifidum"),
      pText(
        "Other Ingredients: Hydroxypropyl Methylcellulose, Microcrystalline Cellulose, Magnesium Stearate, Silica, Dextrin"
      ),
    ],
  },
  {
    title: "How do I use Bio Complete 3?†*",
    content: [
      pText("Simply take 2 capsules per day with water, preferably before a meal."),
      pText(
        "We recommend taking it every morning before breakfast and again before dinner. This way, you feel the benefits 24/7."
      ),
      // Example with a link:
      p(
        t("Not what you're looking for? "),
        a("Click here", "https://gundrymd.com/health-goal/digestion-and-gut-health/"),
        t(" to find other supplements for gut health that may better suit your individual health needs.")
      ),
    ],
  },
  {
    title: "How does Bio Complete 3 work?†︎︎*",
    content: [
      p(
        t(
          `Bio Complete 3 works to support easier digestion, better weight management, more energy, and less unhealthy cravings by using what I call the "3-Pronged Defense" to gut health:`
        )
      ),
      pText(
        "Boost your probiotic levels, so you have an abundance of good gut bacteria. Boost your prebiotic levels, so your good gut bacteria have the proper fuel to thrive. Boost your postbiotic levels, so you can enjoy an ironclad gut lining (and help combat issues such as low energy and cravings for unhealthy food)."
      ),
    ],
  },
  {
    title: "Can I use Bio Complete 3 for a gut health cleanse?†︎︎*",
    content: [
      pText(
        "Some people consider Bio Complete 3 to be a powerful gut cleanse program to help restore their gut and support healthy digestion. Bio Complete 3’s proprietary formula contains quality prebiotics, probiotics, and postbiotics. Together, these essential components help support your digestive health and can help you achieve your gut health goals."
      ),
    ],
  },
  {
    title: "When can I expect results?†︎︎*",
    content: [
      pText(
        "Some users report feeling noticeably smoother digestion, less cravings, along with an increase in energy, vitality, and muscle strength in their first week of use. However, the most results were reported after consistent use over the course of 4 weeks and beyond."
      ),
    ],
  },
  {
    title: "Is Bio Complete 3 quality-checked?",
    content: [
      pText(
        "Bio Complete 3 contains only the best ingredients. The formula is tested for quality at an independent, 3rd-party laboratory. We recommend consulting with your own health care provider before beginning any new program."
      ),
    ],
  },
  {
    title: "What if it doesn't work for me?",
    content: [
      pText(
        "We understand that individual bodies can react differently to the very same compounds. Even though we think everyone can benefit from the powerful probiotics, prebiotics, and postbiotics in this formula, we are aware that results can vary. So, if you're unsatisfied with this product for any reason whatsoever after a full 90 days of use, we will return your purchase price, hassle-free."
      ),
    ],
  },
  {
    title: "Where can I buy Bio Complete 3?",
    content: [
      pText(
        "Bio Complete 3 is currently available for purchase on our official website and Amazon. If you see Bio Complete 3 on Walmart or other retailers — please, do NOT purchase it! Listings from these 3rd party websites can not be guaranteed as authentic and will not include our 90-day money-back guarantee."
      ),
    ],
  },

  /**
   * ✅ This one matches your screenshot structure:
   * intro paragraph + bullet list with bold bits + “Avoid Unauthorized Sellers” line + paragraphs
   */
  {
    title: "How Can I Ensure I’m Getting Authentic Gundry MD products?",
    content: [
      pText("To guarantee authenticity, purchase Gundry MD products only from trusted sources:"),

      ul([
        [b("Official Gundry MD Website"), t(" – The most reliable option.")],
        [
          b("Amazon"),
          t(" – Only if sold by the "),
          b("Gundry MD Store"),
          t(" and fulfilled by Amazon."),
        ],
      ]),

      p(b("Avoid Unauthorized Sellers")),

      pText(
        "For your safety, avoid purchasing from unverified marketplaces like Walmart, Etsy, or other third-party vendors. These listings may offer counterfeit products and do not include our 90-day money-back guarantee."
      ),

      pText(
        "Shopping directly ensures the quality, authenticity, and full benefits of Gundry MD products. If you have questions about a product or seller, contact our customer service team for support!"
      ),
    ],
  },
];

export const FAQ_ACCORDION_ITEMS: FaqAccordionItem[] = ITEMS.map((item) => ({
  title: item.title,
  contentHtml: item.content.map(renderBlock).join(""),
}));
