// Imports route modules for serverless env that doesn't support the dynamic import.
// This module will be updated automaticlly in develoment mode, do NOT edit it manually.
// deno-fmt-ignore-file
// deno-lint-ignore-file
// @ts-nocheck
var Ie=Object.defineProperty;var u=(n,e)=>{for(var de in e)Ie(n,de,{get:e[de],enumerable:!0})};import*as en from"./index.tsx";import*as sn from"./docs.tsx";var U={};u(U,{default:()=>He});import{Fragment as qe,jsx as N,jsxs as O}from"https://esm.sh/react@18.2.0/jsx-runtime";function oe(n){let e=Object.assign({h1:"h1",p:"p",a:"a",strong:"strong",ul:"ul",li:"li",h2:"h2",code:"code",pre:"pre",span:"span"},n.components);return O(qe,{children:[N(e.h1,{children:"Browser Support"}),`
`,O(e.p,{children:[`Aleph.js requires a modern browser to support
`,N(e.a,{href:"https://caniuse.com/#feat=es6-module",children:"native ES module imports"})," and ",N(e.strong,{children:`dynamic
imports`}),":"]}),`
`,O(e.ul,{children:[`
`,N(e.li,{children:"Chrome >= 61"}),`
`,N(e.li,{children:"Edge >= 16"}),`
`,N(e.li,{children:"Firefox >= 60"}),`
`,N(e.li,{children:"Safari >= 11"}),`
`,N(e.li,{children:"Opera >= 48"}),`
`]}),`
`,N(e.h2,{children:"Build Target"}),`
`,O(e.p,{children:["Aleph.js uses ",N(e.strong,{children:"esbuild"}),` to bundle modules at optimization time for production.
You can set the `,N(e.code,{children:"optimization.buildTarget"})," in the server config."]}),`
`,N(e.pre,{children:O(e.code,{className:"hljs language-js",children:[N(e.span,{className:"hljs-keyword",children:"import"})," { serve } ",N(e.span,{className:"hljs-keyword",children:"from"})," ",N(e.span,{className:"hljs-string",children:'"aleph/server"'}),`;

`,N(e.span,{className:"hljs-title function_",children:"serve"}),`({
  `,N(e.span,{className:"hljs-attr",children:"optimization"}),`: {
    `,N(e.span,{className:"hljs-attr",children:"buildTarget"}),": ",N(e.span,{className:"hljs-string",children:'"es2020"'}),`,
  },
});
`]})})]})}function $e(n={}){let{wrapper:e}=n.components||{};return e?N(e,Object.assign({},n,{children:N(oe,n)})):oe(n)}var He=$e;var E={};u(E,{default:()=>Ee});import{Fragment as Pe,jsx as k,jsxs as S}from"https://esm.sh/react@18.2.0/jsx-runtime";function pe(n){let e=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h2:"h2",a:"a",blockquote:"blockquote"},n.components);return S(Pe,{children:[k(e.h1,{children:"Deployment on your own host with Deno CLI"}),`
`,S(e.p,{children:["You can run your app in production mode by ",k(e.code,{children:"deno"})," CLI."]}),`
`,k(e.pre,{children:k(e.code,{className:"hljs language-bash",children:`deno run --allow-network --allow-env --allow-read --allow-write server.ts
`})}),`
`,k(e.h2,{children:"Deploy on Deno Deploy"}),`
`,S(e.p,{children:["To deploy your app to ",k(e.a,{href:"https://deno.com/deploy",children:"Deno Deploy"}),", please push your app to ",k(e.a,{href:"https://github.com",children:"Github"})," and create a new project on ",k(e.a,{href:"https://dash.deno.com/new",children:"Deno Deploy"}),"."]}),`
`,S(e.p,{children:["Then link to the Repo and set the entrypoint to ",k(e.code,{children:"server.ts"})]}),`
`,S(e.blockquote,{children:[`
`,S(e.p,{children:["See the ",k(e.a,{href:"https://aleph-hello.deno.dev/",children:"hello-world"})," example on ",k(e.a,{href:"https://deno.com/deploy",children:"Deno Deploy"}),"."]}),`
`]})]})}function Ue(n={}){let{wrapper:e}=n.components||{};return e?k(e,Object.assign({},n,{children:k(pe,n)})):pe(n)}var Ee=Ue;var W={};u(W,{default:()=>Ge});import{Fragment as We,jsx as c,jsxs as x}from"https://esm.sh/react@18.2.0/jsx-runtime";import{Link as X}from"aleph/react";function me(n){let e=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a",blockquote:"blockquote",em:"em",code:"code",h2:"h2",ul:"ul",li:"li"},n.components);return x(We,{children:[c(e.h1,{children:"Aleph.js"}),`
`,x(e.p,{children:[c(e.strong,{children:"Aleph.js"})," (or ",c(e.strong,{children:"Aleph"})," or ",c(e.strong,{children:"\u05D0"})," or ",c(e.strong,{children:"\u963F\u83B1\u592B"}),", ",c("samp",{children:"\u02C8\u0251\u02D0l\u025Bf"}),`) is a
fullstack framework in `,c(e.a,{href:"https://deno.land",children:"Deno"}),". Inspired by ",c(e.a,{href:"https://nextjs.org",children:"Next.js"}),", ",c(e.a,{href:"https://remix.run",children:"Remix"})," and ",c(e.a,{href:"https://vitejs.dev",children:"Vite"}),"."]}),`
`,x(e.blockquote,{children:[`
`,x(e.p,{children:["The name is taken from the book ",c(e.a,{href:"http://phinnweb.org/links/literature/borges/aleph.html",children:c(e.em,{children:"The Aleph"})})," by ",c(e.strong,{children:"Jorge Luis Borges"}),"."]}),`
`]}),`
`,x(e.p,{children:["Aleph.js is modern framework that doesn't need ",c(e.strong,{children:"webpack"}),` or other bundler
since it uses the `,c(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",children:"ES Module"}),` syntax during development. Every module only needs
to be compiled once, when a module changes, Aleph.js just needs to re-compile
that single module. There is no time wasted `,c(e.em,{children:"re-bundling"}),` everytime a change is
made. This, along with Hot Module Replacement (`,c(e.strong,{children:"HMR"}),") and ",c(e.strong,{children:"Fast Refresh"}),`,
leads to instant updates in the browser.`]}),`
`,x(e.p,{children:["Aleph.js uses modern tools to build your app. It transpiles code using ",c(e.a,{href:"https://swc.rs",children:"swc"}),` in
WASM with high performance, and bundles modules with `,c(e.a,{href:"https://github.com/evanw/esbuild",children:"esbuild"}),` at optimization
time extremely fast.`]}),`
`,x(e.p,{children:["Aleph.js works on top of ",c(e.strong,{children:"Deno"}),", a ",c(e.em,{children:"simple"}),", ",c(e.em,{children:"modern"})," and ",c(e.em,{children:"secure"}),` runtime for
JavaScript and TypeScript. All dependencies are imported using URLs, and managed
by Deno cache system. No `,c(e.code,{children:"package.json"})," and ",c(e.code,{children:"node_modules"})," directory needed."]}),`
`,c(e.h2,{children:"Features"}),`
`,x(e.ul,{children:[`
`,c(e.li,{children:"Zero Config"}),`
`,c(e.li,{children:"No build step"}),`
`,c(e.li,{children:"File-system Routing"}),`
`,c(e.li,{children:"Just-in-time Server-side Rendering(SSR)"}),`
`,c(e.li,{children:"Streaming SSR"}),`
`,c(e.li,{children:"Support Typescript/JSX in Deno out of the box"}),`
`,x(e.li,{children:["Built-in ",c(e.a,{href:"https://github.com/unocss/unocss",children:"Unocss"})," (Automatic CSS)"]}),`
`,c(e.li,{children:"Import Maps"}),`
`,c(e.li,{children:"Hot Module Replacement (or HMR)"}),`
`,c(e.li,{children:"Support Middware"}),`
`,c(e.li,{children:"Custom Module Loader like MDX"}),`
`]}),`
`,c(e.h2,{children:"Supported Frameworks"}),`
`,x(e.ul,{children:[`
`,x(e.li,{children:[c(e.a,{href:"https://reactjs.org",children:"React"})," (",c(X,{to:"/docs/framework/react",children:"docs"}),", ",c(e.a,{href:"https://github.com/alephjs/aleph.js/tree/main/examples/react-app",children:"example"}),")"]}),`
`,x(e.li,{children:[c(e.a,{href:"https://reactjs.org",children:"React"})," with ",c(e.a,{href:"https://mdxjs.com",children:"MDX"})," (",c(X,{to:"/docs/framework/react-mdx",children:"docs"}),", ",c(e.a,{href:"https://github.com/alephjs/aleph.js/tree/main/examples/react-mdx-app",children:"example"}),")"]}),`
`,x(e.li,{children:[c(e.a,{href:"https://vuejs.org",children:"Vue"})," (",c(X,{to:"/docs/framework/vue",children:"docs"}),", ",c(e.a,{href:"https://github.com/alephjs/aleph.js/tree/main/examples/vue-app",children:"example"}),")"]}),`
`,x(e.li,{children:[c(e.a,{href:"https://www.solidjs.com/",children:"SolidJS"})," (",c(X,{to:"/docs/framework/solid",children:"docs"}),", ",c(e.a,{href:"https://github.com/alephjs/aleph.js/tree/main/examples/solid-app",children:"example"}),`)
`,c(e.em,{children:"Experimental"})]}),`
`,x(e.li,{children:[c(e.a,{href:"https://yew.rs",children:"Yew"})," (",c(X,{to:"/docs/framework/yew",children:"docs"}),", ",c(e.a,{href:"https://github.com/alephjs/aleph.js/tree/main/examples/yew-app",children:"example"}),") ",c(e.em,{children:"In Rust"})]}),`
`]}),`
`,x(e.p,{children:["Plan to support: ",c(e.a,{href:"https://svelte.dev/",children:"Svelte"}),", ",c(e.a,{href:"https://lit.dev/",children:"Lit"}),", etc.."]}),`
`,c(e.h2,{children:"Status"}),`
`,x(e.p,{children:["Currently in ",c(e.strong,{children:"beta"}),", not ready for production."]}),`
`,c(e.h2,{children:"License"}),`
`,x(e.p,{children:["Under the ",c(e.a,{href:"https://opensource.org/licenses/MIT",children:"MIT"})," License."]})]})}function Je(n={}){let{wrapper:e}=n.components||{};return e?c(e,Object.assign({},n,{children:c(me,n)})):me(n)}var Ge=Je;var J={};u(J,{default:()=>ze});import{Fragment as Ye,jsx as b,jsxs as D}from"https://esm.sh/react@18.2.0/jsx-runtime";function je(n){let e=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a",h2:"h2",pre:"pre",code:"code",span:"span"},n.components);return D(Ye,{children:[b(e.h1,{children:"Get Started!"}),`
`,D(e.p,{children:["Welcome to use ",b(e.strong,{children:"Aleph.js"}),"!"]}),`
`,D(e.p,{children:["If you are new to Aleph.js you should check out the ",b(e.a,{href:"/docs/",children:"About"})," page."]}),`
`,b(e.h2,{children:"Usage"}),`
`,b(e.p,{children:"Create a new app:"}),`
`,b(e.pre,{children:D(e.code,{className:"hljs language-bash",children:[`deno run -A -r https://alephjs.org/init.ts
`,b(e.span,{className:"hljs-built_in",children:"cd"}),` my-app
`]})}),`
`,D(e.p,{children:["Start the app in ",b(e.code,{children:"development"})," mode:"]}),`
`,b(e.pre,{children:b(e.code,{className:"hljs language-bash",children:`deno task dev
`})}),`
`,D(e.p,{children:["Start the app in ",b(e.code,{children:"production"})," mode:"]}),`
`,b(e.pre,{children:b(e.code,{className:"hljs language-bash",children:`deno task start
`})}),`
`,b(e.p,{children:"Optimize the application (bundling, ssg, etc.):"}),`
`,b(e.pre,{children:b(e.code,{className:"hljs language-bash",children:`deno task opt
`})})]})}function Be(n={}){let{wrapper:e}=n.components||{};return e?b(e,Object.assign({},n,{children:b(je,n)})):je(n)}var ze=Be;var G={};u(G,{default:()=>Ke});import{Fragment as Ve,jsx as L,jsxs as ue}from"https://esm.sh/react@18.2.0/jsx-runtime";function Ne(n){let e=Object.assign({h1:"h1",p:"p",a:"a",pre:"pre",code:"code"},n.components);return ue(Ve,{children:[L(e.h1,{children:"Vue"}),`
`,ue(e.p,{children:["Create a new ",L(e.a,{href:"https://vuejs.org",children:"Vue"})," app:"]}),`
`,L(e.pre,{children:L(e.code,{className:"hljs language-bash",children:`deno run -A -r https://alephjs.org/init.ts --template=vue
`})})]})}function Ze(n={}){let{wrapper:e}=n.components||{};return e?L(e,Object.assign({},n,{children:L(Ne,n)})):Ne(n)}var Ke=Ze;var Y={};u(Y,{default:()=>ss});import{Fragment as Qe,jsx as o,jsxs as R}from"https://esm.sh/react@18.2.0/jsx-runtime";function ge(n){let e=Object.assign({h1:"h1",p:"p",a:"a",pre:"pre",code:"code",h2:"h2",strong:"strong",span:"span",blockquote:"blockquote"},n.components);return R(Qe,{children:[o(e.h1,{children:"React with MDX"}),`
`,R(e.p,{children:["Create a new ",o(e.a,{href:"https://reactjs.org",children:"React"})," app with ",o(e.a,{href:"https://mdxjs.com",children:"MDX"}),`
support:`]}),`
`,o(e.pre,{children:o(e.code,{className:"hljs language-bash",children:`deno run -A -r https://alephjs.org/init.ts --template=react-mdx
`})}),`
`,o(e.h2,{children:"Extending MDX"}),`
`,R(e.p,{children:["You can add ",o(e.a,{href:"https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins",children:"remark plugins"})," and ",o(e.a,{href:"https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#list-of-plugins",children:"rehype plugins"})," for the ",o(e.strong,{children:"MDX Loader"})," in ",o(e.code,{children:"server.ts"})]}),`
`,o(e.pre,{children:R(e.code,{className:"hljs language-js",children:[o(e.span,{className:"hljs-keyword",children:"import"})," { serve } ",o(e.span,{className:"hljs-keyword",children:"from"})," ",o(e.span,{className:"hljs-string",children:'"aleph/server"'}),`;
`,o(e.span,{className:"hljs-keyword",children:"import"})," remarkFrontmatter ",o(e.span,{className:"hljs-keyword",children:"from"})," ",o(e.span,{className:"hljs-string",children:'"https://esm.sh/remark-frontmatter@4.0.1"'}),`;
`,o(e.span,{className:"hljs-keyword",children:"import"})," rehypeHighlight ",o(e.span,{className:"hljs-keyword",children:"from"})," ",o(e.span,{className:"hljs-string",children:'"https://esm.sh/rehype-highlight@5.0.2"'}),`;

