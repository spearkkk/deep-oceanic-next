export default function FeaturesSection() {
    return (
        <section id="features" className="py-16 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-8">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-4 bg-white shadow-md rounded-lg">
                        <h3 className="text-2xl font-bold mb-2">Feature 1</h3>
                        <p>Details about feature 1.</p>
                    </div>
                    <div className="p-4 bg-white shadow-md rounded-lg">
                        <h3 className="text-2xl font-bold mb-2">Feature 2</h3>
                        <p>Details about feature 2.</p>
                    </div>
                    <div className="p-4 bg-white shadow-md rounded-lg">
                        <h3 className="text-2xl font-bold mb-2">Feature 3</h3>
                        <p>Details about feature 3.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}