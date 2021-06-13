import React from "react";
import Categories from "./Categories/Categories";
import Headers from "./Header/Header";
import ProductSkeleton from './Products/Skeleton'
import CatProduct from './CatProducts/CatProducts'
import CatProducts from "./CatProducts/CatProducts";

function Home() {
  return (
    <div className="home">
      <Headers />
      <CatProducts props={{"name":"jewelery"}}/>
    </div>
  );
}

export default Home;
