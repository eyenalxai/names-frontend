import type { Component } from "solid-js"
import { Navigate, Route, Routes } from "@solidjs/router"
import { Usernames } from "./components/usernames"
import { Fullnames } from "./components/fullnames"
import { Main } from "./components/main"

export const App: Component = () => {
  return (
    <Routes>
      <Route path="/" component={Main}>
        <Route path="usernames" component={Usernames} />
        <Route path="fullnames" component={Fullnames} />
        <Route path="*" element={<Navigate href={"/usernames"} />} />
      </Route>
    </Routes>
  )
}
