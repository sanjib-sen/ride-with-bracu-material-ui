import type { AppProps } from "next/app";
import { FirebaseAuthProvider } from "../firebase/context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FirebaseAuthProvider>
      <Component {...pageProps} />
    </FirebaseAuthProvider>
  );
}

export default MyApp;
