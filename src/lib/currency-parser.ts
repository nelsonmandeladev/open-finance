// Currency formatting configurations based on ISO standards
const currencyFormats: Record<string, CurrencyFormat> = {
  USD: {
    symbol: "$",
    symbolPosition: "prefix",
    decimalSeparator: ".",
    thousandsSeparator: ",",
  },
  EUR: {
    symbol: "€",
    symbolPosition: "suffix",
    decimalSeparator: ",",
    thousandsSeparator: ".",
  },
  GBP: {
    symbol: "£",
    symbolPosition: "prefix",
    decimalSeparator: ".",
    thousandsSeparator: ",",
  },
  JPY: {
    symbol: "¥",
    symbolPosition: "prefix",
    decimalSeparator: ".",
    thousandsSeparator: ",",
  },
  CNY: {
    symbol: "¥",
    symbolPosition: "prefix",
    decimalSeparator: ".",
    thousandsSeparator: ",",
  },
  INR: {
    symbol: "₹",
    symbolPosition: "prefix",
    decimalSeparator: ".",
    thousandsSeparator: ",",
  },
  RUB: {
    symbol: "₽",
    symbolPosition: "suffix",
    decimalSeparator: ",",
    thousandsSeparator: " ",
  },
  BRL: {
    symbol: "R$",
    symbolPosition: "prefix",
    decimalSeparator: ",",
    thousandsSeparator: ".",
  },
  CAD: {
    symbol: "CA$",
    symbolPosition: "prefix",
    decimalSeparator: ".",
    thousandsSeparator: ",",
  },
  AUD: {
    symbol: "A$",
    symbolPosition: "prefix",
    decimalSeparator: ".",
    thousandsSeparator: ",",
  },
};

export type CurrencyCode = keyof typeof currencyFormats;

/**
 * Formats a number as a currency string according to the specified currency's convention
 * @param amount The numeric amount to format
 * @param currency The ISO currency code (e.g., 'USD', 'EUR')
 * @returns Formatted currency string
 */
export function formatCurrency(amount: number, currency: CurrencyCode): string {
  // Get the currency format configuration or use USD as default
  const format = currencyFormats[currency.toUpperCase()] || currencyFormats.USD;

  // Split the number into integer and decimal parts
  const [integerPart, decimalPart = ""] = amount.toString().split(".");

  // Format the integer part with thousands separators
  const formattedIntegerPart = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    format.thousandsSeparator,
  );

  // Build the formatted number
  let formattedAmount = "";
  if (decimalPart) {
    formattedAmount = `${formattedIntegerPart}${format.decimalSeparator}${decimalPart}`;
  } else {
    formattedAmount = formattedIntegerPart;
  }

  // Add the currency symbol in the correct position
  if (format.symbolPosition === "prefix") {
    return `${format.symbol}${formattedAmount}`;
  } else {
    return `${formattedAmount}${format.symbol}`;
  }
}
