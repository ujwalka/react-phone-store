// Context API first step, Create a class component
// Export more than one Class
// Place this in the highest place on the Componet tree, this case --> index.js


import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data';
// storeProducts, detailProduct imported to be passed to <ProductContext.Provider value={{}}>
// Start by creating state Object, and destructuring state in <ProductContext.Provider value={{}}>

// Creating Context object: Two components 1>Provider 2>Consumer

const ProductContext = React.createContext(); // ProductContext is an Object

// Provider: Provides all the information

// Consumer:

// Class based Component rcc

class ProductProvider extends Component {
    
    state ={
        products: [],
        detailProduct: detailProduct,
        cart: [],
        // cart:storeProducts,
        modalOpen: false, //was loading repeatedly, set it to false
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
    };

    componentDidMount(){
        this.setProducts();
    }; //Lifecycle method

    setProducts = () =>{
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        })
        this.setState(() => {
            return {products:tempProducts}
        });
    };

    // Utitltiy method to get item by id
    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    };

    // Forgot to pass id, big trouble...
    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() =>{
            return {detailProduct:product}
        })
    };//Opens Details Component

    // Tester Method===============================================
// tester = () => {
//     console.log('state products: ', this.state.products[0].inCart);
//     console.log('Data products: ', storeProducts[0].inCart);

//     const tempProducts = [...this.state.products];
//     tempProducts[0].inCart = true;
//     this.setState(() => { return {products:tempProducts} }, () =>{
//         console.log('state products: ', this.state.products[0].inCart);
//         console.log('Data products: ', storeProducts[0].inCart);
//     }) //setState has to args

//     // state products:  false context.js:34
//     // Data products:  false context.js:35
//     // state products:  true context.js:40
//     // Data products:  true context.js:41
// };
// ================================================================
// const tempProducts = [...this.state.products]; // This is an error because "this" is not defined

    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        
        this.setState(() => {
            return { products:tempProducts, cart:[...this.state.cart, product] };
        }, () => {this.addTotals();});
    }; 
    // **************** Forgot to add product in cart:[...this.state.cart] had to rewatch the whole tutorial. the cart was not holding the new items
    // Adds to cart, temporary product array is created to hold the added product
    // DO NOT MUTATE THE STATE, USE TEMP VARS
// ...this.state, "..." operator to destructure an object. Allows me  to access just the data in the objects
// Spread operator to send "multiple states" to product context??
//"Value" CAN BE AN OBJECT
    openModal = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return{modalProduct: product, modalOpen:true};
        })
    }

    closeModal = () => {
        this.setState(() =>{
            return {modalOpen:false};
        })
    }

    increment = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find (item => item.id === id);

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count + 1;
        product.total = product.count * product.price;
        
        this.setState(() => {
            return {
                cart:[...tempCart]
            }
        },() => {
            this.addTotals();
        });
    }
    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find (item => item.id === id);

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
      
        product.count = product.count - 1;
        if(product.count === 0) {
    
            this.removeItem(id);
        } else {
            product.total = product.count * product.price;
            this.setState(() => {
                return {
                    cart:[...tempCart]
                }
            },() => {
                this.addTotals();
            })
        }
    }
    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempProducts.indexOf(this.getItem(id));
        
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState( () => {
            return {
                cart:[...tempCart],
                products: [...tempProducts]
            }
        }, () => {
            this.addTotals();
        })



    }

    clearCart = () => {
        this.setState(() => {
            return {cart:[]};
        }, 
        () => {
            this.setProducts();
            this.addTotals();
        });
    };

    addTotals =() => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total))
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(() => {
            return{
                cartSubTotal:subTotal,
                cartTax:tax,
                cartTotal:total,
            }
        })
    } //Accessing info through cart in addtocart

    render() {
        return (
                <ProductContext.Provider 
                    value={{
                        ...this.state,
                        handleDetail: this.handleDetail,
                        addToCart: this.addToCart,
                        openModal:this.openModal,
                        closeModal: this.closeModal,
                        increment: this.increment,
                        decrement: this.decrement,
                        removeItem: this.removeItem,
                        clearCart: this.clearCart,
                    }}>
                        {/* <button onClick={this.tester}>Test Me</button> */}
                        {this.props.children}
                </ProductContext.Provider> 
            ); 
            
            //{this.props.children} this==>ProductProvider Object, inherits from the Component class in React. 
            // What is a Component, State, Context, Props??
        // return (
        //     <ProductContext.Provider value="Hello from Context">
        //         {this.props.children}
        //     </ProductContext.Provider> 
        // ); //ProductContext.Provider on top of Component tree?? props- properties
    // Value in <ProductContext.Provider value="Hello from Context"> can also be an Object
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };