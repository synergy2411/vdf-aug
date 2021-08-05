import React from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
    const params = useParams();
    const location = useLocation()
    console.log("Location - ", location);
    const query = new URLSearchParams(location.search)

    console.log("Query ", query.get("name"));
    console.log(params)
    return (
        <div>
            Product Details - {params.productId}<br />
            <Link to="/products/2?name=galaxy">Change Route</Link>
        </div>
    );
}

export default ProductDetail;
