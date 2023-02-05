exports.id = 370;
exports.ids = [370];
exports.modules = {

/***/ 3169:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9176);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2555);
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8933);
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _carousel_bidsCarousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(670);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_component__WEBPACK_IMPORTED_MODULE_2__, _carousel_bidsCarousel__WEBPACK_IMPORTED_MODULE_4__]);
([_component__WEBPACK_IMPORTED_MODULE_2__, _carousel_bidsCarousel__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const Bids = ({
  classes = "pt-10 pb-24",
  bgWhite = false
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("section", {
    className: classes,
    children: [bgWhite && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("picture", {
      className: "pointer-events-none absolute inset-0 -z-10 dark:hidden",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("img", {
        src: "/images/gradient_light.jpg",
        alt: "gradient",
        className: "h-full w-full"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_component__WEBPACK_IMPORTED_MODULE_2__/* .HeadLine */ .Sn, {
        text: "Hot Bids",
        image: "https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/1f525.png",
        classes: "font-display text-jacarta-700 mb-8 text-center text-3xl dark:text-white"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        className: "relative",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_carousel_bidsCarousel__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bids);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ newseLatter)
});

// EXTERNAL MODULE: ./components/shared/headLine.tsx
var headLine = __webpack_require__(7267);
;// CONCATENATED MODULE: ./data/shared/newseLatterData.tsx
const newseLatterData = [{
  id: '1',
  icon: {
    parentBg: '#beaaf7',
    childBg: 'rgb(131 88 255) ',
    svg: 'icon-wallet'
  },
  title: ['Set', 'up', 'your', 'wallet'],
  text: "Once you've set up your wallet of choice, connect it to OpenSeaby clicking the NFT Marketplacein the topright corner."
}, {
  id: '2',
  icon: {
    parentBg: '#c4f2e3',
    childBg: 'rgb(16 185 129)',
    svg: 'icon-wallet'
  },
  title: ['Create', 'Your', 'Collection'],
  text: 'Click Create and set up your collection. Add social links, a description, profile & banner images, andset a secondary sales fee.'
}, {
  id: '3',
  icon: {
    parentBg: '#cddffb',
    childBg: 'rgb(66 138 248)',
    svg: 'icon-gallery'
  },
  title: ['Add', 'Your', 'NFTs'],
  text: 'Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTswith properties, stats.'
}, {
  id: '4',
  icon: {
    parentBg: '#ffd0d0',
    childBg: 'rgb(239 68 68)',
    svg: 'icon-list'
  },
  title: ['List', 'Them', 'For', 'Sale'],
  text: 'Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want tosell your NFTs!'
}];

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/shared/blog/newseLatter.tsx






const NewseLatter = ({
  bgWhite = true
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: "dark:bg-jacarta-800 relative py-24",
    children: [bgWhite && /*#__PURE__*/jsx_runtime_.jsx("picture", {
      className: "pointer-events-none absolute inset-0 -z-10 dark:hidden",
      children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
        src: "/images/gradient_light.jpg",
        alt: "gradient",
        className: "h-full",
        layout: "fill"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx(headLine/* default */.Z, {
        text: "Create and sell your NFTs",
        classes: "font-display text-jacarta-700 mb-16 text-center text-3xl dark:text-white"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4",
        children: newseLatterData.map(item => {
          const {
            id,
            icon,
            title,
            text
          } = item;
          return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "text-center newseLatter-item",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: `mb-6 inline-flex rounded-full p-3`,
              style: {
                backgroundColor: icon.parentBg
              },
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: `inline-flex h-12 w-12 items-center justify-center rounded-full`,
                style: {
                  backgroundColor: icon.childBg
                },
                children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
                  className: "icon icon-wallet h-5 w-5 fill-white",
                  children: /*#__PURE__*/jsx_runtime_.jsx("use", {
                    xlinkHref: `/icons.svg#${icon.svg}`
                  })
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
              className: "font-display text-jacarta-700 mb-4 text-lg dark:text-white",
              children: [id, ". ", title]
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "dark:text-jacarta-300",
              children: text
            })]
          }, id);
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "text-jacarta-700 mx-auto mt-20 max-w-2xl text-center text-lg dark:text-white",
        children: "Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating Xhibiter"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "mx-auto mt-7 max-w-md text-center",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
          className: "relative",
          onSubmit: e => e.preventDefault(),
          children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
            type: "email",
            placeholder: "Email address",
            className: "dark:bg-jacarta-700 dark:border-jacarta-600 focus:ring-accent border-jacarta-100 w-full rounded-full border py-3 px-4 dark:text-white dark:placeholder-white"
          }), /*#__PURE__*/jsx_runtime_.jsx("button", {
            className: "hover:bg-accent-dark font-display bg-accent absolute top-2 right-2 rounded-full px-6 py-2 text-sm text-white",
            children: "Subscribe"
          })]
        })
      })]
    })]
  });
};

/* harmony default export */ const newseLatter = (NewseLatter);

/***/ }),

/***/ 874:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3015);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9176);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8933);
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_shared_Browse_category_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2887);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_1__]);
swiper_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const Browse_category_carousel = () => {
  return /*#__PURE__*/_jsx("div", {
    className: "overflow-hidden",
    children: /*#__PURE__*/_jsx(Swiper, {
      slidesPerView: "auto",
      spaceBetween: 10,
      loop: true,
      breakpoints: {
        // when window width is >= 640px
        100: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        // when window width is >= 768px
        700: {
          slidesPerView: 4,
          spaceBetween: 20
        },
        900: {
          slidesPerView: 5,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 7,
          spaceBetween: 30
        }
      },
      className: " card-slider-4-columns !py-5",
      style: {
        transform: 'scaleX(1.2)'
      },
      children: Browse_category_data.map(item => {
        const {
          id,
          image,
          title,
          bgColor
        } = item;
        return /*#__PURE__*/_jsx(SwiperSlide, {
          children: /*#__PURE__*/_jsx("article", {
            children: /*#__PURE__*/_jsx(Link, {
              legacyBehavior: true,
              href: "/collection/explore_collection",
              children: /*#__PURE__*/_jsxs("a", {
                className: "dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg",
                children: [/*#__PURE__*/_jsx("figure", {
                  style: {
                    backgroundColor: bgColor
                  },
                  className: ` rounded-t-[0.625rem] w-full rounded-[0.625rem`,
                  children: /*#__PURE__*/_jsx("img", {
                    src: image,
                    alt: "item 1",
                    className: "w-full"
                  })
                }), /*#__PURE__*/_jsx("div", {
                  className: "mt-4 text-center",
                  children: /*#__PURE__*/_jsx("span", {
                    className: "font-display text-jacarta-700 text-lg dark:text-white",
                    children: title
                  })
                })]
              })
            })
          })
        }, id);
      })
    })
  });
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Browse_category_carousel)));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9905:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3877);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9176);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8933);
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data_shared_Feature_collections_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2956);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_0__, swiper__WEBPACK_IMPORTED_MODULE_1__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_0__, swiper__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const Feature_collections_carousel = () => {
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(Swiper, {
      modules: [Navigation, Pagination, Scrollbar],
      breakpoints: {
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1100: {
          slidesPerView: 4,
          spaceBetween: 30
        }
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      className: " card-slider-4-columns !py-5",
      children: Feature_collections_data.map(item => {
        const {
          id,
          bigImage,
          subImage1,
          subImage2,
          subImage3,
          userImage,
          title,
          itemsCount,
          userName
        } = item;
        const itemLink = bigImage.split("/").slice(-1).toString().split("_").slice(1, 2).toString();
        return /*#__PURE__*/_jsx(SwiperSlide, {
          children: /*#__PURE__*/_jsx("article", {
            children: /*#__PURE__*/_jsxs("div", {
              className: "dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2xl border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg",
              children: [/*#__PURE__*/_jsx(Link, {
                legacyBehavior: true,
                href: `/item/item_${itemLink}`,
                children: /*#__PURE__*/_jsxs("a", {
                  className: "flex space-x-[0.625rem]",
                  children: [/*#__PURE__*/_jsx("figure", {
                    className: "w-[74.5%] h-full",
                    children: /*#__PURE__*/_jsx(Image, {
                      src: bigImage,
                      alt: "item 1",
                      className: "rounded-[0.625rem]",
                      width: 150,
                      height: 240,
                      objectFit: "cover",
                      layout: "responsive"
                    })
                  }), /*#__PURE__*/_jsxs("span", {
                    className: "flex w-1/3 flex-col space-y-[0.625rem]",
                    children: [/*#__PURE__*/_jsx("img", {
                      src: subImage1,
                      alt: "item 1",
                      className: "h-full rounded-[0.625rem] object-cover",
                      loading: "lazy"
                    }), /*#__PURE__*/_jsx("img", {
                      src: subImage2,
                      alt: "item 1",
                      className: "h-full rounded-[0.625rem] object-cover",
                      loading: "lazy"
                    }), /*#__PURE__*/_jsx("img", {
                      src: subImage3,
                      alt: "item 1",
                      className: "h-full rounded-[0.625rem] object-cover",
                      loading: "lazy"
                    })]
                  })]
                })
              }), /*#__PURE__*/_jsx(Link, {
                legacyBehavior: true,
                href: `/item/item_${itemLink}`,
                children: /*#__PURE__*/_jsx("a", {
                  className: "font-display hover:text-accent dark:hover:text-accent text-jacarta-700 mt-4 block text-base dark:text-white",
                  children: title
                })
              }), /*#__PURE__*/_jsxs("div", {
                className: "mt-2 flex items-center justify-between text-sm font-medium tracking-tight",
                children: [/*#__PURE__*/_jsxs("div", {
                  className: "flex flex-wrap items-center",
                  children: [/*#__PURE__*/_jsx(Link, {
                    legacyBehavior: true,
                    href: `/item/item_${itemLink}`,
                    children: /*#__PURE__*/_jsx("a", {
                      className: "mr-2 shrink-0",
                      children: /*#__PURE__*/_jsx("img", {
                        src: userImage,
                        alt: "owner",
                        className: "h-5 w-5 rounded-full"
                      })
                    })
                  }), /*#__PURE__*/_jsx("span", {
                    className: "dark:text-jacarta-400 mr-1",
                    children: "by"
                  }), /*#__PURE__*/_jsx(Link, {
                    legacyBehavior: true,
                    href: `/item/item_${itemLink}`,
                    children: /*#__PURE__*/_jsx("a", {
                      className: "text-accent",
                      children: /*#__PURE__*/_jsx("span", {
                        children: userName
                      })
                    })
                  })]
                }), /*#__PURE__*/_jsxs("span", {
                  className: "dark:text-jacarta-300 text-sm",
                  children: [itemsCount, " Items"]
                })]
              })]
            })
          })
        }, id);
      })
    }), /*#__PURE__*/_jsx("div", {
      className: "group swiper-button-prev shadow-white-volume absolute !top-1/2 !-left-4 z-10 -mt-6 flex !h-12 !w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-jacarta-700 text-xl sm:!-left-6 after:hidden",
      children: /*#__PURE__*/_jsx(MdKeyboardArrowLeft, {})
    }), /*#__PURE__*/_jsx("div", {
      className: "group swiper-button-next shadow-white-volume absolute !top-1/2 !-right-4 z-10 -mt-6 flex !h-12 !w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-jacarta-700 text-xl sm:!-right-6 after:hidden",
      children: /*#__PURE__*/_jsx(MdKeyboardArrowRight, {})
    })]
  });
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Feature_collections_carousel)));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 670:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3877);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9176);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8933);
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_shared_bids_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8567);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4787);
/* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tippyjs_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _counterSliceReducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4646);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _likes_likes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8582);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_0__, swiper__WEBPACK_IMPORTED_MODULE_1__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_0__, swiper__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const BidsCarousel = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_11__.useDispatch)();

  const handleclick = () => {
    console.log("clicked on ");
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_0__.Swiper, {
      modules: [swiper__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_1__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_1__.Scrollbar],
      spaceBetween: 30,
      slidesPerView: "auto",
      loop: true,
      breakpoints: {
        240: {
          slidesPerView: 1
        },
        565: {
          slidesPerView: 2
        },
        1000: {
          slidesPerView: 3
        },
        1100: {
          slidesPerView: 4
        }
      },
      navigation: {
        nextEl: ".bids-swiper-button-next",
        prevEl: ".bids-swiper-button-prev"
      },
      className: " card-slider-4-columns !py-5",
      children: _data_shared_bids_data__WEBPACK_IMPORTED_MODULE_6__/* .bidsData.map */ .c.map(item => {
        const {
          id,
          image,
          title,
          bid_number,
          eth_number,
          react_number
        } = item;
        const itemLink = image.split("/").slice(-1).toString().replace(".jpg", "");
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_0__.SwiperSlide, {
          className: "text-white",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("article", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
              className: "dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg text-jacarta-500",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("figure", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                  legacyBehavior: true,
                  href: "/item/" + itemLink,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("a", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
                      className: "w-full",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                        src: image,
                        alt: title,
                        height: 230,
                        width: 230,
                        layout: "responsive",
                        objectFit: "cover",
                        className: "rounded-[0.625rem] w-full",
                        loading: "lazy"
                      })
                    })
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                className: "mt-4 flex items-center justify-between",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                  legacyBehavior: true,
                  href: "/item/" + itemLink,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("a", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("span", {
                      className: "font-display text-jacarta-700 hover:text-accent text-base dark:text-white",
                      children: title
                    })
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("span", {
                  className: "dark:border-jacarta-600 border-jacarta-100 flex items-center whitespace-nowrap rounded-md border py-1 px-2",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((_tippyjs_react__WEBPACK_IMPORTED_MODULE_8___default()), {
                    content: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("span", {
                      children: "ETH"
                    }),
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("img", {
                      src: "/images/eth-icon.svg",
                      alt: "",
                      className: "w-3 h-3 mr-1"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("span", {
                    className: "text-green text-sm font-medium tracking-tight",
                    children: [eth_number, " ETH"]
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                className: "mt-2 text-sm",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("span", {
                  className: "dark:text-jacarta-300 text-jacarta-500",
                  children: "Current Bid"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("span", {
                  className: "dark:text-jacarta-100 text-jacarta-700",
                  children: [bid_number, " ETH"]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                className: "mt-8 flex items-center justify-between",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("button", {
                  type: "button",
                  className: "text-accent font-display text-sm font-semibold",
                  onClick: () => dispatch((0,_counterSliceReducer__WEBPACK_IMPORTED_MODULE_10__/* .bidsModalShow */ .$f)()),
                  children: "Place bid"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_likes_likes__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                  like: react_number,
                  classes: "flex items-center space-x-1"
                })]
              })]
            })
          })
        }, id);
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
      className: "group bids-swiper-button-prev swiper-button-prev shadow-white-volume absolute !top-1/2 !-left-4 z-10 -mt-6 flex !h-12 !w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-jacarta-700 text-xl sm:!-left-6 after:hidden",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdKeyboardArrowLeft, {})
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx("div", {
      className: "group bids-swiper-button-next swiper-button-next shadow-white-volume absolute !top-1/2 !-right-4 z-10 -mt-6 flex !h-12 !w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-jacarta-700 text-xl sm:!-right-6 after:hidden",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdKeyboardArrowRight, {})
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BidsCarousel);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7065:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/shared/headLine.tsx
var headLine = __webpack_require__(7267);
;// CONCATENATED MODULE: ./data/shared/auctions_category_data.tsx
const auctions_category_data_auctions_category_data = [{
  id: "0Monkeyme#155",
  bigImage: "/images/products/item_8.jpg",
  creatorImage: "/images/avatars/creator_1.png",
  ownerImage: "/images/avatars/owner_1.png",
  price: "1.3 ETH",
  title: "Monkeyme#155",
  likes: "25",
  auction_timer: "000"
}, {
  id: "1Splendid Girl",
  bigImage: "/images/products/item_6.jpg",
  creatorImage: "/images/avatars/creator_4.png",
  ownerImage: "/images/avatars/owner_4.png",
  price: "10 ETH",
  title: "Splendid Girl",
  likes: "60",
  auction_timer: "000"
}, {
  id: "2Asuna #1649",
  bigImage: "/images/products/item_11.jpg",
  creatorImage: "/images/avatars/creator_8.png",
  ownerImage: "/images/avatars/owner_5.png",
  price: "0.8 ETH",
  title: "Asuna #1649",
  likes: "34",
  auction_timer: "000"
}, {
  id: "3Artof Eve",
  bigImage: "/images/products/item_10.jpg",
  creatorImage: "/images/avatars/creator_2.png",
  ownerImage: "/images/avatars/owner_7.png",
  price: "1.75 ETH",
  title: "Artof Eve",
  likes: "15",
  auction_timer: "550000000"
}, {
  id: "4Azuki #4017",
  bigImage: "/images/products/item_17.jpg",
  creatorImage: "/images/avatars/creator_2.png",
  ownerImage: "/images/avatars/owner_2.png",
  price: "9.3712 ETH",
  title: "Azuki #4017",
  likes: "334",
  auction_timer: "000"
}, {
  id: "5Block #2788",
  bigImage: "/images/products/item_18.jpg",
  creatorImage: "/images/avatars/creator_9.png",
  ownerImage: "/images/avatars/owner_8.png",
  price: "7.3 ETH",
  title: "Block #2788",
  likes: "52",
  auction_timer: "560000000"
}, {
  id: "6Crypto bull #6195",
  bigImage: "/images/products/item_19.jpg",
  creatorImage: "/images/avatars/creator_6.png",
  ownerImage: "/images/avatars/owner_4.png",
  price: "0.32 ETH",
  title: "Crypto bull #6195",
  likes: "90",
  auction_timer: "500000000"
}, {
  id: "7TSARÉVNA",
  bigImage: "/images/products/item_20.jpg",
  creatorImage: "/images/avatars/creator_3.png",
  ownerImage: "/images/avatars/owner_3.png",
  price: "4.7 ETH",
  title: "TSARÉVNA",
  likes: "260",
  auction_timer: "000"
}, {
  id: "8Monkeyme#155",
  bigImage: "/images/products/item_8.jpg",
  creatorImage: "/images/avatars/creator_1.png",
  ownerImage: "/images/avatars/owner_1.png",
  price: "1.3 ETH",
  title: "Monkeyme#155",
  likes: "25",
  auction_timer: "000"
}, {
  id: "9Splendid Girl",
  bigImage: "/images/products/item_6.jpg",
  creatorImage: "/images/avatars/creator_4.png",
  ownerImage: "/images/avatars/owner_4.png",
  price: "10 ETH",
  title: "Splendid Girl",
  likes: "60",
  auction_timer: "000"
}, {
  id: "10Asuna #1649",
  bigImage: "/images/products/item_11.jpg",
  creatorImage: "/images/avatars/creator_8.png",
  ownerImage: "/images/avatars/owner_5.png",
  price: "0.8 ETH",
  title: "Asuna #1649",
  likes: "34",
  auction_timer: "000"
}, {
  id: "11Artof Eve",
  bigImage: "/images/products/item_10.jpg",
  creatorImage: "/images/avatars/creator_2.png",
  ownerImage: "/images/avatars/owner_7.png",
  price: "1.75 ETH",
  title: "Artof Eve",
  likes: "15",
  auction_timer: "550000000"
}, {
  id: "12Azuki #4017",
  bigImage: "/images/products/item_17.jpg",
  creatorImage: "/images/avatars/creator_2.png",
  ownerImage: "/images/avatars/owner_2.png",
  price: "9.3712 ETH",
  title: "Azuki #4017",
  likes: "334",
  auction_timer: "000"
}, {
  id: "13Block #2788",
  bigImage: "/images/products/item_18.jpg",
  creatorImage: "/images/avatars/creator_9.png",
  ownerImage: "/images/avatars/owner_8.png",
  price: "7.3 ETH",
  title: "Block #2788",
  likes: "52",
  auction_timer: "560000000"
}, {
  id: "14Crypto bull #6195",
  bigImage: "/images/products/item_19.jpg",
  creatorImage: "/images/avatars/creator_6.png",
  ownerImage: "/images/avatars/owner_4.png",
  price: "0.32 ETH",
  title: "Crypto bull #6195",
  likes: "90",
  auction_timer: "500000000"
}, {
  id: "15TSARÉVNA",
  bigImage: "/images/products/item_20.jpg",
  creatorImage: "/images/avatars/creator_3.png",
  ownerImage: "/images/avatars/owner_3.png",
  price: "4.7 ETH",
  title: "TSARÉVNA",
  likes: "260",
  auction_timer: "000"
}];
/* harmony default export */ const shared_auctions_category_data = ((/* unused pure expression or super */ null && (auctions_category_data_auctions_category_data)));
// EXTERNAL MODULE: external "@tippyjs/react"
var react_ = __webpack_require__(4787);
// EXTERNAL MODULE: external "react-countdown"
var external_react_countdown_ = __webpack_require__(4449);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/shared/Countdown_timer.tsx





const Completionist = () => {
  return /*#__PURE__*/_jsx("div", {
    className: "text-2xs absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center justify-center space-x-1 rounded-full bg-white py-2.5 px-6 font-medium",
    children: /*#__PURE__*/_jsx("span", {
      className: "js-countdown-timer text-jacarta-700 shrink-0 whitespace-nowrap",
      "data-countdown": "2022-05-14T10:45:30",
      "data-expired": "This auction has ended",
      children: "This auction has ended"
    })
  });
};

const renderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed
}) => {
  if (completed) {
    return /*#__PURE__*/_jsx(Completionist, {});
  } else {
    return /*#__PURE__*/_jsx(_Fragment, {
      children: /*#__PURE__*/_jsxs("div", {
        className: "text-2xs absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center justify-center space-x-1 rounded-full bg-white py-2.5 px-6 font-medium",
        children: [/*#__PURE__*/_jsx("img", {
          src: "https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/23f3.png",
          alt: "",
          className: "h-3.5 w-3.5 shrink-0 bg-contain bg-center"
        }), /*#__PURE__*/_jsxs("span", {
          className: "js-countdown-timer text-jacarta-700 shrink-0 whitespace-nowrap",
          children: [days, " : ", hours, " : ", minutes, " : ", seconds]
        }), /*#__PURE__*/_jsx("span", {
          className: "js-countdown-left text-jacarta-700",
          "data-countdownleft": "left",
          children: "left"
        })]
      })
    });
  }
};

const Countdown_timer_Countdown_timer = ({
  time
}) => {
  return /*#__PURE__*/_jsx(Countdown, {
    date: Date.now() + time,
    renderer: renderer
  });
};

/* harmony default export */ const shared_Countdown_timer = ((/* unused pure expression or super */ null && (Countdown_timer_Countdown_timer)));
// EXTERNAL MODULE: ./components/shared/dropdown/Auctions_dropdown.tsx
var dropdown_Auctions_dropdown = __webpack_require__(6901);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/shared/counterSliceReducer.tsx
var counterSliceReducer = __webpack_require__(4646);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./node_modules/tippy.js/themes/light.css
var light = __webpack_require__(1912);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./components/shared/likes/likes.tsx
var likes = __webpack_require__(8582);
;// CONCATENATED MODULE: ./components/shared/categories/Auctions_categories.tsx
















const Auctions_categories = () => {
  const dispatch = useDispatch();
  const {
    0: data,
    1: setData
  } = useState(Auctions_category_data.slice(0, 8));
  const {
    0: loadMoreBtn,
    1: setLoadMoreBtn
  } = useState(true);

  const handleloadMore = () => {
    setData(auctions_category_data);
    setLoadMoreBtn(false);
  };

  return /*#__PURE__*/_jsx("div", {
    children: /*#__PURE__*/_jsx("section", {
      className: "py-24",
      children: /*#__PURE__*/_jsxs("div", {
        className: "container",
        children: [/*#__PURE__*/_jsx(HeadLine, {
          image: "https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/2764-fe0f.png",
          text: "Live Auctions",
          classes: "font-display text-jacarta-700 mb-8 text-center text-3xl dark:text-white"
        }), /*#__PURE__*/_jsx("div", {
          className: "grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4",
          children: data.map(item => {
            const {
              id,
              bigImage,
              creatorImage,
              ownerImage,
              title,
              price,
              likes,
              auction_timer
            } = item;
            const itemLink = bigImage.split('/').slice(-1).toString().replace('.jpg', '').replace('.gif', '');
            return /*#__PURE__*/_jsx("article", {
              children: /*#__PURE__*/_jsxs("div", {
                className: "dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg",
                children: [/*#__PURE__*/_jsxs("div", {
                  className: "mb-4 flex items-center justify-between relative",
                  children: [/*#__PURE__*/_jsxs("div", {
                    className: "flex -space-x-2 ",
                    children: [/*#__PURE__*/_jsx(Tippy, {
                      theme: "tomato",
                      content: /*#__PURE__*/_jsx("span", {
                        className: "py-1 px-2 block",
                        children: "Creator: Sussygirl"
                      }),
                      children: /*#__PURE__*/_jsx(Link, {
                        legacyBehavior: true,
                        href: /item/ + itemLink,
                        children: /*#__PURE__*/_jsx("a", {
                          children: /*#__PURE__*/_jsx(Image, {
                            src: creatorImage,
                            alt: "creator",
                            className: "h-6 w-6 rounded-full",
                            height: 24,
                            width: 24
                          })
                        })
                      })
                    }), /*#__PURE__*/_jsx(Tippy, {
                      content: /*#__PURE__*/_jsx("span", {
                        className: "py-1 px-2 block",
                        children: "Owner: Sussygirl"
                      }),
                      children: /*#__PURE__*/_jsx(Link, {
                        legacyBehavior: true,
                        href: /item/ + itemLink,
                        children: /*#__PURE__*/_jsx("a", {
                          children: /*#__PURE__*/_jsx(Image, {
                            src: ownerImage,
                            alt: "creator",
                            className: "h-6 w-6 rounded-full",
                            height: 24,
                            width: 24
                          })
                        })
                      })
                    })]
                  }), /*#__PURE__*/_jsx(Auctions_dropdown, {
                    classes: "dark:hover:bg-jacarta-600 dropdown hover:bg-jacarta-100 rounded-full "
                  })]
                }), /*#__PURE__*/_jsxs("figure", {
                  className: "relative",
                  children: [/*#__PURE__*/_jsx(Link, {
                    legacyBehavior: true,
                    href: /item/ + itemLink,
                    children: /*#__PURE__*/_jsx("a", {
                      children: /*#__PURE__*/_jsx(Image, {
                        src: bigImage,
                        alt: "item 8",
                        className: "w-full rounded-[0.625rem]",
                        loading: "lazy",
                        height: "100",
                        width: "100",
                        layout: "responsive",
                        objectFit: "cover"
                      })
                    })
                  }), /*#__PURE__*/_jsx(Countdown_timer, {
                    time: +auction_timer
                  })]
                }), /*#__PURE__*/_jsxs("div", {
                  className: "mt-7 flex items-center justify-between",
                  children: [/*#__PURE__*/_jsx(Link, {
                    legacyBehavior: true,
                    href: /item/ + itemLink,
                    children: /*#__PURE__*/_jsx("a", {
                      children: /*#__PURE__*/_jsx("span", {
                        className: "font-display text-jacarta-700 hover:text-accent text-base dark:text-white",
                        children: title
                      })
                    })
                  }), /*#__PURE__*/_jsx("span", {
                    className: "dark:border-jacarta-600 border-jacarta-100 flex items-center whitespace-nowrap rounded-md border py-1 px-2",
                    children: /*#__PURE__*/_jsx("span", {
                      children: /*#__PURE__*/_jsx(Tippy, {
                        content: /*#__PURE__*/_jsx("span", {
                          className: "py-1 px-2 block",
                          children: "ETH"
                        }),
                        children: /*#__PURE__*/_jsx("svg", {
                          className: "h-4 w-4",
                          children: /*#__PURE__*/_jsx("use", {
                            xlinkHref: "/icons.svg#icon-ETH"
                          })
                        })
                      })
                    })
                  })]
                }), /*#__PURE__*/_jsxs("div", {
                  className: "mt-2 text-sm",
                  children: [/*#__PURE__*/_jsx("span", {
                    className: "dark:text-jacarta-300",
                    children: "Highest Bid"
                  }), /*#__PURE__*/_jsx("span", {
                    className: "dark:text-jacarta-100 text-jacarta-700",
                    children: price
                  })]
                }), /*#__PURE__*/_jsxs("div", {
                  className: "mt-8 flex items-center justify-between",
                  children: [/*#__PURE__*/_jsx("button", {
                    className: "text-accent font-display text-sm font-semibold",
                    onClick: () => dispatch(bidsModalShow()),
                    children: "Place bid"
                  }), /*#__PURE__*/_jsx(Likes, {
                    like: likes,
                    classes: "flex items-center space-x-1"
                  })]
                })]
              })
            }, id);
          })
        }), loadMoreBtn && /*#__PURE__*/_jsx("div", {
          className: "mt-10 text-center",
          children: /*#__PURE__*/_jsx("button", {
            onClick: handleloadMore,
            className: "bg-accent shadow-accent-volume hover:bg-accent-dark inline-block rounded-full py-3 px-8 text-center font-semibold text-white transition-all",
            children: "Load More"
          })
        })]
      })
    })
  });
};

/* harmony default export */ const categories_Auctions_categories = ((/* unused pure expression or super */ null && (Auctions_categories)));

/***/ }),

