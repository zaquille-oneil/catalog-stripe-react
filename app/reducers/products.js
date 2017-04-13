//reducer is a function with 2 arguments
//our reducer should only care about certain actions
export default (state = [], action) => {
   if(action.error) return state;

   switch(action.type) {
      case 'GET_PRODUCTS':
         return action.payload.data;
      default:
         return state;
   }
}
//1. in product-lists.js we will call:
//       this.props.getProducts();
//   inside the componentDidMount()
//
//2. call our action creator in actions/products.js
//       const payload = axios.get(...)
//   which will be returned into ReduxPromise, our middleware
//
//3. it will look at the action before it gets to our reducer
//       see up above..
