import React from 'react';
import SubContent from './SubContent';
import Advertisement from './Advertisement';

const MainContent = () => {
    return (
    <div className="main-content">
        <div className="subcontent-container">
            <SubContent />
            <SubContent />
            <SubContent />
        </div>
            <Advertisement />
    </div>
);
};

export default MainContent;
