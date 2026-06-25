/* Dev/preview page-jump bar — injects a dark bar of grouped dropdown menus
   to every page at the very top of the document. Plain vanilla JS, no deps.
   Include once per page: <script src="js/page-nav.js"></script> */
(function () {
  /* Grouped IA. A group with `file` and no `items` is a plain link;
     a group with `items` renders a dropdown. */
  var GROUPS = [
    { label: 'Home', file: 'index.html' },
    { label: 'Start Here', file: 'start-here.html' },
    { label: 'About', items: [
      { label: '/about', file: 'about.html' },
      { label: '/awards', file: 'awards.html' },
      { label: '/giving-back', file: 'giving-back.html' },
      { label: '/reviews', file: 'reviews.html' }
    ] },
    { label: 'How I Help', items: [
      { label: '/how-i-help', file: 'services.html' },
      { label: '/marketing-strategy', file: 'marketing-strategy.html' },
      { label: '/brand-awareness', file: 'brand-awareness.html' },
      { label: '/community', file: 'community-connections.html' },
      { label: '/belocal', file: 'belocal.html' }
    ] },
    { label: 'Resources', items: [
      { label: '/resources', file: 'resources.html' },
      { label: '/guides', file: 'resources-guides.html' },
      { label: '/frameworks', file: 'resources-frameworks.html' },
      { label: '/videos', file: 'resources-videos.html' },
      { label: '/workshops', file: 'resources-workshops.html' },
      { label: '/books', file: 'resources-books.html' },
      { label: '/bootcamp', file: 'bootcamp.html' },
      { label: '/partners', file: 'strategic-partners.html' },
      { label: '/ask-laura', file: 'ask-laura.html' }
    ] },
    { label: 'Content', items: [
      { label: '/blog', file: 'blog.html' },
      { label: '/post', file: 'post.html' },
      { label: '/podcast', file: 'podcast.html' }
    ] },
    { label: 'Contact', file: 'contact.html' }
  ];

  function currentFile() {
    var path = location.pathname.split('/').pop() || 'index.html';
    return decodeURIComponent(path) || 'index.html';
  }

  function build() {
    var cur = currentFile();

    var bar = document.createElement('nav');
    bar.id = 'page-nav-bar';
    bar.setAttribute('aria-label', 'Page navigation (preview)');

    var inner = document.createElement('div');
    inner.className = 'pnb-inner';

    var label = document.createElement('span');
    label.className = 'pnb-label';
    label.textContent = 'PAGES:';
    inner.appendChild(label);

    GROUPS.forEach(function (g) {
      if (!g.items) {
        var a = document.createElement('a');
        a.href = g.file;
        a.className = 'pnb-link';
        a.textContent = g.label;
        if (g.file === cur) a.className += ' is-active';
        inner.appendChild(a);
        return;
      }

      var groupActive = g.items.some(function (it) { return it.file === cur; });

      var wrap = document.createElement('div');
      wrap.className = 'pnb-group';

      var trigger = document.createElement('button');
      trigger.type = 'button';
      trigger.className = 'pnb-link pnb-trigger' + (groupActive ? ' is-active' : '');
      trigger.innerHTML = g.label + '<span class="pnb-caret" aria-hidden="true">\u25BE</span>';
      trigger.setAttribute('aria-haspopup', 'true');
      trigger.setAttribute('aria-expanded', 'false');

      var menu = document.createElement('div');
      menu.className = 'pnb-menu';

      g.items.forEach(function (it) {
        var a = document.createElement('a');
        a.href = it.file;
        a.className = 'pnb-item';
        a.textContent = it.label;
        if (it.file === cur) a.className += ' is-active';
        menu.appendChild(a);
      });

      trigger.addEventListener('click', function (e) {
        e.stopPropagation();
        var open = wrap.classList.contains('open');
        closeAll();
        if (!open) {
          wrap.classList.add('open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });

      wrap.appendChild(trigger);
      wrap.appendChild(menu);
      inner.appendChild(wrap);
    });

    bar.appendChild(inner);
    document.body.insertBefore(bar, document.body.firstChild);

    document.addEventListener('click', closeAll);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeAll(); });
  }

  function closeAll() {
    var open = document.querySelectorAll('#page-nav-bar .pnb-group.open');
    for (var i = 0; i < open.length; i++) {
      open[i].classList.remove('open');
      var t = open[i].querySelector('.pnb-trigger');
      if (t) t.setAttribute('aria-expanded', 'false');
    }
  }

  var css = '' +
    '#page-nav-bar{background:#2f2f2f;font-family:var(--font-subhead,"Montserrat",system-ui,sans-serif);' +
      'position:relative;z-index:9000;}' +
    '#page-nav-bar .pnb-inner{display:flex;flex-wrap:wrap;align-items:center;gap:8px;' +
      'padding:12px 20px;}' +
    '#page-nav-bar .pnb-label{color:#9a9a9a;font-size:12px;font-weight:700;letter-spacing:0.16em;' +
      'text-transform:uppercase;margin-right:8px;}' +
    '#page-nav-bar .pnb-link{display:inline-flex;align-items:center;gap:7px;color:#e6e6e6;' +
      'text-decoration:none;font-size:13px;font-weight:600;padding:7px 14px;border:1px solid #555;' +
      'border-radius:6px;background:#3a3a3a;line-height:1;cursor:pointer;font-family:inherit;' +
      'transition:background .14s ease,border-color .14s ease,color .14s ease;}' +
    '#page-nav-bar .pnb-link:hover{background:#474747;border-color:#6f6f6f;color:#fff;}' +
    '#page-nav-bar .pnb-link.is-active{background:#2D8FA2;border-color:#2D8FA2;color:#fff;}' +
    '#page-nav-bar .pnb-link.is-active:hover{background:#2D8FA2;}' +
    '#page-nav-bar .pnb-caret{font-size:10px;opacity:.7;transition:transform .14s ease;}' +
    '#page-nav-bar .pnb-group{position:relative;}' +
    '#page-nav-bar .pnb-group.open .pnb-caret{transform:rotate(180deg);}' +
    '#page-nav-bar .pnb-group.open > .pnb-trigger{background:#474747;border-color:#6f6f6f;color:#fff;}' +
    '#page-nav-bar .pnb-group.open > .pnb-trigger.is-active{background:#2D8FA2;border-color:#2D8FA2;}' +
    '#page-nav-bar .pnb-menu{display:none;position:absolute;top:calc(100% + 6px);left:0;min-width:200px;' +
      'background:#3a3a3a;border:1px solid #555;border-radius:8px;padding:6px;flex-direction:column;' +
      'gap:2px;box-shadow:0 10px 30px rgba(0,0,0,.4);z-index:10;}' +
    '#page-nav-bar .pnb-group.open .pnb-menu{display:flex;}' +
    '#page-nav-bar .pnb-item{display:block;color:#e6e6e6;text-decoration:none;font-size:13px;' +
      'font-weight:600;padding:8px 12px;border-radius:5px;line-height:1.1;white-space:nowrap;' +
      'transition:background .12s ease,color .12s ease;}' +
    '#page-nav-bar .pnb-item:hover{background:#4f4f4f;color:#fff;}' +
    '#page-nav-bar .pnb-item.is-active{background:#2D8FA2;color:#fff;}';

  function init() {
    /* Preview page-jump bar hidden per request. To re-enable, remove this return. */
    return;
    var style = document.createElement('style');
    style.id = 'page-nav-bar-style';
    style.textContent = css;
    document.head.appendChild(style);
    build();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
