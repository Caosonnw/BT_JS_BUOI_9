function NhanVien() {
  this.tknv = '';
  this.name = '';
  this.email = '';
  this.password = '';
  this.datepicker = '';
  this.luongCB = '';
  this.chucvu = '';
  this.gioLam = '';

  // Tổng lương
  const SEP = 'Sep';
  const TRUONGPHONG = 'TruongPhong';
  const NHANVIEN =  'NhanVien';

  var tongLuong = 0;

  this.tinhTongLuong = function() {
    switch (this.chucvu) {
      case SEP:
        return tongLuong = (this.luongCB * 3);
      case TRUONGPHONG:
        return tongLuong = (this.luongCB * 2);
      case NHANVIEN:
        return tongLuong = (this.luongCB * 1);
      default:
        return;
    }
  }

  // Xếp loại
  var xepLoai = '';
  this.xepLoai = function() {
    if (this.gioLam >= 192) {
      return xepLoai = 'Nhân viên xuất sắc';
    } else if (this.gioLam >= 176) {
      return xepLoai = 'Nhân viên giỏi';
    } else if (this.gioLam >= 160) {
      return xepLoai = 'Nhân viên khá';
    } else if (this.gioLam < 160) {
      return xepLoai = 'Nhân viên trung bình';
    }
  }
}
