
const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");



themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})


closeBtn.addEventListener('click', () =>{
    sideMenu.style.display= 'none';
    menuBtn.style.display="block";
})



// استهداف الزر والقائمة

menuBtn.addEventListener('click', () =>{
    sideMenu.style.display= 'block';
    menuBtn.style.display='none'
})


// تحديد جميع الروابط في السايد بار
const sidebarLinks = document.querySelectorAll('aside .sidebar a');

// إضافة حدث عند الضغط على أي رابط
sidebarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // إزالة التنسيق (فئة active) من جميع الروابط
        sidebarLinks.forEach(link => {
            link.classList.remove('active');
        });

        // إضافة التنسيق (فئة active) للرابط الذي تم الضغط عليه
        e.currentTarget.classList.add('active');
    });
});


