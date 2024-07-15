import Product from "@/components/card/product";
export default function Home() {
  const product = {
    id:1,
    name_product: "Yến Tổ Tinh Chế Cao Cấp Thiên Triều Hộp 50g",
    price: 2500000,
    image: '/yen.png'
  }
  return (
    <main className="w-full flex justify-center mt-4 md:mt-8">
      <div className="w-[95%] md:w-5/6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-[2rem]">
        <Product className="border-solid border-[1px] border-black-200 transition-transform transform md:hover:scale-110 hover:scale-105" product={product}/>
        <Product className="border-solid border-[1px] border-black-200 transition-transform transform md:hover:scale-110 hover:scale-105" product={product}/>
        <Product className="border-solid border-[1px] border-black-200 transition-transform transform md:hover:scale-110 hover:scale-105" product={product}/>
        <Product className="border-solid border-[1px] border-black-200 transition-transform transform md:hover:scale-110 hover:scale-105" product={product}/>
        <Product className="border-solid border-[1px] border-black-200 transition-transform transform md:hover:scale-110 hover:scale-105" product={product}/>
        <Product className="border-solid border-[1px] border-black-200 transition-transform transform md:hover:scale-110 hover:scale-105" product={product}/>
        <Product className="border-solid border-[1px] border-black-200 transition-transform transform md:hover:scale-110 hover:scale-105" product={product}/>
      </div>
    </main>
  );
}
