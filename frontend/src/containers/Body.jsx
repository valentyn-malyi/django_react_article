import React, {Component} from 'react';
import Item from "@components/body/Item";
import {connect} from "react-redux"
import {getArticles} from "@actions/article"
import MyPicture from "@components/body/MyPicture";

class Body extends Component {

    componentDidMount() {
        this.props.getArticles()
        console.log(this.state)
        console.log(this.props)

    }

    render() {
        return <ul className="list-group">
            {this.props.articles.map(a =>
                <Item key={a.id} text={a.title}/>
            )}
            <li>
                <MyPicture/>
            </li>

        </ul>
    }
}

const mapStateToProps = state => {
    return {articles: state.article.articles}
}

export default connect(mapStateToProps, {getArticles})(Body)