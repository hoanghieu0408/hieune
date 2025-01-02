// Lấy phần tử cha .Navigation_item
const navigationItem = document.querySelector('.Navigation_item.item');

// Lấy phần tử .item_category
const itemCategory = document.querySelector('.item_category');

// Lấy phần tử .Login_to_comment 
const loginToComment = document.querySelector('.Login_to_comment');

//lấy phần tử .warning_login

const warningLogin = document.querySelector('.warning_login');

// Xử lý sự kiện hover vào phần tử cha
navigationItem.addEventListener('mouseenter', () => {
    itemCategory.classList.remove('hide'); // Hiển thị .item_category
});

// Xử lý sự kiện rời chuột khỏi phần tử cha
navigationItem.addEventListener('mouseleave', () => {
    itemCategory.classList.add('hide'); // Ẩn lại .item_category
});

// Bật tắt modal login
const loginItem = document.querySelector('.fa-solid.fa-right-to-bracket');
const modalLogin = document.querySelector('.modol_login');
const close = document.querySelector('.close');

// Hàm bật/tắt modal
function toggleModal() {
    if (modalLogin) {
        modalLogin.classList.toggle("tide");
    }
}

// Thêm sự kiện click cho icon login
if (loginItem) {
    loginItem.addEventListener('click', toggleModal);
}

// Thêm sự kiện click cho warning_login
if (loginToComment) {
    loginToComment.addEventListener('click', toggleModal);
}

// Thêm sự kiện cick cho .warning_login

if (warningLogin) {
    warningLogin.addEventListener('click', toggleModal);
}

// Đóng modal khi nhấn nút close
if (close) {
    close.addEventListener('click', toggleModal);
}

//cảnh báo không nhập đủ thông tin
// Lấy các phần tử cần thao tác
const loginBtn = document.querySelector('.login_btn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');

// Thêm sự kiện click cho nút login
loginBtn.addEventListener('click', function (event) {
    let hasError = false;

    // Kiểm tra ô "Username"
    if (usernameInput.value.trim() === '') {
        usernameError.textContent = "Tên tài khoản không được để trống";
        usernameError.classList.add('visible'); // Hiển thị lỗi
        hasError = true;
    } else {
        usernameError.textContent = "";
        usernameError.classList.remove('visible'); // Ẩn lỗi nếu có giá trị
    }

    // Kiểm tra ô "Password"
    // if (passwordInput.value.trim() === '') {
    //     passwordError.textContent = "Mật khẩu không được để trống";
    //     passwordError.classList.add('visible'); // Hiển thị lỗi
    //     hasError = true;
    // } else {
    //     passwordError.textContent = "";
    //     passwordError.classList.remove('visible'); // Ẩn lỗi nếu có giá trị
    // }

    // // Nếu có lỗi, ngăn hành động mặc định
    // if (hasError) {
    //     event.preventDefault(); // Ngăn gửi form hoặc hành động mặc định khác
    // }
});

const banners = document.querySelectorAll('.container_banner');
const backBtn = document.querySelector('.back');
const nextBtn = document.querySelector('.next');
const dots = document.querySelectorAll('.owl-dot');

let currentIndex = 0;
let autoSlideInterval;

// Cập nhật ảnh đang hiển thị
function updateBanners() {
    // Xóa class "active" khỏi tất cả các ảnh
    banners.forEach((banner) => banner.classList.remove('active'));
    dots.forEach((dot) => dot.classList.remove('color'));

    // Hiển thị 2 ảnh liên tiếp
    banners[currentIndex].classList.add('active');
    banners[(currentIndex + 1) % banners.length].classList.add('active');

    // Đổi màu dot tương ứng
    dots[Math.floor(currentIndex / 2)].classList.add('color'); // Tương ứng với nhóm ảnh
}

// Xử lý khi nhấn nút "Back"
backBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 2 + banners.length) % banners.length; // Lùi 2 ảnh
    updateBanners();
    resetAutoSlide(); // Reset auto-slide khi người dùng tương tác
});

// Xử lý khi nhấn nút "Next"
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 2) % banners.length; // Tiến 2 ảnh
    updateBanners();
    resetAutoSlide(); // Reset auto-slide khi người dùng tương tác
});

// Xử lý khi click vào dot
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index * 2; // Chuyển đến nhóm ảnh tương ứng
        updateBanners();
        resetAutoSlide(); // Reset auto-slide khi người dùng tương tác
    });
});

