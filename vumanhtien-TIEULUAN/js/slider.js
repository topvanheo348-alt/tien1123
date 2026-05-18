
        let banner = ['banner_1.png', 'banner_2.png', 'banner_3.png'];
        let i = 0;
    
        function left() {
            i--;
            if (i < 0) {
                i = banner.length - 1;
            }
            document.getElementById('slider').src = `img/${banner[i]}`;
        }
    
        function right() {
            i++;
            if (i >= banner.length) {
                i = 0;
            }
            document.getElementById('slider').src = `img/${banner[i]}`;
        }
   