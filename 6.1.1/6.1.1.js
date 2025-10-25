// Danh sách các lớp CSS tương ứng với 4 ảnh nền
const backgroundClasses = ['bg-1', 'bg-2', 'bg-3', 'bg-4'];
let currentBgIndex = 0;

// Lấy các phần tử HTML cần thiết
const body = document.getElementById('aquarium');
const toggleBgBtn = document.getElementById('toggleBgBtn');
const toggleMusicBtn = document.getElementById('toggleMusicBtn');
const music = document.getElementById('backgroundMusic');

// Ban đầu, đặt ảnh nền mặc định
body.classList.add(backgroundClasses[currentBgIndex]);

// CHỨC NĂNG 1: CHUYỂN ĐỔI CẢNH NỀN
toggleBgBtn.addEventListener('click', () => {
    // 1. Xóa class nền cũ
    body.classList.remove(backgroundClasses[currentBgIndex]);

    // 2. Chuyển sang index tiếp theo (quay về 0 nếu đã hết mảng)
    currentBgIndex = (currentBgIndex + 1) % backgroundClasses.length;

    // 3. Thêm class nền mới
    body.classList.add(backgroundClasses[currentBgIndex]);
});

// CHỨC NĂNG 2: PHÁT/DỪNG NHẠC
toggleMusicBtn.addEventListener('click', () => {
    if (music.paused) {
        // Nếu nhạc đang dừng, thì phát
        music.play();
        toggleMusicBtn.textContent = "Dừng Nhạc ⏸️";
    } else {
        // Nếu nhạc đang phát, thì dừng
        music.pause();
        toggleMusicBtn.textContent = "Phát Nhạc ▶️";
    }
});