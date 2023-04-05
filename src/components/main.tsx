import { Outlet, useLocation, useNavigate } from "@solidjs/router"
import clsx from "clsx"
import { Button } from "./button"
import { createMemo } from "solid-js"
import { useQueryClient } from "@tanstack/solid-query"
import { fetchFullnames, fetchUsernames } from "../utils/fetch"

export function Main() {
  const navigate = useNavigate()
  const location = useLocation()

  const pathname = createMemo(() => location.pathname)

  const queryClient = useQueryClient()

  queryClient
    .prefetchQuery(["usernames"], () => fetchUsernames())
    .catch((e) => console.error(e))

  queryClient
    .prefetchQuery(["fullnames"], () => fetchFullnames())
    .catch((e) => console.error(e))

  return (
    <div class={clsx("container", "mx-auto", "p-4")}>
      <div class={clsx("flex", "flex-row", "gap-4", "justify-center")}>
        <Button
          isActive={pathname() === "/usernames"}
          text="USERNAMES"
          onClick={() => navigate("/usernames")}
        />
        <Button
          isActive={pathname() === "/fullnames"}
          text="FULLNAMES"
          onClick={() => navigate("/fullnames")}
        />
      </div>
      <Outlet />
    </div>
  )
}
