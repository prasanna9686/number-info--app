const signUpContainer = document.getElementById('signUpContainer');
const loginContainer = document.getElementById('loginContainer');
const appContainer = document.getElementById('appContainer');
const homeContainer = document.getElementById('homeContainer');

// Navbar elements
const navHome = document.getElementById('navHome');   // Home Button
const navLogin = document.getElementById('navLogin');
const navSignUp = document.getElementById('navSignUp');

// Sign-up elements
const signUpForm = document.getElementById('signUpForm');
const signUpUsername = document.getElementById('signUpUsername');
const signUpPassword = document.getElementById('signUpPassword');
const signUpMessage = document.getElementById('signUpMessage');

// Login elements
const loginForm = document.getElementById('loginForm');
const loginUsername = document.getElementById('loginUsername');
const loginPassword = document.getElementById('loginPassword');
const loginErrorMessage = document.getElementById('loginErrorMessage');

// Navigation: Show home page
navHome.addEventListener('click', function() {
    homeContainer.style.display = 'block';
    loginContainer.style.display = 'none';
    signUpContainer.style.display = 'none';
    appContainer.style.display = 'none';
});

// Navigation: Show login page
navLogin.addEventListener('click', function() {
    homeContainer.style.display = 'none';
    signUpContainer.style.display = 'none';
    appContainer.style.display = 'none';
    loginContainer.style.display = 'block';
});

// Navigation: Show sign-up page
navSignUp.addEventListener('click', function() {
    homeContainer.style.display = 'none';
    loginContainer.style.display = 'none';
    appContainer.style.display = 'none';
    signUpContainer.style.display = 'block';
});

// Handle sign-up form submission
signUpForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Store credentials in localStorage (for demo purposes)
    localStorage.setItem('username', signUpUsername.value);
    localStorage.setItem('password', signUpPassword.value);
    
    // Display success message and redirect to login
    signUpMessage.textContent = 'Sign up successful! You can now log in.';
    signUpContainer.style.display = 'none';
    loginContainer.style.display = 'block';
});

// Handle login form submission
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get stored credentials
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    
    // Check if credentials match
    if (loginUsername.value === storedUsername && loginPassword.value === storedPassword) {
        // Successful login: hide login form, show app
        loginContainer.style.display = 'none';
        appContainer.style.display = 'block';
    } else {
        loginErrorMessage.textContent = 'Invalid username or password';
    }
});

// API and Number Info App Logic
const numberForm = document.getElementById('numberForm');
const numberInput = document.getElementById('numberInput');
const factType = document.getElementById('factType');
const factText = document.getElementById('factText');

// API endpoint and API key
const apiUrl = 'https://numbersapi.p.rapidapi.com';
const apiKey = '4fa35b9400msh0cb99b69537a67fp119528jsn5c284df35587';  // Replace with your actual RapidAPI key

numberForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const number = numberInput.value;
    const type = factType.value;
        

    // Fetching the number fact
    fetchFact(number, type);
});

function fetchFact(number, type) {
    const url = `${apiUrl}/${number}/${type}?json`;

    fetch(url, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
        }
    })
    .then(response => response.json())
    .then(data => {
        factText.textContent = data.text;
    })
    .catch(error => {
        factText.textContent = 'Failed to retrieve fact. Please try again later.';
    });
}

