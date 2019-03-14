import React from 'react';
import {fetchProductsWithRedux} from "../services/productActions";
import {connect} from "react-redux";
import "./ProductOffer.css";
import loader from "../images/loader.gif";

class OfferPrice extends React.Component {
    render() {
        return (
            <div className={"ProductOffer"}>
                <span className={"value"}>{this.props.FormattedPriceValue}</span>
                <span className={"qualifier"}>{this.props.PriceQualifier}</span>
            </div>
        )
    }
}

class ProductOffer extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchProductsWithRedux());
    }


    static offerPrice(products) {
        return products.map((products, index) => {
            // console.log(data);
            return <OfferPrice key={index}
                               FormattedPriceValue={products.Offers[0].OfferPrice[0].formattedPriceValue}
                               PriceQualifier={products.Offers[0].OfferPrice[0].priceQualifier}>
            </OfferPrice>
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
            <div>
                {ProductOffer.offerPrice(products)}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products.items,
    loading: state.products.loading,
    error: state.products.error
});

export default connect(mapStateToProps)(ProductOffer);
