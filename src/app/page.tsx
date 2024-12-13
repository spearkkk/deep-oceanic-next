"use client";

import React, {useEffect} from 'react';
import ColorPalette from "@/app/components/ColorPalette";
import CodePreview from "@/app/components/CodePreview";
import ThemeShowcase from "@/app/components/ThemeShowcase";
import Button from "@/app/components/Button";

export default function Home() {
    useEffect(() => {
        let lastScrollTop = 0;

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const body = document.body;
            if (scrollTop > 400 && scrollTop > lastScrollTop) {
                // Scrolling down: apply dim effect with a slow transition
                body.classList.add("dimmed");
                body.style.transition = "background 8s ease";
            } else if (scrollTop <= 400 || scrollTop < lastScrollTop) {
                // Scrolling up: remove dim effect with a fast transition
                body.classList.remove("dimmed");
                body.style.transition = "background 4s ease";
            }

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const introduction = `
    It’s a place where light bends and dances, where the colors shift and deepen in ways you can only imagine. For most of us, the deep ocean is a mystery—vast, quiet, and endlessly captivating. It’s a place we rarely touch, yet it feels like it touches us.

    For years, I’ve been both fascinated and terrified by the ocean. I can’t swim—not even in water as shallow as my height. The fear of being swept away, of sinking, is real. But so is the wonder. The deep ocean, to me, is like a dream: unattainable yet vivid in my imagination.

    The Deep Oceanic Next color theme was born from this paradox. It’s a palette inspired by the gradients of the ocean’s depths—from the near-black shadows to the glimmers of light that pierce through. It reflects the courage to embrace what we don’t understand and the beauty that lies in exploring the unknown.

    This theme isn’t just about colors; it’s about a journey. A reminder that even if we can’t dive into the deep blue ourselves, we can bring a piece of it into our world—into our screens, our workspaces, and our creative expressions.

    So, have you ever wondered what it’s like to dive into the unknown? To explore the depths that so few have seen? Maybe, together with this theme, you can take that step into your own deep ocean?
    `

    const handleGitHubClick = () => {
        window.open("https://github.com/spearkkk/deep-oceanic-next", "_blank");
    };

    const handleBuyCoffeeClick = () => {
        window.open("https://buymeacoffee.com/spearkkk", "_blank");
    };

    return (
        <div className="flex flex-col min-h-screen relative">
            <span className="top-right-link">
            <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EC%88%98%EC%A4%91-%EC%82%AC%EC%A7%84-1braZySlEKA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                Photo by Jeremy Bishop on Unsplash
            </a>
            </span>
            <main className="flex-grow flex flex-col justify-center items-center p-4">
                <section>
                    <div className="w-full max-w-sm md:max-w-2xl flex flex-col justify-end items-center min-h-screen pb-4 md:pb-16">
                        <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">Have you been in the deep ocean
                            before?</h3>
                    </div>
                    <div className="w-full max-w-sm md:max-w-2xl">
                        <p className="whitespace-pre-line md:text-lg">
                            {introduction}
                        </p>
                    </div>
                </section>
                <hr className="w-full border-t-4 border-dp-ocn-nxt-base-00 mt-16"/>
                <section>
                    <div className="w-full max-w-sm md:max-w-2xl mt-16 mb-8 md:mt-32 md:mb-16">
                        <h1 className="text-2xl md:text-4xl text-center text-dp-ocn-nxt-base-07 font-black">
                            Deep Oceanic Next Color Theme
                        </h1>
                    </div>
                    <ColorPalette/>
                </section>
                <hr className="w-full border-t-4 border-dp-ocn-nxt-base-00 mt-16"/>
                <section>
                    <div className="w-full max-w-sm md:max-w-2xl mt-16 mb-8 md:mt-32 md:mb-16">
                        <CodePreview/>
                    </div>
                    <div className="w-full max-w-sm md:max-w-2xl mt-8 mb-4 md:mt-16 md:mb-8">
                        <ThemeShowcase/>
                    </div>
                    <div className="w-full max-w-sm md:max-w-2xl mt-8 mb-4 md:mt-16 md:mb-8">
                        <div className="flex flex-wrap justify-center gap-4 mt-8">
                            <Button
                                text="Download on GitHub"
                                background="dp-ocn-nxt-base-00"
                                foreground="dp-ocn-nxt-base-0a"
                                onClick={handleGitHubClick}
                            />
                            <Button
                                text="Buy Me a Zero Sugar Pepsi"
                                background="dp-ocn-nxt-base-00"
                                foreground="dp-ocn-nxt-base-0a"
                                onClick={handleBuyCoffeeClick}
                            />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}