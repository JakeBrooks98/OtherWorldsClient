import React from "react"
import { Route } from "react-router-dom"
import { HomePage } from "./HomePage"
import { WorldCatalog } from "./worlds/WorldCatalog"
import { WorldDetail } from "./worlds/WorldDetail"
import { WorldForm } from "./worlds/WorldForm"

export const ApplicationViews = () => {
    return <>
        <Route exact path="/">
            <HomePage />
        </Route>
        <Route exact path="/worldcatalog">
            <WorldCatalog />
        </Route>
        <Route exact path="/worlds/:worldId(\d+)">
            <WorldDetail />
        </Route>
        <Route exact path="/worldform">
            <WorldForm />
        </Route>
    </>
}
