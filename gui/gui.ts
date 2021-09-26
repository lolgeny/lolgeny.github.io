var template: ImageBitmap = undefined;

window.addEventListener('load', () => {
    const canvas: HTMLCanvasElement = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    const template_img: HTMLImageElement = document.querySelector('#template');
    createImageBitmap(template_img, {
        resizeQuality: 'pixelated',
        resizeHeight: 1000,
        resizeWidth: 1000
    }).then(bitmap => {
        ctx.drawImage(bitmap, 0, 0);
        template = bitmap;
    });
});