`,o(e.span,{className:"hljs-title function_",children:"serve"}),`({
  `,o(e.span,{className:"hljs-attr",children:"loaders"}),`: [
    `,o(e.span,{className:"hljs-keyword",children:"new"})," ",o(e.span,{className:"hljs-title class_",children:"MDXLoader"}),`({
      `,o(e.span,{className:"hljs-attr",children:"remarkPlugins"}),`: [remarkFrontmatter],
      `,o(e.span,{className:"hljs-attr",children:"rehypePlugins"}),`: [rehypeHighlight],
    }),
  ],
  `,o(e.span,{className:"hljs-attr",children:"router"}),`: {
    `,o(e.span,{className:"hljs-attr",children:"glob"}),": ",o(e.span,{className:"hljs-string",children:'"./routes/**/*.{tsx,mdx,md}"'}),`,
  },
  `,o(e.span,{className:"hljs-attr",children:"ssr"}),": ",o(e.span,{className:"hljs-literal",children:"true"}),`,
});
`]})}),`
`,R(e.blockquote,{children:[`
`,R(e.p,{children:["See ",o(e.a,{href:"https://mdxjs.com/docs/extending-mdx/",children:"Extending MDX"})," for more details."]}),`
`]})]})}function es(n={}){let{wrapper:e}=n.components||{};return e?o(e,Object.assign({},n,{children:o(ge,n)})):ge(n)}var ss=es;var B={};u(B,{default:()=>ls});import{Fragment as ns,jsx as A,jsxs as fe}from"https://esm.sh/react@18.2.0/jsx-runtime";function we(n){let e=Object.assign({h1:"h1",p:"p",a:"a",pre:"pre",code:"code"},n.components);return fe(ns,{children:[A(e.h1,{children:"SolidJS"}),`
`,fe(e.p,{children:["Create a new ",A(e.a,{href:"https://www.solidjs.com/",children:"SolidJS"})," app:"]}),`
`,A(e.pre,{children:A(e.code,{className:"hljs language-bash",children:`deno run -A -r https://alephjs.org/init.ts --template=solid
`})})]})}function as(n={}){let{wrapper:e}=n.components||{};return e?A(e,Object.assign({},n,{children:A(we,n)})):we(n)}var ls=as;var z={};u(z,{default:()=>ts});import{Fragment as rs,jsx as a,jsxs as d}from"https://esm.sh/react@18.2.0/jsx-runtime";function ye(n){let e=Object.assign({h1:"h1",p:"p",a:"a",pre:"pre",code:"code",h2:"h2",strong:"strong",span:"span",blockquote:"blockquote",ul:"ul",li:"li"},n.components);return d(rs,{children:[a(e.h1,{children:"React"}),`
`,d(e.p,{children:["Create a new ",a(e.a,{href:"https://reactjs.org",children:"React"})," app:"]}),`
`,a(e.pre,{children:a(e.code,{className:"hljs language-bash",children:`deno run -A -r https://alephjs.org/init.ts --template=react
`})}),`
`,a(e.h2,{children:"Pages"}),`
`,d(e.p,{children:["In Aleph.js, a ",a(e.strong,{children:"page"}),` is a
`,a(e.a,{href:"https://reactjs.org/docs/components-and-props.html",children:"React Component"}),` exported
as `,a(e.strong,{children:"default"})," from a ",a(e.code,{children:".jsx"})," or ",a(e.code,{children:".tsx"})," file in the ",a(e.code,{children:"routes"})," directory."]}),`
`,a(e.p,{children:"Each page is associated with a route based on its file name."}),`
`,d(e.p,{children:[a(e.strong,{children:"Example"}),": If you create ",a(e.code,{children:"routes/about.tsx"}),` and it exports a React component
like below, it will be accessible at `,a(e.code,{children:"/about"}),"."]}),`
`,a(e.pre,{children:d(e.code,{className:"hljs language-jsx",children:[a(e.span,{className:"hljs-keyword",children:"export"})," ",a(e.span,{className:"hljs-keyword",children:"default"})," ",a(e.span,{className:"hljs-keyword",children:"function"})," ",a(e.span,{className:"hljs-title function_",children:"About"}),"(",a(e.span,{className:"hljs-params"}),`) {
  `,a(e.span,{className:"hljs-keyword",children:"return"})," ",d(e.span,{className:"xml",children:[d(e.span,{className:"hljs-tag",children:["<",a(e.span,{className:"hljs-name",children:"h1"}),">"]}),"About Me",d(e.span,{className:"hljs-tag",children:["</",a(e.span,{className:"hljs-name",children:"h1"}),">"]})]}),`;
}
`]})}),`
`,d(e.blockquote,{children:[`
`,a(e.p,{children:"To learn more about routing, check out the Routing documentation."}),`
`]}),`
`,a(e.h2,{children:"Use Data"}),`
`,a(e.h2,{children:"Use Router"}),`
`,a(e.h2,{children:"Linking Between Pages"}),`
`,d(e.p,{children:["Aleph.js provides a ",a(e.code,{children:"Link"}),` component to move between pages without refresh whole
page, similarly to a SPA (single-page application).`]}),`
`,a(e.pre,{children:d(e.code,{className:"hljs language-jsx",children:[a(e.span,{className:"hljs-keyword",children:"import"})," { ",a(e.span,{className:"hljs-title class_",children:"Link"})," } ",a(e.span,{className:"hljs-keyword",children:"from"})," ",a(e.span,{className:"hljs-string",children:'"aleph/react"'}),`;

