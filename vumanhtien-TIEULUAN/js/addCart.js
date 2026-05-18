let giohang = JSON.parse(localStorage.getItem("luugiohang")) || [];

function addCart(x) {
    //khởi tạo biến
    let ten = x.parentElement.children[0].innerText;
    //console.log(ten);
    let hinh = x.parentElement.parentElement.children[0].src;
    let gia = x.parentElement.children[2].innerText;
    let soluong = 1;

    //tạo đối tượng
    let item = {
        name: ten,
        image: hinh,
        count: soluong,
        price: gia,
    }

    console.log(item);

    // Nếu giỏ hàng rỗng
    if (giohang.length == 0) {

        giohang.push(item);

    } else {

        var foundIndex = -1;

        for (var i = 0; i < giohang.length; i++) {

            if (giohang[i].name === ten) {
                foundIndex = i;
                break;
            }
        }

        // Nếu sản phẩm đã tồn tại
        if (foundIndex > -1) {

            giohang[foundIndex].count++;

        } else {

            giohang.push(item);
        }
    }

    // Hiển thị lại cart
    //viewcart();

    // Lưu localStorage
    localStorage.setItem(
        'luugiohang',
        JSON.stringify(giohang)
    );

    viewcart();

}



function viewcart() {

    var kq =
        `
        <thead>
        <tr>
          <th>Stt</th>
          <th>Tên sản phẩm</th>
          <th>Hình sản phẩm</th>
          <th>Đơn giá</th>
          <th>Số lượng</th>
          <th>Thành tiền</th>
          <th>Khác</th>
        </tr>
      </thead>
        `

    var tongtien = 0;

    for (let i = 0; i < giohang.length; i++) {

        let stt = i + 1;

        let thanhtien =
            giohang[i].price * giohang[i].count;

        tongtien += thanhtien;

        kq += `
        <tr>
        <td>1</td>
        <td>${giohang[i].name}</td>
        <td><img src="${giohang[i].image}" style="width: 120px"></td>
        <td>${giohang[i].price}</td>
        <td>${giohang[i].count}</td>
        <td>${thanhtien}đ</td>
        <td><button class="btn btn-danger" onclick="xoa(this,${i})">Xoá</button></td>
      </tr>
       `;
    }

    kq +=
        `
        <tfoot class="table-warning text-center">
        <tr>
          <td colspan="3">Tổng thành tiền</td>
          <td colspan="3" class="text-danger">${tongtien}đ</td>
          <td>
            <button class="btn btn-success">Thanh toán</button>
          </td>
        </tr>
      </tfoot>
`;

    document.getElementById('hienthigiohang').style.display = 'block';

    //document.getElementById('chuachonsanpham').style.display = 'none';

    document.getElementById('hienthigiohang').innerHTML = kq;

}

function xoa(obj, i) {

    // Xóa khỏi mảng
    giohang.splice(i, 1);

    // Cập nhật giao diện
    viewcart();

    // Lưu lại localStorage
    localStorage.setItem(
        'luugiohang',
        JSON.stringify(giohang)
    );

    // Nếu cart rỗng
    if (giohang.length === 0) {
document.getElementById('hienthigiohang').style.display = 'none';

        //document.getElementById('chuachonsanpham').style.display = 'block';
    }
}

viewcart();
