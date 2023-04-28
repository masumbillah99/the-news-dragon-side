import React from 'react';
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const QZone = () => {
    return (
        <div className='bg-secondary bg-opacity-10 py-4 rounded'>
            <h3 className='text-left ps-3 mb-3'>Q-Zone</h3>
            <div className='text-center'>
                <img src={qZone1} alt="q-zone picture" />
                <img src={qZone2} alt="q-zone picture" />
                <img src={qZone3} alt="q-zone picture" />
            </div>
        </div>
    );
};

export default QZone;