`,a(e.span,{className:"hljs-keyword",children:"export"})," ",a(e.span,{className:"hljs-keyword",children:"default"})," ",a(e.span,{className:"hljs-keyword",children:"function"})," ",a(e.span,{className:"hljs-title function_",children:"Nav"}),"(",a(e.span,{className:"hljs-params"}),`) {
  `,a(e.span,{className:"hljs-keyword",children:"return"}),` (
    `,d(e.span,{className:"xml",children:[d(e.span,{className:"hljs-tag",children:["<",a(e.span,{className:"hljs-name",children:"nav"}),">"]}),`
      `,d(e.span,{className:"hljs-tag",children:["<",a(e.span,{className:"hljs-name",children:"Link"})," ",a(e.span,{className:"hljs-attr",children:"to"}),"=",a(e.span,{className:"hljs-string",children:'"/"'}),">"]}),"Home",d(e.span,{className:"hljs-tag",children:["</",a(e.span,{className:"hljs-name",children:"Link"}),">"]}),`
      `,d(e.span,{className:"hljs-tag",children:["<",a(e.span,{className:"hljs-name",children:"Link"})," ",a(e.span,{className:"hljs-attr",children:"to"}),"=",a(e.span,{className:"hljs-string",children:'"/about"'}),">"]}),"About",d(e.span,{className:"hljs-tag",children:["</",a(e.span,{className:"hljs-name",children:"Link"}),">"]}),`
      `,d(e.span,{className:"hljs-tag",children:["<",a(e.span,{className:"hljs-name",children:"Link"})," ",a(e.span,{className:"hljs-attr",children:"to"}),"=",a(e.span,{className:"hljs-string",children:'"/blog/hello-world"'}),">"]}),"Hello World",d(e.span,{className:"hljs-tag",children:["</",a(e.span,{className:"hljs-name",children:"Link"}),">"]}),`
    `,d(e.span,{className:"hljs-tag",children:["</",a(e.span,{className:"hljs-name",children:"nav"}),">"]})]}),`
  );
}
`]})}),`
`,d(e.p,{children:["In the example above we have three links, each one maps a path (",a(e.code,{children:"to"}),`) to the
specified page:`]}),`
`,d(e.ul,{children:[`
`,d(e.li,{children:[a(e.code,{children:"/"})," \u2192 ",a(e.code,{children:"pages/index.tsx"})]}),`
`,d(e.li,{children:[a(e.code,{children:"/about"})," \u2192 ",a(e.code,{children:"pages/about.tsx"})]}),`
`,d(e.li,{children:[a(e.code,{children:"/blog/hello-world"})," \u2192 ",a(e.code,{children:"pages/blog/$slug.tsx"})]}),`
`]}),`
`,a(e.h2,{children:"NavLink"}),`
`,d(e.p,{children:["Aleph.js also provides a ",a(e.code,{children:"NavLink"}),` component that will add active class/style
when the specific page is activated. You can add the active class via
`,a(e.code,{children:"activeClassName"})," or add active style using ",a(e.code,{children:"activeStyle"}),"."]}),`
`,a(e.pre,{children:d(e.code,{className:"hljs language-jsx",children:[a(e.span,{className:"hljs-keyword",children:"import"})," { ",a(e.span,{className:"hljs-title class_",children:"NavLink"})," } ",a(e.span,{className:"hljs-keyword",children:"from"})," ",a(e.span,{className:"hljs-string",children:'"aleph/react"'}),`;

`,a(e.span,{className:"hljs-keyword",children:"export"})," ",a(e.span,{className:"hljs-keyword",children:"default"})," ",a(e.span,{className:"hljs-keyword",children:"function"})," ",a(e.span,{className:"hljs-title function_",children:"Nav"}),"(",a(e.span,{className:"hljs-params"}),`) {
  `,a(e.span,{className:"hljs-keyword",children:"return"}),` (
    `,d(e.span,{className:"xml",children:[d(e.span,{className:"hljs-tag",children:["<",a(e.span,{className:"hljs-name",children:"nav"}),">"]}),`
      `,d(e.span,{className:"hljs-tag",children:["<",a(e.span,{className:"hljs-name",children:"NavLink"})," ",a(e.span,{className:"hljs-attr",children:"to"}),"=",a(e.span,{className:"hljs-string",children:'"/"'}),">"]}),"Home",d(e.span,{className:"hljs-tag",children:["</",a(e.span,{className:"hljs-name",children:"NavLink"}),">"]}),`
      `,d(e.span,{className:"hljs-tag",children:["<",a(e.span,{className:"hljs-name",children:"NavLink"})," ",a(e.span,{className:"hljs-attr",children:"activeClassName"}),"=",a(e.span,{className:"hljs-string",children:'"active"'})," ",a(e.span,{className:"hljs-attr",children:"to"}),"=",a(e.span,{className:"hljs-string",children:'"/about"'}),">"]}),"About",d(e.span,{className:"hljs-tag",children:["</",a(e.span,{className:"hljs-name",children:"NavLink"}),">"]}),`
      `,d(e.span,{className:"hljs-tag",children:["<",a(e.span,{className:"hljs-name",children:"NavLink"})," ",a(e.span,{className:"hljs-attr",children:"activeStyle"}),"=",a(e.span,{className:"hljs-string",children:"{{"})," ",a(e.span,{className:"hljs-attr",children:"color:"}),' "',a(e.span,{className:"hljs-attr",children:"red"}),'" }} ',a(e.span,{className:"hljs-attr",children:"to"}),"=",a(e.span,{className:"hljs-string",children:'"/contact"'}),">"]}),`
        Contact
      `,d(e.span,{className:"hljs-tag",children:["</",a(e.span,{className:"hljs-name",children:"NavLink"}),">"]}),`
    `,d(e.span,{className:"hljs-tag",children:["</",a(e.span,{className:"hljs-name",children:"nav"}),">"]})]}),`
  );
}
`]})})]})}function cs(n={}){let{wrapper:e}=n.components||{};return e?a(e,Object.assign({},n,{children:a(ye,n)})):ye(n)}var ts=cs;var V={};u(V,{default:()=>ds});import{Fragment as hs,jsx as F,jsxs as xe}from"https://esm.sh/react@18.2.0/jsx-runtime";function be(n){let e=Object.assign({h1:"h1",p:"p",a:"a",pre:"pre",code:"code"},n.components);return xe(hs,{children:[F(e.h1,{children:"Yew"}),`
`,xe(e.p,{children:["Create a new ",F(e.a,{href:"https://yew.rs",children:"Yew"})," app:"]}),`
`,F(e.pre,{children:F(e.code,{className:"hljs language-bash",children:`deno run -A -r https://alephjs.org/init.ts --template=yew
`})})]})}function is(n={}){let{wrapper:e}=n.components||{};return e?F(e,Object.assign({},n,{children:F(be,n)})):be(n)}var ds=is;var Z={};u(Z,{default:()=>ms});import{Fragment as os,jsx as s,jsxs as w}from"https://esm.sh/react@18.2.0/jsx-runtime";import _e from"components/Border.tsx";function ke(n){let e=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",pre:"pre",span:"span",h2:"h2",h4:"h4"},n.components);return w(os,{children:[s(e.h1,{children:"Middleware API"}),`
`,w(e.p,{children:["In Aleph.js, a ",s(e.strong,{children:"Middleware"})," is an object with a ",s(e.code,{children:"fetch"})," method. The ",s(e.code,{children:"fetch"}),`
method will be invoked when a request is received by the server. You can end the
request by returning a `,s(e.code,{children:"Response"})," object in the ",s(e.code,{children:"fetch"})," method."]}),`
`,s(_e,{color:"#d63369",children:s(e.pre,{children:w(e.code,{className:"hljs language-ts",children:[s(e.span,{className:"hljs-keyword",children:"type"})," ",s(e.span,{className:"hljs-title class_",children:"Middleware"}),` = {
  `,s(e.span,{className:"hljs-comment",children:"/* The middleware name. */"}),`
  `,s(e.span,{className:"hljs-keyword",children:"readonly"})," name?: ",s(e.span,{className:"hljs-built_in",children:"string"}),`;
  `,s(e.span,{className:"hljs-comment",children:"/* The middleware fetch method. */"}),`
  `,s(e.span,{className:"hljs-title function_",children:"fetch"}),"(",s(e.span,{className:"hljs-attr",children:"req"}),": ",s(e.span,{className:"hljs-title class_",children:"Request"}),", ",s(e.span,{className:"hljs-attr",children:"context"}),": ",s(e.span,{className:"hljs-title class_",children:"Context"}),"): ",s(e.span,{className:"hljs-title class_",children:"Promise"}),"<",s(e.span,{className:"hljs-title class_",children:"Response"}),"> | ",s(e.span,{className:"hljs-title class_",children:"Response"})," | ",s(e.span,{className:"hljs-built_in",children:"void"}),`;
};
`]})})}),`
`,s(e.h2,{children:"Use Middlewares"}),`
`,w(e.p,{children:["To use a middleware, add it to the ",s(e.code,{children:"middlewares"})," array in the server config."]}),`
`,s(e.pre,{children:w(e.code,{className:"hljs language-ts",children:[s(e.span,{className:"hljs-comment",children:"// server.ts"}),`

`,s(e.span,{className:"hljs-keyword",children:"import"})," { serve } ",s(e.span,{className:"hljs-keyword",children:"from"})," ",s(e.span,{className:"hljs-string",children:'"aleph/server"'}),`;

`,s(e.span,{className:"hljs-title function_",children:"serve"}),`({
  `,s(e.span,{className:"hljs-attr",children:"middlewares"}),`: [
    {
      `,s(e.span,{className:"hljs-attr",children:"name"}),": ",s(e.span,{className:"hljs-string",children:'"my-middleware"'}),`,
      `,s(e.span,{className:"hljs-title function_",children:"fetch"}),"(",s(e.span,{className:"hljs-params",children:"req"}),`) {
        `,s(e.span,{className:"hljs-keyword",children:"if"})," (req.",s(e.span,{className:"hljs-property",children:"url"})," === ",s(e.span,{className:"hljs-string",children:'"/my-middleware"'}),`) {
          `,s(e.span,{className:"hljs-keyword",children:"return"})," ",s(e.span,{className:"hljs-keyword",children:"new"})," ",s(e.span,{className:"hljs-title class_",children:"Response"}),"(",s(e.span,{className:"hljs-string",children:'"Hello, World!"'}),`);
        }
      },
    },
  ],
});
`]})}),`
`,w(e.h2,{children:["Use ",s(e.code,{children:"Context"})," Object"]}),`
`,w(e.p,{children:["The ",s(e.code,{children:"fetch"})," method of a middleware will receive a ",s(e.code,{children:"Context"}),` object as the second
parameter. You can use it to store data that can be accessed by other
middlewares and data fetchers.`]}),`
`,s(_e,{color:"#d63369",children:s(e.pre,{children:w(e.code,{className:"hljs language-ts",children:[s(e.span,{className:"hljs-keyword",children:"export"})," ",s(e.span,{className:"hljs-keyword",children:"interface"})," ",s(e.span,{className:"hljs-title class_",children:"Context"})," ",s(e.span,{className:"hljs-keyword",children:"extends"})," ",s(e.span,{className:"hljs-title class_",children:"Record"}),"<",s(e.span,{className:"hljs-built_in",children:"string"}),", ",s(e.span,{className:"hljs-built_in",children:"unknown"}),`> {
  `,s(e.span,{className:"hljs-comment",children:"/** The request connection info. */"}),`
  `,s(e.span,{className:"hljs-keyword",children:"readonly"})," connInfo?: ",s(e.span,{className:"hljs-title class_",children:"ConnInfo"}),`;
  `,s(e.span,{className:"hljs-comment",children:"/** The params of dynamic routes. */"}),`
  `,s(e.span,{className:"hljs-keyword",children:"readonly"})," ",s(e.span,{className:"hljs-attr",children:"params"}),": ",s(e.span,{className:"hljs-title class_",children:"Record"}),"<",s(e.span,{className:"hljs-built_in",children:"string"}),", ",s(e.span,{className:"hljs-built_in",children:"string"}),`>;
  `,s(e.span,{className:"hljs-comment",children:"/** The headers for final response. */"}),`
  `,s(e.span,{className:"hljs-keyword",children:"readonly"})," ",s(e.span,{className:"hljs-attr",children:"headers"}),": ",s(e.span,{className:"hljs-title class_",children:"Headers"}),`;
  `,s(e.span,{className:"hljs-comment",children:"/** The cookies from client. */"}),`
  `,s(e.span,{className:"hljs-keyword",children:"readonly"})," ",s(e.span,{className:"hljs-attr",children:"cookies"}),": ",s(e.span,{className:"hljs-title class_",children:"Cookies"}),`;
  `,s(e.span,{className:"hljs-comment",children:"/** The HtmlRewriter to rewrite the html output. */"}),`
  `,s(e.span,{className:"hljs-keyword",children:"readonly"})," ",s(e.span,{className:"hljs-attr",children:"htmlRewriter"}),": ",s(e.span,{className:"hljs-title class_",children:"HTMLRewriter"}),`;
  `,s(e.span,{className:"hljs-comment",children:"/** Returns the `Session` object. */"}),`
  getSession<
    T `,s(e.span,{className:"hljs-keyword",children:"extends"})," ",s(e.span,{className:"hljs-title class_",children:"Record"}),"<",s(e.span,{className:"hljs-built_in",children:"string"}),", ",s(e.span,{className:"hljs-built_in",children:"unknown"}),"> = ",s(e.span,{className:"hljs-title class_",children:"Record"}),"<",s(e.span,{className:"hljs-built_in",children:"string"}),", ",s(e.span,{className:"hljs-built_in",children:"unknown"}),`>,
  >(): `,s(e.span,{className:"hljs-title class_",children:"Promise"}),"<",s(e.span,{className:"hljs-title class_",children:"Session"}),`<T>>;
}
`]})})}),`
`,s(e.h2,{children:"Examples"}),`
`,s(e.p,{children:`The example middlewares below are meant to give you an idea of the different
types of things you can do with the middleware API.`}),`
`,s(e.h4,{children:"Google Analytics"}),`
`,s(e.p,{children:"This example middleware shows how to insert custom scripts to SSR output HTML."}),`
`,s(e.pre,{children:w(e.code,{className:"hljs language-ts",children:[s(e.span,{className:"hljs-keyword",children:"import"})," ",s(e.span,{className:"hljs-keyword",children:"type"})," { ",s(e.span,{className:"hljs-title class_",children:"Middleware"})," } ",s(e.span,{className:"hljs-keyword",children:"from"})," ",s(e.span,{className:"hljs-string",children:'"aleph/server/types.ts"'}),`;

