import React from 'react'

const Header = ({ filters, removeFilter, removeAllFilters }) => {
    return (
        <div className="row" style={{ opacity: filters.length ? "1" : "0.01" }}>
            <div className="col-12">
                <div className="filter-tags-c ">
                    <ul id="filter-tags-list">
                        {filters.map((filter => (
                            <li key={filter} className='tag-filter'>
                                <p>{filter}</p>
                                <span onClick={() => removeFilter(filter)} className='close-span'>x</span>
                            </li>
                        )))}
                    </ul>
                    <p onClick={removeAllFilters} className="clear-tags" id="js-clear-tags"> Clear</p>
                </div>
            </div>
        </div>
    )
}

export default Header