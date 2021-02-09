import React, {useEffect} from 'react';
import javascript from '../assests/javascript.png';
import $ from 'jquery';

const AnimateLogos = () => {

    // const makeNewPosition = () => {
    //     const h = $(window).height() - 50;
    //     const w = $(window).width() - 50;
        
    //     const nh = Math.floor(Math.random() * h);
    //     const nw = Math.floor(Math.random() * w);
        
    //     return [nh,nw]; 
    // }

    const animateDiv = ( myclass : string ) => {
        // const newq = makeNewPosition();
        const newq = [1,2];

        $(myclass).animate({ top: newq[0], left: newq[1] }, 2000,   function(){
            animateDiv(myclass);        
        });
    }

    useEffect(() => {
        animateDiv("javascript");
    },[]);

    return (
        <div className="javascript">
            <img src={javascript} alt="javascript"/>
        </div>
    )
}

export default AnimateLogos
