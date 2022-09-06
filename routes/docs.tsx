import { Fragment, useEffect, useMemo, useState } from "react";
import { Head, NavLink, useRouter } from "aleph/react";
import Logo from "components/Logo.tsx";
import Header from "components/Header.tsx";

type Menu = {
  name: string;
  items: MenuItem[];
};

type MenuItem = {
  title: string;
  path: string;
  category?: string;
  submenu?: MenuItem[];
};

const description = "The Documentation for Aleph.js";
const ogImage = "https://alephjs.org/twitter_card.jpg";
const navMenu: Menu[] = [
  {
    name: "Documentation",
    items: [
      {
        title: "About",
        path: "/docs/index",
      },
      { title: "Get Started", path: "/docs/get-started" },
      {
        title: "Basic Concepts",
        path: "/docs/basic-concepts",
        submenu: [
          { title: "Pages", path: "/pages" },
          { title: "APIs", path: "/apis" },
          { title: "Routing", path: "/routing" },
          { title: "Built-in CSS Support", path: "/built-in-css-support" },
          { title: "SSR & SSG", path: "/ssr-and-ssg" },
          { title: "Static File Serving", path: "/static-file-serving" },
          { title: "HMR with Fast Refresh", path: "/hmr-with-fast-refresh" },
          { title: "Import From NPM", path: "/import-from-npm" },
          { title: "Import Maps", path: "/import-maps" },
        ],
      },
      {
        title: "Framework",
        path: "/docs/framework",
        submenu: [
          { title: "`useDeno` Hook", path: "/use-deno-hook" },
          { title: "Dynamic Importing", path: "/dynamic-importing" },
          { title: "Custom `App`", path: "/custom-app" },
          { title: "Custom Error Page", path: "/custom-error-page" },
          { title: "Custom Server", path: "/custom-server" },
          { title: "JSX Magic", path: "/jsx-magic" },
          { title: "Using Plugins", path: "/using-plugins" },
        ],
      },
      { title: "Browser Support", path: "/docs/browser-support" },
      { title: "Deployment", path: "/docs/deployment" },
    ],
  },
  {
    name: "API Reference",
    items: [
      { title: "Server Config", path: "/docs/api-reference/config" },
      { title: "Framework API", path: "/docs/api-reference/framework-api" },
      { title: "Plugin API", path: "/docs/api-reference/plugin-api" },
    ],
  },
];

