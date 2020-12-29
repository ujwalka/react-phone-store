import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
// import {storeProducts} from '../data'; //Rel State
import {ProductConsumer} from '../context'; // Rel path different here.

// need a list with specific component? in react: create in the state, loop the array
// State rel data.js 
//Productlist===context api for access throughout the App.js

export default class ProductList extends Component {

    // state = {
    //     // products: []
    //     products: storeProducts
    // }; // Just realised state is an Object!!
    // State is needed to console log something??

    render() {

        // console.log(this.state.products);

        return (
            <>
                <div className="py-5">
                    <div className="container">
                        {/* The whole our products is black. products is supposed to be blue
                        and in the next line ==> Color in app.css was wrong*/}
                        <Title name="our" title="products" />
                        <div className="row">
                            <ProductConsumer>
                                {value =>
                                    { return value.products.map(product => {
                                        return <Product key={product.id} product = {product}/>
                                    }); }    
                                }
                            </ProductConsumer>
                            {/* product props?? and methods */}
                            {/* Always use a function to get the data value "hello from context" props cannot be passed*/}
                            {/* <ProductConsumer>
                                {hello =>
                                    {return <h1>{hello}</h1>;}    
                                }
                            </ProductConsumer> */}
                            {/* Ref ProductContext.Provider in context.js */}
                        </div>
                    </div>
                </div>
            </>
                // <Product />
            
        );
    }
}

