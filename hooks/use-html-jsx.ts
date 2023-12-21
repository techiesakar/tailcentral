export const convertHtmlToJsx = (html: string) => {
    // Convert class to className and for to htmlFor
    let jsx = html.replace(/\bclass=/g, "className=");
    jsx = jsx.replace(/\bfor=/g, "htmlFor=");

    // Convert onclick to onClick, onmouseover to onMouseOver, etc.
    jsx = jsx.replace(/\bon([a-z]+)/g, function (match: any, group: string) {
        return "on" + group.charAt(0).toUpperCase() + group.slice(1);
    });

    // Convert unquoted attributes to quoted attributes
    jsx = jsx.replace(/=(\w+)/g, function (match: any, group: string) {
        return `="${group}"`;
    });

    // Convert inline styles to objects
    jsx = jsx.replace(/style="([^"]*)"/g, function (match: any, group: string) {
        let style = group.split(";").reduce(function (style, rule) {
            let parts = rule.split(":");
            if (parts[1]) {
                let key = parts[0].trim();
                let value = parts[1].trim();
                // Detect if value is numeric
                if (!isNaN(value as any)) {
                    value = parseInt(value).toString();
                } else if (value !== "true" && value !== "false") {
                    value = `'${value}'`; // Keep as string if not boolean
                }
                key = key.replace(/-./g, function (x) {
                    return x[1].toUpperCase();
                }); // Convert kebab-case to camelCase
                style += key + ": " + value + ", ";
            }
            return style;
        }, "");
        return `style={{${style}}}`;
    });

    // Convert boolean attributes
    const booleanAttributes = [
        "checked",
        "selected",
        "disabled",
        "readOnly",
        "multiple",
        "hidden",
    ];
    booleanAttributes.forEach((attr) => {
        const re = new RegExp(
            `<([a-zA-Z][a-zA-Z0-9]*)\\b[^>]*?\\b${attr}(?![^>]*?>)`,
            "g"
        );
        jsx = jsx.replace(re, `<$1 ${attr}={true}`);
    });

    // Ensure self-closing tags are properly closed
    const selfClosingTags = ["br", "hr", "img", "input", "link", "meta"];
    selfClosingTags.forEach((tag) => {
        const re = new RegExp(`<${tag}\\b([^>]*)(?<!/)>`, "g");
        jsx = jsx.replace(re, `<${tag}$1 />`);
    });

    // Replace HTML comments with JSX comments
    jsx = jsx.replace(/<!--([\s\S]*?)-->/g, function (match: any, group: string) {
        // Convert each line into a separate JSX comment
        const lines = group.split("\n");
        return lines.map((line) => `{/*${line.trim()}*/}`).join("\n");
    });

    // Convert SVG kebab-case attributes to camelCase
    jsx = jsx.replace(
        /<(svg|path|circle|rect|line|polyline|polygon|text|g|defs|use|mask)[^>]*>/g,
        function (match: any) {
            return match.replace(/-([a-z])/g, function (match: any, group: string) {
                return group.toUpperCase();
            });
        }
    );

    // Replace HTML entities within the attribute values
    jsx = jsx.replace(/&amp;/g, "");
    return jsx;

}