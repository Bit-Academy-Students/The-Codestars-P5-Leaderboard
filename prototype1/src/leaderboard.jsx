import ThemeToggle from './ThemeToggle';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Accordion from "./Accordion";

function Leaderboard() {
    return (
        <>
            <div className="card m-auto p-2 min-w-screen max-w-screen absolute top-1/10 left-1/2 transform -translate-x-1/2  items-center">
                <div className="mb-5">
                    <p className="text-4xl font-bold dark:text-white">Leaderboard</p>
                </div>
                <div>
                    <Accordion info={[
                            <div className="bg-white w-95 sm:w-xl md:w-2xl lg:w-3xl flex flex-cols-2 p-3 rounded-xl dark:bg-black dark:text-white">
                                <div className="flex flex-1 gap-1 flex-cols-3">
                                    <div className="text-left">
                                        <p>01</p>
                                    </div>
                                    <div className="text-left"> 
                                        <AccountCircleOutlinedIcon />
                                    </div>
                                    <div className="text-left">
                                        <p>The Codestars</p>
                                    </div>
                                </div>
                                <div className="flex flex-1 gap-1 justify-between flex-cols-2">
                                    <div className="text-left"><p>Leaderboard</p></div>
                                    <div className="text-right ">
                                        <p>150 Bits</p>
                                    </div>
                                </div>
                            </div>
                        ]}
                        details={[
                            <div className="bg-white w-95 sm:w-xl md:w-2xl lg:w-3xl flex flex-cols-2 p-3 rounded-b-xl dark:bg-black dark:text-white">
                                <div className="text-black dark:text-white"><p>Team Members</p></div>
                            </div>
                    ]}/>
                    <Accordion info={[
                            <div className="bg-white w-95 sm:w-xl md:w-2xl lg:w-3xl flex flex-cols-2 p-3 rounded-xl dark:bg-black dark:text-white">
                                <div className="flex flex-1 gap-1 flex-cols-3">
                                    <div className="text-left">
                                        <p>01</p>
                                    </div>
                                    <div className="text-left"> 
                                        <AccountCircleOutlinedIcon />
                                    </div>
                                    <div className="text-left">
                                        <p>The Codestars</p>
                                    </div>
                                </div>
                                <div className="flex flex-1 gap-1 justify-between flex-cols-2">
                                    <div className="text-left"><p>Leaderboard</p></div>
                                    <div className="text-right ">
                                        <p>150 Bits</p>
                                    </div>
                                </div>
                            </div>
                        ]}
                        details={[
                            <div className="bg-white w-95 sm:w-xl md:w-2xl lg:w-3xl flex flex-cols-2 p-3 rounded-b-xl dark:bg-black dark:text-white">
                                <div className="text-black dark:text-white"><p>Team Members</p></div>
                            </div>
                    ]}/>
                    <Accordion info={[
                            <div className="bg-white w-95 sm:w-xl md:w-2xl lg:w-3xl flex flex-cols-2 p-3 rounded-xl dark:bg-black dark:text-white">
                                <div className="flex flex-1 gap-1 flex-cols-3">
                                    <div className="text-left">
                                        <p>01</p>
                                    </div>
                                    <div className="text-left"> 
                                        <AccountCircleOutlinedIcon />
                                    </div>
                                    <div className="text-left">
                                        <p>The Codestars</p>
                                    </div>
                                </div>
                                <div className="flex flex-1 gap-1 justify-between flex-cols-2">
                                    <div className="text-left"><p>Leaderboard</p></div>
                                    <div className="text-right ">
                                        <p>150 Bits</p>
                                    </div>
                                </div>
                            </div>
                        ]}
                        details={[
                            <div className="bg-white w-95 sm:w-xl md:w-2xl lg:w-3xl flex flex-row p-3 rounded-b-xl dark:bg-black dark:text-white">
                                <div className="text-black dark:text-white"><p>Team Members</p></div>
                            </div>
                    ]}/>
                </div>
            </div>
            <div className="fixed bottom-4 left-4 z-50">
                <ThemeToggle />
            </div>
        </>
    );
}

export default Leaderboard;