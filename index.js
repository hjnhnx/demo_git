
var imgs = ['http://vanhienblog.info/wp-content/uploads/2019/02/anh-gai-xinh-dep-hot-girl-1-00.jpg','https://soicauvn.com/wp-content/uploads/2020/04/20-hinh-anh-gai-xinh-toc-dai-dep-quyen-ru-va-de-thuong-nhat-2.jpg','https://i.pinimg.com/originals/7b/77/fc/7b77fc7de7cbe9df1b9def672269aa15.jpg','https://i.imgur.com/fabcJBE.jpg','https://68.media.tumblr.com/62ae4472b05aff3a0cc7ec48d6f34277/tumblr_ouqdnbNtus1qadv0oo1_1280.jpg','https://keomoi.com/wp-content/uploads/2019/05/anh-gai-dep-de-thuong-hinh-14.jpg','https://lh3.googleusercontent.com/proxy/5Zna4TK4zJR6WCxnss-zOYn_kx5McDh0n2TnMSHMTNVmzh5bmqmRgfY5NI51Kv6oSLHuloRfkH2zm8MlP-Wuya_NmzgKB5B3oPb4AQPL6I4k9cAYR_qWTgiV8PoVq6fjJIhoWilmpmavcAUZBvwHiAcQVTI-32jG','https://static2.yan.vn/YanNews/2167221/202011/le-bong-la-ai-tieu-su-doi-tu-su-nghiep-cua-co-057d0b59-4eceb02c.png','https://thongcongnghethcm.net/uploads/lebong/le-bong-5.jpg','https://cdn.gametv.vn/gtv-photo/GTVNews/1615455235/api_cdn.gametv.vn-3a33a8c2c309cd1300eeac3ee8014cad.jpg']
var div = document.querySelector('div')
for (var i = 0; i < imgs.length; i++) {
    div.innerHTML += `<img onclick="displaynone()" style="height: 470px; width: 230px; object-fit: cover"  src="${imgs[i]}" alt=""/>`
}
function displaynone(){
    event.target.style.display = 'none'
}

