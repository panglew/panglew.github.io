document.addEventListener('DOMContentLoaded', function() {
    // Check for saved preference in localStorage
    const darkModeEnabled = localStorage.getItem('darkMode') === 'enabled';

    if (darkModeEnabled) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        document.getElementById('toggleMode').checked = true;
        console.log("Dark mode enabled on load");
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        document.getElementById('toggleMode').checked = false;
        console.log("Light mode enabled on load");
    }

    // Add event listener to toggle switch
    document.getElementById('toggleMode').addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
            localStorage.setItem('darkMode', 'enabled');
            console.log("Dark mode activated");
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
            console.log("Light mode activated");
        }
    });

    // Add active class to the current link
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

