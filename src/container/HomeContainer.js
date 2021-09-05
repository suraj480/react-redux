import {connect} from 'react-redux'
import {addToCart,removeToCart} from '../services/Actions/Actions'
import Home from '../components/Home'
const mapStateToProps=state=>({
    // data:state.cardItems
    data:state.cartItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:data=>dispatch(removeToCart(data))
})


//export default Home;
export default connect(mapStateToProps,mapDispatchToProps)(Home)