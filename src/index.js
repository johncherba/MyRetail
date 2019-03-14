import React from "react";
import ReactDOM from "react-dom";
import ProductTitle from "./components/ProductTitle";
import ProductReview from "./components/ProductReview";
import ProductProCon from "./components/ProductProCon";
import ProductOffer from "./components/ProductOffer";
import ProductPromotion from "./components/ProductPromotion";
import ProductQuantity from "./components/ProductQuantity";
import ProductCallToAction from "./components/ProductCallToAction";
import ProductAddShare from "./components/ProductAddShare";
import ProductReturns from "./components/ProductReturns";
import ProductHighlights from "./components/ProductHighlights";
import ProductSlick from "./components/ProductSlick";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./services/rootReducer";
import {Grid, Row, Col} from 'react-flexbox-grid';

// import "normalize.css";
import "./index.css";

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

function App() {
    return (
        <div className="App">
            <Grid fluid>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <ProductTitle/>
                        <ProductSlick/>
                        <Col className={"hidden-xs hidden-sm"}>
                            <ProductReview/>
                            <ProductProCon/>
                        </Col>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <ProductOffer/>
                        <ProductPromotion/>
                        <ProductQuantity/>
                        <ProductCallToAction/>
                        <ProductReturns/>
                        <ProductAddShare/>
                        <ProductHighlights/>
                        <Col className={"hidden-md hidden-lg hidden-xl"}>
                            <ProductReview/>
                            <ProductProCon/>
                        </Col>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootElement
);
