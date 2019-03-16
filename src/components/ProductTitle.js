import React from "react";
import {connect} from "react-redux";
import {fetchProductsWithRedux} from "../services/productActions";
import "./ProductTitle.css";
import loader from "../images/loader.gif";

class Title extends React.Component {
    render() {
        return (
            <h1>{this.props.Title}</h1>
        )
    }
}

class ProductTitle extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchProductsWithRedux());
    }

    static getTitle(products) {
        return products.map((products, index) => {
            return <Title key={index}
                          Title={products.title}>

            </Title>
        })
    }

    render() {
        const {error, loading, products} = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div className={"loading"}>
                <img src={loader} alt={"loading"}/>
            </div>;
        }

        return (
            <div className={"ProductTitle"}>
                {ProductTitle.getTitle(products)}

            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products.items,
    loading: state.products.loading,
    error: state.products.error
});

export default connect(mapStateToProps)(ProductTitle);