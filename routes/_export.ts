// Imports route modules for serverless env that doesn't support the dynamic import.
// This module will be updated automaticlly in develoment mode, do NOT edit it manually.
// deno-fmt-ignore-file
// deno-lint-ignore-file
// @ts-nocheck
var Pe=Object.defineProperty;var N=(n,e)=>{for(var oe in e)Pe(n,oe,{get:e[oe],enumerable:!0})};import*as sn from"./index.tsx";import*as nn from"./docs.tsx";var E={};N(E,{default:()=>$e});import{Fragment as He,jsx as g,jsxs as X}from"https://esm.sh/react@18.2.0/jsx-runtime";function pe(n){let e=Object.assign({h1:"h1",p:"p",a:"a",strong:"strong",ul:"ul",li:"li",h2:"h2",code:"code",pre:"pre",span:"span"},n.components);return X(He,{children:[g(e.h1,{children:"Browser Support"}),`
`,X(e.p,{children:[`Aleph.js requires a modern browser to support
`,g(e.a,{href:"https://caniuse.com/#feat=es6-module",children:"native ES module imports"})," and ",g(e.strong,{children:`dynamic
imports`}),":"]}),`
`,X(e.ul,{children:[`
`,g(e.li,{children:"Chrome >= 61"}),`
`,g(e.li,{children:"Edge >= 16"}),`
`,g(e.li,{children:"Firefox >= 60"}),`
`,g(e.li,{children:"Safari >= 11"}),`
`,g(e.li,{children:"Opera >= 48"}),`
`]}),`
`,g(e.h2,{children:"Build Target"}),`
`,X(e.p,{children:["Aleph.js uses ",g(e.strong,{children:"esbuild"}),` to bundle modules at optimization time for production.
You can set the `,g(e.code,{children:"optimization.buildTarget"})," in the server config."]}),`
`,g(e.pre,{children:X(e.code,{className:"hljs language-js",children:[g(e.span,{className:"hljs-keyword",children:"import"})," { serve } ",g(e.span,{className:"hljs-keyword",children:"from"})," ",g(e.span,{className:"hljs-string",children:'"aleph/server"'}),`;

`,g(e.span,{className:"hljs-title function_",children:"serve"}),`({
  `,g(e.span,{className:"hljs-attr",children:"optimization"}),`: {
    `,g(e.span,{className:"hljs-attr",children:"buildTarget"}),": ",g(e.span,{className:"hljs-string",children:'"es2020"'}),`,
  },
});
`]})})]})}function qe(n={}){let{wrapper:e}=n.components||{};return e?g(e,Object.assign({},n,{children:g(pe,n)})):pe(n)}var $e=qe;var W={};N(W,{default:()=>We});import{Fragment as Ue,jsx as v,jsxs as D}from"https://esm.sh/react@18.2.0/jsx-runtime";function me(n){let e=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h2:"h2",a:"a",blockquote:"blockquote"},n.components);return D(Ue,{children:[v(e.h1,{children:"Deployment on your own host with Deno CLI"}),`
`,D(e.p,{children:["You can run your app in production mode by ",v(e.code,{children:"deno"})," CLI."]}),`
`,v(e.pre,{children:v(e.code,{className:"hljs language-bash",children:`deno run --allow-network --allow-env --allow-read --allow-write server.ts
`})}),`
`,v(e.h2,{children:"Deploy on Deno Deploy"}),`
`,D(e.p,{children:["To deploy your app to ",v(e.a,{href:"https://deno.com/deploy",children:"Deno Deploy"}),", please push your app to ",v(e.a,{href:"https://github.com",children:"Github"})," and create a new project on ",v(e.a,{href:"https://dash.deno.com/new",children:"Deno Deploy"}),"."]}),`
`,D(e.p,{children:["Then link to the Repo and set the entrypoint to ",v(e.code,{children:"server.ts"})]}),`
`,D(e.blockquote,{children:[`
`,D(e.p,{children:["See the ",v(e.a,{href:"https://aleph-hello.deno.dev/",children:"hello-world"})," example on ",v(e.a,{href:"https://deno.com/deploy",children:"Deno Deploy"}),"."]}),`
`]})]})}function Ee(n={}){let{wrapper:e}=n.components||{};return e?v(e,Object.assign({},n,{children:v(me,n)})):me(n)}var We=Ee;var J={};N(J,{default:()=>Ye});import{Fragment as Je,jsx as t,jsxs as x}from"https://esm.sh/react@18.2.0/jsx-runtime";import{Link as I}from"aleph/react";function je(n){let e=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a",blockquote:"blockquote",em:"em",code:"code",h2:"h2",ul:"ul",li:"li"},n.components);return x(Je,{children:[t(e.h1,{children:"Aleph.js"}),`
`,x(e.p,{children:[t(e.strong,{children:"Aleph.js"})," (or ",t(e.strong,{children:"Aleph"})," or ",t(e.strong,{children:"\u05D0"})," or ",t(e.strong,{children:"\u963F\u83B1\u592B"}),", ",t("samp",{children:"\u02C8\u0251\u02D0l\u025Bf"}),`) is a
fullstack framework in `,t(e.a,{href:"https://deno.land",children:"Deno"}),". Inspired by ",t(e.a,{href:"https://nextjs.org",children:"Next.js"}),", ",t(e.a,{href:"https://remix.run",children:"Remix"})," and ",t(e.a,{href:"https://vitejs.dev",children:"Vite"}),"."]}),`
`,x(e.blockquote,{children:[`
`,x(e.p,{children:["The name is taken from the book ",t(e.a,{href:"http://phinnweb.org/links/literature/borges/aleph.html",children:t(e.em,{children:"The Aleph"})})," by ",t(e.strong,{children:"Jorge Luis Borges"}),"."]}),`
`]}),`
`,x(e.p,{children:["Aleph.js is modern framework that doesn't need ",t(e.strong,{children:"webpack"}),` or other bundler
since it uses the `,t(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",children:"ES Module"}),` syntax during development. Every module only needs
to be compiled once, when a module changes, Aleph.js just needs to re-compile
that single module. There is no time wasted `,t(e.em,{children:"re-bundling"}),` everytime a change is
made. This, along with Hot Module Replacement (`,t(e.strong,{children:"HMR"}),") and ",t(e.strong,{children:"Fast Refresh"}),`,
leads to instant updates in the browser.`]}),`
`,x(e.p,{children:["Aleph.js uses modern tools to build your app. It transpiles code using ",t(e.a,{href:"https://swc.rs",children:"swc"}),` in
WASM with high performance, and bundles modules with `,t(e.a,{href:"https://github.com/evanw/esbuild",children:"esbuild"}),` at optimization
time extremely fast.`]}),`
`,x(e.p,{children:["Aleph.js works on top of ",t(e.strong,{children:"Deno"}),", a ",t(e.em,{children:"simple"}),", ",t(e.em,{children:"modern"})," and ",t(e.em,{children:"secure"}),` runtime for
JavaScript and TypeScript. All dependencies are imported using URLs, and managed
by Deno cache system. No `,t(e.code,{children:"package.json"})," and ",t(e.code,{children:"node_modules"})," directory needed."]}),`
`,t(e.h2,{children:"Features"}),`
`,x(e.ul,{children:[`
`,t(e.li,{children:"Zero Config"}),`
`,t(e.li,{children:"No build step"}),`
`,t(e.li,{children:"File-system Routing"}),`
`,t(e.li,{children:"Just-in-time Server-side Rendering(SSR)"}),`
`,t(e.li,{children:"Streaming SSR"}),`
`,t(e.li,{children:"Support Typescript/JSX in Deno out of the box"}),`
`,x(e.li,{children:["Built-in ",t(e.a,{href:"https://github.com/unocss/unocss",children:"Unocss"})," (Automatic CSS)"]}),`
`,t(e.li,{children:"Import Maps"}),`
`,t(e.li,{children:"Hot Module Replacement (or HMR)"}),`
`,t(e.li,{children:"Support Middware"}),`
`,t(e.li,{children:"Custom Module Loader like MDX"}),`
`]}),`
`,t(e.h2,{children:"Supported Frameworks"}),`
`,x(e.ul,{children:[`
`,x(e.li,{children:[t(e.a,{href:"https://reactjs.org",children:"React"})," (",t(I,{to:"/docs/framework/react",children:"docs"}),", ",t(e.a,{href:"https://github.com/alephjs/aleph.js/tree/main/examples/react-app",children:"example"}),")"]}),`
`,x(e.li,{children:[t(e.a,{href:"https://reactjs.org",children:"React"})," with ",t(e.a,{href:"https://mdxjs.com",children:"MDX"})," (",t(I,{to:"/docs/framework/react-mdx",children:"docs"}),", ",t(e.a,{href:"https://github.com/alephjs/aleph.js/tree/main/examples/react-mdx-app",children:"example"}),")"]}),`
`,x(e.li,{children:[t(e.a,{href:"https://vuejs.org",children:"Vue"})," (",t(I,{to:"/docs/framework/vue",children:"docs"}),", ",t(e.a,{href:"https://github.com/alephjs/aleph.js/tree/main/examples/vue-app",children:"example"}),")"]}),`
`,x(e.li,{children:[t(e.a,{href:"https://www.solidjs.com/",children:"SolidJS"})," (",t(I,{to:"/docs/framework/solid",children:"docs"}),", ",t(e.a,{href:"https://github.com/alephjs/aleph.js/tree/main/examples/solid-app",children:"example"}),`)
`,t(e.em,{children:"Experimental"})]}),`
`,x(e.li,{children:[t(e.a,{href:"https://yew.rs",children:"Yew"})," (",t(I,{to:"/docs/framework/yew",children:"docs"}),", ",t(e.a,{href:"https://github.com/alephjs/aleph.js/tree/main/examples/yew-app",children:"example"}),") ",t(e.em,{children:"In Rust"})]}),`
`]}),`
`,x(e.p,{children:["Plan to support: ",t(e.a,{href:"https://svelte.dev/",children:"Svelte"}),", ",t(e.a,{href:"https://lit.dev/",children:"Lit"}),", etc.."]}),`
`,t(e.h2,{children:"Status"}),`
`,x(e.p,{children:["Currently in ",t(e.strong,{children:"beta"}),", not ready for production."]}),`
`,t(e.h2,{children:"License"}),`
`,x(e.p,{children:["Under the ",t(e.a,{href:"https://opensource.org/licenses/MIT",children:"MIT"})," License."]})]})}function Ge(n={}){let{wrapper:e}=n.components||{};return e?t(e,Object.assign({},n,{children:t(je,n)})):je(n)}var Ye=Ge;var G={};N(G,{default:()=>Ve});import{Fragment as Be,jsx as _,jsxs as L}from"https://esm.sh/react@18.2.0/jsx-runtime";function ue(n){let e=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a",h2:"h2",pre:"pre",code:"code",span:"span"},n.components);return L(Be,{children:[_(e.h1,{children:"Get Started!"}),`
`,L(e.p,{children:["Welcome to use ",_(e.strong,{children:"Aleph.js"}),"!"]}),`
`,L(e.p,{children:["If you are new to Aleph.js you should check out the ",_(e.a,{href:"/docs/",children:"About"})," page."]}),`
`,_(e.h2,{children:"Usage"}),`
`,_(e.p,{children:"Create a new app:"}),`
`,_(e.pre,{children:L(e.code,{className:"hljs language-bash",children:[`deno run -A -r https://alephjs.org/init.ts
`,_(e.span,{className:"hljs-built_in",children:"cd"}),` my-app
`]})}),`
`,L(e.p,{children:["Start the app in ",_(e.code,{children:"development"})," mode:"]}),`
`,_(e.pre,{children:_(e.code,{className:"hljs language-bash",children:`deno task dev
`})}),`
`,L(e.p,{children:["Start the app in ",_(e.code,{children:"production"})," mode:"]}),`
`,_(e.pre,{children:_(e.code,{className:"hljs language-bash",children:`deno task start
`})}),`
`,_(e.p,{children:"Optimize the application (bundling, ssg, etc.):"}),`
`,_(e.pre,{children:_(e.code,{className:"hljs language-bash",children:`deno task opt
`})})]})}function ze(n={}){let{wrapper:e}=n.components||{};return e?_(e,Object.assign({},n,{children:_(ue,n)})):ue(n)}var Ve=ze;var Y={};N(Y,{default:()=>Qe});import{Fragment as Ze,jsx as T,jsxs as Ne}from"https://esm.sh/react@18.2.0/jsx-runtime";function ge(n){let e=Object.assign({h1:"h1",p:"p",a:"a",pre:"pre",code:"code"},n.components);return Ne(Ze,{children:[T(e.h1,{children:"Vue"}),`
`,Ne(e.p,{children:["Create a new ",T(e.a,{href:"https://vuejs.org",children:"Vue"})," app:"]}),`
`,T(e.pre,{children:T(e.code,{className:"hljs language-bash",children:`deno run -A -r https://alephjs.org/init.ts --template=vue
`})})]})}function Ke(n={}){let{wrapper:e}=n.components||{};return e?T(e,Object.assign({},n,{children:T(ge,n)})):ge(n)}var Qe=Ke;var B={};N(B,{default:()=>ns});import{Fragment as es,jsx as p,jsxs as R}from"https://esm.sh/react@18.2.0/jsx-runtime";function fe(n){let e=Object.assign({h1:"h1",p:"p",a:"a",pre:"pre",code:"code",h2:"h2",strong:"strong",span:"span",blockquote:"blockquote"},n.components);return R(es,{children:[p(e.h1,{children:"React with MDX"}),`
`,R(e.p,{children:["Create a new ",p(e.a,{href:"https://reactjs.org",children:"React"})," app with ",p(e.a,{href:"https://mdxjs.com",children:"MDX"}),`
support:`]}),`
`,p(e.pre,{children:p(e.code,{className:"hljs language-bash",children:`deno run -A -r https://alephjs.org/init.ts --template=react-mdx
`})}),`
`,p(e.h2,{children:"Extending MDX"}),`
`,R(e.p,{children:["You can add ",p(e.a,{href:"https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins",children:"remark plugins"})," and ",p(e.a,{href:"https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#list-of-plugins",children:"rehype plugins"})," for the ",p(e.strong,{children:"MDX Loader"})," in ",p(e.code,{children:"server.ts"})]}),`
`,p(e.pre,{children:R(e.code,{className:"hljs language-js",children:[p(e.span,{className:"hljs-keyword",children:"import"})," { serve } ",p(e.span,{className:"hljs-keyword",children:"from"})," ",p(e.span,{className:"hljs-string",children:'"aleph/server"'}),`;
`,p(e.span,{className:"hljs-keyword",children:"import"})," remarkFrontmatter ",p(e.span,{className:"hljs-keyword",children:"from"})," ",p(e.span,{className:"hljs-string",children:'"https://esm.sh/remark-frontmatter@4.0.1"'}),`;
`,p(e.span,{className:"hljs-keyword",children:"import"})," rehypeHighlight ",p(e.span,{className:"hljs-keyword",children:"from"})," ",p(e.span,{className:"hljs-string",children:'"https://esm.sh/rehype-highlight@5.0.2"'}),`;

