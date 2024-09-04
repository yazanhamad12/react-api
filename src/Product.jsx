import React, { useEffect, useState } from 'react';

export default function product() {
    const [products, setProducts] = useState([]);
    
    const getProducts = async() => {
        const response = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
        const data = await response.json();
        setProducts(data.recipes);
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="text-center">
        <div className="container">
          <div className="row">
            {products.map(product => (
              <div className="col-md-4 mb-4" key={product.recipe_id}>
                <div className="card h-100">
                  <div className="card-header">
                    <h5 className="card-title">{product.title}</h5>
                  </div>
                  <img src={product.image_url} className="card-img-top" alt={product.title} />
                  <div className="card-body">
                    <p className="card-text">This is a brief description of the product.</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">Footer content here</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    );
}
