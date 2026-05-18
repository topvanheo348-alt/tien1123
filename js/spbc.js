const spbc = sanpham.filter(item=>item.type ==="bán chạy")


for (let i = 0; i < spbc.length; i++) {
    document.getElementById("spbc").innerHTML +=
`
<div class="col-md-4 ">
    <div class="card text-center h600">
        <img class="card-img-top" src="img/${spbc[i].image}" alt="Card image">
        <div class="card-body">
            <h4 class="card-title">${spbc[i].name}</h4>
            <p class="card-text">${spbc[i].description}</p>
            <h3 class="card-title">${spbc[i].price}</h3>
            <button class="btn btn-primary" onclick='detail(${spbc[i].id})' }>Chi tiết</button>
            <button class="btn btn-info" onclick='addCart(this)' >addCart</button>
        </div>
    </div>
</div>
`
    
}

function detail(id){
    window.location.href=`detail.html?id=${id}` // chuyển sang trang detail.html
}