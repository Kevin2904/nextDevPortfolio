import { VisibilityProvider } from "../lib/visibilityContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <VisibilityProvider>
      <Component {...pageProps} />
    </VisibilityProvider>
  );
}

export default MyApp;
