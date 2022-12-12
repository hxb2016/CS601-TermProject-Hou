function move_shadow(element, time, col, op) {
    // ele: element; time：transaction time; col: background-color; op: opacity
    element.style.position = "relative"
    element.style.overflow = "hidden"
    let eleleft = element.offsetLeft;
    let eletop = element.offsetTop;
    let elewidth = element.offsetWidth;
    let eleheight = element.offsetHeight;

    let moveBlock = document.createElement("div");
    element.appendChild(moveBlock)

    moveBlock.style.height = "100%";
    moveBlock.style.width = "100%";
    moveBlock.style.backgroundColor = col;
    moveBlock.style.opacity = op;
    moveBlock.style.position = 'absolute';
    moveBlock.style.top = '0px';
    moveBlock.style.left = '-100%';
    moveBlock.style.display = 'flex'
    moveBlock.style.alignItems = 'center'


    // when mouse enter into box************************
    element.addEventListener('mouseenter', function (e) {
        eleleft = element.offsetLeft;
        eletop = element.offsetTop;
        elewidth = element.offsetWidth;
        eleheight = element.offsetHeight;

        let ele_x = e.pageX;
        let ele_y = e.pageY;
        ele_x = ele_x - eleleft;
        ele_y = ele_y - eletop;
        // init=========================================
        moveBlock.style.margin = '0px';
        moveBlock.style.transition = 'margin 0s';
        moveBlock.style.top = '0px';
        moveBlock.style.left = '-' + elewidth + 'px';

        // enter grom left side=============================
        if (ele_x < elewidth / 2 && Math.abs(ele_y - eleheight / 2) <= (eleheight / elewidth) * Math.abs(ele_x - elewidth / 2)) {
            moveBlock.style.top = '0px';
            moveBlock.style.left = '-' + elewidth + 'px';
            moveBlock.style.transform = 'translateX(' + elewidth + 'px)';
            moveBlock.style.transition = 'transform ' + time + 's';
            // enter grom right side=============================
        } else if (ele_x > elewidth / 2 && Math.abs(ele_y - eleheight / 2) <= (eleheight / elewidth) * Math.abs(ele_x - elewidth / 2)) {
            moveBlock.style.top = '0px';
            moveBlock.style.left = elewidth + 'px';
            moveBlock.style.transform = 'translateX(' + '-' + elewidth + 'px)';
            moveBlock.style.transition = 'transform ' + time + 's';
        }
        // enter grom top side=============================
        else if (ele_y < eleheight / 2 && Math.abs(ele_x - elewidth / 2) <= (elewidth / eleheight) * Math.abs(ele_y - eleheight / 2)) {
            moveBlock.style.top = '-' + eleheight + 'px';
            moveBlock.style.left = '0px';
            moveBlock.style.transform = 'translateY(' + eleheight + 'px)';
            moveBlock.style.transition = 'transform ' + time + 's';
        }
        // enter grom bottom side=============================
        else if (ele_y > eleheight / 2 && Math.abs(ele_x - elewidth / 2) <= (elewidth / eleheight) * Math.abs(ele_y - eleheight / 2)) {
            moveBlock.style.top = eleheight + 'px';
            moveBlock.style.left = '0px';
            moveBlock.style.transform = 'translateY(' + '-' + eleheight + 'px)';
            moveBlock.style.transition = 'transform ' + time + 's';
        }
    })


    // when mouse leave the box*******************************************************************************************
    element.addEventListener('mouseleave', function (e) {
        eleleft = element.offsetLeft;
        eletop = element.offsetTop;
        elewidth = element.offsetWidth;
        eleheight = element.offsetHeight;

        let ele_x = e.pageX;
        let ele_y = e.pageY;
        ele_x = ele_x - eleleft;
        ele_y = ele_y - eletop;
        // init========================
        moveBlock.style.top = '0px';
        moveBlock.style.left = '0px';
        moveBlock.style.transform = 'translateY(0px)' + ' translateX(0px)';
        moveBlock.style.transition = 'transform 0s';

        // leave from left side========================
        if (ele_x < elewidth / 2 && Math.abs(ele_y - eleheight / 2) <= (eleheight / elewidth) * Math.abs(ele_x - elewidth / 2)) {
            moveBlock.style.marginLeft = '-' + elewidth + 'px';
            moveBlock.style.transition = 'margin ' + time + 's';
        }
        // leave from right side========================
        else if (ele_x > elewidth / 2 && Math.abs(ele_y - eleheight / 2) <= (eleheight / elewidth) * Math.abs(ele_x - elewidth / 2)) {
            moveBlock.style.marginLeft = elewidth + 'px';
            moveBlock.style.transition = 'margin ' + time + 's';
        }
        // leave from top side========================
        else if (ele_y < eleheight / 2 && Math.abs(ele_x - elewidth / 2) <= (elewidth / eleheight) * Math.abs(ele_y - eleheight / 2)) {
            moveBlock.style.marginTop = '-' + eleheight + 'px';
            moveBlock.style.transition = 'margin ' + time + 's';
        }
        // leave from bottom side========================
        else if (ele_y > eleheight / 2 && Math.abs(ele_x - elewidth / 2) <= (elewidth / eleheight) * Math.abs(ele_y - eleheight / 2)) {
            moveBlock.style.marginTop = eleheight + 'px';
            moveBlock.style.transition = 'margin ' + time + 's';
        }
    })
}