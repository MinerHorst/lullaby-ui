import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { Inter } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "../styles/prism-vsc-dark.css";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { Toaster } from "~/components/ui/notification/toaster";
import { AnimatePresence, motion } from "framer-motion";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <main className={`font-sans ${inter.variable}`}>
        <AnimatePresence>
          <Component {...pageProps} />
          <Toaster />
          <Analytics />
          <SpeedInsights />
          <motion.div id="drawer-root"></motion.div>
          <motion.div id="dialogue-root"></motion.div>
        </AnimatePresence>
      </main>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
