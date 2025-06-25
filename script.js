const patterns = [
    // Creator Card
    { "name": "Creator Info", "height": 380, "demoType": "creator", "category": "Special", "isCreator": true },
    
    // Original patterns
    { "name": "Ripple Effect", "height": 300, "demoType": "ripple", "category": "Animation" },
    { "name": "Shake Animation", "height": 250, "demoType": "shake", "category": "Animation" },
    { "name": "Push Down Effect", "height": 280, "demoType": "pushDown", "category": "Interaction" },
    { "name": "Jelly Effect", "height": 320, "demoType": "jelly", "category": "Animation" },
    { "name": "Swipable Cards", "height": 500, "demoType": "swipable", "category": "Navigation" },
    { "name": "Masonry Layout", "height": 450, "demoType": "masonry", "category": "Layout" },
    { "name": "Infinite Carousel", "height": 200, "demoType": "carousel", "category": "Navigation" },
    { "name": "Accordion UI", "height": 400, "demoType": "accordion", "category": "Navigation" },
    { "name": "Parallax Effect", "height": 550, "demoType": "parallax", "category": "Animation" },
    { "name": "Scroll-triggered Animation", "height": 480, "demoType": "scrollTrigger", "category": "Animation" },
    { "name": "Sticky Header", "height": 220, "demoType": "sticky", "category": "Layout" },
    { "name": "Horizontal Scroll", "height": 350, "demoType": "horizontalScroll", "category": "Navigation" },
    { "name": "Glassmorphism", "height": 420, "demoType": "glass", "category": "Design" },
    { "name": "Claymorphism", "height": 380, "demoType": "clay", "category": "Design" },
    { "name": "Neumorphism", "height": 360, "demoType": "neumorphism", "category": "Design" },
    { "name": "Minimalism", "height": 500, "demoType": "minimalism", "category": "Design" },
    { "name": "Typography Driven", "height": 450, "demoType": "typography", "category": "Design" },
    { "name": "Grid Layout", "height": 400, "demoType": "grid", "category": "Layout" },
    { "name": "Broken Grid", "height": 480, "demoType": "brokenGrid", "category": "Layout" },
    { "name": "Card UI", "height": 320, "demoType": "cardUI", "category": "Component" },
    { "name": "Split Screen", "height": 550, "demoType": "splitScreen", "category": "Layout" },
    { "name": "Hero Video", "height": 600, "demoType": "heroVideo", "category": "Media" },
    { "name": "Micro-interaction", "height": 280, "demoType": "micro", "category": "Interaction" },
    { "name": "Loading Animation", "height": 300, "demoType": "loading", "category": "Feedback" },
    { "name": "Cursor Effect", "height": 250, "demoType": "cursor", "category": "Interaction" },
    { "name": "Kinetic Typography", "height": 400, "demoType": "kinetic", "category": "Animation" },
    { "name": "Hamburger Menu", "height": 200, "demoType": "hamburger", "category": "Navigation" },
    { "name": "Mega Menu", "height": 450, "demoType": "megaMenu", "category": "Navigation" },
    { "name": "Floating Label", "height": 280, "demoType": "floatingLabel", "category": "Form" },
    { "name": "Step Form", "height": 480, "demoType": "stepForm", "category": "Form" },
    { "name": "Infinite Scroll", "height": 550, "demoType": "infiniteScroll", "category": "Navigation" },
    { "name": "Lazy Loading", "height": 400, "demoType": "lazyLoading", "category": "Performance" },
    { "name": "Skeleton Screen", "height": 350, "demoType": "skeleton", "category": "Feedback" },
    
    // New trending patterns
    { "name": "Dark Mode Toggle", "height": 280, "demoType": "darkMode", "category": "Interaction" },
    { "name": "Morphing Button", "height": 320, "demoType": "morphingButton", "category": "Animation" },
    { "name": "Blob Animation", "height": 400, "demoType": "blob", "category": "Animation" },
    { "name": "Liquid Button", "height": 300, "demoType": "liquidButton", "category": "Interaction" },
    { "name": "Magnetic Button", "height": 280, "demoType": "magneticButton", "category": "Interaction" },
    { "name": "Text Reveal", "height": 350, "demoType": "textReveal", "category": "Animation" },
    { "name": "Image Hover Zoom", "height": 400, "demoType": "imageHoverZoom", "category": "Media" },
    { "name": "Tilt Card", "height": 380, "demoType": "tiltCard", "category": "Interaction" },
    { "name": "Glitch Effect", "height": 320, "demoType": "glitch", "category": "Animation" },
    { "name": "Neon Glow", "height": 300, "demoType": "neonGlow", "category": "Design" },
    { "name": "Progress Bar", "height": 250, "demoType": "progressBar", "category": "Feedback" },
    { "name": "Flip Card", "height": 400, "demoType": "flipCard", "category": "Animation" },
    { "name": "Slide Panel", "height": 500, "demoType": "slidePanel", "category": "Navigation" },
    { "name": "Modal Overlay", "height": 450, "demoType": "modal", "category": "Component" },
    { "name": "Tooltip", "height": 200, "demoType": "tooltip", "category": "Component" },
    { "name": "Dropdown Menu", "height": 350, "demoType": "dropdown", "category": "Navigation" },
    { "name": "Tab Navigation", "height": 380, "demoType": "tabs", "category": "Navigation" },
    { "name": "Toggle Switch", "height": 180, "demoType": "toggle", "category": "Form" },
    { "name": "Range Slider", "height": 220, "demoType": "rangeSlider", "category": "Form" },
    { "name": "Checkbox Animation", "height": 200, "demoType": "checkboxAnim", "category": "Form" },
    { "name": "Radio Button Group", "height": 250, "demoType": "radioGroup", "category": "Form" },
    { "name": "File Upload", "height": 320, "demoType": "fileUpload", "category": "Form" },
    { "name": "Search Bar", "height": 180, "demoType": "searchBar", "category": "Form" },
    { "name": "Notification Toast", "height": 200, "demoType": "toast", "category": "Feedback" },
    { "name": "Badge Counter", "height": 150, "demoType": "badge", "category": "Component" },
    { "name": "Avatar Group", "height": 200, "demoType": "avatarGroup", "category": "Component" },
    { "name": "Breadcrumb", "height": 180, "demoType": "breadcrumb", "category": "Navigation" },
    { "name": "Pagination", "height": 200, "demoType": "pagination", "category": "Navigation" },
    { "name": "Timeline", "height": 600, "demoType": "timeline", "category": "Layout" },
    { "name": "Chat Bubble", "height": 400, "demoType": "chatBubble", "category": "Component" },
    { "name": "Price Card", "height": 500, "demoType": "priceCard", "category": "Component" },
    { "name": "Feature List", "height": 450, "demoType": "featureList", "category": "Component" },
    { "name": "Testimonial", "height": 380, "demoType": "testimonial", "category": "Component" },
    { "name": "Call to Action", "height": 250, "demoType": "cta", "category": "Component" },
    { "name": "Social Proof", "height": 200, "demoType": "socialProof", "category": "Component" },
    { "name": "Image Gallery", "height": 400, "demoType": "imageGallery", "category": "Media" },
    { "name": "Video Player", "height": 350, "demoType": "videoPlayer", "category": "Media" },
    { "name": "Audio Player", "height": 200, "demoType": "audioPlayer", "category": "Media" },
    { "name": "Kanban Board", "height": 500, "demoType": "kanban", "category": "Layout" },
    { "name": "Calendar UI", "height": 450, "demoType": "calendar", "category": "Component" },
    { "name": "Data Table", "height": 400, "demoType": "dataTable", "category": "Component" },
    { "name": "Chart Widget", "height": 350, "demoType": "chart", "category": "Component" },
    { "name": "Gauge Meter", "height": 300, "demoType": "gauge", "category": "Component" },
    
    // Additional cutting-edge patterns
    { "name": "Particle System", "height": 400, "demoType": "particles", "category": "Animation" },
    { "name": "Lottie Animation", "height": 350, "demoType": "lottie", "category": "Animation" },
    { "name": "CSS Grid Playground", "height": 450, "demoType": "gridPlayground", "category": "Layout" },
    { "name": "3D Card Flip", "height": 380, "demoType": "card3D", "category": "Animation" },
    { "name": "Elastic Search", "height": 200, "demoType": "elasticSearch", "category": "Form" },
    { "name": "Voice UI Indicator", "height": 250, "demoType": "voiceUI", "category": "Interaction" },
    { "name": "Biometric Scanner", "height": 300, "demoType": "biometric", "category": "Security" },
    { "name": "AR View Finder", "height": 400, "demoType": "arViewfinder", "category": "AR/VR" },
    { "name": "Neural Network Viz", "height": 450, "demoType": "neuralNetwork", "category": "Data Viz" },
    { "name": "Quantum Loader", "height": 320, "demoType": "quantumLoader", "category": "Feedback" },
    { "name": "Hologram Effect", "height": 380, "demoType": "hologram", "category": "Animation" },
    { "name": "Gesture Control", "height": 300, "demoType": "gestureControl", "category": "Interaction" },
    { "name": "Smart Assistant", "height": 350, "demoType": "smartAssistant", "category": "AI" },
    { "name": "Crypto Wallet", "height": 400, "demoType": "cryptoWallet", "category": "Fintech" },
    { "name": "NFT Gallery", "height": 450, "demoType": "nftGallery", "category": "Web3" },
    { "name": "Metaverse Portal", "height": 500, "demoType": "metaversePortal", "category": "AR/VR" },
    { "name": "Brain Wave", "height": 300, "demoType": "brainWave", "category": "Animation" },
    { "name": "DNA Helix", "height": 400, "demoType": "dnaHelix", "category": "Science" },
    { "name": "Quantum Tunnel", "height": 350, "demoType": "quantumTunnel", "category": "Animation" },
    { "name": "Cyberpunk HUD", "height": 450, "demoType": "cyberpunkHUD", "category": "Gaming" },
    { "name": "Space Warp", "height": 400, "demoType": "spaceWarp", "category": "Animation" },
    { "name": "Matrix Rain", "height": 500, "demoType": "matrixRain", "category": "Animation" },
    { "name": "Plasma Ball", "height": 350, "demoType": "plasmaBall", "category": "Animation" },
    { "name": "Magnetic Field", "height": 380, "demoType": "magneticField", "category": "Physics" },
    { "name": "Aurora Effect", "height": 400, "demoType": "aurora", "category": "Nature" },
    { "name": "Fire Simulation", "height": 350, "demoType": "fireSimulation", "category": "Physics" },
    { "name": "Water Ripples", "height": 300, "demoType": "waterRipples", "category": "Physics" },
    { "name": "Lightning Effect", "height": 380, "demoType": "lightning", "category": "Nature" },
    { "name": "Prism Rainbow", "height": 320, "demoType": "prismRainbow", "category": "Optics" },
    { "name": "Gravity Wells", "height": 400, "demoType": "gravityWells", "category": "Physics" },
    { "name": "Sound Visualizer", "height": 300, "demoType": "soundVisualizer", "category": "Audio" },
    { "name": "EQ Spectrum", "height": 250, "demoType": "eqSpectrum", "category": "Audio" },
    { "name": "Waveform", "height": 200, "demoType": "waveform", "category": "Audio" },
    { "name": "VU Meter", "height": 180, "demoType": "vuMeter", "category": "Audio" },
    { "name": "Oscilloscope", "height": 280, "demoType": "oscilloscope", "category": "Audio" },
    { "name": "Fourier Transform", "height": 350, "demoType": "fourierTransform", "category": "Math" },
    { "name": "Fractal Generator", "height": 400, "demoType": "fractalGenerator", "category": "Math" },
    { "name": "Mandelbrot Set", "height": 380, "demoType": "mandelbrotSet", "category": "Math" },
    { "name": "Conway's Life", "height": 350, "demoType": "conwaysLife", "category": "Simulation" },
    { "name": "Flocking Birds", "height": 400, "demoType": "flockingBirds", "category": "AI" },
    { "name": "Swarm Intelligence", "height": 380, "demoType": "swarmIntelligence", "category": "AI" },
    { "name": "Cellular Automata", "height": 350, "demoType": "cellularAutomata", "category": "Simulation" },
    { "name": "Perlin Noise", "height": 320, "demoType": "perlinNoise", "category": "Procedural" },
    { "name": "Voronoi Diagram", "height": 380, "demoType": "voronoiDiagram", "category": "Math" },
    { "name": "Delaunay Triangulation", "height": 350, "demoType": "delaunayTriangulation", "category": "Math" },
    { "name": "L-System", "height": 400, "demoType": "lSystem", "category": "Procedural" },
    { "name": "Generative Art", "height": 450, "demoType": "generativeArt", "category": "Art" },
    { "name": "ASCII Art", "height": 300, "demoType": "asciiArt", "category": "Art" },
    { "name": "Pixel Art", "height": 280, "demoType": "pixelArt", "category": "Art" },
    { "name": "Voxel Renderer", "height": 350, "demoType": "voxelRenderer", "category": "3D" },
    { "name": "Ray Tracer", "height": 400, "demoType": "rayTracer", "category": "3D" },
    { "name": "Mesh Deformation", "height": 380, "demoType": "meshDeformation", "category": "3D" },
    
    // 2024年トレンドエフェクト
    { "name": "Scroll Snap", "height": 320, "demoType": "scrollSnap", "category": "Navigation" },
    { "name": "Bento Grid", "height": 450, "demoType": "bentoGrid", "category": "Layout" },
    { "name": "Infinite Marquee", "height": 200, "demoType": "infiniteMarquee", "category": "Animation" },
    { "name": "Spotlight Effect", "height": 400, "demoType": "spotlight", "category": "Interaction" },
    { "name": "Text Scramble", "height": 280, "demoType": "textScramble", "category": "Animation" },
    { "name": "Elastic Cursor", "height": 300, "demoType": "elasticCursor", "category": "Interaction" },
    { "name": "Morphing Cards", "height": 350, "demoType": "morphingCards", "category": "Animation" },
    { "name": "Sticky Cards", "height": 500, "demoType": "stickyCards", "category": "Layout" },
    { "name": "Reveal On Scroll", "height": 400, "demoType": "revealOnScroll", "category": "Animation" },
    { "name": "Floating Elements", "height": 350, "demoType": "floatingElements", "category": "Animation" },
    
    // AI・テック系エフェクト
    { "name": "Terminal Typing", "height": 300, "demoType": "terminalTyping", "category": "Tech" },
    { "name": "Code Rain", "height": 400, "demoType": "codeRain", "category": "Tech" },
    { "name": "Retro CRT", "height": 350, "demoType": "retroCRT", "category": "Retro" },
    { "name": "Synthwave Grid", "height": 450, "demoType": "synthwaveGrid", "category": "Retro" },
    { "name": "Cyber Scan", "height": 320, "demoType": "cyberScan", "category": "Tech" },
    { "name": "Data Stream", "height": 380, "demoType": "dataStream", "category": "Tech" },
    
    // インタラクション系
    { "name": "Multi Layer Parallax", "height": 500, "demoType": "multiLayerParallax", "category": "Animation" },
    { "name": "Smooth Scroll", "height": 350, "demoType": "smoothScroll", "category": "Navigation" },
    { "name": "Image Reveal", "height": 400, "demoType": "imageReveal", "category": "Media" },
    { "name": "Typing Effect", "height": 250, "demoType": "typingEffect", "category": "Animation" },
    { "name": "Wave Text", "height": 300, "demoType": "waveText", "category": "Animation" },
    { "name": "Hover Grow", "height": 280, "demoType": "hoverGrow", "category": "Interaction" },
    
    // モダンUI系
    { "name": "Brutalist Card", "height": 380, "demoType": "brutalistCard", "category": "Design" },
    { "name": "Y2K Aesthetic", "height": 350, "demoType": "y2kAesthetic", "category": "Retro" },
    { "name": "Minimal Hover", "height": 300, "demoType": "minimalHover", "category": "Interaction" },
    { "name": "Geometric Transition", "height": 400, "demoType": "geometricTransition", "category": "Animation" },
    { "name": "Color Morph", "height": 320, "demoType": "colorMorph", "category": "Animation" }
];

