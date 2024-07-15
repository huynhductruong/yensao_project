/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

export default function Product({ className, product }: { className: string, product: ProductType }) {
  return (
    <Link href="#" className={`${className} flex flex-col items-center pb-2`}>
      {/* // eslint-disable-next-line @next/next/no-img-element */}
      <img src={product.image} alt="image" className="w-full h-4/5"/>
      <h1 className="text-center text-[#25363a] font-bold text-sm md:text-base mt-4">{product.name_product}</h1>
      <h1 className="font-bold text-[#ED1B23] price_font text-sm md:text-base mt-4">{product.price.toLocaleString()} đ</h1>
    </Link>
  )
}
