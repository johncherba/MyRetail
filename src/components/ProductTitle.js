import React from "react";
import {connect} from "react-redux";
import {fetchProductsWithRedux} from "../services/productActions";
import "./ProductTitle.css";
import loader from "../images/loader.gif";

class ProductTitle extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchProductsWithRedux());
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
                {products.map(product => (
                    <h1 key={product.UPC}>{product.title}</h1>
                ))}
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