// Demo generators
const demoGenerators = {
    creator: () => `
        <div class="creator-card-demo">
            <img src="profile.jpg" alt="RYUTA" class="creator-card-avatar">
            <div class="creator-card-info">
                <h3 class="creator-card-name">RYUTA⛰️高知の山奥</h3>
                <p class="creator-card-title">整体師/パーソナルトレーナー<br>（百歳製造所 代表）<br>バイブコーダー</p>
                <div class="creator-card-links">
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" class="creator-card-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                    </a>
                    <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" class="creator-card-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    `,
    
    ripple: () => '<div class="ripple-demo"></div>',
    
    shake: () => '<div class="shake-demo"></div>',
    
    pushDown: () => '<button class="push-down-demo">PUSH</button>',
    
    jelly: () => '<div class="jelly-demo"></div>',
    
    swipable: () => `
        <div class="swipable-demo">
            <div class="swipable-card">1</div>
            <div class="swipable-card">2</div>
            <div class="swipable-card">3</div>
        </div>
    `,
    
    masonry: () => `
        <div class="masonry-demo">
            <div class="masonry-item"></div>
            <div class="masonry-item"></div>
            <div class="masonry-item"></div>
            <div class="masonry-item"></div>
            <div class="masonry-item"></div>
            <div class="masonry-item"></div>
        </div>
    `,
    
    carousel: () => `
        <div class="carousel-demo">
            <div class="carousel-track">
                ${Array(10).fill().map(() => '<div class="carousel-item"></div>').join('')}
            </div>
        </div>
    `,
    
    accordion: () => `
        <div class="accordion-demo">
            <div class="accordion-item">
                <div class="accordion-header">Header 1</div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header">Header 2</div>
                <div class="accordion-content"></div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header">Header 3</div>
            </div>
        </div>
    `,
    
    parallax: () => `
        <div class="parallax-demo">
            <div class="parallax-layer parallax-bg"></div>
            <div class="parallax-layer parallax-mid"></div>
            <div class="parallax-layer parallax-front"></div>
        </div>
    `,
    
    scrollTrigger: () => `
        <div class="scroll-trigger-demo">
            <div class="scroll-line"></div>
            <div class="scroll-line"></div>
            <div class="scroll-line"></div>
        </div>
    `,
    
    sticky: () => `
        <div class="sticky-demo">
            <div class="sticky-header">Header</div>
            <div class="sticky-content"></div>
        </div>
    `,
    
    horizontalScroll: () => `
        <div class="horizontal-scroll-demo">
            <div class="horizontal-content">
                ${Array(5).fill().map(() => '<div class="horizontal-item"></div>').join('')}
            </div>
        </div>
    `,
    
    glass: () => '<div class="glass-demo"></div>',
    
    clay: () => '<div class="clay-demo"></div>',
    
    neumorphism: () => `
        <div class="neumorphism-demo">
            <div class="neumorphism-inner"></div>
        </div>
    `,
    
    minimalism: () => `
        <div class="minimalism-demo">
            <div class="minimal-circle"></div>
            <div class="minimal-line"></div>
        </div>
    `,
    
    typography: () => `
        <div class="typography-demo">
            <div class="typo-large">TYPE</div>
            <div class="typo-small">DESIGN</div>
        </div>
    `,
    
    grid: () => `
        <div class="grid-demo">
            ${Array(9).fill().map(() => '<div class="grid-item"></div>').join('')}
        </div>
    `,
    
    brokenGrid: () => `
        <div class="broken-grid-demo">
            ${Array(8).fill().map(() => '<div class="broken-item"></div>').join('')}
        </div>
    `,
    
    cardUI: () => `
        <div class="card-ui-demo">
            <div class="card-ui-header"></div>
            <div class="card-ui-content">
                <div class="card-ui-title"></div>
                <div class="card-ui-text"></div>
                <div class="card-ui-text"></div>
            </div>
        </div>
    `,
    
    splitScreen: () => `
        <div class="split-screen-demo">
            <div class="split-left"></div>
            <div class="split-right"></div>
        </div>
    `,
    
    heroVideo: () => `
        <div class="hero-video-demo">
            <div class="play-button">
                <div class="play-icon"></div>
            </div>
        </div>
    `,
    
    micro: () => `
        <div class="micro-demo">
            <div class="micro-heart"></div>
            <div class="micro-star"></div>
        </div>
    `,
    
    loading: () => `
        <div class="loading-demo">
            <div class="loading-dot"></div>
            <div class="loading-dot"></div>
            <div class="loading-dot"></div>
        </div>
    `,
    
    cursor: () => `
        <div class="cursor-demo">
            <div class="cursor-trail"></div>
            <div class="cursor-trail"></div>
            <div class="cursor-trail"></div>
            <div class="cursor-trail"></div>
        </div>
    `,
    
    kinetic: () => `
        <div class="kinetic-demo">
            <span class="kinetic-word">MOVE</span>
            <span class="kinetic-word"> </span>
            <span class="kinetic-word">TEXT</span>
        </div>
    `,
    
    hamburger: () => `
        <div class="hamburger-demo">
            <div class="hamburger-line"></div>
            <div class="hamburger-line"></div>
            <div class="hamburger-line"></div>
        </div>
    `,
    
    megaMenu: () => `
        <div class="mega-menu-demo">
            <div class="mega-menu-header">Menu</div>
            <div class="mega-menu-dropdown">
                ${Array(6).fill().map(() => '<div class="mega-menu-item"></div>').join('')}
            </div>
        </div>
    `,
    
    floatingLabel: () => `
        <div class="floating-label-demo">
            <input type="text" class="floating-input" placeholder=" ">
            <label class="floating-label">Enter text</label>
        </div>
    `,
    
    stepForm: () => `
        <div class="step-form-demo">
            <div class="step-indicator">
                <div class="step">1</div>
                <div class="step active">2</div>
                <div class="step">3</div>
            </div>
            <div class="step-content"></div>
        </div>
    `,
    
    infiniteScroll: () => `
        <div class="infinite-scroll-demo">
            <div class="scroll-content">
                ${Array(8).fill().map((_, i) => `<div class="scroll-item">Item ${i + 1}</div>`).join('')}
            </div>
        </div>
    `,
    
    lazyLoading: () => `
        <div class="lazy-loading-demo">
            <div class="lazy-item"></div>
            <div class="lazy-item"></div>
            <div class="lazy-item"></div>
        </div>
    `,
    
    skeleton: () => `
        <div class="skeleton-demo">
            <div class="skeleton-card">
                <div class="skeleton-avatar"></div>
                <div class="skeleton-line"></div>
                <div class="skeleton-line"></div>
                <div class="skeleton-line"></div>
            </div>
        </div>
    `,
    
    // New demo generators
    darkMode: () => `
        <div class="dark-mode-demo">
            <div class="dark-mode-toggle">
                <div class="toggle-circle"></div>
            </div>
        </div>
    `,
    
    morphingButton: () => `
        <div class="morphing-button-demo">
            <button class="morphing-btn">
                <span class="btn-text">HOVER ME</span>
                <div class="morph-bg"></div>
            </button>
        </div>
    `,
    
    blob: () => `
        <div class="blob-demo">
            <div class="blob-shape"></div>
        </div>
    `,
    
    liquidButton: () => `
        <div class="liquid-button-demo">
            <button class="liquid-btn">
                <span>LIQUID</span>
                <div class="liquid"></div>
            </button>
        </div>
    `,
    
    magneticButton: () => `
        <div class="magnetic-button-demo">
            <button class="magnetic-btn">MAGNETIC</button>
        </div>
    `,
    
    textReveal: () => `
        <div class="text-reveal-demo">
            <div class="reveal-text">REVEAL</div>
        </div>
    `,
    
    imageHoverZoom: () => `
        <div class="image-hover-demo">
            <div class="hover-image"></div>
        </div>
    `,
    
    tiltCard: () => `
        <div class="tilt-card-demo">
            <div class="tilt-card">
                <div class="card-content">TILT</div>
            </div>
        </div>
    `,
    
    glitch: () => `
        <div class="glitch-demo">
            <div class="glitch-text">GLITCH</div>
        </div>
    `,
    
    neonGlow: () => `
        <div class="neon-demo">
            <div class="neon-text">NEON</div>
        </div>
    `,
    
    progressBar: () => `
        <div class="progress-demo">
            <div class="progress-bar">
                <div class="progress-fill"></div>
            </div>
        </div>
    `,
    
    flipCard: () => `
        <div class="flip-card-demo">
            <div class="flip-card">
                <div class="flip-front">FRONT</div>
                <div class="flip-back">BACK</div>
            </div>
        </div>
    `,
    
    slidePanel: () => `
        <div class="slide-panel-demo">
            <div class="slide-trigger">MENU</div>
            <div class="slide-panel">Panel</div>
        </div>
    `,
    
    modal: () => `
        <div class="modal-demo">
            <button class="modal-trigger">OPEN</button>
            <div class="modal-overlay">
                <div class="modal-content">Modal</div>
            </div>
        </div>
    `,
    
    tooltip: () => `
        <div class="tooltip-demo">
            <div class="tooltip-trigger">HOVER</div>
            <div class="tooltip-content">Tooltip</div>
        </div>
    `,
    
    dropdown: () => `
        <div class="dropdown-demo">
            <div class="dropdown-trigger">Menu ▼</div>
            <div class="dropdown-menu">
                <div class="dropdown-item">Item 1</div>
                <div class="dropdown-item">Item 2</div>
                <div class="dropdown-item">Item 3</div>
            </div>
        </div>
    `,
    
    tabs: () => `
        <div class="tabs-demo">
            <div class="tab-list">
                <div class="tab active">Tab 1</div>
                <div class="tab">Tab 2</div>
                <div class="tab">Tab 3</div>
            </div>
            <div class="tab-content">Content 1</div>
        </div>
    `,
    
    toggle: () => `
        <div class="toggle-demo">
            <div class="toggle-switch">
                <div class="toggle-slider"></div>
            </div>
        </div>
    `,
    
    rangeSlider: () => `
        <div class="range-slider-demo">
            <div class="range-slider">
                <div class="range-track"></div>
                <div class="range-thumb"></div>
            </div>
        </div>
    `,
    
    checkboxAnim: () => `
        <div class="checkbox-demo">
            <div class="checkbox">
                <div class="checkmark">✓</div>
            </div>
        </div>
    `,
    
    radioGroup: () => `
        <div class="radio-demo">
            <div class="radio-group">
                <div class="radio active"></div>
                <div class="radio"></div>
                <div class="radio"></div>
            </div>
        </div>
    `,
    
    fileUpload: () => `
        <div class="file-upload-demo">
            <div class="upload-area">
                <div class="upload-icon">📁</div>
                <div class="upload-text">Drop files</div>
            </div>
        </div>
    `,
    
    searchBar: () => `
        <div class="search-demo">
            <div class="search-bar">
                <div class="search-icon">🔍</div>
                <input type="text" placeholder="Search..." class="search-input">
            </div>
        </div>
    `,
    
    toast: () => `
        <div class="toast-demo">
            <div class="toast-notification">
                <div class="toast-icon">✓</div>
                <div class="toast-message">Success!</div>
            </div>
        </div>
    `,
    
    badge: () => `
        <div class="badge-demo">
            <div class="badge-container">
                <div class="badge-icon">🔔</div>
                <div class="badge-count">3</div>
            </div>
        </div>
    `,
    
    avatarGroup: () => `
        <div class="avatar-group-demo">
            <div class="avatar"></div>
            <div class="avatar"></div>
            <div class="avatar"></div>
            <div class="avatar-more">+2</div>
        </div>
    `,
    
    breadcrumb: () => `
        <div class="breadcrumb-demo">
            <span class="breadcrumb-item">Home</span>
            <span class="breadcrumb-separator">></span>
            <span class="breadcrumb-item">Products</span>
            <span class="breadcrumb-separator">></span>
            <span class="breadcrumb-item active">Item</span>
        </div>
    `,
    
    pagination: () => `
        <div class="pagination-demo">
            <div class="pagination">
                <div class="page-btn">‹</div>
                <div class="page-btn">1</div>
                <div class="page-btn active">2</div>
                <div class="page-btn">3</div>
                <div class="page-btn">›</div>
            </div>
        </div>
    `,
    
    timeline: () => `
        <div class="timeline-demo">
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">Event 1</div>
            </div>
            <div class="timeline-item">
                <div class="timeline-dot active"></div>
                <div class="timeline-content">Event 2</div>
            </div>
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">Event 3</div>
            </div>
        </div>
    `,
    
    chatBubble: () => `
        <div class="chat-demo">
            <div class="chat-bubble left">Hello!</div>
            <div class="chat-bubble right">Hi there!</div>
            <div class="chat-bubble left">How are you?</div>
        </div>
    `,
    
    priceCard: () => `
        <div class="price-card-demo">
            <div class="price-header">Pro</div>
            <div class="price-amount">$29</div>
            <div class="price-period">/month</div>
            <div class="price-features">
                <div class="feature">✓ Feature 1</div>
                <div class="feature">✓ Feature 2</div>
            </div>
        </div>
    `,
    
    featureList: () => `
        <div class="feature-list-demo">
            <div class="feature-item">
                <div class="feature-icon">⚡</div>
                <div class="feature-text">Fast</div>
            </div>
            <div class="feature-item">
                <div class="feature-icon">🔒</div>
                <div class="feature-text">Secure</div>
            </div>
            <div class="feature-item">
                <div class="feature-icon">📱</div>
                <div class="feature-text">Mobile</div>
            </div>
        </div>
    `,
    
    testimonial: () => `
        <div class="testimonial-demo">
            <div class="testimonial-quote">"Amazing product!"</div>
            <div class="testimonial-author">- John Doe</div>
            <div class="testimonial-stars">★★★★★</div>
        </div>
    `,
    
    cta: () => `
        <div class="cta-demo">
            <div class="cta-title">Ready to start?</div>
            <button class="cta-button">Get Started</button>
        </div>
    `,
    
    socialProof: () => `
        <div class="social-proof-demo">
            <div class="proof-avatars">
                <div class="proof-avatar"></div>
                <div class="proof-avatar"></div>
                <div class="proof-avatar"></div>
            </div>
            <div class="proof-text">1000+ users</div>
        </div>
    `,
    
    imageGallery: () => `
        <div class="gallery-demo">
            <div class="gallery-grid">
                <div class="gallery-item"></div>
                <div class="gallery-item"></div>
                <div class="gallery-item"></div>
                <div class="gallery-item"></div>
            </div>
        </div>
    `,
    
    videoPlayer: () => `
        <div class="video-player-demo">
            <div class="video-screen"></div>
            <div class="video-controls">
                <div class="play-pause">▶</div>
                <div class="progress-track">
                    <div class="progress-filled"></div>
                </div>
                <div class="volume">🔊</div>
            </div>
        </div>
    `,
    
    audioPlayer: () => `
        <div class="audio-player-demo">
            <div class="audio-play">▶</div>
            <div class="audio-progress">
                <div class="audio-filled"></div>
            </div>
            <div class="audio-time">2:30</div>
        </div>
    `,
    
    kanban: () => `
        <div class="kanban-demo">
            <div class="kanban-column">
                <div class="column-header">To Do</div>
                <div class="kanban-card">Task 1</div>
                <div class="kanban-card">Task 2</div>
            </div>
            <div class="kanban-column">
                <div class="column-header">Doing</div>
                <div class="kanban-card">Task 3</div>
            </div>
        </div>
    `,
    
    calendar: () => `
        <div class="calendar-demo">
            <div class="calendar-header">March 2024</div>
            <div class="calendar-grid">
                <div class="calendar-day">1</div>
                <div class="calendar-day">2</div>
                <div class="calendar-day active">15</div>
                <div class="calendar-day">16</div>
                <div class="calendar-day">17</div>
                <div class="calendar-day">18</div>
            </div>
        </div>
    `,
    
    dataTable: () => `
        <div class="table-demo">
            <div class="table-header">
                <div class="table-cell">Name</div>
                <div class="table-cell">Status</div>
            </div>
            <div class="table-row">
                <div class="table-cell">John</div>
                <div class="table-cell">Active</div>
            </div>
            <div class="table-row">
                <div class="table-cell">Jane</div>
                <div class="table-cell">Pending</div>
            </div>
        </div>
    `,
    
    chart: () => `
        <div class="chart-demo">
            <div class="chart-bars">
                <div class="chart-bar" style="height: 60%"></div>
                <div class="chart-bar" style="height: 80%"></div>
                <div class="chart-bar" style="height: 40%"></div>
                <div class="chart-bar" style="height: 70%"></div>
            </div>
        </div>
    `,
    
    gauge: () => `
        <div class="gauge-demo">
            <div class="gauge-circle">
                <div class="gauge-fill"></div>
                <div class="gauge-center">75%</div>
            </div>
        </div>
    `,
    
    // New cutting-edge demos
    particles: () => `
        <div class="particles-demo">
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
            <div class="particle"></div>
        </div>
    `,
    
    lottie: () => `
        <div class="lottie-demo">
            <div class="lottie-container">
                <div class="lottie-shape"></div>
            </div>
        </div>
    `,
    
    gridPlayground: () => `
        <div class="grid-playground-demo">
            <div class="grid-playground">
                <div class="grid-cell"></div>
                <div class="grid-cell large"></div>
                <div class="grid-cell"></div>
                <div class="grid-cell tall"></div>
                <div class="grid-cell"></div>
                <div class="grid-cell wide"></div>
            </div>
        </div>
    `,
    
    card3D: () => `
        <div class="card-3d-demo">
            <div class="card-3d">
                <div class="card-3d-face front">FRONT</div>
                <div class="card-3d-face back">BACK</div>
            </div>
        </div>
    `,
    
    elasticSearch: () => `
        <div class="elastic-search-demo">
            <div class="search-elastic">
                <input type="text" placeholder="Search..." class="elastic-input">
                <div class="search-suggestions">
                    <div class="suggestion">React</div>
                    <div class="suggestion">Redux</div>
                    <div class="suggestion">Router</div>
                </div>
            </div>
        </div>
    `,
    
    voiceUI: () => `
        <div class="voice-ui-demo">
            <div class="voice-indicator">
                <div class="voice-wave"></div>
                <div class="voice-wave"></div>
                <div class="voice-wave"></div>
                <div class="voice-wave"></div>
            </div>
        </div>
    `,
    
    biometric: () => `
        <div class="biometric-demo">
            <div class="biometric-scanner">
                <div class="scan-line"></div>
                <div class="fingerprint"></div>
            </div>
        </div>
    `,
    
    arViewfinder: () => `
        <div class="ar-viewfinder-demo">
            <div class="ar-frame">
                <div class="ar-corner tl"></div>
                <div class="ar-corner tr"></div>
                <div class="ar-corner bl"></div>
                <div class="ar-corner br"></div>
                <div class="ar-target"></div>
            </div>
        </div>
    `,
    
    neuralNetwork: () => `
        <div class="neural-network-demo">
            <div class="network-layer">
                <div class="neuron"></div>
                <div class="neuron"></div>
                <div class="neuron"></div>
            </div>
            <div class="network-layer">
                <div class="neuron"></div>
                <div class="neuron"></div>
                <div class="neuron"></div>
                <div class="neuron"></div>
            </div>
            <div class="network-layer">
                <div class="neuron"></div>
                <div class="neuron"></div>
            </div>
        </div>
    `,
    
    quantumLoader: () => `
        <div class="quantum-loader-demo">
            <div class="quantum-ring">
                <div class="quantum-particle"></div>
                <div class="quantum-particle"></div>
                <div class="quantum-particle"></div>
            </div>
        </div>
    `,
    
    hologram: () => `
        <div class="hologram-demo">
            <div class="hologram-effect">
                <div class="hologram-text">HOLOGRAM</div>
                <div class="scan-lines"></div>
            </div>
        </div>
    `,
    
    gestureControl: () => `
        <div class="gesture-control-demo">
            <div class="gesture-hand">
                <div class="gesture-trail"></div>
                <div class="gesture-trail"></div>
                <div class="gesture-trail"></div>
            </div>
        </div>
    `,
    
    smartAssistant: () => `
        <div class="smart-assistant-demo">
            <div class="assistant-orb">
                <div class="orb-pulse"></div>
                <div class="orb-core"></div>
            </div>
        </div>
    `,
    
    cryptoWallet: () => `
        <div class="crypto-wallet-demo">
            <div class="wallet-card">
                <div class="wallet-balance">0.00432 BTC</div>
                <div class="wallet-chip"></div>
                <div class="wallet-pattern"></div>
            </div>
        </div>
    `,
    
    nftGallery: () => `
        <div class="nft-gallery-demo">
            <div class="nft-frame">
                <div class="nft-artwork"></div>
                <div class="nft-glow"></div>
            </div>
        </div>
    `,
    
    metaversePortal: () => `
        <div class="metaverse-portal-demo">
            <div class="portal-ring">
                <div class="portal-energy"></div>
                <div class="portal-core"></div>
            </div>
        </div>
    `,
    
    brainWave: () => `
        <div class="brain-wave-demo">
            <div class="brain-outline">
                <div class="wave-line"></div>
                <div class="wave-line"></div>
                <div class="wave-line"></div>
            </div>
        </div>
    `,
    
    dnaHelix: () => `
        <div class="dna-helix-demo">
            <div class="dna-strand">
                <div class="dna-base"></div>
                <div class="dna-base"></div>
                <div class="dna-base"></div>
                <div class="dna-base"></div>
                <div class="dna-base"></div>
                <div class="dna-base"></div>
            </div>
        </div>
    `,
    
    quantumTunnel: () => `
        <div class="quantum-tunnel-demo">
            <div class="tunnel-rings">
                <div class="tunnel-ring"></div>
                <div class="tunnel-ring"></div>
                <div class="tunnel-ring"></div>
                <div class="tunnel-ring"></div>
            </div>
        </div>
    `,
    
    cyberpunkHUD: () => `
        <div class="cyberpunk-hud-demo">
            <div class="hud-interface">
                <div class="hud-corner"></div>
                <div class="hud-data">SYSTEM ONLINE</div>
                <div class="hud-progress"></div>
            </div>
        </div>
    `,
    
    spaceWarp: () => `
        <div class="space-warp-demo">
            <div class="warp-lines">
                <div class="warp-line"></div>
                <div class="warp-line"></div>
                <div class="warp-line"></div>
                <div class="warp-line"></div>
            </div>
        </div>
    `,
    
    matrixRain: () => `
        <div class="matrix-rain-demo">
            <div class="matrix-column">
                <div class="matrix-char">0</div>
                <div class="matrix-char">1</div>
                <div class="matrix-char">0</div>
                <div class="matrix-char">1</div>
            </div>
            <div class="matrix-column">
                <div class="matrix-char">1</div>
                <div class="matrix-char">0</div>
                <div class="matrix-char">1</div>
                <div class="matrix-char">0</div>
            </div>
            <div class="matrix-column">
                <div class="matrix-char">0</div>
                <div class="matrix-char">1</div>
                <div class="matrix-char">0</div>
                <div class="matrix-char">1</div>
            </div>
        </div>
    `,
    
    plasmaBall: () => `
        <div class="plasma-ball-demo">
            <div class="plasma-sphere">
                <div class="plasma-lightning"></div>
                <div class="plasma-lightning"></div>
                <div class="plasma-lightning"></div>
            </div>
        </div>
    `,
    
    magneticField: () => `
        <div class="magnetic-field-demo">
            <div class="magnetic-lines">
                <div class="field-line"></div>
                <div class="field-line"></div>
                <div class="field-line"></div>
                <div class="field-line"></div>
            </div>
        </div>
    `,
    
    aurora: () => `
        <div class="aurora-demo">
            <div class="aurora-lights">
                <div class="aurora-wave"></div>
                <div class="aurora-wave"></div>
                <div class="aurora-wave"></div>
            </div>
        </div>
    `,
    
    fireSimulation: () => `
        <div class="fire-simulation-demo">
            <div class="fire-base">
                <div class="flame"></div>
                <div class="flame"></div>
                <div class="flame"></div>
                <div class="flame"></div>
            </div>
        </div>
    `,
    
    waterRipples: () => `
        <div class="water-ripples-demo">
            <div class="water-surface">
                <div class="ripple-circle"></div>
                <div class="ripple-circle"></div>
                <div class="ripple-circle"></div>
            </div>
        </div>
    `,
    
    lightning: () => `
        <div class="lightning-demo">
            <div class="lightning-bolt">
                <div class="bolt-segment"></div>
                <div class="bolt-segment"></div>
                <div class="bolt-segment"></div>
            </div>
        </div>
    `,
    
    prismRainbow: () => `
        <div class="prism-rainbow-demo">
            <div class="prism-light">
                <div class="light-beam"></div>
                <div class="rainbow-spectrum"></div>
            </div>
        </div>
    `,
    
    gravityWells: () => `
        <div class="gravity-wells-demo">
            <div class="gravity-field">
                <div class="gravity-well"></div>
                <div class="gravity-particle"></div>
                <div class="gravity-particle"></div>
                <div class="gravity-particle"></div>
            </div>
        </div>
    `,
    
    soundVisualizer: () => `
        <div class="sound-visualizer-demo">
            <div class="visualizer-bars">
                <div class="viz-bar"></div>
                <div class="viz-bar"></div>
                <div class="viz-bar"></div>
                <div class="viz-bar"></div>
                <div class="viz-bar"></div>
                <div class="viz-bar"></div>
            </div>
        </div>
    `,
    
    eqSpectrum: () => `
        <div class="eq-spectrum-demo">
            <div class="eq-bands">
                <div class="eq-band"></div>
                <div class="eq-band"></div>
                <div class="eq-band"></div>
                <div class="eq-band"></div>
                <div class="eq-band"></div>
            </div>
        </div>
    `,
    
    waveform: () => `
        <div class="waveform-demo">
            <div class="wave-display">
                <div class="wave-peak"></div>
                <div class="wave-peak"></div>
                <div class="wave-peak"></div>
                <div class="wave-peak"></div>
            </div>
        </div>
    `,
    
    vuMeter: () => `
        <div class="vu-meter-demo">
            <div class="vu-display">
                <div class="vu-needle"></div>
                <div class="vu-scale"></div>
            </div>
        </div>
    `,
    
    oscilloscope: () => `
        <div class="oscilloscope-demo">
            <div class="scope-screen">
                <div class="scope-trace"></div>
                <div class="scope-grid"></div>
            </div>
        </div>
    `,
    
    fourierTransform: () => `
        <div class="fourier-transform-demo">
            <div class="fourier-wave">
                <div class="fourier-component"></div>
                <div class="fourier-component"></div>
                <div class="fourier-component"></div>
            </div>
        </div>
    `,
    
    fractalGenerator: () => `
        <div class="fractal-generator-demo">
            <div class="fractal-pattern">
                <div class="fractal-branch"></div>
                <div class="fractal-branch"></div>
                <div class="fractal-branch"></div>
                <div class="fractal-branch"></div>
            </div>
        </div>
    `,
    
    mandelbrotSet: () => `
        <div class="mandelbrot-set-demo">
            <div class="mandelbrot-container">
                <div class="mandelbrot-detail"></div>
            </div>
        </div>
    `,
    
    conwaysLife: () => `
        <div class="conways-life-demo">
            <div class="life-grid">
                <div class="life-cell alive"></div>
                <div class="life-cell"></div>
                <div class="life-cell alive"></div>
                <div class="life-cell alive"></div>
                <div class="life-cell"></div>
                <div class="life-cell alive"></div>
            </div>
        </div>
    `,
    
    flockingBirds: () => `
        <div class="flocking-birds-demo">
            <div class="flock-container">
                <div class="bird"></div>
                <div class="bird"></div>
                <div class="bird"></div>
                <div class="bird"></div>
            </div>
        </div>
    `,
    
    swarmIntelligence: () => `
        <div class="swarm-intelligence-demo">
            <div class="swarm-container">
                <div class="swarm-agent"></div>
                <div class="swarm-agent"></div>
                <div class="swarm-agent"></div>
                <div class="swarm-agent"></div>
                <div class="swarm-agent"></div>
            </div>
        </div>
    `,
    
    cellularAutomata: () => `
        <div class="cellular-automata-demo">
            <div class="automata-grid">
                <div class="automata-cell active"></div>
                <div class="automata-cell"></div>
                <div class="automata-cell active"></div>
                <div class="automata-cell active"></div>
                <div class="automata-cell"></div>
                <div class="automata-cell active"></div>
            </div>
        </div>
    `,
    
    perlinNoise: () => `
        <div class="perlin-noise-demo">
            <div class="noise-field">
                <div class="noise-overlay"></div>
            </div>
        </div>
    `,
    
    voronoiDiagram: () => `
        <div class="voronoi-diagram-demo">
            <div class="voronoi-container">
                <div class="voronoi-cell"></div>
                <div class="voronoi-cell"></div>
                <div class="voronoi-cell"></div>
                <div class="voronoi-cell"></div>
                <div class="voronoi-seed"></div>
                <div class="voronoi-seed"></div>
                <div class="voronoi-seed"></div>
                <div class="voronoi-seed"></div>
            </div>
        </div>
    `,
    
    delaunayTriangulation: () => `
        <div class="delaunay-triangulation-demo">
            <div class="delaunay-container">
                <div class="triangle-edge"></div>
                <div class="triangle-edge"></div>
                <div class="triangle-edge"></div>
                <div class="triangle-edge"></div>
                <div class="triangle-edge"></div>
                <div class="triangle-edge"></div>
                <div class="triangle-vertex"></div>
                <div class="triangle-vertex"></div>
                <div class="triangle-vertex"></div>
                <div class="triangle-vertex"></div>
                <div class="triangle-vertex"></div>
            </div>
        </div>
    `,
    
    lSystem: () => `
        <div class="l-system-demo">
            <div class="l-system-container">
                <div class="l-branch"></div>
                <div class="l-branch"></div>
                <div class="l-branch"></div>
                <div class="l-branch"></div>
                <div class="l-branch"></div>
                <div class="l-branch"></div>
                <div class="l-branch"></div>
            </div>
        </div>
    `,
    
    generativeArt: () => `
        <div class="generative-art-demo">
            <div class="generative-container">
                <div class="art-element"></div>
                <div class="art-element"></div>
                <div class="art-element"></div>
                <div class="art-element"></div>
                <div class="art-element"></div>
            </div>
        </div>
    `,
    
    asciiArt: () => `
        <div class="ascii-art-demo">
            <div class="ascii-display">
                <div class="ascii-line">░▒▓█</div>
                <div class="ascii-line">▓▒░█</div>
                <div class="ascii-line">█░▒▓</div>
            </div>
        </div>
    `,
    
    pixelArt: () => `
        <div class="pixel-art-demo">
            <div class="pixel-container">
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
                <div class="pixel"></div>
            </div>
        </div>
    `,
    
    voxelRenderer: () => `
        <div class="voxel-renderer-demo">
            <div class="voxel-scene">
                <div class="voxel"></div>
                <div class="voxel"></div>
                <div class="voxel"></div>
                <div class="voxel"></div>
            </div>
        </div>
    `,
    
    rayTracer: () => `
        <div class="ray-tracer-demo">
            <div class="ray-scene">
                <div class="ray-sphere"></div>
                <div class="ray-light"></div>
                <div class="ray-reflection"></div>
            </div>
        </div>
    `,
    
    meshDeformation: () => `
        <div class="mesh-deformation-demo">
            <div class="mesh-object">
                <div class="mesh-vertex"></div>
                <div class="mesh-vertex"></div>
                <div class="mesh-vertex"></div>
                <div class="mesh-vertex"></div>
            </div>
        </div>
    `,
    
    // 2024年トレンドエフェクト
    scrollSnap: () => `
        <div class="scroll-snap-demo">
            <div class="snap-container">
                <div class="snap-item">1</div>
                <div class="snap-item">2</div>
                <div class="snap-item">3</div>
            </div>
        </div>
    `,
    
    bentoGrid: () => `
        <div class="bento-grid-demo">
            <div class="bento-item large">A</div>
            <div class="bento-item">B</div>
            <div class="bento-item">C</div>
            <div class="bento-item wide">D</div>
            <div class="bento-item">E</div>
            <div class="bento-item tall">F</div>
        </div>
    `,
    
    infiniteMarquee: () => `
        <div class="infinite-marquee-demo">
            <div class="marquee-content">
                <span>VIBE CODER</span>
                <span>EFFECT</span>
                <span>LIBRARY</span>
                <span>MODERN</span>
            </div>
        </div>
    `,
    
    spotlight: () => `
        <div class="spotlight-demo">
            <div class="spotlight-area">
                <div class="spotlight-circle"></div>
                <div class="spotlight-text">HOVER ME</div>
            </div>
        </div>
    `,
    
    textScramble: () => `
        <div class="text-scramble-demo">
            <div class="scramble-text">EFFECT</div>
        </div>
    `,
    
    elasticCursor: () => `
        <div class="elastic-cursor-demo">
            <div class="cursor-target">HOVER</div>
            <div class="elastic-dot"></div>
        </div>
    `,
    
    morphingCards: () => `
        <div class="morphing-cards-demo">
            <div class="morph-card">
                <div class="morph-content">CARD</div>
            </div>
        </div>
    `,
    
    terminalTyping: () => `
        <div class="terminal-typing-demo">
            <div class="terminal-window">
                <div class="terminal-header">
                    <div class="terminal-dots"></div>
                </div>
                <div class="terminal-content">
                    <span class="terminal-prompt">$</span>
                    <span class="typing-text">npm install effect</span>
                    <span class="cursor-blink">|</span>
                </div>
            </div>
        </div>
    `,
    
    codeRain: () => `
        <div class="code-rain-demo">
            <div class="code-column">01</div>
            <div class="code-column">10</div>
            <div class="code-column">11</div>
            <div class="code-column">01</div>
            <div class="code-column">10</div>
        </div>
    `,
    
    retroCRT: () => `
        <div class="retro-crt-demo">
            <div class="crt-screen">
                <div class="crt-scanlines"></div>
                <div class="crt-content">RETRO</div>
            </div>
        </div>
    `,
    
    synthwaveGrid: () => `
        <div class="synthwave-grid-demo">
            <div class="synthwave-horizon"></div>
            <div class="synthwave-grid"></div>
            <div class="synthwave-glow"></div>
        </div>
    `,
    
    typingEffect: () => `
        <div class="typing-effect-demo">
            <div class="typing-container">
                <span class="typed-text">Hello World</span>
                <span class="typing-cursor">|</span>
            </div>
        </div>
    `,
    
    waveText: () => `
        <div class="wave-text-demo">
            <div class="wave-letter">W</div>
            <div class="wave-letter">A</div>
            <div class="wave-letter">V</div>
            <div class="wave-letter">E</div>
        </div>
    `,
    
    brutalistCard: () => `
        <div class="brutalist-card-demo">
            <div class="brutal-card">
                <div class="brutal-header">BRUTAL</div>
                <div class="brutal-content">DESIGN</div>
            </div>
        </div>
    `,
    
    y2kAesthetic: () => `
        <div class="y2k-aesthetic-demo">
            <div class="y2k-container">
                <div class="y2k-text">Y2K</div>
                <div class="y2k-shine"></div>
                <div class="y2k-grid"></div>
            </div>
        </div>
    `,
    
    geometricTransition: () => `
        <div class="geometric-transition-demo">
            <div class="geo-shape triangle"></div>
            <div class="geo-shape circle"></div>
            <div class="geo-shape square"></div>
        </div>
    `,
    
    colorMorph: () => `
        <div class="color-morph-demo">
            <div class="morph-shape"></div>
        </div>
    `
};

