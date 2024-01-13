export type usePaginationProps = {
  totalCount: number;
  pageSize: number;
  siblingCount?: number;
  currentPage: number;
};

export type Product = {
  description: string;
  hasVariant?: boolean;
  name: string;
  normalPrice: number;
  newPrice?: number;
  active: boolean;
  categoryId: string;
};
