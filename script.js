// Phone mask
document.getElementById('telefone').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    
    if (value.length <= 11) {
        if (value.length >= 11) {
            value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        } else if (value.length >= 10) {
            value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
        } else if (value.length >= 6) {
            value = value.replace(/(\d{2})(\d{4,5})/, '($1) $2');
        } else if (value.length >= 2) {
            value = value.replace(/(\d{2})/, '($1) ');
        }
    }
    
    e.target.value = value;
});

// Email validation
document.getElementById('email').addEventListener('blur', function(e) {
    const email = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const asterisk = e.target.parentElement.querySelector('.asterisk');
    const errorMsg = document.getElementById('email-error');
    
    if (email && !emailRegex.test(email)) {
        e.target.style.borderColor = '#ff4444';
        asterisk.classList.add('error');
        errorMsg.textContent = 'Email inválido';
        e.target.setCustomValidity('Por favor, insira um email válido');
    } else {
        e.target.style.borderColor = '#333';
        asterisk.classList.remove('error');
        errorMsg.textContent = '';
        e.target.setCustomValidity('');
    }
});

// Phone validation
document.getElementById('telefone').addEventListener('blur', function(e) {
    const phone = e.target.value.replace(/\D/g, '');
    const asterisk = e.target.parentElement.querySelector('.asterisk');
    const errorMsg = document.getElementById('telefone-error');
    
    if (phone && phone.length < 10) {
        e.target.style.borderColor = '#ff4444';
        asterisk.classList.add('error');
        errorMsg.textContent = 'Número incompleto';
    } else {
        e.target.style.borderColor = '#333';
        asterisk.classList.remove('error');
        errorMsg.textContent = '';
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});