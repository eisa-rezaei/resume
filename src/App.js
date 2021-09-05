import { useEffect, useState } from "react";
import { GlobalStyling } from "./GlobalStyles";
import Home from "./pages/Home/";
import Loading from "./pages/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  return (
    <>
      {loading ? <Loading /> : <Home />}
      <GlobalStyling />
    </>
  );
}

export default App;
