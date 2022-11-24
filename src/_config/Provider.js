import { useState, useEffect, useContext} from 'react';
import Context, { defaultSpeedDialContext } from './Context';



const Provider = props => {
    
const [menuIcon, setMenuIcon] = useState(false);

// const [user, setUser] = useState(null);

const handleClick = event => {
    setMenuIcon(current => !current);
};


return (
    <Context.Provider value={[ menuIcon: menuIcon, handleClick: handleClick ]}>
      {props.children}
    </Context.Provider>
);

}

export default Provider;


