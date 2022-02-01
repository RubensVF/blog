import React from 'react';
import MyAppBar from '../components/MyAppBar';
import Footer from '../components/Footer';


const Main = ({children}) => {
    
    return (
        <div style={{paddingTop: '7vh'}}>
            <MyAppBar/>  
            {children}
          <Footer/>
        </div>
    );
};

export default Main;