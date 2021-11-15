import React from 'react';

import classes from './Searchbar.module.css';

const Searchbar = ({search, change}) => {
    return ( 
        
            <input className={classes.Searchbar} type='text' value={search} placeholder='Search for a movie' onChange={change}/>
        
     );
}
 
export default Searchbar;