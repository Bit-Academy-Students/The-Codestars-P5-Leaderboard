import { useEffect, useState } from 'react';

function ThemeToggle() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [theme, setTheme] = useState(() => {
        return localStorage.theme || 'system';
    });

    const applyTheme = (newTheme) => {
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        } else if (newTheme === 'light') {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        } else {
            // System preference
            localStorage.removeItem('theme');
            const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            document.documentElement.classList.toggle('dark', isDark);
        }
    };

    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
        setIsModalOpen(false);
    };

    const getButtonText = () => {
        if (theme === 'dark') return '🌙 Dark Mode';
        if (theme === 'light') return '☀️ Light Mode';
        return '💻 Systeem';
    };

    return (
        <>
            <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-[#2be295] px-4 py-2 rounded-lg font-bold text-black shadow-[0px_-3px_#0f202733_inset] cursor-pointer"
            >
                {getButtonText()}
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 bg-[#00000069] bg-opacity-50 flex items-center justify-center z-50" onClick={() => setIsModalOpen(false)}>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl max-w-sm w-full mx-4" onClick={(e) => e.stopPropagation()}>
                        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">
                            Kies thema
                        </h2>
                        <div className="flex flex-col gap-3">
                            <button onClick={() => handleThemeChange('light')} className={`p-4 rounded-lg text-center font-semibold transition-all ${theme === 'light' ? 'bg-[#2be295] text-black' : 'bg-gray-100 dark:bg-gray-700 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'}`}>
                                ☀️ Light Mode
                            </button>
                            <button onClick={() => handleThemeChange('dark')} className={`p-4 rounded-lg text-center font-semibold transition-all ${theme === 'dark' ? 'bg-[#2be295] text-black' : 'bg-gray-100 dark:bg-gray-700 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'}`}>
                                🌙 Dark Mode
                            </button>
                            <button onClick={() => handleThemeChange('system')} className={`p-4 rounded-lg text-center font-semibold transition-all ${theme === 'system' ? 'bg-[#2be295] text-black' : 'bg-gray-100 dark:bg-gray-700 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'}`}>
                                💻 Systeem Voorkeur
                            </button>
                        </div>
                        <button onClick={() => setIsModalOpen(false)} className="mt-4 w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-600 text-black dark:text-white font-semibold hover:bg-gray-300 dark:hover:bg-gray-500">
                            Sluiten
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default ThemeToggle;