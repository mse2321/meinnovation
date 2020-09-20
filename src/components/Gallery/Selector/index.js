import React, { useState, useEffect } from 'react';

const Selector = (props) => {
    const { index, changeProject, selectedIndex } = props;
    const [activeSelector, setActiveSelector] = useState(false);

    useEffect(() => {
        parseInt(selectedIndex) === index ? setActiveSelector(true) : setActiveSelector(false);
    }, [selectedIndex, index]);

    return (
        <li key={index} data-item={index} className={activeSelector ? "active" : ""} onClick={(e) => changeProject(e)}>&#8226;</li>   
    );
}

export default Selector;

