import React, {Component, Fragment} from "react"
import Header from "@containers/Header";
import Body from "@containers/Body";
import "bootstrap/dist/js/bootstrap.bundle.min"

class App extends Component {
    render() {
        return <Fragment>
            <Header/>
            <Body/>
        </Fragment>
    }
}

export default App