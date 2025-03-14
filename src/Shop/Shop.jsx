import React from "react";
import styles from "./Shop.module.scss";

const products = [
    { id: 1, name: "Apples", price: "$50.00", img: "/src/Shop/assets_shop/apple.svg" },
    { id: 2, name: "Bananas", price: "$20.00", img: "/src/Shop/assets_shop/banana.svg" },
    { id: 3, name: "Carrot", price: "$50.00", img: "/src/Shop/assets_shop/carrot.svg" },
    { id: 4, name: "Garlic", price: "$20.00", img: "/src/Shop/assets_shop/garlic.svg" },
    { id: 5, name: "Grapes", price: "$100.00", img: "/src/Shop/assets_shop/grapes.svg" },
    { id: 6, name: "Lettuce", price: "$50.00", img: "/src/Shop/assets_shop/lettuce.svg" },
    { id: 7, name: "Onions", price: "$20.00", img: "/src/Shop/assets_shop/onions.svg" },
    { id: 8, name: "Potatoes", price: "$30.00", img: "/src/Shop/assets_shop/potato.svg" },
    { id: 9, name: "Red Grapes", price: "$100.00", img: "/src/Shop/assets_shop/red_grapes.svg" },
];

const Shop = () => {
    return (
        <div className={styles.shopContainer}>
            <img src="/src/Shop/assets_shop/banner.svg" alt="Shop Banner" className={styles.banner} />
            
            <div className={styles.shopContent}>
                <aside className={styles.sidebar}>
                    <div className={styles.filterSection}>
                        <label>Price</label>
                        <input type="range" min="0" max="100" />
                        <span>$20 - $100</span>
                        <button className={styles.applyButton}>Apply</button>
                    </div>

                    <div className={styles.filterSection}>
                        <label>Categories</label>
                        <ul>
                            <li>Agriculture</li>
                            <li>Farming</li>
                            <li>Fresh Vegetables</li>
                            <li>Harvest</li>
                            <li>Organic Food</li>
                        </ul>
                    </div>
                </aside>

                <div className={styles.productsGrid}>
                    {products.map((product) => (
                        <div key={product.id} className={styles.productCard}>
                            <img src={product.img} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shop;