/***/ 4416:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2555);
/* harmony import */ var _carousel_Browse_category_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(874);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_component__WEBPACK_IMPORTED_MODULE_1__, _carousel_Browse_category_carousel__WEBPACK_IMPORTED_MODULE_2__]);
([_component__WEBPACK_IMPORTED_MODULE_1__, _carousel_Browse_category_carousel__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Browse_category = ({
  bgWhite
}) => {
  return /*#__PURE__*/_jsx("div", {
    children: /*#__PURE__*/_jsxs("section", {
      className: bgWhite ? "pt-24 pb-16 relative" : "py-24 relative",
      children: [bgWhite && /*#__PURE__*/_jsx("picture", {
        className: "pointer-events-none absolute inset-0 -z-10 dark:hidden",
        children: /*#__PURE__*/_jsx(Image, {
          src: "/images/gradient_light.jpg",
          alt: "gradient",
          className: "h-full",
          layout: "fill"
        })
      }), /*#__PURE__*/_jsx(HeadLine, {
        text: "Browse by category",
        classes: "font-display text-jacarta-700 mb-8 text-center text-3xl dark:text-white"
      }), /*#__PURE__*/_jsx("div", {
        className: "relative",
        children: /*#__PURE__*/_jsx(Browse_category_carousel, {})
      })]
    })
  });
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Browse_category)));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3721:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2555);
/* harmony import */ var _trending_categories_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8867);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_component__WEBPACK_IMPORTED_MODULE_1__]);
_component__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable @next/next/no-img-element */






