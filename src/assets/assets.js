import logo from "./logo.png"
import cart_icon from './cart_icon.png'
import search_icon from './search_icon.png'
import profile_icon from './profile_icon.png'
import menu_icon from './menu_icon.png'
import cross_icon from './cross_icon.png'
import close_icon from './close_icon.png'
import p_img1_1 from './p_img1_1.webp'
import p_img1_2 from './p_img1_2.jpg'
import p_img2_1 from './p_img2_1.png'
import p_img2_2 from './p_img2_2.png'
import p_img2_3 from './p_img2_3.png'
import p_img3_1 from './p_img3_1.jpg'
import p_img3_2 from './p_img3_2.jpg'
import p_img3_3 from './p_img3_3.jpg'
import p_img3_4 from './p_img_3_4.jpg'
import p_img4_1 from './p_img4_1.jpg'
import p_img4_2 from './p_img4_2.webp'
import p_img4_3 from './p_img4_3.webp'
import p_img5_1 from './p_img5_1.jpg'
import p_img5_2 from './p_img5_2.jpg'
import p_img5_3 from './p_img5_3.jpg'




import {
    FaAngleUp,
    FaAngleDown,
    FaInstagram,
    FaYoutube
} from "react-icons/fa6";
import {
    FaFacebookSquare,
    FaCcPaypal,
    FaCcVisa,
    FaCcMastercard
} from "react-icons/fa";
import {
    PiWatchThin,
    PiNetworkLight,
    PiMonitor,
    PiDeviceTabletCamera
} from "react-icons/pi";
import {
    CiHeadphones,
    CiMobile2,
    CiCamera,
    CiLocationOn,
    CiPhone,
    CiMail,
    CiSearch,
    CiUser,
    CiSquareQuestion,
    CiTwitter,
} from "react-icons/ci";
import {
    TbBrandAndroid
} from "react-icons/tb";
import {
    SlGameController
} from "react-icons/sl";
import bgblur from './info.png'
import {
    SiAmericanexpress
} from "react-icons/si";

export const assets = {
    FaCcPaypal,
    FaCcVisa,
    FaCcMastercard,
    SiAmericanexpress,
    logo,
    cart_icon,
    search_icon,
    profile_icon,
    menu_icon,
    cross_icon,
    close_icon,
    FaAngleUp,
    FaAngleDown,
    CiMobile2,
    PiDeviceTabletCamera,
    PiWatchThin,
    CiHeadphones,
    CiCamera,
    SlGameController,
    PiNetworkLight,
    TbBrandAndroid,
    PiMonitor,
    bgblur,
    CiLocationOn,
    CiPhone,
    CiMail,
    CiSearch,
    CiUser,
    CiSquareQuestion,
    FaFacebookSquare,
    FaInstagram,
    FaYoutube,
    CiTwitter

}

