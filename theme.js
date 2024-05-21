document.addEventListener('DOMContentLoaded', function () {
  // Uygulama yüklendikten sonra çalışacak fonksiyon
  changeThemeColor('#464661'); // Örnek olarak tema rengini turuncu yapalım
});

function changeThemeColor(color) {
  let themeMetaTag = document.querySelector('meta[name="theme-color"]');
  if (themeMetaTag) {
    themeMetaTag.setAttribute('content', color);
  } else {
    // Eğer meta etiketi yoksa, yeni bir tane oluşturabiliriz
    themeMetaTag = document.createElement('meta');
    themeMetaTag.setAttribute('name', 'theme-color');
    themeMetaTag.setAttribute('content', color);
    document.head.appendChild(themeMetaTag);
  }
}
