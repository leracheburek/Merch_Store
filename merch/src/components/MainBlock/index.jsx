import './style.css'
import MainButton from '../ButtonMain'
import mainImage from '../../assets/img/pic-main-block.jpg'

function MainBlock() {
    return (
        <div id='mainblock'>
            <img className='img-main-block' src={mainImage} alt="pic-main-block" />
            <div className="content-main">
                <h1 className='header-main-block'>Твій кастомний дизайн</h1>
                <h3 className='text-main-block'>створи свою оригінальну футболку за допомогою нашого <span>ОНЛАЙН-КОНСТРУКТОРА</span></h3>
                <MainButton/>
            </div>
        </div> 
    );
}  

export default MainBlock;