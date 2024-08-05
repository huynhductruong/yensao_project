import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductDescription() {
    return (
        <Tabs defaultValue="descriptions">
            <TabsList className="grid w-full h-full grid-cols-2 font-bold">
                <TabsTrigger className="p-2 whitespace-normal text-sm md:text-base" value="descriptions">MÔ TẢ SẢN PHẨM</TabsTrigger>
                <TabsTrigger className="p-2 whitespace-normal text-sm md:text-base" value="usage">CÁCH DÙNG</TabsTrigger>
            </TabsList>
            <TabsContent value="descriptions" className="w-full border-[1px] border-solid rounded">MÔ TẢ SẢN PHẨM</TabsContent>
            <TabsContent value="usage" className="w-full border-[1px] border-solid rounded">CÁCH DÙNG</TabsContent>
        </Tabs>

    )
}