const Tranding_category = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("section", {
    className: "py-24",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_component__WEBPACK_IMPORTED_MODULE_1__/* .HeadLine */ .Sn, {
        text: "Trending categories",
        image: "https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/26a1.png",
        classes: "font-display text-jacarta-700 mb-8 text-center text-3xl dark:text-white"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_trending_categories_items__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tranding_category);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ trending_categories_items)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./data/shared/categories_data.tsx
const tranding_category_filter = [{
  id: 0,
  text: "all"
}, {
  id: 1,
  svg: "art",
  text: "art"
}, {
  id: 2,
  svg: "collection",
  text: "Collectibles"
}, {
  id: 3,
  svg: "domain",
  text: "domain"
}, {
  id: 4,
  svg: "music",
  text: "music"
}, {
  id: 5,
  svg: "photography",
  text: "photography"
}, {
  id: 6,
  svg: "world",
  text: "virtual world"
}];
const trendingCategoryData = [{
  image: "/images/products/item_5.jpg",
  id: "Flourishing Cat #1800",
  category: "art",
  title: "Flourishing Cat #180",
  nfsw: true,
  lazyMinted: false,
  verified: true,
  addDate: 1,
  sortPrice: 8.49,
  price: "From 8.49 ETH",
  bidLimit: 8,
  bidCount: 2,
  likes: 15,
  creator: {
    name: "Sussygirl",
    image: "/images/avatars/creator_1.png"
  },
  owner: {
    name: "Sussygirl",
    image: "/images/avatars/owner_1.png"
  }
}, {
  image: "/images/products/item_4.jpg",
  id: "Amazing NFT art1",
  category: "Collectibles",
  title: "Amazing NFT art",
  nfsw: true,
  lazyMinted: false,
  verified: false,
  addDate: 2,
  sortPrice: 5.9,
  price: "From 5.9 ETH",
  bidLimit: 7,
  bidCount: 1,
  likes: 188,
  creator: {
    name: "Sussygirl",
    image: "/images/avatars/creator_2.png"
  },
  owner: {
    name: "Sussygirl",
    image: "/images/avatars/owner_2.png"
  }
}, {
  image: "/images/products/item_7.jpg",
  id: "SwagFox#1332",
  category: "domain",
  title: "SwagFox#133",
  nfsw: false,
  lazyMinted: true,
  verified: true,
  addDate: 3,
  sortPrice: 0.078,
  price: "0.078 ETH",
  bidLimit: 3,
  bidCount: 1,
  likes: 160,
  creator: {
    name: "Sussygirl",
    image: "/images/avatars/creator_3.png"
  },
  owner: {
    name: "Sussygirl",
    image: "/images/avatars/owner_3.png"
  }
}, {
  image: "/images/products/item_6.jpg",
  id: "Splendid Girl3",
  category: "music",
  title: "Splendid Girl",
  nfsw: true,
  lazyMinted: true,
  verified: false,
  addDate: 4,
  sortPrice: 10,
  price: "10 ETH",
  bidLimit: 3,
  bidCount: 2,
  likes: 159,
  creator: {
    name: "Sussygirl",
    image: "/images/avatars/creator_4.png"
  },
  owner: {
    name: "Sussygirl",
    image: "/images/avatars/owner_4.png"
  }
}, {
  image: "/images/products/item_8.jpg",
  id: "Monkeyme#1554",
  category: "photography",
  title: "Monkeyme#155",
  nfsw: false,
  lazyMinted: false,
  verified: true,
  addDate: 5,
  sortPrice: 5,
  price: "From 5 FLOW",
  bidLimit: 1,
  bidCount: 1,
  likes: 32,
  creator: {
    name: "Sussygirl",
    image: "/images/avatars/creator_3.png"
  },
  owner: {
    name: "Sussygirl",
    image: "/images/avatars/owner_5.png"
  }
}, {
  image: "/images/products/item_9.jpg",
  id: "Jedidia#1495",
  category: "virtual world",
  title: "Jedidia#149",
  nfsw: true,
  lazyMinted: false,
  verified: true,
  addDate: 6,
  sortPrice: 0.16,
  price: "0.16 ETH",
  bidLimit: 1,
  bidCount: 1,
  likes: 25,
  creator: {
    name: "Sussygirl",
    image: "/images/avatars/creator_6.png"
  },
  owner: {
    name: "Sussygirl",
    image: "/images/avatars/owner_4.png"
  }
}, {
  image: "/images/products/item_10.jpg",
  id: "Artof Eve6",
  category: "art",
  title: "Artof Eve",
  nfsw: true,
  lazyMinted: false,
  verified: false,
  addDate: 7,
  sortPrice: 0.13,
  price: "0.13 FLOW",
  bidLimit: 1,
  bidCount: 1,
  likes: 55,
  creator: {
    name: "Sussygirl",
    image: "/images/avatars/creator_2.png"
  },
  owner: {
    name: "Sussygirl",
    image: "/images/avatars/owner_7.png"
  }
}, {
  image: "/images/products/item_11.jpg",
  id: "Asuna #16497",
  category: "collection",
  title: "Asuna#1649",
  nfsw: false,
  lazyMinted: true,
  verified: true,
  addDate: 8,
  sortPrice: 0.8,
  price: "0.8 ETH",
  bidLimit: 1,
  bidCount: 1,
  likes: 70,
  creator: {
    name: "Sussygirl",
    image: "/images/avatars/creator_8.png"
  },
  owner: {
    name: "Sussygirl",
    image: "/images/avatars/owner_5.png"
  }
}, {
  image: "/images/products/item_11.jpg",
  id: "Asuna#164978",
  category: "collection",
  title: "Asuna#1649",
  nfsw: true,
  lazyMinted: false,
  verified: false,
  addDate: 9,
  sortPrice: 0.8,
  price: "0.8 ETH",
  bidLimit: 1,
  bidCount: 1,
  likes: 70,
  creator: {
    name: "Sussygirl",
    image: "/images/avatars/creator_8.png"
  },
  owner: {
    name: "Sussygirl",
    image: "/images/avatars/owner_5.png"
  }
}, {
  image: "/images/products/item_12_lg.jpg",
  id: "Amazing NFT art9",
  category: "Collectibles",
  title: "Amazing NFT art",
  nfsw: false,
  lazyMinted: true,
  verified: true,
  addDate: 10,
  sortPrice: 5.9,
  price: "From 5.9 ETH",
  bidLimit: 7,
  bidCount: 1,
  likes: 188,
  creator: {
    name: "Sussygirl",
    image: "/images/avatars/creator_2.png"
  },
  owner: {
    name: "Sussygirl",
    image: "/images/avatars/owner_2.png"
  }
}, {
  image: "/images/products/item_13_lg.jpg",
  id: "SwagFox#13310",
  category: "domain",
  title: "SwagFox#133",
  nfsw: true,
  lazyMinted: false,
  verified: true,
  addDate: 12,
  sortPrice: 0.078,
  price: "0.078 ETH",
  bidLimit: 3,
  bidCount: 1,
  likes: 160,
  creator: {
    name: "Sussygirl",
    image: "/images/avatars/creator_3.png"
  },
  owner: {
    name: "Sussygirl",
    image: "/images/avatars/owner_3.png"
  }
}, {
  image: "/images/products/item_14_lg.jpg",
  id: "Splendid Girl311",
  category: "music",
  title: "Splendid Girl",
  nfsw: true,
  lazyMinted: false,
  verified: false,
  addDate: 13,
  sortPrice: 10,
  price: "10 ETH",
  bidLimit: 3,
  bidCount: 2,
  likes: 159,
  creator: {
    name: "Sussygirl",
    image: "/images/avatars/creator_4.png"
  },
  owner: {
    name: "Sussygirl",
    image: "/images/avatars/owner_4.png"
  }
}, {
  image: "/images/products/item_15_lg.jpg",
  id: "Monkeyme#15512",
  category: "photography",
  title: "Monkeyme#155",
  nfsw: false,
  lazyMinted: true,
  verified: true,
  addDate: 14,
  sortPrice: 5,
  price: "From 5 FLOW",
  bidLimit: 1,
  bidCount: 1,
  likes: 32,
  creator: {
    name: "Sussygirl",
    image: "/images/avatars/creator_3.png"
  },
  owner: {
    name: "Sussygirl",
    image: "/images/avatars/owner_5.png"
  }
}, {
  image: "/images/products/item_16_lg.jpg",
  id: "Jedidia#14913",
  category: "virtual world",
  title: "Jedidia#149",
  nfsw: true,
  lazyMinted: false,
  verified: true,
  addDate: 15,
  sortPrice: 0.16,
  price: "0.16 ETH",
  bidLimit: 1,
  bidCount: 1,
  likes: 25,
  creator: {
    name: "Sussygirl",
    image: "/images/avatars/creator_6.png"
  },
  owner: {
    name: "Sussygirl",
    image: "/images/avatars/owner_4.png"
  }
}, {
  image: "/images/products/item_5.jpg",
  id: "FlourishingCat#18014",
  category: "art",
  title: "Flourishing Cat #180",
  nfsw: true,
  lazyMinted: false,
  verified: true,
  addDate: 16,
  sortPrice: 8.49,
  price: "From 8.49 ETH",
  bidLimit: 8,
  bidCount: 2,
  likes: 15,
  creator: {
    name: "Sussygirl",
    image: "/images/avatars/creator_1.png"
  },
  owner: {
    name: "Sussygirl",
    image: "/images/avatars/owner_1.png"
  }
}, {
  image: "/images/products/item_4.jpg",
  id: "Amazing NFT art15",
  category: "Collectibles",
  title: "Amazing NFT art",
  nfsw: false,
  lazyMinted: true,
  verified: true,
  addDate: 16,
  sortPrice: 5.9,
  price: "From 5.9 ETH",
  bidLimit: 7,
  bidCount: 1,
  likes: 188,
  creator: {
    name: "Sussygirl",
    image: "/images/avatars/creator_2.png"
  },
  owner: {
    name: "Sussygirl",
    image: "/images/avatars/owner_2.png"
  }
}, {
  image: "/images/products/item_7.jpg",
  id: "SwagFox#13316",
  category: "domain",
  title: "SwagFox#133",
  nfsw: false,
  lazyMinted: false,
  verified: false,
  addDate: 17,
  sortPrice: 0.078,
  price: "0.078 ETH",
  bidLimit: 3,
  bidCount: 1,
  likes: 160,
  creator: {
    name: "Sussygirl",
    image: "/images/avatars/creator_3.png"
  },
  owner: {
    name: "Sussygirl",
    image: "/images/avatars/owner_3.png"
  }
}, {
  image: "/images/products/item_6.jpg",
  id: "Splendid Girl7",
  category: "music",
  title: "Splendid Girl",
  nfsw: true,
  lazyMinted: false,
  verified: true,
  addDate: 18,
  sortPrice: 10,
  price: "10 ETH",
  bidLimit: 3,
  bidCount: 2,
  likes: 159,
  creator: {
    name: "Sussygirl",
    image: "/images/avatars/creator_4.png"
  },
  owner: {
    name: "Sussygirl",
    image: "/images/avatars/owner_4.png"
  }
}, {
  image: "/images/products/item_8.jpg",
  id: "Monkeyme#15548",
  category: "photography",
  title: "Monkeyme#155",
  nfsw: false,
  lazyMinted: true,
  verified: true,
  addDate: 19,
  sortPrice: 5,
  price: "From 5 FLOW",
  bidLimit: 1,
  bidCount: 1,
  likes: 32,
  creator: {
    name: "Sussygirl",
    image: "/images/avatars/creator_3.png"
  },
  owner: {
    name: "Sussygirl",
    image: "/images/avatars/owner_5.png"
  }
}, {
  image: "/images/products/item_9.jpg",
  id: "Jedidia#14959",
  category: "virtual world",
  title: "Jedidia#149",
  nfsw: true,
  lazyMinted: false,
  verified: true,
  addDate: 20,
  sortPrice: 0.16,
  price: "0.16 ETH",
  bidLimit: 1,
  bidCount: 1,
  likes: 25,
  creator: {
    name: "Sussygirl",
    image: "/images/avatars/creator_6.png"
  },
  owner: {
    name: "Sussygirl",
    image: "/images/avatars/owner_4.png"
  }
}, {
  image: "/images/products/item_10.jpg",
  id: "Artof Eve60",
  category: "art",
  title: "Artof Eve",
  nfsw: true,
  lazyMinted: false,
  verified: false,
  addDate: 21,
  sortPrice: 0.13,
  price: "0.13 FLOW",
  bidLimit: 1,
  bidCount: 1,
  likes: 55,
  creator: {
    name: "Sussygirl",
    image: "/images/avatars/creator_2.png"
  },
  owner: {
    name: "Sussygirl",
    image: "/images/avatars/owner_7.png"
  }
}, {
  image: "/images/products/item_11.jpg",
  id: "Asuna #164971",
  category: "collection",
  title: "Asuna#1649",
  nfsw: false,
  lazyMinted: true,
  verified: true,
  addDate: 22,
  sortPrice: 0.8,
  price: "0.8 ETH",
  bidLimit: 1,
  bidCount: 1,
  likes: 70,
  creator: {
    name: "Sussygirl",
    image: "/images/avatars/creator_8.png"
  },
  owner: {
    name: "Sussygirl",
    image: "/images/avatars/owner_5.png"
  }
}, {
  image: "/images/products/item_11.jpg",
  id: "Asuna#1649782",
  category: "collection",
  title: "Asuna#1649",
  nfsw: true,
  lazyMinted: false,
  verified: true,
  addDate: 23,
  sortPrice: 0.8,
  price: "0.8 ETH",
  bidLimit: 1,
  bidCount: 1,
  likes: 70,
  creator: {
    name: "Sussygirl",
    image: "/images/avatars/creator_8.png"
  },
  owner: {
    name: "Sussygirl",
    image: "/images/avatars/owner_5.png"
  }
}, {
  image: "/images/products/item_12_lg.jpg",
  id: "Amazing NFT art93",
  category: "Collectibles",
  title: "Amazing NFT art",
  nfsw: true,
  lazyMinted: false,
  verified: true,
  addDate: 24,
  sortPrice: 5.9,
  price: "From 5.9 ETH",
  bidLimit: 7,
  bidCount: 1,
  likes: 188,
  creator: {
    name: "Sussygirl",
    image: "/images/avatars/creator_2.png"
  },
  owner: {
    name: "Sussygirl",
    image: "/images/avatars/owner_2.png"
  }
}, {
  image: "/images/products/item_13_lg.jpg",
  id: "SwagFox#133104",
  category: "domain",
  title: "SwagFox#133",
  nfsw: false,
  lazyMinted: true,
  verified: false,
  addDate: 25,
  sortPrice: 0.078,
  price: "0.078 ETH",
  bidLimit: 3,
  bidCount: 1,
  likes: 160,
  creator: {
    name: "Sussygirl",
    image: "/images/avatars/creator_3.png"
  },
  owner: {
    name: "Sussygirl",
    image: "/images/avatars/owner_3.png"
  }
}, {
  image: "/images/products/item_14_lg.jpg",
  id: "Splendid Girl3115",
  category: "music",
  title: "Splendid Girl",
  nfsw: true,
  lazyMinted: false,
  verified: true,
  addDate: 26,
  sortPrice: 10,
  price: "10 ETH",
  bidLimit: 3,
  bidCount: 2,
  likes: 159,
  creator: {
    name: "Sussygirl",
    image: "/images/avatars/creator_4.png"
  },
  owner: {
    name: "Sussygirl",
    image: "/images/avatars/owner_4.png"
  }
}, {
  image: "/images/products/item_15_lg.jpg",
  id: "Monkeyme#155126",
  category: "photography",
  title: "Monkeyme#155",
  nfsw: true,
  lazyMinted: false,
  verified: true,
  addDate: 27,
  sortPrice: 5,
  price: "From 5 FLOW",
  bidLimit: 1,
  bidCount: 1,
  likes: 32,
  creator: {
    name: "Sussygirl",
    image: "/images/avatars/creator_3.png"
  },
  owner: {
    name: "Sussygirl",
    image: "/images/avatars/owner_5.png"
  }
}, {
  image: "/images/products/item_16_lg.jpg",
  id: "Jedidia#149137",
  category: "virtual world",
  title: "Jedidia#149",
  nfsw: false,
  lazyMinted: true,
  verified: false,
  addDate: 28,
  sortPrice: 0.16,
  price: "0.16 ETH",
  bidLimit: 1,
  bidCount: 1,
  likes: 25,
  creator: {
    name: "Sussygirl",
    image: "/images/avatars/creator_6.png"
  },
  owner: {
    name: "Sussygirl",
    image: "/images/avatars/owner_4.png"
  }
}];

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@tippyjs/react"
var react_ = __webpack_require__(4787);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
// EXTERNAL MODULE: ./node_modules/tippy.js/dist/tippy.css
var tippy = __webpack_require__(8933);
// EXTERNAL MODULE: ./components/shared/likes/likes.tsx
var likes_likes = __webpack_require__(8582);
// EXTERNAL MODULE: ./components/shared/dropdown/Auctions_dropdown.tsx
var Auctions_dropdown = __webpack_require__(6901);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./components/shared/counterSliceReducer.tsx
var counterSliceReducer = __webpack_require__(4646);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/shared/categories/categoryItem.tsx











const CategoryItem = () => {
  const {
    sortedtrendingCategoryItemData
  } = (0,external_react_redux_.useSelector)(state => state.counter);
  const dispatch = (0,external_react_redux_.useDispatch)();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4",
    children: sortedtrendingCategoryItemData?.map(item => {
      const {
        id,
        image,
        title,
        price,
        bidLimit,
        bidCount,
        likes,
        creator,
        owner
      } = item;
      const itemLink = image.split("/").slice(-1).toString().replace(".jpg", "").replace(".gif", "");
      return /*#__PURE__*/jsx_runtime_.jsx("article", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("figure", {
            className: "relative",
            children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              legacyBehavior: true,
              href: `/item/${itemLink}`,
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: image,
                  alt: "item 5",
                  className: "w-full h-[230px] rounded-[0.625rem] object-cover"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(likes_likes/* default */.Z, {
              like: likes
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "absolute left-3 -bottom-3",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "flex -space-x-2",
                children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  legacyBehavior: true,
                  href: `/item/${itemLink}`,
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/jsx_runtime_.jsx((react_default()), {
                      content: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                        children: ["creator: ", creator.name]
                      }),
                      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                        src: creator.image,
                        alt: "creator",
                        className: "dark:border-jacarta-600 hover:border-accent dark:hover:border-accent h-6 w-6 rounded-full border-2 border-white"
                      })
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  legacyBehavior: true,
                  href: `/item/${itemLink}`,
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/jsx_runtime_.jsx((react_default()), {
                      content: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                        children: ["creator: ", owner.name]
                      }),
                      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                        src: owner.image,
                        alt: "owner",
                        className: "dark:border-jacarta-600 hover:border-accent dark:hover:border-accent h-6 w-6 rounded-full border-2 border-white"
                      })
                    })
                  })
                })]
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "mt-7 flex items-center justify-between",
            children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              legacyBehavior: true,
              href: `/item/${itemLink}`,
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "font-display text-jacarta-700 hover:text-accent text-base dark:text-white",
                  children: title
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(Auctions_dropdown/* default */.Z, {
              classes: "dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100 rounded-full "
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "mt-2 text-sm",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "dark:text-jacarta-200 text-jacarta-700 mr-1",
              children: price
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              className: "dark:text-jacarta-300 text-jacarta-500",
              children: [bidCount, "/", bidLimit]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "mt-8 flex items-center justify-between",
            children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
              className: "text-accent font-display text-sm font-semibold",
              onClick: () => dispatch((0,counterSliceReducer/* buyModalShow */.nf)()),
              children: "Buy now"
            }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              legacyBehavior: true,
              href: `/item/${itemLink}`,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                className: "group flex items-center",
                children: [/*#__PURE__*/jsx_runtime_.jsx("svg", {
                  className: "icon icon-history group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500 mr-1 mb-[3px] h-4 w-4",
                  children: /*#__PURE__*/jsx_runtime_.jsx("use", {
                    xlinkHref: "/icons.svg#icon-history"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "group-hover:text-accent font-display dark:text-jacarta-200 text-sm font-semibold",
                  children: "View History"
                })]
              })
            })]
          })]
        })
      }, id);
    })
  });
};

/* harmony default export */ const categoryItem = (CategoryItem);
;// CONCATENATED MODULE: ./components/shared/dropdown/recently_added_dropdown.tsx








