/* Tìm trong mọi bản tin: đọc search.json một lần, tìm không phân biệt dấu (gõ "cuoc" vẫn ra "cước"). */
(function () {
  var input = document.getElementById('q');
  var out = document.getElementById('kq');
  var list = document.getElementById('ds');
  if (!input || !out) return;
  var data = null, loading = null, timer = null;

  function fold(s) {
    // Bỏ dấu từng ký tự, giữ vị trí để tô đúng chỗ trên chữ gốc.
    var n = '', map = [];
    for (var i = 0; i < s.length; i++) {
      var c = s[i].normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[đĐ]/g, 'd').toLowerCase();
      for (var j = 0; j < c.length; j++) { n += c[j]; map.push(i); }
    }
    return { s: n, map: map };
  }
  function esc(s) {
    return s.replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; });
  }
  var deco = document.createElement('textarea');
  function decode(s) { deco.innerHTML = s || ''; return deco.value; }
  function load() {
    if (loading) return loading;
    loading = fetch(input.getAttribute('data-src'))
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (rows) {
        data = rows.map(function (r) {
          var text = decode(r.text), chu = decode(r.chu_y);
          var all = [decode(r.title), chu, decode(r.terms), text].join(' ');
          return { r: r, text: text, chu: chu, f: fold(all).s };
        });
        return data;
      });
    return loading;
  }
  function snippet(text, words) {
    var f = fold(text), at = -1, len = 0;
    var phrase = words.join(' '), pk = words.length > 1 ? f.s.indexOf(phrase) : -1;
    if (pk >= 0) { at = pk; len = phrase.length; }
    for (var i = 0; at < 0 && i < words.length; i++) {
      var k = f.s.indexOf(words[i]);
      if (k >= 0 && (at < 0 || k < at)) { at = k; len = words[i].length; }
    }
    if (at < 0) return esc(text.slice(0, 160));
    var a = f.map[at], b = f.map[at + len - 1] + 1;
    var from = Math.max(0, a - 70), to = Math.min(text.length, b + 90);
    return (from > 0 ? '… ' : '') + esc(text.slice(from, a)) + '<mark>' + esc(text.slice(a, b)) + '</mark>' +
      esc(text.slice(b, to)) + (to < text.length ? ' …' : '');
  }
  function hasAny(t, words) { var f = fold(t).s; return words.some(function (w) { return f.indexOf(w) >= 0; }); }
  function render(q) {
    var words = fold(q.trim()).s.split(/\s+/).filter(Boolean);
    if (!words.length) { out.hidden = true; out.innerHTML = ''; if (list) list.hidden = false; return; }
    var hits = data.filter(function (d) { return words.every(function (w) { return d.f.indexOf(w) >= 0; }); });
    var html = '<p class="results__n">' + (hits.length ? hits.length + ' bản tin có “' + esc(q.trim()) + '”' : 'Không thấy bản tin nào có “' + esc(q.trim()) + '”.') + '</p>';
    if (hits.length) {
      html += '<ol class="days">' + hits.map(function (d) {
        return '<li><a class="day" href="' + esc(d.r.url) + '"><span class="ngay">' + esc(d.r.date) + ' · ' + esc(d.r.buoi || '') +
          '</span><span class="day__t">' + snippet(hasAny(d.text, words) ? d.text : d.chu, words) + '</span></a></li>';
      }).join('') + '</ol>';
    }
    out.innerHTML = html; out.hidden = false; if (list) list.hidden = true;
  }
  input.addEventListener('focus', load, { once: true });
  input.addEventListener('input', function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      load().then(function () { render(input.value); }).catch(function () {
        out.hidden = false; out.innerHTML = '<p class="results__n">Chưa tải được dữ liệu tìm kiếm. Thử tải lại trang.</p>';
      });
    }, 120);
  });
  if (location.hash.indexOf('#q=') === 0) { input.value = decodeURIComponent(location.hash.slice(3)); input.dispatchEvent(new Event('input')); }
})();
