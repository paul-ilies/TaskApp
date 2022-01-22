import React from 'react';
import "./css/footer.css";

const Footer = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    const at = `\u{0040}`;
    return (
        <div className='footer'>
            <p>This project was created from scratch by <br /> <span>Ilies Paul Daniel</span>  <br /><span>{`Copyright ${at} ${currentYear}`}</span>  </p>
        </div>
    )
}

export default Footer
