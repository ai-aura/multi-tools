// Tool definitions with categories
const toolCategories = {
    'developer': {
        name: '🛠 Developer Tools',
        icon: 'fas fa-code',
        tools: [
            { id: 'json-formatter', title: 'JSON Formatter', desc: 'Format, validate, and minify JSON data', file: 'json-formatter.html' },
            { id: 'code-minifier', title: 'Code Minifier', desc: 'Minify HTML, CSS, and JavaScript', file: 'code-minifier.html' },
            { id: 'regex-tester', title: 'Regex Tester', desc: 'Test and debug regular expressions', file: 'regex-tester.html' },
            { id: 'base64-converter', title: 'Base64 Encoder/Decoder', desc: 'Convert text and files to/from Base64', file: 'base64-converter.html' },
            { id: 'color-palette-generator', title: 'Color Palette Generator', desc: 'Generate beautiful color palettes', file: 'color-palette-generator.html' },
            { id: 'markdown-previewer', title: 'Markdown Previewer', desc: 'Live markdown editor with preview', file: 'markdown-previewer.html' },
        ]
    },
    'file': {
        name: '📁 File Tools',
        icon: 'fas fa-file',
        tools: [
            { id: 'image-converter', title: 'Image Converter', desc: 'Convert images between JPG, PNG, WEBP', file: 'image-converter.html' },
            { id: 'image-compressor', title: 'Image Compressor', desc: 'Compress image file size', file: 'image-compressor.html' },
            { id: 'image-cropper', title: 'Image Cropper', desc: 'Crop images with live preview', file: 'image-cropper.html' },
            { id: 'video-converter', title: 'Video Converter', desc: 'Convert videos between formats', file: 'video-converter.html' },
            { id: 'audio-converter', title: 'Audio Converter', desc: 'Convert audio between MP3 and WAV', file: 'audio-converter.html' },
            { id: 'audio-trimmer', title: 'Audio Trimmer', desc: 'Trim audio files by start/end time', file: 'audio-trimmer.html' },
        ]
    },
    'utility': {
        name: '⚙️ Utility Tools',
        icon: 'fas fa-tools',
        tools: [
            { id: 'qr-generator', title: 'QR Code Generator', desc: 'Generate QR codes from text or URLs', file: 'qr-generator.html' },
            { id: 'password-generator', title: 'Password Generator', desc: 'Generate secure passwords', file: 'password-generator.html' },
            { id: 'unit-converter', title: 'Unit Converter', desc: 'Convert between units', file: 'unit-converter.html' },
            { id: 'word-counter', title: 'Word Counter', desc: 'Count words, characters, and reading time', file: 'word-counter.html' },
            { id: 'color-picker', title: 'Color Picker', desc: 'Pick colors and get HEX, RGB, HSL values', file: 'color-picker.html' },
            { id: 'text-to-speech', title: 'Text to Speech', desc: 'Convert text to speech', file: 'text-to-speech.html' },
            { id: 'speech-to-text', title: 'Speech to Text', desc: 'Convert voice to text', file: 'speech-to-text.html' },
        ]
    },
    'calculator': {
        name: '🧮 Calculators',
        icon: 'fas fa-calculator',
        tools: [
            { id: 'age-calculator', title: 'Age Calculator', desc: 'Calculate age in years, months, days', file: 'age-calculator.html' },
            { id: 'bmi-calculator', title: 'BMI Calculator', desc: 'Calculate BMI value and category', file: 'bmi-calculator.html' },
            { id: 'emi-calculator', title: 'EMI Calculator', desc: 'Calculate monthly EMI for loans', file: 'emi-calculator.html' },
            { id: 'gpa-calculator', title: 'GPA Calculator', desc: 'Calculate Grade Point Average', file: 'gpa-calculator.html' },
            { id: 'timer-stopwatch', title: 'Timer/Stopwatch', desc: 'Timer and stopwatch functionality', file: 'timer-stopwatch.html' },
        ]
    }
};

