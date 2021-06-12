import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col} from 'reactstrap';
import APIURL from './../helpers/Environment';
import '../App.css';




const ProductView = (props) => {
    const deleteProduct = (product) => {
        fetch(`${APIURL}/food/${product.id}`, {
            method: 'DELETE', 
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then(() => props.fetchProducts())
    }

    const ProductMapper = () => {
        return props.product.map((product, index) => {
            return (
                <Row>
                    <Col sm="12">
                <Card id="card" key={index} body outline color="secondary">
                    <CardTitle id="cardTitle">{product.nameOfProduct}</CardTitle>
                    <CardImg id="resultimage" src={food.image} alt="Card image cap" />
                    <CardBody>
                     <div id="cardbuttons">
                        <Button onClick={() => {props.editUpdateFood(product); props.updateOn()}}>Update My Products</Button>
                        <Button id="deleteMe" onClick={() => {deleteProduct(product)}}>Delete My Product</Button>
                        </div>
                    </CardBody>
                </Card>
                </Col>
                </Row>
            )
        })
    }

    return(
        <div>
            <h3 id="resultsheading">Artisnal Baked Goods, made from locally sourced ingredients</h3>
            <div>
                {FoodMapper()}
            </div>
        </div>
    )
}

export default ProductView;