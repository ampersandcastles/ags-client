import React from 'react';


const DisplayMuffins = (props) => {
    console.log(props);
    return(
        <div>
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
    </div>
    )      
}

export default DisplayMuffins;

// import React from 'react';
// import { Table, Button } from 'reactstrap';

// const DisplayMuffins = (props) => {

//     const MuffinMapper = () => {
//         return props.muffins.map((muffins, index) => {
//             return (

//                 <tr key={index}>
//                             <td>{muffins.nameOfProduct}</td>
//                             <td>{muffins.availability}</td>
//                             <td>{muffins.description}</td>
//                             <td>{muffins.type}</td>
//                             <td>{muffins.price}</td>
//                             <td>{muffins.photo}</td>
//                 </tr>
                
//             )
//         })
//     }
//     return(
//         <div>
//             <h3> Muffins</h3>
//             <hr />
//             <Table striped>
//                 <thead>
//                     <tr>
//                         <th>Product Name</th>
//                         <th>Availability</th>
//                         <th>Description</th>
//                         <th>Type</th>
//                         <th>Price</th>
//                         <th>Photo</th>
//                     </tr>
//                 </thead>

//             <div>
//                 {MuffinMapper()}
//             </div>
//             </Table>
//         </div>
//     )
// }
// export default DisplayMuffins;