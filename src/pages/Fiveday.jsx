import React from 'react'
import {useParams} from 'react-router-dom';

function Sevenday() {
    const apikey = 'YH5hXE5XEWrZOADpUJASEA06gtoYsBj4';

    constparms = useParms();
    console.log(params);

    const url = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/350128?apikey=YH5hXE5XEWrZOADpUJASEA06gtoYsBj4"

    console.log(url)

    return (
        <div>Sevenday</div>
    )
}

export default Sevenday