//Logical AND operator (&&) 
//Another common shortcut you’ll encounter is the JavaScript logical AND (&&) operator. 
// Inside React components, it often comes up when you want to render some JSX when the condition
// is true, or render nothing otherwise. With &&, you could conditionally render 
// the checkmark only if isPacked is true:
// return (
//   <li className="item">
//     {name} {isPacked && '✅'}
//   </li>
// );

// function Item({ name, isPacked }) {
//   return (
//     <li className="item">
//       {name} {isPacked && '✅'}
//     </li>
//   );
// }

// Like before, this works not only for text, but for arbitrary JSX too:

// function Item({ name, isPacked }) {
//   return (
//     <li className="item">
//       {isPacked ? (
//         <del>
//           {name + ' ✅'}
//         </del>
//       ) : (
//         name
//       )}
//     </li>
//   );
// }


// Curly braces open the “window into JavaScript”.
// Embed the variable with curly braces in the returned JSX tree, 
// nesting the previously calculated expression inside of JSX:

{/* <li className="item">
  {itemContent}
</li> */}
function Item({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) {
    itemContent = name + " ✅";
  }
  return (
    <li className="item">
      {itemContent}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item
          isPacked={true}
          name="Space suit"
        />
        <Item
          isPacked={true}
          name="Helmet with a golden leaf"
        />
        <Item
          isPacked={false}
          name="Photo of Tam"
        />
      </ul>
    </section>
  );
}
