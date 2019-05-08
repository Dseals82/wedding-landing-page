import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <a className="navbar-brand" href="#">Logo</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
          </li>
        </ul>
      </div>
      </div>
    </nav>
      <div className="jumbotron jumbotron-fluid ">
        <h1 className="main-text lovely">Sealed With a Kiss</h1>
        <div className="container">
          <h4 className="main-text-two">
            "Cinematic videography and photography..."
          </h4>
        </div>
      </div>
      <div className="card container front-card">
      <h2 className="lovely" id="card-text">Capture The Moment</h2>
      <div className="container">
        <div className="row">
          <div className="col-lg">
            <div className="mb-3" >
                <div className="card-body">
                <i class="fas fa-video"></i>
                  <h5 className="card-title">Cinematic trailer</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
           </div>
          <div className="col-lg">
          <div className="mb-3" >

              <div className="card-body">
              <i class="fas fa-camera-retro"></i>
                <h5 className="card-title">Cinematic Photography</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-lg">
          <div className="mb-3" >

              <div className="card-body">
              <i class="far fa-images"></i>
                <h5 className="card-title">Digital Photo Album</h5>
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
