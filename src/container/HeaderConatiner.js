import {connect} from 'react-redux'

import Header from '../components/Header'
const mapStateToProps=state=>({
    // data:state.cardItems
    data:state.cartItems
})
const mapDispatchToProps=dispatch=>({
   
})


//export default Home;
export default connect(mapStateToProps,mapDispatchToProps)(Header)