// Shuffle array for more dynamic layout
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}


// Add fadeInUp animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Search functionality
let allPatterns = [];
let hintsData = [];
let patternsData = [];

// Load data
async function loadData() {
    try {
        const [hintsResponse, patternsResponse] = await Promise.all([
            fetch('./hints.json'),
            fetch('./patterns.json')
        ]);
        
        hintsData = await hintsResponse.json();
        patternsData = await patternsResponse.json();
        
        // Merge pattern data with existing patterns array
        allPatterns = patterns.map(pattern => {
            const patternData = patternsData.find(p => p.id === pattern.demoType);
            return {
                ...pattern,
                ...patternData
            };
        });
    } catch (error) {
        console.error('Error loading data:', error);
        allPatterns = patterns;
    }
}

// Search function
function searchPatterns(query) {
    if (!query.trim()) {
        return allPatterns;
    }
    
    const queryLower = query.toLowerCase();
    const results = new Set();
    
    // Search by hint mapping
    const matchingHints = hintsData.filter(hint => 
        hint.hint.toLowerCase().includes(queryLower)
    );
    
    matchingHints.forEach(hint => {
        const pattern = allPatterns.find(p => p.demoType === hint.patternId);
        if (pattern) results.add(pattern);
    });
    
    // Direct search in pattern names and descriptions
    allPatterns.forEach(pattern => {
        if (pattern.name.toLowerCase().includes(queryLower) ||
            (pattern.name_ja && pattern.name_ja.toLowerCase().includes(queryLower)) ||
            (pattern.name_en && pattern.name_en.toLowerCase().includes(queryLower)) ||
            (pattern.description && pattern.description.toLowerCase().includes(queryLower)) ||
            (pattern.tags && pattern.tags.some(tag => tag.toLowerCase().includes(queryLower))) ||
            pattern.category.toLowerCase().includes(queryLower)) {
            results.add(pattern);
        }
    });
    
    return Array.from(results);
}

