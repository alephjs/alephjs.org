import Button from "~/components/Button.tsx";

const thisYear = (new Date()).getFullYear();
const title = "Aleph.js";
const about = "The Fullstack Framework in Deno.";
const keywords = [
  "aleph",
  "alephjs",
  "aleph.js",
  "react",
  "full-stack",
  "framework",
  "ssr",
  "ssg",
  "deno",
  "typescript",
  "out-of-the-box",
  "esm",
  "hmr",
  "fast-refresh",
  "tooling",
];
const ogImage = "https://alephjs.org/twitter_card.jpg";
const features = [
  { href: "/docs", title: "Zero Config" },
  { href: "/docs", title: "Typescript in Deno" },
  { href: "/docs/basic-features/import-from-npm", title: "ES Module Ready" },
  { href: "/docs/basic-features/import-maps", title: "Import Maps" },
  {
    href: "/docs/basic-features/hmr-with-fast-refresh",
    title: "HMR with Fast Refresh",
  },
  { href: "/docs/basic-features/routing", title: "File-system Routing" },
  { href: "/docs/basic-features/ssr-and-ssg", title: "SSR & SSG" },
  {
    href: "/docs/basic-features/built-in-css-support",
    title: "Built-in CSS Support",
  },
  { href: "/docs/advanced-features/jsx-magic", title: "JSX Magic" },
  { href: "/docs/advanced-features/using-plugins", title: "Plugin System" },
];

export default function Home() {
  return (
    <div className="index-page">
      <head>
        <title>{title}</title>
        <meta name="description" content={about} />
        <meta name="keywords" content={keywords.join(",")} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={about} />
        <meta name="og:image" content={ogImage} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={about} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@alephjs" />
      </head>
      <div className="w-screen h-screen flex items-center justify-center flex-col gap-2">
        <h1 className="text-4xl font-bold leading-7">
          The Fullstack Framework in Deno.
        </h1>
        <p className="text-center text-xl">
          <strong>Aleph.js</strong>{" "}
          gives you the best developer experience for building web applications.
        </p>
        <div className="flex gap-2 mt-3">
          <a href="/docs/get-started">
            <Button strong>Get Started</Button>
          </a>
          <a href="/docs">
            <Button strong>Documentation</Button>
          </a>
        </div>
      </div>
      <section>
        <h2>Features</h2>
        <ul>
          {features.map(({ href, title }) => (
            <li key={href + title}>
              <a href={href}>{title}</a>
            </li>
          ))}
        </ul>
      </section>
      <footer>
        <p>Copyright © {thisYear} postUI, Lab. All rights reserved.</p>
        <p>Built by Aleph.js</p>
        <p>(MIT License)</p>
      </footer>
    </div>
  );
}
