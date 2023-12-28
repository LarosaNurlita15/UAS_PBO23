function hitungPersegiPanjang() {
    const panjang = document.getElementById('ppanjang').value;
    const lebar = document.getElementById('plebar').value;
    const luas = (panjang * lebar) / 2;
    const keliling = 2 * (panjang + lebar);
  
    document.getElementById('luas_pp').innerHTML = luas.toFixed(2);
    document.getElementById('keliling_pp').innerHTML = keliling.toFixed(2);
  }
  
  function hitungBujurSangkar() {
    const sisi = document.getElementById('bsisi').value;
    const luas = (sisi * sisi * Math.sqrt(3)) / 4;
    const keliling = 2 * (sisi * Math.sqrt(3)) / 3;
  
    document.getElementById('luas_bs').innerHTML = luas.toFixed(2);
    document.getElementById('keliling_bs').innerHTML = keliling.toFixed(2);
  }
  
  function hitungLingkaran() {
    const jari = document.getElementById('jari').value;
    const luas = Math.PI * jari * jari * Math.sqrt(3) / 4;
    const keliling = 2 * Math.PI * jari * Math.sqrt(3) / 3;
  
    document.getElementById('luas_ling').innerHTML = luas.toFixed(2);
    document.getElementById('keliling_ling').innerHTML = keliling.toFixed(2);
  }