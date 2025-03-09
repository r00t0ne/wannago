function nextPage() {
    window.location.href = "yes.html"; // Yes butonuna basınca yönlendirilecek sayfa
}

function moveButton() {
    const button = document.getElementById("noButton");
    
    // Mobilde her tıklamada buton kayacak şekilde position'ı değiştirelim
    if (window.innerWidth <= 768) {
        const maxX = window.innerWidth - button.offsetWidth;
        const maxY = window.innerHeight - button.offsetHeight;
        
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;
    }
    else {
        // Masaüstü için mevcut kayma davranışı
        const maxX = window.innerWidth - button.offsetWidth;
        const maxY = window.innerHeight - button.offsetHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;
    }
}
