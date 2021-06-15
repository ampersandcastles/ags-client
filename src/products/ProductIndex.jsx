import React, {useState, useEffect} from 'react';
// import {Container, Row, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
// import ProductCreate from './ProductCreate';
import ProductIndex from './ProductIndex';
import APIURL from '../helpers/Environment';
const ProductIndex = (props) => {
 var [products, setProducts] = useState([]);
    var [updateActive, setUpdateActive] = useState(false);
  var [productToUpdate, setProductToUpdate] = useState({}); 
   var [createActive, setCreateActive] = useState(false);
   var [productToCreate, setProductToCreate] = useState({});

    // const editUpdateProduct = (product) => {
    //     setProductToUpdate(product);
    //     console.log(product);
    }  
    const updateOn = () => {
        setUpdateActive(true);
    }
    const updateOff = () => {
        setUpdateActive(false)
    }
    // const createOn = () => {
    //     setCreateActive(true);
    // }
    // const createOff = () => {
    //     setCreateActive(false);
    }
             
    const fetchProducts = () => {
        fetch(`${APIURL}/product`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            }
            )
        }).then((res) => res.json())
        .then((logData) => {
            setProduct(logData.logs);
            console.log(logData);
        })
    };
        
    useEffect(() => {
        fetchProducts();
    }, [])



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
                {/* <Form style={{marginTop: '225px'}}>
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
                    </Form> */}
                </Col>
            </Row>
        </Container>
    )
};


export default ProductIndex;
