import React from 'react';
import { Authcontext } from './Authcontext';

const Authprovider = ({children}) => {


    const userInfo ={
        email : "xunaie@gmail.com"
    }

    return (
        <Authcontext value={userInfo}>
            {children}
        </Authcontext>
    );
};

export default Authprovider;