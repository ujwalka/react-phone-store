// index.js is usually used as the spoc for everything in the folder, however too many index.js can be confusing
// So I created a package.json in folder to point to the main file

import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context' //Out of Cart folder, Out of Components folder into src
import CartList from './CartList';
import CartTotals from './CartTotals'; 
export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if(cart.length > 0){
                            return(
                                <React.Fragment>
                                    <Title name="your" title="cart" />
                                    <CartColumns />
                                    <CartList value={value} />
                                    <CartTotals value={value} history={this.props.history} />
                                </React.Fragment>
                            );
                        } else {
                            return <EmptyCart /> ;
                        }
                    }}
                </ProductConsumer>
            </section>
        )
    }
}
