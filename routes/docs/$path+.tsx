import { Head, useData } from "aleph/react";
import { CSS, render } from "https://deno.land/x/gfm@0.1.20/mod.ts";
import { safeLoadFront } from "https://esm.sh/yaml-front-matter@4.1.1";

import "https://esm.sh/prismjs@1.27.0/components/prism-jsx?no-check";
import "https://esm.sh/prismjs@1.27.0/components/prism-bash?no-check";
import "https://esm.sh/prismjs@1.27.0/components/prism-typescript?no-check";

export const data: Data = {
  get: async (req, ctx) => {
    try {
      const { path } = ctx.params;
      const markdown = await Deno.readTextFile(`./docs/${path}.md`);
      const { __content, ...meta } = safeLoadFront(markdown);
      const html = render(__content);
      return ctx.json({ html, meta });
    } catch (error) {
      if (error instanceof Deno.errors.NotFound) {
        return ctx.json({ error: "not-found" });
      }
      return ctx.json({ error: error.message });
    }
  },
};

type DataProps = {
  html?: string;
  meta?: { title: string; authors: string[] };
  error?: string;
};

export default function Markdown() {
  const { data: { html, meta, error } } = useData<DataProps>();

  if (error) {
    if (error === "not-found") {
      return <div>Not Found</div>;
    }
    return <div>{error}</div>;
  }

  return (
    <>
      <Head>
        <title>{meta?.title}</title>
        <style>{CSS}</style>
      </Head>
      <div
        data-color-mode="light"
        data-light-theme="light"
        data-dark-theme="dark"
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: html! }}
      />
    </>
  );
}
