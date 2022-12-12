$(function () {

  //  ******flow-chart*******
  // *****************Adaptive to height (banner)*****************
  let li = $(".banner li")[0]
  let imgHeight = li.offsetHeight
  let banner = document.querySelector(".banner")
  // banner.style.height = imgHeight + "px"

  window.addEventListener("resize", function () {
    imgHeight = li.offsetHeight
    banner.style.height = imgHeight + "px"
  })

  window.onpageshow = function () {
    imgHeight = li.offsetHeight
    banner.style.height = imgHeight + "px"
  }

  let imgList = document.querySelector(".imgList");
  // show the left and right button when entry their area
  let leftButton = document.querySelector(".leftButton");
  let rightButton = document.querySelector(".rightButton")

  leftButton.onmouseenter = function (e) {
    leftButton.style.opacity = "1";
    leftButton.style.transition = "1s";
  }

  leftButton.onmouseleave = function (e) {
    leftButton.style.opacity = "0";
    leftButton.style.transition = "1s";
  }

  rightButton.onmouseenter = function (e) {
    rightButton.style.opacity = "1";
    rightButton.style.transition = "1s";
  }

  rightButton.onmouseleave = function (e) {
    rightButton.style.opacity = "0";
    rightButton.style.transition = "1s";
  }

  // numbers of clicking
  let num = 0;
  let bannerImgNum = 10

  leftButton.addEventListener('click', function () {
    num--;
    let imgArr = document.querySelectorAll('.imgList li');
    num = num < 0 ? num + bannerImgNum : num

    for (i = 0; i < imgArr.length; i++) {
      imgArr[i].style.transform = '';
      imgArr[i].style.opacity = '';
      imgArr[i].style.transition = '';
      imgArr[i].style.zIndex = '';
    }

    if (imgArr.length > bannerImgNum) {
      imgList.removeChild(imgList.lastChild);
    }

    imgArr[bannerImgNum - 1].style.transform = 'scale(3,3)';
    imgArr[bannerImgNum - 1].style.opacity = '0';
    imgArr[bannerImgNum - 1].style.transition = 'transform 2s, opacity 2s';
    imgArr[bannerImgNum - 1].style.zIndex = '9';

    let li = document.createElement('li');
    li.innerHTML = imgArr[0].innerHTML;
    imgList.appendChild(li);
    imgList.removeChild(imgArr[0]);
  })

  let n = 0;
  rightButton.addEventListener('click', function () {
    num++;
    let imgArr = document.querySelectorAll('.imgList li');

    for (i = 0; i < bannerImgNum; i++) {
      imgArr[i].style.transform = '';
      imgArr[i].style.opacity = '';
      imgArr[i].style.transition = '';
      imgArr[i].style.zIndex = '';
    }

    imgArr[bannerImgNum - 1].style.transform = 'scale(3,3)';
    imgArr[bannerImgNum - 1].style.opacity = '0';
    imgArr[bannerImgNum - 1].style.transition = 'transform 2s, opacity 2s';
    imgArr[bannerImgNum - 1].style.zIndex = '9';

    let li = document.createElement('li');
    li.innerHTML = imgArr[bannerImgNum - 1].innerHTML;
    imgList.insertBefore(li, imgArr[0]);

    n++
    if (n >= 2) {
      imgList.removeChild(imgArr[bannerImgNum]);
    }
  })

  setInterval(function () {
    rightButton.click();
  }, 3000);
  // ******flow-chart end******* 

  // **********introduce myself*************
  let locationEle = document.querySelectorAll(".content_left_1")[0]
  let locationEleCh = document.querySelectorAll(".content_left_1 div")[0]
  let p1 = document.createElement("p")
  p1.textContent = "My name is Hou Xiaobing, male, I come from China. My hometown is Nanyang City, Henan Province, China. My previous major was thermal energy and power engineering. I didn't have a background in computer science before I started this program."
  let p2 = document.createElement("p")
  p2.textContent = "I'm here because my wife is here to complete her PHD. So I came here to be with her. I didn't want to waste this time, so I decided to finish a graduate degree in computers science. So that I can improve myself and get a better job when I go back and give myself and my wife a better future."
  let centerContent = document.createElement("div")
  centerContent.appendChild(p1)
  centerContent.appendChild(p2)
  locationEle.onmouseenter = function (e) {
    locationEleCh.appendChild(centerContent)
  };
  // **********introduce myself end**********

  //  contral up button show or hidden
  function tool() {
    $(window).scroll(function () {
      let val = $(".colleges").offset().top;
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
});

