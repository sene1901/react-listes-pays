















import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">🌍 GeoApp</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Accueil</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/informations">Informations</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;












// import React from "react";
// import logo from "./assets/logo.png";
// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-dark py-3">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#"><img src={logo} alt="Logo" style={{ width: "200px", height: "auto" }}/></a>
//         <button
//           className="navbar-toggler bg-white"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-link active text-white" aria-current="page" href="#">
//               Accueil
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-white" href="#">Information</a>
//             </li>
          
            
//           </ul>
//           <form className="d-flex">
//             <input
//               className="form-control me-2 w-50"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
            
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
