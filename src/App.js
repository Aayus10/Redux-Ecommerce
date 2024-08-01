import "./App.css";
import Header from "./containers/Header";
import ProductDetail from "./containers/ProductDetail";
import ProductListing from "./containers/ProductListing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<ProductListing />}></Route>
          <Route path="/product/:productId" element={<ProductDetail />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
