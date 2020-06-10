 const scrollBuilder = (btnClass, divClass, px) => {
  if(px === undefined) {
    px = 0;
  }
  if ($(btnClass).length) {
    $(btnClass).click(function(event) {
      event.preventDefault();
      $('html,body').animate({
          scrollTop: $(divClass).offset().top + px}, 'slow');
    });
  }
}