// Create search UI
function createSearchUI() {
    const container = document.querySelector('.container');
    
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.innerHTML = `
        <div class="search-wrapper">
            <input type="text" id="searchInput" placeholder="UIパターンを検索... (例: カード、ボタン、アニメーション)" class="search-input">
            <div class="search-icon">🔍</div>
        </div>
        <div class="search-results-count" id="resultsCount"></div>
    `;
    
    container.insertBefore(searchContainer, container.firstChild);
    
    // Add search event listener
    const searchInput = document.getElementById('searchInput');
    const resultsCount = document.getElementById('resultsCount');
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value;
        const results = searchPatterns(query);
        
        // Update results count
        if (query.trim()) {
            resultsCount.textContent = `${results.length}件の結果`;
            resultsCount.style.display = 'block';
        } else {
            resultsCount.style.display = 'none';
        }
        
        // Re-render gallery with results
        renderGallery(results);
    });
}

// Performance optimizations
let loadedCards = 0;
const INITIAL_LOAD = 30; // 初期表示数
const LOAD_MORE_COUNT = 20; // 追加読み込み数

// Create cards with lazy loading
function createCards() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    loadedCards = 0;
    
    const shuffledPatterns = shuffleArray(patterns);
    
    // 初期表示分のみレンダリング
    loadInitialCards(shuffledPatterns, gallery);
    
    // スクロール監視で追加読み込み
    setupInfiniteScroll(shuffledPatterns, gallery);
}

