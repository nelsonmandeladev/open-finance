import {
  BalanceHistoryChart,
  CardsList,
  ExpenseStatisticsChart,
  QuickTransferUserList,
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
      <div className="grid grid-cols-1 md:grid-cols-[410px_1fr] lg:grid-cols-[450px_1fr] xl:grid-cols-[680px_1fr] 2xl:grid-cols-[1000px_1fr] gap-4  md:gap-8 pt-4 md:pt-5">
        <CardsList cards={CARDS_LIST.slice(0, 3)} />
        <RecentTransactionsList
          transactions={[]}
          className="px-4 md:px-5 md:pl-0"
        />
      </div>
      <div className="px-4 md:px-5 space-y-5 mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[55%_1fr] xl:grid-cols-[60%_1fr] gap-5">
          <WeeklyActivityChart />
          <ExpenseStatisticsChart />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[45%_1fr] xl:grid-cols-[40%_1fr] gap-[30px]">
          <QuickTransferUserList />
          <BalanceHistoryChart />
        </div>
      </div>
    </Fragment>
  );
}
