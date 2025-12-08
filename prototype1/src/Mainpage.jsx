import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

function Mainpage() {
    return (
        <>
            <div className="card m-auto sm:w-xl px-5 p-12 rounded-[2.5rem] bg-[#f0e8d8b3] min-w-xs max-w-screen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 dark:bg-[#0a151ab3]">
                <p className="text-3xl font-bold mb-5 text-black dark:text-white">Welcome to the App</p>
                <p className="mt-4">
                    <Link className="text-black dark:text-white font-bold no-underline" to="/Login-Prototype">Inloggen kan hier</Link>
                </p>
                <p className="mt-4">
                    <Link className="text-black dark:text-white font-bold no-underline" to="/registerpage">Registreer hier</Link>
                </p>
                <p>
                    <Link className="text-black dark:text-white no-underline" to="/leaderboardpage">leaderboard page prototype</Link>
                </p>
            </div>
            <div className="fixed bottom-4 left-4 z-50">
                <ThemeToggle />
            </div>
        </>
    );
}

export default Mainpage;