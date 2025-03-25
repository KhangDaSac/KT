import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const ACTIONS = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    UPDATE_QUANTITY: 'UPDATE_QUANTITY',
    CLEAR_CART: 'CLEAR_CART',
    LOAD_CART: 'LOAD_CART'
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.LOAD_CART:
            return {
                ...state,
                orders: action.payload
            };
        case ACTIONS.ADD_TO_CART:
            const existingItem = state.orders.find(order => order.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state,
                    orders: state.orders.map(order =>
                        order.id === action.payload.id
                            ? { ...order, quantity: order.quantity + 1 }
                            : order
                    )
                };
            }
            return {
                ...state,
                orders: [...state.orders, { ...action.payload, quantity: 1 }]
            };
        case ACTIONS.REMOVE_FROM_CART:
            return {
                ...state,
                orders: state.orders.filter(order => order.id !== action.payload)
            };
        case ACTIONS.UPDATE_QUANTITY:
            return {
                ...state,
                orders: state.orders.map(order =>
                    order.id === action.payload.id
                        ? { ...order, quantity: action.payload.quantity }
                        : order
                )
            };
        case ACTIONS.CLEAR_CART:
            return {
                ...state,
                orders: []
            };
        default:
            return state;
    }
};

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, { orders: [] });

    useEffect(() => {
        const storedOrders = localStorage.getItem('orders');
        if (storedOrders) {
            dispatch({ type: ACTIONS.LOAD_CART, payload: JSON.parse(storedOrders) });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(state.orders));
    }, [state.orders]);

    const addToCart = (item) => {
        dispatch({ type: ACTIONS.ADD_TO_CART, payload: item });
    };

    const removeFromCart = (itemId) => {
        dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: itemId });
    };

    const updateQuantity = (itemId, quantity) => {
        dispatch({ type: ACTIONS.UPDATE_QUANTITY, payload: { id: itemId, quantity } });
    };

    const getTotalPrice = () => {
        return state.orders.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const getTotalQuantity = () => {
        return state.orders.reduce((total, item) => total + item.quantity, 0);
    };

    const buy = () => {
        dispatch({ type: ACTIONS.CLEAR_CART });
    };

    const value = {
        orders: state.orders,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotalPrice,
        getTotalQuantity,
        buy
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}; 