import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const params = useParams();
    const location = useLocation()
    console.log("Location - ", location);
    const query = new URLSearchParams(location.search)

    console.log("Query ", query.get("name"));
    console.log(params)
    return (
        <div>
            Product Details - {params.productId}
            
        </div>
    );
}

export default ProductDetail;
