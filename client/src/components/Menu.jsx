import { useState, useEffect } from "react";
import {
  fetchAllProducts,
  addItemToCart,
  getUserShoppingCart,
} from "../api/menu";

const isInCart = (product_id) => {
  // return true or false if the product with id or productId
  // is in your local storage cart
  // Retrieve the cart items from the local storage and check if the product is in the cart
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  return cartItems.some((item) => item.product_id === product_id);
};

export default function allProducts({ setCartItemCount }) {
  const [products, setProducts] = useState([]);
  const [cart_id, setShoppingCartId] = useState(null);
  const [counts, setCounts] = useState({});
  const [insideCart, setInsideCart] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedProducts = await fetchAllProducts();
        setProducts(fetchedProducts);

        const result = await getUserShoppingCart();
        setShoppingCartId(result.shoppingcart_id);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const addToCart = async (shoppingcart_id, product_id, count) => {
    // Ensure shoppingcart_id is defined before adding to cart
    //if product_id is already in cart disable button unless quantity is changed
    if (shoppingcart_id) {
      try {
        const cartItem = await addItemToCart({
          shoppingcart_id,
          product_id,
          count: count || 1,
        });
        setCounts({
          ...counts,
          [product_id]: 1, // Reset the count to 1 after adding to cart
        });
        setCartItemCount((state) => state + 1);
        return cartItem;
      } catch (error) {
        console.log("Failed to add item to cart:", error);
      }
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
            <div className="menu" key={product.product_id}>
              <h3 className="productName">{product.product_name}</h3>
              <div className="productCard">
                <p>{product.description}</p>
                <p>${product.price}</p>
                <div>
                  {isInCart(product.product_id) ? (
                    // Display stuff if product is in cart
                    <h1>fire</h1>
                  ) : (
                    // Don't display stuff if product is not in cart
                    <div>
                      <div>
                        <button
                          className="count-button"
                          onClick={() => {
                            const currentCount =
                              counts[product.product_id] || 1;
                            setCounts({
                              ...counts,
                              [product.product_id]:
                                currentCount > 1 ? currentCount - 1 : 1,
                            });
                          }}
                        >
                          -
                        </button>
                        <span className="count">
                          {counts[product.product_id] || 1}
                        </span>
                        <button
                          className="count-button"
                          onClick={() => {
                            const currentCount =
                              counts[product.product_id] || 1;
                            setCounts({
                              ...counts,
                              [product.product_id]: currentCount + 1,
                            });
                          }}
                        >
                          +
                        </button>
                      </div>
                      <button
                        id="addToCartButton"
                        onClick={() =>
                          addToCart(
                            cart_id,
                            product.product_id,
                            counts[product.product_id] || 1
                          )
                        }
                      >
                        Add to Cart
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
