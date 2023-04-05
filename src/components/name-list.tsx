import { For, Show } from "solid-js"
import clsx from "clsx"
import { NameRow } from "./name-row"
import { Button } from "./button"
import { CreateQueryResult, QueryClient } from "@tanstack/solid-query"

type NameListProps<T> = {
  query: CreateQueryResult<Array<T>, unknown>
  getKey: (item: T) => string
  queryClient: QueryClient
  queryKey: string
}

export function NameList<T>(props: NameListProps<T>) {
  return (
    <Show when={props.query.data !== undefined} keyed>
      <div class={clsx("flex", "flex-col", "gap-12", "items-center")}>
        <div class={clsx("flex", "flex-col", "gap-2", "items-center", "mt-12")}>
          <For each={props.query.data?.values}>
            {(username) => <NameRow toCopy={props.getKey(username)} />}
          </For>
        </div>
        <Button
          text={"ANOTHER"}
          onClick={() => props.queryClient.invalidateQueries([props.queryKey])}
        />
      </div>
    </Show>
  )
}
