import React from 'react';


const DisplayPastries = (props) => {
    console.log(props);
    return(
        <div>
        {console.log('hello')}
            {
                props.pastries.map((pastries, key) => {
                    console.log(pastries);
                    console.log(key);
                    return (
                        <tr key={key}>
                            <td>{pastries.nameOfProduct}</td>
                            <td>{pastries.availability}</td>
                            <td>{pastries.description}</td>
                            <td>{pastries.type}</td>
                            <td>{pastries.price}</td>
                            <td>{pastries.photo}</td>
                        </tr>
                    )
                })
            }
    </div>
    )      
}

export default DisplayPastries;