import { fetchUsernames } from "../utils/fetch"
import { createQuery, useQueryClient } from "@tanstack/solid-query"
import { NameList } from "./name-list"
import { Username } from "../utils/types"

export function Usernames() {
  const queryClient = useQueryClient()
  const query = createQuery(
    () => ["usernames"],
    () => fetchUsernames(),
    {
      staleTime: Infinity,
      refetchOnWindowFocus: false
    }
  )

  return (
    <NameList
      query={query}
      getKey={(username: Username) => username.value}
      queryClient={queryClient}
      queryKey={"usernames"}
    />
  )
}
