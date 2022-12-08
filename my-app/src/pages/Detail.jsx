import {
    useParams
} from 'react-router-dom';

function Detail () {
    const {nombre, categoria} = useParams();
    return(
        <h1>Detalle producto: {nombre} - {categoria} </h1>
    )
}

export default Detail;