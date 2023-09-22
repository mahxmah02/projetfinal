import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/LoginIN/Login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout, serveurCurrent } from "./JS/userSlice/userSlice";
import Profil from "./components/Profil";
import PrivateRoute from "./routes/PrivateRoute";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar"
import Card from './components/Card-Commande/Card'
import List from "./components/Card-Commande/List";
import Gestionserveur from "./components/Dashboard-admin/Navbar-admin/Gestionserveur";
import ProfilUsers from "./components/Dashboard-admin/ProfilUsers";
import Profiladmin from "./components/Dashboard-admin/Navbar-admin/Profiladmin";
function App() {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      dispatch(serveurCurrent());
    }
  }, []);
  return (
    <div className="App">
      <div className="header">
        {isAuth ? (
          <button
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}
          >
            Logout
          </button>
        ) : null}
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/list" element={<List />} />
                 <Route path="/dashbord" element={<Profiladmin  />} />
          <Route path="/produits" element={< ProfilUsers/>} />
          <Route path="/users" element={< Gestionserveur  />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profil" element={<Profil />} />
        </Route>{" "}
      </Routes>
    </div>
  );
}

export default App;
