import axios from 'axios';


// action creator, a function that does actions for us. returns objects ALWAYS.
// objects ALWAYS have types that defines the type of action.
// in this case, the type is a 'list of products'
export function getProducts() {
   const payload = axios.get('products.json');

   return {
      type: 'GET_PRODUCTS',
      payload
   }
}
