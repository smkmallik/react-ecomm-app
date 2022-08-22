import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { WishlistReducer } from "../reducers/wishlist-reducer";
import { useAuth } from "./auth-context";


const WishlistContext = createContext([]);

const WishlistProvider = ({ children }) => {
    const [{wishlist}, dispatch] = useReducer(WishlistReducer, {
        wishlist: []
    });

    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const { isLoggedIn } = useAuth();

    (async() => {
        try {
            const response = await axios.get('/api/user/wishlist', {
                headers: { authorization: token }
            })
            if(response.data.status === 200) {
                dispatch({
                    type: "GET_WISHLIST",
                    payload: response.data.wishlist
                })
            }
        } catch (error) {
            console.log(error);
        }
    })()

    const addToWishList = async(product) => {
        if(isLoggedIn) {
            try {
                const response = await axios.post("/api/user/wishlist", {product}, {
                    headers: { authorization: token }
                })
                if(response.status === 201) {
                    dispatch({
                        type: "ADD_TO_WISHLIST",
                        payload: response.data.wishlist
                    })
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            navigate("/login");
        }
    }

    const removeFromWishList = async(product) => {
        try {
            const response = await axios.delete(`/api/user/wishlist/${product._id}`, {
                headers: { authorization: token }
            })
            if(response.status === 200) {
                dispatch({
                    type: "DELETE_FROM_WISHLIST",
                    payload: response.data.wishlist
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <WishlistContext.Provider value={{wishlist, addToWishList, removeFromWishList}}>
            { children }
        </WishlistContext.Provider>
    )
}

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };