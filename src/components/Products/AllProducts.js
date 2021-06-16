import React from 'react';


const DisplayProducts = (props) => {
    console.log(props);

    return (
        <>
            {
                props.product.map((product, key) => {
                    console.log(product);
                return(

                    <tr key={key}>
                        <td>{product.nameOfProduct}</td>
                        <td>{product.availability}</td>
                        <td>{product.description}</td>
                        <td>{product.type}</td>
                        <td>{product.price}</td>
                        <td>{product.photo}</td>
                    </tr>
                    )

            })
            }
        </>
    )
}

export default DisplayProducts;