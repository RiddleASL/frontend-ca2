import * as bi from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-neutral text-neutral-content py-20 mt-auto">
            <div className='container flex gap-32 justify-center'>
                <aside>
                    <Link to={'/'} className='gap-3 flex text-3 items-center'><bi.MortarboardFill className='text-2'/>NCFK</Link>
                    <p>Providing non-existant knowledge since 2023</p>
                </aside> 
                <nav>
                    <header className="footer-title">Social</header> 
                    <div className="grid grid-flow-col gap-4">
                    <div className='flex gap-5 text-3'>
                        <a><bi.Twitter /></a>
                        <a><bi.Instagram /></a>
                        <a><bi.Facebook /></a>
                    </div>
                    </div>
                </nav>
            </div>
            </footer>
        </>
    )
}

export default Footer