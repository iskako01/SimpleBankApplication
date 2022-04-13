const formatter = new Intl.NumberFormat("en-En", {
  currency: "USD",
  style: "currency",
});

export function currency(value: number) {
  return formatter.format(value);
}
