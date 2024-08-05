/* eslint-disable @next/next/no-img-element */

import Product from '@/components/cards/product';
import EmblaCarousel from '@/components/embla-carousel'
import InformationProduct from '@/components/information-product'
import ProductDescription from '@/components/tabs/product-description';

interface PageParams {
  params: {
    id: number;
  };
}

export default function Page({ params }: PageParams) {
  const product = {
    id: params.id,
    price: 7500000,
    name_product: "Hộp 6 hủ yến sào cao cấp Thiên Triều có đường GOLD 22% - 70ml/hủ",
    description: [
      'Quy Cách: 6 Hủ/Hộp, 5 Hộp/Thùng',
      'Tăng cường sức khỏe, da mịn màng',
      'Hương Yến thơm ngon tự nhiên',
      '22% hàm lượng yến',
      'Không sử dụng chất hóa học'
    ],
    image: ['/yen2.jpg', '/yen3.jpg', '/yen11.png', '/yen4.jpg']
  }
  return (

    <div className="w-full flex flex-col items-center">
      <div className="w-[95%] md:w-5/6 flex border-b-2 pb-3 md:pb-5 border-gray-400 border-solid">
        <div className="xl:w-[75%] grid grid-cols-1 md:grid-cols-2 gap-5">
          <EmblaCarousel slides={product.image} />
          <InformationProduct product={product} />
        </div>
        <div></div>
      </div>
      <div className="w-[95%] md:w-5/6 grid grid-cols-1 md:grid-cols-3 gap-2">
        <div className='md:col-span-2 mt-5'>
          <ProductDescription />
        </div>
        <div className='flex flex-wrap justify-center space-y-4 mt-4'>
          <h5 className='uppercase text-[#ED1B23] font-bold'>Sản phẩm cùng danh mục</h5>
          <Product className="w-5/6 md:w-4/6" product={product} />
          <Product className="w-5/6 md:w-4/6" product={product} />
          <Product className="w-5/6 md:w-4/6" product={product} />
        </div>
      </div>
    </div>
  )
}
