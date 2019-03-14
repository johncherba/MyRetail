import React from 'react';
import {fetchProductsWithRedux} from "../services/productActions";
import {connect} from "react-redux";

class PrimaryImage extends React.Component {
    render() {
        return (
            <li>
                <img src={this.props.PrimaryImage} alt={this.props.PrimaryImage}/>
            </li>
        )
    }
}

class AlternateImages extends React.Component {
    render() {

        return (
            <li key={this.props.AlternateImages}>
                {/*<img src={this.props.AlternateImages} alt={this.props.AlternateImages}/>*/}
            </li>
        )
    }
}

class Carousel extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchProductsWithRedux());
    }


    static list(products) {
        return products.map((products, index) => {
            return <PrimaryImage key={index} PrimaryImage={products.Images[0].PrimaryImage[0].image}>
            </PrimaryImage>

        })
    }

    static thumbnail(products) {
        return products.map((products, index) => {
            return products.Images[0].AlternateImages.map((image, index) => {
                return <AlternateImages key={index} AlternateImages={products.Images[0].AlternateImages[index].image}>
                </AlternateImages>
            })
        })
    }

    render() {
        const {products} = this.props;

        return (
            <ul>
                {Carousel.list(products)}
                <ul>
                    {Carousel.thumbnail(products)}
                </ul>
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products.items,
    loading: state.products.loading,
    error: state.products.error
});

export default connect(mapStateToProps)(Carousel);
