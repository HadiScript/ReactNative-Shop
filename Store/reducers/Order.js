import Order from "../../models/order";
import { add_order } from "../actions/OrderAct";


const init = {
    orders: []
};

const orderReducer = (state = init, action) => {

    const id = Math.random().toString();

    switch (action.type) {

        case add_order:
            const newOrder = new Order(
                id,
                action.payload.items,
                action.payload.amount,
                new Date()
            )
            return {
                ...state,
                orders: state.orders.concat(newOrder)
            }

        default:
            return state;

    }

};

export default orderReducer