
const button = document.getElementById("SapaButton");
const audio = new Audio("https://cdn.pixabay.com/audio/2022/03/15/audio_0b79d6d42d.mp3");

button.addEventListener("click", () => {
    audio.play();
    alert("Halo! Senang berkenalan denganmu ");
    document.get
});

// Particle Effect Kursor (Gaming)
document.addEventListener("mousemove", function(e) {
    const particle = document.createElement("div");
    particle.className = "particle";
    document.body.appendChild(particle);

    particle.style.left = `${e.clientX}px`;
    particle.style.top = `${e.clientY}px`;

    setTimeout(() => {
        particle.remove();
    }, 500);
});
