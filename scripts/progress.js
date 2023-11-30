// JavaScript 코드
document.addEventListener('DOMContentLoaded', function () {
    // 매장을 선택했을 때
    document.getElementById('radio-1').addEventListener('change', function () {
        document.querySelector('.progress pre').textContent = '음식 1\n\n매장';
    });

    // 포장을 선택했을 때
    document.getElementById('radio-2').addEventListener('change', function () {
        document.querySelector('.progress pre').textContent = '음식 1\n\n포장';
    });
});