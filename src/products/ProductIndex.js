import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import ProductView from './ProductView';
import ProductEdit from './ProductEdit';
import ProductCreate from './ProductCreate';
import APIURL from './../helpers/Environment';

const ProductIndex = (props) => {
    const [products, setProduct] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [productEdit, setProductToUpdate] = useState({}); 
    const [createActive, setCreateActive] = useState(false);
    const [ProductCreate, ProductCreate] = useState({});

    const editUpdateProduct = (product) => {
        setProductToUpdate(product);
        console.log(product);
    }  
    const updateOn = () => {
        setUpdateActive(true);
    }
    const updateOff = () => {
        setUpdateActive(false)
    }
    const createOn = () => {
        setCreateActive(true);
    }
    const createOff = () => {
        setCreateActive(false);
    }
             
    const fetchProduct = () => {
        fetch(baseURL, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
            .then((res) => res.json())
            .then((productData) => {
                setProducts(productData)
                console.log(products, productData);
            })
    }

    const viewProduct = (product) => {
        setProductToView(product);
      
    }
    const viewOn = () => {
    setViewActive(true)
}
const viewOff = () => {
    setViewActive(false)
}

    return(
        <Container id="container">
            <Row>
                <Col md="3">
                    <Button type="button" onClick={createOn} style={{width:'200px',marginTop:'250px'}}>Add Item</Button>
                    {createActive ? <ProductCreate productToCreate={productToCreate}createOff={createOff} token={props.token} fetchProducts={fetchProducts}/> : <></>}
                
                
          
                        
                </Col>
                 <Col md="6">
                    <ProductsView products={products} editUpdateProducts={editUpdateProducts} updateOn={updateOn} fetchProducts={fetchProducts} token={props.token} />
                 </Col>
                {updateActive ? <ProductsEdit productsToUpdate={productToUpdate}
                updateOff={updateOff} token={props.token} fetchProducts={fetchProducts}/> : <></>}
                <Col md="3">
                <Form style={{marginTop: '225px'}}>
                    <FormGroup style={{marginTop: '75px'}}>
                        <Label htmlFor="category" />
                        <Input type="select" name="category" id="exampleSelect"  >
                            <option>Cakes</option>
                            <option>Pie</option>
                            <option>Bread</option>
                            <option>Pastries</option>
                            <option>Cookies</option>
                         </Input>
                         <Button>Search by Category</Button>
                    </FormGroup>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
};


export default ProductIndex;
