var html = document.getElementsByTagName('html')[0];
var width = html.getBoundingClientRect().width;
html.style.fontSize = width/18.75 + 'px'; //相当于18.75rem就是整个屏幕宽度
