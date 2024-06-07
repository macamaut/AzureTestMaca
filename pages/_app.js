import Layout from "@/components/Layout";
import { ToastContainer } from 'react-toastify';
import GlobalContextProvider from "@/store";

import "@/styles/globals.css";


export default function App({ Component, pageProps }) {
  return (
    <GlobalContextProvider>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </GlobalContextProvider>
  )
}
