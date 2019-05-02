import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
          </li>
        </ul>
      </div>
    </nav>
      <div className="jumbotron jumbotron-fluid ">
        <h1 className="main-text">Some Text Goes Here</h1>
        <div className="container">
          <h4 className="main-text-two">
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
          </h4>
        </div>
      </div>
      <div className="card container front-card">
      <h3 id="card-text">Capture The Moment</h3>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="mb-3" >
                <div className="card-body">
                <i class="fas fa-heart"></i>
                  <h5 className="card-title">Light card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
           </div>
          <div className="col-sm">
          <div className="mb-3" >

              <div className="card-body">
              <i class="fas fa-heart"></i>
                <h5 className="card-title">Light card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-sm">
          <div className="mb-3" >

              <div className="card-body">
              <i class="fas fa-heart"></i>
                <h5 className="card-title">Light card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
