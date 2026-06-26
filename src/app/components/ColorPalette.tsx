import React from 'react';

const palette = {
    background: [
        { name: 'base00', hex: '#00191D', description: 'Primary Background' },
        { name: 'base01', hex: '#002D36', description: 'Secondary Background' },
        { name: 'base02', hex: '#00424F', description: 'Tertiary Background' },
        { name: 'base03', hex: '#006170', description: 'Low Contrast Text Background' },
    ],
    foreground: [
        { name: 'base04', hex: '#00B8C7', description: 'Dark Foreground' },
        { name: 'base05', hex: '#D8F3F5', description: 'Foreground' },
        { name: 'base06', hex: '#EAFFFB', description: 'High Foreground' },
        { name: 'base07', hex: '#FFFFFF', description: 'Bright Foreground' },
    ],
    syntax: [
        { name: 'base08', hex: '#FF4D6D', description: 'Coral Red - Variables, Errors, Deletes' },
        { name: 'base09', hex: '#FFC061', description: 'Bright Orange - Constants' },
        { name: 'base0a', hex: '#FFF44F', description: 'Signal Yellow - Classes, Changes' },
        { name: 'base0b', hex: '#00FF9C', description: 'Biolume Green - Strings, Additions' },
        { name: 'base0c', hex: '#00F5FF', description: 'Electric Cyan - Support, Regex' },
        { name: 'base0d', hex: '#33B5FF', description: 'Clear Blue - Keywords' },
        { name: 'base0e', hex: '#D966FF', description: 'Vivid Purple - Markup' },
        { name: 'base0f', hex: '#FF7FCB', description: 'Hot Pink - Deprecated' },
    ],
    additional: [
        { name: 'base10', hex: '#001014', description: 'Darker Black for Highlights' },
        { name: 'base11', hex: '#00090B', description: 'Darkest Black for Shadows' },
        { name: 'base12', hex: '#FF7890', description: 'Bright Red - Warnings' },
        { name: 'base13', hex: '#FFF87A', description: 'Bright Yellow - Highlights' },
        { name: 'base14', hex: '#5CFFB8', description: 'Bright Green - Success Indicators' },
        { name: 'base15', hex: '#59FBFF', description: 'Bright Cyan - Links' },
        { name: 'base16', hex: '#7DCCFF', description: 'Bright Blue - Active States' },
        { name: 'base17', hex: '#E0A8FF', description: 'Bright Purple - Accents' },
    ],
};

const ColorPalette: React.FC = () => {
    const copyToClipboard = (hex: string) => {
        navigator.clipboard.writeText(hex);
        alert(`Copied ${hex} to clipboard!`);
    };

    const renderColors = (colors: Array<{ name: string; hex: string; description: string }>) => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {colors.map((color) => (
                <div
                    key={color.name}
                    className="flex items-center cursor-pointer"
                    onClick={() => copyToClipboard(color.hex)}
                    title="Click to copy color"
                >
                    <div
                        className="w-12 h-12 rounded border border-dp-ocn-nxt-base-0a mr-4"
                        style={{ backgroundColor: color.hex }}
                    ></div>
                    <div>
                        <p className="text-lg font-semibold text-dp-ocn-nxt-base-07">{color.name}: {color.hex}</p>
                        <p className="text-sm text-dp-ocn-nxt-base-05">{color.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="space-y-8 text-dp-ocn-nxt-base-07">
            <section>
                <h2 className="text-xl md:text-2xl font-bold mb-4">Background Colors</h2>
                {renderColors(palette.background)}
            </section>
            <section>
                <h2 className="text-xl md:text-2xl font-bold mb-4">Foreground Colors</h2>
                {renderColors(palette.foreground)}
            </section>
            <section>
                <h2 className="text-xl md:text-2xl font-bold mb-4">Syntax Highlighting Colors</h2>
                {renderColors(palette.syntax)}
            </section>
            <section>
                <h2 className="text-xl md:text-2xl font-bold mb-4">Additional Colors</h2>
                {renderColors(palette.additional)}
            </section>
        </div>
    );
};

export default ColorPalette;
