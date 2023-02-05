(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ shared_footer)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./data/shared/footer_data.tsx
const footerMenuList = [{
  id: 1,
  title: "Marketplace",
  diffClass: "md:col-start-7",
  list: [{
    id: 1,
    href: "#",
    text: "All NFTs"
  }, {
    id: 2,
    href: "#",
    text: "art"
  }, {
    id: 3,
    href: "#",
    text: "music"
  }, {
    id: 4,
    href: "#",
    text: "domain names"
  }, {
    id: 5,
    href: "#",
    text: "collections"
  }, {
    id: 6,
    href: "#",
    text: "virtual world"
  }]
}, {
  id: 2,
  title: "Company",
  diffClass: "",
  list: [{
    id: 1,
    href: "#",
    text: "Explore"
  }, {
    id: 2,
    href: "#",
    text: "About"
  }, {
    id: 3,
    href: "#",
    text: "Contact Us"
  }, {
    id: 4,
    href: "#",
    text: "Our Blog"
  }, {
    id: 5,
    href: "#",
    text: "FAQ"
  }]
}, {
  id: 3,
  title: "My Account",
  diffClass: "",
  list: [{
    id: 1,
    href: "#",
    text: "Authors"
  }, {
    id: 2,
    href: "#",
    text: "Collection"
  }, {
    id: 3,
    href: "#",
    text: "Author Profile"
  }, {
    id: 4,
    href: "#",
    text: "Create Item"
  }]
}];
const socialIcons = [{
  id: 1,
  href: "https://www.facebook.com",
  text: "facebook"
}, {
  id: 2,
  href: "https://www.twitter.com",
  text: "twitter"
}, {
  id: 3,
  href: "https://www.discord.com",
  text: "discord"
}, {
  id: 4,
  href: "https://www.instagram.com",
  text: "instagram"
}, {
  id: 5,
  href: "https://www.tiktok.com",
  text: "tiktok"
}];

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/shared/footer.tsx






const footer = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("footer", {
      className: "dark:bg-jacarta-900 page-footer bg-white",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "grid grid-cols-6 gap-x-7 gap-y-14 pt-24 pb-12 md:grid-cols-12",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "col-span-3 md:col-span-4",
            children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              legacyBehavior: true,
              href: "#",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "mb-6 inline-block",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/images/logo.png",
                  className: "max-h-7 dark:hidden",
                  alt: "Xhibiter | NFT Marketplace"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              legacyBehavior: true,
              href: "#",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: " mb-6 inline-block",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/images/logo_white.png",
                  className: "hidden max-h-7 dark:block mb-6",
                  alt: "Xhibiter | NFT Marketplace"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "dark:text-jacarta-300 mb-12",
              children: "Create, sell and collect truly rare digital artworks. Powered by blockchain technology."
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "flex space-x-5",
              children: socialIcons.map(item => {
                const {
                  id,
                  href,
                  text
                } = item;
                return /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  legacyBehavior: true,
                  href: href,
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "group cursor-pointer",
                    children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
                      className: "icon group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white",
                      children: /*#__PURE__*/jsx_runtime_.jsx("use", {
                        xlinkHref: `/icons.svg#icon-${text}`
                      })
                    })
                  })
                }, id);
              })
            })]
          }), footerMenuList.map(single => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: `col-span-full sm:col-span-3 md:col-span-2 ${single.diffClass}`,
            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "font-display text-jacarta-700 mb-6 text-sm dark:text-white",
              children: single.title
            }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
              className: "dark:text-jacarta-300 flex flex-col space-y-1",
              children: single.list.map(item => {
                const {
                  id,
                  href,
                  text
                } = item;
                return /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                    legacyBehavior: true,
                    href: href,
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      className: "hover:text-accent dark:hover:text-white",
                      children: text
                    })
                  })
                }, id);
              })
            })]
          }, single.id))]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-col items-center justify-between space-y-2 py-8 sm:flex-row sm:space-y-0",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: "dark:text-jacarta-400 text-sm",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              children: ["\xA9 ", new Date().getFullYear(), " Xhibiter \u2014 Made by"]
            }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              legacyBehavior: true,
              href: "https://themeforest.net/user/ib-themes",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                className: "hover:text-accent dark:hover:text-white",
                children: [" ", "ib-themes"]
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            className: "dark:text-jacarta-400 flex flex-wrap space-x-4 text-sm",
            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                legacyBehavior: true,
                href: "/tarms",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "hover:text-accent dark:hover:text-white",
                  children: "Terms and conditions"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                legacyBehavior: true,
                href: "/tarms",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "hover:text-accent dark:hover:text-white",
                  children: "Privacy policy"
                })
              })
            })]
          })]
        })]
      })
    })
  });
};

/* harmony default export */ const shared_footer = (footer);

/***/ }),

/***/ 2317:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Header01)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mode_DarkMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3026);
/* harmony import */ var _public_images_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8350);
/* harmony import */ var _public_images_logo_white_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7337);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6555);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7501);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wallet_btn_WalletButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8662);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_5__]);
uuid__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













