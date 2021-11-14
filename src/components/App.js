import React from "react";
// import './App.css';
import Header from "./Header.js";
import Footer from "./Footer.js";
import Note from "./Note.js";


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Header />
        <Note />
        <Footer />
      </header>
    </div>
    
  );
}


// function App() {
//   return (
//     <div>
//       <h1 className="heading">My Contacts</h1>
//       <div className="card">
//         <div className="top">
//           <h2>Beyonce</h2>
//           <img
//             src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
//             alt="avatar_img"
//           />
//         </div>
//         <div className="bottom">
//           <p>+123 456 789</p>
//           <p>b@beyonce.com</p>
//         </div>
//       </div>
//     </div>
//   );
// }



export default App;
