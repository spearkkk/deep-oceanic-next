// src/app/preview.tsx

export default function PreviewSection() {
    const previews = [
        { src: "/themes/preview1.png", alt: "Editor with theme applied" },
        { src: "/themes/preview2.png", alt: "Terminal with theme applied" },
        { src: "/themes/preview3.png", alt: "Other tools with theme" },
    ];

    return (
        <div className="bg-dp-ocn-nxt-base-01 text-dp-ocn-nxt-base-05 py-16">
            <h2 className="text-4xl font-bold text-center text-dp-ocn-nxt-base-05">
                Theme Previews
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 px-8">
                {previews.map((preview, idx) => (
                    <div
                        key={idx}
                        className="bg-dp-ocn-nxt-base-00 rounded-lg shadow-lg overflow-hidden"
                    >
                        <img src={preview.src} alt={preview.alt} className="w-full" />
                    </div>
                ))}
            </div>
        </div>
    );
}