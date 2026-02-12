const darkToggleBtn = document.querySelector('.dark-toggle');
const skillTags = document.querySelectorAll('.skill-tag');

function toggleDarkMode() {
    const body = document.body;
    const isDark = body.dataset.theme === 'dark';
    
    body.dataset.theme = isDark ? '' : 'dark';
    
    darkToggleBtn.textContent = isDark ? 'Dark Mode' : 'Light Mode';
}

darkToggleBtn.addEventListener('click', toggleDarkMode);

function initThemeToggle() {
    const body = document.body;
    const isDark = body.dataset.theme === 'dark';
    darkToggleBtn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
}

function initSkillReveal() {
    skillTags.forEach(tag => {
        const text = tag.getAttribute('data-text');
        tag.querySelector('span').textContent = text;
        
        tag.addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.toggle('revealed');
            
            if (this.classList.contains('revealed')) {
                setTimeout(() => {
                    window.open(this.href, '_blank');
                }, 200);
            }
        });
    });
}

// NEW: Initialize hover reveal cards
function initHoverRevealCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        // Optional: Add click-to-toggle for accessibility
        card.addEventListener('click', function() {
            this.querySelector('.reveal').style.opacity = 
                this.querySelector('.reveal').style.opacity === '1' ? '0' : '1';
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initThemeToggle();
    initSkillReveal();
    initHoverRevealCards(); // Added this line
});
