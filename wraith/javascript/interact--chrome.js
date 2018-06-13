const callback = arguments[arguments.length - 1];
const a = document.querySelector('.some-class');
a && a.click();
setTimeout(callback, 2000);
