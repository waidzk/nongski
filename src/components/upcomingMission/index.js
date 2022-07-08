function UpcomingMission(){
    return(
        <div className="upcomingMission bg-white rounded-3xl p-4">
            <div className="title text-center m-5 p-2">
                <h1 className="text-2xl font-bold nunito-sans">Coming Project</h1>
            </div>
            <div className="flex md:flex-row flex-col-reverse justify-center w-full">
                <div className="caption flex flex-col justify-center items-center md:w-1/2 w-full p-4">
                    <div>
                        <h2 className="title-caption text-xl font-semibold nunito-sans">Small effort big change.</h2>
                        <p className="description w-64 text-base nunito">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>
                    </div>
                    <div className="process-section p-3 flex flex-col items-center">
                        <p className="text-sm text-slate-300 nunito">40%</p>
                        <div className="process bg-slate-100 h-2 w-64 rounded-full">
                            <div className="processed bg-red-600 h-2 w-2/5 rounded-full"></div>
                        </div>
                    </div>
                    <a href="/" className="border border-red-600 p-2 m-2 w-64 rounded-full text-center text-red-600 hover:text-white hover:bg-red-600 duration-100 nunito" >Donasi</a>
                </div>
                <div className="photo md:w-1/2 w-full flex justify-center">
                    <img className="coming-img w-4/5" src="https://images.unsplash.com/flagged/photo-1567116681178-c326fa4e2c8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoaWxkcmVuJTIwcGxheWluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
            </div>
        </div>
    )
}

export default UpcomingMission;