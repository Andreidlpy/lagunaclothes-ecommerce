"use client";
import { useEffect, useMemo, useState } from "react";
import { ProductCard } from "./product-card";
import { ProductsPagination } from "./products-pagination";
import { data } from "./data";

let PageSize = 8;

export const ListProducts = () => {
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
        {currentTableData.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <ProductsPagination
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
};
