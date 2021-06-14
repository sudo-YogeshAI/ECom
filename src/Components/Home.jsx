import React from "react";
import Categories from "./Categories/Categories";
import Headers from "./Header/Header";
import ProductSkeleton from './Products/Skeleton'
import CatProducts from "./CatProducts/CatProducts";
import AllProducts from "./AllProducts/AllProducts";

function Home() {
  return (
    <div className="home">
      <Categories/>
    </div>
  );
}

export default Home;