const Recently_added_dropdown = ({
  data,
  dropdownFor
}) => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    0: currencyValFrom,
    1: setCurrencyValFrom
  } = (0,external_react_.useState)(undefined);
  const {
    0: currencyValTo,
    1: setCurrencyValTo
  } = (0,external_react_.useState)(undefined);
  const {
    0: sortActive,
    1: setsortActive
  } = (0,external_react_.useState)(1);
  const {
    0: sortFilterText,
    1: setSortFilterText
  } = (0,external_react_.useState)('');
  const {
    0: renkingCategoriesdropdownShow,
    1: setRenkingCategoriesDropdownShow
  } = (0,external_react_.useState)(false);
  const {
    0: blockChaindropdownShow,
    1: setBlockChainDropdownShow
  } = (0,external_react_.useState)(false);
  const {
    0: itemDateDropdown,
    1: setItemDateDropdown
  } = (0,external_react_.useState)(false);
  const {
    0: categoryDropdown,
    1: setCategoryDropdown
  } = (0,external_react_.useState)(false);
  const {
    0: dropdownSale,
    1: setDropdownSale
  } = (0,external_react_.useState)(false);
  const {
    0: currencyDropdown,
    1: setCurrencyDropdown
  } = (0,external_react_.useState)(false);

  const handleRenkingCategoriesDropdown = () => {
    window.addEventListener('click', w => {
      if (w.target.closest('.rankingCategoriesDropdown')) {
        if (renkingCategoriesdropdownShow) {
          setRenkingCategoriesDropdownShow(false);
        } else {
          setRenkingCategoriesDropdownShow(true);
        }
      } else {
        setRenkingCategoriesDropdownShow(false);
      }
    });
  };

  const handleBlockChainDropdown = () => {
    window.addEventListener('click', w => {
      if (w.target.closest('.blockchainDropdown')) {
        if (blockChaindropdownShow) {
          setBlockChainDropdownShow(false);
        } else {
          setBlockChainDropdownShow(true);
        }
      } else {
        setBlockChainDropdownShow(false);
      }
    });
  };

  const handleItemDateDropdown = () => {
    window.addEventListener('click', w => {
      if (w.target.closest('.itemDateDropdown')) {
        if (itemDateDropdown) {
          setItemDateDropdown(false);
        } else {
          setItemDateDropdown(true);
        }
      } else {
        setItemDateDropdown(false);
      }
    });
  };

  const handleCategoryDropdown = () => {
    window.addEventListener('click', w => {
      if (w.target.closest('.category-dropdown')) {
        if (categoryDropdown) {
          setCategoryDropdown(false);
        } else {
          setCategoryDropdown(true);
        }
      } else {
        setCategoryDropdown(false);
      }
    });
  };

  const handleSaleDropdown = () => {
    window.addEventListener('click', w => {
      if (w.target.closest('.dropdown-sale')) {
        if (dropdownSale) {
          setDropdownSale(false);
        } else {
          setDropdownSale(true);
        }
      } else {
        setDropdownSale(false);
      }
    });
  };

  const handleCurrencyDropdown = () => {
    console.log('first');

    if (currencyDropdown) {
      setCurrencyDropdown(false);
    } else {
      setCurrencyDropdown(true);
    }
  }; // console.log(blockChaindropdownShow);


  (0,external_react_.useEffect)(() => {
    dispatch((0,counterSliceReducer/* updatetrendingCategorySorText */.iI)(sortFilterText));
  }, [sortFilterText, dispatch]);
  const inputData = [{
    id: 1,
    text: 'Verified Only'
  }, {
    id: 2,
    text: 'NFSW Only'
  }, {
    id: 3,
    text: 'Show Lazy Minted'
  }];

  const handleInput = (e, text) => {
    if (e.target.checked) {
      // console.log(text);
      dispatch((0,counterSliceReducer/* updateTrendingCategoryItemByInput */.DO)(text));
    } else {
      dispatch((0,counterSliceReducer/* updateTrendingCategoryItemByInput */.DO)(''));
    }
  };

  const handleCurrencyValTo = e => {
    const value = e.target.value;

    if (value < 0) {
      setCurrencyValTo(0);
    } else {
      setCurrencyValTo(value);
    }
  };

  const handleCurrencyValFrom = e => {
    const value = e.target.value;

    if (value < 0) {
      setCurrencyValFrom(0);
    } else {
      setCurrencyValFrom(value);
    }
  };

  if (dropdownFor === 'recently_added') {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "dropdown relative my-1 cursor-pointer",
        children: /*#__PURE__*/jsx_runtime_.jsx((react_default()), {
          animation: "fade",
          arrow: false,
          trigger: "click",
          interactive: true,
          placement: "bottom",
          className: "tooltip-container",
          content: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "dropdown-menu dark:bg-jacarta-800 z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl show text-jacarta-500",
            "aria-labelledby": "categoriesSort",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "font-display text-jacarta-300 block px-5 py-2 text-sm font-semibold",
              children: "Sort By"
            }), data.map(item => {
              const {
                id,
                text
              } = item;
              return /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
                className: "dropdown-item font-display text-jacarta-700 dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white",
                onClick: () => {
                  setsortActive(id);
                  setSortFilterText(text);
                },
                children: [text, sortActive === id && /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  width: "24",
                  height: "24",
                  className: "fill-accent mb-[3px] h-4 w-4",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                    fill: "none",
                    d: "M0 0h24v24H0z"
                  }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                    d: "M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  })]
                })]
              }, id);
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "font-display text-jacarta-300 block px-5 py-2 text-sm font-semibold",
              children: "Options"
            }), inputData.map(({
              id,
              text
            }) => {
              return /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                  className: "flex items-center justify-between",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: text
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    type: "checkbox",
                    name: "check",
                    className: "checked:bg-accent checked:focus:bg-accent checked:hover:bg-accent after:bg-jacarta-400 bg-jacarta-100 relative h-4 w-7 cursor-pointer appearance-none rounded-lg border-none shadow-none after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 after:rounded-full after:transition-all checked:bg-none checked:after:left-3.5 checked:after:bg-white focus:ring-transparent focus:ring-offset-0",
                    onChange: e => handleInput(e, text)
                  })]
                })
              }, id);
            })]
          }),
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "dark:bg-jacarta-700 dropdown-toggle border-jacarta-100 dark:border-jacarta-600 inline-flex w-48 items-center justify-between rounded-lg border bg-white py-2 px-3 text-sm dark:text-white",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "font-display",
              children: "Trending"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              width: "24",
              height: "24",
              className: "fill-jacarta-500 h-4 w-4 dark:fill-white",
              children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                fill: "none",
                d: "M0 0h24v24H0z"
              }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
              })]
            })]
          })
        })
      })
    });
  } else if (dropdownFor === 'blockchain') {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "my-1 mr-2.5 relative",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
        className: "group dropdown-toggle blockchainDropdown dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 font-display text-jacarta-700 flex h-9 items-center rounded-lg border bg-white px-4 text-sm font-semibold transition-colors hover:border-transparent hover:text-white dark:text-white",
        onClick: handleBlockChainDropdown,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          width: "24",
          height: "24",
          className: "fill-jacarta-700 dark:fill-jacarta-100 mr-1 h-4 w-4 transition-colors group-hover:fill-white",
          children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
            fill: "none",
            d: "M0 0h24v24H0z"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            d: "M20 16h2v6h-6v-2H8v2H2v-6h2V8H2V2h6v2h8V2h6v6h-2v8zm-2 0V8h-2V6H8v2H6v8h2v2h8v-2h2zM4 4v2h2V4H4zm0 14v2h2v-2H4zM18 4v2h2V4h-2zm0 14v2h2v-2h-2z"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "Blockchain"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: blockChaindropdownShow ? 'dropdown-menu dark:bg-jacarta-800 z-10 min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl show absolute top-full right-0' : 'dropdown-menu dark:bg-jacarta-800 z-10 min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl hidden absolute top-full right-0',
        children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
          className: "flex flex-col flex-wrap",
          children: data.map(({
            id,
            text
          }) => {
            return /*#__PURE__*/jsx_runtime_.jsx("li", {
              onClick: () => setsortActive(id),
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
                className: "dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white",
                onClick: () => dispatch((0,counterSliceReducer/* updateRenkingDataByBlockchain */.HR)(text)),
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "text-jacarta-700 dark:text-white",
                  children: text
                }), sortActive === id && /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  width: "24",
                  height: "24",
                  className: "fill-accent mb-[3px] h-4 w-4",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                    fill: "none",
                    d: "M0 0h24v24H0z"
                  }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                    d: "M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  })]
                })]
              })
            }, id);
          })
        })
      })]
    });
  } else if (dropdownFor === 'category') {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "my-1 mr-2.5 relative",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
        className: "group dropdown-toggle category-dropdown dark:border-jacarta-600 dark:bg-jacarta-700 dark:hover:bg-accent hover:bg-accent border-jacarta-100 font-display text-jacarta-700 flex h-9 items-center rounded-lg border bg-white px-4 text-sm font-semibold transition-colors hover:border-transparent hover:text-white dark:text-white",
        onClick: handleCategoryDropdown,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          width: "24",
          height: "24",
          className: "fill-jacarta-700 dark:fill-jacarta-100 mr-1 h-4 w-4 transition-colors group-hover:fill-white",
          children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
            fill: "none",
            d: "M0 0h24v24H0z"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            d: "M14 10v4h-4v-4h4zm2 0h5v4h-5v-4zm-2 11h-4v-5h4v5zm2 0v-5h5v4a1 1 0 0 1-1 1h-4zM14 3v5h-4V3h4zm2 0h4a1 1 0 0 1 1 1v4h-5V3zm-8 7v4H3v-4h5zm0 11H4a1 1 0 0 1-1-1v-4h5v5zM8 3v5H3V4a1 1 0 0 1 1-1h4z"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "Category"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: categoryDropdown ? 'dropdown-menu dark:bg-jacarta-800 z-10 min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl show absolute top-full right-0' : 'dropdown-menu dark:bg-jacarta-800 z-10 min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl hidden absolute top-full right-0',
        children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
          className: "flex flex-col flex-wrap",
          children: data.map(({
            id,
            text
          }) => {
            return /*#__PURE__*/jsx_runtime_.jsx("li", {
              onClick: () => setsortActive(id),
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
                className: "dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white",
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "text-jacarta-700 dark:text-white",
                  children: text
                }), sortActive === id && /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  width: "24",
                  height: "24",
                  className: "fill-accent mb-[3px] h-4 w-4",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                    fill: "none",
                    d: "M0 0h24v24H0z"
                  }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                    d: "M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  })]
                })]
              })
            }, id);
          })
        })
      })]
    });
  } else if (dropdownFor === 'rankingCategories') {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "my-1 mr-2.5 relative",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
        className: "group dropdown-toggle rankingCategoriesDropdown dark:border-jacarta-600 dark:bg-jacarta-700 dark:hover:bg-accent hover:bg-accent border-jacarta-100 font-display text-jacarta-700 flex h-9 items-center rounded-lg border bg-white px-4 text-sm font-semibold transition-colors hover:border-transparent hover:text-white dark:text-white",
        onClick: handleRenkingCategoriesDropdown,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          width: "24",
          height: "24",
          className: "fill-jacarta-700 dark:fill-jacarta-100 mr-1 h-4 w-4 transition-colors group-hover:fill-white",
          children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
            fill: "none",
            d: "M0 0h24v24H0z"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            d: "M14 10v4h-4v-4h4zm2 0h5v4h-5v-4zm-2 11h-4v-5h4v5zm2 0v-5h5v4a1 1 0 0 1-1 1h-4zM14 3v5h-4V3h4zm2 0h4a1 1 0 0 1 1 1v4h-5V3zm-8 7v4H3v-4h5zm0 11H4a1 1 0 0 1-1-1v-4h5v5zM8 3v5H3V4a1 1 0 0 1 1-1h4z"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "all Category"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: renkingCategoriesdropdownShow ? 'dropdown-menu dark:bg-jacarta-800 z-10 min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl show absolute top-full right-0' : 'dropdown-menu dark:bg-jacarta-800 z-10 min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl absolute top-full right-0 hidden',
        children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
          className: "flex flex-col flex-wrap",
          children: data.map(({
            id,
            text
          }) => {
            return /*#__PURE__*/jsx_runtime_.jsx("li", {
              onClick: () => setsortActive(id),
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
                className: "dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white",
                onClick: () => dispatch((0,counterSliceReducer/* updateRenkingData */.P)(text)),
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "text-jacarta-700 dark:text-white",
                  children: text
                }), sortActive === id && /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  width: "24",
                  height: "24",
                  className: "fill-accent mb-[3px] h-4 w-4",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                    fill: "none",
                    d: "M0 0h24v24H0z"
                  }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                    d: "M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  })]
                })]
              })
            }, id);
          })
        })
      })]
    });
  } else if (dropdownFor === 'sale-type') {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "my-1 mr-2.5 relative",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
        className: "group dropdown-toggle dropdown-sale dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 font-display text-jacarta-700 flex h-9 items-center rounded-lg border bg-white px-4 text-sm font-semibold transition-colors hover:border-transparent hover:text-white dark:text-white",
        onClick: handleSaleDropdown,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          width: "24",
          height: "24",
          className: "fill-jacarta-700 dark:fill-jacarta-100 mr-1 h-4 w-4 transition-colors group-hover:fill-white",
          children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
            fill: "none",
            d: "M0 0h24v24H0z"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            d: "M3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976zM13 10V5l-5 7h3v5l5-7h-3z"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "Sale type"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: dropdownSale ? 'dropdown-menu dark:bg-jacarta-800 z-10 min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl show absolute top-full right-0' : 'dropdown-menu dark:bg-jacarta-800 z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl absolute top-full right-0',
        children: [/*#__PURE__*/jsx_runtime_.jsx("ul", {
          className: "flex flex-col flex-wrap",
          children: data.map(({
            id,
            text
          }) => {
            return /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
                className: "dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white",
                onClick: () => setsortActive(id),
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "text-jacarta-700 dark:text-white",
                  children: text
                }), sortActive === id && /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  width: "24",
                  height: "24",
                  className: "fill-accent mb-[3px] h-4 w-4",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                    fill: "none",
                    d: "M0 0h24v24H0z"
                  }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                    d: "M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  })]
                })]
              })
            }, id);
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "dark:border-jacarta-600 border-jacarta-100 -ml-2 -mr-2 mt-4 flex items-center justify-center space-x-3 border-t px-7 pt-4",
          children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
            type: "button",
            className: "text-accent shadow-white-volume hover:bg-accent-dark hover:shadow-accent-volume flex-1 rounded-full bg-white py-2 px-6 text-center text-sm font-semibold transition-all hover:text-white",
            children: "Clear"
          }), /*#__PURE__*/jsx_runtime_.jsx("button", {
            type: "button",
            className: "bg-accent shadow-accent-volume hover:bg-accent-dark flex-1 rounded-full py-2 px-6 text-center text-sm font-semibold text-white transition-all",
            children: "Apply"
          })]
        })]
      })]
    });
  } else if (dropdownFor === 'price-range') {
    const currencyData = [{
      id: 1,
      image: '/images/chains/ETH.png',
      text: 'ETH'
    }, {
      id: 2,
      image: '/images/chains/FLOW.png',
      text: 'FLOW'
    }, {
      id: 3,
      image: '/images/chains/FUSD.png',
      text: 'FUSD'
    }, {
      id: 4,
      image: '/images/chains/XTZ.png',
      text: 'XTZ'
    }, {
      id: 5,
      image: '/images/chains/DAI.png',
      text: 'DAI'
    }, {
      id: 6,
      image: '/images/chains/RARI.png',
      text: 'RARI'
    }];
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "my-1 mr-2.5",
      children: /*#__PURE__*/jsx_runtime_.jsx((react_default()), {
        animation: "fade",
        arrow: false,
        trigger: "click",
        interactive: true,
        placement: "bottom",
        className: "tooltip-container",
        content: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "dropdown-menu dark:bg-jacarta-800 z-10 min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl show",
          "aria-labelledby": "priceRangeFilter",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "dropdown mb-4 cursor-pointer px-5 pt-2 relative",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
              className: "currency-dropdown dark:bg-jacarta-700 dropdown-toggle border-jacarta-100 dark:border-jacarta-600 flex items-center justify-between rounded-lg border py-3.5 px-3 text-sm dark:text-white w-full",
              onClick: handleCurrencyDropdown,
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                className: "font-display flex items-center",
                children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/images/chains/ETH.png",
                  alt: "eth",
                  className: "mr-2 h-5 w-5 rounded-full"
                }), "ETH"]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                width: "24",
                height: "24",
                className: "fill-jacarta-500 h-4 w-4 dark:fill-white",
                children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                  fill: "none",
                  d: "M0 0h24v24H0z"
                }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                  d: "M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                })]
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: currencyDropdown ? 'dark:bg-jacarta-800 z-10 min-w-[252px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl show absolute top-full right-0' : 'dark:bg-jacarta-800 z-10 min-w-[252px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl absolute top-full right-0 hidden',
              children: currencyData.map(({
                id,
                text,
                image
              }) => {
                return /*#__PURE__*/jsx_runtime_.jsx("button", {
                  className: "dropdown-item font-display text-jacarta-700 dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white",
                  onClick: () => setCurrencyDropdown(false),
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                    className: "flex items-center",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: image,
                      alt: "eth",
                      className: "mr-2 h-5 w-5 rounded-full"
                    }), text]
                  })
                }, id);
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex items-center space-x-3 px-5 pb-2",
            children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
              type: "number",
              placeholder: "From",
              value: currencyValFrom,
              onChange: e => handleCurrencyValFrom(e),
              className: "text-jacarta-700 placeholder-jacarta-500 focus:ring-accent border-jacarta-100 w-full max-w-[7.5rem] rounded-lg border py-[0.6875rem] px-4 dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
            }), /*#__PURE__*/jsx_runtime_.jsx("input", {
              type: "number",
              placeholder: "To",
              value: currencyValTo,
              onChange: e => handleCurrencyValTo(e),
              className: "text-jacarta-700 placeholder-jacarta-500 focus:ring-accent border-jacarta-100 w-full max-w-[7.5rem] rounded-lg border py-[0.6875rem] px-4 dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "dark:border-jacarta-600 border-jacarta-100 -ml-2 -mr-2 mt-4 flex items-center justify-center space-x-3 border-t px-7 pt-4",
            children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
              type: "button",
              className: "text-accent shadow-white-volume hover:bg-accent-dark hover:shadow-accent-volume flex-1 rounded-full bg-white py-2 px-6 text-center text-sm font-semibold transition-all hover:text-white",
              children: "Clear"
            }), /*#__PURE__*/jsx_runtime_.jsx("button", {
              type: "button",
              className: "bg-accent shadow-accent-volume hover:bg-accent-dark flex-1 rounded-full py-2 px-6 text-center text-sm font-semibold text-white transition-all",
              children: "Apply"
            })]
          })]
        }),
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
          className: "group dropdown-toggle dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 font-display text-jacarta-700 flex h-9 items-center rounded-lg border bg-white px-4 text-sm font-semibold transition-colors hover:border-transparent hover:text-white dark:text-white",
          id: "priceRangeFilter",
          "data-bs-toggle": "dropdown",
          "data-bs-auto-close": "outside",
          "aria-expanded": "false",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: "24",
            height: "24",
            className: "fill-jacarta-700 dark:fill-jacarta-100 mr-1 h-4 w-4 transition-colors group-hover:fill-white",
            children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
              fill: "none",
              d: "M0 0h24v24H0z"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M17 16h2V4H9v2h8v10zm0 2v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3zM5.003 8L5 20h10V8H5.003zM7 16h4.5a.5.5 0 1 0 0-1h-3a2.5 2.5 0 1 1 0-5H9V9h2v1h2v2H8.5a.5.5 0 1 0 0 1h3a2.5 2.5 0 1 1 0 5H11v1H9v-1H7v-2z"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "Price Range"
          })]
        })
      })
    });
  } else if (dropdownFor === 'last7Days-ranks') {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "dropdown relative my-1 cursor-pointer",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
        className: "dark:bg-jacarta-700 itemDateDropdown dropdown-toggle border-jacarta-100 dark:border-jacarta-600 inline-flex w-48 items-center justify-between rounded-lg border bg-white py-2 px-3 text-sm dark:text-white",
        onClick: handleItemDateDropdown,
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "font-display",
          children: "Last 7 Days"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          width: "24",
          height: "24",
          className: "fill-jacarta-500 h-4 w-4 dark:fill-white",
          children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
            fill: "none",
            d: "M0 0h24v24H0z"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            d: "M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: itemDateDropdown ? 'dropdown-menu dark:bg-jacarta-800 z-10 whitespace-nowrap rounded-xl max-w-xs w-[13rem] bg-white py-4 px-2 text-left shadow-xl show absolute top-full right-0' : 'dropdown-menu dark:bg-jacarta-800 z-10 whitespace-nowrap rounded-xl max-w-xs w-[13rem] bg-white py-4 px-2 text-left shadow-xl hidden absolute top-full right-0',
        children: data.map(({
          id,
          text
        }) => {
          return /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
            onClick: () => {
              setsortActive(id);
              dispatch((0,counterSliceReducer/* updateRenkingDataByPostdate */.Y2)(text));
            },
            className: "dropdown-item font-display text-jacarta-700 dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white",
            children: [text, sortActive === id && /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              width: "24",
              height: "24",
              className: "fill-accent mb-[3px] h-4 w-4",
              children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                fill: "none",
                d: "M0 0h24v24H0z"
              }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
              })]
            })]
          }, id);
        })
      })]
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
};

/* harmony default export */ const recently_added_dropdown = (Recently_added_dropdown);
;// CONCATENATED MODULE: ./components/shared/categories/trending_categories_items.tsx











const Trending_categories_items = () => {
  const {
    0: itemdata,
    1: setItemdata
  } = (0,external_react_.useState)(trendingCategoryData);
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    0: filterVal,
    1: setFilterVal
  } = (0,external_react_.useState)(0);

  const handleFilter = category => {
    if (category !== "all") {
      setItemdata(trendingCategoryData.filter(item => item.category === category));
    } else {
      setItemdata(trendingCategoryData);
    }
  };

  const sortText = [{
    id: 1,
    text: "Recently Added"
  }, {
    id: 2,
    text: "Price: Low to High"
  }, {
    id: 3,
    text: "Price: high to low"
  }, {
    id: 4,
    text: "Auction Ending Soon"
  }];
  (0,external_react_.useEffect)(() => {
    dispatch((0,counterSliceReducer/* updateTrendingCategoryItemData */.Nf)(itemdata.slice(0, 8)));
  }, [itemdata, dispatch]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "mb-8 flex flex-wrap items-center justify-between",
      children: [/*#__PURE__*/jsx_runtime_.jsx("ul", {
        className: "flex flex-wrap items-center",
        children: tranding_category_filter.map(({
          id,
          svg,
          text
        }) => {
          if (text === "all") {
            return /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "my-1 mr-2.5",
              children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                className: filterVal === id ? "dark:border-jacarta-600 group bg-accent border-jacarta-100 font-display flex h-9 items-center rounded-lg border px-4 text-sm font-semibold transition-colors border-transparent text-white dark:border-transparent capitalize" : "dark:border-jacarta-600 dark:bg-jacarta-900 dark:hover:bg-accent group hover:bg-accent border-jacarta-100 font-display text-jacarta-500 flex h-9 items-center rounded-lg border bg-white px-4 text-sm font-semibold transition-colors hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent dark:hover:text-white capitalize",
                onClick: () => {
                  handleFilter(text);
                  setFilterVal(id);
                },
                children: text
              })
            }, id);
          } else {
            return /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "my-1 mr-2.5",
              children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                onClick: () => {
                  handleFilter(text);
                  setFilterVal(id);
                },
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: filterVal === id ? "dark:border-jacarta-600 group bg-accent border-jacarta-100 font-display flex h-9 items-center rounded-lg border px-4 text-sm font-semibold transition-colors border-transparent text-white dark:border-transparent capitalize" : "dark:border-jacarta-600 dark:bg-jacarta-900 dark:hover:bg-accent group hover:bg-accent border-jacarta-100 font-display text-jacarta-500 flex h-9 items-center rounded-lg border bg-white px-4 text-sm font-semibold transition-colors hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent dark:hover:text-white capitalize",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("svg", {
                    className: filterVal === id ? "icon mr-1 h-4 w-4 transition-colors fill-white" : "icon fill-jacarta-700 dark:fill-jacarta-100 mr-1 h-4 w-4 transition-colors group-hover:fill-white",
                    children: /*#__PURE__*/jsx_runtime_.jsx("use", {
                      xlinkHref: `/icons.svg#icon-${svg}`
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: text
                  })]
                })
              })
            }, id);
          }
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(recently_added_dropdown, {
        data: sortText,
        dropdownFor: "recently_added"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(categoryItem, {})]
  });
};

/* harmony default export */ const trending_categories_items = (Trending_categories_items);

/***/ }),

