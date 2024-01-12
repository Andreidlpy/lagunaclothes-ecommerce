"use client";

import { usePagination, DOTS } from "@/hooks/use-pagination";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ProductsPaginationProps = {
  onPageChange: React.Dispatch<React.SetStateAction<number>>;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
};

export const ProductsPagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}: ProductsPaginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (!paginationRange) return null;

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = (e: any) => {
    e.preventDefault();
    onPageChange(currentPage + 1);
  };

  const onPrevious = (e: any) => {
    e.preventDefault();
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <Pagination className="pt-4 justify-end">
      <PaginationContent>
        <Button
          size={"sm"}
          variant={"ghost"}
          disabled={currentPage === 1}
          onClick={onPrevious}
          className="flex items-center "
        >
          <ChevronLeft className="size-4 mr-1" />
          Prev
        </Button>

        {paginationRange?.map((pageNumber, index) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === DOTS) {
            return (
              <li key={index} className="pagination-item dots">
                &#8230;
              </li>
            );
          }
          // Render our Page Pills
          return (
            <Button
              variant={"ghost"}
              size={"sm"}
              key={index}
              className={cn(
                pageNumber === currentPage ? "border rounded-md" : ""
              )}
              onClick={(e) => {
                e.preventDefault();
                onPageChange(Number(pageNumber));
              }}
            >
              {pageNumber}
            </Button>
          );
        })}

        <Button
          size={"sm"}
          variant={"ghost"}
          disabled={currentPage === lastPage}
          onClick={onNext}
          className="flex items-center"
        >
          Next
          <ChevronRight className="size-4 ml-1" />
        </Button>
      </PaginationContent>
    </Pagination>
  );
};
