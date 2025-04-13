$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){          
            $(this).prev().attr('type','text');
        }else{
            $(this).prev().attr('type','password');
        }
    });
});
// Mảng chứa các tài khoản đã đăng ký
let registeredUsers = [
    { username: "admin", password: "123456", email: "admin@domain.com" }
];

function register(username, password, email, confirmPassword) {
    // Kiểm tra thông tin đăng ký có trống hay không
    if (!username || !password || !email) {
        return "Vui lòng điền đầy đủ thông tin";
    }

    // Kiểm tra tên tài khoản đã tồn tại hay chưa
    let userExists = registeredUsers.find(user => user.username === username);
    if (userExists) {
        return "Tên tài khoản đã tồn tại";
    }

    // Kiểm tra mật khẩu có đủ độ dài không
    if (password.length < 6) {
        return "Mật khẩu quá ngắn";
    }

    // Kiểm tra định dạng email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        return "Email không hợp lệ";
    }

    // Kiểm tra mật khẩu xác nhận
    if (password !== confirmPassword) {
        return "Mật khẩu xác nhận không khớp";
    }

    // Kiểm tra số điện thoại nếu có
    if (confirmPassword && !/^\d{10}$/.test(confirmPassword)) {
        return "Số điện thoại không hợp lệ";
    }

    // Đăng ký thành công
    registeredUsers.push({ username, password, email });
    return "Đăng ký thành công";
}
