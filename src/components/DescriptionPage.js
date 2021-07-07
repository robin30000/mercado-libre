
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DescriptionPage = () => {


    const { id } = useParams();
    //const url = `https://api.mercadolibre.com/items/${id}`;
    const [produc, setProduc] = useState(null);
    useEffect(() => {
        fetch(`https://api.mercadolibre.com/items/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduc(data);
            })
    }, [id]);

    return (

        <div className="container-fluid silver" style={{ 'background': 'silver' }}>
            <div className="separator"></div>
            <div className="container pt-5 descriptions">
                <div className="row justify-content-md-center">

                    <div className="col-sm-6 col-xs-12">
                        {produc ? <img src={produc.pictures[0].url} alt="" width="auto" height="200px" /> : 'Cargando'}
                    </div>
                    <div className="col-sm-2 col-xs-12">
                        <span>{produc ? produc.condition : 'Cargando'} - {produc ? produc.sold_quantity : 'Cargando'} Vendidos</span><br></br>
                        <span><b>{produc ? produc.title : 'Cargando'}</b></span><br></br>
                        <h3>$ {produc ? produc.price.toLocaleString() : 'Cargando'} </h3><br></br>
                        <div className="d-grid gap-2">
                            <button className="btn btn-primary">Comprar</button>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-center mt-3">
                    <div className="col-8 col-xs-12">
                        <h2>Descripción del producto</h2><br></br>
                        <span>
                            {produc ? produc.descriptions[0].id : 'Cargando'}
                        </span>
                    </div>

                </div>
            </div>
            <div className="separator2"></div>
        </div>

    )

}

export default DescriptionPage;