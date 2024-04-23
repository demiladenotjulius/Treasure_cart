// import React, { useContext } from 'react';
// import ProductImageContext from '../productContext/productContext';
// import  Pdata from '../Products/Pdata';


// // const Cart = () => {
// //   const { productImage } = useContext(ProductImageContext);

// //   return (
// //     <div>
// //       <h1>Cart</h1>
// //       <ul>
// //         {Object.entries(productImage).map(([itemId, quantity]) => {
// //           const item = Pdata.find((data) => data.id === parseInt(itemId));
// //           return (
// //             item && quantity > 0 && (
// //               <li key={itemId}>
// //                 <img src={item.image} alt={item.Name} />
// //                 <p>{item.Name}</p>
// //                 <p>Quantity: {quantity}</p>
// //                 <p>Price: {item.price * quantity}</p>
// //               </li>
// //             )
// //           );
// //         })}
// //       </ul>
// //     </div>
// //   );
// // };

// const Cart = () => {
//   const { productImage } = useContext(ProductImageContext);

//   return (
//     <div>
//       <h1>Cart</h1>
//       <ul>
//         {Object.entries(productImage).map(([itemId, quantity]) => {
//           const item = Pdata.find((data) => data.id === parseInt(itemId));
//           if (item && quantity > 0) {
//             const priceNumber = parseFloat(item.price.replace('$', ''));
//             const totalPrice = priceNumber * quantity; // Calculate total price here
//             return (
//               <li key={itemId}>
//                 <img src={item.image} alt={item.Name} className="w-16 h-20 object-cover" />
//                 <p>{item.Name}</p>
//                 <p>Quantity: {quantity}</p>
//                 <p>Price: ${totalPrice.toFixed(2)}</p> {/* Format price as currency */}
//               </li>
//             );
//           }
//           return null;
//         })}
//       </ul>
//     </div>
//   );
// };

// export default Cart;


