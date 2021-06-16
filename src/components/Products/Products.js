/*
? Create a product
? Edit a product 
? Delete a product
? GET all products
? GET products by type
*/

import React, {useState, useEffect} from 'react';
// import DisplayProducts from './AllProducts';
import DisplayMuffins from './Muffins';



const Products = props => {
    // console.log(props);
    const [products, setProducts] = useState([]);
    const [muffins, setMuffins] = useState([]);



    const fetchMuffins = () => {
        let url = 'http://localhost:4004/product/muffins';

        fetch(url, {
            // credentials: 'include',
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(res => res.json())
        .then((data) =>{
            
            setMuffins(data)
            console.log(data);
        })
        .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchMuffins();
    }, [])

    

    

    


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name of Product</th>
                        <th>Availability</th>
                        <th>Description</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Photo</th>
                    </tr>
                </thead>
                <tbody>
                    <DisplayMuffins muffins={muffins} />
                    {console.log(muffins)}
                </tbody>
            </table>
        </div>
    )
}

export default Products;