`,s(e.span,{className:"hljs-keyword",children:"export"})," ",s(e.span,{className:"hljs-keyword",children:"default"})," <",s(e.span,{className:"hljs-title class_",children:"Middleware"}),`> {
  `,s(e.span,{className:"hljs-attr",children:"name"}),": ",s(e.span,{className:"hljs-string",children:'"google-analytics-plugin"'}),`,
  `,s(e.span,{className:"hljs-attr",children:"fetch"}),": ",w(e.span,{className:"hljs-function",children:["(",s(e.span,{className:"hljs-params",children:"req, ctx"}),") =>"]}),` {
    `,s(e.span,{className:"hljs-keyword",children:"const"})," id = ",s(e.span,{className:"hljs-title class_",children:"Deno"}),".",s(e.span,{className:"hljs-property",children:"env"}),".",s(e.span,{className:"hljs-title function_",children:"get"}),"(",s(e.span,{className:"hljs-string",children:'"GTAGID"'}),`);
    `,s(e.span,{className:"hljs-keyword",children:"if"}),` (id) {
      ctx.`,s(e.span,{className:"hljs-property",children:"htmlRewriter"}),".",s(e.span,{className:"hljs-title function_",children:"on"}),"(",s(e.span,{className:"hljs-string",children:'"body"'}),`, {
        `,s(e.span,{className:"hljs-title function_",children:"element"}),"(",s(e.span,{className:"hljs-params",children:"el"}),`) {
          el.`,s(e.span,{className:"hljs-title function_",children:"append"}),`(
            `,w(e.span,{className:"hljs-string",children:['`<script src="https://www.googletagmanager.com/gtag/js?id=',w(e.span,{className:"hljs-subst",children:["${\n              ",s(e.span,{className:"hljs-built_in",children:"encodeURIComponent"}),`(id)
            }`]}),`"><\/script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag("js", new Date());
              gtag("config", `,w(e.span,{className:"hljs-subst",children:["${",s(e.span,{className:"hljs-built_in",children:"JSON"}),".stringify(id)}"]}),`);
            <\/script>
            \``]}),`,
            { `,s(e.span,{className:"hljs-attr",children:"html"}),": ",s(e.span,{className:"hljs-literal",children:"true"}),` },
          );
        },
      });
    }
  },
};
`]})}),`
`,s(e.h4,{children:"Github Oauth"}),`
`,w(e.p,{children:["This example middleware shows how to use ",s(e.strong,{children:"session"})," to store login status."]}),`
`,s(e.pre,{children:w(e.code,{className:"hljs language-ts",children:[s(e.span,{className:"hljs-keyword",children:"import"})," ",s(e.span,{className:"hljs-keyword",children:"type"})," { ",s(e.span,{className:"hljs-title class_",children:"Middleware"})," } ",s(e.span,{className:"hljs-keyword",children:"from"})," ",s(e.span,{className:"hljs-string",children:'"aleph/server/types.ts"'}),`;

`,s(e.span,{className:"hljs-keyword",children:"export"})," ",s(e.span,{className:"hljs-keyword",children:"default"})," <",s(e.span,{className:"hljs-title class_",children:"Middleware"}),`> {
  `,s(e.span,{className:"hljs-attr",children:"name"}),": ",s(e.span,{className:"hljs-string",children:'"github-oauth"'}),`,
  `,s(e.span,{className:"hljs-keyword",children:"async"})," ",s(e.span,{className:"hljs-title function_",children:"fetch"}),"(",s(e.span,{className:"hljs-params",children:"req, ctx"}),`) {
    `,s(e.span,{className:"hljs-keyword",children:"const"})," { pathname, searchParams } = ",s(e.span,{className:"hljs-keyword",children:"new"})," ",s(e.span,{className:"hljs-title function_",children:"URL"}),"(req.",s(e.span,{className:"hljs-property",children:"url"}),`);
    `,s(e.span,{className:"hljs-keyword",children:"const"})," session = ",s(e.span,{className:"hljs-keyword",children:"await"})," ctx.",s(e.span,{className:"hljs-property",children:"getSession"}),"<{ ",s(e.span,{className:"hljs-attr",children:"user"}),": ",s(e.span,{className:"hljs-title class_",children:"GithubUser"}),` }>();

    `,s(e.span,{className:"hljs-keyword",children:"if"})," (pathname === ",s(e.span,{className:"hljs-string",children:'"/logout"'}),`) {
      `,s(e.span,{className:"hljs-keyword",children:"return"})," session.",s(e.span,{className:"hljs-title function_",children:"end"}),"(",s(e.span,{className:"hljs-string",children:'"/"'}),`);
    }

    `,s(e.span,{className:"hljs-keyword",children:"if"})," (!session.",s(e.span,{className:"hljs-property",children:"store"}),"?.",s(e.span,{className:"hljs-property",children:"user"}),`) {
      `,s(e.span,{className:"hljs-keyword",children:"const"})," clientId = ",s(e.span,{className:"hljs-title class_",children:"Deno"}),".",s(e.span,{className:"hljs-property",children:"env"}),".",s(e.span,{className:"hljs-title function_",children:"get"}),"(",s(e.span,{className:"hljs-string",children:'"GITHUB_OAUTH_CLIENT_ID"'}),`);
      `,s(e.span,{className:"hljs-keyword",children:"const"})," clientSecret = ",s(e.span,{className:"hljs-title class_",children:"Deno"}),".",s(e.span,{className:"hljs-property",children:"env"}),".",s(e.span,{className:"hljs-title function_",children:"get"}),"(",s(e.span,{className:"hljs-string",children:'"GITHUB_OAUTH_CLIENT_SECRET"'}),`);
      `,s(e.span,{className:"hljs-keyword",children:"const"})," code = searchParams.",s(e.span,{className:"hljs-title function_",children:"get"}),"(",s(e.span,{className:"hljs-string",children:'"code"'}),`);
      `,s(e.span,{className:"hljs-keyword",children:"if"}),` (!code) {
        `,s(e.span,{className:"hljs-keyword",children:"const"}),` loginUrl =
          `,w(e.span,{className:"hljs-string",children:["`https://github.com/login/oauth/authorize?client_id=",s(e.span,{className:"hljs-subst",children:"${clientId}"}),"&scope=read:user+user:email`"]}),`;
        `,s(e.span,{className:"hljs-keyword",children:"return"})," ",s(e.span,{className:"hljs-keyword",children:"new"})," ",s(e.span,{className:"hljs-title class_",children:"Response"}),"(",s(e.span,{className:"hljs-string",children:'"Not logged in"'}),`, {
          `,s(e.span,{className:"hljs-attr",children:"status"}),": ",s(e.span,{className:"hljs-number",children:"302"}),`,
          `,s(e.span,{className:"hljs-attr",children:"headers"}),": { ",s(e.span,{className:"hljs-title class_",children:"Location"}),`: loginUrl },
        });
      }

      `,s(e.span,{className:"hljs-keyword",children:"const"})," ",s(e.span,{className:"hljs-attr",children:"ret"}),": { ",s(e.span,{className:"hljs-attr",children:"access_token"}),": ",s(e.span,{className:"hljs-built_in",children:"string"}),"; error?: ",s(e.span,{className:"hljs-built_in",children:"string"})," } = ",s(e.span,{className:"hljs-keyword",children:"await"})," ",s(e.span,{className:"hljs-title function_",children:"fetch"}),`(
        `,s(e.span,{className:"hljs-string",children:'"https://github.com/login/oauth/access_token"'}),`,
        {
          `,s(e.span,{className:"hljs-attr",children:"method"}),": ",s(e.span,{className:"hljs-string",children:'"POST"'}),`,
          `,s(e.span,{className:"hljs-attr",children:"body"}),": ",s(e.span,{className:"hljs-title class_",children:"JSON"}),".",s(e.span,{className:"hljs-title function_",children:"stringify"}),`({
            `,s(e.span,{className:"hljs-attr",children:"client_id"}),`: clientId,
            `,s(e.span,{className:"hljs-attr",children:"client_secret"}),`: clientSecret,
            `,s(e.span,{className:"hljs-attr",children:"state"}),": searchParams.",s(e.span,{className:"hljs-title function_",children:"get"}),"(",s(e.span,{className:"hljs-string",children:'"state"'}),") || ",s(e.span,{className:"hljs-literal",children:"undefined"}),`,
            code,
          }),
          `,s(e.span,{className:"hljs-attr",children:"headers"}),`: {
            `,s(e.span,{className:"hljs-string",children:'"Content-Type"'}),": ",s(e.span,{className:"hljs-string",children:'"application/json"'}),`,
            `,s(e.span,{className:"hljs-string",children:'"Accept"'}),": ",s(e.span,{className:"hljs-string",children:'"application/json"'}),`,
          },
        },
      ).`,s(e.span,{className:"hljs-title function_",children:"then"}),"(",w(e.span,{className:"hljs-function",children:["(",s(e.span,{className:"hljs-params",children:"res"}),") =>"]})," res.",s(e.span,{className:"hljs-title function_",children:"json"}),`());
      `,s(e.span,{className:"hljs-keyword",children:"if"})," (ret.",s(e.span,{className:"hljs-property",children:"error"}),`) {
        `,s(e.span,{className:"hljs-keyword",children:"return"})," ",s(e.span,{className:"hljs-keyword",children:"new"})," ",s(e.span,{className:"hljs-title class_",children:"Response"}),"(ret.",s(e.span,{className:"hljs-property",children:"error"}),", { ",s(e.span,{className:"hljs-attr",children:"status"}),": ",s(e.span,{className:"hljs-number",children:"500"}),` });
      }

      `,s(e.span,{className:"hljs-keyword",children:"const"})," ",s(e.span,{className:"hljs-attr",children:"user"}),": ",s(e.span,{className:"hljs-title class_",children:"GithubUser"})," = ",s(e.span,{className:"hljs-keyword",children:"await"})," ",s(e.span,{className:"hljs-title function_",children:"fetch"}),"(",s(e.span,{className:"hljs-string",children:'"https://api.github.com/user"'}),`, {
        `,s(e.span,{className:"hljs-attr",children:"headers"}),`: {
          `,s(e.span,{className:"hljs-string",children:'"Authorization"'}),": ",w(e.span,{className:"hljs-string",children:["`token ",s(e.span,{className:"hljs-subst",children:"${ret.access_token}"}),"`"]}),`,
          `,s(e.span,{className:"hljs-string",children:'"Accept"'}),": ",s(e.span,{className:"hljs-string",children:'"application/json"'}),`,
        },
      }).`,s(e.span,{className:"hljs-title function_",children:"then"}),"(",w(e.span,{className:"hljs-function",children:["(",s(e.span,{className:"hljs-params",children:"res"}),") =>"]})," res.",s(e.span,{className:"hljs-title function_",children:"json"}),`());

      `,s(e.span,{className:"hljs-keyword",children:"return"})," session.",s(e.span,{className:"hljs-title function_",children:"update"}),`(
        { user },
        searchParams.`,s(e.span,{className:"hljs-title function_",children:"get"}),"(",s(e.span,{className:"hljs-string",children:'"redirect"'}),") ?? ",s(e.span,{className:"hljs-string",children:'"/"'}),`,
      );
    }

    `,s(e.span,{className:"hljs-comment",children:"// store the user info in context"}),`
    ctx.`,s(e.span,{className:"hljs-property",children:"user"})," = session.",s(e.span,{className:"hljs-property",children:"store"}),".",s(e.span,{className:"hljs-property",children:"user"}),`;
  },
};
`]})})]})}function ps(n={}){let{wrapper:e}=n.components||{};return e?s(e,Object.assign({},n,{children:s(ke,n)})):ke(n)}var ms=ps;var K={};u(K,{default:()=>gs});import{Fragment as js,jsx as I,jsxs as us}from"https://esm.sh/react@18.2.0/jsx-runtime";function ve(n){let e=Object.assign({h1:"h1",p:"p",em:"em"},n.components);return us(js,{children:[I(e.h1,{children:"Server Config"}),`
`,I(e.p,{children:I(e.em,{children:"WIP"})})]})}function Ns(n={}){let{wrapper:e}=n.components||{};return e?I(e,Object.assign({},n,{children:I(ve,n)})):ve(n)}var gs=Ns;var Q={};u(Q,{default:()=>ys});import{Fragment as fs,jsx as h,jsxs as C}from"https://esm.sh/react@18.2.0/jsx-runtime";function Me(n){let e=Object.assign({h1:"h1",p:"p",a:"a",code:"code",pre:"pre",span:"span"},n.components);return C(fs,{children:[h(e.h1,{children:"Import Maps"}),`
`,C(e.p,{children:["To use ",h(e.a,{href:"https://github.com/WICG/import-maps",children:"import maps"}),", create a ",h(e.code,{children:"import_map.json"})," file in the root directory:"]}),`
`,h(e.pre,{children:C(e.code,{className:"hljs language-json",children:[h(e.span,{className:"hljs-punctuation",children:"{"}),`
  `,h(e.span,{className:"hljs-attr",children:'"imports"'}),h(e.span,{className:"hljs-punctuation",children:":"})," ",h(e.span,{className:"hljs-punctuation",children:"{"}),`
    `,h(e.span,{className:"hljs-attr",children:'"@/"'}),h(e.span,{className:"hljs-punctuation",children:":"})," ",h(e.span,{className:"hljs-string",children:'"./"'}),h(e.span,{className:"hljs-punctuation",children:","}),`
    `,h(e.span,{className:"hljs-attr",children:'"react"'}),h(e.span,{className:"hljs-punctuation",children:":"})," ",h(e.span,{className:"hljs-string",children:'"https://esm.sh/react@18.2.0"'}),h(e.span,{className:"hljs-punctuation",children:","}),`
    ...
  `,h(e.span,{className:"hljs-punctuation",children:"}"}),`
`,h(e.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,C(e.p,{children:["Add the ",h(e.code,{children:"importMap"})," option in the ",h(e.code,{children:"deno.json"})," file:"]}),`
`,h(e.pre,{children:C(e.code,{className:"hljs language-json",children:[h(e.span,{className:"hljs-punctuation",children:"{"}),`
  `,h(e.span,{className:"hljs-attr",children:'"importMap"'}),h(e.span,{className:"hljs-punctuation",children:":"})," ",h(e.span,{className:"hljs-string",children:'"import_map.json"'}),`
`,h(e.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,h(e.p,{children:"then in your code:"}),`
`,h(e.pre,{children:C(e.code,{className:"hljs language-tsx",children:[h(e.span,{className:"hljs-keyword",children:"import"})," { useState } ",h(e.span,{className:"hljs-keyword",children:"from"})," ",h(e.span,{className:"hljs-string",children:'"react"'}),`;
`,h(e.span,{className:"hljs-keyword",children:"import"})," ",h(e.span,{className:"hljs-title class_",children:"Logo"})," ",h(e.span,{className:"hljs-keyword",children:"from"})," ",h(e.span,{className:"hljs-string",children:'"@/components/logo.tsx"'}),`;

`,h(e.span,{className:"hljs-keyword",children:"export"})," ",h(e.span,{className:"hljs-keyword",children:"default"})," ",h(e.span,{className:"hljs-keyword",children:"function"})," ",h(e.span,{className:"hljs-title function_",children:"App"}),"(",h(e.span,{className:"hljs-params"}),`) {
  `,h(e.span,{className:"hljs-keyword",children:"return"})," ",h(e.span,{className:"xml",children:C(e.span,{className:"hljs-tag",children:["<",h(e.span,{className:"hljs-name",children:"Logo"})," />"]})}),`;
}
`]})})]})}function ws(n={}){let{wrapper:e}=n.components||{};return e?h(e,Object.assign({},n,{children:h(Me,n)})):Me(n)}var ys=ws;var ee={};u(ee,{default:()=>_s});import{Fragment as xs,jsx as j,jsxs as T}from"https://esm.sh/react@18.2.0/jsx-runtime";function Ce(n){let e=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",span:"span",ul:"ul",li:"li"},n.components);return T(xs,{children:[j(e.h1,{children:"Static File Serving"}),`
`,T(e.p,{children:["Aleph.js will serve any static files in the project directory. Files inside the project directory can then be referenced by your code by using the base URL (",j(e.code,{children:"/"}),")."]}),`
`,T(e.p,{children:["For example, if you add an image ",j(e.code,{children:"assets/logo.png"}),", the following code will access the image:"]}),`
`,j(e.pre,{children:T(e.code,{className:"hljs language-jsx",children:[j(e.span,{className:"hljs-keyword",children:"export"})," ",j(e.span,{className:"hljs-keyword",children:"default"})," ",j(e.span,{className:"hljs-keyword",children:"function"})," ",j(e.span,{className:"hljs-title function_",children:"Logo"}),"(",j(e.span,{className:"hljs-params"}),`) {
  `,j(e.span,{className:"hljs-keyword",children:"return"}),` (
    `,j(e.span,{className:"xml",children:T(e.span,{className:"hljs-tag",children:["<",j(e.span,{className:"hljs-name",children:"img"})," ",j(e.span,{className:"hljs-attr",children:"src"}),"=",j(e.span,{className:"hljs-string",children:'"/assets/logo.png"'})," ",j(e.span,{className:"hljs-attr",children:"alt"}),"=",j(e.span,{className:"hljs-string",children:'"Logo"'})," />"]})}),`
  )
}
`]})}),`
`,j(e.p,{children:"You can also serve other static assets such as:"}),`
`,T(e.ul,{children:[`
`,j(e.li,{children:j(e.code,{children:"favicon.ico"})}),`
`,j(e.li,{children:j(e.code,{children:"manifest.json"})}),`
`,j(e.li,{children:j(e.code,{children:"robots.txt"})}),`
`,j(e.li,{children:"Google Site Verification, etc"}),`
`]})]})}function bs(n={}){let{wrapper:e}=n.components||{};return e?j(e,Object.assign({},n,{children:j(Ce,n)})):Ce(n)}var _s=bs;var se={};u(se,{default:()=>Ms});import{Fragment as ks,jsx as r,jsxs as g}from"https://esm.sh/react@18.2.0/jsx-runtime";function Se(n){let e=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",span:"span",h3:"h3",ul:"ul",li:"li",strong:"strong"},n.components);return g(ks,{children:[r(e.h1,{children:"Routing"}),`
`,g(e.p,{children:["Aleph.js has a file-system based router. When a file (",r(e.code,{children:".js"}),", ",r(e.code,{children:".jsx"}),", ",r(e.code,{children:".ts"}),`,
`,r(e.code,{children:".tsx"}),", and ",r(e.code,{children:".mjs"}),") is added to the ",r(e.code,{children:"routes"}),` directory, it is automatically
available as a route.`]}),`
`,g(e.p,{children:["You can configure the ",r(e.code,{children:"router"})," in ",r(e.code,{children:"server.ts"}),"."]}),`
`,r(e.pre,{children:g(e.code,{className:"hljs language-js",children:[r(e.span,{className:"hljs-comment",children:"// server.ts"}),`

`,r(e.span,{className:"hljs-keyword",children:"import"})," { serve } ",r(e.span,{className:"hljs-keyword",children:"from"})," ",r(e.span,{className:"hljs-string",children:'"aleph/server"'}),`;

`,r(e.span,{className:"hljs-title function_",children:"serve"}),`({
  `,r(e.span,{className:"hljs-attr",children:"router"}),`: {
    `,r(e.span,{className:"hljs-comment",children:"// use glob pattern to match routes"}),`
    `,r(e.span,{className:"hljs-attr",children:"glob"}),": ",r(e.span,{className:"hljs-string",children:'"./routes/**/*.{ts,tsx,mdx}"'}),`,

    `,r(e.span,{className:"hljs-comment",children:"// or use dir prefix and extnames"}),`
    `,r(e.span,{className:"hljs-attr",children:"dir"}),": ",r(e.span,{className:"hljs-string",children:'"./routes"'}),`,
    `,r(e.span,{className:"hljs-attr",children:"exts"}),": [",r(e.span,{className:"hljs-string",children:'"ts"'}),", ",r(e.span,{className:"hljs-string",children:'".tsx"'}),", ",r(e.span,{className:"hljs-string",children:'".mdx"'}),`],
  },
});
`]})}),`
`,r(e.h3,{children:"Index Routes"}),`
`,g(e.p,{children:["The router will automatically route files named ",r(e.code,{children:"index"}),` to the root of the
directory.`]}),`
`,g(e.ul,{children:[`
`,g(e.li,{children:[r(e.code,{children:"routes/index.tsx"})," \u2192 ",r(e.code,{children:"/"})]}),`
`,g(e.li,{children:[r(e.code,{children:"routes/blog/index.tsx"})," \u2192 ",r(e.code,{children:"/blog"})]}),`
`]}),`
`,r(e.h3,{children:"Dynamic Routes"}),`
`,g(e.p,{children:[`To match a dynamic segment, you can use bracket syntax or start the segment with
`,r(e.strong,{children:"$"}),":"]}),`
`,g(e.ul,{children:[`
`,g(e.li,{children:[r(e.code,{children:"routes/blog/$slug.tsx"})," \u2192 ",r(e.code,{children:"/blog/:slug"})," (",r(e.code,{children:"/blog/hello-world"}),")"]}),`
`,g(e.li,{children:[r(e.code,{children:"routes/$username/settings.tsx"})," \u2192 ",r(e.code,{children:"/:username/settings"})," (",r(e.code,{children:"/foo/settings"}),")"]}),`
`,g(e.li,{children:[r(e.code,{children:"routes/post/$all+.tsx"})," \u2192 ",r(e.code,{children:"/post/*"})," (",r(e.code,{children:"/post/2020/id/title"}),")"]}),`
`]}),`
`,r(e.h3,{children:"Nested Routes"}),`
`,r(e.p,{children:"Aleph.js supports nested route structures like:"}),`
`,g(e.ul,{children:[`
`,r(e.li,{children:r(e.code,{children:"routes/blog.tsx"})}),`
`,r(e.li,{children:r(e.code,{children:"routes/blog/$slug.tsx"})}),`
`]}),`
`,g(e.p,{children:["In the example, routes in ",r(e.code,{children:"/blog/:slug"}),` will be rendered under the
`,r(e.code,{children:"routes/blog.tsx"}),", that is useful to create a ",r(e.strong,{children:"layout"})," for routes:"]}),`
`,r(e.pre,{children:g(e.code,{className:"hljs language-jsx",children:[r(e.span,{className:"hljs-comment",children:"// routes/blog.tsx"}),`

`,r(e.span,{className:"hljs-keyword",children:"import"})," ",r(e.span,{className:"hljs-title class_",children:"BlogHeader"})," ",r(e.span,{className:"hljs-keyword",children:"from"})," ",r(e.span,{className:"hljs-string",children:'"../components/blog-header.tsx"'}),`;

`,r(e.span,{className:"hljs-keyword",children:"export"})," ",r(e.span,{className:"hljs-keyword",children:"default"})," ",r(e.span,{className:"hljs-keyword",children:"function"})," ",r(e.span,{className:"hljs-title function_",children:"Blog"}),"(",r(e.span,{className:"hljs-params",children:"{ children }"}),`) {
  `,r(e.span,{className:"hljs-keyword",children:"return"}),` (
    `,g(e.span,{className:"xml",children:[r(e.span,{className:"hljs-tag",children:"<>"}),`
      `,g(e.span,{className:"hljs-tag",children:["<",r(e.span,{className:"hljs-name",children:"BlogHeader"})," />"]}),`
      `,g(e.span,{className:"hljs-tag",children:["<",r(e.span,{className:"hljs-name",children:"div"})," ",r(e.span,{className:"hljs-attr",children:"className"}),"=",r(e.span,{className:"hljs-string",children:'"blog-body"'}),">"]}),`
        {children}
      `,g(e.span,{className:"hljs-tag",children:["</",r(e.span,{className:"hljs-name",children:"div"}),">"]}),`
    `,r(e.span,{className:"hljs-tag",children:"</>"})]}),`
  );
}
`]})})]})}function vs(n={}){let{wrapper:e}=n.components||{};return e?r(e,Object.assign({},n,{children:r(Se,n)})):Se(n)}var Ms=vs;var ne={};u(ne,{default:()=>Ds});import{Fragment as Cs,jsx as i,jsxs as _}from"https://esm.sh/react@18.2.0/jsx-runtime";function De(n){let e=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a",pre:"pre",code:"code",span:"span",h2:"h2"},n.components);return _(Cs,{children:[i(e.h1,{children:"Import From NPM"}),`
`,_(e.p,{children:["Aleph.js uses ",i(e.strong,{children:"ESM"})," imports syntax in Deno. To import modules from ",i(e.strong,{children:"NPM"}),`,
you can use `,i(e.a,{href:"https://esm.sh",children:"esm.sh"})," CDN that is maintained by Aleph.js team."]}),`
`,i(e.pre,{children:_(e.code,{className:"hljs language-jsx",children:[i(e.span,{className:"hljs-keyword",children:"import"})," useSWR ",i(e.span,{className:"hljs-keyword",children:"from"})," ",i(e.span,{className:"hljs-string",children:'"https://esm.sh/swr"'}),`;

`,i(e.span,{className:"hljs-keyword",children:"export"})," ",i(e.span,{className:"hljs-keyword",children:"default"})," ",i(e.span,{className:"hljs-keyword",children:"function"})," ",i(e.span,{className:"hljs-title function_",children:"About"}),"(",i(e.span,{className:"hljs-params"}),`) {
  `,i(e.span,{className:"hljs-keyword",children:"const"})," { data, error } = ",i(e.span,{className:"hljs-title function_",children:"useSWR"}),"(",i(e.span,{className:"hljs-string",children:'"/api/user"'}),`, fetcher);

  `,i(e.span,{className:"hljs-keyword",children:"if"}),` (error) {
    `,i(e.span,{className:"hljs-keyword",children:"return"})," ",_(e.span,{className:"xml",children:[_(e.span,{className:"hljs-tag",children:["<",i(e.span,{className:"hljs-name",children:"div"}),">"]}),"failed to load",_(e.span,{className:"hljs-tag",children:["</",i(e.span,{className:"hljs-name",children:"div"}),">"]})]}),`;
  }
  `,i(e.span,{className:"hljs-keyword",children:"if"}),` (!data) {
    `,i(e.span,{className:"hljs-keyword",children:"return"})," ",_(e.span,{className:"xml",children:[_(e.span,{className:"hljs-tag",children:["<",i(e.span,{className:"hljs-name",children:"div"}),">"]}),"loading...",_(e.span,{className:"hljs-tag",children:["</",i(e.span,{className:"hljs-name",children:"div"}),">"]})]}),`;
  }
  `,i(e.span,{className:"hljs-keyword",children:"return"})," ",_(e.span,{className:"xml",children:[_(e.span,{className:"hljs-tag",children:["<",i(e.span,{className:"hljs-name",children:"div"}),">"]}),"hello {data.name}!",_(e.span,{className:"hljs-tag",children:["</",i(e.span,{className:"hljs-name",children:"div"}),">"]})]}),`;
}
`]})}),`
`,i(e.h2,{children:"Using NPM Specifier"}),`
`,i(e.p,{children:"The NPM Specifier is extremely new added in Deno 1.25"}),`
`,i(e.pre,{children:_(e.code,{className:"hljs language-js",children:[i(e.span,{className:"hljs-keyword",children:"import"})," express ",i(e.span,{className:"hljs-keyword",children:"from"})," ",i(e.span,{className:"hljs-string",children:'"npm:express@5"'}),`;
`]})}),`
`,i(e.p,{children:"These npm specifiers have the following format:"}),`
`,i(e.pre,{children:_(e.code,{className:"hljs language-lua",children:["npm:<",i(e.span,{className:"hljs-built_in",children:"package"}),"-name>[@<version-requirement>][/<",i(e.span,{className:"hljs-built_in",children:"sub"}),"-",i(e.span,{className:"hljs-built_in",children:"path"}),`>]
`]})})]})}function Ss(n={}){let{wrapper:e}=n.components||{};return e?i(e,Object.assign({},n,{children:i(De,n)})):De(n)}var Ds=Ss;var ae={};u(ae,{default:()=>As});import{Fragment as Ls,jsx as t,jsxs as y}from"https://esm.sh/react@18.2.0/jsx-runtime";function Le(n){let e=Object.assign({h1:"h1",p:"p",code:"code",strong:"strong",pre:"pre",span:"span",h2:"h2",a:"a"},n.components);return y(Ls,{children:[t(e.h1,{children:"CSS Support"}),`
`,y(e.p,{children:["Aleph.js uses the ",t(e.code,{children:"index.html"}),` as the page entry template, that means you can
add any `,t(e.strong,{children:"CSS"})," files with ",t(e.code,{children:"link"})," tag:"]}),`
`,t(e.pre,{children:y(e.code,{className:"hljs language-html",children:[y(e.span,{className:"hljs-tag",children:["<",t(e.span,{className:"hljs-name",children:"html"}),">"]}),`
  `,y(e.span,{className:"hljs-tag",children:["<",t(e.span,{className:"hljs-name",children:"head"}),">"]}),`
    `,y(e.span,{className:"hljs-tag",children:["<",t(e.span,{className:"hljs-name",children:"title"}),">"]}),"Hello, World!",y(e.span,{className:"hljs-tag",children:["</",t(e.span,{className:"hljs-name",children:"title"}),">"]}),`
    `,y(e.span,{className:"hljs-tag",children:["<",t(e.span,{className:"hljs-name",children:"link"})," ",t(e.span,{className:"hljs-attr",children:"rel"}),"=",t(e.span,{className:"hljs-string",children:'"stylesheet"'})," ",t(e.span,{className:"hljs-attr",children:"href"}),"=",t(e.span,{className:"hljs-string",children:'"./style/app.css"'}),">"]}),`
  `,y(e.span,{className:"hljs-tag",children:["</",t(e.span,{className:"hljs-name",children:"head"}),">"]}),`
  `,y(e.span,{className:"hljs-tag",children:["<",t(e.span,{className:"hljs-name",children:"body"}),">"]}),`
    `,y(e.span,{className:"hljs-tag",children:["<",t(e.span,{className:"hljs-name",children:"h1"}),">"]}),"Hello, World!",y(e.span,{className:"hljs-tag",children:["</",t(e.span,{className:"hljs-name",children:"h1"}),">"]}),`
  `,y(e.span,{className:"hljs-tag",children:["</",t(e.span,{className:"hljs-name",children:"body"}),">"]}),`
`,y(e.span,{className:"hljs-tag",children:["</",t(e.span,{className:"hljs-name",children:"html"}),">"]}),`
`]})}),`
`,y(e.h2,{children:["CSS Imports (",t(e.code,{children:"@import"}),")"]}),`
`,y(e.p,{children:["Aleph.js uses ",t(e.a,{href:"https://lightningcss.dev/",children:"lightningcss"}),` to bundle your CSS code
when you use `,t(e.code,{children:"@import"})," to import other CSS files."]}),`
`,t(e.pre,{children:y(e.code,{className:"hljs language-css",children:[t(e.span,{className:"hljs-keyword",children:"@import"})," url(",t(e.span,{className:"hljs-string",children:'"./reset.css"'}),`);

`,t(e.span,{className:"hljs-selector-tag",children:"body"}),` {
  `,t(e.span,{className:"hljs-attribute",children:"font-family"}),": ",t(e.span,{className:"hljs-string",children:'"Roboto"'}),`, sans-serif;
}
`]})}),`
`,t(e.h2,{children:"Draft syntax"}),`
`,y(e.p,{children:["Aleph.js supports ",t(e.a,{href:"https://www.w3.org/TR/css-nesting-1/",children:"Nesting"}),` and
`,t(e.a,{href:"https://www.w3.org/TR/mediaqueries-5/#custom-mq",children:"Custom media queries"}),` draft
spec`]}),`
`,t(e.pre,{children:y(e.code,{className:"hljs language-css",children:[t(e.span,{className:"hljs-keyword",children:"@custom-media"})," --modern (",t(e.span,{className:"hljs-attribute",children:"color"}),"), (",t(e.span,{className:"hljs-attribute",children:"hover"}),`);

`,t(e.span,{className:"hljs-selector-class",children:".foo"}),` {
  `,t(e.span,{className:"hljs-attribute",children:"background"}),`: yellow;

  &`,t(e.span,{className:"hljs-selector-class",children:".bar"}),` {
    `,t(e.span,{className:"hljs-attribute",children:"color"}),`: green;
  }
}

`,t(e.span,{className:"hljs-keyword",children:"@media"})," (--modern) ",t(e.span,{className:"hljs-keyword",children:"and"})," (",t(e.span,{className:"hljs-attribute",children:"width"})," > ",t(e.span,{className:"hljs-number",children:"1024px"}),`) {
  `,t(e.span,{className:"hljs-selector-class",children:".a"}),` {
    `,t(e.span,{className:"hljs-attribute",children:"color"}),`: green;
  }
}
`]})})]})}function Rs(n={}){let{wrapper:e}=n.components||{};return e?t(e,Object.assign({},n,{children:t(Le,n)})):Le(n)}var As=Rs;var le={};u(le,{default:()=>Os});import{Fragment as Fs,jsx as m,jsxs as M}from"https://esm.sh/react@18.2.0/jsx-runtime";function Re(n){let e=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",pre:"pre",span:"span",h2:"h2",blockquote:"blockquote",a:"a",h3:"h3",ul:"ul",li:"li"},n.components);return M(Fs,{children:[m(e.h1,{children:"Hot Module Replacement"}),`
`,M(e.p,{children:["Hot Module Replacement (or HMR) allows modules to be updated at runtime without the need for a full refresh during ",m(e.strong,{children:"development"}),". To support this, Aleph.js's built-in ",m(e.strong,{children:"HMR"})," module creates a ",m(e.strong,{children:"WebSocket"})," connection to the dev server on the client, and the server listens for file changes. Once the HMR client gets an update signal from the server, Aleph.js will re-import the updated module."]}),`
`,m(e.p,{children:"For a CSS module, the old style will be removed after the new one is applied. For a React Component, Fast Refresh will re-render the component view without losing component state."}),`
`,M(e.p,{children:["You can use the ",m(e.code,{children:"hot"})," api to handle the module update event."]}),`
`,m(e.pre,{children:M(e.code,{className:"hljs language-js",children:[m(e.span,{className:"hljs-keyword",children:"import"}),".",m(e.span,{className:"hljs-property",children:"meta"}),".",m(e.span,{className:"hljs-property",children:"hot"}),"?.",m(e.span,{className:"hljs-title function_",children:"accept"}),"(",M(e.span,{className:"hljs-function",children:["(",m(e.span,{className:"hljs-params",children:"mod"}),")=>"]}),`{
  `,m(e.span,{className:"hljs-comment",children:"// update UI"}),`
})

`,m(e.span,{className:"hljs-comment",children:"// just reload the page when the module is updated"}),`
`,m(e.span,{className:"hljs-keyword",children:"import"}),".",m(e.span,{className:"hljs-property",children:"meta"}),".",m(e.span,{className:"hljs-property",children:"hot"}),"?.",m(e.span,{className:"hljs-title function_",children:"decline"}),`()
`]})}),`
`,m(e.h2,{children:"React Fast Refresh"}),`
`,M(e.blockquote,{children:[`
`,M(e.p,{children:[`It's a reimplementation of "hot reloading" with full support from React. It's originally `,m(e.a,{href:"https://twitter.com/dan_abramov/status/1169687758849400832",children:"shipped for React Native"}),", but most of the implementation is platform-independent. The plan is to use it across the board, as a replacement for purely userland solutions (like react-hot-loader). ",m(e.a,{href:"https://github.com/facebook/react/issues/16604#issuecomment-528663101",children:"\xB9"})]}),`
`]}),`
`,m("video",{src:"/assets/fast-refresh.mp4",loop:!0,autoplay:!0,muted:!0,controls:!0}),`
`,m(e.h3,{children:"Limits"}),`
`,M(e.ul,{children:[`
`,m(e.li,{children:"Fast Refresh only supports functional components with hooks."}),`
`,M(e.li,{children:["Functional components using default exports must be named: ",m(e.code,{children:"export default function ComponentName() {}"}),"."]}),`
`]})]})}function Ts(n={}){let{wrapper:e}=n.components||{};return e?m(e,Object.assign({},n,{children:m(Re,n)})):Re(n)}var Os=Ts;var re={};u(re,{default:()=>$s});import{Fragment as Xs,jsx as l,jsxs as p}from"https://esm.sh/react@18.2.0/jsx-runtime";import{Link as Is}from"aleph/react";function Ae(n){let e=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",span:"span",blockquote:"blockquote",h2:"h2",ul:"ul",li:"li",a:"a"},n.components);return p(Xs,{children:[l(e.h1,{children:"Server"}),`
`,l(e.p,{children:`In Aleph.js, the server handles all incoming requests, everything is
just-in-time, includes static files, server-side rendering, data fetching, and
module transpile.`}),`
`,l(e.pre,{children:p(e.code,{className:"hljs language-jsx",children:[l(e.span,{className:"hljs-comment",children:"// server.ts"}),`

`,l(e.span,{className:"hljs-keyword",children:"import"})," { serve } ",l(e.span,{className:"hljs-keyword",children:"from"})," ",l(e.span,{className:"hljs-string",children:'"aleph/server"'}),`;

`,l(e.span,{className:"hljs-title function_",children:"serve"}),`({
  `,l(e.span,{className:"hljs-attr",children:"port"}),": ",l(e.span,{className:"hljs-number",children:"8080"}),`,
  `,l(e.span,{className:"hljs-attr",children:"router"}),`: {
    `,l(e.span,{className:"hljs-attr",children:"glob"}),": ",l(e.span,{className:"hljs-string",children:'"./routes/**/*.{ts,tsx}"'}),`,
  },
  `,l(e.span,{className:"hljs-attr",children:"middlewares"}),": [",l(e.span,{className:"hljs-comment",children:"/* ... */"}),`],
  `,l(e.span,{className:"hljs-attr",children:"uncoss"}),": {",l(e.span,{className:"hljs-comment",children:"/* ... */"}),`},
  `,l(e.span,{className:"hljs-attr",children:"ssr"}),": ",p(e.span,{className:"hljs-function",children:["(",l(e.span,{className:"hljs-params",children:"ctx"}),") =>"]}),` {
    `,l(e.span,{className:"hljs-keyword",children:"return"})," ",l(e.span,{className:"hljs-title function_",children:"renderToString"}),"(",l(e.span,{className:"xml",children:p(e.span,{className:"hljs-tag",children:["<",l(e.span,{className:"hljs-name",children:"App"})," />"]})}),`);
  },
});
`]})}),`
`,p(e.blockquote,{children:[`
`,p(e.p,{children:[`Normally you don't need to configure the server by using Aleph's template
created by the `,l(e.code,{children:"init"}),` script. To learn more about server configuration, check
out the`]}),`
`,p(e.p,{children:[l(Is,{to:"/docs/api-reference/server-config",children:"Server Config API"}),"."]}),`
`]}),`
`,l(e.h2,{children:l(e.code,{children:"index.html"})}),`
`,p(e.p,{children:["Aleph.js uses ",l(e.code,{children:"index.html"}),` (in the project root directory) as the page html
output template, you can add your own tags to it, like `,l(e.code,{children:"<meta>"}),", ",l(e.code,{children:"<script>"}),`,
`,l(e.code,{children:"<link>"}),", etc."]}),`
`,l(e.pre,{children:p(e.code,{className:"hljs language-html",children:[p(e.span,{className:"hljs-meta",children:["<!DOCTYPE ",l(e.span,{className:"hljs-keyword",children:"html"}),">"]}),`
`,p(e.span,{className:"hljs-tag",children:["<",l(e.span,{className:"hljs-name",children:"html"})," ",l(e.span,{className:"hljs-attr",children:"lang"}),"=",l(e.span,{className:"hljs-string",children:'"en"'}),">"]}),`

