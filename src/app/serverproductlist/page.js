import Link from "next/link";
import Product from "./product";

async function productList(){
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    //console.log(data);
    return data.products;
}

export default async function Page(){

    let products = await productList();
    console.log(products);
    return(
        <main>
            <h1>Fetch Data From API in server component</h1>
            <h2>Product List</h2>
            <Link href="/">Go to Home Page</Link>
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Brand</th>
                        <th>Price (in $)</th>
                        <th>Category</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((item,index) => (
                            <tr key={index}>
                                <td>{item.title}</td>
                                <td>{item.brand}</td>
                                <td>$ {item.price}</td>
                                <td>{item.category}</td>
                                <td><Product description={item.description}/></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </main>
    ) 
}