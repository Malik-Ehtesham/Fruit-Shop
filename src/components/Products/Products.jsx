import PaginationButton from "../PaginationButton/PaginationButton";
import ProductCard from "../ProductCard/ProductCard";
import ProductsList from "../ProductsList/ProductsList";
import SelectCategoryButton from "../SelectCategoryButton/SelectCategoryButton";
import Slider from "../Slider/Slider";

const Products = () => {
  return (
    <div className="w-screen">
      <Slider />
      <SelectCategoryButton />
      <p className="text-red-500 font-bold text-center text-2xl sm:text-3xl border-b-2 m-2 p-5">
        All Products
      </p>
      {/* <div> */}
      <ProductsList />
      <div className="flex justify-center my-10">
        <PaginationButton />
      </div>
      {/* </div> */}
    </div>
  );
};

export default Products;