`,p(e.span,{className:"hljs-tag",children:["<",l(e.span,{className:"hljs-name",children:"head"}),">"]}),`
  `,p(e.span,{className:"hljs-tag",children:["<",l(e.span,{className:"hljs-name",children:"meta"})," ",l(e.span,{className:"hljs-attr",children:"charset"}),"=",l(e.span,{className:"hljs-string",children:'"UTF-8"'}),">"]}),`
  `,p(e.span,{className:"hljs-tag",children:["<",l(e.span,{className:"hljs-name",children:"meta"})," ",l(e.span,{className:"hljs-attr",children:"name"}),"=",l(e.span,{className:"hljs-string",children:'"viewport"'})," ",l(e.span,{className:"hljs-attr",children:"content"}),"=",l(e.span,{className:"hljs-string",children:'"width=device-width, initial-scale=1.0"'}),">"]}),`
  `,p(e.span,{className:"hljs-tag",children:["<",l(e.span,{className:"hljs-name",children:"link"})," ",l(e.span,{className:"hljs-attr",children:"rel"}),"=",l(e.span,{className:"hljs-string",children:'"icon"'})," ",l(e.span,{className:"hljs-attr",children:"href"}),"=",l(e.span,{className:"hljs-string",children:'"./assets/logo.svg"'}),">"]}),`
  `,p(e.span,{className:"hljs-tag",children:["<",l(e.span,{className:"hljs-name",children:"link"})," ",l(e.span,{className:"hljs-attr",children:"rel"}),"=",l(e.span,{className:"hljs-string",children:'"stylesheet"'})," ",l(e.span,{className:"hljs-attr",children:"href"}),"=",l(e.span,{className:"hljs-string",children:'"./style/app.css"'}),">"]}),`
