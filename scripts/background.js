const numLines = 15;

for (let i = 0; i < numLines; i++) {
    const line = document.createElement('div');
    line.classList.add('line');

    // różne opóźnienia startu animacji
    const delay = Math.random() * 5; // 0-5s
    line.style.animationDelay = `${delay}s`;

    // różne prędkości animacji
    const duration = 5 + Math.random() * 5; // 5-10s
    line.style.animationDuration = `${duration}s`;

    document.body.appendChild(line);
}