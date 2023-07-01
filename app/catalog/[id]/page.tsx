import React from "react";
import SliderInCard from "../../../components/slider_in_card/SliderInCard";

interface ProductProps {
  params: {
    id: string;
  };
}
export default function page({ params }: ProductProps) {
  return (
    <div>
      {params.id}

      <SliderInCard />
    </div>
  );
}
