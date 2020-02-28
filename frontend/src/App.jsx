import React, {Component, Fragment} from "react"
import Header from "@containers/Header";
import Body from "@containers/Body";
import {Provider} from "react-redux"
import store from "./store"
import "bootstrap/dist/js/bootstrap.bundle.min"


class App extends Component {
    render() {
        return <Provider store={store}>
            <Fragment>
                <Header/>
                <Body/>
            </Fragment>
        </Provider>
    }
}

export default App