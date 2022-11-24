import React, { createContext } from "react";



export const defaultSpeedDialContext = [false, () => {
}];

const Context = createContext(defaultSpeedDialContext);

export default Context;
