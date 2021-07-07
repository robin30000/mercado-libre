import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import shipping from '../images/ic_shipping.png'


const ResultPage = () => {
    const location = useLocation();
    const [items, setItems] = useState([]);
    const search = location.search.split('=')[1];

    const limit = 4;
    useEffect(() => {
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`)
            .then(res => res.json())
            .then(data => {
                setItems(data.results.slice(0, limit));
            }).catch(e => {
                console.log(e)
                alert('Ha ocurrido un error intentalo nuevamente ' + e)
            })

    }, [location.search]);


    return (

        <div className="container-fluid silver">
            <div className="separator"></div>
            <div className="container pt-3 white">
                {items.map(product => {
                    const url = `/items/${product.id}/description`;
                    let shippin = product.shipping.free_shipping ? shipping : '';
                    return (
                        <div className="row justify-content-md-center mt-3">
                            
                            <div className="col-sm-2 col-xs-4">
                                <Link to={url}>
                                    <img src={product.thumbnail}
                                        key={product.id}
                                        alt={product.title}
                                        className="img-responsive"
                                        width="110px"
                                        height="auto" />
                                </Link>
                            </div>
                            <div className="col-sm-4 col-xs-4">
                                <p className="mt-5">$ {product.price.toLocaleString()} <img src={shippin} /></p>
                                {product.title}</div>
                            <div className="col-sm-1 col-xs-1"></div>
                            <div className="col-sm-2 col-xs-3 align-self-center align-self-end" style={{ 'fontSize': '12px' }}>{product.address.state_name}</div>

                            <br></br><hr className="mt-5"></hr>
                        </div>
                    )
                })}
            </div>
            <div className="separator2"></div>
        </div>
    )
}


export default ResultPage;