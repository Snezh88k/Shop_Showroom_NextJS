import React from "react";

interface CatalogProps {
  params: {
    category: string;
  };
}
export default function page({ params }: CatalogProps) {
  console.log(params.category);
  return <div>page</div>;
}
