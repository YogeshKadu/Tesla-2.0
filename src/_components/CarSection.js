import { motion } from "framer-motion";

import oneSM from "../Assets/images/one/one_sm.jfif";
import oneMD from "../Assets/images/one/one_md.jfif";

import twoSM from "../Assets/images/two/two_sm.jfif";
import twoMD from "../Assets/images/two/two_md.jfif";

import threeSM from "../Assets/images/three/three_sm.jfif";
import threeMD from "../Assets/images/three/three_md.jfif";

import fourSM from "../Assets/images/four/four_sm.jfif";
import fourMD from "../Assets/images/four/four_md.jfif";

import fiveSM from "../Assets/images/five/five_sm.jfif";
import fiveMD from "../Assets/images/five/five_md.jfif";




function CarSection1(){
    return(
        <div className="h-screen w-full bg-gray-100/50 relative">
            {/*<div className="absolute title top-32">Model X</div> */ }
            <div className="absolute title">
                Demo
            </div>
            <picture className="object-fill w-full h-full">
                <source media="(max-width: 599px)" srcSet={oneSM} />
                <source media="(min-width: 600px)" srcSet={oneMD} />
                <source media="(min-width: 600px) and (orientation:portrait)" srcSet={oneSM} />
                <img src={oneMD} alt="car1" className="object-cover w-full h-full" />
            </picture>
        </div>
    )
}

function CarSection2(){
    return(
        <div className="h-screen w-full bg-gray-100/50 relative">
            {/*<div className="absolute title top-32">Model X</div> */ }
            <div className="absolute title">
                Demo
            </div>
            <picture className="object-fill w-full h-full">
                <source media="(max-width: 599px)" srcSet={twoSM} />
                <source media="(min-width: 600px)" srcSet={twoMD} />
                <source media="(min-width: 600px) and (orientation:portrait)" srcSet={twoSM} />
                <img src={twoMD} alt="car1" className="object-cover w-full h-full" />
            </picture>
        </div>
    )
}

function CarSection3(){
    return(
        <div className="h-screen w-full bg-gray-100/50 relative">
            <picture className="object-fill w-full h-full">
                <source media="(max-width: 599px)" srcSet={threeSM} />
                <source media="(min-width: 600px)" srcSet={threeMD} />
                <source media="(min-width: 600px) and (orientation:portrait)" srcSet={threeSM} />
                <img src={threeMD} alt="car1" className="object-cover w-full h-full" />
            </picture>
        </div>
    )
}

function CarSection4(){
    return(
        <div className="h-screen w-full bg-gray-100/50 relative">
            <picture className="object-fill w-full h-full">
                <source media="(max-width: 599px)" srcSet={fourSM} />
                <source media="(min-width: 600px)" srcSet={fourMD} />
                <source media="(min-width: 600px) and (orientation:portrait)" srcSet={fourSM} />
                <img src={fourMD} alt="car1" className="object-cover w-full h-full" />
            </picture>
        </div>
    )
}

function CarSection5(){
    return(
        <div className="h-screen w-full bg-gray-100/50 relative">
            <picture className="object-fill w-full h-full">
                <source media="(max-width: 599px)" srcSet={fiveSM} />
                <source media="(min-width: 600px)" srcSet={fiveMD} />
                <source media="(min-width: 600px) and (orientation:portrait)" srcSet={fiveSM} />
                <img src={fiveMD} alt="car1" className="object-cover w-full h-full" />
            </picture>
        </div>
    )
}









export {CarSection1, CarSection2, CarSection3, CarSection4, CarSection5};