`,p(e.span,{className:"hljs-title function_",children:"serve"}),`({
  `,p(e.span,{className:"hljs-attr",children:"loaders"}),`: [
    `,p(e.span,{className:"hljs-keyword",children:"new"})," ",p(e.span,{className:"hljs-title class_",children:"MDXLoader"}),`({
      `,p(e.span,{className:"hljs-attr",children:"remarkPlugins"}),`: [remarkFrontmatter],
      `,p(e.span,{className:"hljs-attr",children:"rehypePlugins"}),`: [rehypeHighlight],
    }),
  ],
  `,p(e.span,{className:"hljs-attr",children:"router"}),`: {
    `,p(e.span,{className:"hljs-attr",children:"glob"}),": ",p(e.span,{className:"hljs-string",children:'"./routes/**/*.{tsx,mdx,md}"'}),`,
  },
  `,p(e.span,{className:"hljs-attr",children:"ssr"}),": ",p(e.span,{className:"hljs-literal",children:"true"}),`,
});
`]})}),`
`,R(e.blockquote,{children:[`
`,R(e.p,{children:["See ",p(e.a,{href:"https://mdxjs.com/docs/extending-mdx/",children:"Extending MDX"})," for more details."]}),`
`]})]})}function ss(n={}){let{wrapper:e}=n.components||{};return e?p(e,Object.assign({},n,{children:p(fe,n)})):fe(n)}var ns=ss;var z={};N(z,{default:()=>rs});import{Fragment as as,jsx as A,jsxs as we}from"https://esm.sh/react@18.2.0/jsx-runtime";function ye(n){let e=Object.assign({h1:"h1",p:"p",a:"a",pre:"pre",code:"code"},n.components);return we(as,{children:[A(e.h1,{children:"SolidJS"}),`
`,we(e.p,{children:["Create a new ",A(e.a,{href:"https://www.solidjs.com/",children:"SolidJS"})," app:"]}),`
`,A(e.pre,{children:A(e.code,{className:"hljs language-bash",children:`deno run -A -r https://alephjs.org/init.ts --template=solid
`})})]})}function ls(n={}){let{wrapper:e}=n.components||{};return e?A(e,Object.assign({},n,{children:A(ye,n)})):ye(n)}var rs=ls;var V={};N(V,{default:()=>hs});import{Fragment as cs,jsx as a,jsxs as o}from"https://esm.sh/react@18.2.0/jsx-runtime";function be(n){let e=Object.assign({h1:"h1",p:"p",a:"a",pre:"pre",code:"code",h2:"h2",strong:"strong",span:"span",blockquote:"blockquote",ul:"ul",li:"li"},n.components);return o(cs,{children:[a(e.h1,{children:"React"}),`
`,o(e.p,{children:["Create a new ",a(e.a,{href:"https://reactjs.org",children:"React"})," app:"]}),`
`,a(e.pre,{children:a(e.code,{className:"hljs language-bash",children:`deno run -A -r https://alephjs.org/init.ts --template=react
`})}),`
`,a(e.h2,{children:"Pages"}),`
`,o(e.p,{children:["In Aleph.js, a ",a(e.strong,{children:"page"}),` is a
`,a(e.a,{href:"https://reactjs.org/docs/components-and-props.html",children:"React Component"}),` exported
as `,a(e.strong,{children:"default"})," from a ",a(e.code,{children:".jsx"})," or ",a(e.code,{children:".tsx"})," file in the ",a(e.code,{children:"routes"})," directory."]}),`
`,a(e.p,{children:"Each page is associated with a route based on its file name."}),`
`,o(e.p,{children:[a(e.strong,{children:"Example"}),": If you create ",a(e.code,{children:"routes/about.tsx"}),` and it exports a React component
like below, it will be accessible at `,a(e.code,{children:"/about"}),"."]}),`
`,a(e.pre,{children:o(e.code,{className:"hljs language-jsx",children:[a(e.span,{className:"hljs-keyword",children:"export"})," ",a(e.span,{className:"hljs-keyword",children:"default"})," ",a(e.span,{className:"hljs-keyword",children:"function"})," ",a(e.span,{className:"hljs-title function_",children:"About"}),"(",a(e.span,{className:"hljs-params"}),`) {
  `,a(e.span,{className:"hljs-keyword",children:"return"})," ",o(e.span,{className:"xml",children:[o(e.span,{className:"hljs-tag",children:["<",a(e.span,{className:"hljs-name",children:"h1"}),">"]}),"About Me",o(e.span,{className:"hljs-tag",children:["</",a(e.span,{className:"hljs-name",children:"h1"}),">"]})]}),`;
}
`]})}),`
`,o(e.blockquote,{children:[`
`,a(e.p,{children:"To learn more about routing, check out the Routing documentation."}),`
`]}),`
`,a(e.h2,{children:"Use Data"}),`
`,a(e.h2,{children:"Use Router"}),`
`,a(e.h2,{children:"Linking Between Pages"}),`
`,o(e.p,{children:["Aleph.js provides a ",a(e.code,{children:"Link"}),` component to move between pages without refresh whole
page, similarly to a SPA (single-page application).`]}),`
`,a(e.pre,{children:o(e.code,{className:"hljs language-jsx",children:[a(e.span,{className:"hljs-keyword",children:"import"})," { ",a(e.span,{className:"hljs-title class_",children:"Link"})," } ",a(e.span,{className:"hljs-keyword",children:"from"})," ",a(e.span,{className:"hljs-string",children:'"aleph/react"'}),`;

