import { Item } from "../Item/Item";
import "./ItemListContainer.css"

import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

export const ItemListContainer = ({ products }) => {

   const isLoading = products.length === 0;
  return (
    <div className="item-list-container">
       {isLoading
        ? // Muestra un Skeleton para cada item mientras carga
          Array(6)
            .fill()
            .map((_, index) => (
              <div key={index} className="skeleton-item">
                <Skeleton height={450}  />
                <Skeleton height={20} width={100} style={{ marginTop: "10px" }} />
                <Skeleton height={20} width={60} />
              </div>
            ))
        : products.map((product) => (
            <Item
              key={product.id}
              title={product.title}
              category={product.category}
              price={product.price}
              img={product.img}
              stock={product.stock}
            />
          ))}
    </div>
  );
};