function Header01() {
  const {
    0: toggle,
    1: setToggle
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
  const {
    0: isCollapse,
    1: setCollapse
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null); // window resize

  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) {
        setToggle(false);
      }
    });
  });
  const route = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  /* -------------------------------------------------------------------------- */

  /*                            daynamic navigations                            */

  /* -------------------------------------------------------------------------- */

  const home = {
    id: 1,
    name: "Home",
    pages: [{
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Home 1",
      path: "/"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Home 2",
      path: "/home/home_2"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Home 3",
      path: "/home/home_3"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Home 4",
      path: "/home/home_4"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Home 5",
      path: "/home/home_5"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Home 6",
      path: "/home/home_6"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Home 7",
      condition: true,
      path: "/home/home_7"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Home 8",
      condition: true,
      path: "/home/home_8"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Home 9",
      condition: true,
      path: "/home/home_9"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Home 10",
      condition: true,
      path: "/home/home_10"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Home 11",
      condition: true,
      path: "/home/home_11"
    }]
  };
  const page = {
    id: 2,
    name: "Pages",
    pages: [{
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Case Studies",
      condition: true,
      path: "/case-studies"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Single Case Study",
      condition: true,
      path: "/case-studies/case_study_1"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Careers",
      condition: true,
      path: "/careers"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Item Details",
      path: "/item/item_20"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Explore Collections",
      path: "/collection/explore_collection"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Collection",
      path: "/collection/avatar_1"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Activity",
      path: "/activity"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Rankings",
      path: "/rankings"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "User",
      path: "/user/avatar_6"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Edit Profile",
      path: "/profile/user_avatar"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "About",
      path: "/about"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Contact",
      path: "/contact"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Wallet",
      path: "/wallet"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Login",
      path: "/login"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Page 404",
      path: "/404"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Terms of Service",
      path: "/tarms"
    }]
  };
  const explore = {
    id: 3,
    name: "Explore",
    pages: [{
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "All NFTs",
      path: "/collection/explore_collection",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        className: "h-4 w-4 fill-jacarta-700",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
          fill: "none",
          d: "M0 0h24v24H0z"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
          d: "M22 12.999V20a1 1 0 0 1-1 1h-8v-8.001h9zm-11 0V21H3a1 1 0 0 1-1-1v-7.001h9zM11 3v7.999H2V4a1 1 0 0 1 1-1h8zm10 0a1 1 0 0 1 1 1v6.999h-9V3h8z"
        })]
      })
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Photography",
      path: "/collection/explore_collection",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        className: "h-4 w-4 fill-[#428AF8]",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
          fill: "none",
          d: "M0 0h24v24H0z"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
          d: "M2 6c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 0 1 2 20V6zm2 1v12h16V7H4zm10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 2a5 5 0 1 1 0-10 5 5 0 0 1 0 10zM4 2h6v2H4V2z"
        })]
      })
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Art",
      path: "/art",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        className: "h-4 w-4 fill-[#10B981]",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
          fill: "none",
          d: "M0 0h24v24H0z"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
          d: "M12 2c5.522 0 10 3.978 10 8.889a5.558 5.558 0 0 1-5.556 5.555h-1.966c-.922 0-1.667.745-1.667 1.667 0 .422.167.811.422 1.1.267.3.434.689.434 1.122C13.667 21.256 12.9 22 12 22 6.478 22 2 17.522 2 12S6.478 2 12 2zm-1.189 16.111a3.664 3.664 0 0 1 3.667-3.667h1.966A3.558 3.558 0 0 0 20 10.89C20 7.139 16.468 4 12 4a8 8 0 0 0-.676 15.972 3.648 3.648 0 0 1-.513-1.86zM7.5 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM12 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
        })]
      })
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Sports",
      path: "/sports",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        className: "h-4 w-4 fill-[#737EF2]",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
          fill: "none",
          d: "M0 0h24v24H0z"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
          d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm.366 11.366l-3.469 6.01a8.053 8.053 0 0 0 4.459.51 9.937 9.937 0 0 1 .784-5.494l-1.774-1.026zm3.518 2.031a7.956 7.956 0 0 0-.587 3.894 8.022 8.022 0 0 0 3.077-2.456l-2.49-1.438zm-7.025-4.055a9.95 9.95 0 0 1-4.365 3.428 8.01 8.01 0 0 0 2.671 3.604l3.469-6.008-1.775-1.024zm11.103-.13l-.258.12a7.947 7.947 0 0 0-2.82 2.333l2.492 1.439a7.975 7.975 0 0 0 .586-3.893zM4 12c0 .266.013.53.038.789a7.95 7.95 0 0 0 3.078-2.454L4.624 8.897A7.975 7.975 0 0 0 4 12zm12.835-6.374l-3.469 6.008 1.775 1.025a9.95 9.95 0 0 1 4.366-3.43 8.015 8.015 0 0 0-2.419-3.402l-.253-.201zM12 4c-.463 0-.916.04-1.357.115a9.928 9.928 0 0 1-.784 5.494l1.775 1.025 3.469-6.01A7.975 7.975 0 0 0 12 4zm-3.297.71l-.191.088a8.033 8.033 0 0 0-2.886 2.367l2.49 1.438a7.956 7.956 0 0 0 .587-3.893z"
        })]
      })
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Collectibles",
      path: "/collectibles",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        className: "h-4 w-4 fill-[#FEB240]",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
          fill: "none",
          d: "M0 0h24v24H0z"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
          d: "M17.5 2a4.5 4.5 0 0 1 2.951 7.897c.355.967.549 2.013.549 3.103A9 9 0 1 1 3.55 9.897a4.5 4.5 0 1 1 6.791-5.744 9.05 9.05 0 0 1 3.32 0A4.494 4.494 0 0 1 17.5 2zm0 2c-.823 0-1.575.4-2.038 1.052l-.095.144-.718 1.176-1.355-.253a7.05 7.05 0 0 0-2.267-.052l-.316.052-1.356.255-.72-1.176A2.5 2.5 0 1 0 4.73 8.265l.131.123 1.041.904-.475 1.295A7 7 0 1 0 19 13c0-.716-.107-1.416-.314-2.083l-.112-.33-.475-1.295 1.04-.904A2.5 2.5 0 0 0 17.5 4zM10 13a2 2 0 1 0 4 0h2a4 4 0 1 1-8 0h2z"
        })]
      })
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Trading Cards",
      path: "/tranding-cards",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        className: "h-4 w-4 fill-[#8DD059]",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
          fill: "none",
          d: "M0 0h24v24H0z"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
          d: "M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM4 5v14h16V5H4zm2 2h6v6H6V7zm2 2v2h2V9H8zm-2 6h12v2H6v-2zm8-8h4v2h-4V7zm0 4h4v2h-4v-2z"
        })]
      })
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Domain Names",
      path: "/domain-names",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        className: "h-4 w-4 fill-[#8358FF]",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
          fill: "none",
          d: "M0 0h24v24H0z"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
          d: "M5 15v4h4v2H3v-6h2zm16 0v6h-6v-2h4v-4h2zm-8.001-9l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3H6.6l4.399-11h2zm-1 2.885L10.752 12h2.492l-1.245-3.115zM9 3v2H5v4H3V3h6zm12 0v6h-2V5h-4V3h6z"
        })]
      })
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Utility",
      path: "/utility",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        className: "h-4 w-4 fill-[#EF3D3D]",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
          fill: "none",
          d: "M0 0h24v24H0z"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
          d: "M22 7h1v10h-1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3zm-2 10h-6a5 5 0 0 1 0-10h6V5H4v14h16v-2zm1-2V9h-7a3 3 0 0 0 0 6h7zm-7-4h3v2h-3v-2z"
        })]
      })
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Virtual Worlds",
      path: "/virtual-worlds",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        className: "h-4 w-4 fill-[#46C7E3]",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
          fill: "none",
          d: "M0 0h24v24H0z"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
          d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z"
        })]
      })
    }]
  };
  const resource = {
    id: 4,
    name: "Resources",
    pages: [{
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Help Center",
      path: "/help_center"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Platform Status",
      path: "/platform_status"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Partners",
      path: "/partners"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Blog",
      path: "/blog"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Single Post",
      path: "/single_post/post_1"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Newsletter",
      path: "/newsletter"
    }]
  };

  const mobileCollapse = id => {
    if (isCollapse === id) {
      return setCollapse(null);
    }

    setCollapse(id);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("header", {
      className: "js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "flex items-center px-6 py-6 xl:px-24 ",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          legacyBehavior: true,
          className: "shrink-0",
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("a", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
              className: "dark:hidden",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
                src: _public_images_logo_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                height: 28,
                width: 130,
                alt: "Isolux | Aparcamientos",
                className: "max-h-7 h-auto "
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
              className: "hidden dark:block",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
                src: _public_images_logo_white_png__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                height: 28,
                width: 130,
                alt: "Isolux | Aparcamientos"
              })
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("form", {
          action: "search",
          className: "relative ml-12 mr-8 hidden basis-3/12 lg:block xl:ml-[8%]",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("input", {
            type: "search",
            className: "text-jacarta-700 placeholder-jacarta-500 focus:ring-accent border-jacarta-100 w-full rounded-2xl border py-[0.6875rem] px-4 pl-10 dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white",
            placeholder: "Search"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
            className: "absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              width: 24,
              height: 24,
              className: "fill-jacarta-500 h-4 w-4 dark:fill-white",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
                fill: "none",
                d: "M0 0h24v24H0z"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
                d: "M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
              })]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "js-mobile-menu dark:bg-jacarta-800 invisible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("nav", {
            className: "navbar w-full",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("ul", {
              className: "flex flex-col lg:flex-row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("li", {
                className: "js-nav-dropdown group relative",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("button", {
                  className: "dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                    className: (0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_10__/* .isParentPageActive */ .V)(home.pages, route.asPath) ? "text-accent  dark:text-accent" : "",
                    children: "Home"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("i", {
                    className: "lg:hidden",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      width: 24,
                      height: 24,
                      className: "h-4 w-4 dark:fill-white",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
                        fill: "none",
                        d: "M0 0h24v24H0z"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
                        d: "M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                      })]
                    })
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("ul", {
                  className: "dropdown-menu dark:bg-jacarta-800 left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative",
                  children: home?.pages?.map(page => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("li", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                      legacyBehavior: true,
                      href: page.path,
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("a", {
                        className: "dark:hover:bg-jacarta-600  hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors justify-between ",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                          className: `font-display ${(0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_10__/* .isChildrenPageActive */ .g)(page.path, route.asPath) ? "text-accent dark:text-accent" : "text-jacarta-700"} text-sm dark:text-white`,
                          children: page.name
                        }), page.condition ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                          className: "rounded bg-green py-1 px-2 text-tiny font-bold uppercase leading-none text-white ml-4",
                          children: "new"
                        }) : undefined]
                      })
                    })
                  }, page.id))
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("li", {
                className: "js-nav-dropdown group relative",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("button", {
                  className: "dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                    className: (0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_10__/* .isParentPageActive */ .V)(page.pages, route.asPath) ? "text-accent dark:text-accent" : "",
                    children: "Pages"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("i", {
                    className: "lg:hidden",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      width: 24,
                      height: 24,
                      className: "h-4 w-4 dark:fill-white",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
                        fill: "none",
                        d: "M0 0h24v24H0z"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
                        d: "M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                      })]
                    })
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("ul", {
                  className: "dropdown-menu left-0 top-[85%] z-10 hidden grid-flow-row grid-cols-[repeat(2,_1fr)] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 dark:bg-jacarta-800 lg:invisible lg:absolute lg:!grid lg:translate-y-4 lg:py-8 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative",
                  children: page?.pages?.map(page => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("li", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                      legacyBehavior: true,
                      href: page.path,
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("a", {
                        className: "dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors justify-between",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                          className: `font-display ${(0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_10__/* .isChildrenPageActive */ .g)(page.path, route.asPath) ? "!text-accent !dark:text-accent" : "text-jacarta-700 dark:text-white"} text-sm `,
                          children: page.name
                        }), page.condition ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                          className: "rounded bg-green py-1 px-2 text-tiny font-bold uppercase leading-none text-white ml-4",
                          children: "new"
                        }) : undefined]
                      })
                    })
                  }, page.id))
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("li", {
                className: "js-nav-dropdown nav-item dropdown group relative",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("button", {
                  className: "dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                    className: (0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_10__/* .isParentPageActive */ .V)(explore.pages, route.asPath) ? "text-accent dark:text-accent" : "",
                    children: "Explore"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("i", {
                    className: "lg:hidden",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      width: 24,
                      height: 24,
                      className: "h-4 w-4 dark:fill-white",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
                        fill: "none",
                        d: "M0 0h24v24H0z"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
                        d: "M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                      })]
                    })
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("ul", {
                  className: "dropdown-menu dark:bg-jacarta-800 -left-6 top-[85%] z-10 hidden grid-flow-col grid-rows-5 gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:!grid lg:translate-y-4 lg:py-8 lg:px-5 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative",
                  "aria-labelledby": "navDropdown-1",
                  children: explore?.pages?.map(page => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("li", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                      legacyBehavior: true,
                      href: "/",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("a", {
                        className: "dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                          className: "bg-light-base mr-3 rounded-xl p-[0.375rem]",
                          children: page?.icon
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                          className: "font-display text-jacarta-700 text-sm dark:text-white",
                          children: page?.name
                        })]
                      })
                    })
                  }, page.id))
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("li", {
                className: "js-nav-dropdown group relative",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("button", {
                  className: "dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                    className: (0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_10__/* .isParentPageActive */ .V)(resource.pages, route.asPath) ? "text-accent dark:text-accent" : "",
                    children: "Resources"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("i", {
                    className: "lg:hidden",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      width: 24,
                      height: 24,
                      className: "h-4 w-4 dark:fill-white",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
                        fill: "none",
                        d: "M0 0h24v24H0z"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
                        d: "M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                      })]
                    })
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("ul", {
                  className: "dropdown-menu dark:bg-jacarta-800 left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative",
                  "aria-labelledby": "navDropdown-4",
                  children: resource?.pages?.map?.(page => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("li", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                      legacyBehavior: true,
                      href: page?.path,
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("a", {
                        className: "dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                          className: `font-display ${(0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_10__/* .isChildrenPageActive */ .g)(page.path, route.asPath) ? "text-accent dark:text-accent" : "text-jacarta-700"} text-sm dark:text-white`,
                          children: page?.name
                        })
                      })
                    })
                  }, page.id))
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("li", {
                className: "group",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  legacyBehavior: true,
                  href: "/create",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("a", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("button", {
                      className: "text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                        className: (0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_10__/* .isChildrenPageActive */ .g)(route.asPath, "/create") ? "text-accent dark:text-accent" : "",
                        children: "Create"
                      })
                    })
                  })
                })
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "ml-8 hidden items-center lg:flex xl:ml-12",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_wallet_btn_WalletButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              className: "js-nav-dropdown group-dropdown relative",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("button", {
                className: "dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  width: 24,
                  height: 24,
                  className: "fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
                    fill: "none",
                    d: "M0 0h24v24H0z"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
                    d: "M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                className: "dropdown-menu dark:bg-jacarta-800 group-dropdown-hover:opacity-100 group-dropdown-hover:visible !-right-4 !top-[85%] !left-auto z-10 min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:shadow-2xl hidden lg:invisible lg:opacity-0",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("button", {
                    className: "js-copy-clipboard font-display text-jacarta-700 my-4 flex select-none items-center whitespace-nowrap px-5 leading-none dark:text-white",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                      children: "0x7a86c0b06417100..."
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      width: 24,
                      height: 24,
                      className: "dark:fill-jacarta-300 fill-jacarta-500 ml-auto mb-px h-4 w-4",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
                        fill: "none",
                        d: "M0 0h24v24H0z"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
                        d: "M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3zM4.003 9L4 20h11V9H4.003z"
                      })]
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                  className: "dark:border-jacarta-600 border-jacarta-100 mx-5 mb-6 rounded-lg border p-4",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                    className: "dark:text-jacarta-200 text-sm font-medium tracking-tight",
                    children: "Balance"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
                    className: "flex items-center",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("svg", {
                      className: "icon icon-ETH -ml-1 mr-1 h-[1.125rem] w-[1.125rem]",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("use", {
                        xlinkHref: "/icons.svg#icon-ETH"
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                      className: "text-green text-lg font-bold",
                      children: "10 ETH"
                    })]
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  legacyBehavior: true,
                  href: "/user/avatar_6",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("a", {
                    className: "dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      width: 24,
                      height: 24,
                      className: "fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
                        fill: "none",
                        d: "M0 0h24v24H0z"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
                        d: "M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"
                      })]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                      className: "font-display text-jacarta-700 mt-1 text-sm dark:text-white",
                      children: "My Profile"
                    })]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  legacyBehavior: true,
                  href: "/profile/user_avatar",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("a", {
                    className: "dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      width: 24,
                      height: 24,
                      className: "fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
                        fill: "none",
                        d: "M0 0h24v24H0z"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
                        d: "M9.954 2.21a9.99 9.99 0 0 1 4.091-.002A3.993 3.993 0 0 0 16 5.07a3.993 3.993 0 0 0 3.457.261A9.99 9.99 0 0 1 21.5 8.876 3.993 3.993 0 0 0 20 12c0 1.264.586 2.391 1.502 3.124a10.043 10.043 0 0 1-2.046 3.543 3.993 3.993 0 0 0-3.456.261 3.993 3.993 0 0 0-1.954 2.86 9.99 9.99 0 0 1-4.091.004A3.993 3.993 0 0 0 8 18.927a3.993 3.993 0 0 0-3.457-.26A9.99 9.99 0 0 1 2.5 15.121 3.993 3.993 0 0 0 4 11.999a3.993 3.993 0 0 0-1.502-3.124 10.043 10.043 0 0 1 2.046-3.543A3.993 3.993 0 0 0 8 5.071a3.993 3.993 0 0 0 1.954-2.86zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                      })]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                      className: "font-display text-jacarta-700 mt-1 text-sm dark:text-white",
                      children: "Edit Profile"
                    })]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  legacyBehavior: true,
                  href: "/login",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("a", {
                    className: "dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      width: 24,
                      height: 24,
                      className: "fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
                        fill: "none",
                        d: "M0 0h24v24H0z"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
                        d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 11V8l-5 4 5 4v-3h8v-2H7z"
                      })]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                      className: "font-display text-jacarta-700 mt-1 text-sm dark:text-white",
                      children: "Sign out"
                    })]
                  })
                })]
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_mode_DarkMode__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "ml-auto flex lg:hidden",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            legacyBehavior: true,
            href: "/profile/user_avatar",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("a", {
              className: "border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]",
              "aria-label": "profile",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                width: 24,
                height: 24,
                className: "fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
                  fill: "none",
                  d: "M0 0h24v24H0z"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
                  d: "M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"
                })]
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_mode_DarkMode__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("button", {
            className: "js-mobile-toggle border-jacarta-100 hover:bg-accent dark:hover:bg-accent focus:bg-accent group ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]",
            "aria-label": "open mobile menu",
            onClick: () => setToggle(true),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              width: 24,
              height: 24,
              className: "fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
                fill: "none",
                d: "M0 0h24v24H0z"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
                d: "M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z"
              })]
            })
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: `lg:hidden js-mobile-menu dark:bg-jacarta-800 invisible fixed inset-0 z-20 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent ${toggle ? "nav-menu--is-open" : "hidden"}`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "t-0 dark:bg-jacarta-800 fixed left-0 z-10 flex w-full items-center justify-between bg-white p-6 lg:hidden",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
          className: "dark:hidden",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
            src: _public_images_logo_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
            height: 28,
            width: 130,
            alt: "Xhibiter | NFT Marketplace",
            className: "max-h-7 h-auto "
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
          className: "hidden dark:block",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
            src: _public_images_logo_white_png__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
            height: 28,
            width: 130,
            alt: "Xhibiter | NFT Marketplace"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("button", {
          className: "js-mobile-close border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]",
          onClick: () => setToggle(false),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: 24,
            height: 24,
            className: "fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
              fill: "none",
              d: "M0 0h24v24H0z"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
              d: "M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
            })]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("form", {
        action: "search",
        className: "relative mt-24 mb-8 w-full lg:hidden",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("input", {
          type: "search",
          className: "text-jacarta-700 placeholder-jacarta-500 focus:ring-accent border-jacarta-100 w-full rounded-2xl border py-3 px-4 pl-10 dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white",
          placeholder: "Search"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
          className: "absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: 24,
            height: 24,
            className: "fill-jacarta-500 h-4 w-4 dark:fill-white",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
              fill: "none",
              d: "M0 0h24v24H0z"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
              d: "M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
            })]
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("nav", {
        className: "navbar w-full",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("ul", {
          className: "flex flex-col lg:flex-row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("li", {
            className: "js-nav-dropdown group relative",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("button", {
              onClick: () => mobileCollapse(home.id),
              className: "dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                className: (0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_10__/* .isParentPageActive */ .V)(home.pages, route.asPath) ? "text-accent dark:text-accent" : "",
                children: home.name
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("i", {
                className: "lg:hidden",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  width: 24,
                  height: 24,
                  className: "h-4 w-4 dark:fill-white",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
                    fill: "none",
                    d: "M0 0h24v24H0z"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
                    d: "M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                  })]
                })
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("ul", {
              className: `dropdown-menu dark:bg-jacarta-800 left-0 top-[85%] z-10 min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative ${isCollapse === home.id ? "block" : "hidden"}`,
              children: home?.pages?.map(page => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("li", {
                onClick: () => setToggle(false),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  legacyBehavior: true,
                  href: page.path,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("a", {
                    className: "dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors justify-between",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                      className: `font-display ${(0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_10__/* .isChildrenPageActive */ .g)(route.asPath, page.path) ? "text-accent dark:text-accent" : "text-jacarta-700"} text-sm dark:text-white`,
                      children: page.name
                    }), page.condition ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                      className: "rounded bg-green py-1 px-2 text-tiny font-bold uppercase leading-none text-white ml-4",
                      children: "new"
                    }) : undefined]
                  })
                })
              }, page.id))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("li", {
            className: "js-nav-dropdown group relative",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("button", {
              onClick: () => mobileCollapse(page.id),
              className: "dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                className: (0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_10__/* .isParentPageActive */ .V)(page.pages, route.asPath) ? "text-accent dark:text-accent" : "",
                children: page.name
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("i", {
                className: "lg:hidden",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  width: 24,
                  height: 24,
                  className: "h-4 w-4 dark:fill-white",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
                    fill: "none",
                    d: "M0 0h24v24H0z"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
                    d: "M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                  })]
                })
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("ul", {
              className: `dropdown-menu left-0 top-[85%] z-10 grid-flow-row grid-cols-[repeat(2,_1fr)] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 dark:bg-jacarta-800 lg:invisible lg:absolute lg:!grid lg:translate-y-4 lg:py-8 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative ${isCollapse === page.id ? "block" : "hidden"}`,
              children: page?.pages?.map(page => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("li", {
                onClick: () => setToggle(false),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  legacyBehavior: true,
                  href: page.path,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("a", {
                    className: "dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors justify-between",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                      className: (0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_10__/* .isChildrenPageActive */ .g)(page.path, route.asPath) ? "text-accent dark:text-accent" : "",
                      children: page.name
                    }), page.condition ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                      className: "rounded bg-green py-1 px-2 text-tiny font-bold uppercase leading-none text-white ml-4",
                      children: "new"
                    }) : undefined]
                  })
                })
              }, page.id))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("li", {
            className: "js-nav-dropdown nav-item dropdown group relative",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("button", {
              onClick: () => mobileCollapse(explore.id),
              className: "dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                className: (0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_10__/* .isParentPageActive */ .V)(explore.pages, route.asPath) ? "text-accent dark:text-accent" : "",
                children: explore.name
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("i", {
                className: "lg:hidden",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  width: 24,
                  height: 24,
                  className: "h-4 w-4 dark:fill-white",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
                    fill: "none",
                    d: "M0 0h24v24H0z"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
                    d: "M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                  })]
                })
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("ul", {
              className: `dropdown-menu left-0 top-[85%] z-10 grid-flow-row grid-cols-[repeat(2,_1fr)] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 dark:bg-jacarta-800 lg:invisible lg:absolute lg:!grid lg:translate-y-4 lg:py-8 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative ${isCollapse === explore.id ? "block" : "hidden"}`,
              "aria-labelledby": "navDropdown-1",
              children: explore?.pages?.map(page => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("li", {
                onClick: () => setToggle(false),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  legacyBehavior: true,
                  href: "/",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("a", {
                    className: "dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                      className: "bg-light-base mr-3 rounded-xl p-[0.375rem]",
                      children: page.icon
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                      className: "font-display text-jacarta-700 text-sm dark:text-white",
                      children: page.name
                    })]
                  })
                })
              }, page.id))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("li", {
            className: "js-nav-dropdown group relative",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("button", {
              onClick: () => mobileCollapse(resource.id),
              className: "dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                className: (0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_10__/* .isParentPageActive */ .V)(resource.pages, route.asPath) ? "text-accent dark:text-accent" : "",
                children: resource.name
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("i", {
                className: "lg:hidden",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  width: 24,
                  height: 24,
                  className: "h-4 w-4 dark:fill-white",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
                    fill: "none",
                    d: "M0 0h24v24H0z"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
                    d: "M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                  })]
                })
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("ul", {
              className: `dropdown-menu left-0 top-[85%] z-10 grid-flow-row grid-cols-[repeat(2,_1fr)] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 dark:bg-jacarta-800 lg:invisible lg:absolute lg:!grid lg:translate-y-4 lg:py-8 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative ${isCollapse === resource.id ? "block" : "hidden"}`,
              "aria-labelledby": "navDropdown-4",
              children: resource?.pages?.map(page => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("li", {
                onClick: () => setToggle(false),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  legacyBehavior: true,
                  href: page.path,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("a", {
                    className: "dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                      className: `font-display text-jacarta-700 text-sm dark:text-white ${(0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_10__/* .isChildrenPageActive */ .g)(page.path, route.asPath) ? "text-accent dark:text-accent" : ""}`,
                      children: page.name
                    })
                  })
                })
              }, page.id))
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("li", {
            className: "group",
            onClick: () => setToggle(false),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              legacyBehavior: true,
              href: "/create",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("a", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("button", {
                  className: "text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
                    className: (0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_10__/* .isChildrenPageActive */ .g)("/create", route.asPath) ? "text-accent dark:text-accent" : "",
                    children: "Create"
                  })
                })
              })
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "mt-10 w-full lg:hidden",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
          className: "js-wallet bg-accent shadow-accent-volume hover:bg-accent-dark block w-full rounded-full py-3 px-8 text-center font-semibold text-white transition-all",
          children: "MetaMask not available :"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("hr", {
          className: "dark:bg-jacarta-600 bg-jacarta-100 my-5 h-px border-0"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "flex items-center justify-center space-x-5",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("a", {
            className: "group",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("svg", {
              "aria-hidden": "true",
              focusable: "false",
              "data-prefix": "fab",
              "data-icon": "facebook",
              className: "group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white",
              role: "img",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 512 512",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
                d: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("a", {
            className: "group",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("svg", {
              "aria-hidden": "true",
              focusable: "false",
              "data-prefix": "fab",
              "data-icon": "twitter",
              className: "group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white",
              role: "img",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 512 512",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
                d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("a", {
            className: "group",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("svg", {
              "aria-hidden": "true",
              focusable: "false",
              "data-prefix": "fab",
              "data-icon": "discord",
              className: "group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white",
              role: "img",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 640 512",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
                d: "M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("a", {
            className: "group",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("svg", {
              "aria-hidden": "true",
              focusable: "false",
              "data-prefix": "fab",
              "data-icon": "instagram",
              className: "group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white",
              role: "img",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 448 512",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
                d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("a", {
            className: "group",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("svg", {
              "aria-hidden": "true",
              focusable: "false",
              "data-prefix": "fab",
              "data-icon": "tiktok",
              className: "group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white",
              role: "img",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 448 512",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("path", {
                d: "M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
              })
            })
          })]
        })]
      })]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2589:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Header02)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mode_DarkMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3026);
/* harmony import */ var _public_images_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8350);
/* harmony import */ var _public_images_logo_white_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7337);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6555);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7501);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wallet_btn_WalletButtonLight__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3262);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_5__]);
uuid__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













function Header02() {
  const {
    0: toggle,
    1: setToggle
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
  const {
    0: isScroll,
    1: setScroll
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
  const {
    0: isCollapse,
    1: setCollapse
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);
  const route = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)(); // sticky menu

  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 4) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []); // window resize

  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) {
        setToggle(false);
      }
    });
  });
  /* -------------------------------------------------------------------------- */

  /*                            daynamic navigations                            */

  /* -------------------------------------------------------------------------- */

  const home = {
    id: 1,
    name: "Home",
    pages: [{
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Home 1",
      path: "/"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Home 2",
      path: "/home/home_2"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Home 3",
      path: "/home/home_3"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Home 4",
      path: "/home/home_4"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Home 5",
      path: "/home/home_5"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Home 6",
      path: "/home/home_6"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Home 7",
      condition: true,
      path: "/home/home_7"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Home 8",
      condition: true,
      path: "/home/home_8"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Home 9",
      condition: true,
      path: "/home/home_9"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Home 10",
      condition: true,
      path: "/home/home_10"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Home 11",
      condition: true,
      path: "/home/home_11"
    }]
  };
  const page = {
    id: 2,
    name: "Pages",
    pages: [{
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Case Studies",
      condition: true,
      path: "/case-studies"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Single Case Study",
      condition: true,
      path: "/case-studies/case_study_1"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Careers",
      condition: true,
      path: "/careers"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Item Details",
      path: "/item/item_20"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Explore Collections",
      path: "/collection/explore_collection"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Collection",
      path: "/collection/avatar_1"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Activity",
      path: "/activity"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Rankings",
      path: "/rankings"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "User",
      path: "/user/avatar_6"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Edit Profile",
      path: "/profile/user_avatar"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "About",
      path: "/about"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Contact",
      path: "/contact"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Wallet",
      path: "/wallet"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Login",
      path: "/login"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Page 404",
      path: "/404"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Terms of Service",
      path: "/tarms"
    }]
  };
  const explore = {
    id: 3,
    name: "Explore",
    pages: [{
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "All NFTs",
      path: "/collection/explore_collection",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        className: "h-4 w-4 fill-jacarta-700",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
          fill: "none",
          d: "M0 0h24v24H0z"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
          d: "M22 12.999V20a1 1 0 0 1-1 1h-8v-8.001h9zm-11 0V21H3a1 1 0 0 1-1-1v-7.001h9zM11 3v7.999H2V4a1 1 0 0 1 1-1h8zm10 0a1 1 0 0 1 1 1v6.999h-9V3h8z"
        })]
      })
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Photography",
      path: "/collection/explore_collection",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        className: "h-4 w-4 fill-[#428AF8]",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
          fill: "none",
          d: "M0 0h24v24H0z"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
          d: "M2 6c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 0 1 2 20V6zm2 1v12h16V7H4zm10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 2a5 5 0 1 1 0-10 5 5 0 0 1 0 10zM4 2h6v2H4V2z"
        })]
      })
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Art",
      path: "/art",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        className: "h-4 w-4 fill-[#10B981]",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
          fill: "none",
          d: "M0 0h24v24H0z"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
          d: "M12 2c5.522 0 10 3.978 10 8.889a5.558 5.558 0 0 1-5.556 5.555h-1.966c-.922 0-1.667.745-1.667 1.667 0 .422.167.811.422 1.1.267.3.434.689.434 1.122C13.667 21.256 12.9 22 12 22 6.478 22 2 17.522 2 12S6.478 2 12 2zm-1.189 16.111a3.664 3.664 0 0 1 3.667-3.667h1.966A3.558 3.558 0 0 0 20 10.89C20 7.139 16.468 4 12 4a8 8 0 0 0-.676 15.972 3.648 3.648 0 0 1-.513-1.86zM7.5 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM12 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
        })]
      })
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Sports",
      path: "/sports",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        className: "h-4 w-4 fill-[#737EF2]",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
          fill: "none",
          d: "M0 0h24v24H0z"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
          d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm.366 11.366l-3.469 6.01a8.053 8.053 0 0 0 4.459.51 9.937 9.937 0 0 1 .784-5.494l-1.774-1.026zm3.518 2.031a7.956 7.956 0 0 0-.587 3.894 8.022 8.022 0 0 0 3.077-2.456l-2.49-1.438zm-7.025-4.055a9.95 9.95 0 0 1-4.365 3.428 8.01 8.01 0 0 0 2.671 3.604l3.469-6.008-1.775-1.024zm11.103-.13l-.258.12a7.947 7.947 0 0 0-2.82 2.333l2.492 1.439a7.975 7.975 0 0 0 .586-3.893zM4 12c0 .266.013.53.038.789a7.95 7.95 0 0 0 3.078-2.454L4.624 8.897A7.975 7.975 0 0 0 4 12zm12.835-6.374l-3.469 6.008 1.775 1.025a9.95 9.95 0 0 1 4.366-3.43 8.015 8.015 0 0 0-2.419-3.402l-.253-.201zM12 4c-.463 0-.916.04-1.357.115a9.928 9.928 0 0 1-.784 5.494l1.775 1.025 3.469-6.01A7.975 7.975 0 0 0 12 4zm-3.297.71l-.191.088a8.033 8.033 0 0 0-2.886 2.367l2.49 1.438a7.956 7.956 0 0 0 .587-3.893z"
        })]
      })
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Collectibles",
      path: "/collectibles",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        className: "h-4 w-4 fill-[#FEB240]",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
          fill: "none",
          d: "M0 0h24v24H0z"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
          d: "M17.5 2a4.5 4.5 0 0 1 2.951 7.897c.355.967.549 2.013.549 3.103A9 9 0 1 1 3.55 9.897a4.5 4.5 0 1 1 6.791-5.744 9.05 9.05 0 0 1 3.32 0A4.494 4.494 0 0 1 17.5 2zm0 2c-.823 0-1.575.4-2.038 1.052l-.095.144-.718 1.176-1.355-.253a7.05 7.05 0 0 0-2.267-.052l-.316.052-1.356.255-.72-1.176A2.5 2.5 0 1 0 4.73 8.265l.131.123 1.041.904-.475 1.295A7 7 0 1 0 19 13c0-.716-.107-1.416-.314-2.083l-.112-.33-.475-1.295 1.04-.904A2.5 2.5 0 0 0 17.5 4zM10 13a2 2 0 1 0 4 0h2a4 4 0 1 1-8 0h2z"
        })]
      })
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Trading Cards",
      path: "/tranding-cards",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        className: "h-4 w-4 fill-[#8DD059]",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
          fill: "none",
          d: "M0 0h24v24H0z"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
          d: "M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM4 5v14h16V5H4zm2 2h6v6H6V7zm2 2v2h2V9H8zm-2 6h12v2H6v-2zm8-8h4v2h-4V7zm0 4h4v2h-4v-2z"
        })]
      })
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Domain Names",
      path: "/domain-names",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        className: "h-4 w-4 fill-[#8358FF]",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
          fill: "none",
          d: "M0 0h24v24H0z"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
          d: "M5 15v4h4v2H3v-6h2zm16 0v6h-6v-2h4v-4h2zm-8.001-9l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3H6.6l4.399-11h2zm-1 2.885L10.752 12h2.492l-1.245-3.115zM9 3v2H5v4H3V3h6zm12 0v6h-2V5h-4V3h6z"
        })]
      })
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Utility",
      path: "/utility",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        className: "h-4 w-4 fill-[#EF3D3D]",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
          fill: "none",
          d: "M0 0h24v24H0z"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
          d: "M22 7h1v10h-1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3zm-2 10h-6a5 5 0 0 1 0-10h6V5H4v14h16v-2zm1-2V9h-7a3 3 0 0 0 0 6h7zm-7-4h3v2h-3v-2z"
        })]
      })
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Virtual Worlds",
      path: "/virtual-worlds",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        className: "h-4 w-4 fill-[#46C7E3]",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
          fill: "none",
          d: "M0 0h24v24H0z"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
          d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z"
        })]
      })
    }]
  };
  const resource = {
    id: 4,
    name: "Resources",
    pages: [{
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Help Center",
      path: "/help_center"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Platform Status",
      path: "/platform_status"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Partners",
      path: "/partners"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Blog",
      path: "/blog"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Single Post",
      path: "/single_post/post_1"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
      name: "Newsletter",
      path: "/newsletter"
    }]
  }; // mobile page collapse

  const mobileCollapse = id => {
    if (isCollapse === id) {
      return setCollapse(null);
    }

    setCollapse(id);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("header", {
      className: `js-page-header page-header--transparent fixed top-0 z-20 w-full bg-white/[.15] backdrop-blur transition-colors ${isScroll ? "js-page-header--is-sticky" : ""}`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "flex items-center px-6 py-6 xl:px-24 ",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          legacyBehavior: true,
          className: "shrink-0",
          href: "/",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("a", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
              src: _public_images_logo_white_png__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
              height: 28,
              width: 130,
              alt: "Xhibiter | NFT Marketplace"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("form", {
          action: "search",
          className: "relative ml-12 mr-8 hidden basis-3/12 lg:block xl:ml-[8%]",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("input", {
            type: "search",
            className: " focus:ring-accent border-jacarta-100 w-full rounded-2xl border py-[0.6875rem] px-4 pl-10 border-transparent bg-white/[.15] text-white placeholder-white",
            placeholder: "Search"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
            className: "absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              width: 24,
              height: 24,
              className: " h-4 w-4 fill-white",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
                fill: "none",
                d: "M0 0h24v24H0z"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
                d: "M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
              })]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "js-mobile-menu dark:bg-jacarta-800 invisible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("nav", {
            className: "navbar w-full",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("ul", {
              className: "flex flex-col lg:flex-row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("li", {
                className: "js-nav-dropdown group relative",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("button", {
                  className: "dropdown-toggle font-display  hover:text-accent focus:text-accent flex items-center justify-between py-3.5 text-base lg:text-white text-jacarta-700 dark:text-white lg:px-5 w-full",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
                    className: (0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_9__/* .isParentPageActive */ .V)(home.pages, route.asPath) ? "text-accent  dark:text-accent" : "",
                    children: "Home"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("i", {
                    className: "lg:hidden",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      width: 24,
                      height: 24,
                      className: "h-4 w-4 dark:fill-white",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
                        fill: "none",
                        d: "M0 0h24v24H0z"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
                        d: "M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                      })]
                    })
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("ul", {
                  className: "dropdown-menu dark:bg-jacarta-800 left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative",
                  children: home?.pages?.map(page => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("li", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                      legacyBehavior: true,
                      href: page.path,
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("a", {
                        className: "dark:hover:bg-jacarta-600  hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors justify-between ",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
                          className: `font-display ${(0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_9__/* .isChildrenPageActive */ .g)(page.path, route.asPath) ? "text-accent dark:text-accent" : "text-jacarta-700"} text-sm dark:text-white`,
                          children: page.name
                        }), page.condition ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
                          className: "rounded bg-green py-1 px-2 text-tiny font-bold uppercase leading-none text-white ml-4",
                          children: "new"
                        }) : undefined]
                      })
                    })
                  }, page.id))
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("li", {
                className: "js-nav-dropdown group relative",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("button", {
                  className: "dropdown-toggle font-display  hover:text-accent focus:text-accent flex items-center justify-between py-3.5 text-base lg:text-white text-jacarta-700 dark:text-white lg:px-5 w-full",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
                    className: (0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_9__/* .isParentPageActive */ .V)(page.pages, route.asPath) ? "text-accent dark:text-accent" : "",
                    children: "Pages"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("i", {
                    className: "lg:hidden",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      width: 24,
                      height: 24,
                      className: "h-4 w-4 dark:fill-white",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
                        fill: "none",
                        d: "M0 0h24v24H0z"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
                        d: "M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                      })]
                    })
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("ul", {
                  className: "dropdown-menu left-0 top-[85%] z-10 hidden grid-flow-row grid-cols-[repeat(2,_1fr)] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 dark:bg-jacarta-800 lg:invisible lg:absolute lg:!grid lg:translate-y-4 lg:py-8 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative",
                  children: page?.pages?.map(page => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("li", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                      legacyBehavior: true,
                      href: page.path,
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("a", {
                        className: "dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors justify-between",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
                          className: `font-display ${(0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_9__/* .isChildrenPageActive */ .g)(page.path, route.asPath) ? "!text-accent !dark:text-accent" : "text-jacarta-700 dark:text-white"} text-sm `,
                          children: page.name
                        }), page.condition ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
                          className: "rounded bg-green py-1 px-2 text-tiny font-bold uppercase leading-none text-white ml-4",
                          children: "new"
                        }) : undefined]
                      })
                    })
                  }, page.id))
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("li", {
                className: "js-nav-dropdown nav-item dropdown group relative",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("button", {
                  className: "dropdown-toggle font-display  hover:text-accent focus:text-accent flex items-center justify-between py-3.5 text-base lg:text-white text-jacarta-700 dark:text-white lg:px-5 w-full",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
                    className: (0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_9__/* .isParentPageActive */ .V)(explore.pages, route.asPath) ? "text-accent dark:text-accent" : "",
                    children: "Explore"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("i", {
                    className: "lg:hidden",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      width: 24,
                      height: 24,
                      className: "h-4 w-4 dark:fill-white",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
                        fill: "none",
                        d: "M0 0h24v24H0z"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
                        d: "M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                      })]
                    })
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("ul", {
                  className: "dropdown-menu dark:bg-jacarta-800 -left-6 top-[85%] z-10 hidden grid-flow-col grid-rows-5 gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:!grid lg:translate-y-4 lg:py-8 lg:px-5 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative",
                  "aria-labelledby": "navDropdown-1",
                  children: explore?.pages?.map(page => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("li", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                      legacyBehavior: true,
                      href: "/",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("a", {
                        className: "dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
                          className: "bg-light-base mr-3 rounded-xl p-[0.375rem]",
                          children: page?.icon
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
                          className: "font-display text-jacarta-700 text-sm dark:text-white",
                          children: page?.name
                        })]
                      })
                    })
                  }, page.id))
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("li", {
                className: "js-nav-dropdown group relative",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("button", {
                  className: "dropdown-toggle font-display  hover:text-accent focus:text-accent flex items-center justify-between py-3.5 text-base lg:text-white text-jacarta-700 dark:text-white lg:px-5 w-full",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
                    className: (0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_9__/* .isParentPageActive */ .V)(resource.pages, route.asPath) ? "text-accent dark:text-accent" : "",
                    children: "Resources"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("i", {
                    className: "lg:hidden",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      width: 24,
                      height: 24,
                      className: "h-4 w-4 dark:fill-white",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
                        fill: "none",
                        d: "M0 0h24v24H0z"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
                        d: "M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                      })]
                    })
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("ul", {
                  className: "dropdown-menu dark:bg-jacarta-800 left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative",
                  "aria-labelledby": "navDropdown-4",
                  children: resource?.pages?.map?.(page => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("li", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                      legacyBehavior: true,
                      href: page?.path,
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("a", {
                        className: "dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
                          className: `font-display ${(0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_9__/* .isChildrenPageActive */ .g)(page.path, route.asPath) ? "text-accent dark:text-accent" : "text-jacarta-700"} text-sm dark:text-white`,
                          children: page?.name
                        })
                      })
                    })
                  }, page.id))
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("li", {
                className: "group",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  legacyBehavior: true,
                  href: "/create",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("a", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("button", {
                      className: "font-display hover:text-accent focus:text-accent flex items-center justify-between py-3.5 text-base lg:text-white text-jacarta-700 dark:text-white lg:px-5",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
                        className: (0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_9__/* .isChildrenPageActive */ .g)(route.asPath, "/create") ? "text-accent dark:text-accent" : "",
                        children: "Create"
                      })
                    })
                  })
                })
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "ml-8 hidden items-center lg:flex xl:ml-12",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_wallet_btn_WalletButtonLight__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "js-nav-dropdown group-dropdown relative",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("button", {
                className: "dropdown-toggle border-jacarta-100 focus:bg-accent group hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent border-transparent bg-white/[.15]",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  width: 24,
                  height: 24,
                  className: " h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white fill-white",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
                    fill: "none",
                    d: "M0 0h24v24H0z"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
                    d: "M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "dropdown-menu dark:bg-jacarta-800 group-dropdown-hover:opacity-100 group-dropdown-hover:visible !-right-4 !top-[85%] !left-auto z-10 min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:shadow-2xl hidden lg:invisible lg:opacity-0",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("button", {
                    className: "js-copy-clipboard font-display text-jacarta-700 my-4 flex select-none items-center whitespace-nowrap px-5 leading-none dark:text-white",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
                      children: "0x7a86c0b06417100..."
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      width: 24,
                      height: 24,
                      className: "dark:fill-jacarta-300 fill-jacarta-500 ml-auto mb-px h-4 w-4",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
                        fill: "none",
                        d: "M0 0h24v24H0z"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
                        d: "M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3zM4.003 9L4 20h11V9H4.003z"
                      })]
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  className: "dark:border-jacarta-600 border-jacarta-100 mx-5 mb-6 rounded-lg border p-4",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
                    className: "dark:text-jacarta-200 text-sm font-medium tracking-tight",
                    children: "Balance"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                    className: "flex items-center",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("svg", {
                      className: "icon icon-ETH -ml-1 mr-1 h-[1.125rem] w-[1.125rem]",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("use", {
                        xlinkHref: "/icons.svg#icon-ETH"
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
                      className: "text-green text-lg font-bold",
                      children: "10 ETH"
                    })]
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  legacyBehavior: true,
                  href: "/user/avatar_6",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("a", {
                    className: "dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      width: 24,
                      height: 24,
                      className: "fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
                        fill: "none",
                        d: "M0 0h24v24H0z"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
                        d: "M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"
                      })]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
                      className: "font-display text-jacarta-700 mt-1 text-sm dark:text-white",
                      children: "My Profile"
                    })]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  legacyBehavior: true,
                  href: "/profile/user_avatar",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("a", {
                    className: "dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      width: 24,
                      height: 24,
                      className: "fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
                        fill: "none",
                        d: "M0 0h24v24H0z"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
                        d: "M9.954 2.21a9.99 9.99 0 0 1 4.091-.002A3.993 3.993 0 0 0 16 5.07a3.993 3.993 0 0 0 3.457.261A9.99 9.99 0 0 1 21.5 8.876 3.993 3.993 0 0 0 20 12c0 1.264.586 2.391 1.502 3.124a10.043 10.043 0 0 1-2.046 3.543 3.993 3.993 0 0 0-3.456.261 3.993 3.993 0 0 0-1.954 2.86 9.99 9.99 0 0 1-4.091.004A3.993 3.993 0 0 0 8 18.927a3.993 3.993 0 0 0-3.457-.26A9.99 9.99 0 0 1 2.5 15.121 3.993 3.993 0 0 0 4 11.999a3.993 3.993 0 0 0-1.502-3.124 10.043 10.043 0 0 1 2.046-3.543A3.993 3.993 0 0 0 8 5.071a3.993 3.993 0 0 0 1.954-2.86zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                      })]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
                      className: "font-display text-jacarta-700 mt-1 text-sm dark:text-white",
                      children: "Edit Profile"
                    })]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  legacyBehavior: true,
                  href: "/login",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("a", {
                    className: "dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      width: 24,
                      height: 24,
                      className: "fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
                        fill: "none",
                        d: "M0 0h24v24H0z"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
                        d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 11V8l-5 4 5 4v-3h8v-2H7z"
                      })]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
                      className: "font-display text-jacarta-700 mt-1 text-sm dark:text-white",
                      children: "Sign out"
                    })]
                  })
                })]
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_mode_DarkMode__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "ml-auto flex lg:hidden",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            legacyBehavior: true,
            href: "/profile/user_avatar",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("a", {
              className: "border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]",
              "aria-label": "profile",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                width: 24,
                height: 24,
                className: "fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
                  fill: "none",
                  d: "M0 0h24v24H0z"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
                  d: "M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"
                })]
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_mode_DarkMode__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("button", {
            className: "js-mobile-toggle border-jacarta-100 hover:bg-accent dark:hover:bg-accent focus:bg-accent group ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]",
            "aria-label": "open mobile menu",
            onClick: () => setToggle(true),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              width: 24,
              height: 24,
              className: "fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
                fill: "none",
                d: "M0 0h24v24H0z"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
                d: "M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z"
              })]
            })
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: `lg:hidden js-mobile-menu dark:bg-jacarta-800 invisible fixed inset-0 z-20 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent ${toggle ? "nav-menu--is-open" : "hidden"}`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "t-0 dark:bg-jacarta-800 fixed left-0 z-10 flex w-full items-center justify-between bg-white p-6 lg:hidden",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          className: "dark:hidden",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
            src: _public_images_logo_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
            height: 28,
            width: 130,
            alt: "Xhibiter | NFT Marketplace",
            className: "max-h-7 h-auto "
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          className: "hidden dark:block",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
            src: _public_images_logo_white_png__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
            height: 28,
            width: 130,
            alt: "Xhibiter | NFT Marketplace"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("button", {
          className: "js-mobile-close border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]",
          onClick: () => setToggle(false),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: 24,
            height: 24,
            className: "fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
              fill: "none",
              d: "M0 0h24v24H0z"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
              d: "M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
            })]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("form", {
        action: "search",
        className: "relative mt-24 mb-8 w-full lg:hidden",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("input", {
          type: "search",
          className: "text-jacarta-700 placeholder-jacarta-500 focus:ring-accent border-jacarta-100 w-full rounded-2xl border py-3 px-4 pl-10 dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white",
          placeholder: "Search"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
          className: "absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: 24,
            height: 24,
            className: "fill-jacarta-500 h-4 w-4 dark:fill-white",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
              fill: "none",
              d: "M0 0h24v24H0z"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
              d: "M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
            })]
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("nav", {
        className: "navbar w-full",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("ul", {
          className: "flex flex-col lg:flex-row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("li", {
            className: "js-nav-dropdown group relative",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("button", {
              onClick: () => mobileCollapse(home.id),
              className: "dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
                className: (0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_9__/* .isParentPageActive */ .V)(home.pages, route.asPath) ? "text-accent dark:text-accent" : "",
                children: home.name
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("i", {
                className: "lg:hidden",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  width: 24,
                  height: 24,
                  className: "h-4 w-4 dark:fill-white",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
                    fill: "none",
                    d: "M0 0h24v24H0z"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
                    d: "M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                  })]
                })
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("ul", {
              className: `dropdown-menu dark:bg-jacarta-800 left-0 top-[85%] z-10 min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative ${isCollapse === home.id ? "block" : "hidden"}`,
              children: home?.pages?.map(page => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("li", {
                onClick: () => setToggle(false),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  legacyBehavior: true,
                  href: page.path,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("a", {
                    className: "dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
                      className: `font-display ${(0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_9__/* .isChildrenPageActive */ .g)(route.asPath, page.path) ? "text-accent dark:text-accent" : "text-jacarta-700"} text-sm dark:text-white`,
                      children: page.name
                    }), page.condition ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
                      className: "rounded bg-green py-1 px-2 text-tiny font-bold uppercase leading-none text-white ml-4",
                      children: "new"
                    }) : undefined]
                  })
                })
              }, page.id))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("li", {
            className: "js-nav-dropdown group relative",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("button", {
              onClick: () => mobileCollapse(page.id),
              className: "dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
                className: (0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_9__/* .isParentPageActive */ .V)(page.pages, route.asPath) ? "text-accent dark:text-accent" : "",
                children: page.name
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("i", {
                className: "lg:hidden",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  width: 24,
                  height: 24,
                  className: "h-4 w-4 dark:fill-white",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
                    fill: "none",
                    d: "M0 0h24v24H0z"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
                    d: "M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                  })]
                })
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("ul", {
              className: `dropdown-menu left-0 top-[85%] z-10 grid-flow-row grid-cols-[repeat(2,_1fr)] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 dark:bg-jacarta-800 lg:invisible lg:absolute lg:!grid lg:translate-y-4 lg:py-8 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative ${isCollapse === page.id ? "block" : "hidden"}`,
              children: page?.pages?.map(page => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("li", {
                onClick: () => setToggle(false),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  legacyBehavior: true,
                  href: page.path,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("a", {
                    className: "dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors justify-between",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
                      className: (0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_9__/* .isChildrenPageActive */ .g)(page.path, route.asPath) ? "text-accent dark:text-accent" : "",
                      children: page.name
                    }), page.condition ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
                      className: "rounded bg-green py-1 px-2 text-tiny font-bold uppercase leading-none text-white ml-4",
                      children: "new"
                    }) : undefined]
                  })
                })
              }, page.id))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("li", {
            className: "js-nav-dropdown nav-item dropdown group relative",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("button", {
              onClick: () => mobileCollapse(explore.id),
              className: "dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
                className: (0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_9__/* .isParentPageActive */ .V)(explore.pages, route.asPath) ? "text-accent dark:text-accent" : "",
                children: explore.name
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("i", {
                className: "lg:hidden",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  width: 24,
                  height: 24,
                  className: "h-4 w-4 dark:fill-white",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
                    fill: "none",
                    d: "M0 0h24v24H0z"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
                    d: "M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                  })]
                })
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("ul", {
              className: `dropdown-menu left-0 top-[85%] z-10 grid-flow-row grid-cols-[repeat(2,_1fr)] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 dark:bg-jacarta-800 lg:invisible lg:absolute lg:!grid lg:translate-y-4 lg:py-8 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative ${isCollapse === explore.id ? "block" : "hidden"}`,
              "aria-labelledby": "navDropdown-1",
              children: explore?.pages?.map(page => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("li", {
                onClick: () => setToggle(false),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  legacyBehavior: true,
                  href: "/",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("a", {
                    className: "dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors justify-between",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
                      className: "bg-light-base mr-3 rounded-xl p-[0.375rem]",
                      children: page.icon
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
                      className: "font-display text-jacarta-700 text-sm dark:text-white",
                      children: page.name
                    })]
                  })
                })
              }, page.id))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("li", {
            className: "js-nav-dropdown group relative",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("button", {
              onClick: () => mobileCollapse(resource.id),
              className: "dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
                className: (0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_9__/* .isParentPageActive */ .V)(resource.pages, route.asPath) ? "text-accent dark:text-accent" : "",
                children: resource.name
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("i", {
                className: "lg:hidden",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  width: 24,
                  height: 24,
                  className: "h-4 w-4 dark:fill-white",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
                    fill: "none",
                    d: "M0 0h24v24H0z"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
                    d: "M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                  })]
                })
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("ul", {
              className: `dropdown-menu left-0 top-[85%] z-10 grid-flow-row grid-cols-[repeat(2,_1fr)] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 dark:bg-jacarta-800 lg:invisible lg:absolute lg:!grid lg:translate-y-4 lg:py-8 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative ${isCollapse === resource.id ? "block" : "hidden"}`,
              "aria-labelledby": "navDropdown-4",
              children: resource?.pages?.map(page => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("li", {
                onClick: () => setToggle(false),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  legacyBehavior: true,
                  href: page.path,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("a", {
                    className: "dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
                      className: `font-display text-jacarta-700 text-sm dark:text-white ${(0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_9__/* .isChildrenPageActive */ .g)(page.path, route.asPath) ? "text-accent dark:text-accent" : ""}`,
                      children: page.name
                    })
                  })
                })
              }, page.id))
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("li", {
            className: "group",
            onClick: () => setToggle(false),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              legacyBehavior: true,
              href: "/create",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("a", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("button", {
                  className: "text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
                    className: (0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_9__/* .isChildrenPageActive */ .g)("/create", route.asPath) ? "text-accent dark:text-accent" : "",
                    children: "Create"
                  })
                })
              })
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "mt-10 w-full lg:hidden",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          className: "js-wallet bg-accent shadow-accent-volume hover:bg-accent-dark block w-full rounded-full py-3 px-8 text-center font-semibold text-white transition-all",
          children: "MetaMask not available :"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("hr", {
          className: "dark:bg-jacarta-600 bg-jacarta-100 my-5 h-px border-0"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "flex items-center justify-center space-x-5",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("a", {
            className: "group",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("svg", {
              "aria-hidden": "true",
              focusable: "false",
              "data-prefix": "fab",
              "data-icon": "facebook",
              className: "group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white",
              role: "img",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 512 512",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
                d: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("a", {
            className: "group",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("svg", {
              "aria-hidden": "true",
              focusable: "false",
              "data-prefix": "fab",
              "data-icon": "twitter",
              className: "group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white",
              role: "img",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 512 512",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
                d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("a", {
            className: "group",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("svg", {
              "aria-hidden": "true",
              focusable: "false",
              "data-prefix": "fab",
              "data-icon": "discord",
              className: "group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white",
              role: "img",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 640 512",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
                d: "M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("a", {
            className: "group",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("svg", {
              "aria-hidden": "true",
              focusable: "false",
              "data-prefix": "fab",
              "data-icon": "instagram",
              className: "group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white",
              role: "img",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 448 512",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
                d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("a", {
            className: "group",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("svg", {
              "aria-hidden": "true",
              focusable: "false",
              "data-prefix": "fab",
              "data-icon": "tiktok",
              className: "group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white",
              role: "img",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 448 512",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
                d: "M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
              })
            })
          })]
        })]
      })]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Header03)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_images_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8350);
/* harmony import */ var _public_images_logo_white_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7337);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







function Header03() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("header", {
      className: "js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "flex items-center py-[1.5625rem] lg:py-[1.8125rem]",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            legacyBehavior: true,
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
              className: "shrink-0 lg:mr-14",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                className: "max-h-7 dark:hidden",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
                  src: _public_images_logo_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                  height: 28,
                  width: 130,
                  alt: "Xhibiter | NFT Marketplace"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                className: "hidden max-h-7 dark:block",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
                  src: _public_images_logo_white_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                  height: 28,
                  width: 130,
                  alt: "Xhibiter | NFT Marketplace"
                })
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
            className: "font-display mt-1 hidden text-lg font-semibold lg:inline-block",
            children: "Status"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
            href: "#",
            className: "bg-accent shadow-accent-volume hover:bg-accent-dark ml-auto inline-block rounded-full py-2.5 px-8 text-center text-sm font-semibold text-white transition-all",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
              className: "hidden lg:block",
              children: "Subscribe to Updates"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
              className: "lg:hidden",
              children: "Subscribe"
            })]
          })]
        })
      })
    })
  });
}

