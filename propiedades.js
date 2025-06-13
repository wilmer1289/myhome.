function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const isActive = navLinks.classList.toggle('active');
  document.body.classList.toggle('no-scroll', isActive);
}

function toggleLogin() {
  const modal = document.getElementById('loginModal');
  modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const user = users.find(u => u.username === username && u.password === password);

  const message = document.getElementById('loginMessage');
  if (user) {
    message.textContent = '¡Inicio de sesión exitoso!';
    message.style.color = '#1E3A8A';
    setTimeout(() => {
      message.textContent = '';
      toggleLogin();
      window.location.href = 'index.html';
    }, 2000);
  } else {
    message.textContent = 'Usuario o contraseña incorrectos.';
  }
});

// Datos de ejemplo para 50 propiedades
const properties = [
  { id: 1, title: "Casa en Miraflores", location: "Lima", type: "casa", rooms: 3, bathrooms: 2, area: 120, price: 250000, image: "https://img10.naventcdn.com/avisos/111/01/42/15/51/83/720x532/1451289636.jpg?isFirstImage=true" },
  { id: 2, title: "Departamento en San Isidro", location: "Lima", type: "departamento", rooms: 2, bathrooms: 2, area: 90, price: 180000, image: "https://cdn.delujo.pe/data/img/proyecto/original/prm_3694.webp" },
  { id: 3, title: "Chalet en Surco", location: "Lima", type: "chalet", rooms: 4, bathrooms: 3, area: 150, price: 350000, image: "https://imgar.zonapropcdn.com/avisos/1/00/55/85/73/19/720x532/1966417954.jpg?isFirstImage=true" },
  { id: 4, title: "Casa en Barranco", location: "Lima", type: "casa", rooms: 2, bathrooms: 1, area: 80, price: 120000, image: "https://images.adsttc.com/media/images/5da8/c116/3312/fd27/1100/0228/large_jpg/PATRICIO_ENDARA_ARQUITECTOS_-_CASAS_PILLAGUA_BARRANCO_-_FOTOGRAFI%CC%81A_7.jpg?1571340552" },
  { id: 5, title: "Departamento en Magdalena", location: "Lima", type: "departamento", rooms: 1, bathrooms: 1, area: 60, price: 90000, image: "https://e.nexoinmobiliario.pe/customers/grupo-inmobiliario-s-m-sac/2140-venezia/departamentos-magdalena-del-mar-604816084588c_b.jpg" },
  { id: 6, title: "Terreno en La Molina", location: "Lima", type: "terreno", rooms: 0, bathrooms: 0, area: 200, price: 150000, image: "https://www.remaxpremium.com.pe/wp-content/uploads/2022/04/victor-castro-cas01-03.jpg" },
  { id: 7, title: "Casa en Arequipa", location: "Arequipa", type: "casa", rooms: 3, bathrooms: 2, area: 110, price: 140000, image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/152256186.webp?k=fd4e60de28910c76dd1c55088745dfbb6cfaf77764dde167112c1f520bcc2f15&o=" },
  { id: 8, title: "Departamento en Yanahuara", location: "Arequipa", type: "departamento", rooms: 2, bathrooms: 1, area: 70, price: 85000, image: "https://imganuncios.mitula.net/venta_departamento_urb_bancarios_jlbyr_2570001747908883349i2.jpg" },
  { id: 9, title: "Terreno en Cayma", location: "Arequipa", type: "terreno", rooms: 0, bathrooms: 0, area: 180, price: 110000, image: "https://img.properati.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzL2YwMjY5NmI5LTAwYjgtNGRmMy1iY2QyLTUxNjMwOWMwNTMwMS8wMTkyMGIyNi03MmJmLTcwM2QtYWZjOS1iOWM2ZGVmNWU0YzQucG5nIiwiYnJhbmQiOiJwcm9wZXJhdGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjI0MCwiZml0IjoiY292ZXIifX19" },
  { id: 10, title: "Casa en Cusco", location: "Cusco", type: "casa", rooms: 4, bathrooms: 3, area: 130, price: 200000, image: "https://img10.naventcdn.com/avisos/111/00/67/08/22/03/360x266/372935472.jpg?isFirstImage=true" },
  { id: 11, title: "Departamento en Urubamba", location: "Cusco", type: "departamento", rooms: 1, bathrooms: 1, area: 50, price: 70000, image: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTg0NjIzMTc=/original/b8eb6be7-cb56-41e4-a8f4-2076bcd58902.jpeg" },
  { id: 12, title: "Terreno en Machu Picchu", location: "Cusco", type: "terreno", rooms: 0, bathrooms: 0, area: 250, price: 180000, image: "https://imgar.zonapropcdn.com/avisos/1/00/56/00/35/22/360x266/1969942101.jpg?isFirstImage=true" },
  { id: 13, title: "Casa en Pueblo Libre", location: "Lima", type: "casa", rooms: 3, bathrooms: 2, area: 100, price: 130000, image: "https://img10.naventcdn.com/avisos/111/01/46/13/20/16/360x266/1524333317.jpg?isFirstImage=true" },
  { id: 14, title: "Departamento en Jesús María", location: "Lima", type: "departamento", rooms: 2, bathrooms: 1, area: 65, price: 95000, image: "https://lugano.pe/optsystem/wp-content/uploads/elementor/thumbs/departamentos-en-Jesus-Maria-con-entrega-inmediata1-q9m04yvgjhu9z3pg1mb1tf2yiiuj5rgw847vq1hwdk.jpg" },
  { id: 15, title: "Chalet en Chorrillos", location: "Lima", type: "chalet", rooms: 5, bathrooms: 4, area: 200, price: 400000, image: "https://img.properati.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzNmYTQ0NzUzLTg2MDItNDAyYS1hNjZmLTBkYjE1NWE0ZDEzZS9mMzQzNDI4Mi05ZDlhLTQ2YmQtOTQ4ZC0zYjhiZTcyYzFkNjcuanBnIiwiYnJhbmQiOiJwcm9wZXJhdGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjI0MCwiZml0IjoiY292ZXIifX19" },
  { id: 16, title: "Casa en San Borja", location: "Lima", type: "casa", rooms: 2, bathrooms: 1, area: 90, price: 110000, image: "https://img.properati.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAzZmZiYTIxLWM0NjItNDFiZS1iYjI0LTk2NTBmNzIyY2JkZS85ODI5YzEyYS0wNGM1LTQyM2QtYjY1Ni1iMDdmMDVlYTU5OGIuanBnIiwiYnJhbmQiOiJwcm9wZXJhdGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjI0MCwiZml0IjoiY292ZXIifX19" },
  { id: 17, title: "Departamento en Surco", location: "Lima", type: "departamento", rooms: 3, bathrooms: 2, area: 85, price: 120000, image: "https://img10.naventcdn.com/avisos/111/01/45/64/20/12/360x266/1509227254.jpg?isFirstImage=true" },
  { id: 18, title: "Terreno en Lurín", location: "Lima", type: "terreno", rooms: 0, bathrooms: 0, area: 300, price: 200000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnPTU7omNggFrYn1h4aj2rU1KulEa9OXCeiA&s" },
  { id: 19, title: "Casa en Cerro Colorado", location: "Arequipa", type: "casa", rooms: 3, bathrooms: 2, area: 115, price: 145000, image: "https://bolsainmobiliaria.pe/storage/anuncios/uNdeBGTjUNrdxQz5frvsPmXjaunbRT3ypT7yUGiZ.jpeg" },
  { id: 20, title: "Departamento en Paucarpata", location: "Arequipa", type: "departamento", rooms: 1, bathrooms: 1, area: 55, price: 75000, image: "https://img.properati.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTQ0MjI5LTRkOTYtN2NjNy05NzU1LWZlYWUxY2E5Zjc2OS8wMTk0NDIyOS01NTdmLTczM2YtOWVjOC05ZDZjNDc0M2UxNzAuanBnIiwiYnJhbmQiOiJwcm9wZXJhdGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjI0MCwiZml0IjoiY292ZXIifX19" },
  { id: 21, title: "Terreno en Socabaya", location: "Arequipa", type: "terreno", rooms: 0, bathrooms: 0, area: 220, price: 130000, image: "https://img10.naventcdn.com/avisos/111/01/46/22/39/66/360x266/1526695962.jpg?isFirstImage=true" },
  { id: 22, title: "Casa en Ollantaytambo", location: "Cusco", type: "casa", rooms: 2, bathrooms: 1, area: 80, price: 100000, image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/211396548.jpg?k=95f4db092eff24834db1634e34954a1310172169c189c60e47bb2d02d77bed58&o=&hp=1" },
  { id: 23, title: "Departamento en Maras", location: "Cusco", type: "departamento", rooms: 3, bathrooms: 2, area: 95, price: 135000, image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/340455255.jpg?k=0ec2a33a274f1f529a350082919c3137ec69456b90d1742ffe421aa48791461b&o=&hp=1" },
  { id: 24, title: "Chalet en Pisac", location: "Cusco", type: "chalet", rooms: 4, bathrooms: 3, area: 160, price: 300000, image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/474391836.webp?k=04117a846078d982f417934e6b13146b974b87948b3402122256e670f6ab4752&o=" },
  { id: 25, title: "Terreno en Urubamba", location: "Cusco", type: "terreno", rooms: 0, bathrooms: 0, area: 280, price: 190000, image: "https://img.fazwaz.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzXC8wMTk0NzA2YS1lYjU2LTcyMmEtYjU1ZC0yNjkzNGZkYjkxOGNcLzAxOTQ3MDZjLWQ5NGUtNzNmMS1iNzc1LTE5NTgxZTgyY2U3Ni5qcGciLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6MzU1LCJoZWlnaHQiOjI0MCwiZml0IjoiY292ZXIifX19" },
  { id: 26, title: "Casa en Lince", location: "Lima", type: "casa", rooms: 3, bathrooms: 2, area: 105, price: 135000, image: "https://img10.naventcdn.com/avisos/111/01/46/34/75/96/360x266/1529648628.jpg?isFirstImage=true" },
  { id: 27, title: "Departamento en Breña", location: "Lima", type: "departamento", rooms: 2, bathrooms: 1, area: 70, price: 95000, image: "https://cdn2.infocasas.com.uy/web/th.outside300x270.67a3111993fc6_infocdn.jpg" },
  { id: 28, title: "Chalet en Los Olivos", location: "Lima", type: "chalet", rooms: 4, bathrooms: 3, area: 140, price: 280000, image: "https://img.hwnstatic.com/500/350/80/false/S9z7b46NbIHgqGh5rZKzJ7DshaFQJ:88R:pHDQnO02bWliMFMWFtx5NjO0E5Ur2sA7ovwhcu8Xtrv8pJTSBlmgH5TeNCJiDArm4B02quJNHYPBDNIIc5YISDZ:gmNhIpQqQSI9GMmHMmWEIRJXtstpYPhgnrYDBbowa4bP3gSzQ_" },
  { id: 29, title: "Terreno en Comas", location: "Lima", type: "terreno", rooms: 0, bathrooms: 0, area: 250, price: 160000, image: "https://img10.naventcdn.com/avisos/111/01/44/95/68/37/360x266/1494052880.jpg?isFirstImage=true" },
  { id: 30, title: "Casa en José Luis Bustamante", location: "Arequipa", type: "casa", rooms: 2, bathrooms: 1, area: 90, price: 115000, image: "https://img.properati.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTZkNGZkLTQ3NDYtN2NjZi04YzY0LTM3ZTk5ZjhhN2NiNy8wMTk2ZDUwNC1jMWNkLTcxYjktODk0NC0zYTZmZjBmYzRmMjMuanBnIiwiYnJhbmQiOiJwcm9wZXJhdGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjI0MCwiZml0IjoiY292ZXIifX19" },
  { id: 31, title: "Departamento en Miraflores", location: "Arequipa", type: "departamento", rooms: 1, bathrooms: 1, area: 60, price: 80000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIkjFmFwuCM5i-6tFLPzOXdVQKvWfFrsBbVA&s" },
  { id: 32, title: "Terreno en Sachaca", location: "Arequipa", type: "terreno", rooms: 0, bathrooms: 0, area: 200, price: 120000, image: "https://img.properati.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTYxNTY4LWRkYmMtN2JiNC04ZDRkLTNiOTRjZGRiOGVmOS8wMTk2MTU2Yi1kZTk1LTczNzktYmY3Mi1mMTAyMmI3YzY3M2MuanBnIiwiYnJhbmQiOiJwcm9wZXJhdGkiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjI0MCwiZml0IjoiY292ZXIifX19" },
  { id: 33, title: "Casa en Chinchero", location: "Cusco", type: "casa", rooms: 3, bathrooms: 2, area: 110, price: 140000, image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/496443801.jpg?k=d22500e59ba8db3d85486efc06944a319aa4a503d386b1d287ea2a505344594a&o=&hp=1" },
  { id: 34, title: "Departamento en Calca", location: "Cusco", type: "departamento", rooms: 2, bathrooms: 1, area: 75, price: 90000, image: "https://img.resemmedia.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTM0NDRjLTJhNGItN2NjZi05ZDg5LTg0N2FkMWRlNDE2YS8wMTkzNDQ0Yy0zNTZmLTcwYzctODkyOS0xYjA0ZDdiNmUyYWYuanBnIiwiYnJhbmQiOiJyZXNlbSIsImVkaXRzIjp7InJvdGF0ZSI6bnVsbCwicmVzaXplIjp7IndpZHRoIjozNTQsImhlaWdodCI6MjQwLCJmaXQiOiJjb3ZlciJ9fX0=" },
  { id: 35, title: "Chalet en Yucay", location: "Cusco", type: "chalet", rooms: 5, bathrooms: 4, area: 180, price: 320000, image: "https://a0.muscache.com/im/pictures/miso/Hosting-1162985465421544966/original/2af5b6d6-6253-4a50-ba9d-088a041e6731.jpeg" },
  { id: 36, title: "Casa en Callao", location: "Lima", type: "casa", rooms: 2, bathrooms: 1, area: 85, price: 105000, image: "https://img10.naventcdn.com/avisos/111/01/45/42/91/44/360x266/1504020385.jpg?isFirstImage=true" },
  { id: 37, title: "Departamento en San Miguel", location: "Lima", type: "departamento", rooms: 3, bathrooms: 2, area: 80, price: 110000, image: "https://urbania.pe/blog/wp-content/uploads/2016/02/Proyecto-Alto-San-Miguel-interior-Urbania.pe_.jpg" },
  { id: 38, title: "Terreno en Ancón", location: "Lima", type: "terreno", rooms: 0, bathrooms: 0, area: 300, price: 210000, image: "https://img.resemmedia.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTRkZDAwLTIzNjgtN2JiZS1hN2FkLWE5ZGNlYWFjYTAzNy8wMTk0ZGQwMC0yZWRlLTczMWItOThlOC05ZGNlMWIwMzNhYzkuanBnIiwiYnJhbmQiOiJyZXNlbSIsImVkaXRzIjp7InJvdGF0ZSI6bnVsbCwicmVzaXplIjp7IndpZHRoIjozNTQsImhlaWdodCI6MjQwLCJmaXQiOiJjb3ZlciJ9fX0=" },
  { id: 39, title: "Casa en Tiabaya", location: "Arequipa", type: "casa", rooms: 3, bathrooms: 2, area: 120, price: 150000, image: "https://img.mitula.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTUyNDhlLWRmYjUtNzc3MS1iMTFmLWNlNjQyOTAwNTY5My8wMTk1MjQ4ZS1mYzExLTczM2YtYWRkOC0yYjc1NzlkM2FhOWYuanBnIiwiYnJhbmQiOiJtaXR1bGEiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6MzgwLCJoZWlnaHQiOjIzMCwiZml0IjoiY292ZXIifX19" },
  { id: 40, title: "Departamento en Selva Alegre", location: "Arequipa", type: "departamento", rooms: 1, bathrooms: 1, area: 55, price: 75000, image: "https://imganuncios.mitula.net/departamento_alto_selva_alegre_6110001740391906645.jpg" },
  { id: 41, title: "Terreno en Yura", location: "Arequipa", type: "terreno", rooms: 0, bathrooms: 0, area: 230, price: 140000, image: " https://img10.naventcdn.com/avisos/111/00/65/49/70/53/360x266/342607050.jpg?isFirstImage=true" },
  { id: 42, title: "Casa en Maras", location: "Cusco", type: "casa", rooms: 2, bathrooms: 1, area: 90, price: 115000, image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/531126763.jpg?k=665ff3510ec9758f49b8e6be3caf81ce1f3743ac117667c5db1758b3ab4d54da&o=&hp=1" },
  { id: 43, title: "Departamento en Pisac", location: "Cusco", type: "departamento", rooms: 3, bathrooms: 2, area: 100, price: 130000, image: "https://images.trvl-media.com/lodging/114000000/113770000/113761200/113761179/be42779a.jpg?impolicy=fcrop&w=357&h=201&p=1&q=medium" },
  { id: 44, title: "Chalet en Urubamba", location: "Cusco", type: "chalet", rooms: 4, bathrooms: 3, area: 170, price: 310000, image: "https://images.trvl-media.com/lodging/19000000/18770000/18764500/18764417/5df343d0.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill" },
  { id: 45, title: "Casa en Santa Anita", location: "Lima", type: "casa", rooms: 2, bathrooms: 1, area: 80, price: 100000, image: "https://img.resemmedia.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTZhNmMzLTU3YzUtN2VlNC05MDk0LTBhZjExNzZjOWY2YS8wMTk2YTZjYS1iNjBmLTcwN2UtYjRlYi00N2Q0NDk1NTQ5NTcuanBnIiwiYnJhbmQiOiJyZXNlbSIsImVkaXRzIjp7InJvdGF0ZSI6bnVsbCwicmVzaXplIjp7IndpZHRoIjozNTQsImhlaWdodCI6MjQwLCJmaXQiOiJjb3ZlciJ9fX0=" },
  { id: 46, title: "Departamento en Ate", location: "Lima", type: "departamento", rooms: 2, bathrooms: 1, area: 70, price: 95000, image: "https://cdn2.infocasas.com.uy/repo/img/th.outside300x270.547906_143506289_252.jpg" },
  { id: 47, title: "Terreno en Puente Piedra", location: "Lima", type: "terreno", rooms: 0, bathrooms: 0, area: 280, price: 170000, image: "https://img.resemmedia.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTFiZjUxLTUyMzItN2VlZS04ZTZjLTM2NDNhZDE2ZTFkZC8wMTkxYmY1MS01ZTcyLTczOWEtYjE5Ny0zMWRiMzE5YjA2MTkuanBnIiwiYnJhbmQiOiJyZXNlbSIsImVkaXRzIjp7InJvdGF0ZSI6bnVsbCwicmVzaXplIjp7IndpZHRoIjozNTQsImhlaWdodCI6MjQwLCJmaXQiOiJjb3ZlciJ9fX0=" },
  { id: 48, title: "Casa en Sabandía", location: "Arequipa", type: "casa", rooms: 3, bathrooms: 2, area: 110, price: 145000, image: "https://a0.muscache.com/im/pictures/miso/Hosting-798568199092181177/original/a2c9c63e-40da-4b5b-aa06-24e5c27df8d1.jpeg?im_w=720" },
  { id: 49, title: "Departamento en Hunter", location: "Arequipa", type: "departamento", rooms: 1, bathrooms: 1, area: 60, price: 80000, image: "https://img10.naventcdn.com/avisos/111/01/44/06/90/33/360x266/1474624535.jpg?isFirstImage=true" },
  { id: 50, title: "Terreno en Poroy", location: "Cusco", type: "terreno", rooms: 0, bathrooms: 0, area: 260, price: 160000, image: "https://img.resemmedia.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTMzY2Q3LTQ5OTAtNzIyMS1hY2ZkLTJiMDdiYTRkOGQ4YS8wMTkzM2NkNy02YmMzLTcyZjktYmUzNy1mNTEyZTUyOGM4ZjUuanBnIiwiYnJhbmQiOiJyZXNlbSIsImVkaXRzIjp7InJvdGF0ZSI6bnVsbCwicmVzaXplIjp7IndpZHRoIjozNTQsImhlaWdodCI6MjQwLCJmaXQiOiJjb3ZlciJ9fX0=" },
];

// Función para renderizar propiedades
function renderProperties(propertiesToRender) {
  const propertiesList = document.getElementById('propertiesList');
  propertiesList.innerHTML = '';
  propertiesToRender.forEach(property => {
    const card = document.createElement('div');
    card.classList.add('property-card');
    if (localStorage.getItem(`favorite_${property.id}`) === 'true') {
      card.classList.add('favorite');
    }
    card.innerHTML = `
      <img src="${property.image}" alt="${property.title}">
      <h3>${property.title}</h3>
      <p>Ubicación: ${property.location}</p>
      <p>${property.rooms} hab. | ${property.bathrooms} baños | ${property.area} m²</p>
      <p class="details">$${property.price.toLocaleString()}</p>
      <a href="#" class="contact-btn">Contactar Agente</a>
      <i class="fas fa-heart favorite-icon" onclick="toggleFavorite(${property.id})"></i>
    `;
    propertiesList.appendChild(card);
  });
}

// Función para alternar favoritos
function toggleFavorite(propertyId) {
  const isFavorite = localStorage.getItem(`favorite_${propertyId}`) === 'true';
  localStorage.setItem(`favorite_${propertyId}`, !isFavorite);
  renderProperties(filteredProperties);
}

// Función para filtrar propiedades
function filterProperties() {
  const location = document.getElementById('locationFilter').value.toLowerCase();
  const type = document.getElementById('typeFilter').value.toLowerCase();
  const rooms = document.getElementById('roomsFilter').value;
  const price = parseInt(document.getElementById('priceFilter').value) || Infinity;

  filteredProperties = properties.filter(property => {
    return (
      (location === '' || property.location.toLowerCase() === location) &&
      (type === '' || property.type.toLowerCase() === type) &&
      (rooms === '' || property.rooms >= parseInt(rooms)) &&
      property.price <= price
    );
  });

  renderProperties(filteredProperties);
}

// Inicializar la página
let filteredProperties = [...properties];
renderProperties(filteredProperties);
// chatbot.js
document.addEventListener('DOMContentLoaded', () => {
  class Chatbot {
    constructor() {
      this.chatWindow = null;
      this.currentStep = 1;
      this.selectedProperty = null;
      this.responses = {};
      this.init();
    }

    init() {
      const buttons = document.querySelectorAll('.contact-btn');
      if (buttons.length === 0) {
        console.error('No se encontraron botones con clase .contact-btn');
        return;
      }
      buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          this.selectedProperty = btn.closest('.property-card');
          if (!this.selectedProperty) {
            console.error('No se encontró la tarjeta de propiedad');
            return;
          }
          this.openChat();
        });
      });
    }

    openChat() {
      if (!this.chatWindow) {
        this.chatWindow = document.createElement('div');
        this.chatWindow.className = 'chatbot-window';
        this.chatWindow.innerHTML = `
          <div class="chatbot-header">
            <span class="chat-icon">💬</span>
            <span>Chat con Agente MYHOME</span>
            <span class="close-chat" onclick="chatbot.closeChat()">×</span>
          </div>
          <div class="chatbot-messages" id="chatMessages"></div>
          <div class="chatbot-input" id="chatInputContainer" style="display: none;">
            <input type="text" id="chatInput" placeholder="Escribe aquí...">
            <button onclick="chatbot.sendMessage()">Enviar</button>
          </div>
        `;
        document.body.appendChild(this.chatWindow);
      }
      this.chatWindow.style.display = 'block';
      this.currentStep = 1;
      this.responses = {};
      this.displayMessage('¡Hola! ¿En qué puedo ayudarte hoy con tu propiedad? Por favor, selecciona una opción:', [
        'Consultar detalles de la propiedad',
        'Solicitar una visita',
        'Preguntar por el proceso de compra',
        'Otro tema'
      ]);
    }

    closeChat() {
      if (this.chatWindow) {
        this.chatWindow.style.display = 'none';
        this.currentStep = 1;
        this.responses = {};
      }
    }

    displayMessage(text, options = null) {
      const messagesDiv = document.getElementById('chatMessages');
      if (!messagesDiv) return;

      const messageDiv = document.createElement('div');
      messageDiv.className = 'chatbot-message';
      messageDiv.innerHTML = `<p>${text}</p>`;

      if (options) {
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'chatbot-options';
        options.forEach(option => {
          const button = document.createElement('button');
          button.textContent = option;
          button.onclick = () => this.handleOption(option);
          optionsDiv.appendChild(button);
        });
        messageDiv.appendChild(optionsDiv);
      }

      messagesDiv.innerHTML = ''; // limpiar mensajes anteriores
      messagesDiv.appendChild(messageDiv);
      messagesDiv.scrollTop = messagesDiv.scrollHeight;

      const inputContainer = document.getElementById('chatInputContainer');
      if (inputContainer) inputContainer.style.display = 'none';
    }

    showInput() {
      const inputContainer = document.getElementById('chatInputContainer');
      if (inputContainer) {
        inputContainer.style.display = 'flex';
        document.getElementById('chatInput')?.focus();
      }
    }

    handleOption(option) {
      this.responses[this.currentStep] = option;
      this.currentStep++;

      const messagesDiv = document.getElementById('chatMessages');
      if (!messagesDiv) return;
      messagesDiv.innerHTML = '';

      switch (this.currentStep) {
        case 2:
          if (option === 'Consultar detalles de la propiedad') {
            this.displayMessage('¡Entendido! ¿Qué te gustaría saber? Elige una opción:', [
              'Precio y condiciones',
              'Características (habitaciones, baños, etc.)',
              'Ubicación y alrededores',
              'Volver al menú principal'
            ]);
          } else if (option === 'Solicitar una visita') {
            this.displayMessage('¡Perfecto! ¿Cuándo te gustaría agendar la visita? Elige una opción:', [
              'Hoy',
              'Mañana',
              'Esta semana',
              'Volver al menú principal'
            ]);
          } else if (option === 'Preguntar por el proceso de compra') {
            this.displayMessage('¡Claro! ¿Sobre qué aspecto necesitas información? Elige una opción:', [
              'Requisitos iniciales',
              'Financiamiento y hipoteca',
              'Documentación necesaria',
              'Volver al menú principal'
            ]);
          } else if (option === 'Otro tema') {
            this.displayMessage('Por favor, describe brevemente tu consulta.');
            this.showInput();
          }
          break;

        case 3:
          const propData = this.getPropertyData();
          if (!propData) return;

          if (this.responses[1] === 'Consultar detalles de la propiedad') {
            let response = '';
            let nextOptions = ['Sí, quiero más detalles', 'No, continuar'];
            if (option === 'Precio y condiciones') {
              response = `El precio es $${propData.price.toLocaleString()} con condiciones de pago flexibles. ¿Te interesa más información?`;
            } else if (option === 'Características (habitaciones, baños, etc.)') {
              response = `La propiedad tiene ${propData.rooms} hab., ${propData.bathrooms} baños y ${propData.area} m². ¿Necesitas más detalles?`;
            } else if (option === 'Ubicación y alrededores') {
              response = `Está ubicada en ${propData.location} cerca de parques y comercios. ¿Quieres saber más?`;
            } else if (option === 'Volver al menú principal') {
              this.currentStep = 1;
              this.openChat();
              return;
            }
            this.displayMessage(response, nextOptions);
          } else if (this.responses[1] === 'Solicitar una visita') {
            if (option === 'Hoy' || option === 'Mañana' || option === 'Esta semana') {
              this.displayMessage(`Genial, ¿a qué hora te vendría bien ${option.toLowerCase()}?`);
              this.responses[2] = option;
              this.currentStep = 3; // no avanzar aún
              this.showInput();
            } else if (option === 'Volver al menú principal') {
              this.currentStep = 1;
              this.openChat();
              return;
            }
          } else if (this.responses[1] === 'Preguntar por el proceso de compra') {
            let response = '';
            let nextOptions = ['Sí', 'No'];
            if (option === 'Requisitos iniciales') {
              response = 'Necesitarás identificación y un depósito inicial. ¿Te ayudo con algo más?';
            } else if (option === 'Financiamiento y hipoteca') {
              response = 'Ofrecemos opciones de financiamiento. ¿Quieres detalles?';
            } else if (option === 'Documentación necesaria') {
              response = 'Deberás presentar DNI y comprobantes de ingresos. ¿Más preguntas?';
            } else if (option === 'Volver al menú principal') {
              this.currentStep = 1;
              this.openChat();
              return;
            }
            this.displayMessage(response, nextOptions);
          }
          break;

        case 4:
          if (this.responses[1] === 'Consultar detalles de la propiedad') {
            if (option === 'No, continuar') {
              this.displayMessage('¡Gracias por tu consulta! Un agente se pondrá en contacto contigo pronto. ¿Deseas cerrar el chat?', ['Sí, cerrar', 'No, volver al menú principal']);
            } else if (option === 'Sí, quiero más detalles') {
              this.displayMessage('Por favor, especifica qué más te gustaría saber.');
              this.showInput();
            }
          } else if (this.responses[1] === 'Preguntar por el proceso de compra') {
            if (option === 'No') {
              this.displayMessage('¡Gracias por tu consulta! Un agente se pondrá en contacto contigo pronto. ¿Deseas cerrar el chat?', ['Sí, cerrar', 'No, volver al menú principal']);
            } else if (option === 'Sí') {
              this.displayMessage('Por favor, dime qué más necesitas.');
              this.showInput();
            }
          }
          break;

        case 5:
          if (option === 'No' || option === 'Sí, cerrar') {
            this.displayMessage('¡Chat cerrado! Un agente te contactará pronto.');
            setTimeout(() => this.closeChat(), 3000);
          } else if (option === 'No, volver al menú principal') {
            this.currentStep = 1;
            this.openChat();
          }
          break;
      }
    }

    sendMessage() {
      const input = document.getElementById('chatInput');
      const message = input.value.trim();
      if (!message) return;

      const messagesDiv = document.getElementById('chatMessages');
      const userMessageDiv = document.createElement('div');
      userMessageDiv.className = 'chatbot-message user';
      userMessageDiv.innerHTML = `<p>${message}</p>`;
      messagesDiv.appendChild(userMessageDiv);
      messagesDiv.scrollTop = messagesDiv.scrollHeight;

      input.value = '';
      document.getElementById('chatInputContainer').style.display = 'none';

      this.responses[this.currentStep] = message;

      if (this.responses[1] === 'Otro tema') {
        this.displayMessage(`Gracias por tu mensaje: "${message}". Lo revisaremos y te responderemos pronto. ¿Algo más?`, ['Sí', 'No']);
        this.currentStep = 4;
      } else if (this.responses[1] === 'Solicitar una visita' && this.currentStep === 3) {
        this.displayMessage(`Confirmado para ${this.responses[2]} a las ${message}. ¿Algo más en lo que pueda ayudarte?`, ['Sí', 'No']);
        this.currentStep = 4;
      } else {
        this.displayMessage(`Gracias por tu mensaje: "${message}". ¿Puedo ayudarte con algo más?`, ['Sí', 'No']);
        this.currentStep = 5;
      }
    }

    getPropertyData() {
      if (!this.selectedProperty) return null;
      const title = this.selectedProperty.querySelector('h3')?.textContent || 'Sin título';
      const location = this.selectedProperty.querySelector('p:nth-child(2)')?.textContent.replace('Ubicación: ', '') || 'Sin ubicación';
      const details = this.selectedProperty.querySelector('p:nth-child(3)')?.textContent.match(/(\d+) hab\. \| (\d+) baños \| (\d+) m²/);
      const price = parseInt(this.selectedProperty.querySelector('.details')?.textContent.replace('$', '').replace(',', '') || 0);
      return {
        title,
        location,
        rooms: details ? parseInt(details[1]) : 0,
        bathrooms: details ? parseInt(details[2]) : 0,
        area: details ? parseInt(details[3]) : 0,
        price
      };
    }
  }

  // Instanciar el chatbot
  window.chatbot = new Chatbot();
});
