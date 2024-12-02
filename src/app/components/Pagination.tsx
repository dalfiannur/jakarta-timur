"use client";
import { PaginationNumber } from "./PaginationNumber";
import { PaginationArrow } from "./PaginationArrow";

const getPagination = (current: number, total: number) => {
  const range: (number | string)[] = [];
  const delta = 1;
  const left = current - delta;
  const right = current + delta;

  let nearestLeftBoundary = Math.floor(current / 10) * 10;
  if (current - nearestLeftBoundary <= 2) {
    nearestLeftBoundary -= 10;
  }

  if (current > 2) {
    range.push(nearestLeftBoundary <= 0 ? 1 : nearestLeftBoundary);
  }

  if (nearestLeftBoundary > 1 || current > 3) {
    range.push("...");
  }

  for (
    let i = Math.max(nearestLeftBoundary - 1, left);
    i <= Math.min(right, total);
    i++
  ) {
    if (i > 0) {
      range.push(i);
    }
  }

  let nearestRightBoundary = Math.ceil(current / 10) * 10;
  if (nearestRightBoundary - current <= 2) {
    nearestRightBoundary += 10;
  }

  if (
    right < nearestRightBoundary - 1 &&
    nearestRightBoundary <= total &&
    current !== total
  ) {
    range.push("...");
  }

  if (nearestRightBoundary <= total) {
    range.push(nearestRightBoundary);
  } else if (nearestRightBoundary > total && current < total - 1) {
    range.push(total);
  }

  return range;
};

export const Pagination = ({
  total,
  page = 1,
  color = "pink",
  onPageChange,
}: {
  total: number;
  color?: "blue" | "pink" | "orange";
  page?: number;
  onPageChange?: (page: number) => void;
}) => {
  const pagination = getPagination(page, total);

  return (
    <div className="flex items-center gap-3 lg:gap-4">
      <PaginationArrow
        position="left"
        color={color}
        disabled={page === 1}
        onClick={() => onPageChange?.(page - 1)}
      />
      {pagination.map((item, index) =>
        typeof item === "string" ? (
          <PaginationNumber key={index} label="..." />
        ) : (
          <PaginationNumber
            key={index}
            active={page === item}
            color={color}
            label={item.toString()}
            onClick={() => onPageChange?.(item)}
          />
        ),
      )}
      <PaginationArrow
        position="right"
        color={color}
        disabled={page === total}
        onClick={() => onPageChange?.(page + 1)}
      />
    </div>
  );
};
