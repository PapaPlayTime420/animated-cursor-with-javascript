function animate_cursor(urls, delay){
  if(urls.length < 2){
  	document.documentElement.style.cursor = 'url(' + urls[0] + '), auto';
    return;
  }
  var index = 0;
  return setInterval(function(){
    document.documentElement.style.cursor = 'url(' + urls[index] + '), auto';
    ++index;
    if(index > urls.length - 1){
      index = 0;
    }
  }, delay);
}
