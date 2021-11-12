import React, {Suspense} from "react";
import {GlobalStyling} from "./GlobalStyles";
import Home from "./pages/Home/";
import Loading from "./pages/Loading";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Home />
      <GlobalStyling />
    </Suspense>
  );
}

export default App;
