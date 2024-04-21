import { wrapper, store } from "../configs/redux/store";
import "@/styles/globals.css";
import { Fragment } from "react";
import { Provider } from "react-redux";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Provider store={store}>
        <Component {...pageProps} />;
      </Provider>
    </Fragment>
  );
}

export default wrapper.withRedux(App);