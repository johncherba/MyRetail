import React from 'react';
import {fetchProductsWithRedux} from "../services/productActions";
import {connect} from "react-redux";
import "./ProductReview.css";

class ConsolidatedOverallRating extends React.Component {
    render() {
        const maxStars = 5;
        const stars = Number(this.props.OverallRating);
        let rating = [];
        for (let i = 1; i <= maxStars; i++) {
            if (i <= stars) {
                rating.push(<span key={i} className={"red"}>&#x2605;</span>);
            } else {
                rating.push(<span key={i} className={"gray"}>&#x2605;</span>)
            }
        }
        rating.push(<span key={6}>overall</span>);
        return rating;
    }
}

class TotalReviews extends React.Component {
    render() {
        return (
            <button className={"link"}>view all {this.props.TotalReviews} reviews</button>
        )
    }
}

class ProductReview extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchProductsWithRedux());
    }


    static consolidatedOverallRating(products) {
        return products.map((products, index) => {
            // console.log(data);
            return <ConsolidatedOverallRating key={index}
                                              OverallRating={products.CustomerReview[0].consolidatedOverallRating}>
            </ConsolidatedOverallRating>
        })
    }

    static totalReviews(products) {
        return products.map((products, index) => {
            return <TotalReviews key={index} TotalReviews={products.CustomerReview[0].totalReviews}>
            </TotalReviews>
        })
    }

    render() {
        const {products} = this.props;

        return (
            <div className={"ProductReview"}>
                <div>
                    {ProductReview.consolidatedOverallRating(products)}
                </div>
                <div>
                    {ProductReview.totalReviews(products)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products.items,
    loading: state.products.loading,
    error: state.products.error
});

export default connect(mapStateToProps)(ProductReview);
