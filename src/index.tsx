/* @refresh reload */
import { render } from "solid-js/web"

import "./index.css"
import "@fontsource/iosevka"
import { App } from "./App"
import { Router } from "@solidjs/router"
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query"

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = document.getElementById("root")!

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?"
  )
}

const queryClient = new QueryClient()

render(
  () => (
    <QueryClientProvider client={queryClient}>
      <Router>
        <App />
      </Router>
    </QueryClientProvider>
  ),
  root
)