`,p(e.span,{className:"hljs-tag",children:["</",l(e.span,{className:"hljs-name",children:"head"}),">"]}),`

`,p(e.span,{className:"hljs-tag",children:["<",l(e.span,{className:"hljs-name",children:"body"}),">"]}),`
  `,p(e.span,{className:"hljs-tag",children:["<",l(e.span,{className:"hljs-name",children:"div"})," ",l(e.span,{className:"hljs-attr",children:"id"}),"=",l(e.span,{className:"hljs-string",children:'"root"'})," ",l(e.span,{className:"hljs-attr",children:"data-ssr-root"}),">"]}),p(e.span,{className:"hljs-tag",children:["</",l(e.span,{className:"hljs-name",children:"div"}),">"]}),`
  `,p(e.span,{className:"hljs-tag",children:["<",l(e.span,{className:"hljs-name",children:"script"})," ",l(e.span,{className:"hljs-attr",children:"type"}),"=",l(e.span,{className:"hljs-string",children:'"module"'})," ",l(e.span,{className:"hljs-attr",children:"src"}),"=",l(e.span,{className:"hljs-string",children:'"./main.ts"'}),">"]}),p(e.span,{className:"hljs-tag",children:["</",l(e.span,{className:"hljs-name",children:"script"}),">"]}),`
  `,p(e.span,{className:"hljs-tag",children:["<",l(e.span,{className:"hljs-name",children:"script"}),">"]}),p(e.span,{className:"javascript",children:[l(e.span,{className:"hljs-variable language_",children:"console"}),".",l(e.span,{className:"hljs-title function_",children:"log"}),"(",l(e.span,{className:"hljs-string",children:'"Hello world!"'}),")"]}),p(e.span,{className:"hljs-tag",children:["</",l(e.span,{className:"hljs-name",children:"script"}),">"]}),`