`,a(e.span,{className:"hljs-keyword",children:"export"})," ",a(e.span,{className:"hljs-keyword",children:"default"})," ",a(e.span,{className:"hljs-keyword",children:"function"})," ",a(e.span,{className:"hljs-title function_",children:"Nav"}),"(",a(e.span,{className:"hljs-params"}),`) {
  `,a(e.span,{className:"hljs-keyword",children:"return"}),` (
    `,o(e.span,{className:"xml",children:[o(e.span,{className:"hljs-tag",children:["<",a(e.span,{className:"hljs-name",children:"nav"}),">"]}),`
      `,o(e.span,{className:"hljs-tag",children:["<",a(e.span,{className:"hljs-name",children:"Link"})," ",a(e.span,{className:"hljs-attr",children:"to"}),"=",a(e.span,{className:"hljs-string",children:'"/"'}),">"]}),"Home",o(e.span,{className:"hljs-tag",children:["</",a(e.span,{className:"hljs-name",children:"Link"}),">"]}),`
      `,o(e.span,{className:"hljs-tag",children:["<",a(e.span,{className:"hljs-name",children:"Link"})," ",a(e.span,{className:"hljs-attr",children:"to"}),"=",a(e.span,{className:"hljs-string",children:'"/about"'}),">"]}),"About",o(e.span,{className:"hljs-tag",children:["</",a(e.span,{className:"hljs-name",children:"Link"}),">"]}),`
      `,o(e.span,{className:"hljs-tag",children:["<",a(e.span,{className:"hljs-name",children:"Link"})," ",a(e.span,{className:"hljs-attr",children:"to"}),"=",a(e.span,{className:"hljs-string",children:'"/blog/hello-world"'}),">"]}),"Hello World",o(e.span,{className:"hljs-tag",children:["</",a(e.span,{className:"hljs-name",children:"Link"}),">"]}),`
    `,o(e.span,{className:"hljs-tag",children:["</",a(e.span,{className:"hljs-name",children:"nav"}),">"]})]}),`
  );
}
`]})}),`
`,o(e.p,{children:["In the example above we have three links, each one maps a path (",a(e.code,{children:"to"}),`) to the
specified page:`]}),`
`,o(e.ul,{children:[`
`,o(e.li,{children:[a(e.code,{children:"/"})," \u2192 ",a(e.code,{children:"pages/index.tsx"})]}),`
`,o(e.li,{children:[a(e.code,{children:"/about"})," \u2192 ",a(e.code,{children:"pages/about.tsx"})]}),`
`,o(e.li,{children:[a(e.code,{children:"/blog/hello-world"})," \u2192 ",a(e.code,{children:"pages/blog/$slug.tsx"})]}),`
`]}),`
`,a(e.h2,{children:"NavLink"}),`
`,o(e.p,{children:["Aleph.js also provides a ",a(e.code,{children:"NavLink"}),` component that will add active class/style
when the specific page is activated. You can add the active class via
`,a(e.code,{children:"activeClassName"})," or add active style using ",a(e.code,{children:"activeStyle"}),"."]}),`
`,a(e.pre,{children:o(e.code,{className:"hljs language-jsx",children:[a(e.span,{className:"hljs-keyword",children:"import"})," { ",a(e.span,{className:"hljs-title class_",children:"NavLink"})," } ",a(e.span,{className:"hljs-keyword",children:"from"})," ",a(e.span,{className:"hljs-string",children:'"aleph/react"'}),`;

`,a(e.span,{className:"hljs-keyword",children:"export"})," ",a(e.span,{className:"hljs-keyword",children:"default"})," ",a(e.span,{className:"hljs-keyword",children:"function"})," ",a(e.span,{className:"hljs-title function_",children:"Nav"}),"(",a(e.span,{className:"hljs-params"}),`) {
  `,a(e.span,{className:"hljs-keyword",children:"return"}),` (
    `,o(e.span,{className:"xml",children:[o(e.span,{className:"hljs-tag",children:["<",a(e.span,{className:"hljs-name",children:"nav"}),">"]}),`
      `,o(e.span,{className:"hljs-tag",children:["<",a(e.span,{className:"hljs-name",children:"NavLink"})," ",a(e.span,{className:"hljs-attr",children:"to"}),"=",a(e.span,{className:"hljs-string",children:'"/"'}),">"]}),"Home",o(e.span,{className:"hljs-tag",children:["</",a(e.span,{className:"hljs-name",children:"NavLink"}),">"]}),`
      `,o(e.span,{className:"hljs-tag",children:["<",a(e.span,{className:"hljs-name",children:"NavLink"})," ",a(e.span,{className:"hljs-attr",children:"activeClassName"}),"=",a(e.span,{className:"hljs-string",children:'"active"'})," ",a(e.span,{className:"hljs-attr",children:"to"}),"=",a(e.span,{className:"hljs-string",children:'"/about"'}),">"]}),"About",o(e.span,{className:"hljs-tag",children:["</",a(e.span,{className:"hljs-name",children:"NavLink"}),">"]}),`
      `,o(e.span,{className:"hljs-tag",children:["<",a(e.span,{className:"hljs-name",children:"NavLink"})," ",a(e.span,{className:"hljs-attr",children:"activeStyle"}),"=",a(e.span,{className:"hljs-string",children:"{{"})," ",a(e.span,{className:"hljs-attr",children:"color:"}),' "',a(e.span,{className:"hljs-attr",children:"red"}),'" }} ',a(e.span,{className:"hljs-attr",children:"to"}),"=",a(e.span,{className:"hljs-string",children:'"/contact"'}),">"]}),`
        Contact
      `,o(e.span,{className:"hljs-tag",children:["</",a(e.span,{className:"hljs-name",children:"NavLink"}),">"]}),`
    `,o(e.span,{className:"hljs-tag",children:["</",a(e.span,{className:"hljs-name",children:"nav"}),">"]})]}),`
  );
}
`]})})]})}function ts(n={}){let{wrapper:e}=n.components||{};return e?a(e,Object.assign({},n,{children:a(be,n)})):be(n)}var hs=ts;var Z={};N(Z,{default:()=>os});import{Fragment as is,jsx as F,jsxs as xe}from"https://esm.sh/react@18.2.0/jsx-runtime";function _e(n){let e=Object.assign({h1:"h1",p:"p",a:"a",pre:"pre",code:"code"},n.components);return xe(is,{children:[F(e.h1,{children:"Yew"}),`
`,xe(e.p,{children:["Create a new ",F(e.a,{href:"https://yew.rs",children:"Yew"})," app:"]}),`
`,F(e.pre,{children:F(e.code,{className:"hljs language-bash",children:`deno run -A -r https://alephjs.org/init.ts --template=yew
`})})]})}function ds(n={}){let{wrapper:e}=n.components||{};return e?F(e,Object.assign({},n,{children:F(_e,n)})):_e(n)}var os=ds;var K={};N(K,{default:()=>js});import{Fragment as ps,jsx as s,jsxs as y}from"https://esm.sh/react@18.2.0/jsx-runtime";import ke from"components/Border.tsx";function ve(n){let e=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",pre:"pre",span:"span",h2:"h2",h4:"h4"},n.components);return y(ps,{children:[s(e.h1,{children:"Middleware API"}),`
`,y(e.p,{children:["In Aleph.js, a ",s(e.strong,{children:"Middleware"})," is an object with a ",s(e.code,{children:"fetch"})," method. The ",s(e.code,{children:"fetch"}),`
method will be invoked when a request is received by the server. You can end the
request by returning a `,s(e.code,{children:"Response"})," object in the ",s(e.code,{children:"fetch"})," method."]}),`
`,s(ke,{color:"#d63369",children:s(e.pre,{children:y(e.code,{className:"hljs language-ts",children:[s(e.span,{className:"hljs-keyword",children:"type"})," ",s(e.span,{className:"hljs-title class_",children:"Middleware"}),` = {
  `,s(e.span,{className:"hljs-comment",children:"/** The middleware name. */"}),`
  `,s(e.span,{className:"hljs-keyword",children:"readonly"})," name?: ",s(e.span,{className:"hljs-built_in",children:"string"}),`;
  `,s(e.span,{className:"hljs-comment",children:"/** The middleware fetch method. */"}),`
  `,s(e.span,{className:"hljs-title function_",children:"fetch"}),"(",s(e.span,{className:"hljs-attr",children:"req"}),": ",s(e.span,{className:"hljs-title class_",children:"Request"}),", ",s(e.span,{className:"hljs-attr",children:"context"}),": ",s(e.span,{className:"hljs-title class_",children:"Context"}),"): ",s(e.span,{className:"hljs-title class_",children:"Promise"}),"<",s(e.span,{className:"hljs-title class_",children:"Response"}),"> | ",s(e.span,{className:"hljs-title class_",children:"Response"})," | ",s(e.span,{className:"hljs-built_in",children:"void"}),`;
};
`]})})}),`
`,s(e.h2,{children:"Use Middlewares"}),`
`,y(e.p,{children:["To use a middleware, add it to the ",s(e.code,{children:"middlewares"})," array in the server config."]}),`
`,s(e.pre,{children:y(e.code,{className:"hljs language-ts",children:[s(e.span,{className:"hljs-comment",children:"// server.ts"}),`

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
`,y(e.h2,{children:["Use ",s(e.code,{children:"Context"})," Object"]}),`
`,y(e.p,{children:["The ",s(e.code,{children:"fetch"})," method of a middleware will receive a ",s(e.code,{children:"Context"}),` object as the second
parameter. You can use it to store data that can be accessed by other
middlewares and data fetchers.`]}),`
`,s(ke,{color:"#d63369",children:s(e.pre,{children:y(e.code,{className:"hljs language-ts",children:[s(e.span,{className:"hljs-keyword",children:"export"})," ",s(e.span,{className:"hljs-keyword",children:"interface"})," ",s(e.span,{className:"hljs-title class_",children:"Context"})," ",s(e.span,{className:"hljs-keyword",children:"extends"})," ",s(e.span,{className:"hljs-title class_",children:"Record"}),"<",s(e.span,{className:"hljs-built_in",children:"string"}),", ",s(e.span,{className:"hljs-built_in",children:"unknown"}),`> {
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
`,s(e.pre,{children:y(e.code,{className:"hljs language-ts",children:[s(e.span,{className:"hljs-keyword",children:"import"})," ",s(e.span,{className:"hljs-keyword",children:"type"})," { ",s(e.span,{className:"hljs-title class_",children:"Middleware"})," } ",s(e.span,{className:"hljs-keyword",children:"from"})," ",s(e.span,{className:"hljs-string",children:'"aleph/server/types.ts"'}),`;

`,s(e.span,{className:"hljs-keyword",children:"export"})," ",s(e.span,{className:"hljs-keyword",children:"default"})," <",s(e.span,{className:"hljs-title class_",children:"Middleware"}),`> {
  `,s(e.span,{className:"hljs-attr",children:"name"}),": ",s(e.span,{className:"hljs-string",children:'"google-analytics-plugin"'}),`,
  `,s(e.span,{className:"hljs-attr",children:"fetch"}),": ",y(e.span,{className:"hljs-function",children:["(",s(e.span,{className:"hljs-params",children:"req, ctx"}),") =>"]}),` {
    `,s(e.span,{className:"hljs-keyword",children:"const"})," id = ",s(e.span,{className:"hljs-title class_",children:"Deno"}),".",s(e.span,{className:"hljs-property",children:"env"}),".",s(e.span,{className:"hljs-title function_",children:"get"}),"(",s(e.span,{className:"hljs-string",children:'"GTAGID"'}),`);
    `,s(e.span,{className:"hljs-keyword",children:"if"}),` (id) {
      ctx.`,s(e.span,{className:"hljs-property",children:"htmlRewriter"}),".",s(e.span,{className:"hljs-title function_",children:"on"}),"(",s(e.span,{className:"hljs-string",children:'"body"'}),`, {
        `,s(e.span,{className:"hljs-title function_",children:"element"}),"(",s(e.span,{className:"hljs-params",children:"el"}),`) {
          el.`,s(e.span,{className:"hljs-title function_",children:"append"}),`(
            `,y(e.span,{className:"hljs-string",children:['`<script src="https://www.googletagmanager.com/gtag/js?id=',y(e.span,{className:"hljs-subst",children:["${\n              ",s(e.span,{className:"hljs-built_in",children:"encodeURIComponent"}),`(id)
            }`]}),`"><\/script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag("js", new Date());
              gtag("config", `,y(e.span,{className:"hljs-subst",children:["${",s(e.span,{className:"hljs-built_in",children:"JSON"}),".stringify(id)}"]}),`);
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
`,y(e.p,{children:["This example middleware shows how to use ",s(e.strong,{children:"session"})," to store login status."]}),`
`,s(e.pre,{children:y(e.code,{className:"hljs language-ts",children:[s(e.span,{className:"hljs-keyword",children:"import"})," ",s(e.span,{className:"hljs-keyword",children:"type"})," { ",s(e.span,{className:"hljs-title class_",children:"Middleware"})," } ",s(e.span,{className:"hljs-keyword",children:"from"})," ",s(e.span,{className:"hljs-string",children:'"aleph/server/types.ts"'}),`;

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
          `,y(e.span,{className:"hljs-string",children:["`https://github.com/login/oauth/authorize?client_id=",s(e.span,{className:"hljs-subst",children:"${clientId}"}),"&scope=read:user+user:email`"]}),`;
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
      ).`,s(e.span,{className:"hljs-title function_",children:"then"}),"(",y(e.span,{className:"hljs-function",children:["(",s(e.span,{className:"hljs-params",children:"res"}),") =>"]})," res.",s(e.span,{className:"hljs-title function_",children:"json"}),`());
      `,s(e.span,{className:"hljs-keyword",children:"if"})," (ret.",s(e.span,{className:"hljs-property",children:"error"}),`) {
        `,s(e.span,{className:"hljs-keyword",children:"return"})," ",s(e.span,{className:"hljs-keyword",children:"new"})," ",s(e.span,{className:"hljs-title class_",children:"Response"}),"(ret.",s(e.span,{className:"hljs-property",children:"error"}),", { ",s(e.span,{className:"hljs-attr",children:"status"}),": ",s(e.span,{className:"hljs-number",children:"500"}),` });
      }

      `,s(e.span,{className:"hljs-keyword",children:"const"})," ",s(e.span,{className:"hljs-attr",children:"user"}),": ",s(e.span,{className:"hljs-title class_",children:"GithubUser"})," = ",s(e.span,{className:"hljs-keyword",children:"await"})," ",s(e.span,{className:"hljs-title function_",children:"fetch"}),"(",s(e.span,{className:"hljs-string",children:'"https://api.github.com/user"'}),`, {
        `,s(e.span,{className:"hljs-attr",children:"headers"}),`: {
          `,s(e.span,{className:"hljs-string",children:'"Authorization"'}),": ",y(e.span,{className:"hljs-string",children:["`token ",s(e.span,{className:"hljs-subst",children:"${ret.access_token}"}),"`"]}),`,
          `,s(e.span,{className:"hljs-string",children:'"Accept"'}),": ",s(e.span,{className:"hljs-string",children:'"application/json"'}),`,
        },
      }).`,s(e.span,{className:"hljs-title function_",children:"then"}),"(",y(e.span,{className:"hljs-function",children:["(",s(e.span,{className:"hljs-params",children:"res"}),") =>"]})," res.",s(e.span,{className:"hljs-title function_",children:"json"}),`());

      `,s(e.span,{className:"hljs-keyword",children:"return"})," session.",s(e.span,{className:"hljs-title function_",children:"update"}),`(
        { user },
        searchParams.`,s(e.span,{className:"hljs-title function_",children:"get"}),"(",s(e.span,{className:"hljs-string",children:'"redirect"'}),") ?? ",s(e.span,{className:"hljs-string",children:'"/"'}),`,
      );
    }

    `,s(e.span,{className:"hljs-comment",children:"// store the user info in context"}),`
    ctx.`,s(e.span,{className:"hljs-property",children:"user"})," = session.",s(e.span,{className:"hljs-property",children:"store"}),".",s(e.span,{className:"hljs-property",children:"user"}),`;
  },
};
`]})})]})}function ms(n={}){let{wrapper:e}=n.components||{};return e?s(e,Object.assign({},n,{children:s(ve,n)})):ve(n)}var js=ms;var Q={};N(Q,{default:()=>fs});import{Fragment as us,jsx as l,jsxs as P}from"https://esm.sh/react@18.2.0/jsx-runtime";import Ns from"components/Border.tsx";function Me(n){let e=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",span:"span",h3:"h3",em:"em"},n.components);return P(us,{children:[l(e.h1,{children:"Server Config"}),`
`,l(e.p,{children:"The server config is an object that contains the following properties:"}),`
`,l(e.pre,{children:P(e.code,{className:"hljs language-jsx",children:[l(e.span,{className:"hljs-comment",children:"// server.ts"}),`

