$(function () {
  // *****************Adaptive to height (banner)*****************
  let imgH = $(".box3d img")[0]
  let imgHeight = imgH.offsetHeight
  let banner = document.querySelector(".banner")
  banner.style.height = imgHeight + "px"

  window.addEventListener("resize", function () {
    imgHeight = imgH.offsetHeight
    banner.style.height = imgHeight + "px"
  })

  function rotatingBox(fatherClassName, imgHeight, imgwidth) {
    // *****************Adaptive to height*****************
    let banner = document.querySelector("." + fatherClassName)
    let bannerWidth = banner.offsetWidth
    let box_3d = banner.children[0]

    let rate = 400 / 1321
    let bannerHeight = rate * bannerWidth
    banner.style.height = bannerHeight + "px"

    let imgWidth = bannerHeight / imgHeight * imgwidth
    let moveDistance = (3 ** 0.5) / 2 * imgWidth

    for (let i = 0; i < box_3d.children.length; i++) {
      box_3d.children[i].style.left = (box_3d.offsetWidth / 2 - box_3d.children[i].offsetWidth / 2) + "px"
      box_3d.children[i].style.transform = "rotateY(" + i * 60 + "deg) translateZ(" + moveDistance + "px)"
    }

    window.addEventListener("resize", function () {
      bannerWidth = banner.offsetWidth
      bannerHeight = rate * bannerWidth
      banner.style.height = bannerHeight + "px"
      imgWidth = imgWidth = bannerHeight / imgHeight * imgwidth
      moveDistance = (3 ** 0.5) / 2 * imgWidth
      for (let i = 0; i < box_3d.children.length; i++) {
        box_3d.children[i].style.left = (box_3d.offsetWidth / 2 - box_3d.children[i].offsetWidth / 2) + "px"
        box_3d.children[i].style.transform = "rotateY(" + i * 60 + "deg) translateZ(" + moveDistance + "px)"
      }
    })

    //******************rotate******************
    var n = 1
    setInterval(function () {
      let rotDeg = n * -60
      box_3d.style.transform = "rotateY(" + rotDeg + "deg)"
      box_3d.style.transition = 'transform 1.5s';
      n++
    }, 4500)
  }
  rotatingBox("banner", 700, 1920)

  // Introduce (content part)
  function enterInto(eles) {
    for (let i = 0; i < eles.length; i++) {
      if (window.pageYOffset > eles[i].offsetTop - window.innerHeight + eles[i].offsetHeight * 0.3) {
        eles[i].children[0].style.left = "0%"
        eles[i].children[0].style.transition = "left 1s"
  
        eles[i].children[1].style.right = "0%"
        eles[i].children[1].style.transition = "right 2s"
      } else if(window.pageYOffset < eles[i].offsetTop - window.innerHeight) {
        eles[i].children[0].style.left = "-100%"
        eles[i].children[1].style.right = "-40%"
      }
    }
  }

  const imgs = document.getElementsByClassName("content")[0].children
  enterInto(imgs)
  window.addEventListener("scroll", function (e) {
    enterInto(imgs)
  })

});
