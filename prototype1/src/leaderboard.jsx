import ThemeToggle from './ThemeToggle';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Accordion from "./Accordion";
import { Link } from 'react-router-dom';

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
                                    <div id='position' className="text-left w-6">
                                        <p>01</p>
                                    </div>
                                    <div id='teamIcon' className="text-left"> 
                                        <AccountCircleOutlinedIcon />
                                    </div>
                                    <div id='teamName' className="text-left">
                                        <p>The Codestars</p>
                                    </div>
                                </div>
                                <div className="flex flex-1 gap-1 justify-between flex-cols-2">
                                    <div id='leaderboard' className="text-left"><p>Leaderboard</p></div>
                                    <div id='bits' className="text-right ">
                                        <p>150 Bits</p>
                                    </div>
                                </div>
                            </div>
                        ]}
                        details={[
                            <div className="bg-white text-black w-95 text-left sm:w-xl md:w-2xl lg:w-3xl flex flex-cols-2 p-3 rounded-b-xl dark:bg-black dark:text-white">
                                <div id='icon' className="flex flex-1 gap-1">
                                    <div className='w-6'></div>
                                    <AccountCircleOutlinedIcon/>
                                    <div id='teamMembers'>
                                        <p>Team Members</p>
                                    </div>
                                </div>
                                <div id='projectDetails' className="flex-1">
                                    <p>Project Details</p>
                                </div>
                            </div>
                    ]}/>
                    <p className="mt-4">
                        <Link className="text-black dark:text-white font-bold no-underline" to="/">Naar start pagina</Link>
                    </p>
                </div>
            </div>
            <div className="fixed bottom-4 left-4 z-50">
                <ThemeToggle />
            </div>
        </>
    );
}

export default Leaderboard;