/***/ 7876:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headLine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7267);
/* harmony import */ var _carousel_Feature_collection_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9905);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_carousel_Feature_collection_carousel__WEBPACK_IMPORTED_MODULE_2__]);
_carousel_Feature_collection_carousel__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const Feature_collections = ({
  bgWhite = false
}) => {
  return /*#__PURE__*/_jsx("div", {
    children: /*#__PURE__*/_jsxs("section", {
      className: "py-24 relative",
      children: [bgWhite && /*#__PURE__*/_jsx("picture", {
        className: "pointer-events-none absolute inset-0 -z-10 dark:hidden",
        children: /*#__PURE__*/_jsx(Image, {
          src: "/images/gradient_light.jpg",
          alt: "gradient",
          className: "h-full",
          layout: "fill"
        })
      }), /*#__PURE__*/_jsxs("div", {
        className: "container",
        children: [/*#__PURE__*/_jsx(HeadLine, {
          image: "https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/1f4a5.png",
          text: "Featured collections",
          classes: "font-display text-jacarta-700 mb-8 text-center text-3xl dark:text-white"
        }), /*#__PURE__*/_jsx("div", {
          className: "relative",
          children: /*#__PURE__*/_jsx(Feature_collections_carousel, {})
        })]
      })]
    })
  });
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Feature_collections)));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ top_collection)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./data/shared/collection_data.tsx
const collection_data = [{
  id: 1,
  title: 'NFT Funny Cat',
  image: '/images/avatars/avatar_1.jpg',
  icon: true,
  amount: '7,080.95',
  postTime: '2022-07-20',
  postDate: 'Last 24 Hours'
}, {
  id: 2,
  title: 'Cryptopank',
  image: '/images/avatars/avatar_2.jpg',
  icon: true,
  amount: '6,548,133',
  postTime: '2022-07-10',
  postDate: 'Last 24 Hours'
}, {
  id: 3,
  title: 'Prince Ape Planet',
  image: '/images/avatars/avatar_3.jpg',
  icon: false,
  amount: '4,823,927',
  postTime: '2022-07-08',
  postDate: 'Last 24 Hours'
}, {
  id: 4,
  title: 'Hey Mrsmeseks',
  image: '/images/avatars/avatar_4.jpg',
  icon: true,
  amount: '3,186',
  postTime: '2022-07-01',
  postDate: 'Last 24 Hours'
}, {
  id: 5,
  title: 'Bored Bunny',
  image: '/images/avatars/avatar_5.jpg',
  icon: false,
  amount: '3,027',
  postTime: '2022-07-05',
  postDate: 'Last 24 Hours'
}, {
  id: 6,
  title: 'Wow Frens',
  image: '/images/avatars/avatar_6.jpg',
  icon: false,
  amount: '2,586',
  postTime: '2022-07-08',
  postDate: 'Last 7 days'
}, {
  id: 7,
  title: 'Origin Morish',
  image: '/images/avatars/avatar_7.jpg',
  icon: true,
  amount: '2,347.85',
  postTime: '2022-07-20',
  postDate: 'Last 7 days'
}, {
  id: 8,
  title: 'Superdo',
  image: '/images/avatars/avatar_8.jpg',
  icon: true,
  amount: '2,115.71',
  postTime: '2022-07-10',
  postDate: 'Last 7 days'
}, {
  id: 9,
  title: 'NFT stars',
  image: '/images/avatars/avatar_9.jpg',
  icon: false,
  amount: '2,027',
  postTime: '2022-07-12',
  postDate: 'Last 7 days'
}, {
  id: 10,
  title: 'Asumitsu',
  image: '/images/avatars/avatar_10.jpg',
  icon: true,
  amount: '1,989.70',
  postTime: '2022-07-15',
  postDate: 'Last 7 days'
}, {
  id: 11,
  title: 'Pank Skull',
  image: '/images/avatars/avatar_11.jpg',
  icon: false,
  amount: '1,726.70',
  postTime: '2022-07-16',
  postDate: 'Last 7 days'
}, {
  id: 12,
  title: 'Lazy Panda',
  image: '/images/avatars/avatar_12.jpg',
  icon: false,
  amount: '1,589.03',
  postTime: '2022-07-14',
  postDate: 'Last 7 days'
}, {
  id: 13,
  title: 'Arcahorizons',
  image: '/images/avatars/avatar_13.jpg',
  icon: true,
  amount: '1,157',
  postTime: '2022-07-20',
  postDate: 'Last 24 Hours'
}, {
  id: 14,
  title: 'Sussygirl',
  image: '/images/avatars/avatar_14.jpg',
  icon: false,
  amount: '1,030',
  postTime: '2022-06-20',
  postDate: 'Last 24 Hours'
}, {
  id: 15,
  title: 'Smilebin',
  image: '/images/avatars/avatar_15.jpg',
  icon: true,
  amount: '999.51',
  postTime: '2022-07-20',
  postDate: 'Last 7 days'
}, {
  id: 16,
  title: 'Pankysmoke',
  image: '/images/avatars/avatar_16.jpg',
  icon: false,
  amount: '875.65',
  postTime: '2022-07-20',
  postDate: 'Last 7 days'
}];
const collection_item_data = [{
  id: 'avatar_1',
  title: 'NFT Funny Cat',
  image: '/images/avatars/avatar_1.jpg',
  icon: true,
  creator: '051_Hart',
  text: 'Unique, fully 3D and built to unite the design multiverse. Designed and styled by Digimental.',
  amount: '7,080.95',
  details: [{
    id: '07.2K',
    detailsNumber: '7.2K',
    detailsText: 'Items'
  }, {
    id: '15.3K',
    detailsNumber: '5.3K',
    detailsText: 'Owners'
  }, {
    id: '22.55',
    detailsNumber: '2.55',
    detailsText: 'Floor Price'
  }, {
    id: '317.2K',
    detailsNumber: '17.2K',
    detailsText: 'Volume Traded'
  }]
}, {
  id: 'avatar_2',
  title: 'Cryptopank',
  image: '/images/avatars/avatar_2.jpg',
  icon: true,
  creator: 'Wow Frens',
  text: 'Unique, fully 3D and built to unite the design multiverse. Designed and styled by Digimental.',
  details: [{
    id: '07.2K',
    detailsNumber: '7.2K',
    detailsText: 'Items'
  }, {
    id: '15.3K',
    detailsNumber: '5.3K',
    detailsText: 'Owners'
  }, {
    id: '22.55',
    detailsNumber: '2.55',
    detailsText: 'Floor Price'
  }, {
    id: '317.2K',
    detailsNumber: '17.2K',
    detailsText: 'Volume Traded'
  }],
  amount: '6,548,133'
}, {
  id: 'avatar_3',
  title: 'Prince Ape Planet',
  image: '/images/avatars/avatar_3.jpg',
  icon: false,
  creator: 'Origin Morish',
  text: 'Unique, fully 3D and built to unite the design multiverse. Designed and styled by Digimental.',
  details: [{
    id: '07.2K',
    detailsNumber: '7.2K',
    detailsText: 'Items'
  }, {
    id: '15.3K',
    detailsNumber: '5.3K',
    detailsText: 'Owners'
  }, {
    id: '22.55',
    detailsNumber: '2.55',
    detailsText: 'Floor Price'
  }, {
    id: '317.2K',
    detailsNumber: '17.2K',
    detailsText: 'Volume Traded'
  }],
  amount: 'NFT stars'
}, {
  id: 'avatar_4',
  title: 'Hey Mrsmeseks',
  image: '/images/avatars/avatar_4.jpg',
  icon: true,
  creator: 'Lazy Panda',
  text: 'Unique, fully 3D and built to unite the design multiverse. Designed and styled by Digimental.',
  details: [{
    id: '07.2K',
    detailsNumber: '7.2K',
    detailsText: 'Items'
  }, {
    id: '15.3K',
    detailsNumber: '5.3K',
    detailsText: 'Owners'
  }, {
    id: '22.55',
    detailsNumber: '2.55',
    detailsText: 'Floor Price'
  }, {
    id: '317.2K',
    detailsNumber: '17.2K',
    detailsText: 'Volume Traded'
  }],
  amount: '3,186'
}, {
  id: 'avatar_5',
  title: 'Bored Bunny',
  image: '/images/avatars/avatar_5.jpg',
  icon: false,
  creator: 'Crytopank',
  text: 'Unique, fully 3D and built to unite the design multiverse. Designed and styled by Digimental.',
  details: [{
    id: '07.2K',
    detailsNumber: '7.2K',
    detailsText: 'Items'
  }, {
    id: '15.3K',
    detailsNumber: '5.3K',
    detailsText: 'Owners'
  }, {
    id: '22.55',
    detailsNumber: '2.55',
    detailsText: 'Floor Price'
  }, {
    id: '317.2K',
    detailsNumber: '17.2K',
    detailsText: 'Volume Traded'
  }],
  amount: '3,027'
}, {
  id: 'avatar_6',
  title: 'Wow Frens',
  image: '/images/avatars/avatar_6.jpg',
  icon: false,
  creator: 'Hey Mrsmeseks',
  text: 'Unique, fully 3D and built to unite the design multiverse. Designed and styled by Digimental.',
  details: [{
    id: '07.2K',
    detailsNumber: '7.2K',
    detailsText: 'Items'
  }, {
    id: '15.3K',
    detailsNumber: '5.3K',
    detailsText: 'Owners'
  }, {
    id: '22.55',
    detailsNumber: '2.55',
    detailsText: 'Floor Price'
  }, {
    id: '317.2K',
    detailsNumber: '17.2K',
    detailsText: 'Volume Traded'
  }],
  amount: '2,586'
}, {
  id: 'avatar_7',
  title: 'Origin Morish',
  image: '/images/avatars/avatar_7.jpg',
  icon: true,
  creator: 'alyxbow',
  text: 'Unique, fully 3D and built to unite the design multiverse. Designed and styled by Digimental.',
  details: [{
    id: '07.2K',
    detailsNumber: '7.2K',
    detailsText: 'Items'
  }, {
    id: '15.3K',
    detailsNumber: '5.3K',
    detailsText: 'Owners'
  }, {
    id: '22.55',
    detailsNumber: '2.55',
    detailsText: 'Floor Price'
  }, {
    id: '317.2K',
    detailsNumber: '17.2K',
    detailsText: 'Volume Traded'
  }],
  amount: '2,347.85'
}, {
  id: ' avatar_8',
  title: 'Superdo',
  image: '/images/avatars/avatar_8.jpg',
  icon: true,
  creator: 'Wow Frens',
  text: 'Unique, fully 3D and built to unite the design multiverse. Designed and styled by Digimental.',
  details: [{
    id: '07.2K',
    detailsNumber: '7.2K',
    detailsText: 'Items'
  }, {
    id: '15.3K',
    detailsNumber: '5.3K',
    detailsText: 'Owners'
  }, {
    id: '22.55',
    detailsNumber: '2.55',
    detailsText: 'Floor Price'
  }, {
    id: '317.2K',
    detailsNumber: '17.2K',
    detailsText: 'Volume Traded'
  }],
  amount: '2,115.71'
}, {
  id: 'avatar_9',
  title: 'NFT stars',
  image: '/images/avatars/avatar_9.jpg',
  icon: false,
  creator: 'NFT stars',
  text: 'Unique, fully 3D and built to unite the design multiverse. Designed and styled by Digimental.',
  details: [{
    id: '07.2K',
    detailsNumber: '7.2K',
    detailsText: 'Items'
  }, {
    id: '15.3K',
    detailsNumber: '5.3K',
    detailsText: 'Owners'
  }, {
    id: '22.55',
    detailsNumber: '2.55',
    detailsText: 'Floor Price'
  }, {
    id: '317.2K',
    detailsNumber: '17.2K',
    detailsText: 'Volume Traded'
  }],
  amount: '2,027'
}, {
  id: 'avatar_10',
  title: 'Asumitsu',
  image: '/images/avatars/avatar_10.jpg',
  icon: true,
  creator: 'Origin Morish',
  text: 'Unique, fully 3D and built to unite the design multiverse. Designed and styled by Digimental.',
  details: [{
    id: '07.2K',
    detailsNumber: '7.2K',
    detailsText: 'Items'
  }, {
    id: '15.3K',
    detailsNumber: '5.3K',
    detailsText: 'Owners'
  }, {
    id: '22.55',
    detailsNumber: '2.55',
    detailsText: 'Floor Price'
  }, {
    id: '317.2K',
    detailsNumber: '17.2K',
    detailsText: 'Volume Traded'
  }],
  amount: '1,989.70'
}, {
  id: 'avatar_11',
  title: 'Pank Skull',
  image: '/images/avatars/avatar_11.jpg',
  icon: false,
  creator: 'Lazy Panda',
  text: 'Unique, fully 3D and built to unite the design multiverse. Designed and styled by Digimental.',
  details: [{
    id: '07.2K',
    detailsNumber: '7.2K',
    detailsText: 'Items'
  }, {
    id: '15.3K',
    detailsNumber: '5.3K',
    detailsText: 'Owners'
  }, {
    id: '22.55',
    detailsNumber: '2.55',
    detailsText: 'Floor Price'
  }, {
    id: '317.2K',
    detailsNumber: '17.2K',
    detailsText: 'Volume Traded'
  }],
  amount: '1,726.70'
}, {
  id: 'avatar_12',
  title: 'Lazy Panda',
  image: '/images/avatars/avatar_12.jpg',
  icon: false,
  creator: '051_Hart',
  text: 'Unique, fully 3D and built to unite the design multiverse. Designed and styled by Digimental.',
  details: [{
    id: '07.2K',
    detailsNumber: '7.2K',
    detailsText: 'Items'
  }, {
    id: '15.3K',
    detailsNumber: '5.3K',
    detailsText: 'Owners'
  }, {
    id: '22.55',
    detailsNumber: '2.55',
    detailsText: 'Floor Price'
  }, {
    id: '317.2K',
    detailsNumber: '17.2K',
    detailsText: 'Volume Traded'
  }],
  amount: '1,589.03'
}, {
  id: 'avatar_13',
  title: 'Arcahorizons',
  image: '/images/avatars/avatar_13.jpg',
  icon: true,
  creator: 'Crytopank',
  text: 'Unique, fully 3D and built to unite the design multiverse. Designed and styled by Digimental.',
  details: [{
    id: '07.2K',
    detailsNumber: '7.2K',
    detailsText: 'Items'
  }, {
    id: '15.3K',
    detailsNumber: '5.3K',
    detailsText: 'Owners'
  }, {
    id: '22.55',
    detailsNumber: '2.55',
    detailsText: 'Floor Price'
  }, {
    id: '317.2K',
    detailsNumber: '17.2K',
    detailsText: 'Volume Traded'
  }],
  amount: '1,157'
}, {
  id: 'avatar_14',
  title: 'Sussygirl',
  image: '/images/avatars/avatar_14.jpg',
  icon: false,
  creator: 'Hey Mrsmeseks',
  text: 'Unique, fully 3D and built to unite the design multiverse. Designed and styled by Digimental.',
  details: [{
    id: '07.2K',
    detailsNumber: '7.2K',
    detailsText: 'Items'
  }, {
    id: '15.3K',
    detailsNumber: '5.3K',
    detailsText: 'Owners'
  }, {
    id: '22.55',
    detailsNumber: '2.55',
    detailsText: 'Floor Price'
  }, {
    id: '317.2K',
    detailsNumber: '17.2K',
    detailsText: 'Volume Traded'
  }],
  amount: '1,030'
}, {
  id: 'avatar_15',
  title: 'Smilebin',
  image: '/images/avatars/avatar_15.jpg',
  icon: true,
  creator: 'alyxbow',
  text: 'Unique, fully 3D and built to unite the design multiverse. Designed and styled by Digimental.',
  details: [{
    id: '07.2K',
    detailsNumber: '7.2K',
    detailsText: 'Items'
  }, {
    id: '15.3K',
    detailsNumber: '5.3K',
    detailsText: 'Owners'
  }, {
    id: '22.55',
    detailsNumber: '2.55',
    detailsText: 'Floor Price'
  }, {
    id: '317.2K',
    detailsNumber: '17.2K',
    detailsText: 'Volume Traded'
  }],
  amount: '999.51'
}, {
  id: 'avatar_16',
  title: 'Pankysmoke',
  image: '/images/avatars/avatar_16.jpg',
  icon: false,
  creator: 'Wow Frens',
  text: 'Unique, fully 3D and built to unite the design multiverse. Designed and styled by Digimental.',
  details: [{
    id: '07.2K',
    detailsNumber: '7.2K',
    detailsText: 'Items'
  }, {
    id: '15.3K',
    detailsNumber: '5.3K',
    detailsText: 'Owners'
  }, {
    id: '22.55',
    detailsNumber: '2.55',
    detailsText: 'Floor Price'
  }, {
    id: '317.2K',
    detailsNumber: '17.2K',
    detailsText: 'Volume Traded'
  }],
  amount: '875.65'
}];
const collection_activity_item_data = [{
  id: '0Lazyone Panda',
  image: '/images/avatars/avatar_2.jpg',
  title: 'Lazyone Panda',
  price: 'sold for 1.515 ETH',
  time: '30 minutes 45 seconds ago',
  category: 'purchases'
}, {
  id: '1NFT Funny Cat',
  image: '/images/avatars/avatar_1.jpg',
  // image: '/images/products/item_21_sm.jpg',
  title: 'NFT Funny Cat',
  price: 'listed by 051_Hart .08095 ETH',
  time: '40 minutes 36 seconds ago',
  category: 'listing'
}, {
  id: '2Prince Ape Planet',
  image: '/images/avatars/avatar_3.jpg',
  // image: '/images/products/item_22_sm.jpg',
  title: 'Prince Ape Planet',
  price: 'tranferred from 027ab52',
  time: '1 hour 15 minutes ago',
  category: 'transfer'
}, {
  id: '3Origin Morish',
  image: '/images/avatars/avatar_4.jpg',
  // image: '/images/products/item_23_sm.jpg',
  title: 'Origin Morish',
  price: 'bid cancelled by 0397fd',
  time: '1 hour 55 minutes ago',
  category: 'bids'
}, {
  id: '4Portrait Gallery#029',
  image: '/images/avatars/avatar_5.jpg',
  // image: '/images/products/item_24_sm.jpg',
  title: 'Portrait Gallery#029',
  price: 'liked by Trina_more',
  time: '2 hours 24 minutes ago',
  category: 'likes'
}, {
  id: '5Portrait Gallery#029',
  image: '/images/avatars/avatar_6.jpg',
  // image: '/images/products/item_24_sm.jpg',
  title: 'Portrait Gallery#029',
  price: 'liked by Trina_more',
  time: '2 hours 24 minutes ago',
  category: 'likes'
}, // =============
// =============
// =============
{
  id: '6Lazyone Panda',
  image: '/images/avatars/avatar_3.jpg',
  title: 'Lazyone Panda',
  price: 'sold for 1.515 ETH',
  time: '30 minutes 45 seconds ago',
  category: 'purchases'
}, {
  id: '7NFT Funny Cat',
  image: '/images/avatars/avatar_2.jpg',
  // image: '/images/products/item_21_sm.jpg',
  title: 'NFT Funny Cat',
  price: 'listed by 051_Hart .08095 ETH',
  time: '40 minutes 36 seconds ago',
  category: 'listing'
}, {
  id: '8Prince Ape Planet',
  image: '/images/avatars/avatar_5.jpg',
  // image: '/images/products/item_22_sm.jpg',
  title: 'Prince Ape Planet',
  price: 'tranferred from 027ab52',
  time: '1 hour 15 minutes ago',
  category: 'transfer'
}, {
  id: '9Origin Morish',
  image: '/images/avatars/avatar_6.jpg',
  // image: '/images/products/item_23_sm.jpg',
  title: 'Origin Morish',
  price: 'bid cancelled by 0397fd',
  time: '1 hour 55 minutes ago',
  category: 'bids'
}, {
  id: '10Portrait Gallery#029',
  image: '/images/avatars/avatar_3.jpg',
  // image: '/images/products/item_24_sm.jpg',
  title: 'Portrait Gallery#029',
  price: 'liked by Trina_more',
  time: '2 hours 24 minutes ago',
  category: 'likes'
}, {
  id: '11Portrait Gallery#029',
  image: '/images/avatars/avatar_1.jpg',
  // image: '/images/products/item_24_sm.jpg',
  title: 'Portrait Gallery#029',
  price: 'liked by Trina_more',
  time: '2 hours 24 minutes ago',
  category: 'bids'
}];
const collectionCategoryData = [{
  parentId: 1,
  name: " Today's Drops",
  collections: [{
    id: 1,
    title: 'NFT Funny Cat',
    image: '/images/avatars/avatar_1.jpg',
    icon: true,
    amount: '7,080.95',
    postTime: '2022-07-20'
  }, {
    id: 2,
    title: 'Cryptopank',
    image: '/images/avatars/avatar_2.jpg',
    icon: true,
    amount: '6,548,133',
    postTime: '2022-07-10'
  }, {
    id: 3,
    title: 'Prince Ape Planet',
    image: '/images/avatars/avatar_3.jpg',
    icon: false,
    amount: '4,823,927',
    postTime: '2022-07-08'
  }, {
    id: 4,
    title: 'Hey Mrsmeseks',
    image: '/images/avatars/avatar_4.jpg',
    icon: true,
    amount: '3,186',
    postTime: '2022-07-01'
  }]
}, {
  parentId: 2,
  name: 'Top Sellers',
  collections: [{
    id: 5,
    title: 'Bored Bunny',
    image: '/images/avatars/avatar_5.jpg',
    icon: false,
    amount: '3,027',
    postTime: '2022-07-05'
  }, {
    id: 6,
    title: 'Wow Frens',
    image: '/images/avatars/avatar_6.jpg',
    icon: false,
    amount: '2,586',
    postTime: '2022-07-08'
  }, {
    id: 7,
    title: 'Origin Morish',
    image: '/images/avatars/avatar_7.jpg',
    icon: true,
    amount: '2,347.85',
    postTime: '2022-07-20'
  }, {
    id: 8,
    title: 'Superdo',
    image: '/images/avatars/avatar_8.jpg',
    icon: true,
    amount: '2,115.71',
    postTime: '2022-07-10'
  }]
}, {
  parentId: 3,
  name: 'Top Buyers',
  collections: [{
    id: 9,
    title: 'NFT stars',
    image: '/images/avatars/avatar_9.jpg',
    icon: false,
    amount: '2,027',
    postTime: '2022-07-12'
  }, {
    id: 10,
    title: 'Asumitsu',
    image: '/images/avatars/avatar_10.jpg',
    icon: true,
    amount: '1,989.70',
    postTime: '2022-07-15'
  }, {
    id: 11,
    title: 'Pank Skull',
    image: '/images/avatars/avatar_11.jpg',
    icon: false,
    amount: '1,726.70',
    postTime: '2022-07-16'
  }, {
    id: 12,
    title: 'Lazy Panda',
    image: '/images/avatars/avatar_12.jpg',
    icon: false,
    amount: '1,589.03',
    postTime: '2022-07-14'
  }]
}];

// EXTERNAL MODULE: ./components/shared/headLine.tsx
var headLine = __webpack_require__(7267);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/shared/collectrions/top_collection.tsx
/* eslint-disable @next/next/no-img-element */








const Top_collection = () => {
  const {
    0: timeActiveText,
    1: setTimeActiveText
  } = (0,external_react_.useState)('last 7 days');
  const {
    0: data,
    1: setData
  } = (0,external_react_.useState)(collection_data);
  const {
    0: dropdownShow,
    1: setDropdownShow
  } = (0,external_react_.useState)(false);
  const timeText = [{
    id: 1,
    text: 'Last 24 Hours'
  }, {
    id: 2,
    text: 'Last 7 days'
  }, {
    id: 3,
    text: 'Last 30 days'
  }];

  const handleFilter = text => {
    setTimeActiveText(text);
    const newCollectionData = collection_data.filter(item => {
      if (text === 'Last 30 days') {
        return item;
      }

      return item.postDate === text;
    });
    setData(newCollectionData);
  };

  const handleDropdown = e => {
    window.addEventListener('click', w => {
      if (w.target.closest('.dropdown-toggle')) {
        if (dropdownShow) {
          setDropdownShow(false);
        } else {
          setDropdownShow(true);
        }
      } else {
        setDropdownShow(false);
      }
    });
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
      className: "dark:bg-jacarta-800 relative py-24",
      children: [/*#__PURE__*/jsx_runtime_.jsx("picture", {
        className: "pointer-events-none absolute inset-0 -z-10 dark:hidden",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/images/gradient_light.jpg",
          alt: "gradient",
          className: "h-full w-full"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "font-display text-jacarta-700 mb-12 text-center text-lg sm:text-3xl dark:text-white flex justify-center items-center gap-x-3",
          children: [/*#__PURE__*/jsx_runtime_.jsx(headLine/* default */.Z, {
            text: "Top collections over",
            classes: "inline"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "dropdown cursor-pointer relative",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
              className: "dropdown-toggle text-accent inline-flex items-center",
              type: "button",
              onClick: e => handleDropdown(e),
              children: [timeActiveText, /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                width: "24",
                height: "24",
                className: "fill-accent h-8 w-8",
                children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                  fill: "none",
                  d: "M0 0h24v24H0z"
                }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                  d: "M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                })]
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: dropdownShow ? 'dropdown-menu dark:bg-jacarta-800 z-10  min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl show text-jacarta-700 dark:text-white absolute m-0 top-full' : 'dropdown-menu dark:bg-jacarta-800 z-10  min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl hidden text-jacarta-700 dark:text-white absolute m-0 top-full',
              children: timeText.map(({
                id,
                text
              }) => {
                return /*#__PURE__*/jsx_runtime_.jsx("button", {
                  onClick: () => {
                    handleFilter(text);
                  },
                  className: "block dropdown-text",
                  children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "dropdown-item font-normal text-base dark:hover:bg-jacarta-600 hover:bg-jacarta-50 block rounded-xl px-5 py-2 transition-colors",
                    children: text
                  })
                }, id);
              })
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-[1.875rem] lg:grid-cols-4",
          children: data.map(item => {
            const {
              id,
              image,
              title,
              icon,
              amount,
              postTime
            } = item;
            const itemLink = image.split('/').slice(-1).toString().replace('.jpg', '');
            return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "border-jacarta-100 dark:bg-jacarta-700 rounded-2xl flex border bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent",
              children: [/*#__PURE__*/jsx_runtime_.jsx("figure", {
                className: "mr-4 shrink-0",
                children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  legacyBehavior: true,
                  href: '/collection/' + itemLink,
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                    className: "relative block",
                    children: [/*#__PURE__*/jsx_runtime_.jsx((image_default()), {
                      src: image,
                      alt: title,
                      className: "rounded-2lg",
                      height: 48,
                      width: 48,
                      objectFit: "cover"
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "dark:border-jacarta-600 bg-jacarta-700 absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white text-xs text-white",
                      children: id
                    }), icon && /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "dark:border-jacarta-600 bg-green absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white",
                      "data-tippy-content": "Verified Collection",
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "24",
                        height: "24",
                        className: "h-[.875rem] w-[.875rem] fill-white",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                          fill: "none",
                          d: "M0 0h24v24H0z"
                        }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                          d: "M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                        })]
                      })
                    })]
                  })
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                  legacyBehavior: true,
                  href: '/collection/' + itemLink,
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "block",
                    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white",
                      children: title
                    })
                  })
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                  className: "dark:text-jacarta-300 text-sm",
                  children: [amount, " ETH"]
                })]
              })]
            }, id);
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "mt-10 text-center",
          children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            legacyBehavior: true,
            href: "/rankings",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "bg-accent shadow-accent-volume hover:bg-accent-dark inline-block rounded-full py-3 px-8 text-center font-semibold text-white transition-all",
              children: "Go to Rankings"
            })
          })
        })]
      })]
    })
  });
};

