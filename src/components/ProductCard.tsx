import type { IProduct } from "../interfaces";
import { numberWithCommas, txtSlicer } from "../utils/functions";
import CircleColor from "./CircleColor";
import Image from "./Image";
import Button from "./ui/Button";

interface IProps {
  product: IProduct;
}
const ProductCard = ({ product }: IProps) => {
  const { category, colors, description, imageURL, price, title } = product;
  console.log(colors);

  const renderProductColors = colors.map((color, idx) => (
    <CircleColor key={idx} color={color} />
  ));
  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col space-y-3 border-gray-300">
      <Image
        alt="product Name"
        className="rounded-md h-52 w-full lg:object-cover"
        imageURL={imageURL}
      />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p title={description} className="text-sm text-gray-500 break-words">
        {txtSlicer(description)}
      </p>
      <div className="flex items-center space-x-1">
        {!colors.length ? (
          <p className="text-red-700 min-h-[20px]"> No available colors</p>
        ) : (
          renderProductColors
        )}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-lg text-indigo-600 font-semibold">
          ${numberWithCommas(price)}
        </span>
        <div className="flex items-center space-x-2">
          <span>{category.name}</span>
          <Image
            alt="Nike"
            className="w-10 h-10 rounded-full object-cover"
            imageURL={category.imageURL}
          />
        </div>
      </div>
      <div className="flex items-center justify-between space-x-2">
        <Button className="bg-indigo-700 hover:bg-indigo-800">Edit</Button>
        <Button className="bg-red-700 hover:bg-red-800">Remove</Button>
      </div>
    </div>
  );
};

export default ProductCard;
