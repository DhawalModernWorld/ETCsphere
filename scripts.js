// ================= Slideshow logic =================
const slides = document.querySelectorAll('#slideshow .slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

if (slides.length > 0) {
    setInterval(nextSlide, 6000);
}

// ================= Reviews carousel =================
const reviews = document.querySelectorAll('.reviews .review-item');
let currentReview = 0;

function showReview(index) {
    reviews.forEach((review, i) => {
        review.classList.toggle('active', i === index);
    });
}

function nextReview() {
    currentReview = (currentReview + 1) % reviews.length;
    showReview(currentReview);
}

if (reviews.length > 0) {
    setInterval(nextReview, 7000);
}

// ================= Contact form submission =================
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault();

        const name = contactForm.querySelector('#name').value.trim();
        const email = contactForm.querySelector('#email').value.trim();

        // ✅ Fixed line (no ?.)
        const travelTypeField = contactForm.querySelector('#travel-type');
        const travelType = travelTypeField ? travelTypeField.value : "";

        if (!name || !email || !travelType) {
            alert('Please fill in all required fields.');
            return;
        }

        alert('Thank you for your inquiry! We will get back to you soon.');
        contactForm.reset();
    });
}

// ================= Signup Page Logic =================
const emailForm = document.getElementById('email-signup-form');
const phoneForm = document.getElementById('phone-signup-form');
const otpForm = document.getElementById('otp-form');
const googleBtn = document.getElementById('google-signin');

if (emailForm) {
    emailForm.addEventListener('submit', e => {
        e.preventDefault();
        const email = emailForm.querySelector('#signup-email').value.trim();
        const password = emailForm.querySelector('#signup-password').value.trim();

        if (!email || !password) {
            alert('Please fill in both email and password.');
            return;
        }

        alert('Signup successful with Email ✅ Redirecting...');
        window.location.href = "home.html";
    });
}

if (phoneForm) {
    phoneForm.addEventListener('submit', e => {
        e.preventDefault();
        const phone = phoneForm.querySelector('#signup-phone').value.trim();

        if (!phone) {
            alert('Please enter your phone number.');
            return;
        }

        // OTP simulation
        alert('OTP sent to ' + phone);
        document.getElementById('otp-section').style.display = 'block';
    });
}

if (otpForm) {
    otpForm.addEventListener('submit', e => {
        e.preventDefault();
        const otp = otpForm.querySelector('#otp-code').value.trim();

        if (otp === "1234") { // Demo OTP
            alert('Phone verified ✅ Redirecting...');
            window.location.href = "home.html";
        } else {
            alert('Invalid OTP. Please try again.');
        }
    });
}

if (googleBtn) {
    googleBtn.addEventListener('click', () => {
        alert('Google Sign-in clicked ✅ (Integrate Firebase/Auth0 here)');
        window.location.href = "home.html";
    });
}



// Select elements
// ================= Chatbot Logic =================
const chatbotBtn = document.getElementById('chatbot-btn'); // button to open chatbot
const chatbotModal = document.getElementById('chatbot-modal'); // modal container
const chatbotClose = document.getElementById('chatbot-close'); // close button
const chatbotSend = document.getElementById('chatbot-send'); // send button
const chatbotInput = document.getElementById('chatbot-input'); // input field
const chatbotMessages = document.getElementById('chatbot-messages'); // messages container

// Open chatbot modal
chatbotBtn.addEventListener('click', () => {
    chatbotModal.style.display = 'flex';
    chatbotInput.focus();
});

// Close chatbot modal
chatbotClose.addEventListener('click', () => {
    chatbotModal.style.display = 'none';
});

// Function to add message to chat
function addMessage(content, type) {
    const msg = document.createElement('div');
    msg.className = type === 'user' ? 'user-msg' : 'bot-msg';
    msg.innerText = content;
    chatbotMessages.appendChild(msg);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // auto-scroll
}

// Function to generate bot reply (you can extend this logic)
function botReply(userMsg) {
    // Simple echo logic for demo
    return `TravelBot: You said "${userMsg}"`;
}

// Send message function
function sendMessage() {
    const msg = chatbotInput.value.trim();
    if (msg === '') return; // prevent empty messages

    // Add user message
    addMessage(msg, 'user');

    // Add bot reply
    setTimeout(() => {
        addMessage(botReply(msg), 'bot');
    }, 500); // simulate typing delay

    // Clear input
    chatbotInput.value = '';
}

// Click send button
chatbotSend.addEventListener('click', sendMessage);

// Send message on Enter key
chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault(); // prevent form submit if inside a form
        sendMessage();
    }
});

// Optional: close chatbot when clicking outside modal
window.addEventListener('click', (e) => {
    if (e.target === chatbotModal) {
        chatbotModal.style.display = 'none';
    }
});