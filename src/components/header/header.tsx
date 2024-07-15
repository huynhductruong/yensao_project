import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import { FaUnlock } from "react-icons/fa";
import { HiUserAdd } from "react-icons/hi";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

import Menu from "@/components/dropdown/menu";
export default function Header() {
    return (
        <div className="w-full bg-primary p-2 md:p-3 flex flex-col items-center text-xs md:text-sm">
            <div className="w-5/6 flex justify-end md:justify-between">
                <div className="text-white hidden md:flex">
                    <div className="flex items-center">
                        <FaPhone className="text-xs mr-1.5 mb-0.5" />
                        <h4 >Hotline: </h4>
                        <Link className="ml-1.5 hover:text-red-500 duration-300 ease-in-out" href="#">035.473.7467</Link>
                    </div>
                    <div className="flex items-center">
                        <HiMail className="text-lg mr-1.5 mb-0.5 ml-[1.5rem]" />
                        <h4 >Email:</h4>
                        <Link className="ml-1.5 hover:text-red-500 duration-300 ease-in-out" href="#">hoangquoctoan775@gmail.com</Link>
                    </div>
                </div>
                <div className="flex text-white space-x-1">
                    <div className="flex items-center">
                        <FaUnlock className="text-xs mb-0.5" />
                        <Link href="#" className="ml-1.5 hover:text-red-500 duration-300 ease-in-out">Đăng nhập</Link>
                    </div>
                    <h1>|</h1>
                    <div className="flex items-center">
                        <HiUserAdd className="text-base mb-0.5" />
                        <Link href="#" className="ml-1.5 hover:text-red-500 duration-300 ease-in-out">Đăng ký</Link>
                    </div>
                </div>
            </div>
            <div className="w-5/6 flex justify-between mt-2 md:mt-3 items-center">
                <Image src="/logo.png" className="w-[40px] h-[40px] md:w-[70px] md:h-[70px]" width="70" height="70" alt="logo"></Image>
                <div className="text-white flex font-medium md:text-sm items-center uppercase space-x-3 md:space-x-10">
                    <div className="hidden md:flex space-x-10">
                        <Link href="#" className="hover:text-red-500 duration-300 ease-in-out">
                            <h3>TRANG CHỦ</h3>
                        </Link>
                        <Link href="#" className="hover:text-red-500 duration-300 ease-in-out">
                            <h3>GIỚI THIỆU</h3>
                        </Link>
                        <Link href="#" className="hover:text-red-500 duration-300 ease-in-out">
                            <h3>SẢN PHẨM</h3>
                        </Link>
                        <Link href="#" className="hover:text-red-500 duration-300 ease-in-out">
                            <h3>TIN TỨC</h3>
                        </Link>
                        <Link href="#" className="hover:text-red-500 duration-300 ease-in-out">
                            <h3>LIÊN HỆ</h3>
                        </Link>
                    </div>
                    <FaSearch className="text-base md:mb-1 cursor-pointer hover:text-red-500 duration-300 ease-in-out"/>
                    <Menu/>
                    
                </div>
            </div>
        </div>
    )
}
