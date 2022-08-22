import { Routes, Route } from "react-router-dom"
import { RequiresAuth } from "../require-auth"

import { Cart, Home, Login, ProductListing, Signup, WishList } from "../pages"


const EndPoints = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/signup" element={<Signup />} />
            <Route path='/cart' element={
                <RequiresAuth>
                    <Cart />
                </RequiresAuth>
            }/>
            <Route path="/wishlist" element={
                <RequiresAuth>
                    <WishList />
                </RequiresAuth>
            }/>
        </Routes>
    )
}

export { EndPoints as Routes }