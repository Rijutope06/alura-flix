import { FillCircleLoader } from 'react-loaders-kit';
import './Loading.css';

const Loading = () => {


    const loaderProps = {
        loading: true,
        size: 100,
        duration: 1,
    };

    return (
        <div className="loading-container">
            <FillCircleLoader {...loaderProps}/>
        </div>
    );
};

export default Loading;
