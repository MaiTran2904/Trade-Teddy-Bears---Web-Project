function pushAccount(list) {
    localStorage.setItem('listAccount', JSON.stringify(list));
    console.log(list);
}
function loadAccount() {
    return JSON.parse(localStorage.getItem('listAccount'));
}
const account={
    fullName:'',
    email:'',
    password:'',
    phone:'Not set up!',
    gender:'Not set up!',
    constructor(name,email,password){
        this.fullName=name;
        this.email=email;
        this.password=password;
    }
}
createAccount=()=>{
    var fullName=document.getElementById('').value;
    var email=document.getElementById('').value;
    var password=document.getElementById('').value;
    var newAcc=new account(fullName,email,password);
    pushAccount(newAcc);
}
compareCode=(code)=>{
    if(code==codeemail)
    return true;
}

function sendEmail() {
    // var title = "Mã xác nhận"
    //var content = document.getElementById('content').value
    content = TaoSoNgauNhien(100000, 999999);
    var email = document.getElementById('email').value

    Email.send({
        Host: "smtp.gmail.com",
        Username: "maitran29042001@gmail.com",
        Password: "zgpijlxjddpyxvgf",
        To: email,
        From: "maitran29042001@gmail.com",
        Subject: "Mã xác nhận",
        Body: content + "-This is your account verification code. Thank you to HKTQueen Hotel!<br><br>Best regards,<br>HKTQueen Hotel"
    }).then(
        message => console.log('data ', message)
    );

    function TaoSoNgauNhien(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    signup();

}
function signup(){
    code = prompt("Nhập mã xác nhận của bạn:", );
    xacnhan();
}

function xacnhan() {
    if (content == code) {
        alert('Bạn đã đăng ký thành công!');
        window.location.href="../User/User.html";
    } else {
        alert('Bạn đăng kí không thành công.Vui lòng nhập lại!');
        if (code != null) {
            signup();
        }
    }
}
