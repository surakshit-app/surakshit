// Highlights the current section in the "On this page" list. The pages work without it.
(function () {
  var links = document.querySelectorAll('.toc a');
  if (!links.length || !('IntersectionObserver' in window)) return;
  var byId = {};
  links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
  var visible = {};
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { visible[e.target.id] = e.isIntersecting; });
    var current = Object.keys(byId).find(function (id) { return visible[id]; });
    if (!current) return;
    links.forEach(function (a) { a.classList.remove('active'); });
    byId[current].classList.add('active');
  }, { rootMargin: '-80px 0px -60% 0px' });
  Object.keys(byId).forEach(function (id) {
    var section = document.getElementById(id);
    if (section) observer.observe(section);
  });
})();
