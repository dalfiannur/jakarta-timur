import _ from "lodash";

export const formattedNumber = (value: number, digit = 0) =>
  _.toString(
    new Intl.NumberFormat("en-US", {
      minimumFractionDigits: digit,
      maximumFractionDigits: digit,
    }).format(value),
  );
