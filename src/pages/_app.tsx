import type { AppProps } from "next/app";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { AnimatePresence } from "framer-motion";

import { store } from "@/app/store";
import { sleep } from "@/app/utils/helpers";
import Navigation from "@/components/Navigation";

import "@/styles/globals.scss";

interface ApplicationProps extends AppProps {}

const Application = ({ Component, pageProps }: ApplicationProps) => {
  const router = useRouter();
  const [loaded, setLoaded] = useState<boolean>(false);
  const [changedRoute, setChangedRoute] = useState<string>("");

  useEffect(() => {
    const checkLoader = async () => {
      if (typeof window !== "undefined") {
        const loader = document.getElementById("globalLoader");
        if (loader) {
          await sleep(2);
          loader.style.opacity = "0";
          await sleep(1);
          setLoaded(true);
          loader.style.display = "none";
        }
      }
    };

    checkLoader().catch(console.error);
  }, []);

  const onRouteChangeStart = (path: string) => {
    setChangedRoute(path);
  };

  useEffect(() => {
    router.events.on("routeChangeStart", onRouteChangeStart);
    // router.events.on('routeChangeComplete', aniEnd);
    // router.events.on('routeChangeError', aniEnd);

    return () => {
      router.events.off("routeChangeStart", onRouteChangeStart);
      // router.events.off('routeChangeComplete', aniEnd);
      // router.events.off('routeChangeError', aniEnd);
    };
  }, [router]);

  return (
    <Provider store={store}>
      <Navigation loaded={loaded} changedRoute={changedRoute} />
      <AnimatePresence mode="wait">
        <Component {...pageProps} loaded={loaded} key={router.pathname} />
      </AnimatePresence>
    </Provider>
  );
};

export default Application;
