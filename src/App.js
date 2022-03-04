import React from "react";
import "./App.css";
import FormComponent from "./components/Form";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <>
      <SnackbarProvider>
        <FormComponent />
      </SnackbarProvider>
    </>
  );
}

export default App;
