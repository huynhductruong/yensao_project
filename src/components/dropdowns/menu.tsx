import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IoMenu } from "react-icons/io5";
import { FaHome, FaInfo, FaNewspaper, FaPhoneAlt } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";
export default function Menu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <IoMenu className="md:hidden text-2xl md:mb-1" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="md:hidden rounded-none">
                <DropdownMenuLabel className="text-white bg-primary flex justify-center">
                    <IoLogoTwitter />
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <div className="flex items-center w-full justify-start space-x-2">
                        <FaHome className="mb-1"/>
                        <h3>TRANG CHỦ</h3>
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <div className="flex items-center w-full justify-start space-x-2">
                        <AiFillProduct className="mb-1"/>
                        <h3>SẢN PHẨM</h3>
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <div className="flex items-center w-full justify-start space-x-2">
                        <FaInfo className="mb-1"/>
                        <h3>GIỚI THIỆU</h3>
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <div className="flex items-center w-full justify-start space-x-2">
                        <FaNewspaper className="mb-1"/>
                        <h3>TIN TỨC</h3>
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <div className="flex items-center w-full justify-start space-x-2">
                        <FaPhoneAlt className="mb-1"/>
                        <h3>LIÊN HỆ</h3>
                    </div>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
