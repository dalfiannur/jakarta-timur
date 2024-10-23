"use client";
import Link from "next/link";
import { Icon } from "../icons";
import { tv } from "tailwind-variants";
import { useSearchParams } from "next/navigation";

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

export const Pagination = ({ total }: { total: number }) => {
  const searchParams = useSearchParams();
  const active = searchParams.has("page")
    ? Number(searchParams.get("page"))
    : 1;
  const pagination = getPagination(active, total);

  return (
    <div className="flex items-center gap-4">
      <PaginationArrow position="left" disabled={active === 1} />
      {pagination.map((item, index) =>
        typeof item === "string" ? (
          <PaginationNumber key={index} label="..." />
        ) : (
          <PaginationNumber
            key={index}
            active={active === item}
            label={item.toString()}
          />
        )
      )}
      <PaginationArrow position="right" disabled={active === total} />
    </div>
  );
};

const PaginationArrow = ({
  position,
  disabled,
}: {
  position: "left" | "right";
  disabled?: boolean;
}) => {
  const searchParams = useSearchParams();
  const active = searchParams.has("page")
    ? Number(searchParams.get("page"))
    : 1;
  const step = position === "left" ? -1 : 1;
  const url = new URL(window.location.href);
  url.searchParams.set("page", (active + step).toString());

  return (
    <Link
      href={`?${url.searchParams.toString()}`}
      aria-disabled={disabled}
      scroll={!disabled}
      className={tv({
        base: "",
        variants: {
          disabled: { true: "text-gray-400", false: "text-pink-500" },
        },
      })({ disabled })}
    >
      <Icon
        name={position === "left" ? "ChevronLeft" : "ChevronRight"}
        size={24}
      />
    </Link>
  );
};

const PaginationNumber = ({
  active,
  label,
}: {
  active?: boolean;
  label: string;
}) => {
  const url = new URL(window.location.href);
  url.searchParams.set("page", label);
  return (
    <Link
      href={`?${url.searchParams.toString()}`}
      className={tv({
        base: "w-8 h-8 rounded-full font-semibold flex items-center justify-center",
        variants: {
          active: {
            true: "bg-pink-500 text-white",
            false: "text-pink-500",
          },
        },
      })({ active })}
    >
      {label}
    </Link>
  );
};
