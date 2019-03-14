import React from 'react';
import {connect} from "react-redux";
import "./ProductQuantity.css";
import loader from "../images/loader.gif";

class ProductQuantity extends React.Component {
    constructor(props) {
        super(props);

        this.state = {value: 1};
        this.decrement = this.decrement.bind(this);
        this.increment = this.increment.bind(this);
    }

    decrement() {
        if (this.state.value >= 2) {
            this.setState({
                value: this.state.value - 1,
                message: null
            });
        } else {
            this.setState({
                message: "Can't decrement. Since 1 is the min value."
            });
        }
    }

    increment() {
        if (this.state.value < 10) {
            this.setState({
                value: this.state.value + 1,
                message: null
            });
        } else {
            this.setState({
                message: "Can't increment. Since 10 is the max value."
            });
        }
    }

    inputChangedHandler(event) {
        // needed to get rid of error
        // let value = event.target.value;
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
            <div className={"ProductQuantity"}>
                <span className={"label"}>quantity</span>
                <button onClick={this.decrement} className={"decrement"}>&#x2212;</button>
                <input type="text" className="quantity" min="1" readOnly={1} value={this.state.value}
                       onChange={(event) => this.inputChangedHandler(event)}/>
                <button onClick={this.increment} className={"increment"}>&#x2b;</button>
                <sub>{this.state.message}</sub>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products.items,
    loading: state.products.loading,
    error: state.products.error
});

export default connect(mapStateToProps)(ProductQuantity);