import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    // Dispatch action to remove item from cart
  };

  const handleClearCart = () => {
    // Dispatch action to clear cart
  };

  const handleIncreaseQuantity = (id) => {
    // Dispatch action to increase quantity
  };

  const handleDecreaseQuantity = (id) => {
    // Dispatch action to decrease quantity
  };

  const calculateTotalPrice = () => {
    // Calculate total price of items in cart
    return cartItems.reduce(
      (total, item) => total + item.discountedPrice * item.quantity,
      0
    );
  };

  return (
    <div className="cart-container  flex justify-center items-center py-10 md:py-20 lg:py-36">
      <div className="cart-wrapper bg-white rounded-lg shadow-md w-full max-w-3xl p-6">
        <h2 className="cart-title text-3xl font-bold mb-6 text-center">
          Your Cart
        </h2>
        {cartItems.length === 0 ? (
          <p className="cart-empty text-gray-500 text-center">
            Your cart is empty.
          </p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="cart-item flex items-center justify-between border-b border-gray-200 py-4">
                <div className="item-details flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="item-image w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <p className="item-name text-lg font-semibold">
                      {item.name}
                    </p>
                    <p className="item-price text-gray-600">{`$${item.discountedPrice}`}</p>
                    {item.options && (
                      <p className="item-options text-sm text-gray-500">
                        Option: {item.options[item.selectedOption]}
                      </p>
                    )}
                  </div>
                </div>
                <div className="item-actions flex items-center space-x-4">
                  <button
                    onClick={() => handleDecreaseQuantity(item.id)}
                    className="quantity-button text-gray-500 hover:text-gray-700 focus:outline-none">
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleIncreaseQuantity(item.id)}
                    className="quantity-button text-gray-500 hover:text-gray-700 focus:outline-none">
                    +
                  </button>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="remove-button text-red-500 hover:text-red-700 focus:outline-none">
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="cart-summary mt-8 flex justify-between items-center">
              <button
                onClick={handleClearCart}
                className="clear-cart-button text-sm text-red-500 hover:underline focus:outline-none">
                Clear Cart
              </button>
              <div>
                <p className="total-items text-lg font-semibold">
                  Total Items: {cartItems.length}
                </p>
                <p className="total-price text-lg font-semibold">
                  Total Price: ${calculateTotalPrice()}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
