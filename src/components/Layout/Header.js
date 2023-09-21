import { Fragment } from "react";

import mealsImage from '../../assets/Meals.jpg';

import classes from './Header.module.css';

import HeaderCartButton from "./HeaderCartButton";
const Header=(props)=>{
   return (
   <>
        <header className={classes.header}>
            <h1>FreshMeals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A table full of delicious food!"/>
        </div>
   </>
   );
};
export default Header;