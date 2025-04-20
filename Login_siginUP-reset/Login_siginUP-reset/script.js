

const container = document.querySelector('.container');
const regesterbtn = document.querySelector('.btn-register');
const loginbtn = document.querySelector('.btn-login');


regesterbtn.addEventListener('click',() => {
    container.classList.add('active');
})
loginbtn.addEventListener('click',() => {
    container.classList.remove('active');
})

const userType = document.getElementById('userType');
const extraFields = document.getElementById('extra-fields');

userType.addEventListener('change', () => {
    extraFields.innerHTML = ''; // تفريغ الحقول الإضافية عند التغيير
    const selectedType = userType.value;

    if (selectedType === 'admin') {
        extraFields.innerHTML = `
            <div class="input-box">
                <input type="text" class="input" placeholder="Admin Code" required>
                <i class='bx bx-code'></i>
                </div>
        `;
    } else if (selectedType === 'user') {
        extraFields.innerHTML = `
            <div class="input-box">
                <input type="number" class="input" placeholder="Age" required>
            </div>
            <div class="input-box">
                <select class="input" required>
                    <option value="">Select Gender</option>
                    <option value="male">Male <i class='bx bx-male' ></i></option>
                    <option value="female">Female <i class='bx bx-female' ></i></option>
                    <option value="other">Other</option>
                </select>
            </div>
        `;
    } else if (selectedType === 'specialist') {
        extraFields.innerHTML = `
            <div class="input-box">
                <input type="text" class="input" placeholder="Specialization" title="Specialization" required>
            </div>
            <div class="input-box">
                <input type="file" class="input" title="Artifical" placeholder="Artifical" accept=".docx,.pdf,.jpg,.png" required>
                <i class='bx bx-file'></i>
                </div>
            <div class="input-box">
                <input type="number" class="input" title="Years of Experiance" placeholder="Years of Experience" required>

                </div>
        `;
    }
});



const forgotPasswordLink = document.getElementById('forgot-password-link');
const forgotPasswordForm = document.getElementById('forgot-password-form');
const backToLoginLink = document.getElementById('back-to-login-link');

// للتبديل بين نموذج التسجيل وتسجيل الدخول
regesterbtn.addEventListener('click', () => {
    container.classList.add('active');
});
loginbtn.addEventListener('click', () => {
    container.classList.remove('active');
});

// إظهار نموذج "Forgot Password"
forgotPasswordLink.addEventListener('click', () => {
    forgotPasswordForm.classList.add('show');
    container.classList.remove('active'); // إخفاء النماذج الأخرى
});

// العودة إلى نموذج "Login"
backToLoginLink.addEventListener('click', () => {
    forgotPasswordForm.classList.remove('show');
    container.classList.remove('active'); // إعادة إظهار النموذج الأصلي
});