/***/ }),

/***/ 8011:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Header04)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_images_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8350);
/* harmony import */ var _public_images_logo_white_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7337);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6555);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7501);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_4__]);
uuid__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











function Header04() {
  const {
    0: toggle,
    1: setToggle
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  const {
    0: isCollapse,
    1: setCollapse
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
  const {
    0: isScroll,
    1: setScroll
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false); // sticky menu

  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 4) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []); // window resize

  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) {
        setToggle(false);
      }
    });
  });
  const route = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  /* -------------------------------------------------------------------------- */

  /*                            daynamic navigations                            */

  /* -------------------------------------------------------------------------- */

  const home = {
    id: 1,
    name: "Home",
    pages: [{
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
      name: "Home 1",
      path: "/"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
      name: "Home 2",
      path: "/home/home_2"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
      name: "Home 3",
      path: "/home/home_3"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
      name: "Home 4",
      path: "/home/home_4"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
      name: "Home 5",
      path: "/home/home_5"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
      name: "Home 6",
      path: "/home/home_6"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
      name: "Home 7",
      condition: true,
      path: "/home/home_7"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
      name: "Home 8",
      condition: true,
      path: "/home/home_8"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
      name: "Home 9",
      condition: true,
      path: "/home/home_9"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
      name: "Home 10",
      condition: true,
      path: "/home/home_10"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
      name: "Home 11",
      condition: true,
      path: "/home/home_11"
    }]
  };
  const page = {
    id: 2,
    name: "Pages",
    pages: [{
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
      name: "Case Studies",
      condition: true,
      path: "/case-studies"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
      name: "Single Case Study",
      condition: true,
      path: "/case-studies/case_study_1"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
      name: "Careers",
      condition: true,
      path: "/careers"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
      name: "Item Details",
      path: "/item/item_20"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
      name: "Explore Collections",
      path: "/collection/explore_collection"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
      name: "Collection",
      path: "/collection/avatar_1"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
      name: "Activity",
      path: "/activity"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
      name: "Rankings",
      path: "/rankings"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
      name: "User",
      path: "/user/avatar_6"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
      name: "Edit Profile",
      path: "/profile/user_avatar"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
      name: "About",
      path: "/about"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
      name: "Contact",
      path: "/contact"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
      name: "Wallet",
      path: "/wallet"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
      name: "Login",
      path: "/login"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
      name: "Page 404",
      path: "/404"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
      name: "Terms of Service",
      path: "/tarms"
    }]
  };
  const explore = {
    id: 3,
    name: "Explore",
    pages: [{
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
      name: "All NFTs",
      path: "/collection/explore_collection",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        className: "h-4 w-4 fill-jacarta-700",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
          fill: "none",
          d: "M0 0h24v24H0z"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
          d: "M22 12.999V20a1 1 0 0 1-1 1h-8v-8.001h9zm-11 0V21H3a1 1 0 0 1-1-1v-7.001h9zM11 3v7.999H2V4a1 1 0 0 1 1-1h8zm10 0a1 1 0 0 1 1 1v6.999h-9V3h8z"
        })]
      })
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
      name: "Photography",
      path: "/collection/explore_collection",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        className: "h-4 w-4 fill-[#428AF8]",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
          fill: "none",
          d: "M0 0h24v24H0z"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
          d: "M2 6c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 0 1 2 20V6zm2 1v12h16V7H4zm10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 2a5 5 0 1 1 0-10 5 5 0 0 1 0 10zM4 2h6v2H4V2z"
        })]
      })
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
      name: "Art",
      path: "/art",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        className: "h-4 w-4 fill-[#10B981]",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
          fill: "none",
          d: "M0 0h24v24H0z"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
          d: "M12 2c5.522 0 10 3.978 10 8.889a5.558 5.558 0 0 1-5.556 5.555h-1.966c-.922 0-1.667.745-1.667 1.667 0 .422.167.811.422 1.1.267.3.434.689.434 1.122C13.667 21.256 12.9 22 12 22 6.478 22 2 17.522 2 12S6.478 2 12 2zm-1.189 16.111a3.664 3.664 0 0 1 3.667-3.667h1.966A3.558 3.558 0 0 0 20 10.89C20 7.139 16.468 4 12 4a8 8 0 0 0-.676 15.972 3.648 3.648 0 0 1-.513-1.86zM7.5 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM12 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
        })]
      })
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
      name: "Sports",
      path: "/sports",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        className: "h-4 w-4 fill-[#737EF2]",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
          fill: "none",
          d: "M0 0h24v24H0z"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
          d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm.366 11.366l-3.469 6.01a8.053 8.053 0 0 0 4.459.51 9.937 9.937 0 0 1 .784-5.494l-1.774-1.026zm3.518 2.031a7.956 7.956 0 0 0-.587 3.894 8.022 8.022 0 0 0 3.077-2.456l-2.49-1.438zm-7.025-4.055a9.95 9.95 0 0 1-4.365 3.428 8.01 8.01 0 0 0 2.671 3.604l3.469-6.008-1.775-1.024zm11.103-.13l-.258.12a7.947 7.947 0 0 0-2.82 2.333l2.492 1.439a7.975 7.975 0 0 0 .586-3.893zM4 12c0 .266.013.53.038.789a7.95 7.95 0 0 0 3.078-2.454L4.624 8.897A7.975 7.975 0 0 0 4 12zm12.835-6.374l-3.469 6.008 1.775 1.025a9.95 9.95 0 0 1 4.366-3.43 8.015 8.015 0 0 0-2.419-3.402l-.253-.201zM12 4c-.463 0-.916.04-1.357.115a9.928 9.928 0 0 1-.784 5.494l1.775 1.025 3.469-6.01A7.975 7.975 0 0 0 12 4zm-3.297.71l-.191.088a8.033 8.033 0 0 0-2.886 2.367l2.49 1.438a7.956 7.956 0 0 0 .587-3.893z"
        })]
      })
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
      name: "Collectibles",
      path: "/collectibles",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        className: "h-4 w-4 fill-[#FEB240]",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
          fill: "none",
          d: "M0 0h24v24H0z"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
          d: "M17.5 2a4.5 4.5 0 0 1 2.951 7.897c.355.967.549 2.013.549 3.103A9 9 0 1 1 3.55 9.897a4.5 4.5 0 1 1 6.791-5.744 9.05 9.05 0 0 1 3.32 0A4.494 4.494 0 0 1 17.5 2zm0 2c-.823 0-1.575.4-2.038 1.052l-.095.144-.718 1.176-1.355-.253a7.05 7.05 0 0 0-2.267-.052l-.316.052-1.356.255-.72-1.176A2.5 2.5 0 1 0 4.73 8.265l.131.123 1.041.904-.475 1.295A7 7 0 1 0 19 13c0-.716-.107-1.416-.314-2.083l-.112-.33-.475-1.295 1.04-.904A2.5 2.5 0 0 0 17.5 4zM10 13a2 2 0 1 0 4 0h2a4 4 0 1 1-8 0h2z"
        })]
      })
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
      name: "Trading Cards",
      path: "/tranding-cards",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        className: "h-4 w-4 fill-[#8DD059]",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
          fill: "none",
          d: "M0 0h24v24H0z"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
          d: "M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM4 5v14h16V5H4zm2 2h6v6H6V7zm2 2v2h2V9H8zm-2 6h12v2H6v-2zm8-8h4v2h-4V7zm0 4h4v2h-4v-2z"
        })]
      })
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
      name: "Domain Names",
      path: "/domain-names",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        className: "h-4 w-4 fill-[#8358FF]",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
          fill: "none",
          d: "M0 0h24v24H0z"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
          d: "M5 15v4h4v2H3v-6h2zm16 0v6h-6v-2h4v-4h2zm-8.001-9l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3H6.6l4.399-11h2zm-1 2.885L10.752 12h2.492l-1.245-3.115zM9 3v2H5v4H3V3h6zm12 0v6h-2V5h-4V3h6z"
        })]
      })
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
      name: "Utility",
      path: "/utility",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        className: "h-4 w-4 fill-[#EF3D3D]",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
          fill: "none",
          d: "M0 0h24v24H0z"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
          d: "M22 7h1v10h-1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3zm-2 10h-6a5 5 0 0 1 0-10h6V5H4v14h16v-2zm1-2V9h-7a3 3 0 0 0 0 6h7zm-7-4h3v2h-3v-2z"
        })]
      })
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
      name: "Virtual Worlds",
      path: "/virtual-worlds",
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        className: "h-4 w-4 fill-[#46C7E3]",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
          fill: "none",
          d: "M0 0h24v24H0z"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
          d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z"
        })]
      })
    }]
  };
  const resource = {
    id: 4,
    name: "Resources",
    pages: [{
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
      name: "Help Center",
      path: "/help_center"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
      name: "Platform Status",
      path: "/platform_status"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
      name: "Partners",
      path: "/partners"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
      name: "Blog",
      path: "/blog"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
      name: "Single Post",
      path: "/single_post/post_1"
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
      name: "Newsletter",
      path: "/newsletter"
    }]
  };

  const mobileCollapse = id => {
    if (isCollapse === id) {
      return setCollapse(null);
    }

    setCollapse(id);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("header", {
      className: `js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors ${isScroll ? "js-page-header--is-sticky" : ""}`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "flex items-center px-6 py-6 xl:px-24 ",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          legacyBehavior: true,
          className: "shrink-0",
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("a", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
              className: "dark:hidden",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
                src: _public_images_logo_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                height: 28,
                width: 130,
                alt: "Xhibiter | NFT Marketplace",
                className: "max-h-7 h-auto "
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
              className: "hidden dark:block",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
                src: _public_images_logo_white_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                height: 28,
                width: 130,
                alt: "Xhibiter | NFT Marketplace"
              })
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
          className: "js-mobile-menu dark:bg-jacarta-800 invisible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent w-full",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("nav", {
            className: "navbar w-full mt-24  lg:mt-0",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("ul", {
              className: "flex flex-col justify-center lg:flex-row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
                className: "js-nav-dropdown group relative",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("button", {
                  className: "dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                    className: (0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_8__/* .isParentPageActive */ .V)(home.pages, route.asPath) ? "text-accent  dark:text-accent" : "",
                    children: "Home"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("i", {
                    className: "lg:hidden",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      width: 24,
                      height: 24,
                      className: "h-4 w-4 dark:fill-white",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
                        fill: "none",
                        d: "M0 0h24v24H0z"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
                        d: "M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                      })]
                    })
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("ul", {
                  className: "dropdown-menu dark:bg-jacarta-800 left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative",
                  children: home?.pages?.map(page => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("li", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                      legacyBehavior: true,
                      href: page.path,
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("a", {
                        className: "dark:hover:bg-jacarta-600  hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors justify-between ",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                          className: `font-display ${(0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_8__/* .isChildrenPageActive */ .g)(page.path, route.asPath) ? "text-accent dark:text-accent" : "text-jacarta-700"} text-sm dark:text-white`,
                          children: page.name
                        }), page.condition ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                          className: "rounded bg-green py-1 px-2 text-tiny font-bold uppercase leading-none text-white ml-4",
                          children: "new"
                        }) : undefined]
                      })
                    })
                  }, page.id))
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
                className: "js-nav-dropdown group relative",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("button", {
                  className: "dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                    className: (0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_8__/* .isParentPageActive */ .V)(page.pages, route.asPath) ? "text-accent dark:text-accent" : "",
                    children: "Pages"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("i", {
                    className: "lg:hidden",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      width: 24,
                      height: 24,
                      className: "h-4 w-4 dark:fill-white",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
                        fill: "none",
                        d: "M0 0h24v24H0z"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
                        d: "M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                      })]
                    })
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("ul", {
                  className: "dropdown-menu left-0 top-[85%] z-10 hidden grid-flow-row grid-cols-[repeat(2,_1fr)] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 dark:bg-jacarta-800 lg:invisible lg:absolute lg:!grid lg:translate-y-4 lg:py-8 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative",
                  children: page?.pages?.map(page => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("li", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                      legacyBehavior: true,
                      href: page.path,
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("a", {
                        className: "dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors justify-between",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                          className: `font-display ${(0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_8__/* .isChildrenPageActive */ .g)(page.path, route.asPath) ? "!text-accent !dark:text-accent" : "text-jacarta-700 dark:text-white"} text-sm `,
                          children: page.name
                        }), page.condition ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                          className: "rounded bg-green py-1 px-2 text-tiny font-bold uppercase leading-none text-white ml-4",
                          children: "new"
                        }) : undefined]
                      })
                    })
                  }, page.id))
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
                className: "js-nav-dropdown nav-item dropdown group relative",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("button", {
                  className: "dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                    className: (0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_8__/* .isParentPageActive */ .V)(explore.pages, route.asPath) ? "text-accent dark:text-accent" : "",
                    children: "Explore"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("i", {
                    className: "lg:hidden",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      width: 24,
                      height: 24,
                      className: "h-4 w-4 dark:fill-white",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
                        fill: "none",
                        d: "M0 0h24v24H0z"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
                        d: "M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                      })]
                    })
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("ul", {
                  className: "dropdown-menu dark:bg-jacarta-800 -left-6 top-[85%] z-10 hidden grid-flow-col grid-rows-5 gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:!grid lg:translate-y-4 lg:py-8 lg:px-5 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative",
                  "aria-labelledby": "navDropdown-1",
                  children: explore?.pages?.map(page => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("li", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                      legacyBehavior: true,
                      href: "/",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("a", {
                        className: "dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors ",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                          className: "bg-light-base mr-3 rounded-xl p-[0.375rem]",
                          children: page?.icon
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                          className: "font-display text-jacarta-700 text-sm dark:text-white",
                          children: page?.name
                        })]
                      })
                    })
                  }, page.id))
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
                className: "js-nav-dropdown group relative",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("button", {
                  className: "dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                    className: (0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_8__/* .isParentPageActive */ .V)(resource.pages, route.asPath) ? "text-accent dark:text-accent" : "",
                    children: "Resources"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("i", {
                    className: "lg:hidden",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      width: 24,
                      height: 24,
                      className: "h-4 w-4 dark:fill-white",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
                        fill: "none",
                        d: "M0 0h24v24H0z"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
                        d: "M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                      })]
                    })
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("ul", {
                  className: "dropdown-menu dark:bg-jacarta-800 left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative",
                  "aria-labelledby": "navDropdown-4",
                  children: resource?.pages?.map?.(page => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("li", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                      legacyBehavior: true,
                      href: page?.path,
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("a", {
                        className: "dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                          className: `font-display ${(0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_8__/* .isChildrenPageActive */ .g)(page.path, route.asPath) ? "text-accent dark:text-accent" : "text-jacarta-700"} text-sm dark:text-white`,
                          children: page?.name
                        })
                      })
                    })
                  }, page.id))
                })]
              })]
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
          className: "hidden  justify-end lg:flex",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            legacyBehavior: true,
            href: "/collection/explore_collection",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("a", {
              className: "rounded-full bg-white py-3 px-8 text-center font-semibold text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume",
              children: [" ", "Marketplace"]
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
          className: "ml-auto flex justify-center lg:hidden",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("button", {
            className: "js-mobile-toggle border-jacarta-100 hover:bg-accent dark:hover:bg-accent focus:bg-accent group ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]",
            "aria-label": "open mobile menu",
            onClick: () => setToggle(true),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              width: 24,
              height: 24,
              className: "fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
                fill: "none",
                d: "M0 0h24v24H0z"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
                d: "M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z"
              })]
            })
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: `lg:hidden js-mobile-menu dark:bg-jacarta-800 invisible fixed inset-0 z-20 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent ${toggle ? "nav-menu--is-open" : "hidden"}`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "t-0 dark:bg-jacarta-800 fixed left-0 z-10 flex w-full items-center justify-between bg-white p-6 lg:hidden",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
          className: "dark:hidden",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
            src: _public_images_logo_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
            height: 28,
            width: 130,
            alt: "Xhibiter | NFT Marketplace",
            className: "max-h-7 h-auto "
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
          className: "hidden dark:block",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
            src: _public_images_logo_white_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
            height: 28,
            width: 130,
            alt: "Xhibiter | NFT Marketplace"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("button", {
          className: "js-mobile-close border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]",
          onClick: () => setToggle(false),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: 24,
            height: 24,
            className: "fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
              fill: "none",
              d: "M0 0h24v24H0z"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
              d: "M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
            })]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("form", {
        action: "search",
        className: "relative mt-24 mb-8 w-full lg:hidden",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("input", {
          type: "search",
          className: "text-jacarta-700 placeholder-jacarta-500 focus:ring-accent border-jacarta-100 w-full rounded-2xl border py-3 px-4 pl-10 dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white",
          placeholder: "Search"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
          className: "absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: 24,
            height: 24,
            className: "fill-jacarta-500 h-4 w-4 dark:fill-white",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
              fill: "none",
              d: "M0 0h24v24H0z"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
              d: "M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
            })]
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("nav", {
        className: "navbar w-full",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("ul", {
          className: "flex flex-col lg:flex-row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
            className: "js-nav-dropdown group relative",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("button", {
              onClick: () => mobileCollapse(home.id),
              className: "dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                className: (0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_8__/* .isParentPageActive */ .V)(home.pages, route.asPath) ? "text-accent dark:text-accent" : "",
                children: home.name
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("i", {
                className: "lg:hidden",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  width: 24,
                  height: 24,
                  className: "h-4 w-4 dark:fill-white",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
                    fill: "none",
                    d: "M0 0h24v24H0z"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
                    d: "M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                  })]
                })
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("ul", {
              className: `dropdown-menu dark:bg-jacarta-800 left-0 top-[85%] z-10 min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative ${isCollapse === home.id ? "block" : "hidden"}`,
              children: home?.pages?.map(page => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("li", {
                onClick: () => setToggle(false),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  legacyBehavior: true,
                  href: page.path,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("a", {
                    className: "dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                      className: `font-display ${(0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_8__/* .isChildrenPageActive */ .g)(route.asPath, page.path) ? "text-accent dark:text-accent" : "text-jacarta-700"} text-sm dark:text-white`,
                      children: page.name
                    }), page.condition ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                      className: "rounded bg-green py-1 px-2 text-tiny font-bold uppercase leading-none text-white ml-4",
                      children: "new"
                    }) : undefined]
                  })
                })
              }, page.id))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
            className: "js-nav-dropdown group relative",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("button", {
              onClick: () => mobileCollapse(page.id),
              className: "dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                className: (0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_8__/* .isParentPageActive */ .V)(page.pages, route.asPath) ? "text-accent dark:text-accent" : "",
                children: page.name
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("i", {
                className: "lg:hidden",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  width: 24,
                  height: 24,
                  className: "h-4 w-4 dark:fill-white",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
                    fill: "none",
                    d: "M0 0h24v24H0z"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
                    d: "M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                  })]
                })
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("ul", {
              className: `dropdown-menu left-0 top-[85%] z-10 grid-flow-row grid-cols-[repeat(2,_1fr)] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 dark:bg-jacarta-800 lg:invisible lg:absolute lg:!grid lg:translate-y-4 lg:py-8 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative ${isCollapse === page.id ? "block" : "hidden"}`,
              children: page?.pages?.map(page => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("li", {
                onClick: () => setToggle(false),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  legacyBehavior: true,
                  href: page.path,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("a", {
                    className: "dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors justify-between",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                      className: (0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_8__/* .isChildrenPageActive */ .g)(page.path, route.asPath) ? "text-accent dark:text-accent" : "",
                      children: page.name
                    }), page.condition ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                      className: "rounded bg-green py-1 px-2 text-tiny font-bold uppercase leading-none text-white ml-4",
                      children: "new"
                    }) : undefined]
                  })
                })
              }, page.id))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
            className: "js-nav-dropdown nav-item dropdown group relative",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("button", {
              onClick: () => mobileCollapse(explore.id),
              className: "dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                className: (0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_8__/* .isParentPageActive */ .V)(explore.pages, route.asPath) ? "text-accent dark:text-accent" : "",
                children: explore.name
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("i", {
                className: "lg:hidden",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  width: 24,
                  height: 24,
                  className: "h-4 w-4 dark:fill-white",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
                    fill: "none",
                    d: "M0 0h24v24H0z"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
                    d: "M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                  })]
                })
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("ul", {
              className: `dropdown-menu left-0 top-[85%] z-10 grid-flow-row grid-cols-[repeat(2,_1fr)] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 dark:bg-jacarta-800 lg:invisible lg:absolute lg:!grid lg:translate-y-4 lg:py-8 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative ${isCollapse === explore.id ? "block" : "hidden"}`,
              "aria-labelledby": "navDropdown-1",
              children: explore?.pages?.map(page => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("li", {
                onClick: () => setToggle(false),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  legacyBehavior: true,
                  href: "/",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("a", {
                    className: "dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                      className: "bg-light-base mr-3 rounded-xl p-[0.375rem]",
                      children: page.icon
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                      className: "font-display text-jacarta-700 text-sm dark:text-white",
                      children: page.name
                    })]
                  })
                })
              }, page.id))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
            className: "js-nav-dropdown group relative",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("button", {
              onClick: () => mobileCollapse(resource.id),
              className: "dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                className: (0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_8__/* .isParentPageActive */ .V)(resource.pages, route.asPath) ? "text-accent dark:text-accent" : "",
                children: resource.name
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("i", {
                className: "lg:hidden",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  width: 24,
                  height: 24,
                  className: "h-4 w-4 dark:fill-white",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
                    fill: "none",
                    d: "M0 0h24v24H0z"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
                    d: "M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                  })]
                })
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("ul", {
              className: `dropdown-menu left-0 top-[85%] z-10 grid-flow-row grid-cols-[repeat(2,_1fr)] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 dark:bg-jacarta-800 lg:invisible lg:absolute lg:!grid lg:translate-y-4 lg:py-8 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2 relative ${isCollapse === resource.id ? "block" : "hidden"}`,
              "aria-labelledby": "navDropdown-4",
              children: resource?.pages?.map(page => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("li", {
                onClick: () => setToggle(false),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  legacyBehavior: true,
                  href: page.path,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("a", {
                    className: "dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center rounded-xl px-5 py-2 transition-colors",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                      className: `font-display text-jacarta-700 text-sm dark:text-white ${(0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_8__/* .isChildrenPageActive */ .g)(page.path, route.asPath) ? "text-accent dark:text-accent" : ""}`,
                      children: page.name
                    })
                  })
                })
              }, page.id))
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("li", {
            className: "group",
            onClick: () => setToggle(false),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              legacyBehavior: true,
              href: "/create",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("a", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("button", {
                  className: "text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                    className: (0,_utils_dynamicNavigation__WEBPACK_IMPORTED_MODULE_8__/* .isChildrenPageActive */ .g)("/create", route.asPath) ? "text-accent dark:text-accent" : "",
                    children: "Create"
                  })
                })
              })
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "mt-10 w-full lg:hidden",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
          className: "js-wallet bg-accent shadow-accent-volume hover:bg-accent-dark block w-full rounded-full py-3 px-8 text-center font-semibold text-white transition-all",
          children: "MetaMask not available :"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("hr", {
          className: "dark:bg-jacarta-600 bg-jacarta-100 my-5 h-px border-0"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "flex items-center justify-center space-x-5",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("a", {
            className: "group",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("svg", {
              "aria-hidden": "true",
              focusable: "false",
              "data-prefix": "fab",
              "data-icon": "facebook",
              className: "group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white",
              role: "img",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 512 512",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
                d: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("a", {
            className: "group",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("svg", {
              "aria-hidden": "true",
              focusable: "false",
              "data-prefix": "fab",
              "data-icon": "twitter",
              className: "group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white",
              role: "img",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 512 512",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
                d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("a", {
            className: "group",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("svg", {
              "aria-hidden": "true",
              focusable: "false",
              "data-prefix": "fab",
              "data-icon": "discord",
              className: "group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white",
              role: "img",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 640 512",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
                d: "M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("a", {
            className: "group",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("svg", {
              "aria-hidden": "true",
              focusable: "false",
              "data-prefix": "fab",
              "data-icon": "instagram",
              className: "group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white",
              role: "img",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 448 512",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
                d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("a", {
            className: "group",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("svg", {
              "aria-hidden": "true",
              focusable: "false",
              "data-prefix": "fab",
              "data-icon": "tiktok",
              className: "group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white",
              role: "img",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 448 512",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("path", {
                d: "M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
              })
            })
          })]
        })]
      })]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7248:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1560);
/* harmony import */ var _modal_wallet_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3553);
/* harmony import */ var _modal_bidsModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1988);
/* harmony import */ var _modal_buyModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9583);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _header_Header01__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2317);
/* harmony import */ var _header_Header02__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2589);
/* harmony import */ var _header_Header03__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(435);
/* harmony import */ var _header_Header04__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8011);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_header_Header01__WEBPACK_IMPORTED_MODULE_5__, _header_Header02__WEBPACK_IMPORTED_MODULE_6__, _header_Header04__WEBPACK_IMPORTED_MODULE_8__]);
([_header_Header01__WEBPACK_IMPORTED_MODULE_5__, _header_Header02__WEBPACK_IMPORTED_MODULE_6__, _header_Header04__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function Layout({
  children
}) {
  const route = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)(); // header start

  let header;

  if (route.asPath === "/home/home_3" || route.asPath === "/home/home_9") {
    header = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_header_Header02__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {});
  } else if (route.asPath === "/platform_status") {
    header = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_header_Header03__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {});
  } else if (route.asPath === "/home/home_8") {
    header = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_header_Header04__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {});
  } else {
    header = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_header_Header01__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {});
  } // header end


  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [header, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_modal_wallet_modal__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_modal_bidsModal__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_modal_buyModal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("main", {
      children: children
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_footer__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {})]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _counterSliceReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4646);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const BidsModal = () => {
  const {
    bidsModal
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.counter);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    0: ETHAmount,
    1: setETHAmount
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0.05);

  const handleEThAmount = e => {
    e.preventDefault();
    setETHAmount(Number(e.target.value));
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: bidsModal ? "modal fade show block" : "modal fade",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "modal-dialog max-w-2xl",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "modal-header",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h5", {
              className: "modal-title",
              id: "placeBidLabel",
              children: "Place a bid"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
              type: "button",
              className: "btn-close",
              onClick: () => dispatch((0,_counterSliceReducer__WEBPACK_IMPORTED_MODULE_2__/* .bidsModalHide */ .Ur)()),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                width: "24",
                height: "24",
                className: "fill-jacarta-700 h-6 w-6 dark:fill-white",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("path", {
                  fill: "none",
                  d: "M0 0h24v24H0z"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("path", {
                  d: "M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                })]
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "modal-body p-6",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
              className: "mb-2 flex items-center justify-between",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                className: "font-display text-jacarta-700 text-sm font-semibold dark:text-white",
                children: "Price"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "dark:border-jacarta-600 border-jacarta-100 relative mb-2 flex items-center overflow-hidden rounded-lg border",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "border-jacarta-100 bg-jacarta-50 flex flex-1 items-center self-stretch border-r px-2",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("svg", {
                    className: "icon icon-ETH mr-1 h-5 w-5",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("use", {
                      xlinkHref: "/icons.svg#icon-ETH"
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                  className: "font-display text-jacarta-700 text-sm",
                  children: "ETH"
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", {
                type: "number",
                className: "focus:ring-accent h-12 w-full flex-[3] border-0 focus:ring-inse dark:text-jacarta-700",
                placeholder: "Amount",
                value: ETHAmount,
                onChange: e => handleEThAmount(e)
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                className: "bg-jacarta-50 border-jacarta-100 flex flex-1 justify-end self-stretch border-l dark:text-jacarta-700",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                  className: "self-center px-2 text-sm",
                  children: "$130.82"
                })
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
              className: "text-right",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                className: "dark:text-jacarta-400 text-sm",
                children: "Balance: 0.0000 WETH"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "mt-4 flex items-center space-x-2",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", {
                type: "checkbox",
                id: "terms",
                className: "checked:bg-accent dark:bg-jacarta-600 text-accent border-jacarta-200 focus:ring-accent/20 dark:border-jacarta-500 h-5 w-5 self-start rounded focus:ring-offset-0"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("label", {
                htmlFor: "terms",
                className: "dark:text-jacarta-200 text-sm",
                children: ["By checking this box, I agree to ", "Xhibiter's", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                  href: "#",
                  className: "text-accent",
                  children: "Terms of Service"
                })]
              })]
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "modal-footer",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
              className: "flex items-center justify-center space-x-4",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
                type: "button",
                className: "bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all",
                children: "Place Bid"
              })
            })
          })]
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BidsModal);

