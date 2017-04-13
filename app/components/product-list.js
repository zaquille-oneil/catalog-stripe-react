import React from 'react';
import { getProducts } from '../actions/products.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const ProductListRow = (props) => {
   return <li className="media" style={ { cursor: 'pointer' } }>
                       <div className="media-left">
                           <a href="#">
                              <img className="media-object" height="64" src={props.product.image} />
                           </a>
                       </div>
                       <div className="media-body">
                           <h4 className="media-heading">{props.product.name}</h4>
                           <span>{props.product.description}</span>
                           <br/>
                           <span>{props.product.price} Cr.</span>
                       </div>
                   </li>;
}


//using es6 class syntax
class ProductList extends React.Component {

   //below is a lifecycle method
   componentDidMount() {
      this.props.getProducts();
   }

   render() {
      return <ul className="media-list">
               {this.props.products.map((p) => (<ProductListRow key={p.id} product={p} />))}
            </ul>
   }
}

//we are mapping the state of our app to the props of our component
const mapStateToProps = (state) => {
   return { products: state.products};
}

//we just grabbed the action function from
// product-list.js called getProducts, we will now
// use this function to map it to props within component
const mapDispatchToProps = (dispatch) => {
   return bindActionCreators ({ getProducts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
