function showDetails(specialist) {
    const modal = document.getElementById("detailsModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");

    let details = {
        "ahmed": {
            name: "د. أحمد محمد",
            description: "متخصص في العلاج النفسي السريري مع خبرة 10 سنوات في مساعدة المرضى على التعامل مع القلق والاكتئاب."
        },
        "sarah": {
            name: "د. سارة خالد",
            description: "استشارية في العلاج السلوكي المعرفي، لديها خبرة في علاج اضطرابات القلق والتوتر."
        },
        "khaled": {
            name: "د. خالد علي",
            description: "معالج نفسي للأطفال والمراهقين، يساعد الأطفال في تجاوز التحديات العاطفية والسلوكية."
        }
    };

    if (details[specialist]) {
        modalTitle.textContent = details[specialist].name;
        modalDescription.textContent = details[specialist].description;
    }

    modal.style.display = "block";
}

function closeDetails() {
    document.getElementById("detailsModal").style.display = "none";
}