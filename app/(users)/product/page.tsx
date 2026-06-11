import ProductList from "./ProductList";

const Product = async ({searchParams}: {searchParams: any}) => {
    const searchParam=await searchParams;
 const category = searchParam.category || "all";
 const sort = searchParam.sort || "asc";
 const page=  searchParam.page || 1;

  return (
    <>
    <ProductList/>
    <div>Search Product: {category}, Sort: {sort}, Page: {page}</div>
    </>
  );
};

export default Product;
