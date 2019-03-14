import React from 'react';
import {fetchProductsWithRedux} from "../services/productActions";
import {connect} from "react-redux";
import Moment from 'moment';
import "./ProductProCon.css";
import loader from "../images/loader.gif";

class ConsolidatedOverallRating extends React.Component {
    render() {
        const maxStars = 5;
        const stars = Number(this.props.OverallRating);
        let rating = [];
        for (let i = 1; i <= maxStars; i++) {
            if (i <= stars) {
                rating.push(<span key={i} className={"red"}>&#x2605;</span>);
            } else {
                rating.push(<span key={i} className={"gray"}>&#x2605;</span>);
            }
        }
        return rating;
    }
}

class Pro extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <ConsolidatedOverallRating OverallRating={this.props.OverallRating}/>
                </div>
                <h5 className={"title"}>{this.props.Title}</h5>
                <p className={"review"}>{this.props.Review}</p>
                <p><span><button className={"screen-name"}>{this.props.ScreenName}</button></span><span
                    className={"date-posted"}>{this.props.DatePosted}</span></p>
            </div>
        )
    }
}

class Con extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <ConsolidatedOverallRating OverallRating={this.props.OverallRating}/>
                </div>
                <h5 className={"title"}>{this.props.Title}</h5>
                <p className={"review"}>{this.props.Review}</p>
                <p><span><button className={"screen-name"}>{this.props.ScreenName}</button></span><span
                    className={"date-posted"}>{this.props.DatePosted}</span></p>
            </div>
        )
    }
}

class ProductProCon extends React.Component {

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

    static Pro(products) {
        return products.map((products, index) => {
            Moment.locale('en');
            const dt = (new Date(products.CustomerReview[0].Pro[0].datePosted));
            return <Pro key={index}
                        DatePosted={Moment(dt).format('MMMM d, YYYY')}
                        OverallRating={products.CustomerReview[0].Pro[0].overallRating}
                        Review={products.CustomerReview[0].Pro[0].review}
                        ScreenName={products.CustomerReview[0].Pro[0].screenName}
                        Title={products.CustomerReview[0].Pro[0].title}>
            </Pro>
        })
    }

    static Con(products) {
        return products.map((products, index) => {
            Moment.locale('en');
            const dt = (new Date(products.CustomerReview[0].Con[0].datePosted));
            return <Con key={index}
                        DatePosted={Moment(dt).format('MMMM d, YYYY')}
                        OverallRating={products.CustomerReview[0].Con[0].overallRating}
                        Review={products.CustomerReview[0].Con[0].review}
                        ScreenName={products.CustomerReview[0].Con[0].screenName}
                        Title={products.CustomerReview[0].Con[0].title}>
            </Con>
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
            <div className={"ProductProCon row"}>
                <div className={"col-xs-12 col-sm-6 col-med-6 col-lg-6 col-xl-6"}>
                    <div className={"box"}>
                        <h4 className={"heading"}>Pro</h4>
                        <p className={"subhead"}>most helpful 4-5 star review</p>
                        <hr/>
                        {ProductProCon.Pro(products)}
                    </div>
                </div>
                <div className={"col-xs-12 col-sm-6 col-med-6 col-lg-6 col-xl-6"}>
                    <div className={"box"}>

                        <h4 className={"heading"}>Con</h4>
                        <p className={"subhead"}>most helpful 1-2 star review</p>
                        <hr/>
                        {ProductProCon.Con(products)}
                    </div>
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

export default connect(mapStateToProps)(ProductProCon);
