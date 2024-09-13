function showSidebar(){
    const sidebar= document.querySelector('.sidebar')
    sidebar.style.display='flex'
}
function closeSidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display='none'

}
document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.counter-info h2');
    const percentages = document.querySelectorAll('.content-list span');
    let hasAnimated = false; // To ensure animation runs only once

    function startCounting() {
        // Counting for the main counters
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target'); // Get target number
            let count = 0; // Initialize count

            const updateCounter = () => {
                if (count < target) {
                    count++; // Increment count
                    counter.textContent = count; // Update the displayed number
                    setTimeout(updateCounter, 5); // Call updateCounter again
                } else {
                    counter.textContent = target; // Ensure final number is displayed
                }
            };

            updateCounter(); // Start counting
        });

        // Counting for the percentages
        percentages.forEach(percentage => {
            const target = +percentage.getAttribute('data-target').slice(0, -1); // Get target percentage
            let count = 0; // Initialize count

            const updatePercentage = () => {
                if (count < target) {
                    count++; // Increment count
                    percentage.textContent = count + '%'; // Update the displayed percentage
                    setTimeout(updatePercentage, 20); // Call updatePercentage again
                } else {
                    percentage.textContent = target + '%'; // Ensure final percentage is displayed
                }
            };

            updatePercentage(); // Start counting
        });
    }

    function handleScroll() {
        const sectionPosition = document.querySelector('.tokenomics').getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition && !hasAnimated) {
            startCounting();
            hasAnimated = true; // Prevent further animations
            window.removeEventListener('scroll', handleScroll); // Remove scroll event listener
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once to check if already in view
});

$(document).ready(function() {
    $('.carousel-content').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 1500,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 980,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }]
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.querySelector('.about-us-container');

    function handleScroll() {
        const sectionPosition = aboutSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            aboutSection.classList.add('animate');
            window.removeEventListener('scroll', handleScroll);
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once to check if already in view
});

