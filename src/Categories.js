import React from 'react';

const Categories = ({filterItems , categories}) => {
    return <div className="btn-container">
    {categories.map((category) => {
            const {Category} = category;

                <button className="filter-btn" onClick={() => {
                    filterItems(Category);
                }}>
                    {Category}
                </button>
    })}
            </div>

    }
    ;

export default Categories;