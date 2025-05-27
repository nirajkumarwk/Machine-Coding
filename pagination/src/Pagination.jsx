import { useEffect, useState } from "react";
import "./index.css";
import ProductCard from "./ProductCard";

const PAGE_SIZE = 10;

const Pagination = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;

  useEffect(() => {
    try {
      const getData = async () => {
        setLoading(true);
        const res = await fetch("https://dummyjson.com/products?limit=200");
        if (!res.ok) throw new Error("failed to fetch");
        const result = await res.json();
        setData(result);
        
        setLoading(false);
      };
      getData();
    } catch (error) {
      setData(error.message);
    }
  }, []);

  const Total_Pages = Math.ceil(data?.products.length / PAGE_SIZE);

  const currentProducts = data?.products?.slice(startIndex, endIndex) || [];

  const handlePrevios = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < Total_Pages) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  return (
    <div>
      <h1>Pagination</h1>
      <div className="page">
        <button onClick={handlePrevios} disabled={currentPage === 1}>
          prev
        </button>
        {Array.from({ length: Total_Pages }).map((_, index) => {
          const pageNum = index + 1;
          return (
            <button
              key={index}
              onClick={() => setCurrentPage(pageNum)}
              style={{
                width: "24px",
                height: "24px",
                margin: "2px",
                backgroundColor: currentPage === pageNum ? "black" : "white",
                color: currentPage === pageNum ? "white" : "black",
                border: "1px solid black",
              }}
            >
              {index + 1}
            </button>
          );
        })}
        <button onClick={handleNext} disabled={currentPage === Total_Pages}>
          next
        </button>
      </div>
      <div className="container">
        {loading ? (
          "Loading..."
        ) : currentProducts.length === 0  ? (
          <p>No products found</p>
        ) : (
          currentProducts?.map((product) => {
            return (
              <ProductCard
                title={product.title}
                image={product.thumbnail}
                key={product.id}
              />
            );
          })
        )}
      </div>
    </div>
  );
};
export default Pagination;
