"use client"

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { useEffect, useState } from "react"
import { useSearchParams } from 'next/navigation';

export function PaginationComponent() {
    const searchParams = useSearchParams();

    const updateValueArray = (page: number) => {
        const divide = page % 3
        let arr: Array<number>

        if (page > 3 && divide === 1) arr = [page, page + 1, page + 2]
        else if (page <= 1) arr = [1, 2, 3]
        else arr = [page + (divide / 2 - 2), page + (divide / 2 - 1), page + (divide / 2)]

        return arr
    }
    const [page, setPage] = useState(1)
    const [valueNumber, setValueNumber] = useState(updateValueArray(page))

    useEffect(() => {
        setPage(Number(searchParams.get('page')) || 1)
        setValueNumber(updateValueArray(page));
    }, [searchParams, page]);

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href={`?page=${page - 1}`} />
                </PaginationItem>
                {
                    valueNumber.map((value, index) => {
                        return (
                            <PaginationItem key={index}>
                                <PaginationLink href={`?page=${value}`} isActive={page === value} >{value}</PaginationLink>
                            </PaginationItem>
                        )
                    })
                }

                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext href={`?page=${page + 1}`} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}
