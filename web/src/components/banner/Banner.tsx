import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import './Banner.css'
import Search from '../search/Search'

import { useHistory } from "react-router-dom";

function Banner() {
    let navigate = useHistory(); 
    
    const [showSearch, setShowSearch] = useState(false);


    return (
        <div className='banner'>
            <div className='banner__search'>
                {showSearch && <Search />}

                <Button
                    onClick={() => setShowSearch(!showSearch)}
                    className='banner__searchButton'
                    variant='outlined'
                >
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
            </div>
            <div className='banner__info'>
                <div className='banner__infotext'>

                <h1 className="text-2xl text-white font-black">Find the perfect contact for you!</h1>
                <h5>
                    With WooNomadWoo you won't have "perrengues"  as a digital nomad.
                </h5>
                <Button onClick={() =>history.push('/search')} variant='outlined'>Explore cities 🌍</Button>
                </div>
            </div>
        </div>
    )

}

export default Banner