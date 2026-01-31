import React from 'react';

const FilterApps = ({c}) => {

    console.log(c);
    return (
        <div>
             <input type="search" placeholder="Type here" className="input"  onChange={(e) => setInput(e.target.value)}/>
        </div>
    );
};

export default FilterApps;