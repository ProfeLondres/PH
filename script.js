// Variables globales
let verbalWheel, mathWheel;
let verbalSpinning = false;
let mathSpinning = false;

// Colores vibrantes para las ruletas
const wheelColors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD',
    '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9', '#F8C471', '#82E0AA',
    '#F1948A', '#85C1E9', '#F4D03F', '#A569BD', '#5DADE2', '#58D68D',
    '#EC7063', '#AF7AC5', '#5499C7', '#52C41A', '#FFD93D', '#FF6B9D',
    '#C44569', '#F8B500', '#6C5CE7', '#00B894', '#FDCB6E', '#E17055'
];

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    initializeWheels();
    setupEventListeners();
    setupModal();
});

// Configurar event listeners
function setupEventListeners() {
    document.getElementById('spinVerbalBtn').addEventListener('click', () => spinWheel('verbal'));
    document.getElementById('spinMathBtn').addEventListener('click', () => spinWheel('math'));
}

// Inicializar las ruletas
function initializeWheels() {
    verbalWheel = document.getElementById('verbalWheel');
    mathWheel = document.getElementById('mathWheel');
    
    drawWheel(verbalWheel, 'verbal');
    drawWheel(mathWheel, 'math');
}

// Dibujar una ruleta
function drawWheel(canvas, type) {
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 140;
    const segments = 30;
    const anglePerSegment = (2 * Math.PI) / segments;
    
    // Limpiar canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Dibujar segmentos
    for (let i = 0; i < segments; i++) {
        const startAngle = i * anglePerSegment - Math.PI / 2;
        const endAngle = (i + 1) * anglePerSegment - Math.PI / 2;
        
        // Color del segmento
        ctx.fillStyle = wheelColors[i];
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fill();
        
        // Borde del segmento
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Número en el segmento
        const textAngle = startAngle + anglePerSegment / 2;
        const textX = centerX + Math.cos(textAngle) * (radius * 0.75);
        const textY = centerY + Math.sin(textAngle) * (radius * 0.75);
        
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 16px Poppins';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText((i + 1).toString(), textX, textY);
        
        // Sombra del texto para mejor legibilidad
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 3;
        ctx.strokeText((i + 1).toString(), textX, textY);
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText((i + 1).toString(), textX, textY);
    }
    
    // Círculo central
    ctx.fillStyle = type === 'verbal' ? '#E74C3C' : '#3498DB';
    ctx.beginPath();
    ctx.arc(centerX, centerY, 25, 0, 2 * Math.PI);
    ctx.fill();
    
    // Borde del círculo central
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Icono en el centro
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 20px FontAwesome';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const icon = type === 'verbal' ? '💬' : '🔢';
    ctx.fillText(icon, centerX, centerY);
}

// Función para girar la ruleta
function spinWheel(type) {
    if ((type === 'verbal' && verbalSpinning) || (type === 'math' && mathSpinning)) {
        return;
    }
    
    const canvas = type === 'verbal' ? verbalWheel : mathWheel;
    const button = document.getElementById(type === 'verbal' ? 'spinVerbalBtn' : 'spinMathBtn');
    
    // Marcar como girando
    if (type === 'verbal') {
        verbalSpinning = true;
    } else {
        mathSpinning = true;
    }
    
    // Deshabilitar botón
    button.disabled = true;
    button.innerHTML = '<div class="loading"></div> GIRANDO...';
    
    // Reproducir sonido
    playSpinSound();
    
    // Generar rotación aleatoria (entre 10 y 12 segundos)
    const minRotations = 10;
    const maxRotations = 12;
    const randomRotations = Math.random() * (maxRotations - minRotations) + minRotations;
    const totalRotation = randomRotations * 360;
    
    // Calcular el número ganador
    const segmentAngle = 360 / 30;
    const finalAngle = totalRotation % 360;
    const winningSegment = Math.floor((360 - finalAngle + segmentAngle / 2) / segmentAngle) % 30;
    const winningNumber = winningSegment + 1;
    
    // Aplicar animación
    canvas.style.transition = `transform ${10 + Math.random() * 2}s cubic-bezier(0.23, 1, 0.32, 1)`;
    canvas.style.transform = `rotate(${totalRotation}deg)`;
    
    // Después de la animación
    setTimeout(() => {
        // Resetear estado
        if (type === 'verbal') {
            verbalSpinning = false;
        } else {
            mathSpinning = false;
        }
        
        // Rehabilitar botón
        button.disabled = false;
        button.innerHTML = `<i class="fas fa-play"></i> GIRAR`;
        
        // Mostrar resultado
        showActivity(type, winningNumber);
        
        // Resetear rotación para la próxima vez
        setTimeout(() => {
            canvas.style.transition = 'none';
            canvas.style.transform = 'rotate(0deg)';
        }, 500);
        
    }, 10000 + Math.random() * 2000);
}

