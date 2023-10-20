import logo from '../Assets/images/logo.svg';

function Header(){
    return (
        <div className="sticky z-20 top-0">
            <div className="bg-white text-sm p-4 text-gray-600 text-center">
                $7,500 tax credit is anticipated to be reduced for Model 3. Take delivery now.&nbsp; <a href={'https://www.google.com'} className='underline transition-all ease-in-out duration-1000 hover:decoration-2'>Learn More</a>
            </div>
            <header className=" flex flex-row w-full justify-between items-center h-14 text-[#171a20]/80 text-sm font-extrabold font-gotham">
                {/* <span className="bg-gray-300/10 h-0 w-20 absolute left-10"></span> */}
                <h1 className="flex pl-8">
                    <a href="#demo" className="inline-flex px-4">
                        <img src={logo} className="w-28" alt="logo" />
                    </a>
                </h1>
                <div className="hidden lg:flex">
                    <a href="#model1" className="inline-flex px-4 py-2"><span>Model S</span></a>
                    <a href="#model2" className="inline-flex px-4 py-2"><span>Model 3</span></a>
                    <a href="#model3" className="inline-flex px-4 py-2"><span>Model X</span></a>
                    <a href="#model4" className="inline-flex px-4 py-2"><span>Model Y</span></a>
                    <a href="#model5" className="inline-flex px-4 py-2"><span>Solar Roof</span></a>
                    <a href="#model16" className="inline-flex px-4 py-2"><span>Solar Panels</span></a>
                </div>
                <div className="flex pr-8">
                    <a href="#demo" className="hidden lg:inline-flex px-4 py-2"><span>Shop</span></a>
                    <a href="#demo" className="hidden lg:inline-flex px-4 py-2"><span>Account</span></a>
                    <a href="#demo" className="inline-flex px-4 py-2"><span>Menu</span></a>
                </div>
            </header>
        </div>
    )
}
export default Header;