// Lấy phần tử nút toggle và menu
const toggleButton = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

// Thêm sự kiện 'click' cho nút toggle
toggleButton.addEventListener('click', function () {
    // 1. Hiển thị hoặc ẩn menu
    navMenu.classList.toggle('nav-menu-active');

    // 2. Kích hoạt animation X cho nút
    toggleButton.classList.toggle('nav-toggle-active');
});

// --- 1. THAY ĐỔI NGÀY GIỜ KẾT THÚC Ở ĐÂY ---
// Ví dụ: Đặt ngày 31 tháng 12 năm 2025, lúc 23:59:59
const countDownDate = new Date("Dec 1, 2025 23:59:59").getTime();

// 2. Lấy các phần tử HTML bằng class của chúng
// Chúng ta dùng querySelector để chọn chính xác từng ô
const daysEl = document.querySelector('.box-time .group-time:nth-child(1) .text-top');
const hoursEl = document.querySelector('.box-time .group-time:nth-child(2) .text-top');
const minutesEl = document.querySelector('.box-time .group-time:nth-child(3) .text-top');
const secondsEl = document.querySelector('.box-time .group-time:nth-child(4) .text-top');

// Lấy hộp chứa toàn bộ đồng hồ
const timerBox = document.querySelector('.box-time');

// 3. Hàm thêm số 0 vào trước nếu số < 10 (vd: 9 -> 09)
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// 4. Cập nhật đồng hồ mỗi 1 giây
const interval = setInterval(function () {
    // Lấy ngày giờ hiện tại
    const now = new Date().getTime();

    // Tính khoảng cách thời gian còn lại
    const distance = countDownDate - now;

    // Nếu hết thời gian
    if (distance < 0) {
        clearInterval(interval); // Dừng đồng hồ
        // Thay thế đồng hồ bằng một thông báo
        timerBox.innerHTML = "<h3 style='width: 100%; text-align: center;'>Deal Expired!</h3>";
        return;
    }

    // Tính toán Ngày, Giờ, Phút, Giây
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // 5. Hiển thị kết quả lên HTML
    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);

}, 1000);
// --- Code cho Dropdown Profile ---

// 1. Lấy các phần tử
const profileLink = document.querySelector('.profile-link');
const profileDropdown = document.querySelector('.profile-dropdown');

// 2. Thêm sự kiện click cho "Profile"
profileLink.addEventListener('click', function (event) {
    // Ngăn trang chuyển đến 'login.html' ngay lập tức
    event.preventDefault();

    // Toggle (bật/tắt) lớp 'active' trên dropdown
    profileDropdown.classList.toggle('active');
});

// 3. (Tùy chọn) Đóng dropdown khi nhấp ra ngoài
window.addEventListener('click', function (event) {
    if (!event.target.closest('.profile-menu-container')) {
        if (profileDropdown.classList.contains('active')) {
            profileDropdown.classList.remove('active');
        }
    }
});
// Đợi cho tất cả HTML tải xong
document.addEventListener('DOMContentLoaded', function () {

    // 1. Lấy nút bấm và menu con
    var profileToggle = document.getElementById('profile-toggle');
    var profileDropdown = document.querySelector('.profile-out');

    // 2. Thêm sự kiện click cho nút bấm
    profileToggle.addEventListener('click', function (event) {
        // Ngăn link '#' nhảy trang
        event.preventDefault();

        // Thêm/xóa class 'active'
        profileDropdown.classList.toggle('active');
    });

    // 3. (Nâng cao) Tự động đóng menu khi bấm ra ngoài
    window.addEventListener('click', function (event) {
        // Kiểm tra xem có bấm ra ngoài .profile-menu không
        if (!event.target.closest('.profile-menu')) {
            // Nếu menu đang mở (có class 'active')
            if (profileDropdown.classList.contains('active')) {
                // thì đóng nó lại
                profileDropdown.classList.remove('active');
            }
        }
    });

});