import React, { useEffect, useState } from 'react';
import ProductCard from '../Components/ProductCart';

const Product = () => {

    let [productData, setProductsData] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products").then(res => res.json()).then(data => setProductsData(data))
    })


    return (

        <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12 m-12">
           <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">

                <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-2 xl:grid-cols-3">

                    {productData ? productData.map((product) => {
                        return <ProductCard title={product.title} price={product.price} image={product.image} category={product.category} />
                    }) : (<div className='bg-orange-700 p-12'> <h1>Loading....</h1></div>)}

                </div>
            </div> 
        </section>
    )
};

export default Product;
