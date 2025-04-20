document.addEventListener("DOMContentLoaded", function () {
  // ======================
  // شريط التنقل الثابت عند التمرير
  // ======================
  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // ======================
  // قائمة الهاتف المتحركة
  // ======================
  const mobileMenuBtn = document.querySelector(".mobile-menu");
  const navMenu = document.querySelector("nav ul");

  mobileMenuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    mobileMenuBtn.classList.toggle("active");
  });

  // إغلاق القائمة عند النقر على رابط
  document.querySelectorAll("nav ul li a").forEach((link) => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
      mobileMenuBtn.classList.remove("active");
    });
  });

  // ======================
  // شريط الاختبارات المنزلق
  // ======================
  const testimonials = document.querySelectorAll(".testimonial");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let currentTestimonial = 0;

  function showTestimonial(index) {
    testimonials.forEach((testimonial) => {
      testimonial.classList.remove("active");
    });

    testimonials[index].classList.add("active");
  }

  prevBtn.addEventListener("click", function () {
    currentTestimonial--;
    if (currentTestimonial < 0) {
      currentTestimonial = testimonials.length - 1;
    }
    showTestimonial(currentTestimonial);
  });

  nextBtn.addEventListener("click", function () {
    currentTestimonial++;
    if (currentTestimonial >= testimonials.length) {
      currentTestimonial = 0;
    }
    showTestimonial(currentTestimonial);
  });

  // تشغيل التحويل التلقائي كل 5 ثواني
  setInterval(function () {
    currentTestimonial++;
    if (currentTestimonial >= testimonials.length) {
      currentTestimonial = 0;
    }
    showTestimonial(currentTestimonial);
  }, 5000);

  // ======================
  // قسم الأسئلة الشائعة القابل للطي
  // ======================
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      const icon = this.querySelector("i");

      // إغلاق جميع الإجابات الأخرى
      document.querySelectorAll(".faq-answer").forEach((item) => {
        if (item !== answer) {
          item.style.maxHeight = null;
          item.previousElementSibling
            .querySelector("i")
            .classList.remove("fa-chevron-up");
          item.previousElementSibling
            .querySelector("i")
            .classList.add("fa-chevron-down");
        }
      });

      // تبديل الإجابة الحالية
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        icon.classList.remove("fa-chevron-up");
        icon.classList.add("fa-chevron-down");
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        icon.classList.remove("fa-chevron-down");
        icon.classList.add("fa-chevron-up");
      }
    });
  });

  // ======================
  // نافذة الدردشة التفاعلية
  // ======================
  const chatIcon = document.querySelector(".chat-icon");
  const chatBox = document.querySelector(".chat-box");
  const closeChat = document.querySelector(".close-chat");
  const chatInput = document.querySelector(".chat-input input");
  const chatSendBtn = document.querySelector(".chat-input button");
  const chatMessages = document.querySelector(".chat-messages");

  chatIcon.addEventListener("click", function () {
    chatBox.classList.toggle("active");
  });

  closeChat.addEventListener("click", function () {
    chatBox.classList.remove("active");
  });

  function addMessage(text, isBot) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");

    if (isBot) {
      messageDiv.classList.add("bot");
    } else {
      messageDiv.classList.add("user");
    }

    messageDiv.innerHTML = `<p>${text}</p>`;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  chatSendBtn.addEventListener("click", sendMessage);
  chatInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

  function sendMessage() {
    const message = chatInput.value.trim();
    if (message) {
      addMessage(message, false);
      chatInput.value = "";

      // رد تلقائي من البوت
      setTimeout(function () {
        const responses = [
          "شكرًا لرسالتك! كيف يمكنني مساعدتك اليوم؟",
          "هل لديك أي استفسار عن خدماتنا؟",
          "يمكنك حجز موعد عن طريق النموذج الموجود في الصفحة",
          "سأقوم بتوصيل رسالتك إلى الفريق وسيتم الرد عليك قريبًا",
        ];
        const randomResponse =
          responses[Math.floor(Math.random() * responses.length)];
        addMessage(randomResponse, true);
      }, 1000);
    }
  }

  // ======================
  // تأثيرات التمرير الناعمة
  // ======================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // ======================
  // التحقق من صحة النماذج
  // ======================
  const appointmentForm = document.getElementById("appointment-form");

  if (appointmentForm) {
    appointmentForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const service = document.getElementById("service").value;

      let isValid = true;

      // التحقق من الاسم
      if (name === "") {
        isValid = false;
        alert("الرجاء إدخال الاسم الكامل");
        return;
      }

      // التحقق من الهاتف
      if (phone === "") {
        isValid = false;
        alert("الرجاء إدخال رقم الهاتف");
        return;
      } else if (!/^[0-9]{10,}$/.test(phone)) {
        isValid = false;
        alert("الرجاء إدخال رقم هاتف صحيح");
        return;
      }

      // التحقق من الخدمة
      if (service === "") {
        isValid = false;
        alert("الرجاء اختيار الخدمة المطلوبة");
        return;
      }

      if (isValid) {
        // هنا يمكنك إضافة كود إرسال النموذج
        alert("تم إرسال طلبك بنجاح! سنتصل بك خلال 24 ساعة لتأكيد الموعد.");
        appointmentForm.reset();
      }
    });
  }

  // ======================
  // تأثيرات الظهور عند التمرير
  // ======================
  const fadeElements = document.querySelectorAll(".fade-in");

  function checkScroll() {
    fadeElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight - 100) {
        element.classList.add("visible");
      }
    });
  }

  // إضافة صنف fade-in للعناصر التي نريدها تظهر بالتدرج
  document.querySelectorAll("section").forEach((section) => {
    section.classList.add("fade-in");
  });

  // تشغيل التحقق عند التحميل وعند التمرير
  window.addEventListener("load", checkScroll);
  window.addEventListener("scroll", checkScroll);
});
