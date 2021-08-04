import './Dimensions.scss';

const Dimensions = props => {
    const { dimensions } = props;
    return (
        <div className="Dimensions">
            Current dimensions:<br/>
            { dimensions.width } x { dimensions.height }
        </div>
    )
}

export default Dimensions;
