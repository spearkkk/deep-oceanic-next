import React from 'react';
import InstallationSection from "@/app/components/InstallationSection";
import FeaturesSection from "@/app/components/FeaturesSection";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function Home() {
    return (
        <div className="bg-gray-50 text-gray-900 flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow flex justify-center items-center">
                <div className="w-full max-w-4xl text-center">
                    <FeaturesSection />
                    <InstallationSection />
                </div>
            </main>
            <Footer />
        </div>
    );
}