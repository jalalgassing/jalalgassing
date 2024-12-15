"use client";
import {store} from "@/redux/store";
import React from 'react';
import { Provider } from "react-redux";

const App = ({childern}: {childern: React.ReactNode}) => {
  return <Provider store={store}>{childern}</Provider>;
};

export default App;