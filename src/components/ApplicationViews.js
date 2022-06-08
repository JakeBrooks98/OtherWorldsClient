import React from "react"
import { Route } from "react-router-dom"
import { HomePage } from "./HomePage"

export const ApplicationViews = () => {
    return <>
        <Route exact path="/">
                <HomePage />
            </Route>
    </>
}
