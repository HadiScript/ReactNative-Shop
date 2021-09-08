import Cart from "../../models/CartModel";
import { add_to_cart, remove_from_cart } from "../actions/CartAct";
import { add_order } from "../actions/OrderAct";
import { delete_product } from "../actions/ProductAct";

const init = {
    items: {},
    totalamount: 0,
};

const cartReducer = (state = init, action) => {

    switch (action.type) {

        case add_to_cart:
            const addedprod = action.payload;
            const prodPrice = addedprod.price;
            const prodTitle = addedprod.title;

            if (state.items[addedprod.id]) {
                // have an item just change the quantity

                const updatedCartItem = new Cart(
                    state.items[addedprod.id].quantity + 1,
                    prodPrice,
                    prodTitle,
                    state.items[addedprod.id].sum + prodPrice
                )

                return {
                    ...state,
                    items: { ...state.items, [addedprod.id]: updatedCartItem },
                    totalamount: state.totalamount + prodPrice
                }

            } else {
                // add the product in the items
                const newCart = new Cart(1, prodPrice, prodTitle, prodPrice);

                return {
                    ...state,
                    items: { ...state.items, [addedprod.id]: newCart },
                    totalamount: state.totalamount + prodPrice
                }
            }

        case remove_from_cart:
            const prodId = action.payload;

            if (state.items[prodId].quantity > 1) {
                //reducing the quantity
                const udpated = new Cart(
                    state.items[prodId].quantity - 1,
                    state.items[prodId].productPrice,
                    state.items[prodId].productTitle,
                    state.items[prodId].sum - state.items[prodId].productPrice
                );

                return {
                    ...state,
                    items: { ...state.items, [prodId]: udpated },
                    totalamount: state.totalamount - state.items[prodId].productPrice
                }


            } else {
                // remove  the entire cart
                const updateding = { ...state.items };
                delete updateding[prodId];

                return {
                    ...state,
                    items: updateding,
                    totalamount: state.totalamount - state.items[prodId].productPrice
                }
            }

        case add_order:
            return init;
        case delete_product:
            const id = action.payload;
            let updateItems;

            if (!state.items[id]) return state;
            else {
                updateItems = { ...state.items };
                delete updateItems[id];
            }

            return {
                ...state,
                items: updateItems,
                totalamount: state.totalamount - state.items[id].sum
            }


        default:
            return state;
    }

};

export default cartReducer;