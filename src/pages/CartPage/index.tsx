import { Trash2Icon } from 'lucide-react';
import styles from './styles.module.css';
import React from 'react';
import { useProducts } from '../../context/ProductContext';

export const CartPage = () => {
  const { cart, setCart } = useProducts();
  const handleUpdate = (idToDelete: number) => {
    setCart((prevCart) => {
      try {
        const safePrevCart = Array.isArray(prevCart) ? prevCart : [];
        const updatedCart = safePrevCart.filter(
          (item) => idToDelete !== item.id
        );
        return updatedCart;
      } catch (e) {
        console.log(e);
        return prevCart || [];
      }
    });
  };

  React.useEffect(() => {
    localStorage.setItem('product', JSON.stringify(cart));
  }, [cart]);

  const handleAddQuantity = (itemId: number): void => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity: (item.quantity || 1) + 1,
            }
          : item
      )
    );
  };

  const handleRemoveQuantity = (itemId: number): void => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity: (item.quantity || 1) - 1,
            }
          : item
      )
    );
  };

  const total = React.useMemo((): number => {
    return cart.reduce(
      (acc, item) => acc + item.price * (item.quantity || 1),
      0
    );
  }, [cart]);
  return (
    <div className={styles.container}>
      <div>
        {cart.length > 0 ? (
          cart.map((item, index) =>
            item.quantity > 0 ? (
              <div className={styles.all} key={`${item.id}-${index}`}>
                <div className={`${styles.product}`}>
                  <div>
                    <p className={styles.productName}>{item.title}</p>
                    <p className={styles.productPrice}>
                      $ {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  <div className={styles.rightPart}>
                    <div className={styles.containerQuantity}>
                      <button
                        className={styles.minus}
                        onClick={() => handleRemoveQuantity(item.id)}
                      >
                        -
                      </button>
                      <p className={styles.quantity}>{item.quantity}</p>
                      <button
                        className={styles.plus}
                        onClick={() => handleAddQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                    <div
                      className={styles.trashIcon}
                      onClick={() => handleUpdate(item.id)}
                    >
                      <Trash2Icon />
                    </div>
                  </div>
                </div>
                <div></div>
                <div className={styles.totalContainer}>
                  <h2 className={styles.totalText}>Total:</h2>
                  <h3 className={styles.total}>$ {total.toFixed(2)}</h3>
                </div>
              </div>
            ) : null
          )
        ) : (
          <p className={styles.noProducts}>Ops! The cart is empty.</p>
        )}
      </div>
    </div>
  );
};
