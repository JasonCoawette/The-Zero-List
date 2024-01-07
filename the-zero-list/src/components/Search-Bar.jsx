import React from 'react';

export default function SearchBar() {
    return (
        <div className="search-bar-container">
            <form onSubmit={handleSearch}>
                <input 
                    name="search" 
                    type="search" 
                    placeholder="Search..."
                    className="search-bar"
                />
            </form>
        </div>
    );
}