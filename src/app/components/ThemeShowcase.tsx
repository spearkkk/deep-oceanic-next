import React from "react";
import Image from "next/image";

const themes = [
    {
        id: 1,
        name: "iTerm2 Theme",
        description:
            "Bring the deep ocean's tranquility to your terminal with the Deep Oceanic Next iTerm2 theme.",
        image: "/screenshots/screenshot_iTerm2_01.png",
    },
    {
        id: 2,
        name: "IntelliJ Theme",
        description:
            "Code with clarity using the Deep Oceanic Next theme for IntelliJ, PyCharm, and other IDEs.",
        image: "/screenshots/screenshot_IntelliJ_01.jpg",
    },
    {
        id: 3,
        name: "Chrome Theme",
        description:
            "Enhance your browsing experience with the Deep Oceanic Next Chrome theme.",
        image: "/screenshots/screenshot_Chrome_01.jpg",
    },
    {
        id: 4,
        name: "Alfred Theme",
        description:
            "Simplify your workflow with the Alfred theme inspired by the Deep Oceanic Next palette.",
        image: "/screenshots/screenshot_Alfred_01.jpg",
    },
];

const ThemeShowcase: React.FC = () => {
    return (
        <div className="space-y-16 md:space-y-16">
            {themes.map((theme, index) => (
                <section
                    key={theme.id}
                    className={`flex flex-col-reverse ${
                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } items-center md:space-x-8`}
                >
                    {/* Screenshot */}
                    <div className="md:w-1/2">
                        <Image
                            width={800}
                            height={600}
                            style={{ width: '100%', height: 'auto' }}
                            src={theme.image}
                            alt={`${theme.name} Screenshot`}
                            className="rounded-lg shadow-md bg-dp-ocn-nxt-grey-50"
                        />
                    </div>

                    {/* Description and Button */}
                    <div className="md:w-1/2 text-center md:text-left space-y-4">
                        <h2 className="text-lg md:text-xl font-bold text-dp-ocn-nxt-base-07">
                            {theme.name}
                        </h2>
                        <p className="text-dp-ocn-nxt-base-05">{theme.description}</p>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default ThemeShowcase;