document.getElementById('donorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const bloodGroup = document.getElementById('bloodGroup').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const facebook = document.getElementById('facebook').value;

    const donorData = {
        bloodGroup,
        phone,
        email,
        whatsapp,
        facebook
    };

    // Save donor data to Local Storage
    let donors = JSON.parse(localStorage.getItem('donors')) || [];
    donors.push(donorData);
    localStorage.setItem('donors', JSON.stringify(donors));
    
    document.getElementById('notification').innerText = "নিবন্ধন সফল হয়েছে!";
    document.getElementById('donorForm').reset();
});

function searchBloodGroup() {
    const query = document.getElementById('bloodGroupSearch').value.toLowerCase();
    const resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = '';

    const donors = JSON.parse(localStorage.getItem('donors')) || [];
    const filteredDonors = donors.filter(donor => donor.bloodGroup.toLowerCase() === query);

    if (filteredDonors.length > 0) {
        filteredDonors.forEach(donor => {
            resultsDiv.innerHTML += `
                <div>
                    <p>রক্তের গ্রুপ: <strong>${donor.bloodGroup}</strong></p>
                    <p>ফোন: ${donor.phone}</p>
                    <p>ইমেইল: ${donor.email}</p>
                    <p>হোয়াটসঅ্যাপ: ${donor.whatsapp}</p>
                    <p>ফেসবুক: <a href="${donor.facebook}" target="_blank">${donor.facebook}</a></p>
                </div>
                <hr>
            `;
        });
    } else {
        resultsDiv.innerText = 'কোন ফলাফল পাওয়া যায়নি।';
    }
}
