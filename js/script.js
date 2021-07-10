const products = document.querySelectorAll(".products__productBox")

products.forEach(item => {
    item.addEventListener("mousemove", () => {
        item.style.transform = "scale(0.9)"
    })
})

products.forEach(item => {
    item.addEventListener("mouseleave", () => {
        item.style.transform = "scale(1)"
    })
})
