"use client";

import React, { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const body = document.body;
            if (scrollTop > 100) {
                body.classList.add('dimmed');
            } else {
                body.classList.remove('dimmed');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="flex flex-col min-h-screen relative">
            <span className="top-right-link">
            <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EC%88%98%EC%A4%91-%EC%82%AC%EC%A7%84-1braZySlEKA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                Photo by Jeremy Bishop on Unsplash
            </a>
            </span>
            <main className="flex-grow flex flex-col justify-center items-center p-4">
                <div className="w-full max-w-4xl text-center flex flex-col justify-end items-center min-h-screen">
                    hello world<br/>
                    hello world<br/>
                    hello world<br/>
                </div>
            </main>
        </div>
    );
}