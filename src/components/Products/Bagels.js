import React, {useState} from 'react';
// import FetchBagels from "/fetchBagels";


const DisplayBagels = (props) => {
    console.log(props);
    return(
        <div>
              <h1>How deep is this pit of dispair</h1>

        {console.log('hello')}
            {
                props.bagels.map((bagels, key) => {
                    console.log(bagels);
                    console.log(key);
                    return (
                        <tr key={key}>
                            <td>{bagels.nameOfProduct}</td>
                            <td>{bagels.availability}</td>
                            <td>{bagels.description}</td>
                            <td>{bagels.type}</td>
                            <td>{bagels.price}</td>
                            <td>{bagels.photo}</td>
                        </tr>
                    )
                })
            }
    </div>
    )      
}

export default DisplayBagels;