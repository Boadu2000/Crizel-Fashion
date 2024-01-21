// Your JavaScript code here

function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.style.display === 'none') {
        section.style.display = 'block';
    } else {
        section.style.display = 'none';
    }
}

function showSignUpForm() {
    var signUpForm = document.getElementById('signupForm');
    signUpForm.style.display = 'block';
}

function showSignInForm() {
    var signInForm = document.getElementById('signinForm');
    signInForm.style.display = 'block';
}

function toggleFAQ(faqId) {
    var faq = document.getElementById(faqId);
    if (faq.style.display === 'none') {
        faq.style.display = 'block';
    } else {
        faq.style.display = 'none';
    }
}
