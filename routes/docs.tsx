import { Fragment, useEffect, useMemo, useState } from "react";
import { Head, NavLink, useRouter } from "aleph/react";
import Header from "components/Header.tsx";
import useMediaQuery from "components/useMediaQuery.tsx";

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
        path: "/docs",
      },
      { title: "Get Started", path: "/docs/get-started" },
      {
        title: "Basic Concepts",
        path: "/docs/basic-concepts",
        submenu: [
          { title: "Server", path: "/server" },
          { title: "Routing", path: "/routing" },
          { title: "Server-side Rendering", path: "/ssr" },
          { title: "CSS Support", path: "/css-support" },
          { title: "Unocss", path: "/unocss" },
          { title: "Static File Serving", path: "/static-file-serving" },
          { title: "Hot Module Replacement", path: "/hmr" },
          { title: "Import From NPM", path: "/import-from-npm" },
          { title: "Import Maps", path: "/import-maps" },
        ],
      },
      {
        title: "Framework",
        path: "/docs/framework",
        submenu: [
          { title: "React", path: "/react" },
          { title: "React with MDX", path: "/react-mdx" },
          { title: "Vue", path: "/vue" },
          { title: "SolidJS", path: "/solid" },
          { title: "Yew", path: "/yew" },
          { title: "Leptos", path: "/leptos" },
        ],
      },
      { title: "Browser Support", path: "/docs/browser-support" },
      { title: "Deployment", path: "/docs/deployment" },
    ],
  },
  {
    name: "API Reference",
    items: [
      { title: "Server Config", path: "/docs/api-reference/server-config" },
      {
        title: "Framework API",
        path: "/docs/api-reference/framework",
        submenu: [
          { title: "React", path: "/react" },
          { title: "Vue", path: "/vue" },
        ],
      },
      { title: "Middleware API", path: "/docs/api-reference/middleware" },
    ],
  },
];

export default function Docs({ children }: React.PropsWithChildren) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const { url } = useRouter();
  const [extended, setExtended] = useState(
    navMenu
      .map((m) => m.items)
      .flat()
      .filter((item) => item.submenu)
      .reduce((m, item) => {
        m[item.path] = url.pathname.startsWith(item.path);
        return m;
      }, {} as Record<string, boolean>),
  );
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [searchWords, setSearchWords] = useState("");
  const navLinks = useMemo<
    [[string, string] | null, [string, string] | null]
  >(() => {
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
  }, [url.pathname]);
  const editUrl = useMemo(() => {
    const md = url.pathname === "/docs"
      ? url.pathname + "/index.md"
      : url.pathname + ".md";
    return `https://github.com/alephjs/alephjs.org/edit/master/routes${md}`;
  }, [url.pathname]);
  const filteredNavMenu = useMemo(() => {
    if (searchWords === "") {
      return navMenu;
    }
    return navMenu
      .map((g) => {
        const includes = (item: MenuItem) =>
          item.title.toLowerCase().includes(searchWords);
        return {
          ...g,
          items: g.items
            .filter((item) => {
              return includes(item) || item.submenu?.some(includes);
            })
            .map((item) => ({
              ...item,
              submenu: item.submenu?.filter(
                (subItem) => includes(item) || includes(subItem),
              ),
            })),
        };
      })
      .filter((g) => g.items.length > 0);
  }, [searchWords]);

  useEffect(() => {
    setExtended(
      navMenu
        .map((m) => m.items)
        .flat()
        .filter((item) => item.submenu)
        .reduce((m, item) => {
          m[item.path] = url.pathname.startsWith(item.path);
          return m;
        }, {} as Record<string, boolean>),
    );
    document.querySelectorAll(".makedown-body video").forEach((block) => {
      const v = block as HTMLVideoElement;
      v.className = "is-paused";
      v.addEventListener("click", () => {
        if (v.paused) {
          v.play();
        } else {
          v.requestFullscreen();
        }
      });
      v.addEventListener("playing", () => (v.className = "is-playing"));
      v.addEventListener("pause", () => (v.className = "is-paused"));
    });
  }, [url.pathname]);

  // Hamburger menu for mobile devices
  useEffect(() => {
    const hamburgerMenuButton = document.getElementById(
      "hamburger-menu-button",
    );
    const hamburgerMenuClose = document.getElementById("hamburger-menu-close");
    const navMenuButton = document.getElementById("nav-menu");

    // Toggle the accordian
    function toggleAccordion(event: MouseEvent) {
      event.preventDefault();
      event.stopPropagation();
      if (navMenuButton) {
        navMenuButton.classList.toggle("hidden");
      }

      if (hamburgerMenuButton && hamburgerMenuClose) {
        hamburgerMenuButton.classList.toggle("hidden");
        hamburgerMenuClose.classList.toggle("hidden");
      }
    }

    // Event Listener for Navigation Mobile Hamburger Icon
    if (hamburgerMenuButton) {
      hamburgerMenuButton.addEventListener("click", toggleAccordion);
    }

    // Event Listener for Navigation Mobile Close Icon
    if (hamburgerMenuClose) {
      hamburgerMenuClose.addEventListener("click", toggleAccordion);
    }

    // Event listeners should be removed when unmounted
    return () => {
      hamburgerMenuButton?.removeEventListener("click", toggleAccordion);
      hamburgerMenuClose?.removeEventListener("click", toggleAccordion);
    };
  }, []);

  useEffect(() => {
    const navMenuButton = document.getElementById("nav-menu");
    const hamburgerMenuClose = document.getElementById("hamburger-menu-close");
    const hamburgerMenuButton = document.getElementById(
      "hamburger-menu-button",
    );
    const isContainHidden = navMenuButton?.classList.contains("hidden");
    if (isDesktop && navMenuButton) {
      // When the windows is resized for desktop

      // Remove the hidden from navigation for desktop
      if (isContainHidden) {
        navMenuButton.classList.remove("hidden");
      }

      // Remove the close button from navigation when resized to desktop
      if (hamburgerMenuClose) {
        hamburgerMenuClose.classList.add("hidden");
      }
    } else {
      // When the windows is resized to mobile

      // Navigation Menu should not be visible at first render
      if (!isContainHidden && navMenuButton) {
        navMenuButton.classList.add("hidden");
      }

      // When resize to mobile then hamburger button should show if it is hidden
      if (hamburgerMenuButton) {
        if (hamburgerMenuButton.classList.contains("hidden")) {
          hamburgerMenuButton.classList.remove("hidden");
        }
      }
    }
  }, [isDesktop]);

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
      <div className="m-auto w-14/16 py-4 max-w-[1080px] h-full flex items-start justify-between gap-18">
        <aside
          className="sticky md:top-20 md:w-60 shrink-0 w-full"
          id="nav-menu"
        >
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
                            className={"py-1.5 flex items-center gap-2 cursor-pointer text-gray-700 hover:text-gray-900 " +
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
                                className="py-1.5 pl-4 ml-0.5 border-l border-gray-200/80 flex items-center gap-2"
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
                                  exact
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
                        className="py-1.5 flex items-center gap-2"
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
                          exact
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
        <div className="markdown-body grow-1">{children}</div>
      </div>
    </>
  );
}