/***/ }),

/***/ 9583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ buyModal)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./components/shared/counterSliceReducer.tsx
var counterSliceReducer = __webpack_require__(4646);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/shared/metamask/Metamask.tsx
// import Image from "next/image";
 // import { useDispatch } from "react-redux";
// import { walletModalShow } from "../counterSliceReducer";




const Metamask_comp_text = () => {
  // const dispatch = useDispatch();
  // const { status, connect, account, chainId, ethereum } = useMetaMask();
  // if (status === 'initializing')
  // 	return (
  // 		<div className="js-wallet bg-accent shadow-accent-volume hover:bg-accent-dark block w-full rounded-full py-3 px-8 text-center font-semibold text-white transition-all">
  // 			Synchronisation with MetaMask ongoing...
  // 		</div>
  // 	);
  // if (status === 'unavailable')
  // 	return (
  // 		<div className="js-wallet bg-accent shadow-accent-volume hover:bg-accent-dark block w-full rounded-full py-3 px-8 text-center font-semibold text-white transition-all">
  // 			MetaMask not available :
  // 		</div>
  // 	);
  // if (status === 'notConnected')
  // 	return (
  // 		<button
  // 			className="js-wallet bg-accent shadow-accent-volume hover:bg-accent-dark block w-full rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
  // 			onClick={connect}
  // 		>
  // 			Connect Wallet
  // 		</button>
  // 	);
  // if (status === 'connecting')
  // 	return (
  // 		<div className="js-wallet bg-accent shadow-accent-volume hover:bg-accent-dark block w-full rounded-full py-3 px-8 text-center font-semibold text-white transition-all">
  // 			Connecting...
  // 		</div>
  // 	);
  // if (status === 'connected')
  // 	return (
  // 		<div>
  // 			<button
  // 				className="js-wallet bg-accent shadow-accent-volume hover:bg-accent-dark block w-full rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
  // 				onClick={() => dispatch(walletModalShow())}
  // 			>
  // 				Connect Wallet
  // 			</button>
  // 		</div>
  // 	);
  return /*#__PURE__*/_jsx(_Fragment, {});
};

