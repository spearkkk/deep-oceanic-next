import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const deepOceanicNextTheme = {
    'code[class*="language-"]': {
        color: '#d8f3f5', // base05
        background: '#00191d', // base00
        fontFamily: 'monospace',
        fontSize: '1em',
        lineHeight: '1.5',
    },
    'pre[class*="language-"]': {
        color: '#d8f3f5', // base05
        background: '#00191d', // base00
        fontFamily: 'monospace',
        fontSize: '1em',
        lineHeight: '1.5',
        padding: '16px',
        borderRadius: '8px',
        overflow: 'auto',
    },
    comment: { color: '#006170' }, // base03
    keyword: { color: '#33b5ff' }, // base0D
    string: { color: '#00ff9c' }, // base0B
    number: { color: '#fff44f' }, // base0A
    function: { color: '#d966ff' }, // base0E
    variable: { color: '#ff4d6d' }, // base08
    constant: { color: '#ffc061' }, // base09
    operator: { color: '#00f5ff' }, // base0C
    tag: { color: '#e0a8ff' }, // base17
};

const exampleCode = `object DeepOceanicNext {
  def main(args: Array[String]): Unit = {
    val message = "Hello from the deep ocean!"
    println(dive(message))
  }

  def dive(msg: String): String = {
    (1 to 5).map(_ => "~").mkString("") + " " + msg + " " + (1 to 5).map(_ => "~").mkString("")
  }
}`;

const CodePreview = () => (
    <div className="bg-dp-ocn-nxt-grey-50 rounded-md p-4">
        {/* OSX Window Title Bar */}
        <div className="flex items-center justify-start pb-2 px-2 pt-3 bg-dp-ocn-nxt-base-01 rounded-t-md border-b border-dp-ocn-nxt-base-02">
            {/* Close, Minimize, Maximize Buttons */}
            <div className="flex space-x-2 ml-2">
                <div className="w-3 h-3 bg-dp-ocn-nxt-base-08 rounded-full"></div>
                <div className="w-3 h-3 bg-dp-ocn-nxt-base-0a rounded-full"></div>
                <div className="w-3 h-3 bg-dp-ocn-nxt-base-0b rounded-full"></div>
            </div>
        </div>

        {/* Syntax Highlighter */}
        <div className="w-full overflow-x-auto">
            <SyntaxHighlighter
                language="scala"
                style={deepOceanicNextTheme}
                customStyle={{
                    width: '100%', // Stretch to fill the parent container
                    minWidth: '100%', // Prevent shrinking
                    overflowX: 'auto', // Allow horizontal scrolling
                    padding: '16px', // Add padding for better readability
                    borderRadius: '4px', // Match the container's border-radius
                }}
            >
                {exampleCode}
            </SyntaxHighlighter>
        </div>
    </div>
);

export default CodePreview;