function loadInitialCards(shuffledPatterns, gallery) {
    const initialPatterns = shuffledPatterns.slice(0, INITIAL_LOAD);
    
    initialPatterns.forEach((pattern, index) => {
        const card = createCardElement(pattern, index);
        gallery.appendChild(card);
    });
    
    loadedCards = INITIAL_LOAD;
}

// 無限スクロール設定
function setupInfiniteScroll(shuffledPatterns, gallery) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && loadedCards < shuffledPatterns.length) {
                loadMoreCards(shuffledPatterns, gallery);
            }
        });
    }, {
        rootMargin: '100px'
    });
    
    // センチネル要素を作成
    const sentinel = document.createElement('div');
    sentinel.id = 'scroll-sentinel';
    sentinel.style.height = '1px';
    gallery.appendChild(sentinel);
    observer.observe(sentinel);
}

// 追加カード読み込み
function loadMoreCards(shuffledPatterns, gallery) {
    const nextBatch = shuffledPatterns.slice(loadedCards, loadedCards + LOAD_MORE_COUNT);
    
    nextBatch.forEach((pattern, index) => {
        const card = createCardElement(pattern, loadedCards + index);
        gallery.insertBefore(card, document.getElementById('scroll-sentinel'));
    });
    
    loadedCards += nextBatch.length;
}

