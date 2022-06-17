import { ThemeProvider } from "next-themes";

import "@/css/tailwind.css";
import siteMetadata from "@/lib/siteMetadata";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
