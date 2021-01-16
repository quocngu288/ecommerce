const bcrypt = require('bcryptjs')
const data = {
    users: [
        {
            name: 'Nguyen Chu Quoc Ngu',
            email: 'quocngu4616@gmail.com',
            password: bcrypt.hashSync('quocngu', 8),
            isAdmin: false
        },
        {
            name: 'Nguyen Thi Lan Chi',
            email: 'lanchi@gmail.com',
            password: bcrypt.hashSync('lanchi', 8),
            isAdmin: true
        }
    ],
    products: [
        {

            name: 'Heavy Waites',
            price: 2000,
            category: 'male',
            description: 'Maṅgala là nơi tin cậy để mua sắm các sản phẩm cao cấp, đồng hồ, trang sức, túi xách, nước hoa, kính mát... Và quý khách luôn có giá giảm cực tốt.',
            numReview: 10,
            image: 'images/product-5.webp',
            rating: 2,
            brand: 'korea',
            countInStock: 2
        },
        {

            name: 'Royal Watch',
            price: 4000,
            category: 'male',
            description: 'Đồng hồ Casio MTP-1094Q-7B1, Mô tả sản phẩm, Chiếc đồng hồ Casio MTP-1094Q-7B1 với kiểu dáng trang nhã phù hợp với những bạn nam yêu thích phong ...',
            numReview: 10,
            image: 'images/product-4.webp',
            rating: 1,
            brand: 'korea',
            countInStock: 20
        },
        {

            name: 'Diamond Waites',
            price: 2500,
            category: 'female',
            description: 'Đồng hồ nam DW 01050363687 dây da kính sapphire chống xước chống nước 30m thương hiệu đến từ thụy điển, đồng hồ hồ nam phong cách trẻ trang năng động ...',
            numReview: 10,
            image: 'images/product-3.webp',
            rating: 2,
            brand: 'korea',
            countInStock: 10
        },
        {

            name: 'Loki star',
            price: 1000,
            category: 'male',
            description: 'sdaaaaaaaaasdsa',
            numReview: 10,
            image: 'images/product-6.webp',
            rating: 4.5,
            brand: 'china',
            countInStock: 10
        },
        {

            name: 'OPiachi Watch',
            price: 6000,
            category: 'male',
            description: 'Đồng hồ dây vải hiện đang là mẫu đồng hồ cực hot đối với các bạn nam đầu năm 2019 như hiện tại. Việc sở hữu cho mình 1 chiếc đồng hồ dây vải cực kì ...',
            numReview: 10,
            image: 'images/product-9.webp',
            rating: 4,
            brand: 'china',
            countInStock: 10
        },
        {

            name: 'Liliana',
            price: 1000,
            category: 'male',
            description: 'Maṅgala là nơi tin cậy để mua sắm các sản phẩm cao cấp, đồng hồ, trang sức, túi xách, nước hoa, kính mát... Và quý khách luôn có giá giảm cực tốt.',
            numReview: 10,
            image: 'images/product-8.webp',
            rating: 4.5,
            brand: 'vietnam',
            countInStock: 8
        },
        {

            name: 'Saigon Watch',
            price: 1400,
            category: 'female',
            description: 'Đồng hồ nam DW 01050363687 dây da kính sapphire chống xước chống nước 30m thương hiệu đến từ thụy điển, đồng hồ hồ nam phong cách trẻ trang năng động ...',
            numReview: 10,
            image: 'images/product-9.webp',
            rating: 3,
            brand: 'vietnam',
            countInStock: 6
        },
        {

            name: 'Saka-Pachi',
            price: 4000,
            category: 'male',
            description: 'Đồng hồ dây vải hiện đang là mẫu đồng hồ cực hot đối với các bạn nam đầu năm 2019 như hiện tại. Việc sở hữu cho mình 1 chiếc đồng hồ dây vải cực kì ...',
            numReview: 10,
            image: 'images/product-2.webp',
            rating: 2,
            brand: 'korea',
            countInStock: 9
        },
        {

            name: 'new sky',
            price: 3000,
            category: 'male',
            description: 'Đồng hồ dây vải hiện đang là mẫu đồng hồ cực hot đối với các bạn nam đầu năm 2019 như hiện tại. Việc sở hữu cho mình 1 chiếc đồng hồ dây vải cực kì ...',
            numReview: 10,
            image: 'images/product-4.webp',
            rating: 2,
            brand: 'vietnam',
            countInStock: 9
        },
    ]
}
module.exports = data
