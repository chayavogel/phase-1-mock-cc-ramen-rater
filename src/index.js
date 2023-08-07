// Load Content on DOM

fetch ("http://localhost:3000/ramens", {
    method: "GET"
})
.then (response => response.json())
.then (data => {
    data.forEach((element) => {
        const img = document.createElement("img")
        img.setAttribute("src", element.image)
        const ramenMenuDiv = document.getElementById("ramen-menu")
        ramenMenuDiv.append(img)

        img.addEventListener("click", displayRestaurant)

        // Display dish details on click

        function displayRestaurant(event) {
            const image = document.getElementById("image")
            const name = document.getElementById("name")
            const restaurant = document.getElementById("restaurant")
            const rating = document.getElementById("rating-display")
            const comment = document.getElementById("comment-display")

            image.src = element.image
            name.innerText = element.name
            restaurant.innerText = element.restaurant
            rating.innerText = element.rating
            comment.innerText = element.comment
        }
    })
})

const form = document.getElementById("new-ramen")

form.addEventListener("submit", function(event) {
    event.preventDefault()
    fetch("http://localhost:3000/ramens", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        "name": event.target.name.value,
        "restaurant": event.target.restaurant.value,
        "image": event.target.image.value,
        "rating": event.target.rating.value,
        "comment": event.target.new_comment.value
    })
})
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const image = document.getElementById("image")
        const name = document.getElementById("name")
        const restaurant = document.getElementById("restaurant")
        const rating = document.getElementById("rating-display")
        const comment = document.getElementById("comment-display")

        image.src = data.image
        name.innerText = data.name
        restaurant.innerText = data.restaurant
        rating.innerText = data.rating
        comment.innerText = data.comment
    })
})
