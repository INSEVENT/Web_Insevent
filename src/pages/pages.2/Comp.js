import { useEffect } from 'react';
import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function Comp() {
    const alertClicked = () => {
        alert('You clicked the third ListGroupItem');
    };

    return (
        <div className='ListGroup'>
            <ListGroup.Item action className='ListGroup-item'>Poster</ListGroup.Item>
            <ListGroup.Item action className='ListGroup-item'>Video Kreatif</ListGroup.Item>
            <ListGroup.Item action className='ListGroup-item'>UI UX</ListGroup.Item>
            <ListGroup.Item action className='ListGroup-item'>Mobile Legends</ListGroup.Item>
            <ListGroup.Item action className='ListGroup-item'>Modern Dance</ListGroup.Item>
            <ListGroup.Item action className='ListGroup-item'>Tari Traditional</ListGroup.Item>
            <ListGroup.Item action className='ListGroup-item'>Akustik</ListGroup.Item>
        </div>
    );
}

export default Comp;