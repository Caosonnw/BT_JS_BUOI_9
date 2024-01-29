function checkEmptyValue(value, idSpan) {
  var eleSpan = document.getElementById(idSpan);
  if(value == "") {
    eleSpan.style.display = "block";
    eleSpan.innerHTML = "Vui lòng không bỏ trống trường này";
    return false;
  } else {
    eleSpan.style.display = "none";
    eleSpan.innerHTML = "";
    return true;
  }
};

function checkEmailValue(value, idSpan) {
  var eleSpan = document.getElementById(idSpan);
  const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var isValid = regexEmail.test(value);
  if (isValid) {
    eleSpan.style.display = "none";
    document.getElementById(idSpan).innerHTML = "";
    return true;
  } else {
    eleSpan.style.display = "block";
    document.getElementById(idSpan).innerHTML = "Email không đúng định dạng";
    return false;
  } 
}

function checkMinMaxValue(value, idSpan, min, max) {
  var eleSpan = document.getElementById(idSpan);
  var doDaiKyTu = value.length;
  if(doDaiKyTu >= min && doDaiKyTu <= max) {
    eleSpan.style.display = "none";
    document.getElementById(idSpan).innerHTML = "";
    return true;
  } else{
    eleSpan.style.display = "block";
    document.getElementById(idSpan).innerHTML = `Vui lòng nhập tối thiểu ${min} và tối đa ${max}`;
    return false
  }
}

function checkPassword(value, idSpan, min, max) {
  var eleSpan = document.getElementById(idSpan);
  const regexPassWord = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*])[A-Za-z\d@#$%^&*]{6,10}$/;
  var isValid = regexPassWord.test(value);
  if (isValid) {
    eleSpan.style.display = "none";
    eleSpan.innerHTML = "";
    return true;
  } else {
    eleSpan.style.display = "block";
    eleSpan.innerHTML = `"Mật khẩu phải tối thiểu ${min} tối đa ${max} ký tự và có ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt"`;
    return false;
  }
}

function checkChucVu(value, idSpan) {
  var eleSpan = document.getElementById(idSpan);
  var validChucVu = ["Sep", "TruongPhong", "NhanVien"];
  if (validChucVu.indexOf(value) === -1) {
    eleSpan.style.display = "block";
    eleSpan.innerHTML = "Vui lòng chọn chức vụ hợp lệ";
    return false;
  } else {
    eleSpan.style.display = "none";
    eleSpan.innerHTML = "";
    return true;
  }
}

function checkSoGioLam(value, idSpan) {
  var eleSpan = document.getElementById(idSpan);
  if (value < 80 || value > 200) {
    eleSpan.style.display = "block";
    eleSpan.innerHTML = "Số giờ làm trong tháng 80 - 200 giờ";
    return false;
  } else {
    eleSpan.style.display = "none";
    eleSpan.innerHTML = "";
    return true;
  }
}

function checkLuongCB(value, idSpan) {
  var eleSpan = document.getElementById(idSpan);
  if (value < 1000000 || value > 20000000 ) {
    eleSpan.style.display = "block";
    eleSpan.innerHTML = "Lương cơ bản 1 000 000 - 20 000 000";
    return false;
  } else {
    eleSpan.style.display = "none";
    eleSpan.innerHTML = "";
    return true;
  }
}

function checkNumber(value, idSpan) {
  var eleSpan = document.getElementById(idSpan);
  const numberRegex = /^[0-9]+$/;
  var isValid = numberRegex.test(value);
  if (isValid) {
    eleSpan.style.display = "none";
    eleSpan.innerHTML = "";
    return true;
  } else {
    eleSpan.style.display = "block";
    eleSpan.innerHTML = "Vui lòng nhập đúng là dạng số";
    return false;
  }
}
function checkNgay(value, idSpan) {
  var eleSpan = document.getElementById(idSpan);
  const ngayRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;

  if (!ngayRegex.test(value)) {
    eleSpan.style.display = "block";
    eleSpan.innerHTML = "Định dạng ngày không hợp lệ (mm/dd/yyyy)";
    return false;
  } else {
    eleSpan.style.display = "none";
    eleSpan.innerHTML = "";
    return true;
  }
}

function removeVietnameseTones(str) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
  str = str.replace(/Đ/g, 'D');
  // Some system encode vietnamese combining accent as individual utf-8 characters
  // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ''); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
  // Remove extra spaces
  // Bỏ các khoảng trắng liền nhau
  str = str.replace(/ + /g, ' ');
  str = str.trim();
  // Remove punctuations
  // Bỏ dấu câu, kí tự đặc biệt
  str = str.replace(
    /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
    ' '
  );
  return str;
}