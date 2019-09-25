var personArray = [
    { id: 1, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 2, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 3, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 4, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 5, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 6, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 7, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/02.jpg', precent: '20%' },
    { id: 8, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/02.jpg', precent: '20%' },
    { id: 9, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/02.jpg', precent: '20%' },
    { id: 10, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/03.jpg', precent: '20%' },
    { id: 11, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/03.jpg', precent: '20%' },
    { id: 12, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/03.jpg', precent: '20%' },
    { id: 13, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/04.jpg', precent: '20%' },
    { id: 14, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/04.jpg', precent: '20%' },
    { id: 15, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/04.jpg', precent: '20%' },
    { id: 16, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/05.jpg', precent: '20%' },
    { id: 17, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/05.jpg', precent: '20%' },
    { id: 18, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/05.jpg', precent: '20%' },
    { id: 19, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/05.jpg', precent: '20%' },
    { id: 20, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 21, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 22, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 23, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 24, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 25, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 26, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 27, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 28, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 29, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 30, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 31, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 32, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/02.jpg', precent: '20%' },
    { id: 33, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/02.jpg', precent: '20%' },
    { id: 34, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/02.jpg', precent: '20%' },
    { id: 35, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/03.jpg', precent: '20%' },
    { id: 36, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/03.jpg', precent: '20%' },
    { id: 37, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/03.jpg', precent: '20%' },
    { id: 38, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/04.jpg', precent: '20%' },
    { id: 39, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/04.jpg', precent: '20%' },
    { id: 40, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/04.jpg', precent: '20%' },
    { id: 41, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/05.jpg', precent: '20%' },
    { id: 42, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/05.jpg', precent: '20%' },
    { id: 43, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/05.jpg', precent: '20%' },
    { id: 44, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/05.jpg', precent: '20%' },
    { id: 45, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 46, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 47, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 48, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 49, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 50, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 51, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 52, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 53, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 54, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 55, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 56, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 57, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/02.jpg', precent: '20%' },
    { id: 58, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/02.jpg', precent: '20%' },
    { id: 59, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/02.jpg', precent: '20%' },
    { id: 60, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/03.jpg', precent: '20%' },
    { id: 61, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/03.jpg', precent: '20%' },
    { id: 62, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/03.jpg', precent: '20%' },
    { id: 63, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/04.jpg', precent: '20%' },
    { id: 64, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/04.jpg', precent: '20%' },
    { id: 65, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/04.jpg', precent: '20%' },
    { id: 66, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/05.jpg', precent: '20%' },
    { id: 67, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/05.jpg', precent: '20%' },
    { id: 68, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/05.jpg', precent: '20%' },
    { id: 69, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/05.jpg', precent: '20%' },
    { id: 70, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 71, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 72, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 73, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 74, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 75, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 76, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 77, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 78, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 79, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 80, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 81, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 82, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/02.jpg', precent: '20%' },
    { id: 83, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/02.jpg', precent: '20%' },
    { id: 84, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/02.jpg', precent: '20%' },
    { id: 85, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/03.jpg', precent: '20%' },
    { id: 86, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/03.jpg', precent: '20%' },
    { id: 87, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/03.jpg', precent: '20%' },
    { id: 88, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/04.jpg', precent: '20%' },
    { id: 89, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/04.jpg', precent: '20%' },
    { id: 90, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/04.jpg', precent: '20%' },
    { id: 91, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/05.jpg', precent: '20%' },
    { id: 92, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/05.jpg', precent: '20%' },
    { id: 93, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/05.jpg', precent: '20%' },
    { id: 94, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/05.jpg', precent: '20%' },
    { id: 95, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 96, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 97, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 98, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 99, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 100, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 1, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 2, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 3, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 4, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 5, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 6, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 7, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/02.jpg', precent: '20%' },
    { id: 8, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/02.jpg', precent: '20%' },
    { id: 9, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/02.jpg', precent: '20%' },
    { id: 10, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/03.jpg', precent: '20%' },
    { id: 11, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/03.jpg', precent: '20%' },
    { id: 12, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/03.jpg', precent: '20%' },
    { id: 13, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/04.jpg', precent: '20%' },
    { id: 14, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/04.jpg', precent: '20%' },
    { id: 15, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/04.jpg', precent: '20%' },
    { id: 16, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/05.jpg', precent: '20%' },
    { id: 17, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/05.jpg', precent: '20%' },
    { id: 18, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/05.jpg', precent: '20%' },
    { id: 19, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/05.jpg', precent: '20%' },
    { id: 20, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 21, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 22, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 23, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 24, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 25, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 26, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 27, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 28, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 29, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 30, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 31, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 32, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/02.jpg', precent: '20%' },
    { id: 33, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/02.jpg', precent: '20%' },
    { id: 34, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/02.jpg', precent: '20%' },
    { id: 35, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/03.jpg', precent: '20%' },
    { id: 36, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/03.jpg', precent: '20%' },
    { id: 37, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/03.jpg', precent: '20%' },
    { id: 38, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/04.jpg', precent: '20%' },
    { id: 39, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/04.jpg', precent: '20%' },
    { id: 40, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/04.jpg', precent: '20%' },
    { id: 41, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/05.jpg', precent: '20%' },
    { id: 42, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/05.jpg', precent: '20%' },
    { id: 43, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/05.jpg', precent: '20%' },
    { id: 44, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/05.jpg', precent: '20%' },
    { id: 45, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 46, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 47, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 48, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 49, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 50, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 51, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 52, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 53, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 54, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 55, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 56, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 57, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/02.jpg', precent: '20%' },
    { id: 58, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/02.jpg', precent: '20%' },
    { id: 59, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/02.jpg', precent: '20%' },
    { id: 60, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/03.jpg', precent: '20%' },
    { id: 61, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/03.jpg', precent: '20%' },
    { id: 62, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/03.jpg', precent: '20%' },
    { id: 63, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/04.jpg', precent: '20%' },
    { id: 64, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/04.jpg', precent: '20%' },
    { id: 65, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/04.jpg', precent: '20%' },
    { id: 66, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/05.jpg', precent: '20%' },
    { id: 67, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/05.jpg', precent: '20%' },
    { id: 68, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/05.jpg', precent: '20%' },
    { id: 69, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/05.jpg', precent: '20%' },
    { id: 70, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 71, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 72, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 73, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 74, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 75, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 76, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 77, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 78, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 79, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 80, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 81, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/01.jpg', precent: '20%' },
    { id: 82, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/02.jpg', precent: '20%' },
    { id: 83, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/02.jpg', precent: '20%' },
    { id: 84, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/02.jpg', precent: '20%' },
    { id: 85, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/03.jpg', precent: '20%' },
    { id: 86, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/03.jpg', precent: '20%' },
    { id: 87, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/03.jpg', precent: '20%' },
    { id: 88, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/04.jpg', precent: '20%' },
    { id: 89, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/04.jpg', precent: '20%' },
    { id: 90, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/04.jpg', precent: '20%' },
    { id: 91, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/05.jpg', precent: '20%' },
    { id: 92, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/05.jpg', precent: '20%' },
    { id: 93, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/05.jpg', precent: '20%' },
    { id: 94, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/05.jpg', precent: '20%' },
    { id: 95, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 96, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 97, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 98, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 99, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
    { id: 100, name: '长沙路门店', sale: '销售额', value: '12500', img: './img/06.jpg', precent: '20%' },
]


// 定义回场动画
var param = 20
var style = document.styleSheets[0];
// style.deleteRule("9");

var table = new Array;
for (var i = 0; i < personArray.length; i++) {
    table[i] = new Object();
    if (i < personArray.length) {
        table[i].id = personArray[i].id;
        table[i].name = personArray[i].name;
        table[i].sale = personArray[i].sale;
        table[i].value = personArray[i].value;
        table[i].img = personArray[i].img;
        table[i].precent = personArray[i].precent;
    }
    table[i].p_x = i % 20 + 1;
    table[i].p_y = Math.floor(i / 20) + 1;
}

var camera, scene, renderer;
var controls;

var objects = [];
var targets = { table: [], sphere: [], helix: [], grid: [] };

var w = window.innerWidth;
init();

animate();

function init() {

    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 2700;

    scene = new THREE.Scene();

    // table
    var flag = false //定义一个开关
    var targetEle = []
    var elements = []
    var timer
    var backtime1
    var cameraTime
    var iIndex
    var goodwz
    var wz
    var time1, time2, time3
    for (var i = 0; i < table.length; i++) {

        var element = document.createElement('div');
        element.className = 'element';
        element.style.backgroundColor = 'rgba(0,127,127,' + (Math.random() * 0.5 + 0.25) + ')';
        element.setAttribute('index', table[i].id - 1)

        var id = document.createElement('div');
        id.className = 'id';
        id.textContent = table[i].id;
        element.appendChild(id);
        elements.push(element)
        var symbol = document.createElement('div');
        symbol.className = 'symbol';
        symbol.textContent = table[i].value;
        element.appendChild(symbol);

        var details = document.createElement('div');
        details.className = 'details';
        details.innerHTML = table[i].name;
        element.appendChild(details);

        var rise = document.createElement('div');
        rise.className = 'rise';
        rise.innerHTML = '同比增长率：<br>' + table[i].precent;
        element.appendChild(rise);

        var object = new THREE.CSS3DObject(element);
        object.position.x = Math.random() * 4000 - 2000;
        object.position.y = Math.random() * 4000 - 2000;
        object.position.z = Math.random() * 4000 - 2000;
        scene.add(object);

        objects.push(object);

        // 表格需要坐标进行排序的
        var object = new THREE.Object3D();
        object.position.x = (table[i].p_x * 140) - 1300;
        object.position.y = - (table[i].p_y * 160) + 900;
        targets.table.push(object)

        element.onclick = function (e) {
            clearTimeout(time1)
            clearTimeout(time2)
            clearTimeout(time3)
            wz = this.parentNode.style.transform
            // this.parentNode.style.transition='all 0.5s linear'
            for (var i = 0; i < wz.length; i++) {
                if (wz[i] == '-') {
                    iIndex = i
                }
            }
            goodwz = wz.substring(0, iIndex) + '-2700, 1) translate(' + w / 2 + 'px, 377px)'
            for (var x = 0; x < style.cssRules.length; x++) {
                rule = style.cssRules[x];
                if (rule.name == "move" && rule.type == CSSRule.KEYFRAMES_RULE) {
                    style.deleteRule(x)
                }
                if (rule.name == "move1" && rule.type == CSSRule.KEYFRAMES_RULE) {
                    style.deleteRule(x)
                }
            }
            clearInterval(cameraTime)
            // 暂停鼠标移动事件
            window.onmousemove = ''
            clearTimeout(timer);
            // 暂停
            clearTimeout(backtime1);
            // 下面四个按钮禁止点击
            document.getElementById('table').disabled = true
            document.getElementById('sphere').disabled = true
            document.getElementById('helix').disabled = true
            document.getElementById('grid').disabled = true
            var dom = this
            dom.parentNode.style.transition = 'all 1s ease'
            dom.parentNode.style.transform = 'translateZ(1035.8px) matrix3d(1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, -2700, 1) translate(' + w / 2 + 'px, 377px)'

            // 禁止滚动
            controls.minDistance = 2700;
            controls.maxDistance = 2700;

            clearInterval(cameraTime)
            // 1.暂停动画
            cancelAnimationFrame(animateID)
            clearInterval(timeID)

            // window.onmousemove = ''
            if (targetEle.length != 0) {
                targetEle[0].ele.parentNode.style.transform = 'translateZ(1035.8px) matrix3d(1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, -2700, 1) translate(' + w / 2 + 'px, 377px)'
                // camera.position.z = 2700;
                targetEle[0].ele.innerHTML = ''
                targetEle[0].ele.style.width = '100px'
                targetEle[0].ele.style.height = '140px'
                targetEle[0].ele.style.backgroundColor = 'rgba(0,127,127,' + (Math.random() * 0.5 + 0.25) + ')'
                targetEle[0].ele.style.boxShadow = '0px 0px 12px rgba(0, 255, 255, 0.5)'
                targetEle[0].ele.style.transform = targetEle[0].str
                var length2 = targetEle[0].childArr.length
                for (var i = 0; i < length2; i++) {
                    targetEle[0].ele.appendChild(targetEle[0].childArr[i])
                }
                // 清除这个盒子的transition值
                // backtime1 = setTimeout(function () {
                targetEle[0].ele.style.transition = 'none'
                // }, 1000)

                // 添加回去的动画
                style.insertRule("@keyframes move1{from{ transform:translate(-50%, -50%) matrix3d(1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 1500, 1); }to{ transform:" + targetEle[0].str + " ;}}", style.cssRules.length)
                targetEle[0].ele.style.animation = 'move1 0.5s linear'
                setTimeout(function () {
                    targetEle[0].ele.style.animation = 'none'
                    targetEle.splice(0, 1)
                }, 500)

            }
            // 判断是否已经展示了一个盒子
            // 4.1每次记录点击的盒子的index值
            var ele = dom
            // 4.2记录这个盒子的3d位置
            var str = dom.style.transform
            style.insertRule("@keyframes move{from{ transform:translate(-50%, -50%) matrix3d(1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 1500, 1); }to{ transform:" + str + " ;}}", style.cssRules.length)
            var index = dom.getAttribute('index')

            // 2.设置点击的盒子的3d变化
            // 改变点击盒子的样式
            dom.style.transition = 'all 1s ease'
            dom.style.width = '600px'
            dom.style.height = '300px'
            dom.style.position = 'fixed';
            dom.style.left = '0px'
            dom.style.top = '0px'
            dom.style.transformStyle = 'preserve-3d'
            dom.style.transform = 'translate(-50%, -50%) matrix3d(1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 1500, 1)'
            dom.style.backgroundColor = 'rgba(0,0,0,.9)'
            dom.style.boxShadow = '0px 0px 12px #fff'
            dom.style.zIndex = '999'
            var that = dom;
            // 展示屏
            // 1.把原本的元素添加进一个数组
            var childArr = []
            var length = dom.children.length
            for (var i = 0; i < length; i++) {
                childArr.push(dom.children[0])
                // 2.删除原本的元素
                dom.removeChild(dom.children[0])
            }
            // 3.添加新的样式
            // 3.1店名
            var title = document.createElement('div');
            title.className = 'title';
            title.innerHTML = '<span>' + table[index].name + '</span>';
            dom.appendChild(title);
            // 3.1左右两个按钮
            var left = document.createElement('div');
            left.className = 'left';
            left.textContent = '<';
            dom.appendChild(left);
            var right = document.createElement('div');
            right.className = 'right';
            right.textContent = '>';
            dom.appendChild(right);
            // 左右点击，切换排名
            left.onclick = function (e) {
                dom.parentNode.style.transform = goodwz
                e.stopPropagation()
                var num2 = index - 1
                if (num2 == -1) {
                    num2 = elements.length - 1;
                }
                window.onmousemove = ''
                clearTimeout(timer);
                elements[num2].click()
            }
            right.onclick = function (e) {
                dom.parentNode.style.transform = goodwz
                e.stopPropagation()
                var num1 = parseInt(index) + 1
                if (num1 == elements.length) {
                    num1 = 0
                }
                window.onmousemove = ''
                clearTimeout(timer);
                elements[num1].click()
            }
            // 3.3添加图片
            var imgdiv = document.createElement('div');
            imgdiv.className = 'imgdiv';
            dom.appendChild(imgdiv);
            // 3.4排名
            var pm = document.createElement('div');
            pm.className = 'pm';
            pm.innerHTML = '<span>本季度排名：' + table[index].id + '</span>';
            dom.appendChild(pm);
            // 3.5销售额
            var money = document.createElement('div');
            money.className = 'money';
            money.innerHTML = '<span>销售总额：' + table[index].value + '</span>';
            dom.appendChild(money);
            // 3.6同比
            var precent = document.createElement('div');
            precent.className = 'precent';
            precent.innerHTML = '<span>同比增长' + table[index].precent + '</span>';
            dom.appendChild(precent);
            // 3.7差掉按钮
            var close = document.createElement('div');
            close.className = 'close';
            close.textContent = '×';
            dom.appendChild(close);
            var bottom = document.createElement('div');
            bottom.className = 'bottom';
            dom.appendChild(bottom);
            // 点击×号，关闭展示窗，等待两秒继续动画
            close.onclick = function (e) {
                ele.style.animation = 'move 0.5s linear'
                document.getElementById('table').disabled = false
                document.getElementById('sphere').disabled = false
                document.getElementById('helix').disabled = false
                document.getElementById('grid').disabled = false
                clearInterval(cameraTime)
                time1 = setTimeout(function () {
                    dom.parentNode.style.transform = goodwz
                }, 1000)
                // 开启滚轮
                time2 = setTimeout(function () {
                    dom.parentNode.style.transition = 'none'
                    animate()
                    ele.style.animation = 'none'
                }, 2000)
                time3 = setTimeout(function () {
                    controls.minDistance = 500;
                    controls.maxDistance = 6000;
                }, 3000)
                e.stopPropagation()
                ele.innerHTML = ''
                ele.style.width = '100px'
                ele.style.height = '140px'
                ele.style.backgroundColor = 'rgba(0,127,127,' + (Math.random() * 0.5 + 0.25) + ')'
                ele.style.boxShadow = '0px 0px 12px rgba(0, 255, 255, 0.5)'
                ele.style.transform = str
                var length3 = childArr.length
                for (var i = 0; i < length3; i++) {
                    ele.appendChild(childArr[i])
                }
                targetEle.splice(0, 1)
                ele.style.transition = 'none'
                window.onmousemove = ''
                clearTimeout(timer);
                timeID = setInterval(function () {
                    ini = ini >= 3 ? 0 : ini;
                    ++ini;
                    switch (ini) {
                        case 1:
                            transform(targets.sphere, 1000);
                            break;
                        case 2:
                            transform(targets.helix, 1000);
                            break;
                        case 3:
                            transform(targets.grid, 1000);
                            break;
                    }
                }, 12000);
            }

            targetEle.push({
                ele: ele,
                str: str,
                index: index,
                childArr: childArr
            });

            // 最后一步，设定一个事件，鼠标五秒不动,展示窗收回，动画开始

            window.onmousemove = function () {
                clearTimeout(timer);
                timer = setTimeout(function () {
                    document.getElementById('table').disabled = false
                    document.getElementById('sphere').disabled = false
                    document.getElementById('helix').disabled = false
                    document.getElementById('grid').disabled = false
                    ele.style.animation = 'move 0.5s linear'
                    clearInterval(cameraTime)
                    // 开启滚轮
                    time1 = setTimeout(function () {
                        dom.parentNode.style.transform = goodwz
                    }, 1000)
                    time2 = setTimeout(function () {
                        dom.parentNode.style.transition = 'none'
                        animate()
                        ele.style.animation = 'none'
                    }, 2000)
                    time3 = setTimeout(function () {
                        controls.minDistance = 500;
                        controls.maxDistance = 6000;
                    }, 3000)
                    window.onmousemove = ''
                    clearTimeout(timer)
                    ele.innerHTML = ''
                    ele.style.width = '100px'
                    ele.style.height = '140px'
                    ele.style.backgroundColor = 'rgba(0,127,127,' + (Math.random() * 0.5 + 0.25) + ')'
                    ele.style.boxShadow = '0px 0px 12px rgba(0, 255, 255, 0.5)'
                    ele.style.transform = str
                    var length3 = childArr.length
                    for (var i = 0; i < length3; i++) {
                        ele.appendChild(childArr[i])
                    }
                    targetEle.splice(0, 1)
                    ele.style.transition = 'none'
                    timeID = setInterval(function () {
                        ini = ini >= 3 ? 0 : ini;
                        ++ini;
                        switch (ini) {
                            case 1:
                                transform(targets.sphere, 1000);
                                break;
                            case 2:
                                transform(targets.helix, 1000);
                                break;
                            case 3:
                                transform(targets.grid, 1000);
                                break;
                        }
                    }, 12000);
                }, 5000);
            }
        }







    }

    // sphere

    var vector = new THREE.Vector3();
    var spherical = new THREE.Spherical();

    for (var i = 0, l = objects.length; i < l; i++) {

        var phi = Math.acos(-1 + (2 * i) / l);
        var theta = Math.sqrt(l * Math.PI) * phi;

        var object = new THREE.Object3D();

        spherical.set(720, phi, theta);

        object.position.setFromSpherical(spherical);

        vector.copy(object.position).multiplyScalar(2);

        object.lookAt(vector);

        targets.sphere.push(object);

    }

    // helix

    var vector = new THREE.Vector3();
    var cylindrical = new THREE.Cylindrical();

    for (var i = 0, l = objects.length; i < l; i++) {

        var theta = i * 0.175 + Math.PI / 18;
        var y = - (i * 5) + 550;

        var object = new THREE.Object3D();

        // 参数一 圈的大小 参数二 左右间距 参数三 上下间距
        cylindrical.set(700, theta, y);

        object.position.setFromCylindrical(cylindrical);

        vector.x = object.position.x * 2;
        vector.y = object.position.y;
        vector.z = object.position.z * 2;

        object.lookAt(vector);

        targets.helix.push(object);

    }

    // grid

    for (var i = 0; i < objects.length; i++) {

        var object = new THREE.Object3D();

        object.position.x = ((i % 4) * 400) - 600; // 400 图片的左右间距  800 x轴中心店
        object.position.y = (- (Math.floor(i / 5) % 5) * 300) + 600;  // 500 y轴中心店
        object.position.z = (Math.floor(i / 25)) * 200 - 800;// 300调整 片间距 800z轴中心店

        targets.grid.push(object);

    }

    //渲染
    renderer = new THREE.CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = 'absolute';
    document.getElementById('container').appendChild(renderer.domElement);

    // 鼠标控制
    controls = new THREE.TrackballControls(camera, renderer.domElement);
    controls.panSpeed = 0;
    controls.rotateSpeed = 5;
    controls.minDistance = 500;
    controls.maxDistance = 6000;
    controls.addEventListener('change', render);

    // 自动更换
    var ini = 0;
    var timeID = setInterval(function () {
        ini = ini >= 3 ? 0 : ini;
        ++ini;
        switch (ini) {
            case 1:
                transform(targets.sphere, 1000);
                break;
            case 2:
                transform(targets.helix, 1000);
                break;
            case 3:
                transform(targets.grid, 1000);
                break;
        }
    }, 12000);

    var button = document.getElementById('table');
    button.addEventListener('click', function (event) {
        transform(targets.table, 1000);
    }, false);

    var button = document.getElementById('sphere');
    button.addEventListener('click', function (event) {
        transform(targets.sphere, 2000);

    }, false);

    var button = document.getElementById('helix');
    button.addEventListener('click', function (event) {
        transform(targets.helix, 2000);
    }, false);

    var button = document.getElementById('grid');
    button.addEventListener('click', function (event) {
        transform(targets.grid, 2000);
    }, false);

    // var button = document.getElementById('refesh');
    // button.addEventListener('click', function (event) {
    //     cancelAnimationFrame(timeID)
    //     $('#container')[0].firstChild.firstChild.style.transform = 'translateZ(1035.8px) matrix3d(1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, -2700, 1) translate(583.5px, 377px)'
    //     // animate()
    // }, false);

    transform(targets.table, 2000);

    //

    window.addEventListener('resize', onWindowResize, false);

}


function transform(targets, duration) {

    TWEEN.removeAll();

    for (var i = 0; i < objects.length; i++) {

        var object = objects[i];
        var target = targets[i];

        new TWEEN.Tween(object.position)
            .to({ x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration)
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();

        new TWEEN.Tween(object.rotation)
            .to({ x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration)
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();

    }

    new TWEEN.Tween(this)
        .to({}, duration * 2)
        .onUpdate(render)
        .start();

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

    render();

}

var animateID;
function animate() {

    // 让场景通过x轴或者y轴旋转  & z
    // scene.rotation.x += 0.011;
    scene.rotation.y += 0.004;

    animateID = requestAnimationFrame(animate);

    TWEEN.update();

    controls.update();

    // 渲染循环
    render();

}

function render() {

    renderer.render(scene, camera);

}
