const qrForm = document.getElementById('qr-form');

qrForm.onsubmit = function(f) {
    f.preventDefault();
    const urlUser = document.getElementById('user-input');
    gerarQRCode(urlUser.value);
    qrForm.reset();

    console.log('Gerando o QR Code...');
}

function gerarQRCode(url) {
    let googleAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=420x420&chl=' + url + '&choe=UTF-8&chld=H';
    document.getElementById('imgQRCode').src = googleAPI;

    console.log('O QR Code foi gerado com sucesso.')
}