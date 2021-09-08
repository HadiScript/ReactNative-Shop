import PRODUCTS from '../../data/dummydata';
import Product from '../../models/ProductsModel';
import { create_product, delete_product, update_product } from '../actions/ProductAct';

const init = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(p => p.ownerId === 'u1'), // currently user login
};

const ProductReducer = (state = init, action) => {
    switch (action.type) {

        case create_product:
            const createId = Math.random().toString();

            const newProduct = new Product(
                createId,
                'u1',
                action.payload.title,
                action.payload.imageUrl,
                action.payload.description,
                action.payload.price,
            );
            return {
                ...state,
                availableProducts: state.availableProducts.concat(newProduct),
                userProducts: state.userProducts.concat(newProduct),
            };

        case update_product:
            const productIndex = state.userProducts.findIndex(prod => prod.id === action.payload.id);

            const updatedproduct = new Product(
                action.payload.id,
                state.userProducts[productIndex].ownerId,
                action.payload.title,
                action.payload.imageUrl,
                action.payload.description,
                state.userProducts[productIndex].price
            );
            const updateUserProducts = [...state.userProducts];
            updateUserProducts[productIndex] = update_product;

            const availIndex = state.availableProducts.findIndex(p => p.id === action.payload.id);
            const udpatedAvailProducts = [...state.availableProducts];
            udpatedAvailProducts[availIndex] = updatedproduct;
            return {
                ...state,
                availableProducts: udpatedAvailProducts,
                userProducts: updateUserProducts
            }




        case delete_product:
            const id = action.payload;

            return {
                ...state,
                availableProducts: state.availableProducts.filter(f => f.id !== id),
                userProducts: state.userProducts.filter(f => f.id !== id),
            }


        default:
            return state;
    }
};

export default ProductReducer;