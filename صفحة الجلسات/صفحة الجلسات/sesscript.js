document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bookingForm");
  const confirmationMessage = document.getElementById("confirmationMessage");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    // الحصول على القيم من النموذج
    const sessionDate = document.getElementById("sessionDate").value;
    const sessionType = document.getElementById("sessionType").value;
    const therapist = document.getElementById("therapist").value;
    const payment = document.getElementById("payment").value;
    const userInfo = document.getElementById("userInfo").value;

    if (!sessionDate || !sessionType || !therapist || !payment || !userInfo) {
      alert("يرجى ملء جميع الحقول!");
      return;
    }

    // عرض رسالة التأكيد
    confirmationMessage.classList.remove("hidden");
    confirmationMessage.textContent = "✅ تم حجز الجلسة بنجاح!";

    // إعادة تعيين النموذج بعد الحجز
    form.reset();
  });
});
