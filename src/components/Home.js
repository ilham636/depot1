import React from 'react';
import { Link } from 'react-router-dom';
 // Add custom CSS file for extra styling

const Home = () => {
  const computers = [
    { id: 1, name: 'PC Portable Gamer HP VICTUS', price: '7490 DH', image: '/pictures/computer1.jpg' },
    { id: 2, name: 'PC Portable Gamer HP VICTUS', price: '2190 DH', image: '/pictures/computer2.jpg' },
    { id: 3, name: 'Pc Portable Chromebook Acer', price: '3640 DH', image: '/pictures/computer3.jpg' },
    { id: 4, name: 'PC Portable - HUAWEI', price: '1270 DH', image: '/pictures/computer4.jpg' },
  ];

  return (
    <div className="container mt-4">
      <h1 className="text-center">Ordinateurs portables</h1>
      <div className="row">
        {computers.map((computer) => (
          <div className="col-md-3 mb-4" key={computer.id}>
            <div className="card h-100 shadow-sm">
              <Link to={`/computer/${computer.id}`}>
                <img src={computer.image} className="card-img-top" alt={computer.name} />
              </Link>
              <div className="card-body text-center">
                <h5 className="card-title">{computer.name}</h5>
                <p className="card-text text-primary font-weight-bold">{computer.price}</p>
                <button className="btn btn-outline-primary btn-sm">Ajouter au panier</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
