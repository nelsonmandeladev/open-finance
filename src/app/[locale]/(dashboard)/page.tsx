import { CardsList } from "@/components";
import { CARDS_LIST } from "@/mocks";

interface HomeProps {
  params: Promise<{
    locale: string;
  }>;
}
export default async function Home(props: HomeProps) {
  const {} = await props.params;
  return <CardsList className="pt-4 md:pt-0" cards={CARDS_LIST.slice(0, 2)} />;
}
