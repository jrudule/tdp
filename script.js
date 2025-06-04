const themeToggleButton = document.getElementById('theme-toggle'); 
const body = document.body; 
 
// Pārbauda, vai lietotājam jau ir saglabāts režīms 
const currentTheme = localStorage.getItem('theme'); 
if (currentTheme) { 
    body.classList.add(currentTheme); 
} else { 
    // Ja nav saglabāts, pārbauda OS preferenci 
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) { 
        body.classList.add('dark-mode'); 
        localStorage.setItem('theme', 'dark-mode'); 
    } 
} 
 
 
themeToggleButton.addEventListener('click', () => { 
    body.classList.toggle('dark-mode'); 
 
    // Saglabā izvēlēto režīmu localStorage 
    if (body.classList.contains('dark-mode')) { 
        localStorage.setItem('theme', 'dark-mode'); 
    } else { 
        localStorage.removeItem('theme'); // Vai localStorage.setItem('theme', 'light-mode'); 
    } 
}); 
 
// Pievieno funkcionalitāti laika līnijas navigācijai (vienkāršs ritināšanas piemērs) 
document.querySelectorAll('.timeline-nav a').forEach(anchor => { 
    anchor.addEventListener('click', function (e) { 
        e.preventDefault(); 
        const targetId = this.getAttribute('href'); 
        const targetElement = document.querySelector(targetId); 
        if(targetElement) { 
            targetElement.scrollIntoView({ 
                behavior: 'smooth' 
            }); 
        } 
    }); 
}); 
