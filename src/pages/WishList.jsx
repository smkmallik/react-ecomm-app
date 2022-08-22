import { useNavigate } from "react-router-dom"
import { NavBarBrands } from "../components/NavBarBrands";
import { useCart } from "../contexts/cart-context";
import { useWishlist } from "../contexts/wishlist-context";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

const WishList = () => {

    const navigate = useNavigate();

    const { wishlist, removeFromWishList } = useWishlist();
    const { addToCart, cart } = useCart();

    const isCarted = (cartArr, id) => {
        let res = cartArr.some(item => item._id === id )
        return res;
    }

    return (
      <>
        <NavBarBrands />

        <div className='wrapper flex-row justify-center'>
          <section className='product-container flex-row justify-center wishlist-container'>
            {wishlist.length !== 0 &&
              wishlist.map((item) => {
                console.log(item)
                return (
                  <div className='card-ecom card' key={item.id}>
                    <img
                      src={item.image}
                      alt='iPhone'
                      className='card-img card-img-ecom'
                    />
                    <div className='card-ecom-badge'>{item.badge}</div>
                    <div className='card-ecom-like-icon'>
                      <FavoriteBorderIcon
                        className='wishlist-icon-selected'
                        onClick={() => removeFromWishList(item)}
                      />
                    </div>
                    <div className='card-header'>
                      <div className='card-sub-title'>{item.brand}</div>
                      <div className='card-title'>{item.title}</div>
                      <div className='card-sub-title card-ecom-memory'>
                        [ {item.memory}] <span>{item.rating}★</span>
                      </div>
                      <div className='card-ecom-price'>
                        <span className='card-ecom-price-current'>
                          Rs. {item.price}
                        </span>
                        <span className='card-ecom-price-old'>
                          {item.regularPrice}
                        </span>
                      </div>
                    </div>
                    <div className='card-footer'>
                      <div className='card-btn-box'>
                        {' '}
                        {isCarted(cart, item._id) ? (
                          <button
                            className='btn default-primary'
                            onClick={() => {
                              navigate('/cart')
                              removeFromWishList(item)
                            }}
                          >
                            GO TO CART
                          </button>
                        ) : (
                          <button
                            className='btn default-primary'
                            onClick={() => {
                              addToCart(item)
                              removeFromWishList(item)
                            }}
                          >
                            MOVE TO CART
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}

            {wishlist.length === 0 && <h1> No products wishlishted </h1>}
          </section>
        </div>
      </>
    )
}

export { WishList }