import React from 'react'

export default function ProductTable(props) {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {props.products
                    .filter(product => {
                        return (
                            product.name.toLowerCase().includes(props.query.toLowerCase())
                        )
                    })
                    .filter(product => {
                        return (
                            product.inStock === props.stockState
                        )
                    })
                    .map(product => {
                        return (
                            <tr key={product.id}>
                                <td style={product.inStock ? {color: 'black'} : {color: 'red'}}>{product.name}</td>
                                <td>{product.price}</td>
                            </tr>
                        )
                })}
            </tbody>
        </table>
    </div>
  )
}
