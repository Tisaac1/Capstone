import React from 'react'
import {useParams} from 'react-router-dom';

function Sevenday() {
    const apikey = 'YH5hXE5XEWrZOADpUJASEA06gtoYsBj4';

    constparms = useParms();
    console.log(params);

    const url = "http://api.accuweather.com/locations/v1/search?q=san&apikey={apikey}"
    console.log(url)

    return (
        <div>Sevenday</div>
    )
}

export default Sevenday