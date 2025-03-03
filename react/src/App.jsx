import TodoNew from "./components/todo/TodoNew";
import TodoData from "./components/todo/TodoData";
import "./components/todo/todo.css";
import reactLogo from "./assets/react.svg";
import { useState } from "react";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import TodoApp from "./components/todo/TodoApp";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />

      <Outlet />
      <Footer />
    </>
  );
};
export default App;
