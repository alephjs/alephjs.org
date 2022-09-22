// Imports route modules for serverless env that doesn't support the dynamic import.
// This module will be updated automaticlly in develoment mode, do NOT edit it manually.
// deno-fmt-ignore-file
// deno-lint-ignore-file
// @ts-nocheck
var Le=Object.defineProperty;var m=(n,e)=>{for(var he in e)Le(n,he,{get:e[he],enumerable:!0})};import*as Qn from"./index.tsx";import*as es from"./docs.tsx";var P={};m(P,{default:()=>Ie});import{Fragment as Te,jsx as u,jsxs as X}from"https://esm.sh/react@18.2.0/jsx-runtime";function ie(n){let e=Object.assign({h1:"h1",p:"p",a:"a",strong:"strong",ul:"ul",li:"li",h2:"h2",code:"code",pre:"pre",span:"span"},n.components);return X(Te,{children:[u(e.h1,{children:"Browser Support"}),`
`,X(e.p,{children:[`Aleph.js requires a modern browser to support
`,u(e.a,{href:"https://caniuse.com/#feat=es6-module",children:"native ES module imports"})," and ",u(e.strong,{children:`dynamic
imports`}),":"]}),`
`,X(e.ul,{children:[`
`,u(e.li,{children:"Chrome >= 61"}),`
`,u(e.li,{children:"Edge >= 16"}),`
`,u(e.li,{children:"Firefox >= 60"}),`
`,u(e.li,{children:"Safari >= 11"}),`
`,u(e.li,{children:"Opera >= 48"}),`
`]}),`
`,u(e.h2,{children:"Build Target"}),`
`,X(e.p,{children:["Aleph.js uses ",u(e.strong,{children:"esbuild"}),` to bundle modules at optimization time for production.
You can set the `,u(e.code,{children:"optimization.buildTarget"})," in the server config."]}),`
`,u(e.pre,{children:X(e.code,{className:"hljs language-js",children:[u(e.span,{className:"hljs-keyword",children:"import"})," { serve } ",u(e.span,{className:"hljs-keyword",children:"from"})," ",u(e.span,{className:"hljs-string",children:'"aleph/server"'}),`;

`,u(e.span,{className:"hljs-title function_",children:"serve"}),`({
  `,u(e.span,{className:"hljs-attr",children:"optimization"}),`: {
    `,u(e.span,{className:"hljs-attr",children:"buildTarget"}),": ",u(e.span,{className:"hljs-string",children:'"es2020"'}),`,
  },
});
`]})})]})}function $e(n={}){let{wrapper:e}=n.components||{};return e?u(e,Object.assign({},n,{children:u(ie,n)})):ie(n)}var Ie=$e;var H={};m(H,{default:()=>He});import{Fragment as qe,jsx as y,jsxs as M}from"https://esm.sh/react@18.2.0/jsx-runtime";function oe(n){let e=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",h2:"h2",a:"a",blockquote:"blockquote"},n.components);return M(qe,{children:[y(e.h1,{children:"Deployment on your own host with Deno CLI"}),`
`,M(e.p,{children:["You can run your app in production mode by ",y(e.code,{children:"deno"})," CLI."]}),`
`,y(e.pre,{children:y(e.code,{className:"hljs language-bash",children:`deno run --allow-network --allow-env --allow-read --allow-write server.ts
`})}),`
`,y(e.h2,{children:"Deploy on Deno Deploy"}),`
`,M(e.p,{children:["To deploy your app to ",y(e.a,{href:"https://deno.com/deploy",children:"Deno Deploy"}),", please push your app to ",y(e.a,{href:"https://github.com",children:"Github"})," and create a new project on ",y(e.a,{href:"https://dash.deno.com/new",children:"Deno Deploy"}),"."]}),`
`,M(e.p,{children:["Then link to the Repo and set the entrypoint to ",y(e.code,{children:"server.ts"})]}),`
`,M(e.blockquote,{children:[`
`,M(e.p,{children:["See the ",y(e.a,{href:"https://aleph-hello.deno.dev/",children:"hello-world"})," example on ",y(e.a,{href:"https://deno.com/deploy",children:"Deno Deploy"}),"."]}),`
`]})]})}function Pe(n={}){let{wrapper:e}=n.components||{};return e?y(e,Object.assign({},n,{children:y(oe,n)})):oe(n)}var He=Pe;var E={};m(E,{default:()=>We});import{Fragment as Ee,jsx as l,jsxs as N}from"https://esm.sh/react@18.2.0/jsx-runtime";function de(n){let e=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a",blockquote:"blockquote",em:"em",code:"code",h2:"h2",ul:"ul",li:"li"},n.components);return N(Ee,{children:[l(e.h1,{children:"Aleph.js"}),`
`,N(e.p,{children:[l(e.strong,{children:"Aleph.js"})," (or ",l(e.strong,{children:"Aleph"})," or ",l(e.strong,{children:"\u05D0"})," or ",l(e.strong,{children:"\u963F\u83B1\u592B"}),", ",l("samp",{children:"\u02C8\u0251\u02D0l\u025Bf"}),`) is a
fullstack framework in `,l(e.a,{href:"https://deno.land",children:"Deno"}),". Inspired by ",l(e.a,{href:"https://nextjs.org",children:"Next.js"}),", ",l(e.a,{href:"https://remix.run",children:"Remix"})," and ",l(e.a,{href:"https://vitejs.dev",children:"Vite"}),"."]}),`
`,N(e.blockquote,{children:[`
`,N(e.p,{children:["The name is taken from the book ",l(e.a,{href:"http://phinnweb.org/links/literature/borges/aleph.html",children:l(e.em,{children:"The Aleph"})})," by ",l(e.strong,{children:"Jorge Luis Borges"}),"."]}),`
`]}),`
`,N(e.p,{children:["Aleph.js is modern framework that doesn't need ",l(e.strong,{children:"webpack"}),` or other bundler
since it uses the `,l(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",children:"ES Module"}),` syntax during development. Every module only needs
to be compiled once, when a module changes, Aleph.js just needs to re-compile
that single module. There is no time wasted `,l(e.em,{children:"re-bundling"}),` everytime a change is
made. This, along with Hot Module Replacement (`,l(e.strong,{children:"HMR"}),") and ",l(e.strong,{children:"Fast Refresh"}),`,
leads to instant updates in the browser.`]}),`
`,N(e.p,{children:["Aleph.js uses modern tools to build your app. It transpiles code using ",l(e.a,{href:"https://swc.rs",children:"swc"}),` in
WASM with high performance, and bundles modules with `,l(e.a,{href:"https://github.com/evanw/esbuild",children:"esbuild"}),` at optimization
time extremely fast.`]}),`
`,N(e.p,{children:["Aleph.js works on top of ",l(e.strong,{children:"Deno"}),", a ",l(e.em,{children:"simple"}),", ",l(e.em,{children:"modern"})," and ",l(e.em,{children:"secure"}),` runtime for
JavaScript and TypeScript. All dependencies are imported using URLs, and managed
by Deno cache system. No `,l(e.code,{children:"package.json"})," and ",l(e.code,{children:"node_modules"})," directory needed."]}),`
`,l(e.h2,{children:"Features"}),`
`,N(e.ul,{children:[`
`,l(e.li,{children:"Zero Config"}),`
`,l(e.li,{children:"No build step"}),`
`,l(e.li,{children:"File-system Routing"}),`
`,l(e.li,{children:"Just-in-time Server-side Rendering(SSR)"}),`
`,l(e.li,{children:"Streaming SSR"}),`
`,l(e.li,{children:"Support Typescript/JSX in Deno out of the box"}),`
`,N(e.li,{children:["Built-in ",l(e.a,{href:"https://github.com/unocss/unocss",children:"Unocss"})," (Automatic CSS)"]}),`
`,l(e.li,{children:"Import Maps"}),`
`,l(e.li,{children:"Hot Module Replacement (or HMR)"}),`
`,l(e.li,{children:"Support Middware"}),`
`,l(e.li,{children:"Custom Module Loader like MDX"}),`
`]}),`
`,l(e.h2,{children:"Supported frameworks"}),`
`,N(e.ul,{children:[`
`,l(e.li,{children:l(e.a,{href:"https://github.com/alephjs/aleph.js/tree/main/examples/react-app",children:"React"})}),`
`,l(e.li,{children:l(e.a,{href:"https://github.com/alephjs/aleph.js/tree/main/examples/react-mdx-app",children:"React with MDX"})}),`
`,l(e.li,{children:l(e.a,{href:"https://github.com/alephjs/aleph.js/tree/main/examples/vue-app",children:"Vue"})}),`
`,N(e.li,{children:[l(e.a,{href:"https://github.com/alephjs/aleph.js/tree/main/examples/solid-app",children:"Solid"}),`
`,l(e.em,{children:"Experimental"})]}),`
`,N(e.li,{children:[l(e.a,{href:"https://github.com/alephjs/aleph.js/tree/main/examples/yew-app",children:"Yew"})," ",l(e.em,{children:"Rust"})]}),`
`]}),`
`,N(e.p,{children:["Plan to support: ",l(e.a,{href:"https://svelte.dev/",children:"Svelte"}),", ",l(e.a,{href:"https://lit.dev/",children:"Lit"}),", etc.."]}),`
`,l(e.h2,{children:"Examples"}),`
`,N(e.p,{children:["Some demo apps deployed to ",l(e.a,{href:"https://deno.com/deploy",children:"Deno Deploy"}),":"]}),`
`,N(e.ul,{children:[`
`,l(e.li,{children:"React App: https://aleph-hello.deno.dev/"}),`
`,l(e.li,{children:"Vue App: https://aleph-vue.deno.dev/"}),`
`,l(e.li,{children:"REST API: https://aleph-api.deno.dev/"}),`
`,l(e.li,{children:"React 18 Suspense SSR: https://aleph-suspense-ssr.deno.dev/"}),`
`,l(e.li,{children:"UnoCSS(tailwind): https://aleph-unocss.deno.dev/"}),`
`,l(e.li,{children:"Monaco Editor: https://aleph-monaco-editor.deno.dev/"}),`
`,l(e.li,{children:"Yew SSR: https://aleph-yew.deno.dev/"}),`
`,l(e.li,{children:"Github OAuth Middleware: https://aleph-github-oauth.deno.dev/"}),`
`]}),`
`,l(e.h2,{children:"Real-world Apps"}),`
`,N(e.ul,{children:[`
`,l(e.li,{children:"Deno Deploy: https://dash.deno.com"}),`
`,N(e.li,{children:[`Meet Me: https://meet-me.deno.dev
(`,l(e.a,{href:"https://github.com/denoland/meet-me",children:"source"}),")"]}),`
`]}),`
`,l(e.h2,{children:"Status"}),`
`,N(e.p,{children:["Currently in ",l(e.strong,{children:"beta"}),", not ready for production."]}),`
`,l(e.h2,{children:"License"}),`
`,N(e.p,{children:["Under the ",l(e.a,{href:"https://opensource.org/licenses/MIT",children:"MIT"})," License."]})]})}function Ue(n={}){let{wrapper:e}=n.components||{};return e?l(e,Object.assign({},n,{children:l(de,n)})):de(n)}var We=Ue;var U={};m(U,{default:()=>Be});import{Fragment as Je,jsx as x,jsxs as O}from"https://esm.sh/react@18.2.0/jsx-runtime";function pe(n){let e=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a",h2:"h2",pre:"pre",code:"code"},n.components);return O(Je,{children:[x(e.h1,{children:"Get Started!"}),`
`,O(e.p,{children:["Welcome to use ",x(e.strong,{children:"Aleph.js"}),"!"]}),`
`,O(e.p,{children:["If you are new to Aleph.js you should check out the ",x(e.a,{href:"/docs/",children:"About"})," page."]}),`
`,x(e.h2,{children:"Usage"}),`
`,x(e.p,{children:"Create a new app:"}),`
`,x(e.pre,{children:x(e.code,{className:"hljs language-bash",children:`deno run -A -r https://alephjs.org/init.ts
`})}),`
`,O(e.p,{children:["Start the app in ",x(e.code,{children:"development"})," mode:"]}),`
`,x(e.pre,{children:x(e.code,{className:"hljs language-bash",children:`deno task dev
`})}),`
`,O(e.p,{children:["Start the app in ",x(e.code,{children:"production"})," mode:"]}),`
`,x(e.pre,{children:x(e.code,{className:"hljs language-bash",children:`deno task start
`})}),`
`,x(e.p,{children:"Optimize the application (bundling, ssg, etc.):"}),`
`,x(e.pre,{children:x(e.code,{className:"hljs language-bash",children:`deno task opt
`})})]})}function Ye(n={}){let{wrapper:e}=n.components||{};return e?x(e,Object.assign({},n,{children:x(pe,n)})):pe(n)}var Be=Ye;var W={};m(W,{default:()=>ze});import{Fragment as Ge,jsx as S,jsxs as me}from"https://esm.sh/react@18.2.0/jsx-runtime";function ue(n){let e=Object.assign({h1:"h1",p:"p",a:"a",pre:"pre",code:"code"},n.components);return me(Ge,{children:[S(e.h1,{children:"Vue"}),`
`,me(e.p,{children:["Create a new ",S(e.a,{href:"https://vuejs.org",children:"Vue"})," app:"]}),`
`,S(e.pre,{children:S(e.code,{className:"hljs language-bash",children:`deno run -A -r https://alephjs.org/init.ts --template=vue
`})})]})}function Ve(n={}){let{wrapper:e}=n.components||{};return e?S(e,Object.assign({},n,{children:S(ue,n)})):ue(n)}var ze=Ve;var J={};m(J,{default:()=>Qe});import{Fragment as Ze,jsx as i,jsxs as D}from"https://esm.sh/react@18.2.0/jsx-runtime";function je(n){let e=Object.assign({h1:"h1",p:"p",a:"a",pre:"pre",code:"code",h2:"h2",span:"span",blockquote:"blockquote"},n.components);return D(Ze,{children:[i(e.h1,{children:"React with MDX"}),`
`,D(e.p,{children:["Create a new ",i(e.a,{href:"https://reactjs.org",children:"React"})," app with ",i(e.a,{href:"https://mdxjs.com",children:"MDX"}),`
support:`]}),`
`,i(e.pre,{children:i(e.code,{className:"hljs language-bash",children:`deno run -A -r https://alephjs.org/init.ts --template=react-mdx
`})}),`
`,i(e.h2,{children:"Extending MDX"}),`
`,D(e.p,{children:["You can add  ",i(e.a,{href:"https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins",children:"remark plugins"})," and ",i(e.a,{href:"https://github.com/rehypejs/rehype/blob/main/doc/plugins.md#list-of-plugins",children:"rehype plugins"})," for the MDX compiler in ",i(e.code,{children:"server.ts"})]}),`
`,i(e.pre,{children:D(e.code,{className:"hljs language-js",children:[i(e.span,{className:"hljs-keyword",children:"import"})," { serve } ",i(e.span,{className:"hljs-keyword",children:"from"})," ",i(e.span,{className:"hljs-string",children:'"aleph/server"'}),`;
`,i(e.span,{className:"hljs-keyword",children:"import"})," remarkFrontmatter ",i(e.span,{className:"hljs-keyword",children:"from"})," ",i(e.span,{className:"hljs-string",children:'"https://esm.sh/remark-frontmatter@4.0.1"'}),`;
`,i(e.span,{className:"hljs-keyword",children:"import"})," rehypeHighlight ",i(e.span,{className:"hljs-keyword",children:"from"})," ",i(e.span,{className:"hljs-string",children:'"https://esm.sh/rehype-highlight@5.0.2"'}),`;

`,i(e.span,{className:"hljs-title function_",children:"serve"}),`({
  `,i(e.span,{className:"hljs-attr",children:"loaders"}),`: [
    `,i(e.span,{className:"hljs-keyword",children:"new"})," ",i(e.span,{className:"hljs-title class_",children:"MDXLoader"}),`({
      `,i(e.span,{className:"hljs-attr",children:"remarkPlugins"}),`: [remarkFrontmatter],
      `,i(e.span,{className:"hljs-attr",children:"rehypePlugins"}),`: [rehypeHighlight],
    }),
  ],
  `,i(e.span,{className:"hljs-attr",children:"router"}),`: {
    `,i(e.span,{className:"hljs-attr",children:"glob"}),": ",i(e.span,{className:"hljs-string",children:'"./routes/**/*.{tsx,mdx,md}"'}),`,
  },
  `,i(e.span,{className:"hljs-attr",children:"ssr"}),": ",i(e.span,{className:"hljs-literal",children:"true"}),`,
});
`]})}),`
`,D(e.blockquote,{children:[`
`,D(e.p,{children:["See ",i(e.a,{href:"https://mdxjs.com/docs/extending-mdx/",children:"Extending MDX"})," for more details."]}),`
`]})]})}function Ke(n={}){let{wrapper:e}=n.components||{};return e?i(e,Object.assign({},n,{children:i(je,n)})):je(n)}var Qe=Ke;var Y={};m(Y,{default:()=>sn});import{Fragment as en,jsx as C,jsxs as ge}from"https://esm.sh/react@18.2.0/jsx-runtime";function Ne(n){let e=Object.assign({h1:"h1",p:"p",a:"a",pre:"pre",code:"code"},n.components);return ge(en,{children:[C(e.h1,{children:"SolidJS"}),`
`,ge(e.p,{children:["Create a new ",C(e.a,{href:"https://www.solidjs.com/",children:"SolidJS"})," app:"]}),`
`,C(e.pre,{children:C(e.code,{className:"hljs language-bash",children:`deno run -A -r https://alephjs.org/init.ts --template=solid
`})})]})}function nn(n={}){let{wrapper:e}=n.components||{};return e?C(e,Object.assign({},n,{children:C(Ne,n)})):Ne(n)}var sn=nn;var B={};m(B,{default:()=>rn});import{Fragment as an,jsx as b,jsxs as fe}from"https://esm.sh/react@18.2.0/jsx-runtime";function xe(n){let e=Object.assign({h1:"h1",p:"p",a:"a",pre:"pre",code:"code",h2:"h2"},n.components);return fe(an,{children:[b(e.h1,{children:"React"}),`
`,fe(e.p,{children:["Create a new ",b(e.a,{href:"https://reactjs.org",children:"React"})," app:"]}),`
`,b(e.pre,{children:b(e.code,{className:"hljs language-bash",children:`deno run -A -r https://alephjs.org/init.ts --template=react
`})}),`
`,b(e.h2,{children:"Add Pages"}),`
`,b(e.h2,{children:"Use Data"}),`
`,b(e.h2,{children:"Use Router"}),`
`,b(e.h2,{children:"Linking Between Pages"}),`
`,b(e.h2,{children:"NavLink"})]})}function ln(n={}){let{wrapper:e}=n.components||{};return e?b(e,Object.assign({},n,{children:b(xe,n)})):xe(n)}var rn=ln;var G={};m(G,{default:()=>hn});import{Fragment as cn,jsx as F,jsxs as we}from"https://esm.sh/react@18.2.0/jsx-runtime";function ye(n){let e=Object.assign({h1:"h1",p:"p",a:"a",pre:"pre",code:"code"},n.components);return we(cn,{children:[F(e.h1,{children:"Yew"}),`
`,we(e.p,{children:["Create a new ",F(e.a,{href:"https://yew.rs",children:"Yew"})," app:"]}),`
`,F(e.pre,{children:F(e.code,{className:"hljs language-bash",children:`deno run -A -r https://alephjs.org/init.ts --template=yew
`})})]})}function tn(n={}){let{wrapper:e}=n.components||{};return e?F(e,Object.assign({},n,{children:F(ye,n)})):ye(n)}var hn=tn;var V={};m(V,{default:()=>pn});import{Fragment as on,jsx as r,jsxs as A}from"https://esm.sh/react@18.2.0/jsx-runtime";function be(n){let e=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",pre:"pre",span:"span",h2:"h2",em:"em",h4:"h4"},n.components);return A(on,{children:[r(e.h1,{children:"Middleware API"}),`
`,A(e.p,{children:["In Aleph.js, a ",r(e.strong,{children:"Middleware"})," is an object with a ",r(e.code,{children:"name"})," and a ",r(e.code,{children:"fetch"}),` method.
The `,r(e.code,{children:"fetch"}),` method will be invoked when a request is received by the server. And
the `,r(e.code,{children:"fetch"})," method will end the request if returns a ",r(e.code,{children:"Response"})," object."]}),`
`,r(e.pre,{children:A(e.code,{className:"hljs language-ts",children:[r(e.span,{className:"hljs-keyword",children:"type"})," ",r(e.span,{className:"hljs-title class_",children:"Middleware"}),` = {
  `,r(e.span,{className:"hljs-attr",children:"name"}),": ",r(e.span,{className:"hljs-built_in",children:"string"}),`;
  `,r(e.span,{className:"hljs-title function_",children:"fetch"}),"(",r(e.span,{className:"hljs-attr",children:"req"}),": ",r(e.span,{className:"hljs-title class_",children:"Request"}),", ",r(e.span,{className:"hljs-attr",children:"context"}),": ",r(e.span,{className:"hljs-title class_",children:"Context"}),"): ",r(e.span,{className:"hljs-title class_",children:"Promise"}),"<",r(e.span,{className:"hljs-title class_",children:"Response"}),"> | ",r(e.span,{className:"hljs-title class_",children:"Response"})," | ",r(e.span,{className:"hljs-built_in",children:"void"}),`;
};
`]})}),`
`,r(e.h2,{children:"Use Middlewares"}),`
`,r(e.p,{children:`Here's a simple plugin example that allows you to add a virtual dist file to the
server:`}),`
`,r(e.pre,{children:A(e.code,{className:"hljs language-ts",children:[r(e.span,{className:"hljs-comment",children:"// server.ts"}),`

`,r(e.span,{className:"hljs-keyword",children:"import"})," foo ",r(e.span,{className:"hljs-keyword",children:"from"})," ",r(e.span,{className:"hljs-string",children:'"./middleware/foo.ts"'}),`;

`,r(e.span,{className:"hljs-title function_",children:"serve"}),`({
  `,r(e.span,{className:"hljs-attr",children:"middlewares"}),`: [
    foo,
    {
      `,r(e.span,{className:"hljs-attr",children:"name"}),": ",r(e.span,{className:"hljs-string",children:'"my-middleware"'}),`,
      `,r(e.span,{className:"hljs-title function_",children:"fetch"}),"(",r(e.span,{className:"hljs-params",children:"req"}),`) {
        `,r(e.span,{className:"hljs-keyword",children:"if"})," (req.",r(e.span,{className:"hljs-property",children:"url"})," === ",r(e.span,{className:"hljs-string",children:'"/my-middleware"'}),`) {
          `,r(e.span,{className:"hljs-keyword",children:"return"})," ",r(e.span,{className:"hljs-keyword",children:"new"})," ",r(e.span,{className:"hljs-title class_",children:"Response"}),"(",r(e.span,{className:"hljs-string",children:'"Hello, Middleware!"'}),`);
        }
      },
    },
  ],
});
`]})}),`
`,A(e.h2,{children:["Use ",r(e.code,{children:"Context"})," Object"]}),`
`,r(e.p,{children:r(e.em,{children:"WIP"})}),`
`,r(e.h2,{children:"Examples"}),`
`,r(e.p,{children:`The example plugins below are meant to give you an idea of the different types
of things you can do with the plugin API.`}),`
`,r(e.h4,{children:"Google Analytics"}),`
`,r(e.p,{children:"This example plugin shows how to insert custom scripts to SSR output HTML using middleware."}),`
`,r(e.pre,{children:A(e.code,{className:"hljs language-ts",children:[r(e.span,{className:"hljs-comment",children:"// wIP"}),`
`]})})]})}function dn(n={}){let{wrapper:e}=n.components||{};return e?r(e,Object.assign({},n,{children:r(be,n)})):be(n)}var pn=dn;var z={};m(z,{default:()=>gn});import{Fragment as mn,jsx as L,jsxs as un}from"https://esm.sh/react@18.2.0/jsx-runtime";function _e(n){let e=Object.assign({h1:"h1",p:"p",em:"em"},n.components);return un(mn,{children:[L(e.h1,{children:"Server Config"}),`
`,L(e.p,{children:L(e.em,{children:"WIP"})})]})}function jn(n={}){let{wrapper:e}=n.components||{};return e?L(e,Object.assign({},n,{children:L(_e,n)})):_e(n)}var gn=jn;var Z={};m(Z,{default:()=>xn});import{Fragment as Nn,jsx as t,jsxs as v}from"https://esm.sh/react@18.2.0/jsx-runtime";function ke(n){let e=Object.assign({h1:"h1",p:"p",a:"a",code:"code",pre:"pre",span:"span"},n.components);return v(Nn,{children:[t(e.h1,{children:"Import Maps"}),`
`,v(e.p,{children:["To use ",t(e.a,{href:"https://github.com/WICG/import-maps",children:"import maps"}),", create a ",t(e.code,{children:"import_map.json"})," file in the root directory:"]}),`
`,t(e.pre,{children:v(e.code,{className:"hljs language-json",children:[t(e.span,{className:"hljs-punctuation",children:"{"}),`
  `,t(e.span,{className:"hljs-attr",children:'"imports"'}),t(e.span,{className:"hljs-punctuation",children:":"})," ",t(e.span,{className:"hljs-punctuation",children:"{"}),`
    `,t(e.span,{className:"hljs-attr",children:'"@/"'}),t(e.span,{className:"hljs-punctuation",children:":"})," ",t(e.span,{className:"hljs-string",children:'"./"'}),t(e.span,{className:"hljs-punctuation",children:","}),`
    `,t(e.span,{className:"hljs-attr",children:'"react"'}),t(e.span,{className:"hljs-punctuation",children:":"})," ",t(e.span,{className:"hljs-string",children:'"https://esm.sh/react@18.2.0"'}),t(e.span,{className:"hljs-punctuation",children:","}),`
    ...
  `,t(e.span,{className:"hljs-punctuation",children:"}"}),`
