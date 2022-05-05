import { useState } from 'react';
import jsonData from './../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

export default function ProductPage () {
    const [products, setProducts] = useState(jsonData);
    const [query, setQuery] = useState('')
    const [stockState, setStockState] = useState(true)
  
    return(
        <div>
            <h1>IronStore</h1>
            <SearchBar
                setQuery={setQuery}
                stockState={stockState}
                setStockState={setStockState}
            />
            <ProductTable 
                products={products} 
                query={query}
                stockState={stockState}
            />
        </div>    
    )
}