/* harmony default export */ const top_collection = (Top_collection);

/***/ }),

/***/ 2555:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$9": () => (/* reexport safe */ _categories_tranding_categories__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "Ax": () => (/* reexport safe */ _collectrions_top_collection__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "Sn": () => (/* reexport safe */ _headLine__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   "T8": () => (/* reexport safe */ _bids_bids__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "VM": () => (/* reexport safe */ _hero_hero__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "cU": () => (/* reexport safe */ _blog_newseLatter__WEBPACK_IMPORTED_MODULE_5__.Z)
/* harmony export */ });
/* harmony import */ var _hero_hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4131);
/* harmony import */ var _bids_bids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3169);
/* harmony import */ var _collectrions_top_collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6649);
/* harmony import */ var _categories_tranding_categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3721);
/* harmony import */ var _headLine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7267);
/* harmony import */ var _blog_newseLatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9530);
/* harmony import */ var _categories_Auctions_categories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7065);
/* harmony import */ var _collectrions_Feature_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7876);
/* harmony import */ var _partners_Partners__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8906);
/* harmony import */ var _categories_Browse_category__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4416);
/* harmony import */ var _hero_hero_3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4484);
/* harmony import */ var _tabs_Tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7928);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hero_hero__WEBPACK_IMPORTED_MODULE_0__, _bids_bids__WEBPACK_IMPORTED_MODULE_1__, _categories_tranding_categories__WEBPACK_IMPORTED_MODULE_3__, _collectrions_Feature_collections__WEBPACK_IMPORTED_MODULE_7__, _categories_Browse_category__WEBPACK_IMPORTED_MODULE_9__, _hero_hero_3__WEBPACK_IMPORTED_MODULE_10__, _tabs_Tabs__WEBPACK_IMPORTED_MODULE_11__]);
([_hero_hero__WEBPACK_IMPORTED_MODULE_0__, _bids_bids__WEBPACK_IMPORTED_MODULE_1__, _categories_tranding_categories__WEBPACK_IMPORTED_MODULE_3__, _collectrions_Feature_collections__WEBPACK_IMPORTED_MODULE_7__, _categories_Browse_category__WEBPACK_IMPORTED_MODULE_9__, _hero_hero_3__WEBPACK_IMPORTED_MODULE_10__, _tabs_Tabs__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);





const Auctions_dropdown = ({
  classes
}) => {
  const {
    0: dropdownShow,
    1: setDropdownShow
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const handleDropdown = () => {
    window.addEventListener("click", w => {
      if (w.target.closest(".trending-dots")) {
        if (dropdownShow) {
          setDropdownShow(false);
        } else {
          setDropdownShow(true);
        }
      } else {
        setDropdownShow(false);
      }
    });
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: "relative",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: classes,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("button", {
          onClick: handleDropdown,
          className: "dropdown-toggle trending-dots inline-flex h-10 w-10 items-center justify-center text-sm show",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
            width: "16",
            height: "4",
            viewBox: "0 0 16 4",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: "dark:fill-jacarta-200 fill-jacarta-500",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("circle", {
              cx: "2",
              cy: "2",
              r: "2"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("circle", {
              cx: "8",
              cy: "2",
              r: "2"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("circle", {
              cx: "14",
              cy: "2",
              r: "2"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: dropdownShow ? "dropdown-menu-end dark:bg-jacarta-800 z-10 min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl show text-jacarta-500 absolute top-full right-0" : "dropdown-menu-end dark:bg-jacarta-800 z-10 min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl hidden text-jacarta-500 absolute top-full right-0",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("button", {
            className: "dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white",
            children: "New bid"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("hr", {
            className: "dark:bg-jacarta-600 bg-jacarta-100 my-2 mx-4 h-px border-0"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("button", {
            className: "dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white",
            children: "Refresh Metadata"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("button", {
            className: "dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white",
            children: "Share"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("button", {
            className: "dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white",
            children: "Report"
          })]
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Auctions_dropdown);

/***/ }),

/***/ 7267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



const headLine = ({
  text,
  classes,
  image,
  pera
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
      className: classes,
      children: [image && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        src: image,
        alt: "headling",
        className: "mr-1 inline-block h-6 w-6 bg-contain bg-center text-xl"
      }), text]
    }), pera && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
      className: "dark:text-jacarta-300 mt-6",
      children: "While we take pride in being the first and largest marketplace and in our robust feature set, we also help our partners succeed with the following..."
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headLine);

/***/ }),

/***/ 4131:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1815);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lingui_react__WEBPACK_IMPORTED_MODULE_0__]);
_lingui_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const hero = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section", {
    className: "relative pb-10 pt-20 md:pt-32 h-1527",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("picture", {
      className: "pointer-events-none absolute inset-x-0 top-0 -z-10 block dark:hidden h-full",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
        src: "/images/gradient.jpg",
        alt: "gradient",
        className: "h-full w-full"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("picture", {
      className: "pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
        src: "/images/gradient_dark.jpg",
        alt: "gradient dark",
        className: "h-full w-full"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "container h-full mx-auto",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "grid h-full items-center gap-4 md:grid-cols-12",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "col-span-6 flex h-full flex-col items-center justify-center py-10 md:items-start md:py-20 xl:col-span-4",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h1", {
            className: "text-jacarta-700 font-bold font-display mb-6 text-center text-5xl dark:text-white md:text-left lg:text-6xl xl:text-7xl",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_lingui_react__WEBPACK_IMPORTED_MODULE_0__.Trans, {
              id: "Buy, sell and collect NFTs."
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
            className: "dark:text-jacarta-200 mb-8 text-center text-lg md:text-left",
            children: "The worlds largest digital marketplace for crypto collectibles and non-fungible tokens"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "flex space-x-4",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              legacyBehavior: true,
              href: "/create",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
                className: "bg-accent shadow-accent-volume hover:bg-accent-dark w-36 rounded-full py-3 px-8 text-center font-semibold text-white transition-all",
                children: "Upload"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              legacyBehavior: true,
              href: "/collection/explore_collection",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
                className: "text-accent shadow-white-volume hover:bg-accent-dark hover:shadow-accent-volume w-36 rounded-full bg-white py-3 px-8 text-center font-semibold transition-all hover:text-white",
                children: "Explore"
              })
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "col-span-6 xl:col-span-8",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "relative text-center md:pl-8 md:text-right",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
              src: "/images/hero/hero.jpg",
              alt: "",
              className: "hero-img mt-8 inline-block w-72 rotate-[8deg] sm:w-full lg:w-[24rem] xl:w-[35rem]"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
              src: "/images/hero/3D_elements.png",
              alt: "",
              className: "animate-fly absolute top-0 md:-right-[10%]"
            })]
          })
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hero);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4484:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_shared_hero_3_swiper_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3604);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9241);
/* harmony import */ var swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9176);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var swiper_css_thumbs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7383);
/* harmony import */ var swiper_css_thumbs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(swiper_css_thumbs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





 // Import Swiper styles









const Hero_3 = () => {
  const {
    0: activeThumb,
    1: setActiveThumb
  } = useState(null);
  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsxs("section", {
      className: "relative h-screen",
      children: [/*#__PURE__*/_jsx(Swiper, {
        modules: [FreeMode, Navigation, Thumbs, Autoplay],
        loop: true,
        spaceBetween: 10,
        navigation: true,
        thumbs: {
          swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        className: "full-slider h-screen",
        children: hero_3_swiper_data.map(item => {
          const {
            image,
            id,
            title,
            name,
            titleLink,
            userLink
          } = item;
          return /*#__PURE__*/_jsx(SwiperSlide, {
            children: /*#__PURE__*/_jsxs("div", {
              className: "swiper-slide after:bg-jacarta-900/60 after:absolute after:inset-0",
              children: [/*#__PURE__*/_jsxs("div", {
                className: "container relative z-10 h-full pt-40",
                children: [/*#__PURE__*/_jsx("h2", {
                  className: "font-display text-2xl font-semibold text-white",
                  children: /*#__PURE__*/_jsx(Link, {
                    legacyBehavior: true,
                    href: titleLink,
                    children: /*#__PURE__*/_jsx("a", {
                      children: title
                    })
                  })
                }), /*#__PURE__*/_jsx(Link, {
                  legacyBehavior: true,
                  href: userLink,
                  children: /*#__PURE__*/_jsx("a", {
                    className: "text-2xs font-medium text-white",
                    children: name
                  })
                })]
              }), /*#__PURE__*/_jsx(Image, {
                src: image,
                className: "absolute inset-0 h-full w-full object-cover",
                alt: title,
                layout: "fill"
              })]
            })
          }, id);
        })
      }), /*#__PURE__*/_jsx("div", {
        className: "absolute inset-x-0 bottom-12",
        children: /*#__PURE__*/_jsx("div", {
          className: "container",
          children: /*#__PURE__*/_jsx(Swiper, {
            modules: [FreeMode, Navigation, Thumbs],
            onSwiper: setActiveThumb,
            loop: true,
            spaceBetween: 10,
            slidesPerView: "auto",
            breakpoints: {
              100: {
                slidesPerView: 2
              },
              768: {
                slidesPerView: 3
              }
            },
            className: " full-slider-thumbs swiper-initialized swiper-horizontal swiper-pointer-events swiper-thumbs",
            children: hero_3_swiper_thumbs_data.map(item => {
              const {
                image,
                id
              } = item;
              return /*#__PURE__*/_jsxs(SwiperSlide, {
                className: "swiper-slide cursor-pointer rounded p-5 swiper-slide-duplicate swiper-slide-duplicate-next ",
                children: [/*#__PURE__*/_jsx("img", {
                  src: image,
                  className: "w-full rounded-lg",
                  alt: "thumb 1"
                }), /*#__PURE__*/_jsx("div", {
                  className: "carousel-progress relative -bottom-5 z-10 -ml-5 -mr-5 h-0.5 bg-white/20 ",
                  children: /*#__PURE__*/_jsx("div", {
                    className: "progress bg-accent absolute h-0.5 w-0"
                  })
                })]
              }, id);
            })
          })
        })
      })]
    })
  });
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Hero_3)));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4787);
/* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tippyjs_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const Likes = ({
  like,
  classes = "dark:bg-jacarta-700 absolute top-3 right-3 flex items-center space-x-1 rounded-md bg-white p-2"
}) => {
  const {
    0: likeState,
    1: setLikeState
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(typeof like === "string" ? +like - 1 : like - 1);
  const {
    0: likeNumber,
    1: setlikeNumber
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(likeState);

  const handleLike = () => {
    if (likeState >= likeNumber) {
      setlikeNumber(prev => prev + 1);
    } else {
      setlikeNumber(prev => prev - 1);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: classes,
    onClick: handleLike,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((_tippyjs_react__WEBPACK_IMPORTED_MODULE_0___default()), {
      content: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
        children: "Favorite"
      }),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
        className: "js-likes relative cursor-pointer",
        children: likeState === likeNumber ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("svg", {
          className: "icon icon-heart-fill dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("use", {
            xlinkHref: "/icons.svg#icon-hert-fill"
          })
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("svg", {
          className: "icon icon-heart-fill dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red h-4 w-4",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("use", {
            xlinkHref: "/icons.svg#icon-heart-fill"
          })
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
      className: "dark:text-jacarta-200 text-sm",
      children: likeNumber
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Likes);

/***/ }),

/***/ 8906:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



const Partners = () => {
  const partnerGroup = [{
    id: 1,
    link: "https://www.nft-dao.org/",
    logo: "partner_logo_1"
  }, {
    id: 2,
    link: "https://www.nft-dao.org/",
    logo: "partner_logo_2"
  }, {
    id: 3,
    link: "https://www.nft-dao.org/",
    logo: "partner_logo_3"
  }, {
    id: 4,
    link: "https://www.nft-dao.org/",
    logo: "partner_logo_4"
  }, {
    id: 5,
    link: "https://www.nft-dao.org/",
    logo: "partner_logo_5"
  }];
  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsx("div", {
      className: "dark:bg-jacarta-900 ",
      children: /*#__PURE__*/_jsx("div", {
        className: "container",
        children: /*#__PURE__*/_jsx("div", {
          className: "grid grid-cols-2 py-8 sm:grid-cols-5",
          children: partnerGroup.map(item => /*#__PURE__*/_jsx("a", {
            href: item.link,
            target: "_blank",
            rel: "noopener noreferrer",
            children: /*#__PURE__*/_jsx("img", {
              src: `/images/partners/${item.logo}.png`,
              alt: "partner 1"
            })
          }, item.id))
        })
      })
    })
  });
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Partners)));

/***/ }),

/***/ 6518:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_shared_items_tabs_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5374);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







const Activity_tab = () => {
  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsxs("div", {
      className: "tab-pane fade",
      id: "activity",
      role: "tabpanel",
      "aria-labelledby": "activity-tab",
      children: [/*#__PURE__*/_jsx("div", {
        className: "dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 bg-light-base border border-b-0 px-4 pt-5 pb-2.5",
        children: /*#__PURE__*/_jsxs("div", {
          className: "flex flex-wrap",
          children: [/*#__PURE__*/_jsxs("button", {
            className: "dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 mr-2.5 mb-2.5 inline-flex items-center rounded-xl border bg-white px-4 py-3 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent",
            children: [/*#__PURE__*/_jsxs("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              width: "24",
              height: "24",
              className: "fill-jacarta-700 mr-2 h-4 w-4 group-hover:fill-white dark:fill-white",
              children: [/*#__PURE__*/_jsx("path", {
                fill: "none",
                d: "M0 0h24v24H0z"
              }), /*#__PURE__*/_jsx("path", {
                d: "M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm.707 2.122L3.828 12l8.486 8.485 7.778-7.778-1.06-7.425-7.425-1.06zm2.12 6.364a2 2 0 1 1 2.83-2.829 2 2 0 0 1-2.83 2.829z"
              })]
            }), /*#__PURE__*/_jsx("span", {
              className: "text-2xs font-medium",
              children: "Listing"
            })]
          }), /*#__PURE__*/_jsxs("button", {
            className: "dark:hover:bg-accent-dark hover:bg-accent-dark bg-accent mr-2.5 mb-2.5 inline-flex items-center rounded-xl border border-transparent px-4 py-3",
            children: [/*#__PURE__*/_jsxs("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              width: "24",
              height: "24",
              className: "mr-2 h-4 w-4 fill-white",
              children: [/*#__PURE__*/_jsx("path", {
                fill: "none",
                d: "M0 0h24v24H0z"
              }), /*#__PURE__*/_jsx("path", {
                d: "M14 20v2H2v-2h12zM14.586.686l7.778 7.778L20.95 9.88l-1.06-.354L17.413 12l5.657 5.657-1.414 1.414L16 13.414l-2.404 2.404.283 1.132-1.415 1.414-7.778-7.778 1.415-1.414 1.13.282 6.294-6.293-.353-1.06L14.586.686zm.707 3.536l-7.071 7.07 3.535 3.536 7.071-7.07-3.535-3.536z"
              })]
            }), /*#__PURE__*/_jsx("span", {
              className: "text-2xs font-medium text-white",
              children: "Bids"
            })]
          }), /*#__PURE__*/_jsxs("button", {
            className: "dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 mr-2.5 mb-2.5 inline-flex items-center rounded-xl border bg-white px-4 py-3 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent",
            children: [/*#__PURE__*/_jsxs("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              width: "24",
              height: "24",
              className: "fill-jacarta-700 mr-2 h-4 w-4 group-hover:fill-white dark:fill-white",
              children: [/*#__PURE__*/_jsx("path", {
                fill: "none",
                d: "M0 0h24v24H0z"
              }), /*#__PURE__*/_jsx("path", {
                d: "M16.05 12.05L21 17l-4.95 4.95-1.414-1.414 2.536-2.537L4 18v-2h13.172l-2.536-2.536 1.414-1.414zm-8.1-10l1.414 1.414L6.828 6 20 6v2H6.828l2.536 2.536L7.95 11.95 3 7l4.95-4.95z"
              })]
            }), /*#__PURE__*/_jsx("span", {
              className: "text-2xs font-medium",
              children: "Transfers"
            })]
          }), /*#__PURE__*/_jsxs("button", {
            className: "dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 mr-2.5 mb-2.5 inline-flex items-center rounded-xl border bg-white px-4 py-3 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent",
            children: [/*#__PURE__*/_jsxs("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              width: "24",
              height: "24",
              className: "fill-jacarta-700 mr-2 h-4 w-4 group-hover:fill-white dark:fill-white",
              children: [/*#__PURE__*/_jsx("path", {
                fill: "none",
                d: "M0 0h24v24H0z"
              }), /*#__PURE__*/_jsx("path", {
                d: "M6.5 2h11a1 1 0 0 1 .8.4L21 6v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6l2.7-3.6a1 1 0 0 1 .8-.4zM19 8H5v12h14V8zm-.5-2L17 4H7L5.5 6h13zM9 10v2a3 3 0 0 0 6 0v-2h2v2a5 5 0 0 1-10 0v-2h2z"
              })]
            }), /*#__PURE__*/_jsx("span", {
              className: "text-2xs font-medium",
              children: "Sales"
            })]
          })]
        })
      }), /*#__PURE__*/_jsxs("div", {
        role: "table",
        className: "scrollbar-custom dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 max-h-72 w-full overflow-y-auto rounded-lg rounded-tl-none border bg-white text-sm dark:text-white",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "dark:bg-jacarta-600 bg-light-base sticky top-0 flex",
          role: "row",
          children: [/*#__PURE__*/_jsx("div", {
            className: "w-[17%] py-2 px-4",
            role: "columnheader",
            children: /*#__PURE__*/_jsx("span", {
              className: "text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis",
              children: "Event"
            })
          }), /*#__PURE__*/_jsx("div", {
            className: "w-[17%] py-2 px-4",
            role: "columnheader",
            children: /*#__PURE__*/_jsx("span", {
              className: "text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis",
              children: "Price"
            })
          }), /*#__PURE__*/_jsx("div", {
            className: "w-[22%] py-2 px-4",
            role: "columnheader",
            children: /*#__PURE__*/_jsx("span", {
              className: "text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis",
              children: "From"
            })
          }), /*#__PURE__*/_jsx("div", {
            className: "w-[22%] py-2 px-4",
            role: "columnheader",
            children: /*#__PURE__*/_jsx("span", {
              className: "text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis",
              children: "To"
            })
          }), /*#__PURE__*/_jsx("div", {
            className: "w-[22%] py-2 px-4",
            role: "columnheader",
            children: /*#__PURE__*/_jsx("span", {
              className: "text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis",
              children: "Date"
            })
          })]
        }), items_activity_data.map(item => {
          const {
            id,
            price,
            from,
            to,
            text,
            date
          } = item;
          return /*#__PURE__*/_jsxs("div", {
            className: "flex",
            role: "row",
            children: [/*#__PURE__*/_jsxs("div", {
              className: "dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center border-t py-4 px-4",
              role: "cell",
              children: [/*#__PURE__*/_jsxs("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                width: "24",
                height: "24",
                className: "fill-jacarta-700 mr-2 h-4 w-4 group-hover:fill-white dark:fill-white",
                children: [/*#__PURE__*/_jsx("path", {
                  fill: "none",
                  d: "M0 0h24v24H0z"
                }), /*#__PURE__*/_jsx("path", {
                  d: "M14 20v2H2v-2h12zM14.586.686l7.778 7.778L20.95 9.88l-1.06-.354L17.413 12l5.657 5.657-1.414 1.414L16 13.414l-2.404 2.404.283 1.132-1.415 1.414-7.778-7.778 1.415-1.414 1.13.282 6.294-6.293-.353-1.06L14.586.686zm.707 3.536l-7.071 7.07 3.535 3.536 7.071-7.07-3.535-3.536z"
                })]
              }), text]
            }), /*#__PURE__*/_jsxs("div", {
              className: "dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center whitespace-nowrap border-t py-4 px-4",
              role: "cell",
              children: [/*#__PURE__*/_jsx("span", {
                className: "-ml-1",
                "data-tippy-content": "ETH",
                children: /*#__PURE__*/_jsx("svg", {
                  className: "icon mr-1 h-4 w-4",
                  children: /*#__PURE__*/_jsx("use", {
                    xlinkHref: "icons.svg#icon-ETH"
                  })
                })
              }), /*#__PURE__*/_jsxs("span", {
                className: "text-green text-sm font-medium tracking-tight",
                children: [price, " ETH"]
              })]
            }), /*#__PURE__*/_jsx("div", {
              className: "dark:border-jacarta-600 border-jacarta-100 flex w-[22%] items-center border-t py-4 px-4",
              role: "cell",
              children: /*#__PURE__*/_jsx(Link, {
                legacyBehavior: true,
                href: "#",
                children: /*#__PURE__*/_jsx("a", {
                  className: "text-accent",
                  children: from
                })
              })
            }), /*#__PURE__*/_jsx("div", {
              className: "dark:border-jacarta-600 border-jacarta-100 flex w-[22%] items-center border-t py-4 px-4",
              role: "cell",
              children: /*#__PURE__*/_jsx(Link, {
                legacyBehavior: true,
                href: "#",
                children: /*#__PURE__*/_jsx("a", {
                  className: "text-accent",
                  children: to
                })
              })
            }), /*#__PURE__*/_jsx("div", {
              className: "dark:border-jacarta-600 border-jacarta-100 flex w-[22%] items-center border-t py-4 px-4",
              role: "cell",
              children: /*#__PURE__*/_jsx(Link, {
                legacyBehavior: true,
                href: "#",
                children: /*#__PURE__*/_jsxs("a", {
                  className: "text-accent flex flex-wrap items-center",
                  target: "_blank",
                  rel: "nofollow noopener",
                  title: "Opens in a new window",
                  "data-tippy-content": "March 13 2022, 2:32 pm",
                  children: [/*#__PURE__*/_jsx("span", {
                    className: "mr-1",
                    children: date
                  }), /*#__PURE__*/_jsxs("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "24",
                    height: "24",
                    className: "h-4 w-4 fill-current",
                    children: [/*#__PURE__*/_jsx("path", {
                      fill: "none",
                      d: "M0 0h24v24H0z"
                    }), /*#__PURE__*/_jsx("path", {
                      d: "M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"
                    })]
                  })]
                })
              })
            })]
          }, id);
        })]
      })]
    })
  });
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Activity_tab)));

