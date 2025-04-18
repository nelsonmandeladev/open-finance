import {
  CardsList,
  ExpenseStatisticsChart,
  RecentTransactionsList,
  WeeklyActivityChart,
} from "@/components";
import { CARDS_LIST } from "@/mocks";
import { Fragment } from "react";

interface HomeProps {
  params: Promise<{
    locale: string;
  }>;
}
export default async function Home(props: HomeProps) {
  const {} = await props.params;
  return (
    <Fragment>
      <div className="grid grid-cols-1 md:grid-cols-[410px_1fr] lg:grid-cols-[450px_1fr] xl:grid-cols-[680px_1fr] 2xl:grid-cols-[1000px_1fr] gap-4  md:gap-8">
        <CardsList className="pt-4 md:pt-0" cards={CARDS_LIST.slice(0, 3)} />
        <RecentTransactionsList transactions={[]} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[65%_1fr] lg:grid-cols-[60%_1fr] mt-5 px-4 md:px-0 gap-5">
        <WeeklyActivityChart />
        <ExpenseStatisticsChart />
      </div>
    </Fragment>
  );
}
