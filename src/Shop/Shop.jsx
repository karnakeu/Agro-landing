import React from "react";
import styles from "./Shop.module.scss";

const images = import.meta.glob("/src/Shop/assets_shop/*.svg", { eager: true, query: "?url", import: "default" });

const products = [
    { id: 1, name: "Apples", price: "$10.00", img: "apple.svg" },
    { id: 2, name: "Bananas", price: "$20.00", img: "banana.svg" },
    { id: 3, name: "Carrot", price: "$10.00", img: "carrot.svg" },
    { id: 4, name: "Grapes", price: "$30.00", img: "grapes.svg" },
    { id: 5, name: "Lettuce", price: "$10.00", img: "lettuce.svg" },
    { id: 6, name: "Onions", price: "$5.00", img: "onions.svg" },
    { id: 7, name: "Potatoes", price: "$8.00", img: "potato.svg" },
    { id: 8, name: "Red Grapes", price: "$15.00", img: "red_grapes.svg" },
    { id: 9, name: "Garlic", price: "$20.00", img: "garlic.svg" },
];

const Shop = () => {
    return (
        <div className={styles.shopContainer}>
            {/* Баннер */}
            <img src="/src/Shop/assets_shop/banner.svg" alt="Shop Banner" className={styles.banner} />

            <h2 className={styles.title}>Our Shop</h2>

            <div className={styles.productsGrid}>
                {products.map((product) => (
                    <div key={product.id} className={styles.productCard}>
                        <img src={images[`/src/Shop/assets_shop/${product.img}`]} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shop;
