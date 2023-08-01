import React from 'react';
import preloader from "../../../assets/images/Double Ring-1.5s-191px (1).svg";

type PreloaderPropsType = {

}

const Preloader = (props:PreloaderPropsType) => {
    return (
        <div>
            <img src={preloader}/>
        </div>
    );
};

export default Preloader;