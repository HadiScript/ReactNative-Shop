export const delete_product = "delete_product";
export const create_product = "create_product";
export const update_product = "update_product";

export const deletingProduct = id => {
    return {
        type: delete_product,
        payload: id
    }
};

export const creatingProduct = (title, description, imageUrl, price) => async dispatch => {



    const res = await fetch('https://rn-guid-38f29-default-rtdb.firebaseio.com/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, description, imageUrl, price })
    });

    
    console.log(res);

    dispatch({
        type: create_product,
        payload: {
            title,
            description,
            imageUrl,
            price
        }
    });
};

export const updatingProduct = (id, title, description, imageUrl) => {
    return {
        type: update_product,
        payload: {
            id,
            title,
            description,
            imageUrl
        }
    }
};