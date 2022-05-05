import React from 'react'

export default function SearchBar(props) {
    const handleSearchBar = event => {
        props.setQuery(event.target.value)
    }
    const handleStockCheckBox = event => {
        props.setStockState(event.target.checked)
    }
    return (
        <div>
            <form>
                <input type="text" onChange={handleSearchBar} />
                <label>in stock only</label>
                <input type="checkbox" checked={props.stockState} onChange={handleStockCheckBox} />
            </form>
        </div>
    )
}
