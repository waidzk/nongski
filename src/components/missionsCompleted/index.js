function MissionsCompleted() {
    return(
        <div className="missionCompleted rounded-3xl p-4">
            <div className="title text-center m-5 p-2">
                <h1 className="text-2xl font-bold nunito-sans">Missions Completed</h1>
                <p className="font-xs text-slate-300">Latest</p>
            </div>
            <div className="flex md:flex-row flex-col justify-center">
                <div className="photo md:w-3/4 w-full flex md:justify-end justify-center">
                    <img className="completedMission-img w-4/5 " src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpbGQlMjBwbGF5aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className="caption flex md:flex-col justify-center items-start md:w-1/2 w-full p-4">
                    <div>
                        <h2 className="title-caption text-xl font-semibold nunito-sans">Yayasan Bunda Kasih.</h2>
                        <p className="description w-64 text-base nunito">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>
                        <a className="flex items-center text-red-600 font-xs" href="/">see more <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MissionsCompleted;