import React from 'react';
import {connect} from "react-redux";
import "./ProductCallToAction.css";

class ProductCallToAction extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.pickUpInStore = this.pickUpInStore.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.findInAStore = this.findInAStore.bind(this);
    }

    pickUpInStore() {
        this.setState({
            message: "get in store pick up"
        });
    }

    addToCart() {
        this.setState({
            message: "added to cart"
        });
    }

    findInAStore() {
        this.setState({
            message: "find in a store"
        });
    }

    static availableOnline(products) {
        let pCC = '';
        products.map(product => (
                pCC = Number(product.purchasingChannelCode)
            )
        );
        if (pCC === 0 || pCC === 1) {
            console.log('purchasingChannelCode: ' + pCC + ' is typeof ' + (typeof (pCC) + ' and is available to test by changing item-data.json and restarting the json api server.js.'));
            return <button onClick={this.addToCart} className="red">add to cart</button>
        }

    }

    static availableInStore(products) {
        let pCC = '';
        products.map(product => (
                pCC = Number(product.purchasingChannelCode)
            )
        );
        if (pCC === 0 || pCC === 2) {
            return <button onClick={this.pickUpInStore} className="black">pick up in store</button>
        }
    }

    render() {
        const {products} = this.props;

        return (
            <div className={"ProductCallToAction"}>
                {ProductCallToAction.availableInStore(products)}
                {ProductCallToAction.availableOnline(products)}
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

export default connect(mapStateToProps)(ProductCallToAction);