import { useState, useEffect } from 'react';

import Fps from './components/FPS';
import Dimensions from './components/Dimensions';

import { debounce } from './utils/utils';

import './App.scss';
import Cube from './components/Cube';
import Fullscreen from './components/Fullscreen';
import RGB from './components/RGB';
import Gradients from './components/Gradients/Gradients';

function App() {
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })

    useEffect(() => {
        const debouncedHandleResize = debounce(() => {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }, 100)

        window.addEventListener('resize', debouncedHandleResize)
        
        return _ => {
            window.removeEventListener('resize', debouncedHandleResize)
        }
    })

    return (
        <div className="App">
            <div className="top-left">
                <Dimensions dimensions={dimensions} />
            </div>
            <div className="top-right">
                <Fullscreen />
                <Fps />
            </div>
            <div className="center">
                <Cube />
                <RGB />
            </div>
            <div className="bottom">
                <Gradients />
            </div>
        </div>
    );
}

export default App;
