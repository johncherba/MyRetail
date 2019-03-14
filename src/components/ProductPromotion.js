import React from 'react';
import {fetchProductsWithRedux} from "../services/productActions";
import {connect} from "react-redux";
import "./ProductPromotion.css";
import pricetag from "../images/price-tag.png";
import loader from "../images/loader.gif";

class PromotionDescription extends React.Component {
    render() {
        return (
            <li className={"description"} key={this.props.Description}>
                <img src={pricetag} alt="price-tag"/>{this.props.Description}
            </li>
        )
    }
}

class ProductPromotion extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
        };
    }

    componentDidMount() {
        this.props.dispatch(fetchProductsWithRedux());
    }

    static promotions(products) {
        return products.map((products, index) => {
            return products.Promotions.map((item, index) => {
                return item.Description.map((shortDesription, index) => {
                    return <PromotionDescription key={index}
                                                 Description={products.Promotions[index].Description[index].shortDescription}>
                    </PromotionDescription>
                })
            })
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
            <div className={"ProductPromotion"}>
                {ProductPromotion.promotions(products)}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products.items,
    loading: state.products.loading,
    error: state.products.error
});

export default connect(mapStateToProps)(ProductPromotion);
