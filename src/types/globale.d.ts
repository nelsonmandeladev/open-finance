declare interface IconProps extends React.SVGProps<SVGSVGElement> {
  icon: IconType;
  size?: number;
}

declare type SidebarItemType = {
  icon: IconType;
  label: string;
  isActive?: boolean;
  link: string;
};

declare type CardBrandTYpe = "visa" | "mastercard" | "amex" | "discover";

declare type CardType = {
  id: string;
  balance: number;
  currency: string;
  cardNumber: string;
  cardHolder: string;
  expirationDate: string;
  cvv: string;
  cardBrand: CardBrandTYpe;
  isPrimary: boolean;
};

declare type CurrencyFormat = {
  symbol: string;
  symbolPosition: "prefix" | "suffix";
  decimalSeparator: string;
  thousandsSeparator: string;
};
