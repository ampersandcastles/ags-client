import React, {useState, useEffect} from 'react';
import DisplayBread from './Bread';

const Products = props => {
    console.log(props);
    const [products, setProducts] = useState([]);
    const [bread, setBread] = useState([]);

    const fetchProducts = () => {
        let url = 'http://localhost:4004/product'
        fetch(url, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(res => res.json())
        .then(json => setProducts(json))
    }

    useEffect(() => {
        fetchProducts();
    },[])

    return (
        <>
        <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Base of Pie</th>
                        <th>Crust</th>
                        <th>Bake Time</th>
                        <th>Servings</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    <DisplayBread bread={bread}/>
                </tbody>
            </table>
        </>
    )


}

export default Products;