// Chạy auto-slide tự động mỗi 5 giây
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % banners.length; // Tiến 2 ảnh tự động
        updateBanners();
    }, 3000); // Mỗi 5 giây
}

// Dừng auto-slide khi người dùng tương tác (Back, Next, hoặc click dot)
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide(); // Khởi động lại auto-slide sau khi người dùng tương tác
}

// Hiển thị ảnh đầu tiên khi tải trang
updateBanners();

// Khởi động auto-slide khi trang được tải
startAutoSlide();


// // Lấy phần tử cha chứa danh sách tập
// const listEpisode = document.querySelector('.list_episode');

// // Lấy danh sách tất cả các thẻ số tập và chuyển thành mảng
// const episodes = Array.from(listEpisode.querySelectorAll('.episode_number'));

// // Lấy số từ nội dung của các thẻ, loại bỏ trùng lặp và sắp xếp giảm dần
// const sortedNumbers = [...new Set(episodes.map(ep => parseInt(ep.textContent.trim(), 10)))]
//     .filter(num => num >= 1) // Loại bỏ số nhỏ hơn 1
//     .sort((a, b) => b - a); // Sắp xếp giảm dần

// // Xóa toàn bộ nội dung cũ
// listEpisode.innerHTML = '';

// // Thêm các thẻ mới với thứ tự giảm dần
// sortedNumbers.forEach(num => {
//     const div = document.createElement('div');
//     div.className = 'episode_number';
//     div.textContent = num;
//     listEpisode.appendChild(div);
// });

document.querySelector(".toggle-btn").addEventListener("click", function () {
    const moreText = document.querySelector(".more-text");
    const toggleBtn = document.querySelector(".toggle-btn");
    const compactBtn = document.querySelector(".compact");

    // Hiển thị nội dung và nút "Thu gọn"
    moreText.classList.remove("hidden");
    compactBtn.classList.remove("hidden");

    // Ẩn nút "Mở rộng"
    toggleBtn.classList.add("hidden");
});

document.querySelector(".compact").addEventListener("click", function () {
    const moreText = document.querySelector(".more-text");
    const toggleBtn = document.querySelector(".toggle-btn");
    const compactBtn = document.querySelector(".compact");

    // Ẩn nội dung và nút "Thu gọn"
    moreText.classList.add("hidden");
    compactBtn.classList.add("hidden");

    // Hiển thị nút "Mở rộng"
    toggleBtn.classList.remove("hidden");
});


function toggleSortMenu() {
    const sortMenu = document.querySelector('.sort');
    sortMenu.classList.toggle('hidden');
}

//ẩn hiện bình luận

function toggleComments(show) {
    const commentList = document.getElementById('commentList');
    const viewComments = document.getElementById('viewComments');
    const hideComments = document.getElementById('hideComments');

    if (show) {
        commentList.classList.remove('hidden'); // Hiển thị danh sách bình luận
        viewComments.classList.add('hidden');  // Ẩn nút "Xem bình luận"
        hideComments.classList.remove('hidden'); // Hiển thị nút "Ẩn bình luận"
    } else {
        commentList.classList.add('hidden');    // Ẩn danh sách bình luận
        viewComments.classList.remove('hidden'); // Hiển thị nút "Xem bình luận"
        hideComments.classList.add('hidden');   // Ẩn nút "Ẩn bình luận"
    }
}

function navigateToIndex() {
    window.location.href = "index.html"; // Chuyển hướng đến file index.html
}

function navigateToProduct() {
    window.location.href = "product.html"; // Chuyển hướng đến file product.html
}

function navigateToHistory() {
    window.location.href = "history.html"; // Chuyển hướng đến file history.html
}


document.addEventListener("DOMContentLoaded", () => {
    const deleteHistoryBtn = document.querySelector('.delete-history-btn');
    const confirmationPopup = document.getElementById('confirmation-popup');
    const cancelDeleteBtn = document.getElementById('cancel-delete');
    
    deleteHistoryBtn.addEventListener('click', () => {
        confirmationPopup.classList.remove('hidden');
        confirmationPopup.classList.add('visible');
    });

    cancelDeleteBtn.addEventListener('click', () => {
        confirmationPopup.classList.remove('visible');
        confirmationPopup.classList.add('hidden');
    });
});