`,t(e.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,v(e.p,{children:["Add the ",t(e.code,{children:"importMap"})," option in the ",t(e.code,{children:"deno.json"})," file:"]}),`
`,t(e.pre,{children:v(e.code,{className:"hljs language-json",children:[t(e.span,{className:"hljs-punctuation",children:"{"}),`
  `,t(e.span,{className:"hljs-attr",children:'"importMap"'}),t(e.span,{className:"hljs-punctuation",children:":"})," ",t(e.span,{className:"hljs-string",children:'"import_map.json"'}),`
`,t(e.span,{className:"hljs-punctuation",children:"}"}),`
`]})}),`
`,t(e.p,{children:"then in your code:"}),`
`,t(e.pre,{children:v(e.code,{className:"hljs language-tsx",children:[t(e.span,{className:"hljs-keyword",children:"import"})," { useState } ",t(e.span,{className:"hljs-keyword",children:"from"})," ",t(e.span,{className:"hljs-string",children:'"react"'}),`;
`,t(e.span,{className:"hljs-keyword",children:"import"})," ",t(e.span,{className:"hljs-title class_",children:"Logo"})," ",t(e.span,{className:"hljs-keyword",children:"from"})," ",t(e.span,{className:"hljs-string",children:'"@/components/logo.tsx"'}),`;

