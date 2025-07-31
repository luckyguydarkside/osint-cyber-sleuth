// OSINT Dashboard JavaScript Enhancements

// Function to simulate terminal output
function simulateTerminalOutput() {
    const terminal = document.getElementById('terminal');
    const messages = [
        "Scanning for open ports...",
        "Gathering WHOIS data...",
        "Analyzing metadata...",
        "Fetching DNS records...",
        "Compiling results..."
    ];
    let index = 0;

    const typeMessage = () => {
        if (index < messages.length) {
            terminal.innerHTML += `<div>${messages[index]}</div>`;
            index++;
            setTimeout(typeMessage, 2000);
        } else {
            terminal.innerHTML += "<div>Scan complete!</div>";
        }
    };
    typeMessage();
}

// Function to create a blinking cursor effect
function blinkingCursor() {
    const cursor = document.getElementById('cursor');
    setInterval(() => {
        cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
    }, 500);
}

// Function to update data visualization
function updateDataVisualization(data) {
    const chart = document.getElementById('dataChart');
    chart.innerHTML = ''; // Reset chart
    data.forEach(item => {
        const bar = document.createElement('div');
        bar.style.height = item.value + 'px';
        bar.className = 'bar';
        chart.appendChild(bar);
    });
}

// Sample data for visualization
const sampleData = [
    { value: 50 },
    { value: 75 },
    { value: 100 },
    { value: 25 },
    { value: 60 }
];

// Initialize functions on page load
document.addEventListener('DOMContentLoaded', () => {
    simulateTerminalOutput();
    blinkingCursor();
    updateDataVisualization(sampleData);
});
```