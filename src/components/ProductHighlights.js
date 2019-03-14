import React from 'react';
import {fetchProductsWithRedux} from "../services/productActions";
import {connect} from "react-redux";
import "./ProductHighlights.css";
import loader from "../images/loader.gif";

class Highlights extends React.Component {
    render() {
        const length = (this.props.Highlights.length);
        let highlights = [];
        for (let i = 0; i < length; i++) {
            highlights.push(<li key={i}>{this.props.Highlights[i]}</li>);
        }
        return highlights;
    }
}

class ProductHighlights extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchProductsWithRedux());
    }

    static highlights(products) {
        return products.map((products, index) => {
            return <Highlights key={index}
                               Highlights={products.ItemDescription[index].features}>
            </Highlights>
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
            <div className={"ProductHighlights"}>
                <h3 className={"heading"}>Product Highlights</h3>
                <ul className={"list"}>
                    {ProductHighlights.highlights(products)}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products.items,
    loading: state.products.loading,
    error: state.products.error
});

export default connect(mapStateToProps)(ProductHighlights);
