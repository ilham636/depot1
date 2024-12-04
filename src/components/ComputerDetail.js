import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ComputerDetail = () => {
  const { id } = useParams();
  
  // Placeholder data; replace this with actual data fetching logic in a real app
  const computer = { 
    id, 
    name: `Computer ${id}`, 
    price: `${parseInt(id) * 1000} DH`, 
    description: `This is a detailed description for Computer ${id}. It includes all specifications, features, and benefits of using this computer. Perfect for both work and gaming.`,
    image: `/pictures/computer${id}.jpg` // Assumes images are named sequentially like laptop1.jpg, laptop2.jpg, etc.
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img src={computer.image} alt={computer.name} className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
          <h1 className="display-5">{computer.name}</h1>
          <h4 className="text-primary font-weight-bold">{computer.price}</h4>
          <p className="lead">{computer.description}</p>
          <button className="btn btn-primary mb-3">Ajouter au panier</button>
          <div>
            <Link to="/" className="text-primary">Aller vers la page d'accueil</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComputerDetail;
