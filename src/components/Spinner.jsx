import {ScaleLoader} from 'react-spinners'

const Spinner = () => {
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-136px)]'>
            <ScaleLoader size={100} color="pink" />
        </div>
    );
};

export default Spinner;