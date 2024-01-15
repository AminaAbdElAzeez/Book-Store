import ErrorImg from '../../images/error.png';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

function ErrorPage() {
    return (
        <div className='error'>
            <div className='container'>
                <div className='error-wrapper'>
                    <div className='error-img'>
                        <img src={ErrorImg} alt='Error-img'/>
                    </div>
                    <div className='error-info'>
                        <h2 className='error-title'>" page not found "</h2>
                        <p>we couldn't find the page you were looking for..!</p>
                        <Link to='/' className='error-link'>back to home</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage