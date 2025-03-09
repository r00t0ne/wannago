function nextPage() {
    window.location.href = "yes.html"; // Yes butonuna basınca yönlendirilecek sayfa
}

function moveButton() {
    const button = document.getElementById("noButton");

    // Mobilde her tıklamada buton kayacak şekilde position'ı değiştirelim
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

// Bu fonksiyonun çağrılması, mobilde de her tıklamada butonun kaymasını sağlar
document.getElementById('noButton').addEventListener('click', moveButton);
