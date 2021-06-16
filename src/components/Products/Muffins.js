import React from 'react';


const DisplayMuffins = (props) => {
    console.log(props);
    return(
        <>
        {console.log('hello')}
            {
                props.muffins.map((muffins, key) => {
                    console.log(muffins);
                    console.log(key);
                    return (
                        <tr key={key}>
                            <td>{muffins.nameOfProduct}</td>
                            <td>{muffins.availability}</td>
                            <td>{muffins.description}</td>
                            <td>{muffins.type}</td>
                            <td>{muffins.price}</td>
                            <td>{muffins.photo}</td>
                        </tr>
                    )
                })
            }
    </>
    )      
}

export default DisplayMuffins;