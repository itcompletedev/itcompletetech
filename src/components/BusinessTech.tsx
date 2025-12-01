import React from "react";
import "./csscustom/styleBtech.css"
import BtechGuy from "./../assets/BusinessTechDesktop.png"

const BusinessTech = () => {
  return (
    <div className="BusinessTech">
        <div className="containerBtech">
        <div className="inner-Btech two">
               <h5>Tecnologia Empresarial</h5>
            </div>
            <div className="inner-Btech one">
              <img id="btechguy" src={BtechGuy}></img>
            </div>
        </div>
    </div>
  );
};

export default BusinessTech;
