const slaider = document.querySelector('#slaider');
const root = document.querySelector(':root');
const widthWindow = window.innerWidth;

const cubeStyle = window.getComputedStyle(document.querySelector('.cube'));
const widthCube = cubeStyle.getPropertyValue('width');
const width = +widthCube.substring(0,widthCube.indexOf('px'));

const body = document.querySelector('body');

slaider.addEventListener('change',e=>{
    body.style.backgroundColor = `rgb(${255-slaider.value},${255-slaider.value},${255-slaider.value})`;
    root.style.setProperty('--chiftCube',` ${(widthWindow-width) / 255 * slaider.value}px`);
})