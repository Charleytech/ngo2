// js/donate.js

document.addEventListener('DOMContentLoaded', () => {
    const donationForm = document.getElementById('donation-form');
    const donorList = document.getElementById('donor-list');

    // Function to render the list of donors from localStorage
    const renderDonors = () => {
        // Get donations from localStorage or initialize an empty array
        const donations = JSON.parse(localStorage.getItem('donations')) || [];
        
        // Clear the current list to avoid duplicates on re-render
        donorList.innerHTML = '';

        if (donations.length === 0) {
            donorList.innerHTML = '<p>Be the first to support our cause!</p>';
            return;
        }

        // Create a list element (ul) to hold the donors
        const ul = document.createElement('ul');
        ul.className = 'donor-ul';

        donations.forEach(donation => {
            const li = document.createElement('li');
            // Format the amount to look like currency
            const formattedAmount = parseFloat(donation.amount).toLocaleString('en-US', {
                style: 'currency',
                currency: 'NGN' // Assuming Nigerian Naira, change as needed
            });

            li.innerHTML = `
                <span class="donor-name">${donation.name}</span>
                <span class="donor-amount">donated ${formattedAmount}</span>
            `;
            ul.appendChild(li);
        });

        donorList.appendChild(ul);
    };

    // Handle the form submission
    donationForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const donorNameInput = document.getElementById('donorName');
        const donationAmountInput = document.getElementById('donationAmount');

        const donorName = donorNameInput.value.trim();
        const donationAmount = donationAmountInput.value.trim();

        if (donorName === '' || donationAmount === '') {
            alert('Please fill in both your name and the amount.');
            return;
        }

        const newDonation = {
            name: donorName,
            amount: donationAmount
        };

        // Get existing donations, add the new one, and save back to localStorage
        const donations = JSON.parse(localStorage.getItem('donations')) || [];
        donations.push(newDonation);
        localStorage.setItem('donations', JSON.stringify(donations));

        // Re-render the list to show the new donation instantly
        renderDonors();

        // Clear the form fields for the next entry
        donationForm.reset();
    });

    // Initial render when the page loads
    renderDonors();
});