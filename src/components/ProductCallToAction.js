import React from 'react';
import {connect} from "react-redux";
import "./ProductCallToAction.css";
import loader from "../images/loader.gif";

class AvailableInStore extends React.Component {
    constructor() {
        super();

        this.state = {
            message: 'click me'
        };
        this.pickUpInStore = this.pickUpInStore.bind(this);
    }

    pickUpInStore() {
        this.setState({
            message: "get in store pick up"
        });
    }

    render() {
        return <button onClick={this.pickUpInStore} className="black">pick up in store</button>
    }
}

class AvailableOnline extends React.Component {
    constructor() {
        super();

        this.state = {
            message: 'click me'
        };
        this.addToCart = this.addToCart.bind(this);
    }

    addToCart() {
        this.setState({
            message: "added to cart"
        });
    }

    render() {
        return <button onClick={this.addToCart} className="red">add to cart</button>
    }
}

class ProductCallToAction extends React.Component {
    static availableInStore(products) {
        let pCC = '';
        products.map(product => (
                pCC = Number(product.purchasingChannelCode)
            )
        );
        if (pCC === 0 || pCC === 2) {
            return <AvailableInStore PurchasingChannelCode={pCC}/>
        }
    }

    static availableOnline(products) {
        let pCC = '';
        products.map(product => (
                pCC = Number(product.purchasingChannelCode)
            )
        );
        if (pCC === 0 || pCC === 1) {
            console.log('purchasingChannelCode: ' + pCC + ' is typeof ' + (typeof (pCC) + ' and is available to test by changing item-data.json and restarting the json api server.js.'));
            return <AvailableOnline PurchasingChannelCode={pCC}/>
        }

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
            <div className={"ProductCallToAction"}>
                {ProductCallToAction.availableInStore(products)}
                {ProductCallToAction.availableOnline(products)}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products.items,
    loading: state.products.loading,
    error: state.products.error,
});

export default connect(mapStateToProps)(ProductCallToAction);