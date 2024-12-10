export default function Header() {
    return (
        <header className="bg-gray-900 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">iTerm2 Material Design</h1>
                <nav>
                    <a href="#features" className="px-4">Features</a>
                    <a href="#installation" className="px-4">Installation</a>
                    <a href="#download" className="px-4">Download</a>
                </nav>
            </div>
        </header>
    );
}