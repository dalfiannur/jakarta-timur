"use client";
import { Icon } from "../icons";
import { tv } from "tailwind-variants";

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
  color?: "blue" | "pink";
  page?: number;
  onPageChange?: (page: number) => void;
}) => {
  const pagination = getPagination(page, total);

  return (
    <div className="flex items-center gap-4">
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
        )
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

const paginationArrowCss = tv({
  base: "",
  variants: {
    color: {
      blue: "",
      pink: "",
    },
    disabled: { true: "text-gray-400", false: "" },
  },
  compoundVariants: [
    {
      color: "pink",
      disabled: false,
      class: "text-pink-500",
    },
    {
      color: "blue",
      disabled: false,
      class: "text-blue-500",
    },
  ],
});

const PaginationArrow = ({
  position,
  disabled,
  color = "pink",
  onClick,
}: {
  position: "left" | "right";
  disabled?: boolean;
  color?: "blue" | "pink";
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      aria-disabled={disabled}
      className={paginationArrowCss({ disabled, color })}
    >
      <Icon
        name={position === "left" ? "ChevronLeft" : "ChevronRight"}
        className="w-6 h-6"
      />
    </button>
  );
};

const paginationNumberCss = tv({
  base: "w-8 h-8 rounded-full font-semibold flex items-center justify-center",
  variants: {
    active: {
      true: "",
      false: "",
    },
    color: {
      pink: "",
      blue: "",
    },
  },
  compoundVariants: [
    {
      active: false,
      color: "pink",
      class: "text-pink-500",
    },
    {
      active: false,
      color: "blue",
      class: "text-blue-500",
    },
    {
      active: true,
      color: "pink",
      class: "bg-pink-500 text-white",
    },
    {
      active: true,
      color: "blue",
      class: "bg-blue-500 text-white",
    },
  ],
});

const PaginationNumber = ({
  active,
  label,
  color = "pink",
  onClick,
}: {
  active?: boolean;
  label: string;
  color?: "blue" | "pink";
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={paginationNumberCss({ active, color })}
    >
      {label}
    </button>
  );
};
