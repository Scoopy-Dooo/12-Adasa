

export default function Categories(type) {

    const myCategories = [
        { key: 1, name: "إضاءة", icon: "fa-sun", count: 3 },
        { key: 2, name: "بورتريه", icon: "fa-user", count: 3 },
        { key: 3, name: "مناظر طبيعية", icon: "fa-mountain-sun", count: 2 },
        { key: 4, name: "تقنيات", icon: "fa-sliders", count: 5 },
        { key: 5, name: "معدات", icon: "fa-gear", count: 3 }
    ]

    if (type == "all") {
        return myCategories
    } else {
        return myCategories.filter((cate) => cate.name === type)
    }

}