`,p(e.span,{className:"hljs-tag",children:["</",l(e.span,{className:"hljs-name",children:"body"}),">"]}),`

`,p(e.span,{className:"hljs-tag",children:["</",l(e.span,{className:"hljs-name",children:"html"}),">"]}),`
`]})}),`
`,p(e.ul,{children:[`
`,p(e.li,{children:["The attribute ",l(e.code,{children:"data-ssr-root"}),` is to point out the root element for server-side
rendering.`]}),`
`,p(e.li,{children:[`Aleph.js will transpile modules for browsers automatically, you can safely add
non-JS modules like `,l(e.code,{children:"JSX"})," or ",l(e.code,{children:"TS"}),"."]}),`
`,p(e.li,{children:["CSS files will be bundled using ",l(e.a,{href:"https://lightningcss.dev/",children:"lightningcss"})]}),`
`]})]})}function qs(n={}){let{wrapper:e}=n.components||{};return e?l(e,Object.assign({},n,{children:l(Ae,n)})):Ae(n)}var $s=qs;var ce={};u(ce,{default:()=>Us});import{Fragment as Hs,jsx as v,jsxs as q}from"https://esm.sh/react@18.2.0/jsx-runtime";function Fe(n){let e=Object.assign({h1:"h1",p:"p",strong:"strong",em:"em",code:"code",pre:"pre",span:"span"},n.components);return q(Hs,{children:[v(e.h1,{children:"Server-side Rendering"}),`
`,q(e.p,{children:["By default, Aleph.js ",v(e.strong,{children:"pre-renders"})," every page. This means that Aleph.js generates HTML for each page in advance, instead of rendering it with client-side JavaScript. Pre-rendering can result in better performance and SEO."]}),`
`,q(e.p,{children:["Each generated HTML page only needs a small amount of JavaScript. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called ",v(e.em,{children:"hydration"}),".)"]}),`
`,q(e.p,{children:["You can disable ",v(e.strong,{children:"SSR"})," functionality in ",v(e.code,{children:"server.ts"}),":"]}),`
`,v(e.pre,{children:q(e.code,{className:"hljs language-ts",children:[v(e.span,{className:"hljs-title function_",children:"serve"}),`({
  `,v(e.span,{className:"hljs-attr",children:"ssr"}),": ",v(e.span,{className:"hljs-literal",children:"true"}),`
})
`]})})]})}function Ps(n={}){let{wrapper:e}=n.components||{};return e?v(e,Object.assign({},n,{children:v(Fe,n)})):Fe(n)}var Us=Ps;var te={};u(te,{default:()=>Js});import{Fragment as Es,jsx as f,jsxs as P}from"https://esm.sh/react@18.2.0/jsx-runtime";function Te(n){let e=Object.assign({h1:"h1",p:"p",a:"a",code:"code",pre:"pre",span:"span"},n.components);return P(Es,{children:[f(e.h1,{children:"Unocss"}),`
`,P(e.p,{children:["Aleph.js uses ",f(e.a,{href:"https://github.com/unocss/unocss/",children:"Unocss"}),` as the Atomic CSS
engine. To enable unocss, add `,f(e.code,{children:"presets"})," to the ",f(e.code,{children:"unocss"})," option in ",f(e.code,{children:"server.ts"}),":"]}),`
`,f(e.pre,{children:P(e.code,{className:"hljs language-js",children:[f(e.span,{className:"hljs-keyword",children:"import"})," presetUno ",f(e.span,{className:"hljs-keyword",children:"from"})," ",f(e.span,{className:"hljs-string",children:'"https://esm.sh/@unocss/preset-uno"'}),`;
`,f(e.span,{className:"hljs-keyword",children:"import"})," { serve } ",f(e.span,{className:"hljs-keyword",children:"from"})," ",f(e.span,{className:"hljs-string",children:'"aleph/server"'}),`;

