import { FiShoppingCart } from "react-icons/fi";
import { CartWidget } from "../CartWidget/CartWidget";
import "./NavBar.css"

export const NavBar = () => {
  return (
    <header>
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <img
            src={
              "https://gandhi.vtexassets.com/assets/vtex.file-manager-graphql/images/378031e7-04bd-4890-bda6-8cef499ff8fd___3d5cf70e5b2ed251829a1c113f688047.png"
            }
            className="logo"
            alt="Vite logo"
          />
          <span style={{ fontSize: 18, fontWeight: "bolder" }}>
            Erland Bookss
          </span>
          {/* <FiShoppingCart style={{fontSize:100, color: "red"}}/> */}
          <nav>
            <a href="">Misterio</a>
            <a href="">Terror</a>
          </nav>
          <CartWidget/>
        </div>
      </div>
    </header>
  );
};
