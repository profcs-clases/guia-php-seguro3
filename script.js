document.addEventListener('DOMContentLoaded', () => {
    // 1. Dark Mode Toggle
    const toggleBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    toggleBtn.textContent = currentTheme === 'dark' ? '☀️' : '🌙';

    toggleBtn.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        toggleBtn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
        
        // Recargar diagramas de Mermaid para que cambien de color
        if (typeof mermaid !== 'undefined') {
            mermaid.initialize({ startOnLoad: true, theme: newTheme === 'dark' ? 'dark' : 'default' });
            document.querySelectorAll('.mermaid').forEach(el => {
                el.removeAttribute('data-processed');
            });
            mermaid.init();
        }
    });

    // 2. Active Link Highlighting
    const currentPath = window.location.pathname.split('/').pop();
    const links = document.querySelectorAll('.sidebar nav a');
    links.forEach(link => {
        if (link.getAttribute('href') === currentPath || (currentPath === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });
});