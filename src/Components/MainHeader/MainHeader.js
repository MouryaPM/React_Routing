import styles from "./MainHeader.module.css";
import { Link, NavLink } from "react-router-dom";

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <NavLink to="/welcome" activeClassName={styles.active}>
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" activeClassName={styles.active}>
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// const MainHeader = () => {
//   return (
//     <header className={styles.header}>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/welcome">Welcome</Link>
//           </li>
//           <li>
//             <Link to="/products">Products</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

export default MainHeader;
