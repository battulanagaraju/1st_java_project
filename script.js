function showReferralForm() {
    const referralForm = document.getElementById('referral-form');
    referralForm.classList.remove('hidden');
}

function sendReferral() {
    const friendEmail = document.getElementById('friend-email').value;
    // Here, you can implement referral logic (e.g., sending an email or processing the referral)
    alert(`Referral sent to ${friendEmail}!`);
}
