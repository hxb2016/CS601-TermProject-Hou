
let header = new Vue({
  el: '#header',
  data: {
    arrow: "../images/arrow1.png",
    index: 0,
    currentLi: "",
    mainPages: [
      {
        href: "./index.html",
        pageName: "Myself",
        subPages: [
          {
            href: "./resume.html",
            pageName: "Resume",
          },
          {
            href: "./favorite_food.html",
            pageName: "Favorite Food",
          }
        ]
      },
      {
        href: "./hometown.html",
        pageName: "Hometown",
        subPages: [
          {
            href: "./history.html",
            pageName: "History",
          }
        ]
      },
      {
        href: "./motherland.html",
        pageName: "Motherland",
        subPages: [
          {
            href: "./festivals.html",
            pageName: "Festivals",
          }
        ]
      }
    ]
  },
  methods: {
    mouseenter: function (event, n) {
      let navLis = document.querySelectorAll(".nav em")
      document.querySelector(".nav_child .child").style.display = "block"
      this.index = n
      this.currentLi = event.currentTarget
      for (let i = 0; i < navLis.length; i++) {
        if (n == i) {
          navLis[i].style.display = "block"
        } else {
          navLis[i].style.display = "none"
        }
      }

    },
    mouseleaveSubNav: function (event) {
      event.currentTarget.style.display = "none"
      this.currentLi.children[1].style.display = "none"
    }
  }
})