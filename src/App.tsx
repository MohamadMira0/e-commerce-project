import "./App.css";
import ProductCard from "./components/ProductCard";
import Button from "./components/ui/Button";
import { productList } from "./data";

function App() {
  const openModal = () => {};

  const renderProductList = productList.map((product, index) => (
    <ProductCard key={index} product={product} />
  ));

  return (
    <main>
      <Button
        width="w-fit"
        className="block bg-indigo-700 hover:bg-indigo-800 mx-auto my-10"
        onClick={openModal}
      >
        Build a Product
      </Button>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 md:gap-4 p-2 rounded-md">
        {!productList.length ? (
          <p className="text-red-600">
            you dont have any product <br />
            click on "build product" to add a product
          </p>
        ) : (
          renderProductList
        )}
      </div>
    </main>
  );
}

export default App;
