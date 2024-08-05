"use client";

import { useEffect, useState } from 'react';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react"
import { useMediaQuery } from "usehooks-ts"
import { IconType } from 'react-icons';

interface Props {
    title: string
    className: string
    Icon: IconType
    product: ProductType
}

export default function DialogCart(props: Props) {
    const [goal, setGoal] = useState(1)
    const isDesktop = useMediaQuery("(min-width: 768px)")

    function onClick(adjustment: number) {
        setGoal(goal + adjustment)
    }

    function handleAddCart() {
        const cart = localStorage.getItem('cart')
        let cartJson = []

        cart ? cartJson = JSON.parse(cart) : cartJson = []
        cartJson.push({
            product_id: props.product.id,
            quantity: goal,
            name_product: props.product.name_product,
            image: props.product.image,
            price: props.product.price
        })
        localStorage.setItem('cart', JSON.stringify(cartJson))
    }

    if (isDesktop) {
        return (
            <Dialog>
                <DialogTrigger asChild>
                    <div className={props.className}>
                        <props.Icon className='me-2' />
                        <h5>{props.title}</h5>
                    </div>
                </DialogTrigger>
                <DialogContent className="md:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Số Lượng</DialogTitle>
                        <DialogDescription>
                            Chọn số lượng muốn mua.
                        </DialogDescription>
                        <div className="p-4 pb-0">
                            <div className="flex items-center justify-center space-x-2">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-8 w-8 shrink-0 rounded-full"
                                    onClick={() => onClick(-1)}
                                    disabled={goal <= 1}
                                >
                                    <Minus className="h-4 w-4" />
                                    <span className="sr-only">Decrease</span>
                                </Button>
                                <div className="flex-1 text-center">
                                    <div className="text-xl font-bold tracking-tighter">
                                        {goal}
                                    </div>
                                </div>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-8 w-8 shrink-0 rounded-full"
                                    onClick={() => onClick(1)}
                                    disabled={goal >= 400}
                                >
                                    <Plus className="h-4 w-4" />
                                    <span className="sr-only">Increase</span>
                                </Button>
                            </div>
                        </div>
                    </DialogHeader>
                    <DialogFooter>

                        <DialogClose asChild>
                            <Button className='bg-primary_bg text-white' onClick={handleAddCart}>Đặt Mua</Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        )
    }

    else return (
        <Drawer>
            <DrawerTrigger asChild>
                <div className={props.className}>
                    <props.Icon className='me-2' />
                    <h5>{props.title}</h5>
                </div>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                        <DrawerTitle>Số Lượng</DrawerTitle>
                        <DrawerDescription>Chọn số lượng muốn mua.</DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 pb-0">
                        <div className="flex items-center justify-center space-x-2">
                            <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 shrink-0 rounded-full"
                                onClick={() => onClick(-1)}
                                disabled={goal <= 0}
                            >
                                <Minus className="h-4 w-4" />
                                <span className="sr-only">Decrease</span>
                            </Button>
                            <div className="flex-1 text-center">
                                <div className="text-xl font-bold tracking-tighter">
                                    {goal}
                                </div>
                            </div>
                            <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 shrink-0 rounded-full"
                                onClick={() => onClick(1)}
                                disabled={goal >= 400}
                            >
                                <Plus className="h-4 w-4" />
                                <span className="sr-only">Increase</span>
                            </Button>
                        </div>
                    </div>
                    <DrawerFooter>
                        <DrawerClose asChild>
                            <Button className='bg-primary_bg text-white' onClick={handleAddCart}>Đặt Mua</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