const Metamask_comp_login = () => {
  // const { status, connect, account, chainId, ethereum } = useMetaMask();
  // if (status === 'initializing')
  // 	return (
  // 		<button className="js-wallet bg-accent hover:bg-accent-dark mb-4 flex w-full items-center justify-center rounded-full border-2 border-transparent py-4 px-8 text-center font-semibold text-white transition-all">
  // 			<Image
  // 				src="/images/wallets/metamask_24.svg"
  // 				className="mr-2.5 inline-block h-6 w-6"
  // 				alt=""
  // 				height={24}
  // 				width={24}
  // 			/>
  // 			<span className="ml-2.5">Metamask initializing</span>
  // 		</button>
  // 	);
  // if (status === 'unavailable')
  // 	return (
  // 		<button className="js-wallet bg-accent hover:bg-accent-dark mb-4 flex w-full items-center justify-center rounded-full border-2 border-transparent py-4 px-8 text-center font-semibold text-white transition-all">
  // 			<Image
  // 				src="/images/wallets/metamask_24.svg"
  // 				className="mr-2.5 inline-block h-6 w-6"
  // 				alt=""
  // 				height={24}
  // 				width={24}
  // 			/>
  // 			<span className="ml-2.5">unavailable</span>
  // 		</button>
  // 	);
  // if (status === 'notConnected')
  // 	return (
  // 		<button
  // 			className="js-wallet bg-accent hover:bg-accent-dark mb-4 flex w-full items-center justify-center rounded-full border-2 border-transparent py-4 px-8 text-center font-semibold text-white transition-all"
  // 			onClick={connect}
  // 		>
  // 			<Image
  // 				src="/images/wallets/metamask_24.svg"
  // 				className="inline-block h-6 w-6"
  // 				alt=""
  // 				height={24}
  // 				width={24}
  // 			/>
  // 			<span className="ml-2.5">Sign in with Metamask</span>
  // 		</button>
  // 	);
  // if (status === 'connecting')
  // 	return (
  // 		<button className="js-wallet bg-accent hover:bg-accent-dark mb-4 flex w-full items-center justify-center rounded-full border-2 border-transparent py-4 px-8 text-center font-semibold text-white transition-all">
  // 			<Image
  // 				src="/images/wallets/metamask_24.svg"
  // 				className="mr-2.5 inline-block h-6 w-6"
  // 				alt=""
  // 				height={24}
  // 				width={24}
  // 			/>
  // 			<span className="ml-2.5">Metamask connecting</span>
  // 		</button>
  // 	);
  // if (status === 'connected')
  // 	return (
  // 		<button className="js-wallet bg-accent hover:bg-accent-dark mb-4 flex w-full items-center justify-center rounded-full border-2 border-transparent py-4 px-8 text-center font-semibold text-white transition-all">
  // 			<Image
  // 				src="/images/wallets/metamask_24.svg"
  // 				className=" inline-block h-6 w-6"
  // 				alt=""
  // 				height={24}
  // 				width={24}
  // 			/>
  // 			<span className="ml-2.5">Sign in with Metamask</span>
  // 		</button>
  // 	);
  return null;
};

