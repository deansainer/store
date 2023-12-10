import React from 'react'
import { useCart } from '../../context/Context'
import classes from './Favorites.module.css'

const Favorites = () => {
    const {favorites} = useCart();
  return (
    <div className={classes.favorites_list}>
          <p className={classes.favorites_title}>Favorites</p>
        {favorites.map((item) => (
            <div className={classes.favorites}>
            <img className={classes.favorites_image} src={item.image} alt={item.image}></img>
            <div className={classes.favorites_data}>
              <h5>{item.name}</h5>
              <p>${item.price}</p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Favorites