/***/ }),

/***/ 8960:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_shared_items_tabs_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5374);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







const OfferTab = () => {
  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsx("div", {
      className: "tab-pane fade show active",
      id: "offers",
      role: "tabpanel",
      "aria-labelledby": "offers-tab",
      children: /*#__PURE__*/_jsxs("div", {
        role: "table",
        className: "scrollbar-custom dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 grid max-h-72 w-full grid-cols-5 overflow-y-auto rounded-lg rounded-tl-none border bg-white text-sm dark:text-white",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "contents",
          role: "row",
          children: [/*#__PURE__*/_jsx("div", {
            className: "dark:bg-jacarta-600 bg-light-base sticky top-0 py-2 px-4",
            role: "columnheader",
            children: /*#__PURE__*/_jsx("span", {
              className: "text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis",
              children: "Price"
            })
          }), /*#__PURE__*/_jsx("div", {
            className: "dark:bg-jacarta-600 bg-light-base sticky top-0 py-2 px-4",
            role: "columnheader",
            children: /*#__PURE__*/_jsx("span", {
              className: "text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis",
              children: "USD Price"
            })
          }), /*#__PURE__*/_jsx("div", {
            className: "dark:bg-jacarta-600 bg-light-base sticky top-0 py-2 px-4",
            role: "columnheader",
            children: /*#__PURE__*/_jsx("span", {
              className: "text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis",
              children: "Floor Difference"
            })
          }), /*#__PURE__*/_jsx("div", {
            className: "dark:bg-jacarta-600 bg-light-base sticky top-0 py-2 px-4",
            role: "columnheader",
            children: /*#__PURE__*/_jsx("span", {
              className: "text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis",
              children: "Expiration"
            })
          }), /*#__PURE__*/_jsx("div", {
            className: "dark:bg-jacarta-600 bg-light-base sticky top-0 py-2 px-4",
            role: "columnheader",
            children: /*#__PURE__*/_jsx("span", {
              className: "text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis",
              children: "From"
            })
          })]
        }), items_offer_data.map(item => {
          const {
            ethPrice,
            id,
            usdPrice,
            difference,
            Expiration,
            user
          } = item;
          return /*#__PURE__*/_jsxs("div", {
            className: "contents",
            role: "row",
            children: [/*#__PURE__*/_jsxs("div", {
              className: "dark:border-jacarta-600 border-jacarta-100 flex items-center whitespace-nowrap border-t py-4 px-4",
              role: "cell",
              children: [/*#__PURE__*/_jsx("span", {
                className: "-ml-1",
                "data-tippy-content": "ETH",
                children: /*#__PURE__*/_jsx("svg", {
                  className: "icon mr-1 h-4 w-4",
                  children: /*#__PURE__*/_jsx("use", {
                    xlinkHref: "/icons.svg#icon-ETH"
                  })
                })
              }), /*#__PURE__*/_jsxs("span", {
                className: "text-green text-sm font-medium tracking-tight",
                children: [ethPrice, " ETH"]
              })]
            }), /*#__PURE__*/_jsx("div", {
              className: "dark:border-jacarta-600 border-jacarta-100 flex items-center border-t py-4 px-4",
              role: "cell",
              children: usdPrice
            }), /*#__PURE__*/_jsxs("div", {
              className: "dark:border-jacarta-600 border-jacarta-100 flex items-center border-t py-4 px-4",
              role: "cell",
              children: [difference, " below"]
            }), /*#__PURE__*/_jsxs("div", {
              className: "dark:border-jacarta-600 border-jacarta-100 flex items-center border-t py-4 px-4",
              role: "cell",
              children: ["in ", Expiration, " months"]
            }), /*#__PURE__*/_jsx("div", {
              className: "dark:border-jacarta-600 border-jacarta-100 flex items-center border-t py-4 px-4",
              role: "cell",
              children: /*#__PURE__*/_jsx(Link, {
                legacyBehavior: true,
                href: "#",
                children: /*#__PURE__*/_jsx("a", {
                  className: "text-accent",
                  children: user
                })
              })
            })]
          }, id);
        })]
      })
    })
  });
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (OfferTab)));

/***/ }),

/***/ 1112:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(738);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__]);
react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Price_history = ({
  classes
}) => {
  return /*#__PURE__*/_jsx("div", {
    className: "relative mb-24 w-full",
    children: /*#__PURE__*/_jsx("div", {
      className: "tab-pane fade",
      children: /*#__PURE__*/_jsxs("div", {
        className: classes,
        children: [/*#__PURE__*/_jsxs("div", {
          className: "mb-10 flex flex-wrap items-center",
          children: [/*#__PURE__*/_jsxs("select", {
            className: "dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 mr-8 min-w-[12rem] rounded-lg py-3.5 text-sm dark:text-white",
            children: [/*#__PURE__*/_jsx("option", {
              defaultValue: "7-days",
              children: "Last 7 Days"
            }), /*#__PURE__*/_jsx("option", {
              defaultValue: "14-days",
              children: "Last 14 Days"
            }), /*#__PURE__*/_jsx("option", {
              defaultValue: "30-days",
              children: "Last 30 Days"
            }), /*#__PURE__*/_jsx("option", {
              defaultValue: "60-days",
              children: "Last 60 Days"
            }), /*#__PURE__*/_jsx("option", {
              defaultValue: "90-days",
              children: "Last 90 Days"
            }), /*#__PURE__*/_jsx("option", {
              value: "last-year",
              children: "Last Year"
            }), /*#__PURE__*/_jsx("option", {
              value: "all-time",
              children: "All Time"
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "py-2",
            children: [/*#__PURE__*/_jsxs("span", {
              className: "mr-4 inline-block align-middle",
              children: [/*#__PURE__*/_jsx("span", {
                className: "block text-sm font-bold dark:text-white",
                children: "90 Day Avg. Price:"
              }), /*#__PURE__*/_jsx("span", {
                className: "text-green block text-sm font-bold",
                children: "\u039E7.0633"
              })]
            }), /*#__PURE__*/_jsxs("span", {
              className: "inline-block align-middle",
              children: [/*#__PURE__*/_jsx("span", {
                className: "block text-sm font-bold dark:text-white",
                children: "90 Day Volume:"
              }), /*#__PURE__*/_jsx("span", {
                className: "text-green block text-sm font-bold",
                children: "\u039E24,085.6957"
              })]
            })]
          })]
        }), /*#__PURE__*/_jsx("div", {
          className: "chart-container relative h-80 w-full",
          children: /*#__PURE__*/_jsx(Bar, {
            data: {
              labels: ['January', 'February', 'March', 'April', 'May', 'June'],
              datasets: [{
                type: 'bar',
                label: 'Avg. price',
                backgroundColor: '#10B981',
                borderColor: '#10B981',
                data: [54.73, 64, 53, 96, 130, 100, 102.88]
              }, {
                type: 'bar',
                label: 'Sales',
                backgroundColor: '#E7E8EC',
                data: [25, 20, 40, 130, 75, 48, 12]
              }]
            },
            options: {
              maintainAspectRatio: false,
              responsive: true,
              interaction: {
                intersect: false,
                mode: 'index'
              },
              scales: {
                x: {
                  grid: {
                    display: false
                  }
                },
                y: {
                  ticks: {
                    stepSize: 50
                  }
                }
              },
              plugins: {
                legend: {
                  display: false
                },
                decimation: {
                  enabled: true
                },
                tooltip: {
                  usePointStyle: true,
                  position: 'nearest',
                  backgroundColor: '#131740',
                  titleAlign: 'center',
                  bodyAlign: 'center',
                  footerAlign: 'center',
                  padding: 12,
                  displayColors: false,
                  yAlign: 'bottom'
                }
              },
              animation: false
            }
          })
        })]
      })
    })
  });
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Price_history)));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8745:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_shared_items_tabs_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5374);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







const Properties = () => {
  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsx("div", {
      className: "tab-pane fade",
      id: "properties",
      role: "tabpanel",
      "aria-labelledby": "properties-tab",
      children: /*#__PURE__*/_jsx("div", {
        className: "dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 rounded-t-2lg rounded-b-2lg rounded-tl-none border bg-white p-6 md:p-10",
        children: /*#__PURE__*/_jsx("div", {
          className: "grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4",
          children: items_Properties_data.map(item => {
            const {
              id,
              category,
              product,
              trait
            } = item;
            return /*#__PURE__*/_jsx(Link, {
              legacyBehavior: true,
              href: "#",
              children: /*#__PURE__*/_jsxs("a", {
                className: "dark:bg-jacarta-800 dark:border-jacarta-600 bg-light-base rounded-2lg border-jacarta-100 flex flex-col space-y-2 border p-5 text-center transition-shadow hover:shadow-lg",
                children: [/*#__PURE__*/_jsx("span", {
                  className: "text-accent text-sm uppercase",
                  children: category
                }), /*#__PURE__*/_jsx("span", {
                  className: "text-jacarta-700 text-base dark:text-white",
                  children: product
                }), /*#__PURE__*/_jsx("span", {
                  className: "text-jacarta-400 text-sm",
                  children: trait
                })]
              })
            }, id);
          })
        })
      })
    })
  });
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Properties)));

/***/ }),

/***/ 7928:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5973);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_tabs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _OfferTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8960);
/* harmony import */ var _Properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8745);
/* harmony import */ var _Activity_tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6518);
/* harmony import */ var _Price_history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1112);
/* harmony import */ var react_tabs_style_react_tabs_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8096);
/* harmony import */ var react_tabs_style_react_tabs_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_tabs_style_react_tabs_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Price_history__WEBPACK_IMPORTED_MODULE_5__]);
_Price_history__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const ItemsTabs = () => {
  const {
    0: tabsActive,
    1: setTabsActive
  } = useState(1);
  const tabsHeadText = [{
    id: 1,
    text: 'Offers',
    icon: 'offers'
  }, {
    id: 2,
    text: 'properties',
    icon: 'properties'
  }, {
    id: 3,
    text: 'details',
    icon: 'details'
  }, {
    id: 4,
    text: 'activities',
    icon: 'activity'
  }, {
    id: 5,
    text: 'price history',
    icon: 'price'
  }];
  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsx("div", {
      className: "scrollbar-custom mt-14 overflow-x-auto rounded-lg",
      children: /*#__PURE__*/_jsxs(Tabs, {
        className: "min-w-fit tabs",
        children: [/*#__PURE__*/_jsx(TabList, {
          className: "nav nav-tabs flex items-center",
          children: tabsHeadText.map(({
            id,
            text,
            icon
          }) => {
            return /*#__PURE__*/_jsx(Tab, {
              className: "nav-item bg-transparent",
              children: /*#__PURE__*/_jsxs("button", {
                className: tabsActive === id ? 'nav-link hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white active' : 'nav-link hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white',
                onClick: () => setTabsActive(id),
                children: [/*#__PURE__*/_jsx("svg", {
                  className: "icon mr-1 h-5 w-5 fill-current",
                  children: /*#__PURE__*/_jsx("use", {
                    xlinkHref: `/icons.svg#icon-${icon}`
                  })
                }), /*#__PURE__*/_jsx("span", {
                  className: "font-display text-base font-medium",
                  children: text
                })]
              })
            }, id);
          })
        }), /*#__PURE__*/_jsx(TabPanel, {
          className: "tab-content",
          children: /*#__PURE__*/_jsx(OfferTab, {})
        }), /*#__PURE__*/_jsx(TabPanel, {
          children: /*#__PURE__*/_jsx(Properties, {})
        }), /*#__PURE__*/_jsx(TabPanel, {
          children: /*#__PURE__*/_jsx("div", {
            className: "tab-pane fade",
            id: "details",
            role: "tabpanel",
            "aria-labelledby": "details-tab",
            children: /*#__PURE__*/_jsxs("div", {
              className: "dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 rounded-t-2lg rounded-b-2lg rounded-tl-none border bg-white p-6 md:p-10",
              children: [/*#__PURE__*/_jsxs("div", {
                className: "mb-2 flex items-center",
                children: [/*#__PURE__*/_jsx("span", {
                  className: "dark:text-jacarta-300 mr-2 min-w-[9rem]",
                  children: "Contract Address:"
                }), /*#__PURE__*/_jsx("a", {
                  href: "#",
                  className: "text-accent",
                  children: "0x1cBB182322Aee8ce9F4F1f98d7460173ee30Af1F"
                })]
              }), /*#__PURE__*/_jsxs("div", {
                className: "mb-2 flex items-center",
                children: [/*#__PURE__*/_jsx("span", {
                  className: "dark:text-jacarta-300 mr-2 min-w-[9rem]",
                  children: "Token ID:"
                }), /*#__PURE__*/_jsx("span", {
                  className: "js-copy-clipboard text-jacarta-700 cursor-pointer select-none dark:text-white",
                  "data-tippy-content": "Copy",
                  children: "7714"
                })]
              }), /*#__PURE__*/_jsxs("div", {
                className: "mb-2 flex items-center",
                children: [/*#__PURE__*/_jsx("span", {
                  className: "dark:text-jacarta-300 mr-2 min-w-[9rem]",
                  children: "Token Standard:"
                }), /*#__PURE__*/_jsx("span", {
                  className: "text-jacarta-700 dark:text-white",
                  children: "ERC-721"
                })]
              }), /*#__PURE__*/_jsxs("div", {
                className: "flex items-center",
                children: [/*#__PURE__*/_jsx("span", {
                  className: "dark:text-jacarta-300 mr-2 min-w-[9rem]",
                  children: "Blockchain:"
                }), /*#__PURE__*/_jsx("span", {
                  className: "text-jacarta-700 dark:text-white",
                  children: "Ethereum"
                })]
              })]
            })
          })
        }), /*#__PURE__*/_jsx(TabPanel, {
          children: /*#__PURE__*/_jsx(Activity_tab, {})
        }), /*#__PURE__*/_jsx(TabPanel, {
          children: /*#__PURE__*/_jsx(Price_history, {
            classes: "dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 rounded-t-2lg rounded-b-2lg rounded-tl-none border bg-white p-6"
          })
        })]
      })
    })
  });
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (ItemsTabs)));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2887:
/***/ (() => {

"use strict";
const Browse_category_data = [{
  id: '0Virtual Worlds',
  image: '/images/categories/category_4.png',
  title: 'Virtual Worlds',
  href: '#',
  bgColor: 'rgb(70 199 227)'
}, {
  id: '1Sport',
  image: '/images/categories/category_5.png',
  title: 'Sport',
  href: '#',
  bgColor: 'rgb(115 126 242)'
}, {
  id: '2Photography',
  image: '/images/categories/category_6.png',
  title: 'Photography',
  href: '#',
  bgColor: 'rgb(66 138 248)'
}, {
  id: '3Music',
  image: '/images/categories/category_7.png',
  title: 'Music',
  href: '#',
  bgColor: 'rgb(243 91 199)'
}, {
  id: '4Art',
  image: '/images/categories/category_1.png',
  title: 'Art',
  href: '#',
  bgColor: 'rgb(16 185 129)'
}, {
  id: '5Collectibles',
  image: '/images/categories/category_2.png',
  title: 'Collectibles',
  href: '#',
  bgColor: 'rgb(254 178 64)'
}, {
  id: '6Domain Names',
  image: '/images/categories/category_3.png',
  title: 'Domain Names',
  href: '#',
  bgColor: 'rgb(131 88 255)'
}, {
  id: '7Virtual Worlds',
  image: '/images/categories/category_4.png',
  title: 'Virtual Worlds',
  href: '#',
  bgColor: 'rgb(70 199 227)'
}, {
  id: '8Sport',
  image: '/images/categories/category_5.png',
  title: 'Sport',
  href: '#',
  bgColor: '#737EF2'
}, {
  id: '9Photography',
  image: '/images/categories/category_6.png',
  title: 'Photography',
  href: '#',
  bgColor: 'rgb(66 138 248)'
}, {
  id: '10Music',
  image: '/images/categories/category_7.png',
  title: 'Music',
  href: '#',
  bgColor: '#F35BC7'
}, {
  id: '11Art',
  image: '/images/categories/category_1.png',
  title: 'Art',
  href: '#',
  bgColor: 'rgb(16 185 129)'
}, {
  id: '12Virtual Worlds',
  image: '/images/categories/category_4.png',
  title: 'Virtual Worlds',
  href: '#',
  bgColor: '#46C7E3'
}, {
  id: '13Domain Names',
  image: '/images/categories/category_3.png',
  title: 'Domain Names',
  href: '#',
  bgColor: 'rgb(131 88 255)'
}, {
  id: '14Collectibles',
  image: '/images/categories/category_2.png',
  title: 'Collectibles',
  href: '#',
  bgColor: 'rgb(254 178 64)'
}];
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Browse_category_data)));

/***/ }),

