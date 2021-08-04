import './Cube.scss';

const Cube = () => {
    return (
        <div className="Cube">
            <div className="container">
                <div id="cube">
                    <div className="face front"></div>
                    <div className="face back"></div>
                    <div className="face right"></div>
                    <div className="face left"></div>
                    <div className="face top"></div>
                    <div className="face bottom"></div>
                </div>
            </div>
        </div>
    )
}

export default Cube;
