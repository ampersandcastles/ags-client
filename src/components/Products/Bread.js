import React from 'react';


const DisplayBread = (props) => {
    console.log(props);
    return(
        <div>
        {console.log('hello')}
            {
                props.bread.map((bread, key) => {
                    console.log(bread);
                    console.log(key);
                    return (
                        <tr key={key}>
                            <td>{bread.nameOfProduct}</td>
                            <td>{bread.availability}</td>
                            <td>{bread.description}</td>
                            <td>{bread.type}</td>
                            <td>{bread.price}</td>
                            <td>{bread.photo}</td>
                        </tr>
                    )
                })
            }
    </div>
    )      
}

export default DisplayBread;