function AboutUs(){
    return(
        <div className="aboutUS p-4">
            <div className="title text-center md:m-5 p-2">
                <h1 className="text-2xl font-bold nunito-sans">About Us</h1>
            </div>
            <div className="content flex md:flex-col flex-row-reverse items-center">
                <div className="photo flex flex-col md:items-center w-full">
                    <img className="md:w-8/12 w-full md:h-64 h-1/2 object-cover object-center m-1" src="https://images.unsplash.com/photo-1569292567777-e5d61a759322?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGNvbW11bml0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    <img className="md:w-8/12 w-full md:h-64 h-1/2 object-cover object-center m-1" src="https://images.unsplash.com/photo-1444210971048-6130cf0c46cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNvbW11bml0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className="flex md:flex-row flex-col md:items-center md:w-8/12 p-2 w-full">
                    <div className="md:text-right md:m-2 md:p-2 mb-1">
                        <h2 className="md:text-6xl text-3xl font-bold poppins italic text-red-600">NONGSKI</h2>
                        <p className="md:text-2xl text-xs font-bold leading-3">Never stop being kind</p>
                    </div>
                    <div className="nunito md:m-2 md:p-2">
                        <p className="text-xs md:w-3/4 w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;