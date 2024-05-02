import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => { 
        getProducts();
    }, []);

    const getProducts = async () => { 
        // const response = await fetch("https://fakestoreapi.com/products");
        // const data = await response.json();
        // setProducts(data);
        const {data} = await axios.get("https://fakestoreapi.com/products");
        setProducts(data);
    }

    return (
        <div>
            {products.map(product => <div key={product.id}> <h3>{product.title}</h3> </div>)}
        </div>
    );
}

export default Products;
