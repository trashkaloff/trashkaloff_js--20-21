$(function(){
  var $templ = $('#temp').html();
  var content = tmpl($templ, {data: questions});
  $('body').append(content);
});
