/* Vedal Resources – Main JavaScript */

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  setupFormValidation();
  setupScrollAnimations();
  setupSmoothScroll();
  setupFAQAccordion();
  loadProductFilters();
});

// Navigation Functionality
function initializeNavigation() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const nav = document.querySelector('nav');
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  // Hamburger menu toggle
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }
  
  // Close menu when link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('active');
      if (hamburger) hamburger.classList.remove('active');
    });
  });
  
  // Set active nav link based on current page
  const currentPath = window.location.pathname;
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath || 
        currentPath.includes(link.getAttribute('href'))) {
      link.classList.add('active');
    }
  });
  
  // Update nav background on scroll
  window.addEventListener('scroll', function() {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
}

// Smooth scroll for anchor links
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

// Form Validation
function setupFormValidation() {
  const form = document.querySelector('form');
  if (!form) return;
  
  const inputs = form.querySelectorAll('input, textarea, select');
  
  // Real-time validation
  inputs.forEach(input => {
    input.addEventListener('blur', function() {
      validateField(this);
    });
    
    input.addEventListener('input', function() {
      if (this.classList.contains('error')) {
        validateField(this);
      }
    });
  });
  
  // Form submission
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    inputs.forEach(input => {
      if (!validateField(input)) {
        isValid = false;
      }
    });
    
    if (isValid) {
      submitForm(this);
    }
  });
}

function validateField(field) {
  const value = field.value.trim();
  let isValid = true;
  
  // Remove previous error message
  const errorMsg = field.parentElement.querySelector('.form-error');
  if (errorMsg) {
    errorMsg.remove();
  }
  
  // Check if field is required
  if (field.hasAttribute('required') && value === '') {
    isValid = false;
    showFieldError(field, 'This field is required');
  }
  
  // Email validation
  if (field.type === 'email' && value !== '') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      isValid = false;
      showFieldError(field, 'Please enter a valid email address');
    }
  }
  
  // Phone validation
  if (field.type === 'tel' && value !== '') {
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(value) || value.replace(/\D/g, '').length < 10) {
      isValid = false;
      showFieldError(field, 'Please enter a valid phone number');
    }
  }
  
  if (isValid) {
    field.classList.remove('error');
  } else {
    field.classList.add('error');
  }
  
  return isValid;
}

function showFieldError(field, message) {
  const errorDiv = document.createElement('span');
  errorDiv.className = 'form-error';
  errorDiv.textContent = message;
  field.parentElement.appendChild(errorDiv);
}

// Form Submission
function submitForm(form) {
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  
  // Show loading state
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span class="spinner"></span> Sending...';
  
  // Get form data
  const formData = new FormData(form);
  
  // Use Formspree endpoint
  const formAction = form.getAttribute('action');
  
  fetch(formAction, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Form submission failed');
    }
  })
  .then(data => {
    showFormSuccess(form);
    form.reset();
  })
  .catch(error => {
    showFormError(form, 'An error occurred. Please try again.');
  })
  .finally(() => {
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
  });
}

function showFormSuccess(form) {
  const messageDiv = document.createElement('div');
  messageDiv.className = 'form-message success';
  messageDiv.textContent = '✓ Thank you! We\'ll get back to you within 24 hours.';
  form.insertBefore(messageDiv, form.firstChild);
  
  // Remove message after 5 seconds
  setTimeout(() => {
    messageDiv.remove();
  }, 5000);
}

function showFormError(form, message) {
  const messageDiv = document.createElement('div');
  messageDiv.className = 'form-message error';
  messageDiv.textContent = '✗ ' + message;
  form.insertBefore(messageDiv, form.firstChild);
  
  // Remove message after 5 seconds
  setTimeout(() => {
    messageDiv.remove();
  }, 5000);
}

// FAQ Accordion
function setupFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', function() {
      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle current item
      item.classList.toggle('active');
    });
  });
}

// Product Filters
function loadProductFilters() {
  const filterButtons = document.querySelectorAll('.filter-tab');
  const productCards = document.querySelectorAll('.product-card');
  
  if (!filterButtons.length) return;
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const category = this.getAttribute('data-category');
      
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Filter products
      productCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 0);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.9)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

// Scroll Animations
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

// Utility: Get query parameter
function getQueryParameter(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

// Utility: Set form field value
function setFormField(fieldName, value) {
  const field = document.querySelector(`[name="${fieldName}"]`);
  if (field) {
    field.value = value;
  }
}

// PDF Download Tracking
function trackPDFDownload() {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'file_download', {
      'file_name': 'vedal-company-profile.pdf',
      'file_type': 'pdf'
    });
  }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
  const nav = document.querySelector('nav');
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  if (nav && !nav.contains(event.target) && navMenu && navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
    if (hamburger) hamburger.classList.remove('active');
  }
});

// Prevent form submission if honeypot is filled (spam protection)
document.addEventListener('submit', function(event) {
  const honeypot = event.target.querySelector('input[name="website"]');
  if (honeypot && honeypot.value !== '') {
    event.preventDefault();
    return false;
  }
});

// Expose utility functions globally
window.vedal = {
  trackPDFDownload: trackPDFDownload,
  getQueryParameter: getQueryParameter,
  setFormField: setFormField
};

// Graceful handling for missing placeholder images (pre-launch state)
// Replaces broken <img> with a clean professional placeholder box so the site never looks "broken"
document.querySelectorAll('img').forEach(function(img) {
  img.addEventListener('error', function handleMissing() {
    const placeholder = document.createElement('div');
    placeholder.className = 'img-placeholder';
    placeholder.setAttribute('role', 'img');
    placeholder.setAttribute('aria-label', 'Photo placeholder — replace with actual high-quality image');
    placeholder.innerHTML = 
      '<div style="font-size:2rem;opacity:.6;margin-bottom:.25rem;">📷</div>' +
      '<div style="font-weight:600;color:var(--color-primary);">Photo Placeholder</div>' +
      '<div style="font-size:.75rem;opacity:.65;margin-top:.25rem;">Replace with actual facility / product / team photo</div>';
    placeholder.style.cssText = 'background:linear-gradient(135deg,#F8F9FA 0%,#EEEFF2 100%);border:1px dashed #CCCCCC;border-radius:12px;display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;padding:2rem 1rem;min-height:180px;color:var(--color-text-lighter);font-size:.9rem;font-weight:500;';
    
    if (img.parentNode) {
      img.parentNode.replaceChild(placeholder, img);
    }
    img.removeEventListener('error', handleMissing);
  });
});