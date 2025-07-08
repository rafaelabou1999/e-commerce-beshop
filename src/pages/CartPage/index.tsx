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
        return safePrevCart.filter((item) => idToDelete !== item.id);
      } catch (e) {
        console.log(e);
        return prevCart || [];
      }
    });
  };

  React.useEffect(() => {
    localStorage.setItem('product', JSON.stringify(cart));
  }, [cart]);

  const total = React.useMemo((): number => {
    return cart.reduce(
      (acc, item) => acc + item.price * (item.quantity || 1),
      0
    );
  }, [cart]);

  const handleQuantity = (
    e: React.MouseEvent<HTMLButtonElement>,
    itemId: number
  ) => {
    const btn = e.currentTarget;
    const isPlus = btn.classList.contains('plus');

    setCart((prev) => {
      const updatedCart = prev.map((item) => {
        if (item.id === itemId) {
          const newQuantity = Math.max(
            (item.quantity ?? 1) + (isPlus ? 1 : -1),
            0
          );
          return { ...item, quantity: newQuantity };
        }
        return item;
      });

      return updatedCart.filter((item) => item.quantity > 0);
    });
  };

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
                        className={`${styles.minus} minus`}
                        onClick={(e) => handleQuantity(e, item.id)}
                      >
                        -
                      </button>
                      <p className={styles.quantity}>{item.quantity}</p>
                      <button
                        className={`${styles.plus} plus`}
                        onClick={(e) => handleQuantity(e, item.id)}
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
                <div className={styles.totalContainer}>
                  <h3 className={styles.total}>
                    <span className={styles.totalText}>Total:</span> $
                    {total.toFixed(2)}
                  </h3>
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
