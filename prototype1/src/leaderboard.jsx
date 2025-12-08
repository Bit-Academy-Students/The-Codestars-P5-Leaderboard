import ThemeToggle from './ThemeToggle';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function Leaderboard() {
    return (
        <>
            <div className="card m-auto p-2 rounded-[2.5rem] min-w-screen max-w-screen absolute top-1/10 left-1/2 transform -translate-x-1/2">
                <container className="flex flex-col gap-4 rounded-[2.5rem] items-center max-w-screen">
                    <div className="mb-5">
                        <p className="text-4xl font-bold dark:text-white">Leaderboard</p>
                    </div>
                    <div className="bg-white gap-1 w-95 sm:w-xl md:w-2xl lg:w-3xl flex flex-row p-3 rounded-xl dark:bg-black dark:text-white">
                        <div className="flex-none w-fit text-left">
                            <p>01</p>
                        </div>
                        <div className="flex-none w-fit text-left"> 
                            <AccountCircleOutlinedIcon />
                        </div>
                        <div className="grow w-1/5 text-left">
                            <p>The Codestars</p>
                        </div>
                        <div className="grow w-1/5 text-left">
                            <p>Leaderboard</p>
                        </div>
                        <div className="flex-none w-fit text-right">
                            <p>150 Bits</p>
                        </div>
                    </div>
                    <div className="bg-white gap-1 w-95 sm:w-xl md:w-2xl lg:w-3xl flex flex-row p-3 rounded-xl dark:bg-black dark:text-white">
                        <div className="flex-none w-fit text-left">
                            <p>02</p>
                        </div>
                        <div className="flex-none w-fit text-left">  
                            <AccountCircleOutlinedIcon />
                        </div>
                        <div className="grow w-1/5 text-left">
                            <p>Team name</p>
                        </div>
                        <div className="grow w-1/5 text-left">
                            <p>Project name</p>
                        </div>
                        <div className="flex-none w-fit text-right">
                            <p>12 Bits</p>
                        </div>
                    </div>
                    <div className="bg-white gap-1 w-95 sm:w-xl md:w-2xl lg:w-3xl flex flex-row p-3 rounded-xl dark:bg-black dark:text-white">
                        <div className="flex-none w-fit text-left">
                            <p>03</p>
                        </div>
                        <div className="flex-none w-fit text-left">  
                            <AccountCircleOutlinedIcon />
                        </div>
                        <div className="grow w-1/5 text-left">
                            <p>Team name</p>
                        </div>
                        <div className="grow w-1/5 text-left">
                            <p>Project name</p>
                        </div>
                        <div className="flex-none w-fit text-right">
                            <p>10 Bits</p>
                        </div>
                    </div>
                    <div className="bg-white gap-1 w-95 sm:w-xl md:w-2xl lg:w-3xl flex flex-row p-3 rounded-xl dark:bg-black dark:text-white">
                        <div className="flex-none w-fit text-left">
                            <p>04</p>
                        </div>
                        <div className="flex-none w-fit text-left">  
                            <AccountCircleOutlinedIcon />
                        </div>
                        <div className="grow w-1/5 text-left">
                            <p>Team name</p>
                        </div>
                        <div className="grow w-1/5 text-left">
                            <p>Project name</p>
                        </div>
                        <div className="flex-none w-fit text-right">
                            <p>9 Bits</p>
                        </div>
                    </div>
                    <div className="bg-white gap-1 w-95 sm:w-xl md:w-2xl lg:w-3xl flex flex-row p-3 rounded-xl dark:bg-black dark:text-white">
                        <div className="flex-none w-fit text-left">
                            <p>05</p>
                        </div>
                        <div className="flex-none w-fit text-left">
                            <AccountCircleOutlinedIcon />
                        </div>
                        <div className="grow w-1/5 text-left">
                            <p>Team name</p>
                        </div>
                        <div className="grow w-1/5 text-left">
                            <p>Project name</p>
                        </div>
                        <div className="flex-none w-fit text-right">
                            <p>7 Bits</p>
                        </div>
                    </div>
                </container>
            </div>
            <div className="fixed bottom-4 left-4 z-50">
                <ThemeToggle />
            </div>
        </>
    );
}

export default Leaderboard;