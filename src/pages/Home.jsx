import React from 'react'
import { NavBarBrands } from '../components/NavBarBrands';
import { useProductContext } from '../contexts/product-context'
import carousel from '../Assets/carousel.jpg';
import { NavLink } from 'react-router-dom';


const Home = () => {

    const { dispatch } = useProductContext();

    return (
      <>
        <NavBarBrands />

        <main>
            <div className='hero-container'>
                <div className='img-carousel'>
                    <img 
                        src= {carousel} 
                        alt="mobile"
                        className='img-responsive'
                    />
                    <div className='img-overlay-text t2'>
                        <NavLink
                            to='/products'
                            className="image-overlay-link"
                            onClick={() => dispatch({
                                type: "CLEAR_ALL"
                            })}
                        >
                            Shop Now
                        </NavLink>
                    </div>
                </div>
            </div>
        </main>
      </>
    )
}

export { Home }