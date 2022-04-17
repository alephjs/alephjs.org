import { Head, useData } from "aleph/react";
import { json } from "aleph/server";
import Button from "~/components/Button.tsx";

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

export default function Home() {
  return (
    <div className="index-page">
      <Head>
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
      </Head>
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
    </div>
  );
}
