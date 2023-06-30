import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { fetchAllProducts, addCart_Item } from "../api/products";

export default function allProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts = await fetchAllProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, []);
  //  Need shopping cart to exist to addToCart
  const addToCart = async (shoppingcart_id, product_id, count) => {
    try {
      const cartItem = await addCart_Item({
        shoppingcart_id,
        product_id,
        count,
      });
      console.log("Item added to cart:", cartItem);
    } catch (error) {
      console.log("Failed to add item to cart:", error);
    }
  };

  // Group products by category
  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div>
      <h2>Menu</h2>
      {Object.entries(groupedProducts).map(([category, products]) => (
        <div key={category}>
          <h1>{category}</h1>
          {products.map((product) => (
            <div key={product.product_id}>
              <h3>{product.product_name}</h3>
              <p>Price: ${product.price}</p>
              <p>Description: {product.description}</p>
              <button
                onClick={() =>
                  addToCart(shoppingcart_id, product.product_id, 1)
                }
              >
                Add to Cart
              </button>{" "}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}