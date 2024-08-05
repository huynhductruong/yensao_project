import Product from "@/components/cards/product";
import Facebook from "@/components/facebooks";
export default function Home() {
  const product = {
    id:1,
    name_product: "Yến Tổ Tinh Chế Cao Cấp Thiên Triều Hộp 50g",
    price: 2500000,
    image: ['/yen.png'],
    description: []
  }
  return (
    <main className="w-full flex justify-center mt-4 md:mt-8">
      <div className="w-[95%] md:w-5/6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-[2rem]">
        <Product className="" product={product}/>
        <Product className="" product={product}/>
        <Product className="" product={product}/>
        <Product className="" product={product}/>
        <Product className="" product={product}/>
        <Product className="" product={product}/>
        <Product className="" product={product}/>
      </div>
      <Facebook/>
    </main>
  );
}
