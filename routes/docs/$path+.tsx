import { useData } from "aleph/react";

const data: Data = {
  get: (req, ctx) => {
    const { path } = ctx.params;
    const markdown = "";
    // todo(pipiduck): read markdown file from $path
    return new Response(JSON.stringify({ markdown }), {
      headers: { "content-type": "application/json" },
    });
  },
};

export default function Markdown() {
  // todo(pipiduck): use `useData()` to get markdown content

  return (
    <div className="text-red">
      todo: docs
    </div>
  );
}