const Confirm_checkout = () => {
  // const { status, connect, account, chainId, ethereum } = useMetaMask();
  // if (status === 'initializing')
  // 	return (
  // 		<button
  // 			type="button"
  // 			className="bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
  // 		>
  // 			initializing
  // 		</button>
  // 	);
  // if (status === 'unavailable')
  // 	return (
  // 		<button
  // 			type="button"
  // 			className="bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
  // 		>
  // 			unavailable
  // 		</button>
  // 	);
  // if (status === 'notConnected')
  // 	return (
  // 		<button
  // 			type="button"
  // 			className="bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
  // 			onClick={connect}
  // 		>
  // 			Confirm Checkout
  // 		</button>
  // 	);
  // if (status === 'connecting')
  // 	return (
  // 		<button
  // 			type="button"
  // 			className="bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
  // 		>
  // 			connecting
  // 		</button>
  // 	);
  // if (status === 'connected')
  // 	return (
  // 		<button
  // 			type="button"
  // 			className="bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
  // 		>
  // 			Confirm Checkout
  // 		</button>
  // 	);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
};

const Metamask_comp_icon = ({
  prop
}) => {
  // const dispatch = useDispatch();
  // const { status, connect, account, chainId, ethereum } = useMetaMask();
  // if (status === 'initializing')
  // 	return (
  // 		<div>
  // 			<button
  // 				className={
  // 					prop.asPath === '/home/home_3'
  // 						? 'js-wallet border-jacarta-100  focus:bg-accent group hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent border-transparent bg-white/[.15]'
  // 						: 'js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]'
  // 				}
  // 				// onClick={() => dispatch(walletModalShow())}
  // 			>
  // 				<svg
  // 					xmlns="http://www.w3.org/2000/svg"
  // 					viewBox="0 0 24 24"
  // 					width="24"
  // 					height="24"
  // 					className={
  // 						prop.asPath === '/home/home_3'
  // 							? ' h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white fill-white'
  // 							: 'fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white'
  // 					}
  // 				>
  // 					<path fill="none" d="M0 0h24v24H0z"></path>
  // 					<path d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z"></path>
  // 				</svg>
  // 			</button>
  // 		</div>
  // 	);
  // if (status === 'unavailable')
  // 	return (
  // 		<div>
  // 			<button
  // 				className={
  // 					prop.asPath === '/home/home_3'
  // 						? 'js-wallet border-jacarta-100  focus:bg-accent group hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent border-transparent bg-white/[.15]'
  // 						: 'js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]'
  // 				}
  // 				// onClick={() => dispatch(walletModalShow())}
  // 			>
  // 				<svg
  // 					xmlns="http://www.w3.org/2000/svg"
  // 					viewBox="0 0 24 24"
  // 					width="24"
  // 					height="24"
  // 					className={
  // 						prop.asPath === '/home/home_3'
  // 							? ' h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white fill-white'
  // 							: 'fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white'
  // 					}
  // 				>
  // 					<path fill="none" d="M0 0h24v24H0z"></path>
  // 					<path d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z"></path>
  // 				</svg>
  // 			</button>
  // 		</div>
  // 	);
  // if (status === 'notConnected')
  // 	return (
  // 		<button
  // 			className={
  // 				prop.asPath === '/home/home_3'
  // 					? 'js-wallet border-jacarta-100  focus:bg-accent group hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent border-transparent bg-white/[.15]'
  // 					: 'js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]'
  // 			}
  // 			// onClick={() => dispatch(walletModalShow())}
  // 			onClick={connect}
  // 		>
  // 			<svg
  // 				xmlns="http://www.w3.org/2000/svg"
  // 				viewBox="0 0 24 24"
  // 				width="24"
  // 				height="24"
  // 				className={
  // 					prop.asPath === '/home/home_3'
  // 						? ' h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white fill-white'
  // 						: 'fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white'
  // 				}
  // 			>
  // 				<path fill="none" d="M0 0h24v24H0z"></path>
  // 				<path d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z"></path>
  // 			</svg>
  // 		</button>
  // 	);
  // if (status === 'connecting')
  // 	return (
  // 		<div>
  // 			<button
  // 				className={
  // 					prop.asPath === '/home/home_3'
  // 						? 'js-wallet border-jacarta-100  focus:bg-accent group hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent border-transparent bg-white/[.15]'
  // 						: 'js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]'
  // 				}
  // 				// onClick={() => dispatch(walletModalShow())}
  // 			>
  // 				<svg
  // 					xmlns="http://www.w3.org/2000/svg"
  // 					viewBox="0 0 24 24"
  // 					width="24"
  // 					height="24"
  // 					className={
  // 						prop.asPath === '/home/home_3'
  // 							? ' h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white fill-white'
  // 							: 'fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white'
  // 					}
  // 				>
  // 					<path fill="none" d="M0 0h24v24H0z"></path>
  // 					<path d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z"></path>
  // 				</svg>
  // 			</button>
  // 		</div>
  // 	);
  // if (status === 'connected')
  // 	return (
  // 		<div>
  // 			<button
  // 				className={
  // 					prop.asPath === '/home/home_3'
  // 						? 'js-wallet border-jacarta-100  focus:bg-accent group hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent border-transparent bg-white/[.15]'
  // 						: 'js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]'
  // 				}
  // 				onClick={() => dispatch(walletModalShow())}
  // 			>
  // 				<svg
  // 					xmlns="http://www.w3.org/2000/svg"
  // 					viewBox="0 0 24 24"
  // 					width="24"
  // 					height="24"
  // 					className={
  // 						prop.asPath === '/home/home_3'
  // 							? ' h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white fill-white'
  // 							: 'fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white'
  // 					}
  // 				>
  // 					<path fill="none" d="M0 0h24v24H0z"></path>
  // 					<path d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z"></path>
  // 				</svg>
  // 			</button>
  // 		</div>
  // 	);
  return null;
};


