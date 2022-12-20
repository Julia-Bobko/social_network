import s from '../Paginator/Paginator.module.css';
import React, {useState} from 'react'
let Paginator = ({ totalCount, pageSize, currentPage, setPage, portionSize = 5 }) => {

    let countPage = Math.ceil(totalCount / pageSize);
    let pages = [];

    for (var i = 1; i <= countPage; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(countPage / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div>
        {
            portionNumber > 1 &&
            <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>
        }
        {
            pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <span className={((currentPage) === p && s.selectedPage) +' '+ s.paginator}
                    key={p} onClick={() => { setPage(p) }}>{p} 
                    </span>
            })
        }
        { portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }

    </div>
}

export default Paginator;