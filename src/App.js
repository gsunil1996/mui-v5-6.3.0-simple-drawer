import { Route, Routes } from "react-router-dom";
import "./App.css";
import ExternalDrawer from "./Drawer/ExternalDrawer";
import PageNotFound from "./components/PageNotFound";
import ExternalProducts from "./components/externalUser/ExternalProducts";
import ExternalUsers from "./components/externalUser/ExternalUsers";
import ExternalProfile from "./components/externalUser/ExternalProfile";
import ExternalAccount from "./components/externalUser/ExternalAccount";
import Home from "./components/Home";
import Sales from "./components/externalUser/Sales";
import Marketing from "./components/externalUser/Marketing";

function App() {

  return (
    <div className="App" style={{ display: "flex", marginTop: 80, paddingRight: "10px" }}>

      <ExternalDrawer />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/external-products" element={<ExternalProducts />} />

        <Route path="/external-users" element={<ExternalUsers />} />

        <Route path="/external-profile" element={<ExternalProfile />} />

        <Route path="/external-account" element={<ExternalAccount />} />

        <Route path="/sales" element={<Sales />} />

        <Route path="/marketing" element={<Marketing />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>

  );
}

export default App;
