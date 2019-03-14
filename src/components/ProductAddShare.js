import React from 'react';
import {connect} from "react-redux";
import "./ProductAddShare.css";
import loader from "../images/loader.gif";

class ProductAddShare extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.addToRegistry = this.addToRegistry.bind(this);
        this.addToList = this.addToList.bind(this);
        this.share = this.share.bind(this);
    }

    addToRegistry() {
        this.setState({
            message: "add to registry"
        });
    }

    addToList() {
        this.setState({
            message: "added to list"
        });
    }

    share() {
        this.setState({
            message: "share"
        });
    }

    render() {
        const {error, loading} = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div className={"loading"}>
                <img src={loader} alt={"loading"}/>
            </div>;
        }

        return (
            <div className={"ProductAddShare"}>
                <button onClick={this.addToRegistry} className="gray">add to registry</button>
                <button onClick={this.addToList} className="gray">add to list</button>
                <button onClick={this.share} className="gray">share</button>
                {/*<sub>{this.state.message}</sub>*/}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products.items,
    loading: state.products.loading,
    error: state.products.error
});

export default connect(mapStateToProps)(ProductAddShare);