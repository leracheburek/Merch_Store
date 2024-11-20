export default function Nav() {
  return (
    <div className=''>
        <nav className='bg-blue-800 flex justify-between w-100%'>
            <div className='w-10%'>
                <img src="./images/menu.png" alt="menu" />
            </div>
            <div className='flex'>
                <div className="flex justify-evenly w-50%">
                    <div className=''><img src="./images/search.png" alt="search" /></div>
                    <div className=''><img src="./images/email.png" alt="email" /></div>
                    <div className=''><img src="./images/notification.png" alt="notification" /></div>
                    <div className=''><img src="./images/user.png" alt="user" /></div>
                </div>
            </div>

        </nav>
    </div>
  );
}
