document.addEventListener("DOMContentLoaded", function () {
  const confirmBtn = document.getElementById("confirmBooking");
  const specialistButtons = document.querySelectorAll(".select-btn");

  // اختيار الأخصائي
  specialistButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const specialist = this.closest(".specialist");
      const specialistId = specialist.getAttribute("data-id");
      alert(`تم اختيار الأخصائي برقم: ${specialistId}`);
    });
  });

  // تأكيد الحجز
  confirmBtn.addEventListener("click", function () {
    const sessionDate = document.getElementById("sessionDate").value;
    const sessionType = document.getElementById("sessionType").value;
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    if (sessionDate && sessionType && fullName && email && phone) {
      alert("تم تأكيد حجز الجلسة بنجاح!");
    } else {
      alert("يرجى ملء جميع الحقول المطلوبة.");
    }
  });
});
