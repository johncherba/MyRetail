import React, {Component} from "react";
import Slider from "react-slick";
import {connect} from "react-redux";
import {fetchProductsWithRedux} from "../services/productActions";
import "./ProductSlick.css";
import ninja1 from "../images/ninja1.jpg";
import ninja2 from "../images/ninja2.jpg";
import ninja3 from "../images/ninja3.jpg";
import ninja4 from "../images/ninja4.jpg";

class PrimaryImage extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.PrimaryImage} alt={this.props.PrimaryImage}/>
            </div>
        )
    }
}

class AlternateImages extends React.Component {
    render() {

        return (
            <div key={this.props.AlternateImages}>
                <img src={this.props.AlternateImages} alt={this.props.AlternateImages}/>
            </div>
        )
    }
}

class PrimaryImageThumbnail extends React.Component {
    render() {
        return (
            <div className={"thumbnail"}>
                <img src={this.props.PrimaryImageThumbnail} alt={this.props.PrimaryImageThumbnail}/>
            </div>
        )
    }
}

class AlternateImagesThumbnail extends React.Component {
    render() {

        return (
            <div className={"thumbnail"} key={this.props.AlternateImagesThumbnail}>
                <img src={this.props.AlternateImagesThumbnail} alt={this.props.AlternateImagesThumbnail}/>
            </div>
        )
    }
}

class ProductSlick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });

        this.props.dispatch(fetchProductsWithRedux());
    }

    static feature(products) {
        return products.map((products, index) => {
            return <PrimaryImage key={index} PrimaryImage={products.Images[0].PrimaryImage[0].image}>
            </PrimaryImage>
        })
    }

    static gallery(products) {
        return products.map((products, index) => {
            return products.Images[0].AlternateImages.map((image, index) => {
                return <AlternateImages key={index} AlternateImages={products.Images[0].AlternateImages[index].image}>
                </AlternateImages>
            })
        })
    }

    static featureThumbnail(products) {
        return products.map((products, index) => {
            return <PrimaryImageThumbnail key={index} PrimaryImageThumbnail={products.Images[0].PrimaryImage[0].image}>
            </PrimaryImageThumbnail>
        })
    }

    static galleryThumbnail(products) {
        return products.map((products, index) => {
            return products.Images[0].AlternateImages.map((image, index) => {
                return <AlternateImagesThumbnail key={index}
                                                 AlternateImagesThumbnail={products.Images[0].AlternateImages[index].image}>
                </AlternateImagesThumbnail>
            })
        })
    }

    render() {
        const {products} = this.props;

        return (
            <div className={"ProductSlick"}>
                <Slider
                    asNavFor={this.state.nav2}
                    ref={slider => (this.slider1 = slider)}
                    arrows={false}>

                    {ProductSlick.feature(products)}

                    {/*{ProductSlick.gallery(products)}*/}

                    <div>
                        <img src={ninja1} alt={ninja1}/>
                    </div>
                    <div>
                        <img src={ninja2} alt={ninja2}/>
                    </div>
                    <div>
                        <img src={ninja3} alt={ninja3}/>
                    </div>
                    <div>
                        <img src={ninja4} alt={ninja4}/>
                    </div>
                </Slider>
                <div className={"magnify hidden-xs hidden-sm col-xs-12"}>
                    <button className={"view-larger"}>view larger</button>
                </div>
                <Slider
                    asNavFor={this.state.nav1}
                    ref={slider => (this.slider2 = slider)}
                    slidesToShow={3}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    arrows={true}
                    centerMode={true}
                    className={"nav"}>

                    {ProductSlick.featureThumbnail(products)}

                    {/*{ProductSlick.galleryThumbnail(products)}*/}

                    <div className={"thumbnail"}>
                        <img src={ninja1} alt={ninja1}/>
                    </div>
                    <div className={"thumbnail"}>
                        <img src={ninja2} alt={ninja2}/>
                    </div>
                    <div className={"thumbnail"}>
                        <img src={ninja3} alt={ninja3}/>
                    </div>
                    <div className={"thumbnail"}>
                        <img src={ninja4} alt={ninja4}/>
                    </div>
                </Slider>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products.items,
    loading: state.products.loading,
    error: state.products.error
});

export default connect(mapStateToProps)(ProductSlick);
