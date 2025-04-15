interface HomeProps {
  params: Promise<{
    locale: string;
  }>;
}
export default async function Home(props: HomeProps) {
  const {} = await props.params;
  return <main>Dashboard Home page</main>;
}
