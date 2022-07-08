function Navigation() {
    return(
    <div className="navigation nunito flex flex-row justify-between items-center fixed backdrop-blur-sm w-full">
        <div className="logo ml-2 p-4 md:ml-10">
            <h1 className="text-xl font-bold text-red-600">Nongski</h1>
        </div>
        <div className="hidden md:flex">
            <ul className="items-navigation md:flex flex-row w-96">
                <li className="m-auto"><a href="/#">Projects</a></li>
                <li className="m-auto"><a href="/#">Completed</a></li>
                <li className="m-auto"><a href="/#">About us</a></li>
            </ul>
            <div className="donasi-button md:flex justify-center items-center bg-red-600 text-white p-2 mr-10 h-20 rounded-b-3xl"><a href="/#">Donasi</a></div>
        </div>
        <div className="menu md:hidden block mr-2 p-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </div>
    </div>
    )
}
export default Navigation;