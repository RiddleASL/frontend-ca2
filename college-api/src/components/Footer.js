import * as bi from 'react-bootstrap-icons';

const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-neutral text-neutral-content py-10">
            <aside>
                <span className='gap-3 flex text-3 items-center'><bi.MortarboardFill className='text-2'/>NCFK</span>
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
            </footer>
        </>
    )
}

export default Footer