import { fetchFullnames } from "../utils/fetch"
import { createQuery, useQueryClient } from "@tanstack/solid-query"
import { NameList } from "./name-list"
import { Fullname } from "../utils/types"

export function Fullnames() {
  const queryClient = useQueryClient()
  const query = createQuery(
    () => ["fullnames"],
    () => fetchFullnames(),
    {
      staleTime: Infinity,
      refetchOnWindowFocus: false
    }
  )

  return (
    <NameList
      query={query}
      getKey={(fullname: Fullname) => `${fullname.first_name} ${fullname.last_name}`}
      queryClient={queryClient}
      queryKey={"fullnames"}
    />
  )
}
