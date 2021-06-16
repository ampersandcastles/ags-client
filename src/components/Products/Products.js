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
import DisplayBread from './Bread';
import DisplayCookies from './Cookies';
import DisplayPastries from './Pastries';
import DisplayBagels from './Bagels';
import APIURL from '../../helpers/Environment';



const Products = props => {
    // console.log(props);
    const [products, setProducts] = useState([]);
    const [muffins, setMuffins] = useState([]);
    const [bread, setBread] = useState([]);
    const [cookies, setCookies] = useState([]);
    const [pastries, setPastries] = useState([]);
    const [bagels, setBagels] = useState([]);




    const fetchMuffins = () => {
        let url = 'http://localhost:4004/product/muffins';

        fetch(`${APIURL}/muffins`, {
            // credentials: 'include',
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(res => res.json())
        .then((data) =>{
            
            setMuffins(data.product)
            console.log(data);
        })
        .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchMuffins();
    }, [])





    const fetchBread = () => {
        let url = 'http://localhost:4004/product/bread';

        fetch(`${APIURL}/bread`, {
            // credentials: 'include',
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(res => res.json())
        .then((data) =>{
            
            setBread(data.product)
            console.log(data);
        })
        .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchBread();
    }, [])


    
    const fetchCookies = () => {
        let url = 'http://localhost:4004/product/cookies';

        fetch(`${APIURL}/cookies`, {
            // credentials: 'include',
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(res => res.json())
        .then((data) =>{
            
            setCookies(data.product)
            console.log(data);
        })
        .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchCookies();
    }, [])



    const fetchBagels = () => {
        let url = 'http://localhost:4004/product/bagels';

        fetch(`${APIURL}/bagels`, {
            // credentials: 'include',
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(res => res.json())
        .then((data) =>{
            
            setBagels(data.product)
            console.log(data);
        })
        .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchBagels();
    }, [])


    const fetchPastries = () => {
        let url = 'http://localhost:4004/product/pastries';

        fetch(`${APIURL}/pastries`, {
            // credentials: 'include',
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(res => res.json())
        .then((data) =>{
            
            setPastries(data.product)
            console.log(data);
        })
        .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchPastries();
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
                    <DisplayBread bread={bread} />
                    <DisplayCookies cookies={cookies}/>
                    <DisplayBagels bagels= {bagels}/>
                    <DisplayPastries pastries={pastries}/>
                    {console.log(muffins)}
                    {console.log(bread)}
                </tbody>
            </table>
        </div>
    )
}

export default Products;