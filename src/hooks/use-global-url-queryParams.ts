import { useQueryStates, parseAsInteger, parseAsString } from "nuqs";

export const useGlobalUrlQueryParams = () => {
  const [queryParams, setQueryParams] = useQueryStates(
    {
      activePage: parseAsInteger.withDefault(1),
      perPage: parseAsInteger.withDefault(5),
      transaction_type: parseAsString.withDefault("all"),
    },
    {
      history: "replace",
      shallow: false,
    },
  );

  return { queryParams, setQueryParams };
};
