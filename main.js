// JavaScript สามารถเป็นตัวเลือกเสริมสำหรับการทำงานพื้นฐานของเมนูเมื่อชี้เมาส์
// สคริปต์นี้ใช้สำหรับการควบคุมขั้นสูงถ้าจำเป็น
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const menu1 = document.querySelector('.menu');

    menuButton.addEventListener('mouseenter', function() {
        menu.style.display = 'block';
    });

    menuButton.addEventListener('mouseleave', function() {
        setTimeout(function() {
            if (!menu.matches(':hover')) {
                menu.style.display = 'none';
            }
        }, 300);
    });

    menu.addEventListener('mouseleave', function() {
        menu.style.display = 'none';
    });

    menu.addEventListener('mouseenter', function() {
        menu.style.display = 'block';
    });
});
