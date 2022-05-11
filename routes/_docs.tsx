import { Fragment, useEffect, useMemo, useState } from "react";
import { Head, useRouter } from "aleph/react";
import util from "aleph/lib/util.ts";
import Logo from "~/components/Logo.tsx";

type Menu = {
  name: string;
  items: MenuItem[];
};

type MenuItem = {
  title: string;
  path: string;
  submenu?: MenuItem[];
  modifier?: React.ReactNode;
};

const description = "The Documentation for Aleph.js";
const ogImage = "https://alephjs.org/twitter_card.jpg";
const navMenu: Menu[] = [
  {
    name: "Documentation",
    items: [
      {
        title: "About Aleph.js",
        modifier: (
          <span className="aleph-logo">
            <Logo />
          </span>
        ),
        path: "/docs",
      },
      { title: "Get Started", path: "/docs/get-started" },
      {
        title: "Basic Features",
        path: "/docs/basic-features",
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
        title: "Advanced Features",
        path: "/docs/advanced-features",
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
      {
        title: "Plugins",
        path: "/docs/plugins",
        submenu: [
          { title: "Official Plugins", path: "/official-plugins" },
          { title: "Community Plugins", path: "/community-plugins" },
        ],
      },
      { title: "Browser Support", path: "/docs/browser-support" },
      { title: "Deployment", path: "/docs/deployment" },
    ],
  },
  {
    name: "API Reference",
    items: [
      { title: "CLI", path: "/docs/api-reference/cli" },
      { title: "Config", path: "/docs/api-reference/config" },
      { title: "Framework API", path: "/docs/api-reference/framework-api" },
      { title: "Plugin API", path: "/docs/api-reference/plugin-api" },
    ],
  },
  {
    name: "Design",
    items: [
      { title: "Artworks", path: "/docs/design/artworks" },
      { title: "Theme", path: "/docs/design/theme" },
    ],
  },
];

export default function Docs({ children }: { children: React.ReactNode }) {
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
    <div
      className={"p-10"}
    >
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* <meta name="keywords" content={keywords.join(",")} /> */}
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta name="og:image" content={ogImage} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@alephjs" />
      </Head>
      <aside>
        <div className="search">
          <input
            placeholder="Search..."
            onChange={util.debounce(
              // deno-lint-ignore no-explicit-any
              (e: any) => setSearchWords(e.target.value.trim().toLowerCase()),
              150,
            )}
          />
        </div>
        <div
          className={["menu-button", menuIsOpen && "open"].filter(Boolean).join(
            " ",
          )}
          onClick={(e) => setMenuIsOpen((ok) => !ok)}
        >
          <svg
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.4 8.56L4.67 5M1.4 1.23L4.66 4.7"
              stroke="#999"
              strokeLinecap="round"
            >
            </path>
          </svg>
          Menu
        </div>
        <nav className={menuIsOpen ? "open" : undefined}>
          {filteredNavMenu.length === 0 && <h2>look, blackhole!!!</h2>}
          {filteredNavMenu.map((g) => (
            <Fragment key={g.name}>
              <h2>{g.name}</h2>
              <ul>
                {g.items.map((item) => {
                  if (item.submenu) {
                    return (
                      <Fragment key={item.title + item.path}>
                        <li>
                          <label
                            className={searchWords || extended[item.path]
                              ? "open"
                              : "close"}
                            onClick={() =>
                              setExtended((extended) => {
                                extended[item.path] = !extended[item.path];
                                return { ...extended };
                              })}
                          >
                            <svg
                              width="6"
                              height="10"
                              viewBox="0 0 6 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.4 8.56L4.67 5M1.4 1.23L4.66 4.7"
                                stroke="#999"
                                strokeLinecap="round"
                              >
                              </path>
                            </svg>
                            {item.title}
                          </label>
                        </li>
                        {(searchWords || extended[item.path]) &&
                          item.submenu.map(({ title, path }) => (
                            <li className="indent" key={title + path}>
                              <a
                                rel="nav"
                                href={item.path + (path === "/" ? "" : path)}
                                onClick={() =>
                                  setMenuIsOpen(false)}
                              >
                                {title}
                              </a>
                            </li>
                          ))}
                      </Fragment>
                    );
                  } else {
                    return (
                      <li key={item.title + item.path}>
                        <a
                          rel="nav"
                          className={url.pathname === item.path
                            ? "active"
                            : undefined}
                          href={item.path}
                          onClick={() => setMenuIsOpen(false)}
                        >
                          {item.title}
                          {item.modifier}
                        </a>
                      </li>
                    );
                  }
                })}
              </ul>
            </Fragment>
          ))}
        </nav>
      </aside>
      {children}
    </div>
  );
}
