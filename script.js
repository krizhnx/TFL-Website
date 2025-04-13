
window.addEventListener("scroll", function () {
  const scrollPos = window.scrollY;

  // Speed factor for first row
  const speed1 = 0.4;
  // Speed factor for second row (could differ if you like)
  const speed2 = 0.4;

  // Move row #1 left as user scrolls down
  const translateX1 = -scrollPos * speed1;
  // Move row #2 left or right as user scrolls down
  const translateX2 = scrollPos * speed2;

  // Apply transforms
  document.getElementById("ticker1").style.transform =
    `translate3d(${translateX1}px, 0, 0)`;

  document.getElementById("ticker2").style.transform =
    `translate3d(${translateX2}px, 0, 0)`;
});

// JavaScript for typing animation
document.addEventListener('DOMContentLoaded', function () {
  const words = ["ideas into IPOs", "pitches into funding", "blueprints into boardrooms", "briefs into breakthroughs"]; // Add more words as needed
  let wordIndex = 0;
  let letterIndex = 0;
  const typingElement = document.querySelector('.typing-animation');

  function typeWord() {
    if (letterIndex < words[wordIndex].length) {
      typingElement.textContent += words[wordIndex].charAt(letterIndex);
      letterIndex++;
      setTimeout(typeWord, 50); // Adjust typing speed as needed
    } else {
      setTimeout(eraseWord, 1000); // Adjust pause before erasing
    }
  }

  function eraseWord() {
    if (letterIndex > 0) {
      typingElement.textContent = words[wordIndex].substring(0, letterIndex - 1);
      letterIndex--;
      setTimeout(eraseWord, 50); // Adjust erasing speed as needed
    } else {
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeWord, 500); // Adjust pause before typing next word
    }
  }

  // Start the typing animation
  typeWord();
});



document.addEventListener('DOMContentLoaded', () => {
  const cursorDot = document.querySelector('.cursor-dot');

  if (!cursorDot) return;

  document.addEventListener('mousemove', e => {
    cursorDot.animate(
      { top: `${e.clientY}px`, left: `${e.clientX}px` },
      { duration: 350, fill: "forwards" }
    );
  });

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      cursorDot.style.width = '40px';
      cursorDot.style.height = '40px';
      cursorDot.style.backgroundColor = 'rgba(255, 193, 7, 0.3)';
    });
    link.addEventListener('mouseleave', () => {
      cursorDot.style.width = '25px';
      cursorDot.style.height = '25px';
      cursorDot.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    });
  });
});

