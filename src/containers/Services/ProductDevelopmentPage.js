import React from 'react';

function ProductDevelopmentPage(props) {
    return(
        <div className={'product-development-page-container-'+props.status}>
            <h1> Product Development Page </h1>
        </div>
    );
}

export default ProductDevelopmentPage;