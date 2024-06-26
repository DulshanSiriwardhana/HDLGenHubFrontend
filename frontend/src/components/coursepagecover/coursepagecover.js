import './coursepagecover.css';
import coverimage from '../../images/course-cover-page.png';

const Coursepagecover =()=>{
    return(
        <div className='coursepagecoverconatiner'>
            <img src={coverimage} alt="Course Cover"/> 
        </div>
    );
}

export default Coursepagecover;