// Reproducir sonido de giro
function playSpinSound() {
    const audio = document.getElementById('spinSound');
    if (audio) {
        audio.currentTime = 0;
        audio.play().catch(e => console.log('No se pudo reproducir el sonido:', e));
    }
}

// Mostrar actividad en modal
function showActivity(type, number) {
    const activities = type === 'verbal' ? verbalActivities : mathActivities;
    const activity = activities[number - 1];
    
    if (!activity) {
        console.error('Actividad no encontrada:', type, number);
        return;
    }
    
    // Actualizar contenido del modal
    document.getElementById('modalTitle').textContent = `${number}. ${activity.title}`;
    
    // Contenido de las pestañas
    document.getElementById('objetivoContent').innerHTML = `
        <h3><i class="fas fa-bullseye"></i> Objetivo</h3>
        <p>${activity.objetivo}</p>
    `;
    
    document.getElementById('materialesContent').innerHTML = `
        <h3><i class="fas fa-tools"></i> Materiales Necesarios</h3>
        <p>${activity.materiales}</p>
    `;
    
    document.getElementById('desarrolloContent').innerHTML = `
        <h3><i class="fas fa-play-circle"></i> Desarrollo de la Actividad</h3>
        <p>${activity.desarrollo}</p>
    `;
    
    document.getElementById('ejemplosContent').innerHTML = `
        <h3><i class="fas fa-lightbulb"></i> Ejemplos</h3>
        <ul>
            ${activity.ejemplos.map(ejemplo => `<li>${ejemplo}</li>`).join('')}
        </ul>
    `;
    
    // Mostrar modal
    document.getElementById('activityModal').style.display = 'block';
    
    // Activar primera pestaña
    document.querySelector('.tab-btn.active').classList.remove('active');
    document.querySelector('.tab-pane.active').classList.remove('active');
    document.querySelector('[data-tab="objetivo"]').classList.add('active');
    document.getElementById('objetivo').classList.add('active');
}

// Configurar modal
function setupModal() {
    const modal = document.getElementById('activityModal');
    const closeBtn = document.querySelector('.close');
    
    // Cerrar modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Configurar pestañas
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            
            // Remover clase active de todas las pestañas
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));
            
            // Activar pestaña seleccionada
            btn.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
    
    // Cerrar modal con Escape
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
}

// Función para generar sonido de giro programáticamente
function generateSpinSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.5);
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
}

// Efectos visuales adicionales
function addSparkleEffect(canvas) {
    const rect = canvas.getBoundingClientRect();
    const sparkles = [];
    
    for (let i = 0; i < 10; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.position = 'absolute';
        sparkle.style.left = (rect.left + Math.random() * rect.width) + 'px';
        sparkle.style.top = (rect.top + Math.random() * rect.height) + 'px';
        sparkle.style.width = '4px';
        sparkle.style.height = '4px';
        sparkle.style.background = '#FFD700';
        sparkle.style.borderRadius = '50%';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '999';
        
        document.body.appendChild(sparkle);
        sparkles.push(sparkle);
        
        // Animar sparkle
        sparkle.animate([
            { opacity: 0, transform: 'scale(0)' },
            { opacity: 1, transform: 'scale(1)' },
            { opacity: 0, transform: 'scale(0)' }
        ], {
            duration: 1000,
            easing: 'ease-out'
        });
    }
    
    // Limpiar sparkles después de la animación
    setTimeout(() => {
        sparkles.forEach(sparkle => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        });
    }, 1000);
}

// Función para mostrar notificación de resultado
function showResultNotification(type, number, title) {
    const notification = document.createElement('div');
    notification.className = 'result-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-trophy"></i>
            <h3>¡Actividad Seleccionada!</h3>
            <p><strong>${type === 'verbal' ? 'Verbal' : 'Matemática'} #${number}</strong></p>
            <p>${title}</p>
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        z-index: 1001;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    // Mostrar notificación
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Ocultar notificación
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Mejorar la función showActivity para incluir notificación
const originalShowActivity = showActivity;
showActivity = function(type, number) {
    const activities = type === 'verbal' ? verbalActivities : mathActivities;
    const activity = activities[number - 1];
    
    if (activity) {
        showResultNotification(type, number, activity.title);
    }
    
    originalShowActivity(type, number);
};

// Función para precargar imágenes y recursos
function preloadResources() {
    // Precargar fuentes de iconos si es necesario
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
    link.as = 'style';
    document.head.appendChild(link);
}

// Llamar a precargar recursos
preloadResources();

// Función para manejar errores
window.addEventListener('error', function(event) {
    console.error('Error en la aplicación:', event.error);
});

// Función para debug (solo en desarrollo)
function debugInfo() {
    console.log('Actividades verbales cargadas:', verbalActivities.length);
    console.log('Actividades matemáticas cargadas:', mathActivities.length);
    console.log('Ruletas inicializadas:', !!verbalWheel && !!mathWheel);
}

// Llamar debug info en desarrollo
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    debugInfo();
}