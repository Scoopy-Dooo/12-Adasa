

export default function Categories(type) {
    
    const myCategories = [
        { key: 1, name: "إضاءة", icon: "fa-sun", count: 3, color: "green-500" },
        { key: 2, name: "بورتريه", icon: "fa-user", count: 3, color: "purple-500" },
        { key: 3, name: "مناظر طبيعية", icon: "fa-mountain-sun", count: 2, color: "blue-500" },
        { key: 4, name: "تقنيات", icon: "fa-sliders", count: 5, color: "orange-600" },
        { key: 5, name: "معدات", icon: "fa-gear", count: 3, color: "green-500" }
    ]

    if (type == "all") {
        return myCategories
    } else {
        return myCategories.filter((cate) => cate.name === type)
    }

}