`,t(e.span,{className:"hljs-keyword",children:"export"})," ",t(e.span,{className:"hljs-keyword",children:"default"})," ",t(e.span,{className:"hljs-keyword",children:"function"})," ",t(e.span,{className:"hljs-title function_",children:"App"}),"(",t(e.span,{className:"hljs-params"}),`) {
  `,t(e.span,{className:"hljs-keyword",children:"return"})," ",t(e.span,{className:"xml",children:v(e.span,{className:"hljs-tag",children:["<",t(e.span,{className:"hljs-name",children:"Logo"})," />"]})}),`;
}
`]})})]})}function fn(n={}){let{wrapper:e}=n.components||{};return e?t(e,Object.assign({},n,{children:t(ke,n)})):ke(n)}var xn=fn;var K={};m(K,{default:()=>bn});import{Fragment as wn,jsx as p,jsxs as R}from"https://esm.sh/react@18.2.0/jsx-runtime";function ve(n){let e=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",span:"span",ul:"ul",li:"li"},n.components);return R(wn,{children:[p(e.h1,{children:"Static File Serving"}),`
`,R(e.p,{children:["Aleph.js will serve any static files in the project directory. Files inside the project directory can then be referenced by your code by using the base URL (",p(e.code,{children:"/"}),")."]}),`
`,R(e.p,{children:["For example, if you add an image ",p(e.code,{children:"assets/logo.png"}),", the following code will access the image:"]}),`
`,p(e.pre,{children:R(e.code,{className:"hljs language-jsx",children:[p(e.span,{className:"hljs-keyword",children:"export"})," ",p(e.span,{className:"hljs-keyword",children:"default"})," ",p(e.span,{className:"hljs-keyword",children:"function"})," ",p(e.span,{className:"hljs-title function_",children:"Logo"}),"(",p(e.span,{className:"hljs-params"}),`) {
  `,p(e.span,{className:"hljs-keyword",children:"return"}),` (
    `,p(e.span,{className:"xml",children:R(e.span,{className:"hljs-tag",children:["<",p(e.span,{className:"hljs-name",children:"img"})," ",p(e.span,{className:"hljs-attr",children:"src"}),"=",p(e.span,{className:"hljs-string",children:'"/assets/logo.png"'})," ",p(e.span,{className:"hljs-attr",children:"alt"}),"=",p(e.span,{className:"hljs-string",children:'"Logo"'})," />"]})}),`
  )
}
`]})}),`
`,p(e.p,{children:"You can also serve other static assets such as:"}),`
`,R(e.ul,{children:[`
`,p(e.li,{children:p(e.code,{children:"favicon.ico"})}),`
`,p(e.li,{children:p(e.code,{children:"manifest.json"})}),`
`,p(e.li,{children:p(e.code,{children:"robots.txt"})}),`
`,p(e.li,{children:"Google Site Verification, etc"}),`
`]})]})}function yn(n={}){let{wrapper:e}=n.components||{};return e?p(e,Object.assign({},n,{children:p(ve,n)})):ve(n)}var bn=yn;var Q={};m(Q,{default:()=>vn});import{Fragment as _n,jsx as a,jsxs as j}from"https://esm.sh/react@18.2.0/jsx-runtime";function Me(n){let e=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",span:"span",h3:"h3",ul:"ul",li:"li",strong:"strong"},n.components);return j(_n,{children:[a(e.h1,{children:"Routing"}),`
`,j(e.p,{children:["Aleph.js has a file-system based router. When a file (",a(e.code,{children:".js"}),", ",a(e.code,{children:".jsx"}),", ",a(e.code,{children:".ts"}),`,
`,a(e.code,{children:".tsx"}),", and ",a(e.code,{children:".mjs"}),") is added to the ",a(e.code,{children:"routes"}),` directory, it is automatically
available as a route.`]}),`
`,j(e.p,{children:["You can configure the ",a(e.code,{children:"router"})," in ",a(e.code,{children:"server.ts"}),"."]}),`
`,a(e.pre,{children:j(e.code,{className:"hljs language-js",children:[a(e.span,{className:"hljs-comment",children:"// server.ts"}),`

