import logo from './logo.svg';

import './App.css';

function App() {
  return (

    <div className = "App">
      <div className="Home" id ="Container">
        <div className = "nav_bar">
          <div className = "left">
            <p>Shirley</p>
          </div>
          <div className = "right">
            <p>home</p>
            <p>about</p>
            <p>work</p>
            <p>contact</p>
          </div> 
        </div>
        <div className = "home-Main">
          <p>test text lol</p>
          {/* <img src={"Group 1.png"} alt="Logo" />; */}

        </div>
 
      </div>
      <div className="About" id ="Container">
      </div>  



    </div>

  );
}

export default App;
