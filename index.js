function showSidebar(){
    const sidebar= document.querySelector('.sidebar')
    sidebar.style.display='flex'
}
function closeSidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display='none'

}
document.addEventListener('DOMContentLoaded', function() {

    
    let hasAnimated = false; // To ensure animation runs only once

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
document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll('[data-target]');

    counters.forEach(counter => {
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target').replace(/[^0-9]/g, ''); // Remove non-numeric characters
            const count = +counter.innerText.replace(/[^0-9]/g, ''); // Remove non-numeric characters

            const increment = target / 150; // Adjust the divisor to control the speed

            if (count < target) {
                counter.innerText = formatNumber(Math.ceil(count + increment));
                setTimeout(updateCounter, 10); // Update every 10ms
            } else {
                counter.innerText = formatNumber(target);
            }
        };

        const formatNumber = (num) => {
            // Handle your specific cases
            if (counter.innerText.includes('$')) {
                return `$${(num / 1000000).toFixed(1)}M+`; // Format as $X.XM+
            } else {
                return num + counter.innerText.replace(/[0-9]/g, ''); // Append any non-numeric characters
            }
        };

        updateCounter();
    });
});


