import './style.css';

export default function Nav() {
  return (
    <div className='NavWrapper'>
        <nav className='NavPanel'>
            <div className='MenuButton'>
                <img src="./public/images/menu.png" alt="Menu" />
            </div>
            <div className='NavInfo'>
                <div>
                    <div className='Search'></div>
                    <div className='Notification'></div>
                    <div className='Email'></div>
                    <div className='UserProfile'></div>
                </div>
            </div>

        </nav>
    </div>
  );
}