`,l(e.span,{className:"hljs-keyword",children:"import"})," { serve } ",l(e.span,{className:"hljs-keyword",children:"from"})," ",l(e.span,{className:"hljs-string",children:'"aleph/server"'}),`;

`,l(e.span,{className:"hljs-title function_",children:"serve"}),`({
  `,l(e.span,{className:"hljs-attr",children:"port"}),": ",l(e.span,{className:"hljs-number",children:"8080"}),`,
  `,l(e.span,{className:"hljs-attr",children:"router"}),`: {
    `,l(e.span,{className:"hljs-attr",children:"glob"}),": ",l(e.span,{className:"hljs-string",children:'"./routes/**/*.{ts,tsx}"'}),`,
  },
  `,l(e.span,{className:"hljs-attr",children:"middlewares"}),": [",l(e.span,{className:"hljs-comment",children:"/* ... */"}),`],
  `,l(e.span,{className:"hljs-attr",children:"uncoss"}),": {",l(e.span,{className:"hljs-comment",children:"/* ... */"}),`},
  `,l(e.span,{className:"hljs-attr",children:"ssr"}),": ",P(e.span,{className:"hljs-function",children:["(",l(e.span,{className:"hljs-params",children:"ctx"}),") =>"]}),` {
    `,l(e.span,{className:"hljs-keyword",children:"return"})," ",l(e.span,{className:"hljs-title function_",children:"renderToString"}),"(",l(e.span,{className:"xml",children:P(e.span,{className:"hljs-tag",children:["<",l(e.span,{className:"hljs-name",children:"App"})," />"]})}),`);
  },
});
`]})}),`
`,l(Ns,{color:"#d63369",children:l(e.pre,{children:P(e.code,{className:"hljs language-ts",children:[l(e.span,{className:"hljs-keyword",children:"export"})," ",l(e.span,{className:"hljs-keyword",children:"interface"})," ",l(e.span,{className:"hljs-title class_",children:"ServerConfig"})," ",l(e.span,{className:"hljs-keyword",children:"extends"})," ",l(e.span,{className:"hljs-title class_",children:"ServeInit"}),` {
  `,l(e.span,{className:"hljs-comment",children:"/** The cert file for tls. */"}),`
  certFile?: `,l(e.span,{className:"hljs-built_in",children:"string"}),`;
  `,l(e.span,{className:"hljs-comment",children:"/** The key file for tls. */"}),`
  keyFile?: `,l(e.span,{className:"hljs-built_in",children:"string"}),`;
  `,l(e.span,{className:"hljs-comment",children:"/** The log level, default is 'info'. */"}),`
  logLevel?: `,l(e.span,{className:"hljs-title class_",children:"LevelName"}),`;
  `,l(e.span,{className:"hljs-comment",children:"/** The error handler. */"}),`
  onError?: `,l(e.span,{className:"hljs-title class_",children:"ErrorHandler"}),`;
  `,l(e.span,{className:"hljs-comment",children:"/** The base url of the server. */"}),`
  baseUrl?: `,l(e.span,{className:"hljs-built_in",children:"string"}),`;
  `,l(e.span,{className:"hljs-comment",children:"/** The router options for the file-system based routing. */"}),`
  router?: `,l(e.span,{className:"hljs-title class_",children:"RouterInit"}),`;
  `,l(e.span,{className:"hljs-comment",children:"/** The module loaders. */"}),`
  loaders?: `,l(e.span,{className:"hljs-title class_",children:"ModuleLoader"}),`[];
  `,l(e.span,{className:"hljs-comment",children:"/** The server middlewares. */"}),`
  middlewares?: `,l(e.span,{className:"hljs-title class_",children:"Middleware"}),`[];
  `,l(e.span,{className:"hljs-comment",children:"/** The options for session. */"}),`
  session?: `,l(e.span,{className:"hljs-title class_",children:"SessionOptions"}),`;
  `,l(e.span,{className:"hljs-comment",children:"/** The options for SSR. */"}),`
  ssr?: `,l(e.span,{className:"hljs-variable constant_",children:"SSR"}),`;
  `,l(e.span,{className:"hljs-comment",children:"/** The options for optimization. */"}),`
  optimization?: `,l(e.span,{className:"hljs-title class_",children:"OptimizationOptions"}),`;
  `,l(e.span,{className:"hljs-comment",children:"/** The config for UnoCSS. */"}),`
  unocss?: `,l(e.span,{className:"hljs-title class_",children:"UnoConfig"}),`;
}
`]})})}),`
`,l(e.h3,{children:"TLS"}),`
`,l(e.p,{children:l(e.em,{children:"WIP"})}),`
`,l(e.h3,{children:"Router"}),`
`,l(e.p,{children:l(e.em,{children:"WIP"})}),`
`,l(e.h3,{children:"Server-side Rendering (SSR)"}),`
`,l(e.p,{children:l(e.em,{children:"WIP"})}),`
`,l(e.h3,{children:"Middlewares"}),`
`,l(e.p,{children:l(e.em,{children:"WIP"})}),`
`,l(e.h3,{children:"UnoCSS (Automatic CSS)"}),`
`,l(e.p,{children:l(e.em,{children:"WIP"})}),`
`,l(e.h3,{children:"Module Loader"}),`
`,l(e.p,{children:l(e.em,{children:"WIP"})}),`
`,l(e.h3,{children:"Setup Session"}),`
`,l(e.p,{children:l(e.em,{children:"WIP"})}),`
`,l(e.h3,{children:"Optimization Options"}),`
`,l(e.p,{children:l(e.em,{children:"WIP"})}),`
`,l(e.h3,{children:"Error Handler"}),`
`,l(e.p,{children:l(e.em,{children:"WIP"})})]})}function gs(n={}){let{wrapper:e}=n.components||{};return e?l(e,Object.assign({},n,{children:l(Me,n)})):Me(n)}var fs=gs;var ee={};N(ee,{default:()=>bs});import{Fragment as ws,jsx as i,jsxs as C}from"https://esm.sh/react@18.2.0/jsx-runtime";function Se(n){let e=Object.assign({h1:"h1",p:"p",a:"a",code:"code",pre:"pre",span:"span"},n.components);return C(ws,{children:[i(e.h1,{children:"Import Maps"}),`
`,C(e.p,{children:["To use ",i(e.a,{href:"https://github.com/WICG/import-maps",children:"import maps"}),", create a ",i(e.code,{children:"import_map.json"})," file in the root directory:"]}),`
`,i(e.pre,{children:C(e.code,{className:"hljs language-json",children:[i(e.span,{className:"hljs-punctuation",children:"{"}),`
  `,i(e.span,{className:"hljs-attr",children:'"imports"'}),i(e.span,{className:"hljs-punctuation",children:":"})," ",i(e.span,{className:"hljs-punctuation",children:"{"}),`
    `,i(e.span,{className:"hljs-attr",children:'"@/"'}),i(e.span,{className:"hljs-punctuation",children:":"})," ",i(e.span,{className:"hljs-string",children:'"./"'}),i(e.span,{className:"hljs-punctuation",children:","}),`
    `,i(e.span,{className:"hljs-attr",children:'"react"'}),i(e.span,{className:"hljs-punctuation",children:":"})," ",i(e.span,{className:"hljs-string",children:'"https://esm.sh/react@18.2.0"'}),i(e.span,{className:"hljs-punctuation",children:","}),`
    ...
  `,i(e.span,{className:"hljs-punctuation",children:"}"}),`
