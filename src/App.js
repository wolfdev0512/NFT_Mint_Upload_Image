import React, { useEffect, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MoralisProvider } from "react-moralis";

import "antd/dist/antd.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AppLayout from "./layouts/AppLayout";
const Dashboard = React.lazy(() => import("./pages/dashboard"));
const Create = React.lazy(() => import("./pages/create"));

// const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
// const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;
const APP_ID = "gcUW79pGv1faa03qPx8JAtzU4bNm1lvQjlRfygk7";
const SERVER_URL = "https://n3cnigi8qbyp.usemoralis.com:2053/server";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  const isServerInfo = APP_ID && SERVER_URL ? true : false;

  if (isServerInfo) {
    return (
      <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
        <Suspense fallback={<></>}>
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                  <AppLayout>
                    <Dashboard />
                  </AppLayout>
                }
              />
              <Route
                path="/create"
                element={
                  <AppLayout>
                    <Create />
                  </AppLayout>
                }
              />
            </Routes>
          </Router>
        </Suspense>
        <ToastContainer />
      </MoralisProvider>
    );
  } else {
    return <div>Moralis api is not setted</div>;
  }
}

export default App;
