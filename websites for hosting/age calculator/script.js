function calculateAge() {
    const dobInput = document.getElementById("dob").value;
    if (!dobInput) {
        alert("Please enter your date of birth!");
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("result").innerText =
        `You are ${years} year(s), ${months} month(s), and ${days} day(s) old.`;
}
