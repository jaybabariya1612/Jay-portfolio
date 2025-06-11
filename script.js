document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.getElementById('menu-btn');
    const mainContent = document.getElementById('main-content');
    const preloader = document.getElementById('preloader');
    const mainContainer = document.getElementById('main-container');
    const backToTopButton = document.querySelector('.back-to-top');

    // --- Preloader ---
    window.addEventListener('load', () => {
        if (preloader) {
            preloader.classList.add('hidden');
            if (mainContainer) {
                mainContainer.classList.add('loaded');
            }
        }
    });

    // --- Sidebar Toggle ---
    const toggleSidebar = () => {
        const isActive = sidebar.classList.toggle('active');
        document.body.classList.toggle('sidebar-open', isActive);
        menuBtn.setAttribute('aria-expanded', isActive ? 'true' : 'false');
        menuBtn.innerHTML = isActive ? "<i class='bx bx-x'></i>" : "<i class='bx bx-menu'></i>";
    };

    // Close sidebar function
    const closeSidebar = () => {
        if (sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            document.body.classList.remove('sidebar-open');
            menuBtn.setAttribute('aria-expanded', 'false');
            menuBtn.innerHTML = "<i class='bx bx-menu'></i>";
        }
    };

    // Menu button click handler
    menuBtn.addEventListener("click", toggleSidebar);

    // Close sidebar when clicking outside or on nav link (mobile)
    document.addEventListener('click', (e) => {
        const isMobileView = window.innerWidth < 1200;
        const isClickInsideSidebar = sidebar.contains(e.target);
        const isClickOnMenuBtn = menuBtn.contains(e.target);
        const isNavLink = e.target.closest('.sidebar-nav a');

        if (isMobileView && sidebar.classList.contains('active')) {
            if ((!isClickInsideSidebar && !isClickOnMenuBtn) || isNavLink) {
                closeSidebar();
            }
        }
    });

    // Typing effect
    const textElement = document.getElementById('text');
    const cursorElement = document.getElementById('cursor');
    if (textElement && cursorElement) {
        const texts = ["Full Stack Developer", ".NET Developer", "React Developer", "Problem Solver"];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const type = () => {
            const currentText = texts[textIndex];
            let displayedText = '';

            if (isDeleting) {
                displayedText = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                displayedText = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            textElement.textContent = displayedText;
            cursorElement.style.display = 'inline-block';

            let typeSpeed = 120;
            if (isDeleting) {
                typeSpeed /= 1.5;
            }

            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        };

        setTimeout(type, 1000);
    }

    // --- Intersection Observer for Animations & Active Nav ---
    const sections = document.querySelectorAll('.section');
    const animatedElements = document.querySelectorAll('.animated-section');
    const navLinks = document.querySelectorAll('.sidebar-nav a');
    const progressBars = document.querySelectorAll('.inner_progress');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const navObserverOptions = {
        root: null,
        rootMargin: '-40% 0px -60% 0px',
        threshold: 0
    };

    let progressAnimated = false;

    // Animation Observer Callback
    const animationCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');

                if (entry.target.closest('.skills-section') && !progressAnimated) {
                    animateProgressBars();
                }
            }
        });
    };

    // Navigation Active State Observer Callback
    const navCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting || (entry.target.id === 'home' && window.scrollY < window.innerHeight / 2)) {
                const id = entry.target.getAttribute('id');
                let activeLinkFound = false;

                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                        activeLinkFound = true;
                    }
                });

                if (!activeLinkFound && window.scrollY < 100) {
                    const homeLink = document.querySelector('.sidebar-nav a[href="#home"]');
                    if (homeLink) homeLink.classList.add('active');
                }
            }
        });
    };

    const animationObserver = new IntersectionObserver(animationCallback, observerOptions);
    const navObserver = new IntersectionObserver(navCallback, navObserverOptions);

    animatedElements.forEach(el => animationObserver.observe(el));
    sections.forEach(section => navObserver.observe(section));

    // --- Animate Progress Bars ---
    function animateProgressBars() {
        if (progressAnimated) return;
        progressBars.forEach(bar => {
            const level = bar.getAttribute('data-skill-level');
            bar.style.width = level + '%';
        });
        progressAnimated = true;
    }

    // --- Project Filtering ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project_item');

    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            if (button.classList.contains('active')) return;

            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            projectItems.forEach(item => {
                const category = item.getAttribute('data-category');
                const shouldShow = (filter === 'all' || category.includes(filter));

                if (shouldShow) {
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }
            });
        });
    });

    // --- Dynamic Age Calculation ---
    const ageElement = document.getElementById('age');
    if (ageElement) {
        const birthDate = new Date(2006, 7, 13);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        ageElement.textContent = age;
    }

    // --- Dynamic Copyright Year ---
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // --- Back to Top Button ---
    window.addEventListener('scroll', () => {
        if (backToTopButton) {
            if (window.scrollY > 200) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        }
    });

    // Initialize Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyCQ2gbWUBIAmPlwV1wfkovwIXHITV7Q2HU",
        authDomain: "portfoliosubmissions-dad23.firebaseapp.com",
        projectId: "portfoliosubmissions-dad23",
        storageBucket: "portfoliosubmissions-dad23.firebasestorage.app",
        messagingSenderId: "1076465931002",
        appId: "1:1076465931002:web:6433e61dfd87eaa055ef43",
        measurementId: "G-19C9BTV48T"
    };

    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();

    // --- Contact Form Handling ---
    const contactForm = document.querySelector('.php-email-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            const loading = document.querySelector('.loading');
            const errorMessage = document.querySelector('.error-message');
            const sentMessage = document.querySelector('.sent-message');

            loading.style.display = 'block';
            errorMessage.style.display = 'none';
            sentMessage.style.display = 'none';

            try {
                await db.collection('contacts').add({
                    name,
                    email,
                    subject,
                    message,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                });

                loading.style.display = 'none';
                sentMessage.style.display = 'block';
                this.reset();
            } catch (error) {
                loading.style.display = 'none';
                errorMessage.textContent = 'Error: ' + error.message;
                errorMessage.style.display = 'block';
            }
        });
    }
});
