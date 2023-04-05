import { For, JSX, Show } from "solid-js"
import clsx from "clsx"
import { NameRow } from "./name-row"
import { Button } from "./button"
import { CreateQueryResult, QueryClient } from "@tanstack/solid-query"
import { NameListSkeleton } from "./skeleton"

type NameListContentProps = {
  children: JSX.Element
  isLoading?: boolean
}

export function NameListContent(props: NameListContentProps) {
  return (
    <div
      class={clsx(
        "flex",
        "flex-col",
        "gap-12",
        "items-center",
        props.isLoading ? ["animate-pulse", "opacity-50"] : "opacity-100"
      )}
    >
      <div class={clsx("flex", "flex-col", "gap-2", "items-center", "mt-12")}>
        {props.children}
      </div>
    </div>
  )
}

type NameListProps<T> = {
  query: CreateQueryResult<Array<T>, unknown>
  getKey: (item: T) => string
  queryClient: QueryClient
  queryKey: string
}

export function NameList<T>(props: NameListProps<T>) {
  return (
    <Show when={props.query.data !== undefined} keyed fallback={<NameListSkeleton />}>
      <NameListContent isLoading={props.query.isFetching}>
        <For each={props.query.data?.values}>
          {(username) => <NameRow toCopy={props.getKey(username)} />}
        </For>
        <Button
          text={"ANOTHER"}
          onClick={() => props.queryClient.invalidateQueries([props.queryKey])}
        />
      </NameListContent>
    </Show>
  )
}
