import { Button } from "./button"
import clsx from "clsx"
import { copyToClipboard } from "../utils/copy"

type NameRowProps = {
  toCopy: string
}

export function NameRow(props: NameRowProps) {
  return (
    <div
      class={clsx(
        "flex",
        "flex-row",
        "w-[16rem]",
        "justify-start",
        "items-center",
        "gap-4"
      )}
    >
      <Button
        text="COPY"
        size={"small"}
        onClick={() => copyToClipboard(props.toCopy)}
      />
      <div class={clsx("text-slate-800", "dark:text-slate-200")}>{props.toCopy}</div>
    </div>
  )
}
