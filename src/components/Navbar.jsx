export default function Navbar() {
    return (
    <nav className="bg-blue-600 rounded-b-lg p-12">
        <div className="px-40 flex flex-wrap items-center justify-between mx-auto">
        <h1 className="text-4xl font-bold">EstateEmpire</h1>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
            type="button"
            className="text-black text-xl bg-amber-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg font-semibold px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
            Login
            </button>
            <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            >
            </button>
        </div>
        <div>
            <ul className="flex cursor-pointer">
            <li className="text-2xl">Home</li>
            <li className="ml-20 text-2xl">Rent</li>
            <li className="ml-20 text-2xl">Buy</li>
            </ul>
        </div>
        </div>
    </nav>
    );
}