/***/ 2956:
/***/ (() => {

"use strict";
const Feature_collections_data = [{
  id: '0Art Me Outside',
  bigImage: '/images/collections/collection_1_1.jpg',
  subImage1: '/images/collections/collection_1_2.jpg',
  subImage2: '/images/collections/collection_1_3.jpg',
  subImage3: '/images/collections/collection_1_4.jpg',
  userImage: '/images/avatars/owner_5.png',
  userName: 'Wow Frens',
  itemsCount: '10K',
  title: 'Art Me Outside',
  category: 'photography',
  top: true,
  trending: true,
  recent: true
}, {
  id: '1PankySkal',
  bigImage: '/images/collections/collection_2_1.jpg',
  subImage1: '/images/collections/collection_2_2.jpg',
  subImage2: '/images/collections/collection_2_3.jpg',
  subImage3: '/images/collections/collection_2_4.jpg',
  userImage: '/images/avatars/owner_9.png',
  userName: 'NFT stars',
  itemsCount: '2.8K',
  title: 'PankySkal',
  category: 'music',
  top: false,
  trending: false,
  recent: false
}, {
  id: '2VR Space_287',
  bigImage: '/images/collections/collection_3_1.jpg',
  subImage1: '/images/collections/collection_3_2.jpg',
  subImage2: '/images/collections/collection_3_3.jpg',
  subImage3: '/images/collections/collection_3_4.jpg',
  userImage: '/images/avatars/owner_4.png',
  userName: 'Origin Morish',
  itemsCount: '8K',
  title: 'VR Space_287',
  category: 'photography',
  top: true,
  trending: false,
  recent: true
}, {
  id: '3Metasmorf',
  bigImage: '/images/collections/collection_4_1.jpg',
  subImage1: '/images/collections/collection_4_2.jpg',
  subImage2: '/images/collections/collection_4_3.jpg',
  subImage3: '/images/collections/collection_4_4.jpg',
  userImage: '/images/avatars/owner_10.png',
  userName: 'Lazy Panda',
  itemsCount: '1.5K',
  title: 'Metasmorf',
  category: 'art',
  top: false,
  trending: true,
  recent: false
}, {
  id: '43Landers',
  bigImage: '/images/collections/collection_5_1.jpg',
  subImage1: '/images/collections/collection_5_2.jpg',
  subImage2: '/images/collections/collection_5_3.jpg',
  subImage3: '/images/collections/collection_5_4.jpg',
  userImage: '/images/avatars/owner_11.png',
  userName: '051_Hart',
  itemsCount: '15K',
  title: '3Landers',
  category: 'music',
  top: true,
  trending: false,
  recent: true
}, {
  id: '5SlimHoods',
  bigImage: '/images/collections/collection_6_1.jpg',
  subImage1: '/images/collections/collection_6_2.jpg',
  subImage2: '/images/collections/collection_6_3.jpg',
  subImage3: '/images/collections/collection_6_4.jpg',
  userImage: '/images/avatars/owner_3.png',
  userName: 'Crytopank',
  itemsCount: '8.8K',
  title: 'SlimHoods',
  category: 'art',
  top: true,
  trending: true,
  recent: false
}, {
  id: '6The Overseers',
  bigImage: '/images/collections/collection_7_1.jpg',
  subImage1: '/images/collections/collection_7_2.jpg',
  subImage2: '/images/collections/collection_7_3.jpg',
  subImage3: '/images/collections/collection_7_4.jpg',
  userImage: '/images/avatars/creator_2.png',
  userName: 'Hey Mrsmeseks',
  itemsCount: '13K',
  title: 'The Overseers',
  category: 'Collectibles',
  top: false,
  trending: true,
  recent: true
}, {
  id: '7Dope Shibas',
  bigImage: '/images/collections/collection_8_1.jpg',
  subImage1: '/images/collections/collection_8_2.jpg',
  subImage2: '/images/collections/collection_8_3.jpg',
  subImage3: '/images/collections/collection_8_4.jpg',
  userImage: '/images/avatars/owner_12.png',
  userName: 'alyxbow',
  itemsCount: '3K',
  title: 'Dope Shibas',
  category: 'art',
  top: true,
  trending: false,
  recent: true
}, {
  id: '8Art Me Outside',
  bigImage: '/images/collections/collection_1_1.jpg',
  subImage1: '/images/collections/collection_1_2.jpg',
  subImage2: '/images/collections/collection_1_3.jpg',
  subImage3: '/images/collections/collection_1_4.jpg',
  userImage: '/images/avatars/owner_5.png',
  userName: 'Wow Frens',
  itemsCount: '10K',
  title: 'Art Me Outside',
  category: 'art',
  top: true,
  trending: true,
  recent: false
}, {
  id: '9PankySkal',
  bigImage: '/images/collections/collection_2_1.jpg',
  subImage1: '/images/collections/collection_2_2.jpg',
  subImage2: '/images/collections/collection_2_3.jpg',
  subImage3: '/images/collections/collection_2_4.jpg',
  userImage: '/images/avatars/owner_9.png',
  userName: 'NFT stars',
  itemsCount: '2.8K',
  title: 'PankySkal',
  category: 'Collectibles',
  top: false,
  trending: true,
  recent: true
}, {
  id: '10VR Space_287',
  bigImage: '/images/collections/collection_3_1.jpg',
  subImage1: '/images/collections/collection_3_2.jpg',
  subImage2: '/images/collections/collection_3_3.jpg',
  subImage3: '/images/collections/collection_3_4.jpg',
  userImage: '/images/avatars/owner_4.png',
  userName: 'Origin Morish',
  itemsCount: '8K',
  title: 'VR Space_287',
  category: 'Collectibles',
  top: true,
  trending: false,
  recent: true
}, {
  id: '11Metasmorf',
  bigImage: '/images/collections/collection_4_1.jpg',
  subImage1: '/images/collections/collection_4_2.jpg',
  subImage2: '/images/collections/collection_4_3.jpg',
  subImage3: '/images/collections/collection_4_4.jpg',
  userImage: '/images/avatars/owner_10.png',
  userName: 'Lazy Panda',
  itemsCount: '1.5K',
  title: 'Metasmorf',
  category: 'virtual world',
  top: true,
  trending: true,
  recent: false
}, {
  id: '123Landers',
  bigImage: '/images/collections/collection_5_1.jpg',
  subImage1: '/images/collections/collection_5_2.jpg',
  subImage2: '/images/collections/collection_5_3.jpg',
  subImage3: '/images/collections/collection_5_4.jpg',
  userImage: '/images/avatars/owner_11.png',
  userName: '051_Hart',
  itemsCount: '15K',
  title: '3Landers',
  category: 'virtual world',
  top: false,
  trending: true,
  recent: true
}, {
  id: '13SlimHoods',
  bigImage: '/images/collections/collection_6_1.jpg',
  subImage1: '/images/collections/collection_6_2.jpg',
  subImage2: '/images/collections/collection_6_3.jpg',
  subImage3: '/images/collections/collection_6_4.jpg',
  userImage: '/images/avatars/owner_3.png',
  userName: 'Crytopank',
  itemsCount: '8.8K',
  title: 'SlimHoods',
  category: 'domain',
  top: true,
  trending: false,
  recent: true
}, {
  id: '14The Overseers',
  bigImage: '/images/collections/collection_7_1.jpg',
  subImage1: '/images/collections/collection_7_2.jpg',
  subImage2: '/images/collections/collection_7_3.jpg',
  subImage3: '/images/collections/collection_7_4.jpg',
  userImage: '/images/avatars/creator_2.png',
  userName: 'Hey Mrsmeseks',
  itemsCount: '13K',
  title: 'The Overseers',
  category: 'virtual world',
  top: true,
  trending: true,
  recent: false
} // {
// 	id: '151Dope Shibas',
// 	bigImage: '/images/collections/collection_8_1.jpg',
// 	subImage1: '/images/collections/collection_8_2.jpg',
// 	subImage2: '/images/collections/collection_8_3.jpg',
// 	subImage3: '/images/collections/collection_8_4.jpg',
// 	userImage: '/images/avatars/owner_12.png',
// 	userName: 'alyxbow',
// 	itemsCount: '3K',
// 	title: 'Dope Shibas',
// 	category: 'Collectibles',
// 	top: false,
// 	trending: true,
// 	recent: true,
// },
// {
// 	id: '16Art Me Outside',
// 	bigImage: '/images/collections/collection_1_1.jpg',
// 	subImage1: '/images/collections/collection_1_2.jpg',
// 	subImage2: '/images/collections/collection_1_3.jpg',
// 	subImage3: '/images/collections/collection_1_4.jpg',
// 	userImage: '/images/avatars/owner_5.png',
// 	userName: 'Wow Frens',
// 	itemsCount: '10K',
// 	title: 'Art Me Outside',
// 	category: 'art',
// 	top: true,
// 	trending: false,
// 	recent: true,
// },
// {
// 	id: '17PankySkal',
// 	bigImage: '/images/collections/collection_2_1.jpg',
// 	subImage1: '/images/collections/collection_2_2.jpg',
// 	subImage2: '/images/collections/collection_2_3.jpg',
// 	subImage3: '/images/collections/collection_2_4.jpg',
// 	userImage: '/images/avatars/owner_9.png',
// 	userName: 'NFT stars',
// 	itemsCount: '2.8K',
// 	title: 'PankySkal',
// 	category: 'Collectibles',
// 	top: true,
// 	trending: true,
// 	recent: false,
// },
// {
// 	id: '18VR Space_287',
// 	bigImage: '/images/collections/collection_3_1.jpg',
// 	subImage1: '/images/collections/collection_3_2.jpg',
// 	subImage2: '/images/collections/collection_3_3.jpg',
// 	subImage3: '/images/collections/collection_3_4.jpg',
// 	userImage: '/images/avatars/owner_4.png',
// 	userName: 'Origin Morish',
// 	itemsCount: '8K',
// 	title: 'VR Space_287',
// 	category: 'domain',
// 	top: false,
// 	trending: true,
// 	recent: true,
// },
// {
// 	id: '19Metasmorf',
// 	bigImage: '/images/collections/collection_4_1.jpg',
// 	subImage1: '/images/collections/collection_4_2.jpg',
// 	subImage2: '/images/collections/collection_4_3.jpg',
// 	subImage3: '/images/collections/collection_4_4.jpg',
// 	userImage: '/images/avatars/owner_10.png',
// 	userName: 'Lazy Panda',
// 	itemsCount: '1.5K',
// 	title: 'Metasmorf',
// 	category: 'music',
// 	top: true,
// 	trending: false,
// 	recent: true,
// },
// {
// 	id: '203Landers',
// 	bigImage: '/images/collections/collection_5_1.jpg',
// 	subImage1: '/images/collections/collection_5_2.jpg',
// 	subImage2: '/images/collections/collection_5_3.jpg',
// 	subImage3: '/images/collections/collection_5_4.jpg',
// 	userImage: '/images/avatars/owner_11.png',
// 	userName: '051_Hart',
// 	itemsCount: '15K',
// 	title: '3Landers',
// 	category: 'photography',
// 	top: true,
// 	trending: true,
// 	recent: false,
// },
// {
// 	id: '21SlimHoods',
// 	bigImage: '/images/collections/collection_6_1.jpg',
// 	subImage1: '/images/collections/collection_6_2.jpg',
// 	subImage2: '/images/collections/collection_6_3.jpg',
// 	subImage3: '/images/collections/collection_6_4.jpg',
// 	userImage: '/images/avatars/owner_3.png',
// 	userName: 'Crytopank',
// 	itemsCount: '8.8K',
// 	title: 'SlimHoods',
// 	category: 'virtual world',
// 	top: false,
// 	trending: true,
// 	recent: true,
// },
// {
// 	id: '22The Overseers',
// 	bigImage: '/images/collections/collection_7_1.jpg',
// 	subImage1: '/images/collections/collection_7_2.jpg',
// 	subImage2: '/images/collections/collection_7_3.jpg',
// 	subImage3: '/images/collections/collection_7_4.jpg',
// 	userImage: '/images/avatars/creator_2.png',
// 	userName: 'Hey Mrsmeseks',
// 	itemsCount: '13K',
// 	title: 'The Overseers',
// 	category: 'art',
// 	top: true,
// 	trending: false,
// 	recent: true,
// },
// {
// 	id: '23Dope Shibas',
// 	bigImage: '/images/collections/collection_8_1.jpg',
// 	subImage1: '/images/collections/collection_8_2.jpg',
// 	subImage2: '/images/collections/collection_8_3.jpg',
// 	subImage3: '/images/collections/collection_8_4.jpg',
// 	userImage: '/images/avatars/owner_12.png',
// 	userName: 'alyxbow',
// 	itemsCount: '3K',
// 	title: 'Dope Shibas',
// 	category: 'Collectibles',
// 	top: true,
// 	trending: true,
// 	recent: false,
// },
];
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Feature_collections_data)));

/***/ }),

/***/ 8567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ bidsData)
/* harmony export */ });
// import '/images/item_1.jpg' from '/images/item_1.jpg';
const bidsData = [{
  id: 1,
  image: '/images/products/item_1.jpg',
  title: 'ETH Me Outside',
  bid_number: 1.55,
  eth_number: 1.3,
  react_number: 159
}, {
  id: 2,
  image: '/images/products/item_2.jpg',
  title: 'ETH Me Outside',
  bid_number: 1.55,
  eth_number: 1.3,
  react_number: 159
}, {
  id: 3,
  image: '/images/products/item_3.jpg',
  title: 'ETH Me Outside',
  bid_number: 1.55,
  eth_number: 1.3,
  react_number: 159
}, {
  id: 4,
  image: '/images/products/item_4.jpg',
  title: 'ETH Me Outside',
  bid_number: 1.55,
  eth_number: 1.3,
  react_number: 159
}, {
  id: 5,
  image: '/images/products/item_5.jpg',
  title: 'ETH Me Outside',
  bid_number: 1.55,
  eth_number: 1.3,
  react_number: 159
}, {
  id: 6,
  image: '/images/products/item_6.jpg',
  title: 'ETH Me Outside',
  bid_number: 1.55,
  eth_number: 1.3,
  react_number: 159
}];


/***/ }),

/***/ 3604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony exports hero_3_swiper_data, hero_3_swiper_thumbs_data */
const hero_3_swiper_data = [{
  id: '0Palettes of Aotearoa - The Place of greenstone #01',
  image: '/images/hero/hero_slide_1.jpg',
  title: 'Palettes of Aotearoa - The Place of greenstone #01',
  name: 'LeeCookNZ',
  titleLink: '#',
  userLink: '#'
}, {
  id: '1Portrait Gallery',
  image: '/images/hero/hero_slide_2.jpg',
  title: 'Portrait Gallery',
  name: 'By 051_Hart',
  titleLink: '#',
  userLink: '#'
}, {
  id: '2Oceania \\\\ OVERSEER 017',
  image: '/images/hero/hero_slide_3.jpg',
  title: 'Oceania \\\\ OVERSEER 017',
  name: 'By THE OVERSEERS',
  titleLink: '#',
  userLink: '#'
}, {
  id: '3Shiba #368',
  image: '/images/hero/hero_slide_4.jpg',
  title: 'Shiba #368',
  name: 'Generous Shiba Club',
  titleLink: '#',
  userLink: '#'
}, {
  id: '4Palettes of Aotearoa - The Place of greenstone #01',
  image: '/images/hero/hero_slide_1.jpg',
  title: 'Palettes of Aotearoa - The Place of greenstone #01',
  name: 'LeeCookNZ',
  titleLink: '#',
  userLink: '#'
}, {
  id: '5Portrait Gallery',
  image: '/images/hero/hero_slide_2.jpg',
  title: 'Portrait Gallery',
  name: 'By 051_Hart',
  titleLink: '#',
  userLink: '#'
}];
const hero_3_swiper_thumbs_data = [{
  id: '0/images/hero/hero_slide_1_thumb.jpg',
  image: '/images/hero/hero_slide_1_thumb.jpg'
}, {
  id: '1/images/hero/hero_slide_2_thumb.jpg',
  image: '/images/hero/hero_slide_2_thumb.jpg'
}, {
  id: '2/images/hero/hero_slide_3_thumb.jpg',
  image: '/images/hero/hero_slide_3_thumb.jpg'
}, {
  id: '3/images/hero/hero_slide_4_thumb.jpg',
  image: '/images/hero/hero_slide_4_thumb.jpg'
}, {
  id: '4/images/hero/hero_slide_1_thumb.jpg',
  image: '/images/hero/hero_slide_1_thumb.jpg'
}, {
  id: '5/images/hero/hero_slide_4_thumb.jpg',
  image: '/images/hero/hero_slide_4_thumb.jpg'
}];


/***/ }),

/***/ 5374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony exports items_offer_data, items_Properties_data, items_activity_data */
const items_offer_data = [{
  id: '1ViviGiallo',
  ethPrice: '30',
  usdPrice: '$90,136.10',
  difference: '70%',
  Expiration: '5',
  user: 'ViviGiallo'
}, {
  id: '2DB96DB',
  ethPrice: '15.5',
  usdPrice: '$45,458.10',
  difference: '70%',
  Expiration: '5',
  user: 'DB96DB'
}, {
  id: '3myc_nc',
  ethPrice: '0.9',
  usdPrice: '$2,347.90',
  difference: '98%',
  Expiration: '5',
  user: 'myc_nc'
}, {
  id: '4MetaRDnA',
  ethPrice: '1.2',
  usdPrice: '$4,568.40',
  difference: '100%',
  Expiration: '6',
  user: 'MetaRDnA'
}, {
  id: '5Karafuru',
  ethPrice: '0.5',
  usdPrice: '$1,699.10',
  difference: '100%',
  Expiration: '6',
  user: 'Karafuru'
}, {
  id: '6seekortelur',
  ethPrice: '4.7',
  usdPrice: '$13,966.64',
  difference: '40%',
  Expiration: '2',
  user: 'seekortelur'
}];
const items_Properties_data = [{
  id: 0,
  category: 'ACCESSORY',
  product: 'Metal headband',
  trait: '3% have this trait'
}, {
  id: 1,
  category: 'SKIN',
  product: 'Dark Brown',
  trait: '8% have this trait'
}, {
  id: 2,
  category: 'EYES',
  product: 'Cyborg',
  trait: '2% have this trait'
}, {
  id: 3,
  category: 'CLOTH',
  product: 'Adidas',
  trait: '7% have this trait'
}, {
  id: 4,
  category: 'HAIR',
  product: 'White Ash',
  trait: '7% have this trait'
}, {
  id: 5,
  category: 'CHARACTER',
  product: 'TSAREVNA',
  trait: '1% have this trait'
}, {
  id: 6,
  category: 'BACKGROUND',
  product: 'CyberPunk',
  trait: '9% have this trait'
}, {
  id: 7,
  category: 'MOUTH',
  product: 'Flower',
  trait: '4% have this trait'
}];
const items_activity_data = [{
  id: '1ViviGiallo',
  price: '30',
  from: 'AD496A',
  to: 'Polymorph: MORPH Token',
  date: '19 days ago',
  text: 'bid'
}, {
  id: '2DB96DB',
  price: '.00510',
  from: 'The_vikk',
  to: 'Polymorph: MORPH Token',
  date: '16 days ago',
  text: 'transfer'
}, {
  id: '3myc_nc',
  price: '1.50',
  from: 'CryptoGuysNFT',
  to: 'Polymorph: MORPH Token',
  date: '19 days ago',
  text: 'sale'
}];


/***/ }),

/***/ 370:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_shared_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2555);
/* harmony import */ var _components_shared_Meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(634);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_shared_component__WEBPACK_IMPORTED_MODULE_1__]);
_components_shared_component__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Home_1 = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("main", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_shared_Meta__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      title: "Isolux Aparcamientos"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_shared_component__WEBPACK_IMPORTED_MODULE_1__/* .Hero */ .VM, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_shared_component__WEBPACK_IMPORTED_MODULE_1__/* .Bids */ .T8, {
      classes: "pt-10 pb-24",
      bgWhite: false
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_shared_component__WEBPACK_IMPORTED_MODULE_1__/* .Top_collection */ .Ax, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_shared_component__WEBPACK_IMPORTED_MODULE_1__/* .Tranding_category */ .$9, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_shared_component__WEBPACK_IMPORTED_MODULE_1__/* .NewseLatter */ .cU, {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home_1);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8096:
/***/ (() => {



/***/ }),

/***/ 9241:
/***/ (() => {



/***/ }),

/***/ 9176:
/***/ (() => {



/***/ }),

/***/ 7383:
/***/ (() => {



/***/ }),

/***/ 8722:
/***/ (() => {



/***/ }),

/***/ 8933:
/***/ (() => {



/***/ }),

/***/ 1912:
/***/ (() => {



/***/ })

};
;