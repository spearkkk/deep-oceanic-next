import React from 'react';

const palette = {
    background: [
        { name: 'base00', hex: '#001C1F', description: 'Primary Background' },
        { name: 'base01', hex: '#002931', description: 'Secondary Background' },
        { name: 'base02', hex: '#003640', description: 'Tertiary Background' },
        { name: 'base03', hex: '#004852', description: 'Low Contrast Text Background' },
    ],
    foreground: [
        { name: 'base04', hex: '#0093A3', description: 'Dark Foreground' },
        { name: 'base05', hex: '#D4E1E8', description: 'Foreground' },
        { name: 'base06', hex: '#E0E9EF', description: 'High Foreground' },
        { name: 'base07', hex: '#F2F7F9', description: 'Bright Foreground' },
    ],
    syntax: [
        { name: 'base08', hex: '#D3464D', description: 'Warm Red - Variables, Errors' },
        { name: 'base09', hex: '#E37552', description: 'Warm Orange - Constants' },
        { name: 'base0a', hex: '#F3B863', description: 'Muted Gold - Classes, Functions' },
        { name: 'base0b', hex: '#63B784', description: 'Fresh Green - Strings' },
        { name: 'base0c', hex: '#4FB7AE', description: 'Aqua Cyan - Support, Regex' },
        { name: 'base0d', hex: '#568CCF', description: 'Oceanic Blue - Keywords' },
        { name: 'base0e', hex: '#8B66D6', description: 'Vibrant Purple - Markup' },
        { name: 'base0f', hex: '#D0658E', description: 'Warm Pink - Deprecated' },
    ],
    additional: [
        { name: 'base10', hex: '#1F2628', description: 'Darker Black for Highlights' },
        { name: 'base11', hex: '#2A2F30', description: 'Darkest Black for Shadows' },
        { name: 'base12', hex: '#FF6670', description: 'Bright Red - Warnings' },
        { name: 'base13', hex: '#FFE08A', description: 'Bright Yellow - Highlights' },
        { name: 'base14', hex: '#72E1A6', description: 'Bright Green - Success Indicators' },
        { name: 'base15', hex: '#4DE3E3', description: 'Bright Cyan - Links' },
        { name: 'base16', hex: '#5CAEFF', description: 'Bright Blue - Active States' },
        { name: 'base17', hex: '#B788FF', description: 'Bright Purple - Accents' },
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