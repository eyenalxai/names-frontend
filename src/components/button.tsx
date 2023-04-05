import clsx from "clsx"

type ButtonProps = {
  text: string
  size?: "small" | "default"
  onClick?: () => void
  isActive?: boolean
}

export function Button(props: ButtonProps) {
  return (
    <button
      class={clsx([
        props.size === "small" ? ["px-2", "py-1"] : ["px-4", "py-2"],
        props.size === "small" ? "text-sm" : "text-base",
        props.isActive
          ? [
              ["bg-slate-700", "dark:bg-slate-200"],
              ["text-slate-200", "dark:text-slate-800"]
            ]
          : [
              ["bg-slate-200", "dark:bg-slate-700"],
              ["text-slate-800", "dark:text-slate-200"]
            ],
        props.isActive
          ? []
          : [
              ["hover:bg-slate-700", "hover:dark:bg-slate-200"],
              ["hover:text-slate-200", "hover:dark:text-slate-800"]
            ],
        "rounded-md",
        ["hover:scale-110", "transition", "duration-300", "ease-in-out"]
      ])}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  )
}
