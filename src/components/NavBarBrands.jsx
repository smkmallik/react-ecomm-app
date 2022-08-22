import { useProductContext } from "../contexts/product-context"
import { NavLink } from "react-router-dom";

const NavBarBrands = () => {

    const { dispatch } = useProductContext();

    return (
      <div className='nav-categories-container'>
        <ul className='nav-categories-list flex-row justify-center'>
          <li className='nav-category-pill'>
            <NavLink
              to='/products'
              onClick={() =>
                dispatch({
                  type: 'TOGGLE_CATEGORY',
                  payload: 'APPLE',
                })
              }
            >
              Apple
            </NavLink>
          </li>
          <li className='nav-category-pill'>
            <NavLink
              to='/products'
              onClick={() =>
                dispatch({
                  type: 'TOGGLE_CATEGORY',
                  payload: 'Google',
                })
              }
            >
              Google
            </NavLink>
          </li>
          <li className='nav-category-pill'>
            <NavLink
              to='/products'
              onClick={() =>
                dispatch({
                  type: 'TOGGLE_CATEGORY',
                  payload: 'NOTHING',
                })
              }
            >
              Nothing
            </NavLink>
          </li>
          <li className='nav-category-pill'>
            <NavLink
              to='/products'
              onClick={() =>
                dispatch({
                  type: 'TOGGLE_CATEGORY',
                  payload: 'ONEPLUS',
                })
              }
            >
              OnePlus
            </NavLink>
          </li>
          <li className='nav-category-pill'>
            <NavLink
              to='/products'
              onClick={() =>
                dispatch({
                  type: 'TOGGLE_CATEGORY',
                  payload: 'SAMSUNG',
                })
              }
            >
              Samsung
            </NavLink>
          </li>
        </ul>
      </div>
    )
}

export { NavBarBrands }