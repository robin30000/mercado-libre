import Search from '../images/ic_Search.png';
import Logo from '../images/Logo_ML.png';
import { useRef } from 'react';
import { useHistory } from 'react-router';


const Navbar = (e) => {

    const inputSearchRef = useRef(null);
    let history = useHistory();

    const handleSearch = () => {
        const value = inputSearchRef.current.value;
        if (value === '') {
            alert("Ingrese un articulo");
            return;
        }
        history.push(`/items?search=${value}`);
    }
    const handleInput = (e) => {
        console.log(e);
    }

    const enterPressed = (e) => {
        var code = e.keyCode || e.which;
        if (code === 13) { //13 is the enter keycode
            const value = inputSearchRef.current.value;
            if (value === '') {
                alert("Ingrese un articulo");
                return;
            }
            history.push(`/items?search=${value}`);
        }
    }

    return (
        <div className="container-fluid">
            <div className="navbar justify-content-center row">
                <div className="col-1 d-xs-none justify-content-start mb-3"><img src={Logo} className="padding-img" alt=""></img></div>
                <div className="col-8 col-xs-12">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control"
                            placeholder="Nunca pares de buscar" ref={inputSearchRef} onInput={handleInput} onKeyPress={enterPressed.bind(this)} />
                        <span className="input-group-text"> <img src={Search} alt="" onClick={handleSearch} /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;