`,a(e.span,{className:"hljs-keyword",children:"import"})," { serve } ",a(e.span,{className:"hljs-keyword",children:"from"})," ",a(e.span,{className:"hljs-string",children:'"aleph/server"'}),`;

`,a(e.span,{className:"hljs-title function_",children:"serve"}),`({
  `,a(e.span,{className:"hljs-attr",children:"router"}),`: {
    `,a(e.span,{className:"hljs-comment",children:"// use glob pattern to match routes"}),`
    `,a(e.span,{className:"hljs-attr",children:"glob"}),": ",a(e.span,{className:"hljs-string",children:'"./routes/**/*.{ts,tsx,mdx}"'}),`,

    `,a(e.span,{className:"hljs-comment",children:"// or use dir prefix and extnames"}),`
    `,a(e.span,{className:"hljs-attr",children:"dir"}),": ",a(e.span,{className:"hljs-string",children:'"./routes"'}),`,
    `,a(e.span,{className:"hljs-attr",children:"exts"}),": [",a(e.span,{className:"hljs-string",children:'"ts"'}),", ",a(e.span,{className:"hljs-string",children:'".tsx"'}),", ",a(e.span,{className:"hljs-string",children:'".mdx"'}),`],
  },
});
`]})}),`
`,a(e.h3,{children:"Index Routes"}),`
`,j(e.p,{children:["The router will automatically route files named ",a(e.code,{children:"index"}),` to the root of the
directory.`]}),`
`,j(e.ul,{children:[`
`,j(e.li,{children:[a(e.code,{children:"routes/index.tsx"})," \u2192 ",a(e.code,{children:"/"})]}),`
`,j(e.li,{children:[a(e.code,{children:"routes/blog/index.tsx"})," \u2192 ",a(e.code,{children:"/blog"})]}),`
`]}),`
`,a(e.h3,{children:"Dynamic Routes"}),`
`,j(e.p,{children:[`To match a dynamic segment, you can use bracket syntax or start the segment with
`,a(e.strong,{children:"$"}),":"]}),`
`,j(e.ul,{children:[`
`,j(e.li,{children:[a(e.code,{children:"routes/blog/$slug.tsx"})," \u2192 ",a(e.code,{children:"/blog/:slug"})," (",a(e.code,{children:"/blog/hello-world"}),")"]}),`
`,j(e.li,{children:[a(e.code,{children:"routes/$username/settings.tsx"})," \u2192 ",a(e.code,{children:"/:username/settings"})," (",a(e.code,{children:"/foo/settings"}),")"]}),`
`,j(e.li,{children:[a(e.code,{children:"routes/post/$all+.tsx"})," \u2192 ",a(e.code,{children:"/post/*"})," (",a(e.code,{children:"/post/2020/id/title"}),")"]}),`
`]}),`
`,a(e.h3,{children:"Nested Routes"}),`
`,a(e.p,{children:"Aleph.js supports nested route structures like:"}),`
`,j(e.ul,{children:[`
`,a(e.li,{children:a(e.code,{children:"routes/blog.tsx"})}),`
`,a(e.li,{children:a(e.code,{children:"routes/blog/$slug.tsx"})}),`
`]}),`
`,j(e.p,{children:["In the example, routes in ",a(e.code,{children:"/blog/:slug"}),` will be rendered under the
`,a(e.code,{children:"routes/blog.tsx"}),", that is useful to create a ",a(e.strong,{children:"layout"})," for routes:"]}),`
`,a(e.pre,{children:j(e.code,{className:"hljs language-jsx",children:[a(e.span,{className:"hljs-comment",children:"// routes/blog.tsx"}),`

