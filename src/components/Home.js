import React from 'react'
import '../styles/home.css'
const Home=()=>{
    return(
        <div>
<div className="add-to-cart">
<img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg"/>

</div>

            <h1>Home component</h1>
<div className="cart-wrapper">
<div className="img-wrapper item">
<img src="https://png2.cleanpng.com/sh/d976b04dcb2e6527cdf4ad3ab993b003/L0KzQYm3U8I2N5Doj5H0aYP2gLBuTflxcJDzfZ89LXnzeLF1hb05NaFxjeU2aYDrf7BsTcUucaFth9DuLYiwecHvjB5mNZJ1iN5uLUXkcoi5g8czbWk2e6gELkezQIO7V8E5OWY3SasAM0mzRoq8UMcveJ9s/kisspng-iphone-4-iphone-8-plus-iphone-5-iphone-x-iphone-apple-5ab72c72e81c69.7002471815219539069507.png"/>
</div>
<div className="text-wrapper item">
<span>I-Phone</span>
<span>
    Price:1000.00$
</span>
</div>
<div className="btn-wrapper item">
<button>Add To Cart</button>
</div>

</div>

        </div>
    )
}
export default Home;