export const products = [
    {
        _id: "aaaa",
        name: "iphone 14 Pro max",
        description: "ádasdasd",
        image: [p_img1_1, p_img1_2],
        manufacturer: "apple", // hãng sản xuất
        series: "pro",
        releaseDate: "20/3/2023", // ngày sản xuất
        price: "300000000",
        OS: "ios 17", // hệ điều hành,
        screenSize: "6.1 inches", //kích thước màn hình,
        screenType: "AMOLED", //  loại màn hình
        cpu: "Apple A17 Bionic", // vi xử lí
        ram: "12GB", //
        rom: "256GB", // bộ nhớ trong
        batteryCapacity: "5000mAh", // dung lượng pin
        mainCamera: "108MP", //camera chính
        frontCamera: "32MP", //camera trước
        sim: "2sim", //
        mobileNetwork: "5G", //
        securityFeatures: "Fingerprint, face recognition, PIN code", // bảo mật
        waterResistance: "IP68", // khả năng chống nước…
        connectivity: " Wi-FI, Bluetooth, NFC, GPS, USB-C", // Khả năng kết nối
        speakers: "Stereo, mono, Dolby Atmos, etc.", // Loa
        ports: "3.5mm headphone jack", // Cổng kết nối
        specialFeatures: "Wireless reverse charging, AR support, under-display fingerprint sensor, etc", // Tính năng đặt biết
        colors: "[black,white]",
        weight: "180g, 220g", // trọng lượng
        dimensions: "length: 160.7 mm, width: 77.6 mm, thickness: 7.85 mm, ",
        accessoriesIncluded: "Charging cable, charger, headphones, phone case", // phụ kiện kèm theo
        numberOfReviews: "1,8k", // tổng số đánh giá
        rating: "4.5/5", // đánh giá
        stockQuantify: "1k", // số lượng còn lại
        productCondition: "New: 400, Used: 300, Refurbished: 300", // tình trạng sản phẩm
        warranty: "12 months", // bảo hành
    },
    {
        _id: "aaab",
        name: "iphone 15 plus",
        description: "ssssseeeee",
        image: [p_img2_1, p_img2_2, p_img2_3],
        manufacturer: "apple", // hãng sản xuất
        series: "plus",
        releaseDate: "20/3/2024", // ngày sản xuất
        price: "32000000",
        OS: "ios 18", // hệ điều hành,
        screenSize: "6.1 inches", //kích thước màn hình,
        screenType: "AMOLED", //  loại màn hình
        cpu: "Apple A18 Bionic", // vi xử lí
        ram: "12GB", //
        rom: "512GB", // bộ nhớ trong
        batteryCapacity: "6000mAh", // dung lượng pin
        mainCamera: "108MP", //camera chính
        frontCamera: "32MP", //camera trước
        sim: "2sim", //
        mobileNetwork: "10G", //
        securityFeatures: "Fingerprint, face recognition, PIN code", // bảo mật
        waterResistance: "IP68", // khả năng chống nước…
        connectivity: " Wi-FI, Bluetooth, NFC, GPS, USB-C", // Khả năng kết nối
        speakers: "Stereo, mono, Dolby Atmos, etc.", // Loa
        ports: "3.5mm headphone jack", // Cổng kết nối
        specialFeatures: "Wireless reverse charging, AR support, under-display fingerprint sensor, etc", // Tính năng đặt biết
        colors: "[black,white]",
        weight: "180g, 220g", // trọng lượng
        dimensions: "length: 160.7 mm, width: 77.6 mm, thickness: 7.85 mm, ",
        accessoriesIncluded: "Charging cable, charger, headphones, phone case", // phụ kiện kèm theo
        numberOfReviews: " 1,9k", // tổng số đánh giá
        rating: "4.5/5", // đánh giá
        stockQuantify: "1k", // số lượng còn lại
        productCondition: "New: 400, Used: 300, Refurbished: 300", // tình trạng sản phẩm
        warranty: "12 months", // bảo hành


    },
    {
        _id: "aaac",
        name: "iphone 16 Pro max",
        description: "ádasdasd",
        image: [p_img3_1, p_img3_2, p_img3_3, p_img3_4],
        manufacturer: "apple", // hãng sản xuất
        series: "max",
        releaseDate: "10/4/2023", // ngày sản xuất
        price: "360000000",
        OS: "ios 19", // hệ điều hành,
        screenSize: "7.1 inches", //kích thước màn hình,
        screenType: "AMOLED", //  loại màn hình
        cpu: "Apple A19 Bionic", // vi xử lí
        ram: "16GB", //
        rom: "1TB", // bộ nhớ trong
        batteryCapacity: "7000mAh", // dung lượng pin
        mainCamera: "108MP", //camera chính
        frontCamera: "32MP", //camera trước
        sim: "2sim", //
        mobileNetwork: "5G", //
        securityFeatures: "Fingerprint, face recognition, PIN code", // bảo mật
        waterResistance: "IP68", // khả năng chống nước…
        connectivity: " Wi-FI, Bluetooth, NFC, GPS, USB-C", // Khả năng kết nối
        speakers: "Stereo, mono, Dolby Atmos, etc.", // Loa
        ports: "USB Type C", // Cổng kết nối
        specialFeatures: "Wireless reverse charging, AR support, under-display fingerprint sensor, etc", // Tính năng đặt biết
        colors: "[white,black]",
        weight: "180g, 220g", // trọng lượng
        dimensions: "length: 160.7 mm, width: 77.6 mm, thickness: 7.85 mm, ",
        accessoriesIncluded: "Charging cable, charger, headphones, phone case", // phụ kiện kèm theo
        numberOfReviews: "1,8k", // tổng số đánh giá
        rating: "4.5/5", // đánh giá
        stockQuantify: "1k", // số lượng còn lại
        productCondition: "New: 400, Used: 300, Refurbished: 300", // tình trạng sản phẩm
        warranty: "12 months", // bảo hành

    },

    {
        _id: "aaad",
        name: "iphone 10 plus",
        description: "ádasdasd",
        image: [p_img4_1, p_img4_2, p_img4_3],
        manufacturer: "apple", // hãng sản xuất
        series: "plus",
        releaseDate: "20/3/2023", // ngày sản xuất
        price: "300000000",
        OS: "ios 13", // hệ điều hành,
        screenSize: "6.1 inches", //kích thước màn hình,
        screenType: "AMOLED", //  loại màn hình
        cpu: "Apple A11 Bionic", // vi xử lí
        ram: "12GB", //
        rom: "125GB", // bộ nhớ trong
        batteryCapacity: "5000mAh", // dung lượng pin
        mainCamera: "108MP", //camera chính
        frontCamera: "32MP", //camera trước
        sim: "2sim", //
        mobileNetwork: "5G", //
        securityFeatures: "Fingerprint, face recognition, PIN code", // bảo mật
        waterResistance: "IP68", // khả năng chống nước…
        connectivity: " Wi-FI, Bluetooth, NFC, GPS, USB-C", // Khả năng kết nối
        speakers: "Stereo, mono, Dolby Atmos, etc.", // Loa
        ports: "3.5mm headphone jack", // Cổng kết nối
        specialFeatures: "Wireless reverse charging, AR support, under-display fingerprint sensor, etc", // Tính năng đặt biết
        colors: "[black, yellow]",
        weight: "180g, 220g", // trọng lượng
        dimensions: "length: 160.7 mm, width: 77.6 mm, thickness: 7.85 mm, ",
        accessoriesIncluded: "Charging cable, charger, headphones, phone case", // phụ kiện kèm theo
        numberOfReviews: "1,8k", // tổng số đánh giá
        rating: "4.5/5", // đánh giá
        stockQuantify: "1k", // số lượng còn lại
        productCondition: "New: 400, Used: 300, Refurbished: 300", // tình trạng sản phẩm
        warranty: "12 months", // bảo hành
    },
    {
        _id: "aaaf",
        name: "iphone 6 plus",
        description: "ádasdasd",
        image: [p_img5_1, p_img5_2, p_img5_3],
        manufacturer: "apple", // hãng sản xuất
        series: "plus",
        releaseDate: "20/3/2023", // ngày sản xuất
        price: "12000000",
        OS: "ios 12", // hệ điều hành,
        screenSize: "4.1 inches", //kích thước màn hình,
        screenType: "AMOLED", //  loại màn hình
        cpu: "Apple A11 Bionic", // vi xử lí
        ram: "12GB", //
        rom: "64GB", // bộ nhớ trong
        batteryCapacity: "5000mAh", // dung lượng pin
        mainCamera: "108MP", //camera chính
        frontCamera: "32MP", //camera trước
        sim: "2sim", //
        mobileNetwork: "5G", //
        securityFeatures: "Fingerprint, face recognition, PIN code", // bảo mật
        waterResistance: "IP68", // khả năng chống nước…
        connectivity: " Wi-FI, Bluetooth, NFC, GPS, USB-C", // Khả năng kết nối
        speakers: "Stereo, mono, Dolby Atmos, etc.", // Loa
        ports: "3.5mm headphone jack", // Cổng kết nối
        specialFeatures: "Wireless reverse charging, AR support, under-display fingerprint sensor, etc", // Tính năng đặt biết
        colors: "[black, yellow]",
        weight: "180g, 220g", // trọng lượng
        dimensions: "length: 160.7 mm, width: 77.6 mm, thickness: 7.85 mm, ",
        accessoriesIncluded: "Charging cable, charger, headphones, phone case", // phụ kiện kèm theo
        numberOfReviews: " 1,8k", // tổng số đánh giá
        rating: "4.5/5", // đánh giá
        stockQuantify: "1k", // số lượng còn lại
        productCondition: "New: 400, Used: 300, Refurbished: 300", // tình trạng sản phẩm
        warranty: "12 months" // bảo hành

    }

]