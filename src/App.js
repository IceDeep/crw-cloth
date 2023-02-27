import "./App.css";
import HomePage from "./pages/homepage/homepage.components";
import ShopPage from "./pages/shop/shop.component";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header-component/header-component";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/shop" element={<ShopPage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
