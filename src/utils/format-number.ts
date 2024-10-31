import _ from "lodash";

export const formattedNumber = (value: number | string, digit = 0) =>
  _.toString(
    new Intl.NumberFormat("en-US", {
      minimumFractionDigits: digit,
      maximumFractionDigits: digit,
    }).format(_.toNumber(value)),
  );