;// CONCATENATED MODULE: ./components/shared/modal/buyModal.tsx








const BuyModal = () => {
  const {
    buyModal
  } = (0,external_react_redux_.useSelector)(state => state.counter);
  const dispatch = (0,external_react_redux_.useDispatch)();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: buyModal ? "modal fade show block" : "modal fade",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "modal-dialog max-w-2xl",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "modal-header",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
              className: "modal-title",
              id: "buyNowModalLabel",
              children: "Complete checkout"
            }), /*#__PURE__*/jsx_runtime_.jsx("button", {
              type: "button",
              className: "btn-close",
              onClick: () => dispatch((0,counterSliceReducer/* buyModalHide */.TO)()),
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                width: "24",
                height: "24",
                className: "fill-jacarta-700 h-6 w-6 dark:fill-white",
                children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                  fill: "none",
                  d: "M0 0h24v24H0z"
                }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                  d: "M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                })]
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "modal-body p-6",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "mb-2 flex items-center justify-between",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "font-display text-jacarta-700 text-sm font-semibold dark:text-white",
                children: "Item"
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "font-display text-jacarta-700 text-sm font-semibold dark:text-white",
                children: "Subtotal"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "dark:border-jacarta-600 border-jacarta-100 relative flex items-center border-t border-b py-4",
              children: [/*#__PURE__*/jsx_runtime_.jsx("figure", {
                className: "mr-5 self-start",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/images/avatars/avatar_2.jpg",
                  alt: "avatar 2",
                  className: "rounded-2lg",
                  loading: "lazy"
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "collection.html",
                  className: "text-accent text-sm",
                  children: "Elon Musk #709"
                }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
                  className: "font-display text-jacarta-700 mb-1 text-base font-semibold dark:text-white",
                  children: "Lazyone Panda"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "flex flex-wrap items-center",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "dark:text-jacarta-300 text-jacarta-500 mr-1 block text-sm",
                    children: "Creator Earnings: 5%"
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    "data-tippy-content": "The creator of this collection will receive 5% of the sale total from future sales of this item.",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      width: "24",
                      height: "24",
                      className: "dark:fill-jacarta-300 fill-jacarta-700 h-4 w-4",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                        fill: "none",
                        d: "M0 0h24v24H0z"
                      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                        d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"
                      })]
                    })
                  })]
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "ml-auto",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                  className: "mb-1 flex items-center whitespace-nowrap",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    "data-tippy-content": "ETH",
                    children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
                      className: "h-4 w-4",
                      children: /*#__PURE__*/jsx_runtime_.jsx("use", {
                        xlinkHref: "/icons.svg#icon-ETH"
                      })
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "dark:text-jacarta-100 text-sm font-medium tracking-tight",
                    children: "1.55 ETH"
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "dark:text-jacarta-300 text-right text-sm",
                  children: "$130.82"
                })]
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "dark:border-jacarta-600 border-jacarta-100 mb-2 flex items-center justify-between border-b py-2.5",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white",
                children: "Total"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "ml-auto",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                  className: "flex items-center whitespace-nowrap",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    "data-tippy-content": "ETH",
                    children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
                      className: "h-4 w-4",
                      children: /*#__PURE__*/jsx_runtime_.jsx("use", {
                        xlinkHref: "/icons.svg#icon-ETH"
                      })
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "text-green font-medium tracking-tight",
                    children: "1.55 ETH"
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "dark:text-jacarta-300 text-right",
                  children: "$130.82"
                })]
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "mt-4 flex items-center space-x-2",
              children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "checkbox",
                id: "buyNowTerms",
                className: "checked:bg-accent dark:bg-jacarta-600 text-accent border-jacarta-200 focus:ring-accent/20 dark:border-jacarta-500 h-5 w-5 self-start rounded focus:ring-offset-0"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
                htmlFor: "buyNowTerms",
                className: "dark:text-jacarta-200 text-sm",
                children: ["By checking this box, I agree to ", "Xhibiter's", " ", /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  legacyBehavior: true,
                  href: "/tarms",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "text-accent",
                    children: "Terms of Service"
                  })
                })]
              })]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "modal-footer",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "flex items-center justify-center space-x-4",
              children: /*#__PURE__*/jsx_runtime_.jsx(Confirm_checkout, {})
            })
          })]
        })
      })
    })
  });
};

