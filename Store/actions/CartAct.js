export const add_to_cart = 'add_to_cart';
export const remove_from_cart = 'remove_from_cart';

export const addingToCart = product => dispatch => {
    dispatch({ type: add_to_cart, payload: product })
};

export const removingFromCart = id => {
    return { type: remove_from_cart, payload: id }
}