// Legacy tools array for backward compatibility
const tools = [{
        id: 'image-converter',
        title: 'Image Converter',
        desc: 'Convert images between JPG, PNG, and WEBP formats.',
        render: renderImageConverter
    },
    {
        id: 'image-compressor',
        title: 'Image Compressor',
        desc: 'Compress image file size with adjustable quality.',
        render: renderImageCompressor
    },
    {
        id: 'image-cropper',
        title: 'Image Cropper',
        desc: 'Upload and crop images with live preview and export.',
        render: renderImageCropper
    },
    {
        id: 'video-converter',
        title: 'Video Converter',
        desc: 'Convert videos between MP4 and WebM (browser-limited).',
        render: renderVideoConverter
    },
    {
        id: 'audio-converter',
        title: 'Audio Converter',
        desc: 'Convert audio between MP3 and WAV formats.',
        render: renderAudioConverter
    },
    {
        id: 'audio-trimmer',
        title: 'Audio Trimmer',
        desc: 'Trim audio files by start/end time and export.',
        render: renderAudioTrimmer
    },
    {
        id: 'age-calculator',
        title: 'Age Calculator',
        desc: 'Calculate your age in years, months, and days.',
        render: renderAgeCalculator
    },
    {
        id: 'emi-calculator',
        title: 'EMI Calculator',
        desc: 'Calculate monthly EMI and total interest for loans.',
        render: renderEmiCalculator
    },
    {
        id: 'gpa-calculator',
        title: 'GPA Calculator',
        desc: 'Calculate your Grade Point Average (GPA) for college or university.',
        render: renderGpaCalculator
    },
    {
        id: 'qr-generator',
        title: 'QR Code Generator',
        desc: 'Generate downloadable QR codes from text or URLs.',
        render: renderQrGenerator
    },
    {
        id: 'password-generator',
        title: 'Password Generator',
        desc: 'Generate secure passwords with custom options.',
        render: renderPasswordGenerator
    },
    {
        id: 'word-counter',
        title: 'Word Counter',
        desc: 'Live count of words, characters, spaces, and reading time.',
        render: renderWordCounter
    },
    {
        id: 'color-picker',
        title: 'Color Picker Tool',
        desc: 'Pick a color and get HEX, RGB, and HSL values.',
        render: renderColorPicker
    },
    {
        id: 'text-to-speech',
        title: 'Text to Speech',
        desc: 'Enter text and listen using SpeechSynthesis API.',
        render: renderTextToSpeech
    },
    {
        id: 'speech-to-text',
        title: 'Speech to Text',
        desc: 'Convert voice to text using Web Speech API.',
        render: renderSpeechToText
    },
    {
        id: 'unit-converter',
        title: 'Unit Converter',
        desc: 'Convert between length, weight, temperature, etc.',
        render: renderUnitConverter
    },
    {
        id: 'bmi-calculator',
        title: 'BMI Calculator',
        desc: 'Calculate BMI value and category.',
        render: renderBmiCalculator
    },
    {
        id: 'timer-stopwatch',
        title: 'Timer / Stopwatch',
        desc: 'Simple timer and stopwatch with start, stop, reset.',
        render: renderTimerStopwatch
    }
];

// Render tool cards with categories
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('toolsGrid');
    
    // Create categorized layout
    Object.entries(toolCategories).forEach(([categoryKey, category]) => {
        // Create category section
        const categorySection = document.createElement('div');
        categorySection.className = 'category-section';
        categorySection.innerHTML = `
            <h2 class="category-title">
                <i class="${category.icon}"></i>
                ${category.name}
            </h2>
            <div class="category-grid">
            </div>
        `;
        
        const categoryGrid = categorySection.querySelector('.category-grid');
        
        // Add tools to category
        category.tools.forEach((tool, i) => {
            const card = document.createElement('div');
            card.className = 'tool-card';
            card.style.animationDelay = `${i * 0.06}s`;
            card.tabIndex = 0;
            card.innerHTML = `
                <h3>${tool.title}</h3>
                <p>${tool.desc}</p>
                <a href="${tool.file}" class="tool-link" target="_blank" rel="noopener">Open Tool</a>
            `;
            card.addEventListener('click', (e) => {
                if (!e.target.classList.contains('tool-link')) {
                    window.open(tool.file, '_blank');
                }
            });
            categoryGrid.appendChild(card);
        });
        
        grid.appendChild(categorySection);
    });
    
    fadeInOnScroll();
});

// Modal logic
const modal = document.getElementById('toolModal');
const modalContent = document.getElementById('modalToolContent');
const closeModalBtn = document.getElementById('closeModalBtn');

