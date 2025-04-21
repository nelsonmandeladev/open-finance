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
declare type ColorType = "yellow" | "blue" | "pink" | "green";

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
  color: ColorType;
  title: string;
  amount: number;
};

declare type IconBoxType = {
  icon: IconType;
  color?: ColorType;
};

declare type InvestmentCategoryType = {
  title: string;
};

declare type PlateFormType = "apple" | "google" | "tesla";
declare type InvestmentStat = "loss" | "win";

declare type InvestmentType = {
  id: string;
  title: string;
  plate_form: PlateFormType;
  amount: number;
  categories: InvestmentCategoryType[];
  state: InvestmentStat;
  return: number;
};

declare type StockType = {
  sl_no: string;
  name: string;
  price: number;
  return: number;
  state: InvestmentStat;
};
