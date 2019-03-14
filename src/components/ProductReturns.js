import React from 'react';
import {fetchProductsWithRedux} from "../services/productActions";
import {connect} from "react-redux";
import "./ProductReturns.css";

class Returns extends React.Component {
    render() {
        return (
            <div className={"ProductReturns"}>
                {/*<span>{this.props.LegalCopy}</span>*/}
                <span className={"returns"}>returns</span>
                <span className={"legal"}>This item must be returned within 30 days of the ship date. See return policy for details. Prices, promotions, styles and availability may vary by store and online.</span>
            </div>
        )
    }
}

class ProductReturns extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchProductsWithRedux());
    }

    static returns(products) {
        return products.map((products, index) => {
            // console.log(data);
            return <Returns key={index}
                            LegalCopy={products.ReturnPolicy[0].legalCopy}>
            </Returns>
        })
    }

    render() {
        const {products} = this.props;

        return (
            ProductReturns.returns(products)
        );
    }
}

const mapStateToProps = state => ({
    products: state.products.items,
    loading: state.products.loading,
    error: state.products.error
});

export default connect(mapStateToProps)(ProductReturns);