`,i(e.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,C(e.p,{children:["Add the ",i(e.code,{children:"importMap"})," option in the ",i(e.code,{children:"deno.json"})," file:"]}),`
`,i(e.pre,{children:C(e.code,{className:"hljs language-json",children:[i(e.span,{className:"hljs-punctuation",children:"{"}),`
  `,i(e.span,{className:"hljs-attr",children:'"importMap"'}),i(e.span,{className:"hljs-punctuation",children:":"})," ",i(e.span,{className:"hljs-string",children:'"import_map.json"'}),`
`,i(e.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,i(e.p,{children:"then in your code:"}),`
`,i(e.pre,{children:C(e.code,{className:"hljs language-tsx",children:[i(e.span,{className:"hljs-keyword",children:"import"})," { useState } ",i(e.span,{className:"hljs-keyword",children:"from"})," ",i(e.span,{className:"hljs-string",children:'"react"'}),`;
`,i(e.span,{className:"hljs-keyword",children:"import"})," ",i(e.span,{className:"hljs-title class_",children:"Logo"})," ",i(e.span,{className:"hljs-keyword",children:"from"})," ",i(e.span,{className:"hljs-string",children:'"@/components/logo.tsx"'}),`;

`,i(e.span,{className:"hljs-keyword",children:"export"})," ",i(e.span,{className:"hljs-keyword",children:"default"})," ",i(e.span,{className:"hljs-keyword",children:"function"})," ",i(e.span,{className:"hljs-title function_",children:"App"}),"(",i(e.span,{className:"hljs-params"}),`) {
  `,i(e.span,{className:"hljs-keyword",children:"return"})," ",i(e.span,{className:"xml",children:C(e.span,{className:"hljs-tag",children:["<",i(e.span,{className:"hljs-name",children:"Logo"})," />"]})}),`;
}
`]})})]})}function ys(n={}){let{wrapper:e}=n.components||{};return e?i(e,Object.assign({},n,{children:i(Se,n)})):Se(n)}var bs=ys;var se={};N(se,{default:()=>ks});import{Fragment as xs,jsx as u,jsxs as O}from"https://esm.sh/react@18.2.0/jsx-runtime";function Ce(n){let e=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",span:"span",ul:"ul",li:"li"},n.components);return O(xs,{children:[u(e.h1,{children:"Static File Serving"}),`
`,O(e.p,{children:["Aleph.js will serve any static files in the project directory. Files inside the project directory can then be referenced by your code by using the base URL (",u(e.code,{children:"/"}),")."]}),`
`,O(e.p,{children:["For example, if you add an image ",u(e.code,{children:"assets/logo.png"}),", the following code will access the image:"]}),`
`,u(e.pre,{children:O(e.code,{className:"hljs language-jsx",children:[u(e.span,{className:"hljs-keyword",children:"export"})," ",u(e.span,{className:"hljs-keyword",children:"default"})," ",u(e.span,{className:"hljs-keyword",children:"function"})," ",u(e.span,{className:"hljs-title function_",children:"Logo"}),"(",u(e.span,{className:"hljs-params"}),`) {
  `,u(e.span,{className:"hljs-keyword",children:"return"}),` (
    `,u(e.span,{className:"xml",children:O(e.span,{className:"hljs-tag",children:["<",u(e.span,{className:"hljs-name",children:"img"})," ",u(e.span,{className:"hljs-attr",children:"src"}),"=",u(e.span,{className:"hljs-string",children:'"/assets/logo.png"'})," ",u(e.span,{className:"hljs-attr",children:"alt"}),"=",u(e.span,{className:"hljs-string",children:'"Logo"'})," />"]})}),`
  )
}
`]})}),`
`,u(e.p,{children:"You can also serve other static assets such as:"}),`
`,O(e.ul,{children:[`
`,u(e.li,{children:u(e.code,{children:"favicon.ico"})}),`
`,u(e.li,{children:u(e.code,{children:"manifest.json"})}),`
`,u(e.li,{children:u(e.code,{children:"robots.txt"})}),`
`,u(e.li,{children:"Google Site Verification, etc"}),`
`]})]})}function _s(n={}){let{wrapper:e}=n.components||{};return e?u(e,Object.assign({},n,{children:u(Ce,n)})):Ce(n)}var ks=_s;var ne={};N(ne,{default:()=>Ss});import{Fragment as vs,jsx as c,jsxs as f}from"https://esm.sh/react@18.2.0/jsx-runtime";function De(n){let e=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",span:"span",h3:"h3",ul:"ul",li:"li",strong:"strong"},n.components);return f(vs,{children:[c(e.h1,{children:"Routing"}),`
`,f(e.p,{children:["Aleph.js has a file-system based router. When a file (",c(e.code,{children:".js"}),", ",c(e.code,{children:".jsx"}),", ",c(e.code,{children:".ts"}),`,
`,c(e.code,{children:".tsx"}),", and ",c(e.code,{children:".mjs"}),") is added to the ",c(e.code,{children:"routes"}),` directory, it is automatically
available as a route.`]}),`
`,f(e.p,{children:["You can configure the ",c(e.code,{children:"router"})," in ",c(e.code,{children:"server.ts"}),"."]}),`
`,c(e.pre,{children:f(e.code,{className:"hljs language-js",children:[c(e.span,{className:"hljs-comment",children:"// server.ts"}),`

`,c(e.span,{className:"hljs-keyword",children:"import"})," { serve } ",c(e.span,{className:"hljs-keyword",children:"from"})," ",c(e.span,{className:"hljs-string",children:'"aleph/server"'}),`;