`,a(e.span,{className:"hljs-keyword",children:"import"})," ",a(e.span,{className:"hljs-title class_",children:"BlogHeader"})," ",a(e.span,{className:"hljs-keyword",children:"from"})," ",a(e.span,{className:"hljs-string",children:'"../components/blog-header.tsx"'}),`;

`,a(e.span,{className:"hljs-keyword",children:"export"})," ",a(e.span,{className:"hljs-keyword",children:"default"})," ",a(e.span,{className:"hljs-keyword",children:"function"})," ",a(e.span,{className:"hljs-title function_",children:"Blog"}),"(",a(e.span,{className:"hljs-params",children:"{ children }"}),`) {
  `,a(e.span,{className:"hljs-keyword",children:"return"}),` (
    `,j(e.span,{className:"xml",children:[a(e.span,{className:"hljs-tag",children:"<>"}),`
      `,j(e.span,{className:"hljs-tag",children:["<",a(e.span,{className:"hljs-name",children:"BlogHeader"})," />"]}),`
      `,j(e.span,{className:"hljs-tag",children:["<",a(e.span,{className:"hljs-name",children:"div"})," ",a(e.span,{className:"hljs-attr",children:"className"}),"=",a(e.span,{className:"hljs-string",children:'"blog-body"'}),">"]}),`
        {children}
      `,j(e.span,{className:"hljs-tag",children:["</",a(e.span,{className:"hljs-name",children:"div"}),">"]}),`
    `,a(e.span,{className:"hljs-tag",children:"</>"})]}),`
  );
}
`]})})]})}function kn(n={}){let{wrapper:e}=n.components||{};return e?a(e,Object.assign({},n,{children:a(Me,n)})):Me(n)}var vn=kn;var ee={};m(ee,{default:()=>Dn});import{Fragment as Mn,jsx as h,jsxs as w}from"https://esm.sh/react@18.2.0/jsx-runtime";function Se(n){let e=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a",pre:"pre",code:"code",span:"span",h2:"h2"},n.components);return w(Mn,{children:[h(e.h1,{children:"Import From NPM"}),`
`,w(e.p,{children:["Aleph.js uses ",h(e.strong,{children:"ESM"})," imports syntax in Deno. To import modules from ",h(e.strong,{children:"NPM"}),`,
you can use `,h(e.a,{href:"https://esm.sh",children:"esm.sh"})," CDN that is maintained by Aleph.js team."]}),`
`,h(e.pre,{children:w(e.code,{className:"hljs language-jsx",children:[h(e.span,{className:"hljs-keyword",children:"import"})," useSWR ",h(e.span,{className:"hljs-keyword",children:"from"})," ",h(e.span,{className:"hljs-string",children:'"https://esm.sh/swr"'}),`;

`,h(e.span,{className:"hljs-keyword",children:"export"})," ",h(e.span,{className:"hljs-keyword",children:"default"})," ",h(e.span,{className:"hljs-keyword",children:"function"})," ",h(e.span,{className:"hljs-title function_",children:"About"}),"(",h(e.span,{className:"hljs-params"}),`) {
  `,h(e.span,{className:"hljs-keyword",children:"const"})," { data, error } = ",h(e.span,{className:"hljs-title function_",children:"useSWR"}),"(",h(e.span,{className:"hljs-string",children:'"/api/user"'}),`, fetcher);

  `,h(e.span,{className:"hljs-keyword",children:"if"}),` (error) {
    `,h(e.span,{className:"hljs-keyword",children:"return"})," ",w(e.span,{className:"xml",children:[w(e.span,{className:"hljs-tag",children:["<",h(e.span,{className:"hljs-name",children:"div"}),">"]}),"failed to load",w(e.span,{className:"hljs-tag",children:["</",h(e.span,{className:"hljs-name",children:"div"}),">"]})]}),`;
  }
  `,h(e.span,{className:"hljs-keyword",children:"if"}),` (!data) {
    `,h(e.span,{className:"hljs-keyword",children:"return"})," ",w(e.span,{className:"xml",children:[w(e.span,{className:"hljs-tag",children:["<",h(e.span,{className:"hljs-name",children:"div"}),">"]}),"loading...",w(e.span,{className:"hljs-tag",children:["</",h(e.span,{className:"hljs-name",children:"div"}),">"]})]}),`;
  }
  `,h(e.span,{className:"hljs-keyword",children:"return"})," ",w(e.span,{className:"xml",children:[w(e.span,{className:"hljs-tag",children:["<",h(e.span,{className:"hljs-name",children:"div"}),">"]}),"hello {data.name}!",w(e.span,{className:"hljs-tag",children:["</",h(e.span,{className:"hljs-name",children:"div"}),">"]})]}),`;
}
`]})}),`
`,h(e.h2,{children:"Using NPM Specifier"}),`
`,h(e.p,{children:"The NPM Specifier is extremely new added in Deno 1.25"}),`
`,h(e.pre,{children:w(e.code,{className:"hljs language-js",children:[h(e.span,{className:"hljs-keyword",children:"import"})," express ",h(e.span,{className:"hljs-keyword",children:"from"})," ",h(e.span,{className:"hljs-string",children:'"npm:express@5"'}),`;
`]})}),`
`,h(e.p,{children:"These npm specifiers have the following format:"}),`
`,h(e.pre,{children:w(e.code,{className:"hljs language-lua",children:["npm:<",h(e.span,{className:"hljs-built_in",children:"package"}),"-name>[@<version-requirement>][/<",h(e.span,{className:"hljs-built_in",children:"sub"}),"-",h(e.span,{className:"hljs-built_in",children:"path"}),`>]
`]})})]})}function Sn(n={}){let{wrapper:e}=n.components||{};return e?h(e,Object.assign({},n,{children:h(Se,n)})):Se(n)}var Dn=Sn;var ne={};m(ne,{default:()=>Rn});import{Fragment as Cn,jsx as s,jsxs as o}from"https://esm.sh/react@18.2.0/jsx-runtime";import{Link as Fn}from"aleph/react";function De(n){let e=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",span:"span",blockquote:"blockquote",h2:"h2",ul:"ul",li:"li",a:"a"},n.components);return o(Cn,{children:[s(e.h1,{children:"Server"}),`
`,s(e.p,{children:`In Aleph.js, the server handles all incoming requests, everything is
just-in-time, includes static files, server-side rendering, data fetching, and
module transpile.`}),`
`,s(e.pre,{children:o(e.code,{className:"hljs language-jsx",children:[s(e.span,{className:"hljs-comment",children:"// server.ts"}),`

