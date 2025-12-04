import "./App.css";

function Mainpage() {
    return (
        <div className="card m-auto p-12 rounded-[2.5rem] bg-[#f0e8d8b3] min-w-fit max-w-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 dark:bg-[rgba(10, 21, 26, 0.7)]">
            <p className="text-3xl font-bold mb-5">Welcome to the App</p>
            <a href="/Login-Prototype">Login page prototype</a>
        </div>
    );
}

export default Mainpage;