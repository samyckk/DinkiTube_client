import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { loginSuccess } from "../redux/userSlice";
import { useSelector } from "react-redux";

const Sidebar = ()=>{

    const {userDetails}  = useSelector(state=>state.user);

    const dispatch = useDispatch();
    const handleLogout = ()=>{
        dispatch(loginSuccess(null));
    }

    return(
        <div id="sidebar" className="flex h-[740px] w-44 bg-[#212121] mt-12 fixed top-0">
                <div id="list" className="flex flex-col w-40 mx-auto">
                <Link to="/">
                    <div id="Item" className="flex flex-row text-white w-full items-center h-10 mt-2 hover:bg-[#666666] rounded-lg">
                        <div id="listIcon" className="flex w-1/5 h-3/6 justify-center">
                            <img src="https://img.icons8.com/?size=100&id=2797&format=png&color=FFFFFF" alt="home" srcSet="" />
                        </div>
                        <div id="listItem" className="pl-5">
                            <p>Home</p>
                        </div>
                    </div>
                </Link>
                    <div id="Item" className="flex flex-row text-white w-full items-center h-10 mt-2 cursor-default rounded-lg">
                        <div id="listIcon" className="flex w-1/5 h-3/6 justify-center">
                            <img src="https://img.icons8.com/?size=100&id=9672&format=png&color=FFFFFF" alt="home" srcSet="" />
                        </div>
                        <div id="listItem" className="pl-5">
                            <p>Explore</p>
                        </div>
                    </div>
                
                {
                    userDetails !== null &&  <Link to="/subscriptions">
                    <div id="Item" className="flex flex-row text-white w-full items-center h-10 mt-2 hover:bg-[#666666] rounded-lg">
                        <div id="listIcon" className="flex w-1/5 h-3/6 justify-center">
                            <img src="https://img.icons8.com/?size=100&id=0IKNwdMyre8O&format=png&color=FFFFFF" alt="home" srcSet="" />
                        </div>
                        <div id="listItem" className="pl-5">
                            <p>Subscriptions</p>
                        </div>
                    </div>
                </Link>
                }
               
               <hr  className="mt-1 border-gray-400"/>

                {userDetails !== null && <Link to="/likee">
                    <div id="Item" className="flex flex-row text-white w-full items-center h-10 mt-2 hover:bg-[#666666] rounded-lg">
                        <div id="listIcon" className="flex w-1/5 h-3/6 justify-center">
                            <img src="https://img.icons8.com/?size=100&id=10287&format=png&color=FFFFFF" alt="home" srcSet="" />
                        </div>
                        <div id="listItem" className="pl-5">
                            <p>Liked Videos</p>
                        </div>
                    </div>
                </Link>}
                
                    <div id="Item" className="flex flex-row text-white w-full items-center h-10 mt-2 hover:bg-[#666666] rounded-lg cursor-not-allowed">
                        <div id="listIcon" className="flex w-1/5 h-3/6 justify-center">
                            <img src="https://img.icons8.com/?size=100&id=86125&format=png&color=FFFFFF" alt="home" srcSet="" />
                        </div>
                        <div id="listItem" className="pl-5">
                            <p>History</p>
                        </div>
                    </div>

                {
                    userDetails !== null && <Link to="/yourVid">
                    <div id="Item" className="flex flex-row text-white w-full items-center h-10 mt-2 hover:bg-[#666666] rounded-lg cursor-pointer">
                        <div id="listIcon" className="flex w-1/5 h-3/6 justify-center">
                            <img src="https://img.icons8.com/?size=100&id=X1qciFfrc0Mp&format=png&color=FFFFFF" alt="home" srcSet="" />
                        </div>
                        <div id="listItem" className="pl-5">
                            <p>Your Videos</p>
                        </div>
                    </div>
                </Link>
                }
                
                <hr  className="mt-1 border-gray-400"/>
                    <Link to="/trending">
                    <div id="Item" className="flex flex-row text-white w-full items-center h-10 mt-2 hover:bg-[#666666] rounded-lg">
                        
                            <div id="listIcon" className="flex w-1/5 h-3/6 justify-center">
                                <img src="https://img.icons8.com/?size=100&id=lhrKPeMFIFdF&format=png&color=FFFFFF" alt="home" srcSet="" />
                            </div>
                            <div id="listItem" className="pl-5">
                                <p>Trending</p>
                            </div>
                        
                    </div>
                    </Link>
                <Link to={`/search?q=Shopping`}>
                    <div id="Item" className="flex flex-row text-white w-full items-center h-10 mt-2 hover:bg-[#666666] rounded-lg">
                        <div id="listIcon" className="flex w-1/5 h-3/6 justify-center">
                            <img src="https://img.icons8.com/?size=100&id=7O4B5wlFYiY1&format=png&color=FFFFFF" alt="home" srcSet="" />
                        </div>
                        <div id="listItem" className="pl-5">
                            <p>Shopping</p>
                        </div>
                    </div>
                </Link>

                <Link to={`/search?q=Music`}>
                    <div id="Item" className="flex flex-row text-white w-full items-center h-10 mt-2 hover:bg-[#666666] rounded-lg">
                        <div id="listIcon" className="flex w-1/5 h-3/6 justify-center">
                            <img src="https://img.icons8.com/?size=100&id=2gviB6dKCdq4&format=png&color=FFFFFF" alt="home" srcSet="" />
                        </div>
                        <div id="listItem" className="pl-5">
                            <p>Music</p>
                        </div>
                    </div>
                </Link>

                
                <Link to={`/search?q=Gaming`}>  
                    <div id="Item" className="flex flex-row text-white w-full items-center h-10 mt-2 hover:bg-[#666666] rounded-lg">
                        <div id="listIcon" className="flex w-1/5 h-3/6 justify-center">
                            <img src="https://img.icons8.com/?size=100&id=7314&format=png&color=FFFFFF" alt="home" srcSet="" />
                        </div>
                        <div id="listItem" className="pl-5">
                            <p>Gaming</p>
                        </div>
                    </div>
                </Link>

                <Link to={`/search?q=Sports`}> 
                    <div id="Item" className="flex flex-row text-white w-full items-center h-10 mt-2 hover:bg-[#666666] rounded-lg">
                        <div id="listIcon" className="flex w-1/5 h-3/6 justify-center">
                            <img src="https://img.icons8.com/?size=100&id=8XUC8FCNDyQZ&format=png&color=FFFFFF" alt="home" srcSet="" />
                        </div>
                        <div id="listItem" className="pl-5">
                            <p>Sports</p>
                        </div>
                    </div>
                </Link>   

                <hr  className="mt-1 border-gray-400"/>

                    {userDetails !== null && <div id="Item" onClick={handleLogout} className="flex flex-row text-white w-full items-center h-10 mt-2 hover:bg-[#666666] rounded-lg cursor-pointer">
                        <div id="listIcon" className="flex w-1/5 h-3/6 justify-center">
                            <img src="https://img.icons8.com/?size=100&id=2445&format=png&color=FFFFFF" alt="home" srcSet="" />
                        </div>
                        <div id="listItem" className="pl-5">
                            <p>Logout</p>
                        </div>
                    </div>}
                    

                    <div onClick={()=>{ window.location.href = `mailto:samyckjain@gmail.com?subject=${encodeURIComponent("Feedback on DinkiTube")}`}} id="Item" className="cursor-pointer flex flex-row text-white w-full items-center h-10 mt-2 hover:bg-[#666666] rounded-lg">
                        <div id="listIcon" className="flex w-1/5 h-3/6 justify-center">
                            <img src="https://img.icons8.com/?size=100&id=kvSrC8QSaaSl&format=png&color=FFFFFF" alt="home" srcSet="" />
                        </div>
                        <div id="listItem" className="pl-5">
                            <p>Send Feedback</p>
                        </div>
                    </div>

                    <div id="Item" className="cursor-not-allowed flex flex-row text-white w-full items-center h-10 mt-2 hover:bg-[#666666] rounded-lg">
                        <div id="listIcon" className="flex w-1/5 h-3/6 justify-center">
                            <img src="https://img.icons8.com/?size=100&id=646&format=png&color=FFFFFF" alt="home" srcSet="" />
                        </div>
                        <div id="listItem" className="pl-5">
                            <p>Help</p>
                        </div>
                    </div>

                    <hr  className="mt-1 border-gray-400"/>

                    <div id="Item" className="cursor-not-allowed flex flex-row text-white w-full items-center h-10 mt-1 hover:bg-[#666666] rounded-lg">
                        <div id="listIcon" className="flex w-1/5 h-3/6 justify-center">
                            <img src="https://img.icons8.com/?size=100&id=99474&format=png&color=FFFFFF" alt="home" srcSet="" />
                        </div>
                        <div id="listItem" className="pl-5">
                            <p>Change Mode</p>
                        </div>
                    </div>


                </div>
                
            </div>
    )
}

export default Sidebar;