export default function Docs({ children }: React.PropsWithChildren) {
  const { url } = useRouter();
  const [extended, setExtended] = useState(
    navMenu.map((m) => m.items).flat().filter((item) => item.submenu).reduce(
      (m, item) => {
        m[item.path] = url.pathname.startsWith(item.path);
        return m;
      },
      {} as Record<string, boolean>,
    ),
  );
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [searchWords, setSearchWords] = useState("");
  const navLinks = useMemo<[[string, string] | null, [string, string] | null]>(
    () => {
      const all: [string, string][] = [];
      navMenu.forEach((g) =>
        g.items.forEach((item) => {
          if (item.submenu) {
            item.submenu.forEach(({ title, path }) => {
              all.push([title, item.path + (path === "/" ? "" : path)]);
            });
          } else {
            all.push([item.title, item.path]);
          }
        })
      );
      const index = all.findIndex(([_, path]) => path === url.pathname);
      return [all[index - 1] || null, all[index + 1] || null];
    },
    [url.pathname],
  );
  const editUrl = useMemo(() => {
    const md = url.pathname === "/docs"
      ? url.pathname + "/index.md"
      : url.pathname + ".md";
    return `https://github.com/alephjs/alephjs.org/edit/master/pages${md}`;
  }, [url.pathname]);
  const title = "Documentation - Aleph.js";
  const filteredNavMenu = useMemo(() => {
    if (searchWords === "") {
      return navMenu;
    }
    return navMenu.map((g) => {
      const includes = (item: MenuItem) =>
        item.title.toLowerCase().includes(searchWords);
      return {
        ...g,
        items: g.items.filter((item) => {
          return includes(item) || item.submenu?.some(includes);
        }).map((item) => ({
          ...item,
          submenu: item.submenu?.filter((subItem) =>
            includes(item) || includes(subItem)
          ),
        })),
      };
    }).filter((g) => g.items.length > 0);
  }, [searchWords]);

  useEffect(() => {
    setExtended(
      navMenu.map((m) => m.items).flat().filter((item) => item.submenu).reduce(
        (m, item) => {
          m[item.path] = url.pathname.startsWith(item.path);
          return m;
        },
        {} as Record<string, boolean>,
      ),
    );
    document.querySelectorAll(".docs .content video").forEach((block) => {
      const v = block as HTMLVideoElement;
      v.className = "is-paused";
      v.addEventListener("click", () => {
        if (v.paused) {
          v.play();
        } else {
          v.requestFullscreen();
        }
      });
      v.addEventListener("playing", () => v.className = "is-playing");
      v.addEventListener("pause", () => v.className = "is-paused");
    });
  }, [url.pathname]);

  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <meta name="og:image" content={ogImage} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@alephjs" />
      </Head>
      <Header />
      <div className="m-auto w-14/16 pt-10 max-w-250 h-full flex items-start justify-between gap-12">
        <aside className="sticky top-20 w-60 shrink-0">
          <div className="search">
            <input
              className="border border-gray-200 rounded-md px-3 py-1.5 w-full"
              placeholder="Search..."
              onChange={(e) =>
                setSearchWords(e.target.value.trim().toLowerCase())}
            />
          </div>
          <nav className={menuIsOpen ? "open" : undefined}>
            {filteredNavMenu.length === 0 && (
              <h2 className="text-gray-400 text-sm uppercase mt-6 mb-1">
                Noting Here!
              </h2>
            )}
            {filteredNavMenu.map((g) => (
              <Fragment key={g.name}>
                <h2 className="text-gray-400 text-sm uppercase mt-6 mb-1">
                  {g.name}
                </h2>
                <ul>
                  {g.items.map((item) => {
                    if (item.submenu) {
                      const isExtended = searchWords || extended[item.path];
                      return (
                        <Fragment key={item.title + item.path}>
                          <li
                            className={"py-1 flex items-center gap-2 cursor-pointer text-gray-700 hover:text-gray-900 " +
                              (isExtended ? "!text-gray-900" : "text-gray-400")}
                            onClick={() => {
                              extended[item.path] = !extended[item.path];
                              setExtended({ ...extended });
                            }}
                          >
                            <svg
                              className={"text-gray-400 " +
                                (isExtended ? "rotate-90" : "")}
                              width="6"
                              height="10"
                              viewBox="0 0 6 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.4 8.56L4.67 5M1.4 1.23L4.66 4.7"
                                stroke="currentColor"
                                strokeLinecap="round"
                              >
                              </path>
                            </svg>
                            {item.title}
                          </li>
                          {isExtended &&
                            item.submenu.map(({ title, path }) => (
                              <li
                                className="py-1 pl-4 ml-0.5 border-l border-gray-200/80 flex items-center gap-2"
                                key={title + path}
                              >
                                <div className="flex items-center justify-center w-[6px] h-[10px]">
                                  <span className="inline-block w-1 h-1 bg-gray-400 rounded-full" />
                                </div>
                                <NavLink
                                  className="text-gray-700 hover:text-gray-900"
                                  activeClassName="!text-gray-900 font-semibold"
                                  to={item.path + (path === "/" ? "" : path)}
                                  onClick={() => setMenuIsOpen(false)}
                                >
                                  {title}
                                </NavLink>
                              </li>
                            ))}
                        </Fragment>
                      );
                    }
                    return (
                      <li
                        className="py-1 flex items-center gap-2"
                        key={item.title + item.path}
                      >
                        <div className="flex items-center justify-center w-[6px] h-[10px]">
                          <span className="inline-block w-1 h-1 bg-gray-400 rounded-full" />
                        </div>
                        <NavLink
                          to={item.path}
                          className="text-gray-700 hover:text-gray-900"
                          activeClassName="!text-gray-900 font-semibold"
                          onClick={() => setMenuIsOpen(false)}
                        >
                          {item.title}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </Fragment>
            ))}
          </nav>
        </aside>
        {children}
      </div>
    </>
  );
}
