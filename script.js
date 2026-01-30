function filterMenu(category) {
    // Select all sections and buttons
    const sections = document.querySelectorAll('.menu-category');
    const buttons = document.querySelectorAll('.tab-btn');

    // Hide all sections
    sections.forEach(sec => sec.style.display = 'none');
    
    // Show the selected section
    document.querySelector('.' + category).style.display = 'block';

    // Update active button styling
    buttons.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');
}

// Simple logic to show "Closed" if it's late at night (Example: after 10 PM)
const hour = new Date().getHours();
const statusTag = document.getElementById('shop-status');
if (hour < 6 || hour > 22) {
    statusTag.textContent = "Closed Now";
    statusTag.style.backgroundColor = "#f44336";
}