`,s(e.span,{className:"hljs-keyword",children:"import"})," { serve } ",s(e.span,{className:"hljs-keyword",children:"from"})," ",s(e.span,{className:"hljs-string",children:'"aleph/server"'}),`

`,s(e.span,{className:"hljs-title function_",children:"serve"}),`({
  `,s(e.span,{className:"hljs-attr",children:"port"}),": ",s(e.span,{className:"hljs-number",children:"8080"}),`,
  `,s(e.span,{className:"hljs-attr",children:"router"}),`: {
    `,s(e.span,{className:"hljs-attr",children:"glob"}),": ",s(e.span,{className:"hljs-string",children:'"./routes/**/*.{ts,tsx}"'}),`,
  }
  `,s(e.span,{className:"hljs-attr",children:"middlewares"}),": [ ",s(e.span,{className:"hljs-comment",children:"/* ... */"}),` ]
  `,s(e.span,{className:"hljs-attr",children:"uncoss"}),": { ",s(e.span,{className:"hljs-comment",children:"/* ... */"}),` }
  `,s(e.span,{className:"hljs-attr",children:"ssr"}),": ",o(e.span,{className:"hljs-function",children:["(",s(e.span,{className:"hljs-params",children:"ctx"}),") =>"]}),` {
    `,s(e.span,{className:"hljs-keyword",children:"return"})," ",s(e.span,{className:"hljs-title function_",children:"renderToString"}),"(",s(e.span,{className:"xml",children:o(e.span,{className:"hljs-tag",children:["<",s(e.span,{className:"hljs-name",children:"App"}),"/>"]})}),`)
  }
})
`]})}),`
`,o(e.blockquote,{children:[`
`,o(e.p,{children:["Normally you don't need to configure the server by using Aleph's template created by the ",s(e.code,{children:"init"}),` script.
To learn more about server configuration, check out the
`,s(Fn,{to:"/docs/api-reference/server-config",children:"Server Config API"}),"."]}),`
`]}),`
`,s(e.h2,{children:s(e.code,{children:"index.html"})}),`
`,o(e.p,{children:["Aleph.js uses ",s(e.code,{children:"index.html"}),` (in the project root directory) as the page html
output template, you can add your own tags to it, like `,s(e.code,{children:"<meta>"}),", ",s(e.code,{children:"<script>"}),`,
`,s(e.code,{children:"<link>"}),", etc."]}),`
`,s(e.pre,{children:o(e.code,{className:"hljs language-html",children:[o(e.span,{className:"hljs-meta",children:["<!DOCTYPE ",s(e.span,{className:"hljs-keyword",children:"html"}),">"]}),`
`,o(e.span,{className:"hljs-tag",children:["<",s(e.span,{className:"hljs-name",children:"html"})," ",s(e.span,{className:"hljs-attr",children:"lang"}),"=",s(e.span,{className:"hljs-string",children:'"en"'}),">"]}),`

`,o(e.span,{className:"hljs-tag",children:["<",s(e.span,{className:"hljs-name",children:"head"}),">"]}),`
  `,o(e.span,{className:"hljs-tag",children:["<",s(e.span,{className:"hljs-name",children:"meta"})," ",s(e.span,{className:"hljs-attr",children:"charset"}),"=",s(e.span,{className:"hljs-string",children:'"UTF-8"'}),">"]}),`
  `,o(e.span,{className:"hljs-tag",children:["<",s(e.span,{className:"hljs-name",children:"meta"})," ",s(e.span,{className:"hljs-attr",children:"name"}),"=",s(e.span,{className:"hljs-string",children:'"viewport"'})," ",s(e.span,{className:"hljs-attr",children:"content"}),"=",s(e.span,{className:"hljs-string",children:'"width=device-width, initial-scale=1.0"'}),">"]}),`
  `,o(e.span,{className:"hljs-tag",children:["<",s(e.span,{className:"hljs-name",children:"link"})," ",s(e.span,{className:"hljs-attr",children:"rel"}),"=",s(e.span,{className:"hljs-string",children:'"icon"'})," ",s(e.span,{className:"hljs-attr",children:"href"}),"=",s(e.span,{className:"hljs-string",children:'"./assets/logo.svg"'}),">"]}),`
  `,o(e.span,{className:"hljs-tag",children:["<",s(e.span,{className:"hljs-name",children:"link"})," ",s(e.span,{className:"hljs-attr",children:"rel"}),"=",s(e.span,{className:"hljs-string",children:'"stylesheet"'})," ",s(e.span,{className:"hljs-attr",children:"href"}),"=",s(e.span,{className:"hljs-string",children:'"./style/app.css"'}),">"]}),`
`,o(e.span,{className:"hljs-tag",children:["</",s(e.span,{className:"hljs-name",children:"head"}),">"]}),`

`,o(e.span,{className:"hljs-tag",children:["<",s(e.span,{className:"hljs-name",children:"body"}),">"]}),`
  `,o(e.span,{className:"hljs-tag",children:["<",s(e.span,{className:"hljs-name",children:"div"})," ",s(e.span,{className:"hljs-attr",children:"id"}),"=",s(e.span,{className:"hljs-string",children:'"root"'})," ",s(e.span,{className:"hljs-attr",children:"data-ssr-root"}),">"]}),o(e.span,{className:"hljs-tag",children:["</",s(e.span,{className:"hljs-name",children:"div"}),">"]}),`
  `,o(e.span,{className:"hljs-tag",children:["<",s(e.span,{className:"hljs-name",children:"script"})," ",s(e.span,{className:"hljs-attr",children:"type"}),"=",s(e.span,{className:"hljs-string",children:'"module"'})," ",s(e.span,{className:"hljs-attr",children:"src"}),"=",s(e.span,{className:"hljs-string",children:'"./main.ts"'}),">"]}),o(e.span,{className:"hljs-tag",children:["</",s(e.span,{className:"hljs-name",children:"script"}),">"]}),`
  `,o(e.span,{className:"hljs-tag",children:["<",s(e.span,{className:"hljs-name",children:"script"}),">"]}),o(e.span,{className:"javascript",children:[s(e.span,{className:"hljs-variable language_",children:"console"}),".",s(e.span,{className:"hljs-title function_",children:"log"}),"(",s(e.span,{className:"hljs-string",children:'"Hello world!"'}),")"]}),o(e.span,{className:"hljs-tag",children:["</",s(e.span,{className:"hljs-name",children:"script"}),">"]}),`
`,o(e.span,{className:"hljs-tag",children:["</",s(e.span,{className:"hljs-name",children:"body"}),">"]}),`

