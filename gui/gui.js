var template = undefined;
window.addEventListener('load', function () {
    var canvas = document.querySelector('#canvas');
    var ctx = canvas.getContext('2d');
    var template_img = document.querySelector('#template');
    createImageBitmap(template_img, {
        resizeQuality: 'pixelated',
        resizeHeight: 1000,
        resizeWidth: 1000
    }).then(function (bitmap) {
        ctx.drawImage(bitmap, 0, 0);
        template = bitmap;
    });
});