`,f(e.span,{className:"hljs-title function_",children:"serve"}),`({
  `,f(e.span,{className:"hljs-attr",children:"unocss"}),`: {
    `,f(e.span,{className:"hljs-attr",children:"presets"}),": [",f(e.span,{className:"hljs-title function_",children:"presetUno"}),`()],
  },
});
`]})}),`
`,P(e.p,{children:["Check out the ",f(e.a,{href:"https://github.com/unocss/unocss/#presets",children:"available presets"}),` or
Unocss `,f(e.a,{href:"https://github.com/unocss/unocss/#configurations",children:"configurations"}),"."]})]})}function Ws(n={}){let{wrapper:e}=n.components||{};return e?f(e,Object.assign({},n,{children:f(Te,n)})):Te(n)}var Js=Ws;var he={};u(he,{default:()=>zs});import{Fragment as Gs,jsx as $,jsxs as Ys}from"https://esm.sh/react@18.2.0/jsx-runtime";function Oe(n){let e=Object.assign({h1:"h1",p:"p",em:"em"},n.components);return Ys(Gs,{children:[$(e.h1,{children:"Vue"}),`
`,$(e.p,{children:$(e.em,{children:"WIP"})})]})}function Bs(n={}){let{wrapper:e}=n.components||{};return e?$(e,Object.assign({},n,{children:$(Oe,n)})):Oe(n)}var zs=Bs;var ie={};u(ie,{default:()=>Qs});import{Fragment as Vs,jsx as H,jsxs as Zs}from"https://esm.sh/react@18.2.0/jsx-runtime";function Xe(n){let e=Object.assign({h1:"h1",p:"p",em:"em"},n.components);return Zs(Vs,{children:[H(e.h1,{children:"React"}),`
`,H(e.p,{children:H(e.em,{children:"WIP"})})]})}function Ks(n={}){let{wrapper:e}=n.components||{};return e?H(e,Object.assign({},n,{children:H(Xe,n)})):Xe(n)}var Qs=Ks;var Dn={"/":en,"/docs":sn,"/docs/browser-support":U,"/docs/deployment":E,"/docs/index":W,"/docs/get-started":J,"/docs/framework/vue":G,"/docs/framework/react-mdx":Y,"/docs/framework/solid":B,"/docs/framework/react":z,"/docs/framework/yew":V,"/docs/api-reference/middleware":Z,"/docs/api-reference/server-config":K,"/docs/basic-concepts/import-maps":Q,"/docs/basic-concepts/static-file-serving":ee,"/docs/basic-concepts/routing":se,"/docs/basic-concepts/import-from-npm":ne,"/docs/basic-concepts/css-support":ae,"/docs/basic-concepts/hmr":le,"/docs/basic-concepts/server":re,"/docs/basic-concepts/ssr":ce,"/docs/basic-concepts/unocss":te,"/docs/api-reference/framework/vue":he,"/docs/api-reference/framework/react":ie,depGraph:{"modules":[{"specifier":"./routes/docs/browser-support.md"},{"specifier":"./routes/docs/deployment.md"},{"specifier":"./routes/docs/index.md"},{"specifier":"./routes/docs/get-started.md"},{"specifier":"./routes/docs/framework/vue.md"},{"specifier":"./routes/docs/framework/react-mdx.md"},{"specifier":"./routes/docs/framework/solid.md"},{"specifier":"./routes/docs/framework/react.md"},{"specifier":"./routes/docs/framework/yew.md"},{"specifier":"./routes/docs/api-reference/middleware.md"},{"specifier":"./routes/docs/api-reference/server-config.md"},{"specifier":"./routes/docs/basic-concepts/import-maps.md"},{"specifier":"./routes/docs/basic-concepts/static-file-serving.md"},{"specifier":"./routes/docs/basic-concepts/routing.md"},{"specifier":"./routes/docs/basic-concepts/import-from-npm.md"},{"specifier":"./routes/docs/basic-concepts/css-support.md"},{"specifier":"./routes/docs/basic-concepts/hmr.md"},{"specifier":"./routes/docs/basic-concepts/server.md"},{"specifier":"./routes/docs/basic-concepts/ssr.md"},{"specifier":"./routes/docs/basic-concepts/unocss.md"},{"specifier":"./routes/docs/api-reference/framework/vue.md"},{"specifier":"./routes/docs/api-reference/framework/react.md"}]}};export{Dn as default};
