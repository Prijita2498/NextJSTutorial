'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link';

export default function Page() {
    const [product, setProduct] = useState([]);
    useEffect(async () => {
        let data = await fetch("https://dummyjson.com/products")
        data = await data.json();
        console.log(data);
        setProduct(data.products)
    }, [])

    return (
        <div>
            <h1>Product List</h1>
            <Link href="/">Go to Home Page</Link>
            <table className='border'>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Brand</th>
                        <th>Price (in $)</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map((item,index) => (
                            <tr key={index}>
                                <td>{item.title}</td>
                                <td>{item.brand}</td>
                                <td>$ {item.price}</td>
                                <td>{item.category}</td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>

        </div>
    )
}