import './challenges.css';
import { useNavigate } from 'react-router';

const Challenges=()=>{
    const navigate = useNavigate();

    const handleOpenplayground=()=>{
        navigate('/playground');
    }

    return(
        <div className='challenges-page-container mt-20'>
            <div className='challenges-page-playground'>
                <button onClick={handleOpenplayground}>Go to Play Ground</button>
            </div>
            <dv className='challenges-page-challenges-container'>
                <div className='assigned-challenges-container'>
                </div>       
                <div className='public-challenges-container'>

                </div>
            </dv>
        </div>
    );
}

export default Challenges;