"use client";

import { useSearchParams } from "next/navigation";

const ProductList = () => {
  const searchParams = useSearchParams();
  const pages = searchParams.getAll("page") || 1;
  const category = searchParams.get("category") || "all";
  const sort = searchParams.get("sort") || "asc";
  return (
    <div>
      ProductList:
      <div>
        Search Product: {category}, Sort: {sort}, Page: {pages}
      </div>
    </div>
  );
};

export default ProductList;
