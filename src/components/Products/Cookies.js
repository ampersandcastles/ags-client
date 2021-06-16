import React from 'react';


const DisplayCookies = (props) => {
    console.log(props);
    return(
        <div>
        {console.log('hello')}
            {
                props.cookies.map((cookies, key) => {
                    console.log(cookies);
                    console.log(key);
                    return (
                        <tr key={key}>
                            <td>{cookies.nameOfProduct}</td>
                            <td>{cookies.availability}</td>
                            <td>{cookies.description}</td>
                            <td>{cookies.type}</td>
                            <td>{cookies.price}</td>
                            <td>{cookies.photo}</td>
                        </tr>
                    )
                })
            }
    </div>
    )      
}

export default DisplayCookies;