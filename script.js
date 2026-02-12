// Funcionalidad de búsqueda
const searchInput = document.getElementById('searchInput');
const queryCards = document.querySelectorAll('.query-card');
const categorySections = document.querySelectorAll('.category-section');
const categoryButtons = document.querySelectorAll('.category-btn');

// Búsqueda en tiempo real
searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase().trim();
    let hasResults = false;

    queryCards.forEach(card => {
        const tags = card.getAttribute('data-tags').toLowerCase();
        const title = card.querySelector('h3').textContent.toLowerCase();
        const explanation = card.querySelector('.query-explanation').textContent.toLowerCase();
        const code = card.querySelector('code').textContent.toLowerCase();

        const matches = tags.includes(searchTerm) || 
                       title.includes(searchTerm) || 
                       explanation.includes(searchTerm) ||
                       code.includes(searchTerm);

        if (matches || searchTerm === '') {
            card.classList.remove('hidden');
            hasResults = true;
        } else {
            card.classList.add('hidden');
        }
    });

    // Mostrar/ocultar secciones vacías
    categorySections.forEach(section => {
        const visibleCards = section.querySelectorAll('.query-card:not(.hidden)');
        if (visibleCards.length === 0 && searchTerm !== '') {
            section.style.display = 'none';
        } else {
            section.style.display = 'block';
        }
    });

    // Mensaje de "no hay resultados"
    showNoResults(!hasResults && searchTerm !== '');
});

// Filtrar por categoría
categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remover clase active de todos los botones
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        
        // Agregar clase active al botón clickeado
        this.classList.add('active');

        const category = this.getAttribute('data-category');
        
        // Limpiar búsqueda
        searchInput.value = '';

        if (category === 'all') {
            // Mostrar todas las secciones y cards
            categorySections.forEach(section => {
                section.style.display = 'block';
            });
            queryCards.forEach(card => {
                card.classList.remove('hidden');
            });
        } else {
            // Mostrar solo la sección seleccionada
            categorySections.forEach(section => {
                if (section.getAttribute('data-category') === category) {
                    section.style.display = 'block';
                    // Mostrar todas las cards de esta sección
                    section.querySelectorAll('.query-card').forEach(card => {
                        card.classList.remove('hidden');
                    });
                } else {
                    section.style.display = 'none';
                }
            });
        }

        // Scroll suave al inicio del contenido
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Función para copiar código
function copyCode(button) {
    const pre = button.previousElementSibling;
    const code = pre.querySelector('code').textContent;

    // Usar API moderna de portapapeles
    navigator.clipboard.writeText(code).then(() => {
        // Cambiar texto del botón temporalmente
        const originalText = button.textContent;
        button.textContent = '✅ ¡Copiado!';
        button.classList.add('copied');

        setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        // Fallback para navegadores antiguos
        const textarea = document.createElement('textarea');
        textarea.value = code;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        
        try {
            document.execCommand('copy');
            button.textContent = '✅ ¡Copiado!';
            button.classList.add('copied');
            
            setTimeout(() => {
                button.textContent = '📋 Copiar';
                button.classList.remove('copied');
            }, 2000);
        } catch (err) {
            alert('Error al copiar. Por favor, copia manualmente.');
        }
        
        document.body.removeChild(textarea);
    });
}

// Función para mostrar mensaje de "no hay resultados"
function showNoResults(show) {
    let noResultsDiv = document.querySelector('.no-results');
    
    if (show) {
        if (!noResultsDiv) {
            noResultsDiv = document.createElement('div');
            noResultsDiv.className = 'no-results';
            noResultsDiv.innerHTML = `
                <h3>🔍 No se encontraron resultados</h3>
                <p>Intenta con otros términos de búsqueda como: JOIN, COUNT, filtrar, WHERE, etc.</p>
            `;
            document.querySelector('main').appendChild(noResultsDiv);
        }
        noResultsDiv.style.display = 'block';
    } else {
        if (noResultsDiv) {
            noResultsDiv.style.display = 'none';
        }
    }
}

// Atajos de teclado
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K para enfocar en búsqueda
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }

    // Escape para limpiar búsqueda
    if (e.key === 'Escape') {
        searchInput.value = '';
        searchInput.dispatchEvent(new Event('input'));
        searchInput.blur();
    }
});

// Smooth scroll para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Añadir contador de queries visibles
function updateQueryCounter() {
    const visibleQueries = document.querySelectorAll('.query-card:not(.hidden)').length;
    const totalQueries = queryCards.length;
    
    let counter = document.querySelector('.query-counter');
    if (!counter) {
        counter = document.createElement('div');
        counter.className = 'query-counter';
        counter.style.cssText = 'position: fixed; bottom: 20px; right: 20px; background: var(--primary-color); color: white; padding: 10px 20px; border-radius: 25px; box-shadow: 0 4px 8px rgba(0,0,0,0.2); font-weight: bold; z-index: 1000;';
        document.body.appendChild(counter);
    }
    
    counter.textContent = `${visibleQueries} de ${totalQueries} queries`;
}

// Actualizar contador al cargar y al buscar
searchInput.addEventListener('input', updateQueryCounter);
categoryButtons.forEach(btn => btn.addEventListener('click', updateQueryCounter));
updateQueryCounter();

console.log('📊 Biblioteca SQL cargada - 50 queries listos para usar');
console.log('💡 Tip: Usa Ctrl+K (Cmd+K en Mac) para buscar rápidamente');