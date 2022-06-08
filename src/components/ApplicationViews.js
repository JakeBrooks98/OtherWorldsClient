import React from "react"
import { Route } from "react-router-dom"
import { HomePage } from "./HomePage"
import { WorldCatalog } from "./worlds/WorldCatalog"

export const ApplicationViews = () => {
    return <>
        <Route exact path="/">
            <HomePage />
        </Route>
        <Route exact path="/worldcatalog">
            <WorldCatalog />
        </Route>
    </>
}
