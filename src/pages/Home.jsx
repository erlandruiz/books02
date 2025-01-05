import { useEffect, useState } from "react";
import { getBooks } from "../lib/books.request";
import { ItemListContainer } from "../components";


import "react-loading-skeleton/dist/skeleton.css"; // Importa los estilos del Skeleton
import Skeleton from "react-loading-skeleton"; // Importa el Skeleton

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBooks().then((res) => setProducts(res));
    setIsLoading(false); // Cambia el estado a false cuando los datos se cargan
  }, []);

  return (
    <div>
      <h1>Home Pagina Principal</h1>
      <div>
        {isLoading ? (
          <div>
            <Skeleton
              height={30}
              width={200}
              style={{ marginBottom: "10px" }}
            />
            <Skeleton height={150} style={{ marginBottom: "20px" }} />
            <Skeleton height={150} style={{ marginBottom: "20px" }} />
          </div>
        ) : (
          <ItemListContainer products={products} />
        )}
      </div>
    </div>
  );
};
