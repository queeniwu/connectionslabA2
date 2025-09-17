const dialButtons = document.querySelectorAll('.dial-button');
const mainTitle = document.getElementById('mainTitle');

// Initialize the title with individual characters
const titleText = '1(800)-MODERATION';
mainTitle.innerHTML = titleText.split('').map(char => 
    `<span class="char">${char}</span>`
).join('');

const chars = mainTitle.querySelectorAll('.char');

// Position mapping for the sequence 1-800-MODERATE
const sequenceMapping = [
    { pos: 0, expected: '1' },      // 1
    { pos: 1, expected: '(' },      // (
    { pos: 2, expected: '8' },      // 8
    { pos: 3, expected: '0' },      // 0
    { pos: 4, expected: '0' },      // 0
    { pos: 5, expected: ')' },      // )
    { pos: 6, expected: '-' },      // -
    { pos: 7, expected: '6' },      // M
    { pos: 8, expected: '6' },      // O
    { pos: 9, expected: '3' },      // D
    { pos: 10, expected: '3' },     // E
    { pos: 11, expected: '7' },     // R
    { pos: 12, expected: '2' },     // A
    { pos: 13, expected: '8' },     // T
    { pos: 14, expected: '4' },     // I
    { pos: 15, expected: '6' },     // O
    { pos: 16, expected: '6' }      // N
    ];

    let currentStep = 0;

    dialButtons.forEach(button => {
        button.addEventListener('click', () => {
            const number = button.dataset.number;
                
            if (currentStep < sequenceMapping.length) {
                const currentMapping = sequenceMapping[currentStep];
                    
                // Check if this is the correct input
                if (number === currentMapping.expected) {
                
                // Fill the current character
                chars[currentMapping.pos].classList.add('filled');
                currentStep++;
                        
                // Auto-fill parentheses and dashes
                while (currentStep < sequenceMapping.length) {
                    const nextMapping = sequenceMapping[currentStep];
                    if (nextMapping.expected == '(' || nextMapping.expected == ')' || nextMapping.expected == '-') {
                        chars[nextMapping.pos].classList.add('filled');
                                currentStep++;
                    } else {
                        break;
                        }
                    }
                        
                // Check if complete sequence is dialed
                if (currentStep >= sequenceMapping.length) {
                        setTimeout(() => {
                            window.scrollTo(0, document.body.scrollHeight);
                        }, 500);
                    }
                }
                }
            });
        });