`,c(e.span,{className:"hljs-title function_",children:"serve"}),`({
  `,c(e.span,{className:"hljs-attr",children:"router"}),`: {
    `,c(e.span,{className:"hljs-comment",children:"// use glob pattern to match routes"}),`
    `,c(e.span,{className:"hljs-attr",children:"glob"}),": ",c(e.span,{className:"hljs-string",children:'"./routes/**/*.{ts,tsx,mdx}"'}),`,

    `,c(e.span,{className:"hljs-comment",children:"// or use dir prefix and extnames"}),`
    `,c(e.span,{className:"hljs-attr",children:"dir"}),": ",c(e.span,{className:"hljs-string",children:'"./routes"'}),`,
    `,c(e.span,{className:"hljs-attr",children:"exts"}),": [",c(e.span,{className:"hljs-string",children:'"ts"'}),", ",c(e.span,{className:"hljs-string",children:'".tsx"'}),", ",c(e.span,{className:"hljs-string",children:'".mdx"'}),`],
  },
});
`]})}),`
`,c(e.h3,{children:"Index Routes"}),`
`,f(e.p,{children:["The router will automatically route files named ",c(e.code,{children:"index"}),` to the root of the
directory.`]}),`
`,f(e.ul,{children:[`
`,f(e.li,{children:[c(e.code,{children:"routes/index.tsx"})," \u2192 ",c(e.code,{children:"/"})]}),`
`,f(e.li,{children:[c(e.code,{children:"routes/blog/index.tsx"})," \u2192 ",c(e.code,{children:"/blog"})]}),`
`]}),`
`,c(e.h3,{children:"Dynamic Routes"}),`
`,f(e.p,{children:[`To match a dynamic segment, you can use bracket syntax or start the segment with
`,c(e.strong,{children:"$"}),":"]}),`
`,f(e.ul,{children:[`
`,f(e.li,{children:[c(e.code,{children:"routes/blog/$slug.tsx"})," \u2192 ",c(e.code,{children:"/blog/:slug"})," (",c(e.code,{children:"/blog/hello-world"}),")"]}),`
`,f(e.li,{children:[c(e.code,{children:"routes/$username/settings.tsx"})," \u2192 ",c(e.code,{children:"/:username/settings"})," (",c(e.code,{children:"/foo/settings"}),")"]}),`
`,f(e.li,{children:[c(e.code,{children:"routes/post/$all+.tsx"})," \u2192 ",c(e.code,{children:"/post/*"})," (",c(e.code,{children:"/post/2020/id/title"}),")"]}),`
`]}),`
`,c(e.h3,{children:"Nested Routes"}),`
`,c(e.p,{children:"Aleph.js supports nested route structures like:"}),`
`,f(e.ul,{children:[`
`,c(e.li,{children:c(e.code,{children:"routes/blog.tsx"})}),`
`,c(e.li,{children:c(e.code,{children:"routes/blog/$slug.tsx"})}),`
`]}),`
`,f(e.p,{children:["In the example, routes in ",c(e.code,{children:"/blog/:slug"}),` will be rendered under the
`,c(e.code,{children:"routes/blog.tsx"}),", that is useful to create a ",c(e.strong,{children:"layout"})," for routes:"]}),`
`,c(e.pre,{children:f(e.code,{className:"hljs language-jsx",children:[c(e.span,{className:"hljs-comment",children:"// routes/blog.tsx"}),`

`,c(e.span,{className:"hljs-keyword",children:"import"})," ",c(e.span,{className:"hljs-title class_",children:"BlogHeader"})," ",c(e.span,{className:"hljs-keyword",children:"from"})," ",c(e.span,{className:"hljs-string",children:'"../components/blog-header.tsx"'}),`;

`,c(e.span,{className:"hljs-keyword",children:"export"})," ",c(e.span,{className:"hljs-keyword",children:"default"})," ",c(e.span,{className:"hljs-keyword",children:"function"})," ",c(e.span,{className:"hljs-title function_",children:"Blog"}),"(",c(e.span,{className:"hljs-params",children:"{ children }"}),`) {
  `,c(e.span,{className:"hljs-keyword",children:"return"}),` (
    `,f(e.span,{className:"xml",children:[c(e.span,{className:"hljs-tag",children:"<>"}),`
      `,f(e.span,{className:"hljs-tag",children:["<",c(e.span,{className:"hljs-name",children:"BlogHeader"})," />"]}),`
      `,f(e.span,{className:"hljs-tag",children:["<",c(e.span,{className:"hljs-name",children:"div"})," ",c(e.span,{className:"hljs-attr",children:"className"}),"=",c(e.span,{className:"hljs-string",children:'"blog-body"'}),">"]}),`
        {children}
      `,f(e.span,{className:"hljs-tag",children:["</",c(e.span,{className:"hljs-name",children:"div"}),">"]}),`
    `,c(e.span,{className:"hljs-tag",children:"</>"})]}),`
  );
}
`]})})]})}function Ms(n={}){let{wrapper:e}=n.components||{};return e?c(e,Object.assign({},n,{children:c(De,n)})):De(n)}var Ss=Ms;var ae={};N(ae,{default:()=>Ls});import{Fragment as Cs,jsx as d,jsxs as k}from"https://esm.sh/react@18.2.0/jsx-runtime";function Le(n){let e=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a",pre:"pre",code:"code",span:"span",h2:"h2"},n.components);return k(Cs,{children:[d(e.h1,{children:"Import From NPM"}),`
`,k(e.p,{children:["Aleph.js uses ",d(e.strong,{children:"ESM"})," imports syntax in Deno. To import modules from ",d(e.strong,{children:"NPM"}),`,
you can use `,d(e.a,{href:"https://esm.sh",children:"esm.sh"})," CDN that is maintained by Aleph.js team."]}),`
`,d(e.pre,{children:k(e.code,{className:"hljs language-jsx",children:[d(e.span,{className:"hljs-keyword",children:"import"})," useSWR ",d(e.span,{className:"hljs-keyword",children:"from"})," ",d(e.span,{className:"hljs-string",children:'"https://esm.sh/swr"'}),`;

`,d(e.span,{className:"hljs-keyword",children:"export"})," ",d(e.span,{className:"hljs-keyword",children:"default"})," ",d(e.span,{className:"hljs-keyword",children:"function"})," ",d(e.span,{className:"hljs-title function_",children:"About"}),"(",d(e.span,{className:"hljs-params"}),`) {
  `,d(e.span,{className:"hljs-keyword",children:"const"})," { data, error } = ",d(e.span,{className:"hljs-title function_",children:"useSWR"}),"(",d(e.span,{className:"hljs-string",children:'"/api/user"'}),`, fetcher);

  `,d(e.span,{className:"hljs-keyword",children:"if"}),` (error) {
    `,d(e.span,{className:"hljs-keyword",children:"return"})," ",k(e.span,{className:"xml",children:[k(e.span,{className:"hljs-tag",children:["<",d(e.span,{className:"hljs-name",children:"div"}),">"]}),"failed to load",k(e.span,{className:"hljs-tag",children:["</",d(e.span,{className:"hljs-name",children:"div"}),">"]})]}),`;
  }
  `,d(e.span,{className:"hljs-keyword",children:"if"}),` (!data) {
    `,d(e.span,{className:"hljs-keyword",children:"return"})," ",k(e.span,{className:"xml",children:[k(e.span,{className:"hljs-tag",children:["<",d(e.span,{className:"hljs-name",children:"div"}),">"]}),"loading...",k(e.span,{className:"hljs-tag",children:["</",d(e.span,{className:"hljs-name",children:"div"}),">"]})]}),`;
  }
  `,d(e.span,{className:"hljs-keyword",children:"return"})," ",k(e.span,{className:"xml",children:[k(e.span,{className:"hljs-tag",children:["<",d(e.span,{className:"hljs-name",children:"div"}),">"]}),"hello {data.name}!",k(e.span,{className:"hljs-tag",children:["</",d(e.span,{className:"hljs-name",children:"div"}),">"]})]}),`;
}
`]})}),`
`,d(e.h2,{children:"Using NPM Specifier"}),`
`,d(e.p,{children:"The NPM Specifier is extremely new added in Deno 1.25"}),`
`,d(e.pre,{children:k(e.code,{className:"hljs language-js",children:[d(e.span,{className:"hljs-keyword",children:"import"})," express ",d(e.span,{className:"hljs-keyword",children:"from"})," ",d(e.span,{className:"hljs-string",children:'"npm:express@5"'}),`;
`]})}),`
`,d(e.p,{children:"These npm specifiers have the following format:"}),`
`,d(e.pre,{children:k(e.code,{className:"hljs language-lua",children:["npm:<",d(e.span,{className:"hljs-built_in",children:"package"}),"-name>[@<version-requirement>][/<",d(e.span,{className:"hljs-built_in",children:"sub"}),"-",d(e.span,{className:"hljs-built_in",children:"path"}),`>]
`]})})]})}function Ds(n={}){let{wrapper:e}=n.components||{};return e?d(e,Object.assign({},n,{children:d(Le,n)})):Le(n)}var Ls=Ds;var le={};N(le,{default:()=>As});import{Fragment as Ts,jsx as h,jsxs as b}from"https://esm.sh/react@18.2.0/jsx-runtime";function Te(n){let e=Object.assign({h1:"h1",p:"p",code:"code",strong:"strong",pre:"pre",span:"span",h2:"h2",a:"a"},n.components);return b(Ts,{children:[h(e.h1,{children:"CSS Support"}),`
`,b(e.p,{children:["Aleph.js uses the ",h(e.code,{children:"index.html"}),` as the page entry template, that means you can
add any `,h(e.strong,{children:"CSS"})," files with ",h(e.code,{children:"link"})," tag:"]}),`
`,h(e.pre,{children:b(e.code,{className:"hljs language-html",children:[b(e.span,{className:"hljs-tag",children:["<",h(e.span,{className:"hljs-name",children:"html"}),">"]}),`
  `,b(e.span,{className:"hljs-tag",children:["<",h(e.span,{className:"hljs-name",children:"head"}),">"]}),`
    `,b(e.span,{className:"hljs-tag",children:["<",h(e.span,{className:"hljs-name",children:"title"}),">"]}),"Hello, World!",b(e.span,{className:"hljs-tag",children:["</",h(e.span,{className:"hljs-name",children:"title"}),">"]}),`
    `,b(e.span,{className:"hljs-tag",children:["<",h(e.span,{className:"hljs-name",children:"link"})," ",h(e.span,{className:"hljs-attr",children:"rel"}),"=",h(e.span,{className:"hljs-string",children:'"stylesheet"'})," ",h(e.span,{className:"hljs-attr",children:"href"}),"=",h(e.span,{className:"hljs-string",children:'"./style/app.css"'}),">"]}),`
  `,b(e.span,{className:"hljs-tag",children:["</",h(e.span,{className:"hljs-name",children:"head"}),">"]}),`
  `,b(e.span,{className:"hljs-tag",children:["<",h(e.span,{className:"hljs-name",children:"body"}),">"]}),`
    `,b(e.span,{className:"hljs-tag",children:["<",h(e.span,{className:"hljs-name",children:"h1"}),">"]}),"Hello, World!",b(e.span,{className:"hljs-tag",children:["</",h(e.span,{className:"hljs-name",children:"h1"}),">"]}),`
  `,b(e.span,{className:"hljs-tag",children:["</",h(e.span,{className:"hljs-name",children:"body"}),">"]}),`
`,b(e.span,{className:"hljs-tag",children:["</",h(e.span,{className:"hljs-name",children:"html"}),">"]}),`
`]})}),`
`,b(e.h2,{children:["CSS Imports (",h(e.code,{children:"@import"}),")"]}),`
`,b(e.p,{children:["Aleph.js uses ",h(e.a,{href:"https://lightningcss.dev/",children:"lightningcss"}),` to bundle your CSS code
when you use `,h(e.code,{children:"@import"})," to import other CSS files."]}),`
`,h(e.pre,{children:b(e.code,{className:"hljs language-css",children:[h(e.span,{className:"hljs-keyword",children:"@import"})," url(",h(e.span,{className:"hljs-string",children:'"./reset.css"'}),`);

