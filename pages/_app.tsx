import "../styles/globals.css";

import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";

import { initTranslation } from "@/linguiTranslation";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";

import Layout from "../components/shared/layout";
import Meta from "../components/shared/Meta";
import UserContext from "../components/shared/UserContext";
import { store } from "../store/store";

initTranslation(i18n);

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pid = router.asPath;
  const locale = router.locale || router.defaultLocale!;
  const firstRender = useRef(true);
  const scrollRef = useRef({
    scrollPos: 0,
  });

  // run only once on the first render (for server side)
  if (pageProps.translation && firstRender.current) {
    i18n.load(locale, pageProps.translation)
    i18n.activate(locale)
    firstRender.current = false
  }

  // useEffect(() => {
  //   // if (pid === '/home/home_8') {
  //   // 	const html = document.querySelector('html');
  //   // 	html.classList.remove('light');
  //   // 	html.classList.add('dark');
  //   // }
  // }, []);

  useEffect(() => {
    if (pageProps.translation) {
      i18n.load(locale, pageProps.translation)
      i18n.activate(locale)
    }
  }, [locale, pageProps.translation])

  return (
    <I18nProvider i18n={i18n}>
      <Meta title="Isolux || Aparcamientos | Isolux Aparcamientos | Spain | España" />
      <Provider store={store}>
        <ThemeProvider enableSystem={false} attribute="class">
            <UserContext.Provider value={{ scrollRef: scrollRef }}>
              {pid === "/login" ? (
                <Component {...pageProps} />
              ) : (
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              )}
            </UserContext.Provider>
        </ThemeProvider>
      </Provider>
    </I18nProvider>
  );
}

export default MyApp;
