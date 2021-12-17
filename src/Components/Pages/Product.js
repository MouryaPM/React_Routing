import { Link } from "react-router-dom";
const Product = () => {
  const PRODUST_ARRAY = [
    {
      id: "p1",
      name: "Books",
    },
    {
      id: "p2",
      name: "Series",
    },
    {
      id: "p3",
      name: "Videos",
    },
  ];
  return (
    <ul>
      {PRODUST_ARRAY.map((item) => (
        <li>
          <p>{item.name}</p>

          <Link to={`/products/${item.id}`}> View Details</Link>
        </li>
      ))}
    </ul>
  );
};

export default Product;

//function : rfce
//arrow: rafce
