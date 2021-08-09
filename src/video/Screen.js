import React from "react";


const Screen = () => {
    return (

        <div className="wrapper">
        <div className="main">
        <div className="px-2 scroll">
            <div className="d-flex align-items-center">
                <div className="text-left pr-1"><img src="https://i.imgur.com/HpF4BFG.jpg" width="30" className="img1" alt="img1" /></div>
                <div className="pr-2 pl-1"> <span className="name">Kishan Rai</span>
                    
                </div>
            </div>
            <div className="d-flex align-items-center text-right justify-content-end ">
                <div className="pr-2"> <span className="name">Techskilla</span>
                    <p className="msg">Development company</p>
                </div>
                <div><img src="https://i.imgur.com/HpF4BFG.jpg" width="30" className="img1" /></div>
            </div>
            <div className="text-center"><span className="between">Call started at 10:47am</span></div>
            <div className="text-center"><span className="between">Call ended at 11:03am</span></div>
            <div className="d-flex align-items-center">
                <div className="text-left pr-1"><img src="https://img.icons8.com/color/40/000000/guest-female.png" width="30" className="img1" /></div>

            </div>
            <div className="d-flex align-items-center text-right justify-content-end ">
            </div>
            <div className="d-flex align-items-center">
                <div className="text-left pr-1"><img  width="30" className="img1" /></div>
            </div>
        </div>
        <nav className="navbar bg-white navbar-expand-sm d-flex justify-content-between"> <input type="text" name="text" className="form-control" placeholder="Type a message.." />
        
            <div className="icondiv d-flex justify-content-end align-content-center text-center ml-2"><i className="fa fa-paperclip icon1"></i><i className="fa fa-arrow-circle-right icon2"></i></div>
            </nav>
            </div>
            </div>
    )
}

export default Screen;