`,o(e.span,{className:"hljs-tag",children:["</",s(e.span,{className:"hljs-name",children:"html"}),">"]}),`
`]})}),`
`,o(e.ul,{children:[`
`,o(e.li,{children:["The attribute ",s(e.code,{children:"data-ssr-root"}),` is to point out the root element for server-side
rendering.`]}),`
`,o(e.li,{children:["Aleph.js will transpile modules for browsers automatically, you can safely add non-JS modules like ",s(e.code,{children:"JSX"})," or ",s(e.code,{children:"TS"}),"."]}),`
`,o(e.li,{children:["CSS files will be bundled using ",s(e.a,{href:"https://lightningcss.dev/",children:"lightningcss"})]}),`
`]})]})}function An(n={}){let{wrapper:e}=n.components||{};return e?s(e,Object.assign({},n,{children:s(De,n)})):De(n)}var Rn=An;var se={};m(se,{default:()=>Ln});import{Fragment as Xn,jsx as c,jsxs as f}from"https://esm.sh/react@18.2.0/jsx-runtime";function Ce(n){let e=Object.assign({h1:"h1",p:"p",code:"code",strong:"strong",pre:"pre",span:"span",h2:"h2",a:"a"},n.components);return f(Xn,{children:[c(e.h1,{children:"CSS Support"}),`
`,f(e.p,{children:["Aleph.js uses the ",c(e.code,{children:"index.html"}),` as the page entry template, that means you can
add any `,c(e.strong,{children:"CSS"})," files with ",c(e.code,{children:"link"})," tag:"]}),`
`,c(e.pre,{children:f(e.code,{className:"hljs language-html",children:[f(e.span,{className:"hljs-tag",children:["<",c(e.span,{className:"hljs-name",children:"html"}),">"]}),`
  `,f(e.span,{className:"hljs-tag",children:["<",c(e.span,{className:"hljs-name",children:"head"}),">"]}),`
    `,f(e.span,{className:"hljs-tag",children:["<",c(e.span,{className:"hljs-name",children:"title"}),">"]}),"Hello, World!",f(e.span,{className:"hljs-tag",children:["</",c(e.span,{className:"hljs-name",children:"title"}),">"]}),`
    `,f(e.span,{className:"hljs-tag",children:["<",c(e.span,{className:"hljs-name",children:"link"})," ",c(e.span,{className:"hljs-attr",children:"rel"}),"=",c(e.span,{className:"hljs-string",children:'"stylesheet"'})," ",c(e.span,{className:"hljs-attr",children:"href"}),"=",c(e.span,{className:"hljs-string",children:'"./style/app.css"'}),">"]}),`
  `,f(e.span,{className:"hljs-tag",children:["</",c(e.span,{className:"hljs-name",children:"head"}),">"]}),`
  `,f(e.span,{className:"hljs-tag",children:["<",c(e.span,{className:"hljs-name",children:"body"}),">"]}),`
    `,f(e.span,{className:"hljs-tag",children:["<",c(e.span,{className:"hljs-name",children:"h1"}),">"]}),"Hello, World!",f(e.span,{className:"hljs-tag",children:["</",c(e.span,{className:"hljs-name",children:"h1"}),">"]}),`
  `,f(e.span,{className:"hljs-tag",children:["</",c(e.span,{className:"hljs-name",children:"body"}),">"]}),`
`,f(e.span,{className:"hljs-tag",children:["</",c(e.span,{className:"hljs-name",children:"html"}),">"]}),`
`]})}),`
`,f(e.h2,{children:["CSS Imports (",c(e.code,{children:"@import"}),")"]}),`
`,f(e.p,{children:["Aleph.js uses ",c(e.a,{href:"https://lightningcss.dev/",children:"lightningcss"}),` to bundle your CSS code
when you use `,c(e.code,{children:"@import"})," to import other CSS files."]}),`
`,c(e.pre,{children:f(e.code,{className:"hljs language-css",children:[c(e.span,{className:"hljs-keyword",children:"@import"})," url(",c(e.span,{className:"hljs-string",children:'"./reset.css"'}),`);

`,c(e.span,{className:"hljs-selector-tag",children:"body"}),` {
  `,c(e.span,{className:"hljs-attribute",children:"font-family"}),": ",c(e.span,{className:"hljs-string",children:'"Roboto"'}),`, sans-serif;
}
`]})}),`
`,c(e.h2,{children:"Draft syntax"}),`
`,f(e.p,{children:["Aleph.js supports ",c(e.a,{href:"https://www.w3.org/TR/css-nesting-1/",children:"Nesting"}),` and
`,c(e.a,{href:"https://www.w3.org/TR/mediaqueries-5/#custom-mq",children:"Custom media queries"}),` draft
spec`]}),`
`,c(e.pre,{children:f(e.code,{className:"hljs language-css",children:[c(e.span,{className:"hljs-keyword",children:"@custom-media"})," --modern (",c(e.span,{className:"hljs-attribute",children:"color"}),"), (",c(e.span,{className:"hljs-attribute",children:"hover"}),`);

`,c(e.span,{className:"hljs-selector-class",children:".foo"}),` {
  `,c(e.span,{className:"hljs-attribute",children:"background"}),`: yellow;

  &`,c(e.span,{className:"hljs-selector-class",children:".bar"}),` {
    `,c(e.span,{className:"hljs-attribute",children:"color"}),`: green;
  }
}

`,c(e.span,{className:"hljs-keyword",children:"@media"})," (--modern) ",c(e.span,{className:"hljs-keyword",children:"and"})," (",c(e.span,{className:"hljs-attribute",children:"width"})," > ",c(e.span,{className:"hljs-number",children:"1024px"}),`) {
  `,c(e.span,{className:"hljs-selector-class",children:".a"}),` {
    `,c(e.span,{className:"hljs-attribute",children:"color"}),`: green;
  }
}
`]})})]})}function On(n={}){let{wrapper:e}=n.components||{};return e?c(e,Object.assign({},n,{children:c(Ce,n)})):Ce(n)}var Ln=On;var ae={};m(ae,{default:()=>In});import{Fragment as Tn,jsx as d,jsxs as k}from"https://esm.sh/react@18.2.0/jsx-runtime";function Fe(n){let e=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",pre:"pre",span:"span",h2:"h2",blockquote:"blockquote",a:"a",h3:"h3",ul:"ul",li:"li"},n.components);return k(Tn,{children:[d(e.h1,{children:"Hot Module Replacement"}),`
`,k(e.p,{children:["Hot Module Replacement (or HMR) allows modules to be updated at runtime without the need for a full refresh during ",d(e.strong,{children:"development"}),". To support this, Aleph.js's built-in ",d(e.strong,{children:"HMR"})," module creates a ",d(e.strong,{children:"WebSocket"})," connection to the dev server on the client, and the server listens for file changes. Once the HMR client gets an update signal from the server, Aleph.js will re-import the updated module."]}),`
`,d(e.p,{children:"For a CSS module, the old style will be removed after the new one is applied. For a React Component, Fast Refresh will re-render the component view without losing component state."}),`
`,k(e.p,{children:["You can use the ",d(e.code,{children:"hot"})," api to handle the module update event."]}),`
`,d(e.pre,{children:k(e.code,{className:"hljs language-js",children:[d(e.span,{className:"hljs-keyword",children:"import"}),".",d(e.span,{className:"hljs-property",children:"meta"}),".",d(e.span,{className:"hljs-property",children:"hot"}),"?.",d(e.span,{className:"hljs-title function_",children:"accept"}),"(",k(e.span,{className:"hljs-function",children:["(",d(e.span,{className:"hljs-params",children:"mod"}),")=>"]}),`{
  `,d(e.span,{className:"hljs-comment",children:"// update UI"}),`
})

