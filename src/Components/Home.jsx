import React from "react";
import Categories from "./Categories/Categories";
import Headers from "./Header/Header";
import ProductSkeleton from './Products/Skeleton'
import CatProducts from "./CatProducts/CatProducts";

function Home() {
  return (
    <div className="home">
      <Headers />
      <Categories />
      
    </div>
  );
}

export default Home;