// カード要素作成を関数化（重複コード削減）
function createCardElement(pattern, index) {
    const card = document.createElement('div');
    card.className = pattern.isCreator ? 'card creator-card' : 'card';
    
    // パフォーマンス最適化のプロパティ追加
    card.style.willChange = 'transform';
    
    // Stagger animation
    card.style.animationDelay = `${(index % 30) * 50}ms`;
    card.style.opacity = '0';
    card.style.animation = 'fadeInUp 0.6s ease forwards';
    
    const cardInner = document.createElement('div');
    cardInner.className = 'card-inner';
    
    const demoContainer = document.createElement('div');
    demoContainer.className = 'demo-container';
    demoContainer.style.height = `${pattern.height}px`;
    
    // Generate demo HTML
    const demoGenerator = demoGenerators[pattern.demoType];
    if (demoGenerator) {
        demoContainer.innerHTML = demoGenerator();
    }
    
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    
    const patternName = document.createElement('div');
    patternName.className = 'pattern-name';
    patternName.textContent = pattern.name;
    
    // Add category badge
    if (pattern.category) {
        const categoryBadge = document.createElement('div');
        categoryBadge.className = 'category-badge';
        categoryBadge.textContent = pattern.category;
        overlay.appendChild(categoryBadge);
    }
    
    overlay.appendChild(patternName);
    cardInner.appendChild(demoContainer);
    cardInner.appendChild(overlay);
    card.appendChild(cardInner);
    
    // Add click to copy functionality (except for creator card)
    if (!pattern.isCreator) {
        card.addEventListener('click', async (e) => {
            e.preventDefault();
            
            try {
                await navigator.clipboard.writeText(pattern.name);
                
                // Show copy feedback
                const feedback = document.createElement('div');
                feedback.className = 'copy-feedback';
                feedback.textContent = 'コピーしました!';
                card.appendChild(feedback);
                
                // Remove feedback after animation
                setTimeout(() => {
                    if (feedback.parentNode) {
                        feedback.parentNode.removeChild(feedback);
                    }
                }, 1500);
                
            } catch (err) {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = pattern.name;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
            
            // Show copy feedback
            const feedback = document.createElement('div');
            feedback.className = 'copy-feedback';
            feedback.textContent = 'コピーしました!';
            card.appendChild(feedback);
            
            setTimeout(() => {
                if (feedback.parentNode) {
                    feedback.parentNode.removeChild(feedback);
                }
            }, 1500);
        }
        });
    }
    
    return card;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createCards();
});