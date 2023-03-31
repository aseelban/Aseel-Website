import Preloader from "@/src/components/Preloader";
import Switcher from "@/src/components/Switcher";
import HeaderNav from "@/src/HeaderNav";
import "@/styles/globals.css";
import { Fragment } from "react";

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <HeaderNav />
      <Switcher />
      <Preloader />
      <Component {...pageProps} />
    </Fragment>
  );
};
export default App;
