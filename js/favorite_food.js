
let favoriteFood = new Vue({
    el: '#favorite-food',
    data: {
        favoriteFood: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}
        ]
    },
    methods: {
        mouseenter: function (event, n) {
            if (event.currentTarget.children[1].children.length < 1) {
                let p = document.createElement("p")
                p.innerHTML = this.favoriteFood[n].name
                event.currentTarget.children[1].appendChild(p)
            }
        }
    }
});

fetch("https://cs601-hw5-hou.glitch.me/favorite-food.json")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        favoriteFood.favoriteFood = data.favoriteFood
    })




