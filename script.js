// 1. Xử lý logic chuyển đổi Tab (Length / Weight / Temperature)
const tabs = document.querySelectorAll('nav ul li a');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Xóa class active ở các tab cũ
        tabs.forEach(t => t.classList.remove('active-tab'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Kích hoạt tab mới
        tab.classList.add('active-tab');
        const targetId = tab.getAttribute('href').substring(1);
        document.getElementById(targetId).classList.add('active');
    });
});

// Set active mặc định cho tab đầu tiên khi tải trang
tabs[0].classList.add('active-tab');

// 2. Định nghĩa hệ số quy đổi (Quy hết về 1 đơn vị chuẩn)
const lengthRates = { mm: 0.001, cm: 0.01, m: 1, km: 1000, inch: 0.0254, ft: 0.3048, yd: 0.9144, mile: 1609.34 };
const weightRates = { mg: 0.001, g: 1, kg: 1000, oz: 28.3495, lb: 453.592 };

// Các phần tử hiển thị kết quả
const resultContainer = document.getElementById('resultContainer');
const emptyResultText = document.getElementById('emptyResultText');
const resultText = document.getElementById('resultText');

function showResult(text) {
    emptyResultText.style.display = 'none';
    resultContainer.style.display = 'block';
    resultText.innerText = text;
}

// Lắng nghe sự kiện submit của Form Length
document.getElementById('lengthForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const val = parseFloat(document.getElementById('lengthInput').value);
    const from = document.getElementById('lengthFrom').value;
    const to = document.getElementById('lengthTo').value;
    
    // Đổi sang mét rồi đổi sang đơn vị đích
    const valueInMeters = val * lengthRates[from];
    const finalValue = valueInMeters / lengthRates[to];
    
    showResult(`${val} ${from} = ${finalValue.toFixed(2).replace(/\.00$/, '')} ${to}`);
});

// Lắng nghe sự kiện submit của Form Weight
document.getElementById('weightForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const val = parseFloat(document.getElementById('weightInput').value);
    const from = document.getElementById('weightFrom').value;
    const to = document.getElementById('weightTo').value;
    
    // Đổi sang gram rồi đổi sang đơn vị đích
    const valueInGrams = val * weightRates[from];
    const finalValue = valueInGrams / weightRates[to];
    
    showResult(`${val} ${from} = ${finalValue.toFixed(2).replace(/\.00$/, '')} ${to}`);
});

// Lắng nghe sự kiện submit của Form Temperature
document.getElementById('temperatureForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const val = parseFloat(document.getElementById('temperatureInput').value);
    const from = document.getElementById('temperatureFrom').value;
    const to = document.getElementById('temperatureTo').value;
    
    let tempInCelsius;
    // Bước đầu: Đổi về Celsius
    if (from === 'C') tempInCelsius = val;
    else if (from === 'F') tempInCelsius = (val - 32) * 5 / 9;
    else if (from === 'K') tempInCelsius = val - 273.15;
    
    let finalValue;
    // Bước hai: Từ Celsius đổi sang đơn vị đích
    if (to === 'C') finalValue = tempInCelsius;
    else if (to === 'F') finalValue = (tempInCelsius * 9 / 5) + 32;
    else if (to === 'K') finalValue = tempInCelsius + 273.15;
    
    showResult(`${val} °${from} = ${finalValue.toFixed(2).replace(/\.00$/, '')} °${to}`);
});

// Xử lý nút Reset
document.getElementById('btnReset').addEventListener('click', () => {
    document.getElementById('lengthForm').reset();
    document.getElementById('weightForm').reset();
    document.getElementById('temperatureForm').reset();
    resultContainer.style.display = 'none';
    emptyResultText.style.display = 'block';
});