`,h(e.span,{className:"hljs-selector-tag",children:"body"}),` {
  `,h(e.span,{className:"hljs-attribute",children:"font-family"}),": ",h(e.span,{className:"hljs-string",children:'"Roboto"'}),`, sans-serif;
}
`]})}),`
`,h(e.h2,{children:"Draft syntax"}),`
`,b(e.p,{children:["Aleph.js supports ",h(e.a,{href:"https://www.w3.org/TR/css-nesting-1/",children:"Nesting"}),` and
`,h(e.a,{href:"https://www.w3.org/TR/mediaqueries-5/#custom-mq",children:"Custom media queries"}),` draft
spec`]}),`
`,h(e.pre,{children:b(e.code,{className:"hljs language-css",children:[h(e.span,{className:"hljs-keyword",children:"@custom-media"})," --modern (",h(e.span,{className:"hljs-attribute",children:"color"}),"), (",h(e.span,{className:"hljs-attribute",children:"hover"}),`);

`,h(e.span,{className:"hljs-selector-class",children:".foo"}),` {
  `,h(e.span,{className:"hljs-attribute",children:"background"}),`: yellow;

  &`,h(e.span,{className:"hljs-selector-class",children:".bar"}),` {
    `,h(e.span,{className:"hljs-attribute",children:"color"}),`: green;
  }
}

`,h(e.span,{className:"hljs-keyword",children:"@media"})," (--modern) ",h(e.span,{className:"hljs-keyword",children:"and"})," (",h(e.span,{className:"hljs-attribute",children:"width"})," > ",h(e.span,{className:"hljs-number",children:"1024px"}),`) {
  `,h(e.span,{className:"hljs-selector-class",children:".a"}),` {
    `,h(e.span,{className:"hljs-attribute",children:"color"}),`: green;
  }
}
`]})})]})}function Rs(n={}){let{wrapper:e}=n.components||{};return e?h(e,Object.assign({},n,{children:h(Te,n)})):Te(n)}var As=Rs;var re={};N(re,{default:()=>Xs});import{Fragment as Fs,jsx as j,jsxs as S}from"https://esm.sh/react@18.2.0/jsx-runtime";function Re(n){let e=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",pre:"pre",span:"span",h2:"h2",blockquote:"blockquote",a:"a",h3:"h3",ul:"ul",li:"li"},n.components);return S(Fs,{children:[j(e.h1,{children:"Hot Module Replacement"}),`
`,S(e.p,{children:["Hot Module Replacement (or HMR) allows modules to be updated at runtime without the need for a full refresh during ",j(e.strong,{children:"development"}),". To support this, Aleph.js's built-in ",j(e.strong,{children:"HMR"})," module creates a ",j(e.strong,{children:"WebSocket"})," connection to the dev server on the client, and the server listens for file changes. Once the HMR client gets an update signal from the server, Aleph.js will re-import the updated module."]}),`
`,j(e.p,{children:"For a CSS module, the old style will be removed after the new one is applied. For a React Component, Fast Refresh will re-render the component view without losing component state."}),`
`,S(e.p,{children:["You can use the ",j(e.code,{children:"hot"})," api to handle the module update event."]}),`
`,j(e.pre,{children:S(e.code,{className:"hljs language-js",children:[j(e.span,{className:"hljs-keyword",children:"import"}),".",j(e.span,{className:"hljs-property",children:"meta"}),".",j(e.span,{className:"hljs-property",children:"hot"}),"?.",j(e.span,{className:"hljs-title function_",children:"accept"}),"(",S(e.span,{className:"hljs-function",children:["(",j(e.span,{className:"hljs-params",children:"mod"}),")=>"]}),`{
  `,j(e.span,{className:"hljs-comment",children:"// update UI"}),`
})

`,j(e.span,{className:"hljs-comment",children:"// just reload the page when the module is updated"}),`
`,j(e.span,{className:"hljs-keyword",children:"import"}),".",j(e.span,{className:"hljs-property",children:"meta"}),".",j(e.span,{className:"hljs-property",children:"hot"}),"?.",j(e.span,{className:"hljs-title function_",children:"decline"}),`()
`]})}),`
`,j(e.h2,{children:"React Fast Refresh"}),`
`,S(e.blockquote,{children:[`
`,S(e.p,{children:[`It's a reimplementation of "hot reloading" with full support from React. It's originally `,j(e.a,{href:"https://twitter.com/dan_abramov/status/1169687758849400832",children:"shipped for React Native"}),", but most of the implementation is platform-independent. The plan is to use it across the board, as a replacement for purely userland solutions (like react-hot-loader). ",j(e.a,{href:"https://github.com/facebook/react/issues/16604#issuecomment-528663101",children:"\xB9"})]}),`
`]}),`
`,j("video",{src:"/assets/fast-refresh.mp4",loop:!0,autoplay:!0,muted:!0,controls:!0}),`
`,j(e.h3,{children:"Limits"}),`
`,S(e.ul,{children:[`
`,j(e.li,{children:"Fast Refresh only supports functional components with hooks."}),`
`,S(e.li,{children:["Functional components using default exports must be named: ",j(e.code,{children:"export default function ComponentName() {}"}),"."]}),`
`]})]})}function Os(n={}){let{wrapper:e}=n.components||{};return e?j(e,Object.assign({},n,{children:j(Re,n)})):Re(n)}var Xs=Os;var ce={};N(ce,{default:()=>qs});import{Fragment as Is,jsx as r,jsxs as m}from"https://esm.sh/react@18.2.0/jsx-runtime";import{Link as Ps}from"aleph/react";function Ae(n){let e=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",span:"span",blockquote:"blockquote",h2:"h2",ul:"ul",li:"li",a:"a"},n.components);return m(Is,{children:[r(e.h1,{children:"Server"}),`
`,r(e.p,{children:`In Aleph.js, the server handles all incoming requests, everything is
just-in-time, includes static files, server-side rendering, data fetching, and
module transpiling.`}),`
`,r(e.pre,{children:m(e.code,{className:"hljs language-jsx",children:[r(e.span,{className:"hljs-comment",children:"// server.ts"}),`

`,r(e.span,{className:"hljs-keyword",children:"import"})," { serve } ",r(e.span,{className:"hljs-keyword",children:"from"})," ",r(e.span,{className:"hljs-string",children:'"aleph/server"'}),`;

`,r(e.span,{className:"hljs-title function_",children:"serve"}),`({
  `,r(e.span,{className:"hljs-attr",children:"port"}),": ",r(e.span,{className:"hljs-number",children:"8080"}),`,
  `,r(e.span,{className:"hljs-attr",children:"router"}),`: {
    `,r(e.span,{className:"hljs-attr",children:"glob"}),": ",r(e.span,{className:"hljs-string",children:'"./routes/**/*.{ts,tsx}"'}),`,
  },
  `,r(e.span,{className:"hljs-attr",children:"middlewares"}),": [",r(e.span,{className:"hljs-comment",children:"/* ... */"}),`],
  `,r(e.span,{className:"hljs-attr",children:"uncoss"}),": {",r(e.span,{className:"hljs-comment",children:"/* ... */"}),`},
  `,r(e.span,{className:"hljs-attr",children:"ssr"}),": ",m(e.span,{className:"hljs-function",children:["(",r(e.span,{className:"hljs-params",children:"ctx"}),") =>"]}),` {
    `,r(e.span,{className:"hljs-keyword",children:"return"})," ",r(e.span,{className:"hljs-title function_",children:"renderToString"}),"(",r(e.span,{className:"xml",children:m(e.span,{className:"hljs-tag",children:["<",r(e.span,{className:"hljs-name",children:"App"})," />"]})}),`);
  },
});
`]})}),`
`,m(e.blockquote,{children:[`
`,m(e.p,{children:[`Normally you don't need to configure the server by using Aleph's template
created by the `,r(e.code,{children:"init"}),` script. To learn more about server configuration, check
out the `,r(Ps,{to:"/docs/api-reference/server-config",children:"Server Config API"}),"."]}),`
`]}),`
`,r(e.h2,{children:r(e.code,{children:"index.html"})}),`
`,m(e.p,{children:["Aleph.js uses ",r(e.code,{children:"index.html"}),` (in the project root directory) as the page html
output template, you can add your own tags to it, like `,r(e.code,{children:"<meta>"}),", ",r(e.code,{children:"<script>"}),`,
`,r(e.code,{children:"<link>"}),", etc."]}),`
`,r(e.pre,{children:m(e.code,{className:"hljs language-html",children:[m(e.span,{className:"hljs-meta",children:["<!DOCTYPE ",r(e.span,{className:"hljs-keyword",children:"html"}),">"]}),`
`,m(e.span,{className:"hljs-tag",children:["<",r(e.span,{className:"hljs-name",children:"html"})," ",r(e.span,{className:"hljs-attr",children:"lang"}),"=",r(e.span,{className:"hljs-string",children:'"en"'}),">"]}),`

`,m(e.span,{className:"hljs-tag",children:["<",r(e.span,{className:"hljs-name",children:"head"}),">"]}),`
  `,m(e.span,{className:"hljs-tag",children:["<",r(e.span,{className:"hljs-name",children:"meta"})," ",r(e.span,{className:"hljs-attr",children:"charset"}),"=",r(e.span,{className:"hljs-string",children:'"UTF-8"'}),">"]}),`
  `,m(e.span,{className:"hljs-tag",children:["<",r(e.span,{className:"hljs-name",children:"meta"})," ",r(e.span,{className:"hljs-attr",children:"name"}),"=",r(e.span,{className:"hljs-string",children:'"viewport"'})," ",r(e.span,{className:"hljs-attr",children:"content"}),"=",r(e.span,{className:"hljs-string",children:'"width=device-width, initial-scale=1.0"'}),">"]}),`
  `,m(e.span,{className:"hljs-tag",children:["<",r(e.span,{className:"hljs-name",children:"link"})," ",r(e.span,{className:"hljs-attr",children:"rel"}),"=",r(e.span,{className:"hljs-string",children:'"icon"'})," ",r(e.span,{className:"hljs-attr",children:"href"}),"=",r(e.span,{className:"hljs-string",children:'"./assets/logo.svg"'}),">"]}),`
  `,m(e.span,{className:"hljs-tag",children:["<",r(e.span,{className:"hljs-name",children:"link"})," ",r(e.span,{className:"hljs-attr",children:"rel"}),"=",r(e.span,{className:"hljs-string",children:'"stylesheet"'})," ",r(e.span,{className:"hljs-attr",children:"href"}),"=",r(e.span,{className:"hljs-string",children:'"./style/app.css"'}),">"]}),`
