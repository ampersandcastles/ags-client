
import React from 'react';

const DisplayBread = (props) => {
    console.log(props);
    return(
        <>
            {
                props.product.map((bread,key) => {
                    return(
                        <tr key={key}>
                            <td>{bread.nameOfProduct}</td>
                            {/* <td>{bread.baseOfbread}</td>
                            <td>{bread.crust}</td>
                            <td>{bread.timeToBake}</td>
                            <td>{bread.servings}</td>
                            <td>{bread.ratings}</td> */}
                        </tr>
                    )
                })
            }
        </>
    )
}
export default DisplayPie;