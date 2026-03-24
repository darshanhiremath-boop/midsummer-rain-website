// ===== Navigation Scroll Effect =====
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== Mobile Navigation Toggle =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ===== Smooth Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Villa Image Gallery =====
const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.getElementById('villaMainImage');

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        // Remove active class from all thumbnails
        thumbnails.forEach(t => t.classList.remove('active'));
        // Add active class to clicked thumbnail
        thumbnail.classList.add('active');
        // Update main image (in production, you'd change the src)
        // mainImage.src = thumbnail.src;
    });
});

// ===== Customization Modals =====
const modalOverlay = document.getElementById('modal-overlay');
const modalContent = document.getElementById('modalContent');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
const learnMoreButtons = document.querySelectorAll('.learn-more-btn');

// Modal content for each customization option
const modalData = {
    space: {
        title: 'Space Customization Options',
        content: `
            <h3 style="color: var(--color-primary); margin-bottom: 1.5rem;">Transform Your Villa Layout</h3>
            
            <div style="margin-bottom: 2rem;">
                <h4 style="color: var(--color-primary); margin-bottom: 1rem;">Option 1: Gourmet Kitchen with Dry & Wet Zones</h4>
                <p style="margin-bottom: 1rem; line-height: 1.6;">Designed for effortless cooking and elegant entertaining. Separate zones for efficient workflow.</p>
                <ul style="margin-left: 1.5rem; line-height: 1.8;">
                    <li>Professional-grade layout</li>
                    <li>Separate prep and cooking areas</li>
                    <li>Enhanced ventilation systems</li>
                </ul>
            </div>

            <div style="margin-bottom: 2rem;">
                <h4 style="color: var(--color-primary); margin-bottom: 1rem;">Option 2: Kitchen with Maid's Room & Private Toilet</h4>
                <p style="margin-bottom: 1rem; line-height: 1.6;">Discreet utility, blending comfort with convenience for household staff.</p>
                <ul style="margin-left: 1.5rem; line-height: 1.8;">
                    <li>Dedicated staff quarters</li>
                    <li>Private bathroom facilities</li>
                    <li>Separate access point</li>
                </ul>
            </div>

            <div style="margin-bottom: 2rem;">
                <h4 style="color: var(--color-primary); margin-bottom: 1rem;">Option 3: Powder Room for Home Theatre / Private Office</h4>
                <p style="margin-bottom: 1rem; line-height: 1.6;">A refined touch that completes your private retreat with dedicated facilities.</p>
            </div>

            <div style="background: #f0f8f5; padding: 1.5rem; border-radius: 8px; margin-top: 2rem;">
                <strong style="color: var(--color-primary);">Request a detailed quote for your preferred configuration.</strong>
            </div>
        `
    },
    flooring: {
        title: 'Premium Marble Flooring Packages',
        content: `
            <h3 style="color: var(--color-primary); margin-bottom: 1.5rem;">Elevate Your Interiors with Timeless Stone</h3>
            
            <div style="margin-bottom: 2rem;">
                <h4 style="color: var(--color-primary); margin-bottom: 1rem;">Package 1: All-Room Marble Elegance</h4>
                <p style="margin-bottom: 1rem; line-height: 1.6;">A seamless canvas of luxury flowing across your entire villa (excluding home theatre).</p>
                <ul style="margin-left: 1.5rem; line-height: 1.8;">
                    <li>Imported marble throughout all floors</li>
                    <li>Premium finishing and installation</li>
                    <li>Professional edge treatments</li>
                </ul>
            </div>

            <div style="margin-bottom: 2rem;">
                <h4 style="color: var(--color-primary); margin-bottom: 1rem;">Package 2: Selective Marble Upgrade</h4>
                <p style="margin-bottom: 1rem; line-height: 1.6;">Master suite, family areas, and corridors elevated with enduring sophistication.</p>
                <ul style="margin-left: 1.5rem; line-height: 1.8;">
                    <li>Master bedroom & bathroom</li>
                    <li>First floor family lounge</li>
                    <li>Second floor lounge area</li>
                    <li>Main circulation corridors</li>
                </ul>
            </div>

            <div style="margin-bottom: 2rem;">
                <h4 style="color: var(--color-primary); margin-bottom: 1rem;">Custom Selection Available</h4>
                <p style="line-height: 1.6;">Choose specific rooms based on your preferences and budget.</p>
            </div>

            <div style="background: #f0f8f5; padding: 1.5rem; border-radius: 8px; margin-top: 2rem;">
                <strong style="color: var(--color-primary);">Contact us for detailed pricing and marble sample viewing.</strong>
            </div>
        `
    },
    sanitary: {
        title: 'High-End Sanitary Ware & CP Fittings',
        content: `
            <h3 style="color: var(--color-primary); margin-bottom: 1.5rem;">World-Class Bathroom Luxury</h3>
            
            <div style="margin-bottom: 2rem;">
                <h4 style="color: var(--color-primary); margin-bottom: 1rem;">Duravit Collections</h4>
                <p style="margin-bottom: 1rem; line-height: 1.6;">Choose from premium series:</p>
                <ul style="margin-left: 1.5rem; line-height: 1.8;">
                    <li><strong>Happy D2 Series</strong> - Designer wash basins, WCs, bathtubs & jacuzzis</li>
                    <li><strong>Qatego Series</strong> - Contemporary minimalist designs</li>
                    <li><strong>Zencha Series</strong> - Zen-inspired luxury fixtures</li>
                </ul>
            </div>

            <div style="margin-bottom: 2rem;">
                <h4 style="color: var(--color-primary); margin-bottom: 1rem;">Hansgrohe Shower Systems</h4>
                <p style="margin-bottom: 1rem; line-height: 1.6;">Upgrade options include:</p>
                <ul style="margin-left: 1.5rem; line-height: 1.8;">
                    <li>Rainfinity overhead showers (360° design)</li>
                    <li>Shoulder shower systems</li>
                    <li>Premium hand showers with multiple jets</li>
                    <li>Thermostatic controls for perfect temperature</li>
                </ul>
            </div>

            <div style="margin-bottom: 2rem;">
                <h4 style="color: var(--color-primary); margin-bottom: 1rem;">Additional Brands Available</h4>
                <p style="line-height: 1.6;">Toto, Kohler, Grohe - designer collections for statement bathrooms</p>
            </div>

            <div style="background: #f0f8f5; padding: 1.5rem; border-radius: 8px; margin-top: 2rem;">
                <strong style="color: var(--color-primary);">Schedule a showroom visit to experience these premium fixtures.</strong>
            </div>
        `
    },
    automation: {
        title: 'Smart Home Automation Packages',
        content: `
            <h3 style="color: var(--color-primary); margin-bottom: 1.5rem;">Intelligent Living at Your Fingertips</h3>
            
            <div style="margin-bottom: 2rem;">
                <h4 style="color: var(--color-primary); margin-bottom: 1rem;">Silver Package</h4>
                <p style="margin-bottom: 1rem; line-height: 1.6;">Essential automation for modern convenience</p>
                <ul style="margin-left: 1.5rem; line-height: 1.8;">
                    <li>28 lighting circuits with on/off control</li>
                    <li>1 motorized curtain (living room)</li>
                    <li>Mobile app control</li>
                    <li>Enhanced security system</li>
                    <li>5 CCTV cameras</li>
                </ul>
            </div>

            <div style="margin-bottom: 2rem;">
                <h4 style="color: var(--color-primary); margin-bottom: 1rem;">Gold Package</h4>
                <p style="margin-bottom: 1rem; line-height: 1.6;">Advanced control with dimming capabilities</p>
                <ul style="margin-left: 1.5rem; line-height: 1.8;">
                    <li>28 on/off + 64 dimmable (DALI) lights</li>
                    <li>3 motorized curtains</li>
                    <li>Complete mobile control</li>
                    <li>Energy monitoring dashboard</li>
                    <li>9 occupancy sensors</li>
                </ul>
            </div>

            <div style="margin-bottom: 2rem;">
                <h4 style="color: var(--color-primary); margin-bottom: 1rem;">Platinum Package</h4>
                <p style="margin-bottom: 1rem; line-height: 1.6;">Complete smart home integration</p>
                <ul style="margin-left: 1.5rem; line-height: 1.8;">
                    <li>42 on/off + 128 dimmable lights</li>
                    <li>7 motorized curtains</li>
                    <li>Full home automation</li>
                    <li>LPG monitoring system</li>
                    <li>10 occupancy sensors</li>
                </ul>
            </div>

            <div style="background: #f0f8f5; padding: 1.5rem; border-radius: 8px; margin-top: 2rem;">
                <strong style="color: var(--color-primary);">All packages include complimentary villa-level and community-level security features.</strong>
            </div>
        `
    },
    vrv: {
        title: 'VRF/VRV Climate Control Systems',
        content: `
            <h3 style="color: var(--color-primary); margin-bottom: 1.5rem;">Effortless Comfort, Elevated Efficiency</h3>
            
            <div style="margin-bottom: 2rem;">
                <h4 style="color: var(--color-primary); margin-bottom: 1rem;">Why Choose VRF Over Split ACs?</h4>
                <ul style="margin-left: 1.5rem; line-height: 1.8;">
                    <li><strong>Save up to 50%</strong> on electricity bills with inverter technology</li>
                    <li><strong>Individual room control</strong> - each space at perfect temperature</li>
                    <li><strong>Whisper-quiet operation</strong> indoors and outdoors</li>
                    <li><strong>Single outdoor unit</strong> - cleaner exterior aesthetics</li>
                    <li><strong>Longer lifespan</strong> and lower maintenance</li>
                    <li><strong>Smart integration ready</strong> for app-based control</li>
                </ul>
            </div>

            <div style="margin-bottom: 2rem;">
                <h4 style="color: var(--color-primary); margin-bottom: 1rem;">Premium Brands Available</h4>
                <p style="line-height: 1.6;">Daikin, Mitsubishi Electric, LG - industry-leading systems</p>
            </div>

            <div style="margin-bottom: 2rem;">
                <h4 style="color: var(--color-primary); margin-bottom: 1rem;">Annual Savings</h4>
                <p style="line-height: 1.6;">Approximately ₹1.0 - ₹1.25 lakhs saved per year on energy costs compared to traditional AC systems.</p>
            </div>

            <div style="background: #f0f8f5; padding: 1.5rem; border-radius: 8px; margin-top: 2rem;">
                <strong style="color: var(--color-primary);">Note: False ceiling work is additional. Contact us for complete quotation.</strong>
            </div>
        `
    },
    interiors: {
        title: 'Interior Enhancement Packages',
        content: `
            <h3 style="color: var(--color-primary); margin-bottom: 1.5rem;">Exclusive Interiors, Crafted for You</h3>
            
            <div style="margin-bottom: 2rem;">
                <h4 style="color: var(--color-primary); margin-bottom: 1rem;">Modular Kitchen Solutions</h4>
                <p style="margin-bottom: 1rem; line-height: 1.6;">Premium European & Italian brands</p>
                <ul style="margin-left: 1.5rem; line-height: 1.8;">
                    <li>Custom cabinetry design</li>
                    <li>Premium appliances integration</li>
                    <li>Designer hardware and finishes</li>
                    <li>Quartz/granite countertops</li>
                </ul>
            </div>

            <div style="margin-bottom: 2rem;">
                <h4 style="color: var(--color-primary); margin-bottom: 1rem;">Wardrobes & Storage</h4>
                <p style="margin-bottom: 1rem; line-height: 1.6;">Custom built-ins with designer finishes</p>
                <ul style="margin-left: 1.5rem; line-height: 1.8;">
                    <li>Walk-in closet designs</li>
                    <li>Organized storage solutions</li>
                    <li>Premium laminates and veneers</li>
                    <li>Soft-close mechanisms</li>
                </ul>
            </div>

            <div style="margin-bottom: 2rem;">
                <h4 style="color: var(--color-primary); margin-bottom: 1rem;">Lighting Design</h4>
                <p style="margin-bottom: 1rem; line-height: 1.6;">Statement fixtures & architectural lighting</p>
                <ul style="margin-left: 1.5rem; line-height: 1.8;">
                    <li>Designer chandeliers and pendants</li>
                    <li>Cove and accent lighting</li>
                    <li>Task lighting solutions</li>
                </ul>
            </div>

            <div style="margin-bottom: 2rem;">
                <h4 style="color: var(--color-primary); margin-bottom: 1rem;">Window Treatments</h4>
                <p style="line-height: 1.6;">Motorized blinds & designer curtains for complete privacy and style</p>
            </div>

            <div style="background: #f0f8f5; padding: 1.5rem; border-radius: 8px; margin-top: 2rem;">
                <strong style="color: var(--color-primary);">Schedule a consultation with our interior design team for personalized solutions.</strong>
            </div>
        `
    }
};

// Open modal when learn more button is clicked
learnMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalType = button.getAttribute('data-modal');
        const data = modalData[modalType];
        
        if (data) {
            modalBody.innerHTML = `
                <h2 style="color: var(--color-primary); margin-bottom: 2rem;">${data.title}</h2>
                ${data.content}
            `;
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal
modalClose.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ===== Contact Form Handling =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // In production, you would send this to a server
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Thank you for your inquiry! Our team will contact you shortly.');
    contactForm.reset();
});

// ===== Intersection Observer for Scroll Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.querySelectorAll('.custom-card, .amenity-category, .sustainability-feature, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
