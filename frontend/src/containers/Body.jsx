import React, {Component} from 'react';
import Item from "@components/body/Item";


class Body extends Component {
    render() {
        return <ul className="list-group">
            <Item key={1} text={"Cras 123 odio"}  />
            <Item key={2} text={"Cras justo odio"}  />
        </ul>
    }
}