`,m(e.span,{className:"hljs-tag",children:["</",r(e.span,{className:"hljs-name",children:"head"}),">"]}),`

`,m(e.span,{className:"hljs-tag",children:["<",r(e.span,{className:"hljs-name",children:"body"}),">"]}),`
  `,m(e.span,{className:"hljs-tag",children:["<",r(e.span,{className:"hljs-name",children:"div"})," ",r(e.span,{className:"hljs-attr",children:"id"}),"=",r(e.span,{className:"hljs-string",children:'"root"'})," ",r(e.span,{className:"hljs-attr",children:"data-ssr-root"}),">"]}),m(e.span,{className:"hljs-tag",children:["</",r(e.span,{className:"hljs-name",children:"div"}),">"]}),`
  `,m(e.span,{className:"hljs-tag",children:["<",r(e.span,{className:"hljs-name",children:"script"})," ",r(e.span,{className:"hljs-attr",children:"type"}),"=",r(e.span,{className:"hljs-string",children:'"module"'})," ",r(e.span,{className:"hljs-attr",children:"src"}),"=",r(e.span,{className:"hljs-string",children:'"./main.ts"'}),">"]}),m(e.span,{className:"hljs-tag",children:["</",r(e.span,{className:"hljs-name",children:"script"}),">"]}),`
  `,m(e.span,{className:"hljs-tag",children:["<",r(e.span,{className:"hljs-name",children:"script"}),">"]}),m(e.span,{className:"javascript",children:[r(e.span,{className:"hljs-variable language_",children:"console"}),".",r(e.span,{className:"hljs-title function_",children:"log"}),"(",r(e.span,{className:"hljs-string",children:'"Hello world!"'}),")"]}),m(e.span,{className:"hljs-tag",children:["</",r(e.span,{className:"hljs-name",children:"script"}),">"]}),`
`,m(e.span,{className:"hljs-tag",children:["</",r(e.span,{className:"hljs-name",children:"body"}),">"]}),`

`,m(e.span,{className:"hljs-tag",children:["</",r(e.span,{className:"hljs-name",children:"html"}),">"]}),`
`]})}),`
`,m(e.ul,{children:[`
`,m(e.li,{children:["The attribute ",r(e.code,{children:"data-ssr-root"}),` is to point out the root element for server-side
rendering.`]}),`
`,m(e.li,{children:[`Aleph.js will transpile modules for browsers automatically, you can safely add
non-JS modules like `,r(e.code,{children:"JSX"})," or ",r(e.code,{children:"TS"}),"."]}),`
`,m(e.li,{children:["CSS files will be bundled using ",r(e.a,{href:"https://lightningcss.dev/",children:"lightningcss"})]}),`
`]})]})}function Hs(n={}){let{wrapper:e}=n.components||{};return e?r(e,Object.assign({},n,{children:r(Ae,n)})):Ae(n)}var qs=Hs;var te={};N(te,{default:()=>Es});import{Fragment as $s,jsx as M,jsxs as H}from"https://esm.sh/react@18.2.0/jsx-runtime";function Fe(n){let e=Object.assign({h1:"h1",p:"p",strong:"strong",em:"em",code:"code",pre:"pre",span:"span"},n.components);return H($s,{children:[M(e.h1,{children:"Server-side Rendering"}),`
`,H(e.p,{children:["By default, Aleph.js ",M(e.strong,{children:"pre-renders"})," every page. This means that Aleph.js generates HTML for each page in advance, instead of rendering it with client-side JavaScript. Pre-rendering can result in better performance and SEO."]}),`
`,H(e.p,{children:["Each generated HTML page only needs a small amount of JavaScript. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called ",M(e.em,{children:"hydration"}),".)"]}),`
`,H(e.p,{children:["You can disable ",M(e.strong,{children:"SSR"})," functionality in ",M(e.code,{children:"server.ts"}),":"]}),`
`,M(e.pre,{children:H(e.code,{className:"hljs language-ts",children:[M(e.span,{className:"hljs-title function_",children:"serve"}),`({
  `,M(e.span,{className:"hljs-attr",children:"ssr"}),": ",M(e.span,{className:"hljs-literal",children:"true"}),`
})
`]})})]})}function Us(n={}){let{wrapper:e}=n.components||{};return e?M(e,Object.assign({},n,{children:M(Fe,n)})):Fe(n)}var Es=Us;var he={};N(he,{default:()=>Gs});import{Fragment as Ws,jsx as w,jsxs as U}from"https://esm.sh/react@18.2.0/jsx-runtime";function Oe(n){let e=Object.assign({h1:"h1",p:"p",a:"a",code:"code",pre:"pre",span:"span"},n.components);return U(Ws,{children:[w(e.h1,{children:"Unocss"}),`
`,U(e.p,{children:["Aleph.js uses ",w(e.a,{href:"https://github.com/unocss/unocss/",children:"Unocss"}),` as the Atomic CSS
engine. To enable unocss, add `,w(e.code,{children:"presets"})," to the ",w(e.code,{children:"unocss"})," option in ",w(e.code,{children:"server.ts"}),":"]}),`
`,w(e.pre,{children:U(e.code,{className:"hljs language-js",children:[w(e.span,{className:"hljs-keyword",children:"import"})," presetUno ",w(e.span,{className:"hljs-keyword",children:"from"})," ",w(e.span,{className:"hljs-string",children:'"https://esm.sh/@unocss/preset-uno"'}),`;
`,w(e.span,{className:"hljs-keyword",children:"import"})," { serve } ",w(e.span,{className:"hljs-keyword",children:"from"})," ",w(e.span,{className:"hljs-string",children:'"aleph/server"'}),`;

`,w(e.span,{className:"hljs-title function_",children:"serve"}),`({
  `,w(e.span,{className:"hljs-attr",children:"unocss"}),`: {
    `,w(e.span,{className:"hljs-attr",children:"presets"}),": [",w(e.span,{className:"hljs-title function_",children:"presetUno"}),`()],
  },
});
`]})}),`
`,U(e.p,{children:["Check out the ",w(e.a,{href:"https://github.com/unocss/unocss/#presets",children:"available presets"}),` or
Unocss `,w(e.a,{href:"https://github.com/unocss/unocss/#configurations",children:"configurations"}),"."]})]})}function Js(n={}){let{wrapper:e}=n.components||{};return e?w(e,Object.assign({},n,{children:w(Oe,n)})):Oe(n)}var Gs=Js;var ie={};N(ie,{default:()=>Vs});import{Fragment as Ys,jsx as q,jsxs as Bs}from"https://esm.sh/react@18.2.0/jsx-runtime";function Xe(n){let e=Object.assign({h1:"h1",p:"p",em:"em"},n.components);return Bs(Ys,{children:[q(e.h1,{children:"Vue"}),`
`,q(e.p,{children:q(e.em,{children:"WIP"})})]})}function zs(n={}){let{wrapper:e}=n.components||{};return e?q(e,Object.assign({},n,{children:q(Xe,n)})):Xe(n)}var Vs=zs;var de={};N(de,{default:()=>en});import{Fragment as Zs,jsx as $,jsxs as Ks}from"https://esm.sh/react@18.2.0/jsx-runtime";function Ie(n){let e=Object.assign({h1:"h1",p:"p",em:"em"},n.components);return Ks(Zs,{children:[$(e.h1,{children:"React"}),`
`,$(e.p,{children:$(e.em,{children:"WIP"})})]})}function Qs(n={}){let{wrapper:e}=n.components||{};return e?$(e,Object.assign({},n,{children:$(Ie,n)})):Ie(n)}var en=Qs;var Tn={"/":sn,"/docs":nn,"/docs/browser-support":E,"/docs/deployment":W,"/docs/index":J,"/docs/get-started":G,"/docs/framework/vue":Y,"/docs/framework/react-mdx":B,"/docs/framework/solid":z,"/docs/framework/react":V,"/docs/framework/yew":Z,"/docs/api-reference/middleware":K,"/docs/api-reference/server-config":Q,"/docs/basic-concepts/import-maps":ee,"/docs/basic-concepts/static-file-serving":se,"/docs/basic-concepts/routing":ne,"/docs/basic-concepts/import-from-npm":ae,"/docs/basic-concepts/css-support":le,"/docs/basic-concepts/hmr":re,"/docs/basic-concepts/server":ce,"/docs/basic-concepts/ssr":te,"/docs/basic-concepts/unocss":he,"/docs/api-reference/framework/vue":ie,"/docs/api-reference/framework/react":de,depGraph:{"modules":[{"specifier":"./routes/docs/browser-support.md"},{"specifier":"./routes/docs/deployment.md"},{"specifier":"./routes/docs/index.md"},{"specifier":"./routes/docs/get-started.md"},{"specifier":"./routes/docs/framework/vue.md"},{"specifier":"./routes/docs/framework/react-mdx.md"},{"specifier":"./routes/docs/framework/solid.md"},{"specifier":"./routes/docs/framework/react.md"},{"specifier":"./routes/docs/framework/yew.md"},{"specifier":"./routes/docs/api-reference/middleware.md"},{"specifier":"./routes/docs/api-reference/server-config.md"},{"specifier":"./routes/docs/basic-concepts/import-maps.md"},{"specifier":"./routes/docs/basic-concepts/static-file-serving.md"},{"specifier":"./routes/docs/basic-concepts/routing.md"},{"specifier":"./routes/docs/basic-concepts/import-from-npm.md"},{"specifier":"./routes/docs/basic-concepts/css-support.md"},{"specifier":"./routes/docs/basic-concepts/hmr.md"},{"specifier":"./routes/docs/basic-concepts/server.md"},{"specifier":"./routes/docs/basic-concepts/ssr.md"},{"specifier":"./routes/docs/basic-concepts/unocss.md"},{"specifier":"./routes/docs/api-reference/framework/vue.md"},{"specifier":"./routes/docs/api-reference/framework/react.md"}]}};export{Tn as default};
