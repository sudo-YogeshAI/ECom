import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import AllProducts from "./Components/AllProducts/AllProducts";
import Categories from "./Components/Categories/Categories";
import CatProducts from "./Components/CatProducts/CatProducts";
import Headers from "./Components/Header/Header";

function App() {

  const [cart,setCart] = useState();
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Headers />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/all-products" exact component={() => <AllProducts />} />
          <Route path="/category" exact component={() => <Categories />} />
          <Route path="/category/:category" component={() => <CatProducts />} />
          
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;