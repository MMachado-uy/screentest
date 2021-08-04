import { useState } from 'react';

import useInterval from '../../utils/useInterval';

const getFPS = () =>
    new Promise(resolve =>
        requestAnimationFrame(t1 =>
            requestAnimationFrame(t2 => resolve(1000 / (t2 - t1)))
        )
    )

const Fps = () => {
    const [fps, setFPS] = useState('N/A');

    useInterval(() => {
        const calc = async () => {
            const newfps = await getFPS();
            setFPS(newfps.toFixed(2))
        }

        calc();
    }, 5000)

    return (
        <div className="Fps">{fps} fps</div>
    )
}

export default Fps;
