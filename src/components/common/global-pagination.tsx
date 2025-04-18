"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components";
import { useGlobalUrlQueryParams } from "@/hooks";
import { useCallback, useMemo } from "react";

interface GlobalPaginationProps {
  totalPages: number;
}

export function GlobalPagination(props: GlobalPaginationProps) {
  const {
    queryParams: { activePage },
    setQueryParams,
  } = useGlobalUrlQueryParams();
  const { totalPages } = props;

  const handlePageClick = useCallback(
    (page: number) => {
      if (page >= 1 && page <= totalPages) {
        // Change the page number here;
        setQueryParams((prev) => ({
          ...prev,
          activePage: page,
        }));
      }
    },
    [setQueryParams, totalPages],
  );

  const renderPageNumbers = useMemo(() => {
    const pages = [];
    const showEllipsis = totalPages > 5;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 || // Always show first page
        i === totalPages || // Always show last page
        (i >= activePage - 1 && i <= activePage + 1) || // Show current page and adjacent pages
        (!showEllipsis && i <= 5) // Show all pages if total is 5 or less
      ) {
        pages.push(
          <PaginationItem key={i}>
            <PaginationLink
              href="#"
              isActive={i === activePage}
              onClick={() => handlePageClick(i)}
            >
              {i}
            </PaginationLink>
          </PaginationItem>,
        );
      } else if (
        (showEllipsis && i === 2 && activePage > 3) ||
        (showEllipsis && i === totalPages - 1 && activePage < totalPages - 2)
      ) {
        pages.push(
          <PaginationItem key={i}>
            <PaginationEllipsis />
          </PaginationItem>,
        );
      }
    }
    return pages;
  }, [activePage, handlePageClick, totalPages]);

  return (
    <Pagination className="flex justify-end">
      <PaginationContent className="text-primary text-xs font-medium">
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() => handlePageClick(activePage - 1)}
            aria-disabled={activePage === 1}
          />
        </PaginationItem>
        {renderPageNumbers}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() => handlePageClick(activePage + 1)}
            aria-disabled={activePage === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
