$(function () {
  let banner = document.querySelector(".flow-chart .banner")
  let bannerLis = document.querySelectorAll(".flow-chart .banner li")
  let bannerPs = document.querySelectorAll(".flow-chart .banner li p")
  let imgs = document.querySelectorAll(".flow-chart .banner img")
  for (let i = 0; i < bannerLis.length; i++) {
    bannerLis[i].onmouseenter = function (e) {
      let w = imgs[i].width
      bannerLis[i].style.width = w + 'px';
      bannerPs[i].style.display = 'block';
      bannerLis[i].style.transition = 'width 1s';
      for (let j = 0; j < bannerLis.length; j++) {
        if (i != j) {
          bannerLis[j].style.width = '6%';
          bannerPs[j].style.display = 'none';
          bannerLis[j].style.transition = 'width 1s';
        }
      }
    }
  }

  banner.onmouseleave = function (e) {
    for (let j = 0; j < bannerLis.length; j++) {
      bannerLis[j].style.width = '12.5%';
      bannerPs[j].style.display = 'none';
      bannerLis[j].style.transition = 'width 1s';
    }
  }

  //  contral up button show or hidden
  function tool() {
    $(window).scroll(function () {
      let val = $(".nanyangVideo").offset().top;
      if (val <= $(document).scrollTop()) {
        $(".sidebar")
          .stop()
          .fadeIn(110);
      } else {
        $(".sidebar")
          .stop()
          .fadeOut(110);
      }

      //clear timer
      if ($(document).scrollTop() <= 100) {
        window.clearInterval(t1);
      }
    });
  }

  //click up button, then back to top
  let t1;
  $(".sidebar_top").click(function () {
    t1 = window.setInterval(function () {
      $(document).scrollTop($(document).scrollTop() - 80);
    }, 30);
  });
  tool();

  // =========Magnifying glass===================
  let glass = document.querySelector("#glass")
  let glassImg = document.querySelector("#glassImg")
  let cover = document.querySelector("#cover")
  let map = document.querySelector("#map")

  map.addEventListener("mousemove", function (e) {
    let mapleft = map.offsetLeft
    let maptop = map.offsetTop
    let map_x = e.pageX
    let map_y = e.pageY
    map_x = map_x - mapleft
    map_y = map_y - maptop

    let glassWidth = glass.offsetWidth
    let coverWidth = cover.offsetWidth

    let rate = glassWidth / coverWidth
    let realX = rate * (map_x - coverWidth / 2)
    let realY = rate * (map_y - coverWidth / 2)

    glassImg.style.width = map.offsetWidth * rate + "px"
    glassImg.style.top = -realY + "px"
    glassImg.style.left = -realX + "px"

    glass.style.display = "block"
    if (window.scrollY + (glassWidth + coverWidth / 2) <= e.pageY) {
      glass.style.top = (e.pageY - (glassWidth + coverWidth / 2)) + "px"
    } else {
      glass.style.top = (e.pageY + (coverWidth / 2)) + "px"
    }

    if (e.pageX - glassWidth - coverWidth / 2 > 0) {
      glass.style.left = (e.pageX - (glassWidth + coverWidth / 2)) + "px"
    } else {
      glass.style.left = (e.pageX + (coverWidth / 2)) + "px"
    }


    cover.style.display = "block"
    cover.style.top = (e.pageY - coverWidth / 2) + "px"
    cover.style.left = (e.pageX - coverWidth / 2) + "px"
  })

  map.addEventListener("mouseleave", function (e) {
    glass.style.display = "none"
    cover.style.display = "none"
  })

});
