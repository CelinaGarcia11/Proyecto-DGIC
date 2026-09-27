(function(){
  var root = document.documentElement;
  root.className += ' js';
  var chips = [].slice.call(document.querySelectorAll('.chip'));
  var fichas = [].slice.call(document.querySelectorAll('.ficha'));
  function mostrar(n, scroll){
    chips.forEach(function(c){ c.className = c.className.replace(' sel',''); if (+c.getAttribute('data-n') === n) c.className += ' sel'; });
    fichas.forEach(function(f){ f.className = f.className.replace(' activa',''); if (+f.getAttribute('data-n') === n) f.className += ' activa'; });
    if (scroll && window.matchMedia('(max-width: 900px)').matches) {
      var a = document.querySelector('.ficha.activa'); if (a) a.scrollIntoView({block:'start'});
    }
  }
  chips.forEach(function(c){
    c.addEventListener('click', function(ev){ ev.preventDefault(); var n = +c.getAttribute('data-n');
      try { history.replaceState(null,'','#alfa'+n); } catch(e){} mostrar(n, true); });
  });
  var q = document.getElementById('q');
  if (q) q.addEventListener('input', function(){
    var t = q.value.trim().toLowerCase();
    chips.forEach(function(c){
      var f = document.getElementById('alfa'+c.getAttribute('data-n'));
      var hay = !t || (f.textContent || '').toLowerCase().indexOf(t) >= 0;
      c.className = c.className.replace(' dim','') + (hay ? '' : ' dim');
    });
  });
  var m = /^#alfa(\d{1,2})$/i.exec(location.hash || '');
  mostrar(m && document.getElementById('alfa'+m[1]) ? +m[1] : 1, !!m);
})();
