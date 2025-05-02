import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "../css/app.css";

import Createbutton from "./components/Createbutton.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Createappoinments from "./pages/Createappoinments.jsx";
import Appointments from "./pages/Appointments.jsx";


const rootElement = document.getElementById("react-root");
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
    <>
    <Createbutton />
    
    </>);
}

const rootfooter = document.getElementById("react-footer");
if (rootfooter) {
    const root = ReactDOM.createRoot(rootfooter);
    root.render(
    <>

    <Footer />
    </>);
}
const rootheader = document.getElementById("react-header");
if (rootheader) {
    const root = ReactDOM.createRoot(rootheader);
    root.render(
    <>

    <Header/>
    </>);
}

const rootlogin = document.getElementById("react-login");
if (rootlogin) {
    const root = ReactDOM.createRoot(rootlogin);
    root.render(
    <>

    <Login/>
    </>);
}

const rootregister = document.getElementById("react-register");
if (rootregister) {
    const root = ReactDOM.createRoot(rootregister);
    root.render(
    <>

    <Register/>
    </>);
}

const rootcreate = document.getElementById("react-create");
if (rootcreate) {
    const root = ReactDOM.createRoot(rootcreate);
    root.render(
    <>

    <Createappoinments/>
    </>);
}


const rootappoinments = document.getElementById("react-appoinment");
if (rootappoinments) {
    const root = ReactDOM.createRoot(rootappoinments);
    root.render(
    <>

    <Appointments/>
    </>);
}


