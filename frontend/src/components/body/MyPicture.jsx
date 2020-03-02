import React, {Component, Fragment} from "react"
import pic from "@assets/load.gif"

class MyPicture extends Component {
    render() {
        return <Fragment>
            <img src={pic} alt="loading pic"/>
        </Fragment>
    }
}

export default MyPicture