function openTool(toolId) {
    if (toolId === 'image-converter') {
        window.open('image-converter.html', '_blank');
        return;
    }
    if (toolId === 'image-compressor') {
        window.open('image-compressor.html', '_blank');
        return;
    }
    if (toolId === 'image-cropper') {
        window.open('image-cropper.html', '_blank');
        return;
    }
    if (toolId === 'video-converter') {
        window.open('video-converter.html', '_blank');
        return;
    }
    if (toolId === 'audio-converter') {
        window.open('audio-converter.html', '_blank');
        return;
    }
    if (toolId === 'audio-trimmer') {
        window.open('audio-trimmer.html', '_blank');
        return;
    }
    if (toolId === 'age-calculator') {
        window.open('age-calculator.html', '_blank');
        return;
    }
    if (toolId === 'emi-calculator') {
        window.open('emi-calculator.html', '_blank');
        return;
    }
    if (toolId === 'speech-to-text') {
        window.open('speech-to-text.html', '_blank');
        return;
    }
    if (toolId === 'gpa-calculator') {
        window.open('gpa-calculator.html', '_blank');
        return;
    }
    if (toolId === 'text-to-speech') {
        window.open('text-to-speech.html', '_blank');
        return;
    }
    if (toolId === 'timer-stopwatch') {
        window.open('timer-stopwatch.html', '_blank');
        return;
    }
    if (toolId === 'qr-generator') {
        window.open('qr-generator.html', '_blank');
        return;
    }
    if (toolId === 'unit-converter') {
        window.open('unit-converter.html', '_blank');
        return;
    }
    if (toolId === 'password-generator') {
        window.open('password-generator.html', '_blank');
        return;
    }
    if (toolId === 'word-counter') {
        window.open('word-counter.html', '_blank');
        return;
    }
    if (toolId === 'bmi-calculator') {
        window.open('bmi-calculator.html', '_blank');
        return;
    }
    if (toolId === 'color-picker') {
        window.open('color-picker.html', '_blank');
        return;
    }
    const tool = tools.find(t => t.id === toolId);
    if (!tool) return;
    modalContent.innerHTML = '';
    tool.render(modalContent);
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// open modal wrapper that also inserts an Open Tool button
function openToolModal(toolId) {
    openTool(toolId);
    // insert open-in-new-tab button at top of modal content
    const openBtn = document.createElement('a');
    openBtn.className = 'open-tool-btn';
    openBtn.href = `https://multi-tool-here.blogspot.com/p/${toolId}.html`;
    openBtn.target = '_blank';
    openBtn.rel = 'noopener';
    openBtn.textContent = 'Open Tool in New Tab';
    // place it before the rest of modal content
    modalContent.prepend(openBtn);
}

function closeModal() {
    modal.classList.add('hidden');
    modalContent.innerHTML = '';
    document.body.style.overflow = '';
}

closeModalBtn.addEventListener('click', closeModal);
window.addEventListener('keydown', e => {
    if (!modal.classList.contains('hidden') && e.key === 'Escape') closeModal();
});
modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
});

// Fade-in animation on scroll
function fadeInOnScroll() {
    const cards = document.querySelectorAll('.tool-card');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });
    cards.forEach(card => observer.observe(card));
}

// ---- Tool Render Functions (Stubs) ----
function renderImageConverter(container) {
    container.innerHTML = '<h2>Image Converter</h2><p>Coming soon...</p>';
}

function renderImageCompressor(container) {
    container.innerHTML = '<h2>Image Compressor</h2><p>Coming soon...</p>';
}

function renderImageCropper(container) {
    container.innerHTML = '<h2>Image Cropper</h2><p>Coming soon...</p>';
}

function renderVideoConverter(container) {
    container.innerHTML = '<h2>Video Converter</h2><p>Coming soon...</p>';
}

function renderAudioConverter(container) {
    container.innerHTML = '<h2>Audio Converter</h2><p>Coming soon...</p>';
}

function renderAudioTrimmer(container) {
    container.innerHTML = '<h2>Audio Trimmer</h2><p>Coming soon...</p>';
}

function renderAgeCalculator(container) {
    container.innerHTML = '<h2>Age Calculator</h2><p>Coming soon...</p>';
}

function renderEmiCalculator(container) {
    container.innerHTML = '<h2>EMI Calculator</h2><p>Coming soon...</p>';
}

function renderGpaCalculator(container) {
    container.innerHTML = '<h2>GPA Calculator</h2><p>Coming soon...</p>';
}

function renderQrGenerator(container) {
    container.innerHTML = '<h2>QR Code Generator</h2><p>Coming soon...</p>';
}

function renderPasswordGenerator(container) {
    container.innerHTML = '<h2>Password Generator</h2><p>Coming soon...</p>';
}

function renderWordCounter(container) {
    container.innerHTML = '<h2>Word Counter</h2><p>Coming soon...</p>';
}

function renderColorPicker(container) {
    container.innerHTML = '<h2>Color Picker Tool</h2><p>Coming soon...</p>';
}

function renderTextToSpeech(container) {
    container.innerHTML = '<h2>Text to Speech</h2><p>Coming soon...</p>';
}

function renderSpeechToText(container) {
    container.innerHTML = '<h2>Speech to Text</h2><p>Coming soon...</p>';
}

function renderUnitConverter(container) {
    container.innerHTML = '<h2>Unit Converter</h2><p>Coming soon...</p>';
}

function renderBmiCalculator(container) {
    container.innerHTML = '<h2>BMI Calculator</h2><p>Coming soon...</p>';
}

function renderTimerStopwatch(container) {
    container.innerHTML = '<h2>Timer / Stopwatch</h2><p>Coming soon...</p>';
}