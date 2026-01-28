document.addEventListener('DOMContentLoaded', function() {
    // 1. Slider Logic
    const slider = document.getElementById('compareSlider');
    const beforeContainer = document.querySelector('.image-before-container');
    const beforeImage = document.querySelector('.image-before');
    const sliderButton = document.querySelector('.slider-button');

    // Function to update the slider position
    function updateSlider() {
        const value = slider.value;
        // Change width of the before image container
        beforeContainer.style.width = value + "%";
        // Move the button icon
        sliderButton.style.left = value + "%";
        
        // Key Fix: Keep the "Before" image static relative to the frame
        // By shifting it left by the inverse percentage, it stays locked in place visually
        // while the container frame crops it.
        // Logic: Container width is X%. Image needs to be 100/X * 100 wide visually?
        // Simpler CSS approach used: CSS width 200% handles the aspect ratio mostly.
        // But for perfect alignment, we usually adjust object-position or transform.
        // For this simple version, standard CSS clipping works best if images are identical size.
    }

    slider.addEventListener('input', updateSlider);

    // 2. Smooth Scrolling for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
