import { Head, useData } from "aleph/react";

type DataProps = {
  html?: string;
  meta?: { title?: string; authors?: string[] };
  error?: string;
  status?: number;
};

export const data: Data<DataProps> = {
  get: async (req, ctx) => {
    try {
      const { path } = ctx.params;
      const { render, safeLoadFront } = await import("../../utils/gfm.ts");
      const markdown = await Deno.readTextFile(`./docs/${path}.md`);
      const { __content, ...meta } = safeLoadFront(markdown);
      const html = render(__content);
      return { html, meta };
    } catch (error) {
      if (error instanceof Deno.errors.NotFound) {
        return { error: "Not found", status: 404 };
      }
      return { error: error.message, status: 500 };
    }
  },
};

export default function Markdown() {
  const { data: { html, meta, error, status } } = useData<DataProps>();

  if (error) {
    if (status === 404) {
      return <div>Not Found</div>;
    }
    return <div>{error}</div>;
  }

  return (
    <>
      <Head>
        {meta?.title && <title>{meta.title}</title>}
        {meta?.title && <meta name="og:title" content={meta.title} />}
        {meta?.title && <meta name="twitter:title" content={meta.title} />}
      </Head>
      <div
        data-color-mode="light"
        data-light-theme="light"
        data-dark-theme="dark"
        className="overflow-hidden markdown-body"
        dangerouslySetInnerHTML={{ __html: html! }}
      />
    </>
  );
}
