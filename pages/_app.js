import "@/styles/globals.css";
import { ThemeProvider } from "@/Context/Theme";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
