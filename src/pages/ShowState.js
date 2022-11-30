import { useContext } from 'react';
import { useMyContext} from '../app/Provider';

const ShowState = () => {
    const [state, setState] = useMyContext();
    return ( <p>{state.name}</p> );
}

export default ShowState;