import Preloader from "@/src/components/Preloader";
import HeaderNav from "@/src/HeaderNav";
import "@/styles/globals.css";
import { Fragment } from "react";

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <HeaderNav />
      <Preloader />
      <Component {...pageProps} />
    </Fragment>
  );
};
export default App;
