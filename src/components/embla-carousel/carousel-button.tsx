import Image from 'next/image'
import React from 'react'
type PropType = {
    selected: boolean
    index: number
    onClick: () => void
    img: string
}

export const Thumb: React.FC<PropType> = (props) => {
    const { selected, index, onClick, img } = props

    return (
        <Image src={img} alt="1" width={50} height={50}
            className={'w-[70px] h-[70px] cursor-pointer border-2 border-solid border-gray-500 '.concat(
                selected ? 'border-2 border-solid border-red-500' : ''
            )}
            onClick={onClick}
        />
    )
}
