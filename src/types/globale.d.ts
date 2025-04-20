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

declare type QuickTransferUserType = {
  id: string;
  image: string;
  name: string;
  role: string;
};

declare type TransactionRaisonType = "shipping" | "transfer" | "service";
declare type TransactionStateType = "expense" | "income";
declare type StatusType = "pending" | "completed";

declare type TransactionType = {
  id: string;
  raison: TransactionRaisonType;
  type: TransactionStateType;
  description: string;
  card: string;
  amount: number;
  receipt: string;
  date: string;
  currency: string;
  status: StatusType;
};

declare type AccountStatType = {
  icon: IconType;
  color: "yellow" | "blue" | "pink" | "green";
  title: string;
  amount: number;
};
