import { useQuery } from "@tanstack/react-query";
import React from "react";
import men from "../../../assets/men.jpg";
import LoaderCard from "../../../Components/LoaderCard/LoaderCard";
import NewDrop from "../../Home/NewDrop/NewDrop";

const ShopMen = () => {
  const { data: productMen, isLoading } = useQuery({
    queryKey: ["productMen"],
    queryFn: async () => {
      const res = await fetch("https://bliss-server-y2j1.vercel.app/productMen?category=men");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <LoaderCard></LoaderCard>;
  }

  return (
    <div className="mb-8">
      <header className="text-center">
        <h2 className="text-4xl lg:text-7xl my-8 lg:my-12 font-bold text-gray-900 py-20 from-lime-300 bg-gradient-to-t bg-opacity-75">
          Shop Men
        </h2>
      </header>

      <div className="grid gap-4 lg:gap-14 grid-cols-2 lg:grid-cols-4 lg:mx-14 mx-6 py-6 sm:px-6 sm:py-8 lg:px-8">
        {productMen?.map((productMen) => (
          <NewDrop products={productMen} key={productMen._id}></NewDrop>
        ))}
      </div>
    </div>
  );
};

export default ShopMen;
