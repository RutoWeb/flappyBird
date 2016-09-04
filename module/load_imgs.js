define(function(require,exports,module) {
    console.log('load_img.js引入成功');//输出表示引入成功
   // 主函数
   function mainCall (imgObjects) {
            //代码进入到这里面以后，也就代表图片已经加载完成了，然后加载main.js文件
           require('main')(imgObjects);
   }




    var imgs = ['birds.png', 'land.png', 'pipe1.png', 'pipe2.png', 'sky.png'];
    var imgObjects = [];
    var loadCount = 0;
    function listener() {
        loadCount++;
        if (loadCount >= imgs.length) {
                
                mainCall(imgObjects);
        }
    }
    imgs.forEach(function (imgurl) {
        var img = new Image(); 
        img.addEventListener('load', listener);
        img.src = './imgs/' + imgurl;
        imgObjects.push(img);
    });
});
    


