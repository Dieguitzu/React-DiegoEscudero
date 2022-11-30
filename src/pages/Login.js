import {useMyContext} from '../app/Provider';

const Login = () =>{
    const [state,setState] = useMyContext();

    return( <input type="text" onChange={ (e) => {setState({ ...state, name:e.target.value})}} />
    );
}

export default Login;