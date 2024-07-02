import React from 'react';
import { Link } from 'react-router-dom';

const DUMMY_PRODUCTS = [
    {id: 'p1', name: '세탁기'},
    {id: 'p2', name: '에어컨'},
    {id: 'p3', name: '청소기'},
];
const Products = () => {
    return (
        <>
        <h1>My Products Page</h1>
        <ul>
            {
                DUMMY_PRODUCTS.map((product) => (
                    <li key={product.id}>
                        <Link to={`${product.id}/page/10`}>{product.name}</Link>
                    </li>
                ))
            }
        </ul>
        </>
    );
};

export default Products;