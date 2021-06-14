import React, {useState} from 'react';
import {Modal, ModalHeader,ModalBody, Label, Input, Button, Form, FormGroup} from 'reactstrap';
import APIURL from './../helpers/Environment';

const FoodEdit = (props) => {
    const [editName, setEditName] = useState(props.productToUpdate.nameOfProduct);
    const [editIma, setEditIma] = useState(props.productToUpdate.image);
       const [editCat, setEditCat] = useState(props.productToUpdate.category);
       const [editDesc, setEditDesc] = useState(props.productToUpdate.descriptionOfProduct);
   
    const productUpdate = (event, product) => {
        event.preventDefault(e);
        fetch(`${APIURL}/product/${props.productToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({nameOfProduct: editName, image: editIma, editLin, category: editCat, descriptionOfProduct: editDesc}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => {
            props.fetchProducts();
            props.updateOff();
         })
    }
    return(
        <Modal isOpen={true}>
            <ModalHeader>Edit an item</ModalHeader>
            <ModalBody>
                <Form onSubmit={productUpdate}>{/**triggering the productUpdate function when we submit the edit form */}
                    <FormGroup>
                        <Label htmlFor="name">Edit Name:</Label>
                        <Input name="name" value={editName} onChange={(e) => setEditName(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="image">Edit Image URL:</Label>
                        <Input name="image" value={editIma} onChange={(e) => setEditIma(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="category">Edit Category:</Label>
                        <Input name="category" value={editCat} onChange={(e) => setEditCat(e.target.value)}>
                            <option>Cakes</option>
                            <option>Pies</option>
                            <option>Breads</option>
                            <option>Pastries</option>
                            <option>Cookies</option>
                            </Input>
                    </FormGroup>
                    <FormGroup>
                    <Label htmlFor="descriptionOfProduct">Edit Description:</Label>
                        <Input name="descriptionOfProduct" value={editDesc} onChange={(e) => setEditDesc(e.target.value)} />
                    </FormGroup>
                   
                    <Button type="submit">Update Product</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default ProductEdit;
