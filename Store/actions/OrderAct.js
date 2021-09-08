export const add_order = 'add_order';

export const addingOrder = (cartitems, totalAmount) => {
    return {
        type: add_order,
        payload: {
            items: cartitems,
            amount: totalAmount
        }
    }
}