import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
    return (
        <section className="bg-dp-ocn-nxt-base-00 text-dp-ocn-nxt-base-05 p-8 text-center">
            <h1 className="text-4xl font-bold">Deep Oceanic Next</h1>
            <p className="text-dp-ocn-nxt-base-06 mt-4">
                Experience the perfect color scheme for your workflow.
            </p>
            <div className="mt-6 space-x-4">
                <Button text="Download" />
                <Button text="View on GitHub" />
            </div>
        </section>
    );
};

export default Hero;