/* harmony default export */ const buyModal = (BuyModal);

/***/ }),

/***/ 3553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _counterSliceReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4646);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const Wallet_modal = () => {
  const walletModal = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.counter.walletModal);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: walletModal ? "block modal fade show " : "modal fade hidden",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "modal-dialog max-w-lg",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "modal-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "modal-header",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h5", {
              className: "modal-title",
              id: "walletModalLabel",
              children: "Connect your wallet"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
              type: "button",
              className: "btn-close",
              onClick: () => dispatch((0,_counterSliceReducer__WEBPACK_IMPORTED_MODULE_2__/* .walletModalhide */ .J4)()),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                width: "24",
                height: "24",
                className: "fill-jacarta-700 h-6 w-6 dark:fill-white",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("path", {
                  fill: "none",
                  d: "M0 0h24v24H0z"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("path", {
                  d: "M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                })]
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "modal-body p-6 text-center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("svg", {
              className: "icon icon-metamask mb-4 inline-block h-8 w-8",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("use", {
                xlinkHref: "/icons.svg#icon-metamask"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
              className: "text-center dark:text-white",
              children: ["You ", "don't", " have MetaMask in your browser, please download it from", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                href: "https://metamask.io/",
                className: "text-accent",
                target: "_blank",
                rel: "noreferrer noopener",
                children: "\xA0 MetaMask"
              })]
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "modal-footer",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
              className: "flex items-center justify-center space-x-4",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                href: "https://metamask.io/",
                target: "_blank",
                rel: "noreferrer noopener",
                className: "bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all",
                children: "Get Metamask"
              })
            })
          })]
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wallet_modal);

/***/ }),

/***/ 3026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DarkMode)
/* harmony export */ });
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




function DarkMode() {
  const {
    theme,
    setTheme
  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_0__.useTheme)(); // toggle of dark & light mode

  const toggle = () => {
    if (theme === "light") setTheme("dark");else setTheme("light");
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
      className: "js-dark-mode-trigger dark:bg-accent group ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-jacarta-100 bg-white transition-colors hover:border-transparent hover:bg-accent focus:border-transparent focus:bg-accent dark:border-transparent dark:bg-white/[.15] dark:hover:bg-accent",
      "aria-label": "light",
      onClick: toggle,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        className: "dark-mode-light h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:hidden",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
          fill: "none",
          d: "M0 0h24v24H0z"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
          d: "M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        className: "dark-mode-dark hidden h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:block dark:fill-white",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
          fill: "none",
          d: "M0 0h24v24H0z"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
          d: "M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"
        })]
      })]
    })
  });
}

/***/ }),

/***/ 8662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ WalletButton)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

function WalletButton() {
  const dispath = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(); // const walletHandler = () => {
  //   if (status === "unavailable") {
  //     dispath(walletModalShow());
  //   }
  // };
  // if (status === "initializing") return <div>Ongoing...</div>;
  // if (status === "unavailable")
  //   return (
  //     <button
  //       onClick={walletHandler}
  //       className="js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
  //     >
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         viewBox="0 0 24 24"
  //         width={24}
  //         height={24}
  //         className="h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
  //       >
  //         <path fill="none" d="M0 0h24v24H0z" />
  //         <path d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z" />
  //       </svg>
  //     </button>
  //   );
  // if (status === "notConnected")
  //   return (
  //     <button
  //       onClick={connect}
  //       className="js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
  //     >
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         viewBox="0 0 24 24"
  //         width={24}
  //         height={24}
  //         className="h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
  //       >
  //         <path fill="none" d="M0 0h24v24H0z" />
  //         <path d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z" />
  //       </svg>
  //     </button>
  //   );
  // if (status === "connecting") return <div>Connecting...</div>;

  return null;
}

/***/ }),

/***/ 3262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ WalletButtonLight)
/* harmony export */ });
// import { useDispatch } from "react-redux";
// import { walletModalShow } from "../counterSliceReducer";
function WalletButtonLight() {
  // const dispath = useDispatch();
  // const walletHandler = () => {
  //   if (status === "unavailable") {
  //     dispath(walletModalShow());
  //   }
  // };
  // if (status === "initializing")
  //   return <div className="text-white">Ongoing...</div>;
  // if (status === "unavailable")
  //   return (
  //     <button
  //       onClick={walletHandler}
  //       className="js-wallet border-jacarta-100  focus:bg-accent group hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent border-transparent bg-white/[.15]"
  //     >
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         viewBox="0 0 24 24"
  //         width={24}
  //         height={24}
  //         className=" h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white fill-white"
  //       >
  //         <path fill="none" d="M0 0h24v24H0z" />
  //         <path d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z" />
  //       </svg>
  //     </button>
  //   );
  // if (status === "notConnected")
  //   return (
  //     <button
  //       onClick={connect}
  //       className="js-wallet border-jacarta-100  focus:bg-accent group hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent border-transparent bg-white/[.15]"
  //     >
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         viewBox="0 0 24 24"
  //         width={24}
  //         height={24}
  //         className=" h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white fill-white"
  //       >
  //         <path fill="none" d="M0 0h24v24H0z" />
  //         <path d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z" />
  //       </svg>
  //     </button>
  //   );
  // if (status === "connecting")
  //   return <div className="text-white">Connecting...</div>;
  return null;
}

/***/ }),

/***/ 470:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _linguiTranslation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4641);
/* harmony import */ var _lingui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4238);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1815);
/* harmony import */ var _components_shared_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7248);
/* harmony import */ var _components_shared_Meta__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(634);
/* harmony import */ var _components_shared_UserContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9610);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4428);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_linguiTranslation__WEBPACK_IMPORTED_MODULE_5__, _lingui_core__WEBPACK_IMPORTED_MODULE_6__, _lingui_react__WEBPACK_IMPORTED_MODULE_7__, _components_shared_layout__WEBPACK_IMPORTED_MODULE_8__]);
([_linguiTranslation__WEBPACK_IMPORTED_MODULE_5__, _lingui_core__WEBPACK_IMPORTED_MODULE_6__, _lingui_react__WEBPACK_IMPORTED_MODULE_7__, _components_shared_layout__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















(0,_linguiTranslation__WEBPACK_IMPORTED_MODULE_5__/* .initTranslation */ .Q)(_lingui_core__WEBPACK_IMPORTED_MODULE_6__.i18n);

function MyApp({
  Component,
  pageProps
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const pid = router.asPath;
  const locale = router.locale || router.defaultLocale;
  const firstRender = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(true);
  const scrollRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)({
    scrollPos: 0
  }); // run only once on the first render (for server side)

  if (pageProps.translation && firstRender.current) {
    _lingui_core__WEBPACK_IMPORTED_MODULE_6__.i18n.load(locale, pageProps.translation);
    _lingui_core__WEBPACK_IMPORTED_MODULE_6__.i18n.activate(locale);
    firstRender.current = false;
  } // useEffect(() => {
  //   // if (pid === '/home/home_8') {
  //   // 	const html = document.querySelector('html');
  //   // 	html.classList.remove('light');
  //   // 	html.classList.add('dark');
  //   // }
  // }, []);


  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (pageProps.translation) {
      _lingui_core__WEBPACK_IMPORTED_MODULE_6__.i18n.load(locale, pageProps.translation);
      _lingui_core__WEBPACK_IMPORTED_MODULE_6__.i18n.activate(locale);
    }
  }, [locale, pageProps.translation]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_lingui_react__WEBPACK_IMPORTED_MODULE_7__.I18nProvider, {
    i18n: _lingui_core__WEBPACK_IMPORTED_MODULE_6__.i18n,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_shared_Meta__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      title: "Isolux || Aparcamientos | Isolux Aparcamientos | Spain | Espa\xF1a"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
      store: _store_store__WEBPACK_IMPORTED_MODULE_11__/* .store */ .h,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(next_themes__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {
        enableSystem: false,
        attribute: "class",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_shared_UserContext__WEBPACK_IMPORTED_MODULE_10__/* ["default"].Provider */ .Z.Provider, {
          value: {
            scrollRef: scrollRef
          },
          children: pid === "/login" ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(Component, _objectSpread({}, pageProps)) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_shared_layout__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(Component, _objectSpread({}, pageProps))
          })
        })
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_shared_counterSliceReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4646);
 // import counterReducer from '../features/counter/counterSlice';


const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
  reducer: {
    counter: _components_shared_counterSliceReducer__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP
  }
});

/***/ }),

/***/ 7501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ isParentPageActive),
/* harmony export */   "g": () => (/* binding */ isChildrenPageActive)
/* harmony export */ });
/* -------------------------------------------------------------------------- */

/*                      is children page active checking                      */

/* -------------------------------------------------------------------------- */
function isChildrenPageActive(path, match) {
  if (path && match) {
    if (path === match) {
      return true;
    }

    return false;
  }

  return false;
}
/* -------------------------------------------------------------------------- */

/*                       is parent page active checking                       */

/* -------------------------------------------------------------------------- */

function isParentPageActive(pages, path) {
  if (pages) {
    return pages.some(page => page.path === path);
  }

  return false;
}

/***/ }),

/***/ 8350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.be184486.png","height":72,"width":350,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAFVBMVEXyVG3yVG3zaX/zaH7yVm/zaoD0cIVsayxkAAAAB3RSTlM8MaFaTXhrWbL9KwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABpJREFUeJxjYGJkYGRkYGFhYGJmZWVjZmAAAAEwACYbGVSZAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":2});

/***/ }),

/***/ 7337:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo_white.9d1021e6.png","height":56,"width":259,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAG1BMVEX////////////////////////////////+/v5o230/AAAACXRSTlOXhcJtfEtFoa6ptzNQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGklEQVR4nGNgYGZkZmRkZWNgYGFi52BgYgQAAXcALSqPH94AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":2});

/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 1162:
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4238:
/***/ ((module) => {

"use strict";
module.exports = import("@lingui/core");;

/***/ }),

/***/ 1815:
/***/ ((module) => {

"use strict";
module.exports = import("@lingui/react");;

/***/ }),

/***/ 1173:
/***/ ((module) => {

"use strict";
module.exports = import("make-plural/plurals");;

/***/ }),

/***/ 6555:
/***/ ((module) => {

"use strict";
module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,676,61,634,646,112], () => (__webpack_exec__(470)));
module.exports = __webpack_exports__;

})();