`,d(e.span,{className:"hljs-comment",children:"// just reload the page when the module is updated"}),`
`,d(e.span,{className:"hljs-keyword",children:"import"}),".",d(e.span,{className:"hljs-property",children:"meta"}),".",d(e.span,{className:"hljs-property",children:"hot"}),"?.",d(e.span,{className:"hljs-title function_",children:"decline"}),`()
`]})}),`
`,d(e.h2,{children:"React Fast Refresh"}),`
`,k(e.blockquote,{children:[`
`,k(e.p,{children:[`It's a reimplementation of "hot reloading" with full support from React. It's originally `,d(e.a,{href:"https://twitter.com/dan_abramov/status/1169687758849400832",children:"shipped for React Native"}),", but most of the implementation is platform-independent. The plan is to use it across the board, as a replacement for purely userland solutions (like react-hot-loader). ",d(e.a,{href:"https://github.com/facebook/react/issues/16604#issuecomment-528663101",children:"\xB9"})]}),`
`]}),`
`,d("video",{src:"/assets/fast-refresh.mp4",loop:!0,autoplay:!0,muted:!0,controls:!0}),`
`,d(e.h3,{children:"Limits"}),`
`,k(e.ul,{children:[`
`,d(e.li,{children:"Fast Refresh only supports functional components with hooks."}),`
`,k(e.li,{children:["Functional components using default exports must be named: ",d(e.code,{children:"export default function ComponentName() {}"}),"."]}),`
`]})]})}function $n(n={}){let{wrapper:e}=n.components||{};return e?d(e,Object.assign({},n,{children:d(Fe,n)})):Fe(n)}var In=$n;var le={};m(le,{default:()=>Hn});import{Fragment as qn,jsx as _,jsxs as T}from"https://esm.sh/react@18.2.0/jsx-runtime";function Ae(n){let e=Object.assign({h1:"h1",p:"p",strong:"strong",em:"em",code:"code",pre:"pre",span:"span"},n.components);return T(qn,{children:[_(e.h1,{children:"Server-side Rendering"}),`
`,T(e.p,{children:["By default, Aleph.js ",_(e.strong,{children:"pre-renders"})," every page. This means that Aleph.js generates HTML for each page in advance, instead of rendering it with client-side JavaScript. Pre-rendering can result in better performance and SEO."]}),`
`,T(e.p,{children:["Each generated HTML page only needs a small amount of JavaScript. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called ",_(e.em,{children:"hydration"}),".)"]}),`
`,T(e.p,{children:["You can disable ",_(e.strong,{children:"SSR"})," functionality in ",_(e.code,{children:"server.ts"}),":"]}),`
`,_(e.pre,{children:T(e.code,{className:"hljs language-ts",children:[_(e.span,{className:"hljs-title function_",children:"serve"}),`({
  `,_(e.span,{className:"hljs-attr",children:"ssr"}),": ",_(e.span,{className:"hljs-literal",children:"true"}),`
})
`]})})]})}function Pn(n={}){let{wrapper:e}=n.components||{};return e?_(e,Object.assign({},n,{children:_(Ae,n)})):Ae(n)}var Hn=Pn;var re={};m(re,{default:()=>Wn});import{Fragment as En,jsx as g,jsxs as q}from"https://esm.sh/react@18.2.0/jsx-runtime";function Re(n){let e=Object.assign({h1:"h1",p:"p",a:"a",code:"code",pre:"pre",span:"span"},n.components);return q(En,{children:[g(e.h1,{children:"Unocss"}),`
`,q(e.p,{children:["Aleph.js uses ",g(e.a,{href:"https://github.com/unocss/unocss/",children:"Unocss"}),` as the Atomic CSS
engine. To enable unocss, add `,g(e.code,{children:"presets"})," to the ",g(e.code,{children:"unocss"})," option in ",g(e.code,{children:"server.ts"}),":"]}),`
`,g(e.pre,{children:q(e.code,{className:"hljs language-js",children:[g(e.span,{className:"hljs-keyword",children:"import"})," presetUno ",g(e.span,{className:"hljs-keyword",children:"from"})," ",g(e.span,{className:"hljs-string",children:'"https://esm.sh/@unocss/preset-uno"'}),`;
`,g(e.span,{className:"hljs-keyword",children:"import"})," { serve } ",g(e.span,{className:"hljs-keyword",children:"from"})," ",g(e.span,{className:"hljs-string",children:'"aleph/server"'}),`;

`,g(e.span,{className:"hljs-title function_",children:"serve"}),`({
  `,g(e.span,{className:"hljs-attr",children:"unocss"}),`: {
    `,g(e.span,{className:"hljs-attr",children:"presets"}),": [",g(e.span,{className:"hljs-title function_",children:"presetUno"}),`()],
  },
});
`]})}),`
`,q(e.p,{children:["Check out the ",g(e.a,{href:"https://github.com/unocss/unocss/#presets",children:"available presets"}),` or
Unocss `,g(e.a,{href:"https://github.com/unocss/unocss/#configurations",children:"configurations"}),"."]})]})}function Un(n={}){let{wrapper:e}=n.components||{};return e?g(e,Object.assign({},n,{children:g(Re,n)})):Re(n)}var Wn=Un;var ce={};m(ce,{default:()=>Gn});import{Fragment as Jn,jsx as $,jsxs as Yn}from"https://esm.sh/react@18.2.0/jsx-runtime";function Xe(n){let e=Object.assign({h1:"h1",p:"p",em:"em"},n.components);return Yn(Jn,{children:[$(e.h1,{children:"Vue"}),`
`,$(e.p,{children:$(e.em,{children:"WIP"})})]})}function Bn(n={}){let{wrapper:e}=n.components||{};return e?$(e,Object.assign({},n,{children:$(Xe,n)})):Xe(n)}var Gn=Bn;var te={};m(te,{default:()=>Kn});import{Fragment as Vn,jsx as I,jsxs as zn}from"https://esm.sh/react@18.2.0/jsx-runtime";function Oe(n){let e=Object.assign({h1:"h1",p:"p",em:"em"},n.components);return zn(Vn,{children:[I(e.h1,{children:"React"}),`
`,I(e.p,{children:I(e.em,{children:"WIP"})})]})}function Zn(n={}){let{wrapper:e}=n.components||{};return e?I(e,Object.assign({},n,{children:I(Oe,n)})):Oe(n)}var Kn=Zn;var vs={"/":Qn,"/docs":es,"/docs/browser-support":P,"/docs/deployment":H,"/docs/index":E,"/docs/get-started":U,"/docs/framework/vue":W,"/docs/framework/react-mdx":J,"/docs/framework/solid":Y,"/docs/framework/react":B,"/docs/framework/yew":G,"/docs/api-reference/middleware":V,"/docs/api-reference/server-config":z,"/docs/basic-concepts/import-maps":Z,"/docs/basic-concepts/static-file-serving":K,"/docs/basic-concepts/routing":Q,"/docs/basic-concepts/import-from-npm":ee,"/docs/basic-concepts/server":ne,"/docs/basic-concepts/css-support":se,"/docs/basic-concepts/hmr":ae,"/docs/basic-concepts/ssr":le,"/docs/basic-concepts/unocss":re,"/docs/api-reference/framework/vue":ce,"/docs/api-reference/framework/react":te,depGraph:{"modules":[{"specifier":"./routes/docs/browser-support.md"},{"specifier":"./routes/docs/deployment.md"},{"specifier":"./routes/docs/index.md"},{"specifier":"./routes/docs/get-started.md"},{"specifier":"./routes/docs/framework/vue.md"},{"specifier":"./routes/docs/framework/react-mdx.md"},{"specifier":"./routes/docs/framework/solid.md"},{"specifier":"./routes/docs/framework/react.md"},{"specifier":"./routes/docs/framework/yew.md"},{"specifier":"./routes/docs/api-reference/middleware.md"},{"specifier":"./routes/docs/api-reference/server-config.md"},{"specifier":"./routes/docs/basic-concepts/import-maps.md"},{"specifier":"./routes/docs/basic-concepts/static-file-serving.md"},{"specifier":"./routes/docs/basic-concepts/routing.md"},{"specifier":"./routes/docs/basic-concepts/import-from-npm.md"},{"specifier":"./routes/docs/basic-concepts/server.mdx"},{"specifier":"./routes/docs/basic-concepts/css-support.md"},{"specifier":"./routes/docs/basic-concepts/hmr.md"},{"specifier":"./routes/docs/basic-concepts/ssr.md"},{"specifier":"./routes/docs/basic-concepts/unocss.md"},{"specifier":"./routes/docs/api-reference/framework/vue.md"},{"specifier":"./routes/docs/api-reference/framework/react.md"}]}};export{vs as default};
