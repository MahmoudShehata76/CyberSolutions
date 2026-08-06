const fs = require('fs');
const path = require('path');

const convertHtmlToJsx = (html) => {
    // Basic replacements
    let jsx = html.replace(/class=/g, 'className=');
    jsx = jsx.replace(/<!--[\s\S]*?-->/g, ''); // Remove comments
    jsx = jsx.replace(/<img([^>]+)>/g, (match, p1) => {
        if (p1.endsWith('/')) return match;
        return `<img${p1} />`;
    });
    jsx = jsx.replace(/<hr>/g, '<hr />');
    jsx = jsx.replace(/<br>/g, '<br />');
    jsx = jsx.replace(/<input([^>]+)>/g, (match, p1) => {
        if (p1.endsWith('/')) return match;
        return `<input${p1} />`;
    });
    jsx = jsx.replace(/<textarea([^>]+)><\/textarea>/g, '<textarea$1 />');
    return jsx;
};

const processFile = (file) => {
    const content = fs.readFileSync(file, 'utf-8');
    
    // Extract everything between <body> and </body>
    const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (!bodyMatch) return;
    
    let body = bodyMatch[1];
    
    // Remove binary-background and overlay as it's in layout
    // The original HTML has <div class="binary-background">\s*<div class="overlay"></div>\s*</div>
    body = body.replace(/<div class="binary-background">\s*<div class="overlay"><\/div>\s*<\/div>/g, '');
    
    // Remove loader
    body = body.replace(/<div id="loader">[\s\S]*?<\/div>\s*<\/div>/g, '');
    body = body.replace(/<div id="loader">[\s\S]*?<\/div>/g, '');
    
    // Remove stray </div> that might have been left
    body = body.replace(/<\/div>\s*<\/div>\s*<header/g, '<header');
    body = body.replace(/<\/div>\s*<header/g, '<header');
    
    // Remove <nav> ... </nav>
    body = body.replace(/<nav[^>]*>([\s\S]*?)<\/nav>/i, '');
    
    // Remove <footer> ... </footer>
    body = body.replace(/<footer[^>]*>([\s\S]*?)<\/footer>/i, '');
    
    // Remove scripts
    body = body.replace(/<script[\s\S]*?<\/script>/gi, '');
    
    let jsx = convertHtmlToJsx(body);
    
    // Fix inline styles like style="background-image: url('...')"
    jsx = jsx.replace(/style="([^"]*)"/g, (match, p1) => {
        if (p1.includes('background-image')) {
            const urlMatch = p1.match(/url\(['"]?(.*?)['"]?\)/);
            if (urlMatch) {
                return `style={{ backgroundImage: "url('${urlMatch[1]}')" }}`;
            }
        }
        return match;
    });

    const basename = path.basename(file, '.html');
    let pageName = basename === 'index' ? 'page.tsx' : path.join(basename, 'page.tsx');
    let destPath = path.join('app', pageName);
    
    fs.mkdirSync(path.dirname(destPath), { recursive: true });
    
    const componentName = basename.charAt(0).toUpperCase() + basename.slice(1).replace('-', '');
    
    const finalComponent = `import AnimatedSection from "@/components/AnimatedSection";\nimport GSAPWrapper from "@/components/GSAPWrapper";\n\nexport default function ${componentName}() {\n  return (\n    <GSAPWrapper>\n${jsx}\n    </GSAPWrapper>\n  );\n}\n`;
    
    fs.writeFileSync(destPath, finalComponent);
    console.log("Converted " + basename);
};

const dir = 'old_site';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
files.forEach(f => processFile(path.join(dir, f)));

