import React from "react";

const CartContext = React.createContext(null);

export const CartProvider = (props) => {

    let json = JSON.parse(sessionStorage.getItem('cart'));

    const [cart, setCart] = React.useState(json ==null?[]:json);
    const [wishList, setWishList] = React.useState([]);



    const addToCart = (props) => {
        if (!doesItemExistInCart(props.p_id)) {
            sessionStorage.removeItem('cart');
            sessionStorage.setItem('cart',JSON.stringify([...cart, props]));
            setCart([...cart, props]);
        } else {
            let newCart = cart.map((item) => {
                if (item.p_id == props.p_id) {
                    let quantity = props.quantity;
                    return {...item, ['quantity']: quantity};
                }
                return item;
            });
            sessionStorage.removeItem('cart');
            sessionStorage.setItem('cart',JSON.stringify(cart));
            setCart(newCart);
        }

    }

    const addToWishList = (props) => {
        if (!doesItemExistInWishList(props.p_id)) {
            setWishList([...wishList, props]);
        } else {
            let newCart = wishList.map((item) => {
                if (item.p_id == props.p_id) {
                    let quantity = props.quantity;
                    return {...item, ['quantity']: quantity};
                }
                return item;
            });
            setWishList(newCart);
        }
    }

    const doesItemExistInCart = (id) => {
        let item = cart.filter((prod) => prod.p_id == id);
        if (item.length == 0) {
            return false
        }
        return true;
    }

    const doesItemExistInWishList = (id) => {
        let item = wishList.filter((prod) => prod.p_id == id);
        if (item.length == 0) {
            return false
        }
        return true;
    }


    const removeFromCart = (props) => {
        const {prodId} = props;
        let newCart = cart.filter((crt) => crt.p_id !== prodId);
        sessionStorage.removeItem('cart');
        sessionStorage.setItem('cart',JSON.stringify(newCart));
        setCart(newCart);
    }

    const removeFromWishList = (props) => {
        const {prodId} = props;
        let newWishList = wishList.filter((crt) => crt.p_id !== prodId);
        setWishList(newWishList);
    }

    const cartTotal = () => {
        return cart.reduce((total, item) => {
            let calculativePrice = (item.price * item.quantity);
            return total + calculativePrice;
        }, 0);
    }

    const cartProductQuantity = (prodId) => {
        let newList =cart.filter((crt) => crt.p_id === prodId);
        let quantity=1;
        if(newList.length ==1){
            quantity = newList[0].quantity;
        }
        return quantity;
    }

    const wishListTotal = () => {
        return wishList.reduce((total, item) => {
            let calculativePrice = (item.price * item.quantity);
            return total + calculativePrice;
        }, 0);
    }

    const resetCart = (newCart) =>{
        sessionStorage.setItem('cart',JSON.stringify(newCart));
        setCart(newCart);

    }

    const cartDetails = {
        cart,
        addToCart,
        cartTotal,
        resetCart,
        removeFromCart,
        wishList,
        addToWishList,
        setWishList,
        wishListTotal,
        removeFromWishList,
        cartProductQuantity,
    };

    return (
        <CartContext.Provider value={cartDetails}>
            {props.children}
        </CartContext.Provider>
    );
}


export const useCart = () => {
    return React.useContext(CartContext);
}