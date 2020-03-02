import React, {Component, Fragment} from 'react';
import Item from "@components/body/Item";
import {connect} from "react-redux"
import {getArticles} from "@actions/article"
import MyPicture from "@components/body/MyPicture";

class Body extends Component {

    componentDidMount() {
        this.props.getArticles()
    }

    render() {
        if (this.props.isLoading) {
            return <Fragment>
                <MyPicture/>
            </Fragment>
        } else {
            if (this.props.error)
                return <div>
                    <pre>
                        {JSON.stringify(this.props.error, null, 2)}
                    </pre>
                </div>
            else
                return <ul className="list-group">
                    {this.props.articles.map(a =>
                        <Item key={a.id} text={a.title}/>
                    )}
                </ul>
        }
    }
}

const mapStateToProps = state => {
    return {
        articles: state.article.articles,
        isLoading: state.article.isLoading,
        error: state.article.error,
        status: state.article.status
    }
}

export default connect(mapStateToProps, {getArticles})(Body)