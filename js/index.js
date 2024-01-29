// Thêm nhân viên
var arrNhanVien = [];
function addNhanVien() {
  var arrInput = document.querySelectorAll(
    ".modal-body #formQLNV input, .modal-body #formQLNV select"
  );
  var nhanVien = new NhanVien();
  for (var i = 0; i < arrInput.length; i++) {
    var id = arrInput[i].id;
    nhanVien[id] = arrInput[i].value;
  };
  var isValid = true;
  isValid &= checkEmptyValue(nhanVien.tknv,"tbTKNV") && checkMinMaxValue(nhanVien.tknv, "tbTKNV", 4, 6);
  isValid &= checkEmptyValue(nhanVien.name,"tbTen");
  isValid &= checkEmptyValue(nhanVien.email,"tbEmail") && checkEmailValue(nhanVien.email,"tbEmail");
  isValid &= checkEmptyValue(nhanVien.password,"tbMatKhau") && checkPassword(nhanVien.password, "tbMatKhau", 6, 10);
  isValid &= checkEmptyValue(nhanVien.datepicker,"tbNgay") && checkNgay(nhanVien.datepicker, "tbNgay");
  isValid &= checkEmptyValue(nhanVien.luongCB,"tbLuongCB") && checkNumber(nhanVien.luongCB,"tbLuongCB") && checkLuongCB(nhanVien.luongCB, "tbLuongCB");
  isValid &= checkChucVu(nhanVien.chucvu,"tbChucVu");
  isValid &= checkEmptyValue(nhanVien.gioLam,"tbGiolam") && checkNumber(nhanVien.gioLam,"tbGiolam") && checkSoGioLam(nhanVien.gioLam,"tbGiolam");

  if(isValid){
    return nhanVien;
  }
}
document.getElementById("btnThemNV").onclick = function () {
  var nhanVien = addNhanVien();
  if (nhanVien) {
    arrNhanVien.push(nhanVien);
    saveLocalStorage("arrNhanVien", arrNhanVien);
    renderNhanVien();
  document.getElementById("formQLNV").reset();
  $("#myModal").modal("hide");
  }
};
document.getElementById("btnThem").onclick = function() {
  var arrSpan = document.querySelectorAll(".sp-thongbao");
  for (var k = 0; k < arrSpan.length; k++) {
    arrSpan[k].style.display = "none";
    arrSpan[k].innerHTML = "";
  };
}

// Render ra giao diện
function renderNhanVien(arr) {
  if (!arr) {
    arr = arrNhanVien;
  }
  var content = "";
  for (var i = 0; i < arr.length; i++) {
    var nhanVien = arr[i];
    var newNhanVien = new NhanVien();
    Object.assign(newNhanVien, nhanVien);
    var stringHTML = `
    <tr>
      <td>${newNhanVien.tknv}</td>
      <td>${newNhanVien.name}</td>
      <td>${newNhanVien.email}</td>
      <td>${newNhanVien.datepicker}</td>
      <td>${newNhanVien.chucvu}</td>
      <td>${newNhanVien.tinhTongLuong().toLocaleString({
        style: "currency",
        currency: "VND"
      })}VNĐ</td>
      <td>${newNhanVien.xepLoai()}</td>
      <td><button onclick="deleteNhanVien('${
        newNhanVien.tknv
      }')" class="btn btn-danger">Xóa</button>
      <button onclick="getInfoNhanVien('${
        newNhanVien.tknv
      }')" id="btnSua" class="btn btn-warning mt-2">Sửa</button></td>
    </tr>
    `;
    content += stringHTML;
  }
  document.getElementById("tableDanhSach").innerHTML = content;
}

// Lưu vào localStorage
function saveLocalStorage(key, value) {
  var stringJSON = JSON.stringify(value);
  localStorage.setItem(key, stringJSON);
}

// Lấy dữ liệu từ localStorage
function getLocalStorage(key) {
  var dataLocal = localStorage.getItem(key);
  if (dataLocal) {
    var newData = JSON.parse(dataLocal);
    arrNhanVien = newData;
    renderNhanVien();
  }
}
getLocalStorage("arrNhanVien");

// Delete dữ liệu Nhân Viên
function deleteNhanVien(tknv) {
  for (var i = 0; i < arrNhanVien.length; i++) {
    if (tknv == arrNhanVien[i].tknv) {
      arrNhanVien.splice(i, 1);
    }
  }
  renderNhanVien();
  saveLocalStorage("arrNhanVien", arrNhanVien);
}

// Lấy dữ liệu nhân viên
function getInfoNhanVien(tknv) {
  $("#myModal").modal("show");
  var nhanVien;
  for (var i = 0; i < arrNhanVien.length; i++) {
    if (tknv == arrNhanVien[i].tknv) {
      nhanVien = arrNhanVien[i];
    }
  }
  var arrInput = document.querySelectorAll(
    ".modal-body #formQLNV input, .modal-body #formQLNV select"
  );
  for (var j = 0; j < arrInput.length; j++) {
    var id = arrInput[j].id;
    arrInput[j].value = nhanVien[id];
  };
  var arrSpan = document.querySelectorAll(".sp-thongbao");
  for (var k = 0; k < arrSpan.length; k++) {
    arrSpan[k].style.display = "none";
    arrSpan[k].innerHTML = "";
  };
  document.getElementById("tknv").readOnly = true;
}

// BTnDong Reset input
document.getElementById("btnDong").onclick = function () {
  document.getElementById("formQLNV").reset();
  document.getElementById("tknv").readOnly = false;
};

// Cập nhật dữ liệu mới
function updateNhanVien() {
  var nhanVien = addNhanVien();
  if (nhanVien) {
    for (var i = 0; i < arrNhanVien.length; i++) {
      var nhanVienTrongMang = arrNhanVien[i];
      if (nhanVien.tknv == nhanVienTrongMang.tknv) {
        arrNhanVien[i] = nhanVien;
      }
    }
  renderNhanVien();
  saveLocalStorage("arrNhanVien", arrNhanVien);
  document.getElementById("tknv").readOnly = false;
  document.getElementById("formQLNV").reset();
  }
}
document.getElementById("btnCapNhat").onclick = updateNhanVien;

// Tìm kiếm theo xếp loại nhân viên
function searchNhanVien(event) {
  var valueUser = event.target.value;
  var keyword = valueUser.trim().toLowerCase();
  var newKeyWord = removeVietnameseTones(keyword);
  var arrNhanVienFilter = [];
  for (var i = 0; i < arrNhanVien.length; i++) {
    var nhanVien = arrNhanVien[i];
    var newNhanVien = new NhanVien();
    Object.assign(newNhanVien, nhanVien);
    var newNhanVienXepLoai = removeVietnameseTones(newNhanVien.xepLoai().trim().toLowerCase());
    if(newNhanVienXepLoai.includes(newKeyWord)) {
      arrNhanVienFilter.push(newNhanVien);
    }
  }
  renderNhanVien(arrNhanVienFilter);
}

