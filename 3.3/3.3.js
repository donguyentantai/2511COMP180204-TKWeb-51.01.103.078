// 1. Khởi tạo mảng lưu tên sản phẩm (Bước 2)
let products = ["Iphone 15", "Samsung Galaxy S23", "Xiaomi Redmi Note 12"];

// Biến lưu trữ chỉ số (index) của sản phẩm đang được sửa
let editingIndex = -1;

// 2. Hàm Hiển thị Danh sách Sản phẩm (Bước 4)
function displayProducts() {
    const tableBody = document.querySelector('#productTable tbody');
    tableBody.innerHTML = ''; // Xóa nội dung cũ
    
    // Cập nhật số lượng sản phẩm
    document.getElementById('productCount').textContent = products.length;

    // Sử dụng vòng lặp để duyệt mảng và tạo hàng (row) cho bảng (Bước 4)
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        
        // Tạo hàng mới
        const row = tableBody.insertRow();
        
        // Cột 1: STT
        const cellStt = row.insertCell(0);
        cellStt.textContent = i + 1;
        
        // Cột 2: Tên Sản Phẩm
        const cellName = row.insertCell(1);
        cellName.textContent = product;
        cellName.style.cursor = 'pointer'; // Thêm con trỏ để nhấn vào tên sản phẩm (Bước 6)
        cellName.onclick = function() {
            showEditForm(i, product); // Gắn sự kiện để sửa khi click vào tên
        };
        
        // Cột 3: Thao Tác (chứa nút Sửa và Xóa)
        const cellActions = row.insertCell(2);
        
        // Nút Sửa (Edit)
        const editButton = document.createElement('button');
        editButton.textContent = 'Sửa';
        // Truyền index (chỉ số) của sản phẩm vào hàm showEditForm
        editButton.onclick = function() { 
            showEditForm(i, product); 
        };
        editButton.className = 'edit-btn';
        
        // Nút Xóa (Delete)
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Xóa';
        // Truyền index (chỉ số) của sản phẩm vào hàm deleteProduct
        deleteButton.onclick = function() { 
            deleteProduct(i); 
        };
        deleteButton.className = 'delete-btn';
        
        cellActions.appendChild(editButton);
        cellActions.appendChild(deleteButton);
    }
}
// 3. Hàm Thêm Sản phẩm (Bước 5)
function addProduct() {
    const productNameInput = document.getElementById('productName');
    const newName = productNameInput.value.trim();
    const messageElement = document.getElementById('message');

    if (newName) {
        // Lấy tên mới và đưa vào mảng
        products.push(newName); 
        productNameInput.value = ''; // Xóa ô nhập liệu
        
        // Hiển thị lại danh sách
        displayProducts(); 
        
        // Hiển thị thông báo (Bước 5)
        messageElement.textContent = `✅ Đã thêm sản phẩm "${newName}" thành công!`;
        messageElement.style.color = 'green';
    } else {
        messageElement.textContent = '⚠️ Vui lòng nhập tên sản phẩm.';
        messageElement.style.color = 'orange';
    }

    // Xóa thông báo sau 3 giây
    setTimeout(() => {
        messageElement.textContent = '';
    }, 3000);
}
// 4. Hàm Hiển thị Form Sửa Sản phẩm (Một phần của Bước 6)
function showEditForm(index, name) {
    // Ẩn form thêm sản phẩm (Tùy chọn)
    document.querySelector('.add-product-section').style.display = 'none';

    // Hiển thị form sửa sản phẩm
    const editSection = document.getElementById('editProductSection');
    editSection.style.display = 'block';
    
    // Đổ tên sản phẩm hiện tại vào ô nhập liệu sửa
    document.getElementById('editProductName').value = name;
    
    // Lưu lại index của sản phẩm đang sửa
    editingIndex = index;
}
// 5. Hàm Cập nhật (Sửa) Sản phẩm (Một phần của Bước 6)
function updateProduct() {
    const newName = document.getElementById('editProductName').value.trim();
    
    if (editingIndex > -1 && newName) {
        // Cập nhật lại tên trong mảng
        products[editingIndex] = newName; 
        
        // Ẩn form sửa và hiện lại form thêm
        cancelEdit(); 
        
        // Hiển thị lại bảng để thấy sự thay đổi
        displayProducts(); 
    } else {
        alert("Vui lòng nhập tên sản phẩm mới.");
    }
}
// 6. Hàm Hủy Sửa
function cancelEdit() {
    document.getElementById('editProductSection').style.display = 'none';
    document.querySelector('.add-product-section').style.display = 'block'; // Hiện lại form thêm
    editingIndex = -1; // Reset index
}
// 7. Hàm Xóa Sản phẩm (Bước 7)
function deleteProduct(index) {
    if (confirm(`Bạn có chắc muốn xóa sản phẩm "${products[index]}" không?`)) {
        // Dùng splice để xóa sản phẩm khỏi danh sách (tìm vị trí và xóa)
        products.splice(index, 1);
        
        // Hiển thị lại danh sách sau khi xóa
        displayProducts(); 
    }
}
// Gọi hàm hiển thị lần đầu khi tải trang
displayProducts();