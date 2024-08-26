import React from "react";

function Logo (props) {
    return (
        <div className='freecodecamp-logo-contenedor'>
        <img 
          src={props.src}
          className='freecodecamp-logo'
          alt={props.alt}
        />
      </div>
    )
}

export default Logo;