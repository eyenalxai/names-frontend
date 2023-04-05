import { For } from "solid-js"
import { NameRow } from "./name-row"
import { NameListContent } from "./name-list"
import { Button } from "./button"

export function NameListSkeleton() {
  return (
    <NameListContent isLoading>
      <For each={Array(10)}>{() => <NameRow toCopy={"..."} />}</For>
      <Button text={"......."} />
    </NameListContent>
  )
}
