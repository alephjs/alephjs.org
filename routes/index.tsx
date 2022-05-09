import { Head, useData } from "aleph/react";
import Button from "~/components/Button.tsx";
import Header from "~/components/Header.tsx";

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

type DataProps = {
  version: string;
};

export const data: Data<DataProps> = {
  cacheTtl: 60 * 60, // cache for 1 hour
  get: async (_req, ctx) => {
    const versions = await fetch(
      `https://cdn.deno.land/aleph/meta/versions.json`,
    ).then((res) => res.json());
    return ctx.json({ version: versions.latest });
  },
};

export default function Home() {
  const { data: { version } } = useData<DataProps>();

  return (
    <>
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
      <Header />
      <div
        className="w-screen flex items-center justify-center flex-col gap-2"
        style={{ height: `calc(100vh - 10rem)` }}
      >
        <h1 className="text-2xl md:!text-3xl lg:!text-4xl font-bold leading-7">
          The Fullstack Framework in Deno.
        </h1>
        <p className="text-gray-700 text-center text-base md:!text-lg lg:!text-xl w-15/16 !leading-none">
          <strong>Aleph.js</strong>{" "}
          gives you the best developer experience for building web applications.
        </p>
        <div className="flex gap-2 mt-3">
          <a href="/docs/get-started">
            <Button height={42} strong>
              Get Started{" "}
            </Button>
          </a>
          <a href="/docs">
            <Button height={42} strong>
              Documentation{" "}
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}
