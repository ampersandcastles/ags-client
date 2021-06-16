import React, {useState} from 'react';
import {Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import APIURL from './../helpers/Environment';

const ProductCreate = (props) => {
    const [nameOfProduct, setNameOfProduct] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [descriptionOfProduct, setDescriptionOfProduct] = useState('');
 

    const postProduct = (e) => {
        e.preventDefault();

    let url =http://

        const logObj = {
            nameOfProduct: setnameOfProduct,
            image: image,
            category: category,
            descriptionOfProduct:descriptionOfProduct,
           
        }

        fetch(`${APIURL}/product`, {
            method: 'POST',
            body: JSON.stringify(logObj),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
        .then((logData) => {
            console.log(logData);
            setNameOfProduct('');
            setImage('');
            setCategory('');
            setDescriptionOfProduct('');
            props.fetchProduct();
            props.createOff();
        })
    }
        return(
            <> 
            <Modal isOpen={true}>
                <ModalHeader>Add a New Item</ModalHeader>
                <ModalBody>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="nameOfProduct" />
                        <Label for="nameOfProduct">Name of Product Item</Label>
                        <Input name="nameOfProduct" value={nameOfProduct} onChange={(e) => setNameOfProduct(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="image" />
                        <Label for="image">Add Image URL for Food Item</Label>
                        <Input name="image" value={image} onChange={(e) => setImage(e.target.value)} />
                    </FormGroup>
                        <FormGroup>
                        <Label htmlFor="category" />
                        <Label for="exampleSelect">Select a Category</Label>
                        <Input type="select" name="category" id="exampleSelect" value={category} onChange={(e) => setCategory(e.target.value)} >
                            <option>Cakes</option>
                            <option>Pies</option>
                            <option>Bread</option>
                            <option>Pastries</option>
                            <option>Cookies</option>
                        </Input>
                    </FormGroup>
                   
                    <FormGroup>
                        <Label htmlFor="descriptionOfProduct" />
                        <Label for="descriptionOfProduct">Notes</Label>
                        <Input name="descriptionOfProduct" value={descriptionOfProduct} onChange={(e) => setDescriptionOfProduct(e.target.value)} />
                    </FormGroup>
                   
                 
                    <Button color="success" type="submit">Click to Submit</Button>
              
                </ModalBody>
            </Modal>
            </>
    )
}                                             
export default ProductCreate;