import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import cartActions from "../../store/cart";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveItem = (id) => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(cartActions.clearCart());
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(cartActions.increaseItemQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(cartActions.decreaseItemQuantity(id));
  };

  const handleChecKOut = () => {
    navigate("checkout");
  };

  const calculateTotalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => {
      return (
        total +
        item.quantity * item.options[item.selectedOption].discountedPrice
      );
    }, 0);
  }, [cartItems]);

  return (
    <div className="flex justify-center items-center py-10 md:py-20 lg:py-36">
      <div className="bg-white rounded-lg shadow-md w-full max-w-3xl p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>
        {cartItems.length === 0 ? (
          <div className="text-center">
            <p className="cart-empty text-gray-500 text-center my-4">
              Your cart is empty.
            </p>
            <Link
              to="/shop"
              className="text-blue-500 font-bold uppercase underline hover:text-blue-800">
              {" "}
              Visit shop
            </Link>
          </div>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex sm:flex-row flex-col gap-6 sm:gap-0 items-center justify-between border-b border-gray-200 py-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="item-image w-20 h-20 object-cover rounded-md"
                  />
                  <div>
                    <p className="item-name text-lg font-semibold">
                      {item.name}
                    </p>
                    <p className="item-price text-gray-600">
                      {`${item.options[item.selectedOption].size}: ${
                        item.options[item.selectedOption].discountedPrice
                      } Rs`}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="quantity-buttons flex border border-gray-300 rounded">
                    <button
                      onClick={() => handleDecreaseQuantity(item.id)}
                      className="quantity-button text-gray-500 hover:text-gray-700 focus:outline-none border-r px-2">
                      <FaMinus size={16} />
                    </button>
                    <span className="text-lg font-semibold px-2">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleIncreaseQuantity(item.id)}
                      className="text-gray-500 hover:text-gray-700 focus:outline-none border-l px-2">
                      <FaPlus size={16} />
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700 focus:outline-none">
                    <FaTrash size={20} />
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-8 flex justify-between items-center">
              <button
                onClick={handleClearCart}
                className="text-sm text-red-500 hover:underline focus:outline-none">
                Clear Cart
              </button>
              <div>
                <p className="text-lg font-semibold">
                  Total Items:{" "}
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
                </p>
                <p className="text-lg font-semibold">
                  Total Price: {calculateTotalPrice} Rs
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center mt-4 ">
              <Link
                className="max-w-[120px] bg-blue-500 text-white hover:bg-blue-600 px-3 py-2 rounded-md"
                onClick={handleChecKOut}>
                CheckOut
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
