/* @ds-bundle: {"format":3,"namespace":"LauraCapesTerryDesignSystem_1d8d61","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"FeatureCard","sourcePath":"components/content/FeatureCard.jsx"},{"name":"Pill","sourcePath":"components/content/Pill.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"fd68c1a7a3dc","components/content/FeatureCard.jsx":"8f44913d43cc","components/content/Pill.jsx":"c1d9d713be0d","components/content/SectionHeading.jsx":"a43713512d0c","components/forms/Input.jsx":"c005bd5d9a7b","ui_kits/website/Footer.jsx":"10f273a82e87","ui_kits/website/Header.jsx":"70d489c4a077","ui_kits/website/app.jsx":"f1277a0be651","ui_kits/website/views.jsx":"d56d6d36963b","views.jsx":"ed4f1799b95a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LauraCapesTerryDesignSystem_1d8d61 = window.LauraCapesTerryDesignSystem_1d8d61 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Laura Capes Terry — Button
 * Clean, elegant buttons that feel approachable and trustworthy.
 *   • primary   — solid Signature Teal   ("Work Together")
 *   • secondary — solid Deep Navy        ("Learn More")
 *   • accent    — Rose Berry outline     ("Let's Connect ♥")
 * Plus ghost and on-dark variants. Modest 4px radius, Montserrat SemiBold label.
 */
function Button({
  children,
  variant = 'primary',
  size = 'medium',
  href,
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    small: {
      padding: '8px 18px',
      fontSize: 13,
      minHeight: 38,
      letterSpacing: '0.08em'
    },
    medium: {
      padding: '13px 30px',
      fontSize: 14,
      minHeight: 48,
      letterSpacing: '0.1em'
    },
    large: {
      padding: '17px 40px',
      fontSize: 15,
      minHeight: 56,
      letterSpacing: '0.1em'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
    fontFamily: 'var(--font-subhead)',
    fontWeight: 600,
    textTransform: 'uppercase',
    lineHeight: 1,
    textDecoration: 'none',
    border: '2px solid transparent',
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    width: fullWidth ? '100%' : 'auto',
    transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)',
    WebkitTapHighlightColor: 'transparent',
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: 'var(--text-on-dark)',
      borderColor: 'var(--color-primary)'
    },
    secondary: {
      background: 'var(--color-secondary)',
      color: 'var(--text-on-dark)',
      borderColor: 'var(--lct-navy-700)',
      boxShadow: 'inset 0 0 0 4px var(--color-secondary), inset 0 0 0 5px rgba(247,241,231,0.85)'
    },
    accent: {
      background: 'transparent',
      color: 'var(--lct-teal-700)',
      borderColor: 'var(--lct-teal-600)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-primary)',
      borderColor: 'transparent'
    },
    onDark: {
      background: 'var(--text-on-dark)',
      color: 'var(--color-secondary)',
      borderColor: 'var(--text-on-dark)'
    }
  };
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const hoverStyle = !disabled && hover ? {
    primary: {
      background: 'var(--color-primary-hover)',
      borderColor: 'var(--color-primary-hover)'
    },
    secondary: {
      background: 'var(--color-secondary-hover)',
      borderColor: 'var(--lct-navy-700)',
      boxShadow: 'inset 0 0 0 4px var(--color-secondary-hover), inset 0 0 0 5px rgba(247,241,231,0.95)'
    },
    accent: {
      background: 'var(--color-accent-soft)'
    },
    ghost: {
      background: 'var(--surface-tint)'
    },
    onDark: {
      background: 'var(--surface-tint)'
    }
  }[variant] : null;
  const css = {
    ...base,
    ...variants[variant],
    ...hoverStyle,
    transform: active && !disabled ? 'translateY(1px)' : 'none',
    ...style
  };
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false)
  };
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      className: "lct-btn",
      style: css,
      onClick: onClick
    }, handlers, rest), children);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: "lct-btn",
    style: css,
    disabled: disabled,
    onClick: onClick
  }, handlers, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/content/FeatureCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Laura Capes Terry — FeatureCard
 * White card with soft corners + gentle shadow. Optional eyebrow,
 * title, body, and footer (e.g. a link or Button). Lifts slightly on hover.
 */
function FeatureCard({
  eyebrow,
  title,
  children,
  footer,
  image,
  tone = 'light',
  hoverable = true,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const toneStyle = tone === 'tint' ? {
    background: 'var(--surface-tint)'
  } : tone === 'dark' ? {
    background: 'var(--surface-dark)'
  } : {
    background: 'var(--surface-card)'
  };
  const onDark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: hoverable && hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transform: hoverable && hover ? 'translateY(-4px)' : 'none',
      transition: 'box-shadow var(--dur-normal) var(--ease-standard), transform var(--dur-normal) var(--ease-standard)',
      ...toneStyle,
      ...style
    }
  }, rest), image && /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16 / 10',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      flex: 1
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--fs-overline)',
      letterSpacing: 'var(--ls-overline)',
      textTransform: 'uppercase',
      color: onDark ? 'var(--lct-sky-500)' : 'var(--color-primary)'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      margin: 0,
      fontSize: 'var(--fs-h4)',
      lineHeight: 'var(--lh-snug)',
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-heading)'
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-relaxed)',
      color: onDark ? 'rgba(255,255,255,0.85)' : 'var(--text-body)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 6
    }
  }, footer)));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/content/Pill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Laura Capes Terry — Pill
 * Rounded label/eyebrow tag. Mirrors the teal banner pills on the site
 * ("Clarity in an AI-Driven World", "Authentic, Human Marketing").
 */
function Pill({
  children,
  variant = 'solid',
  style,
  ...rest
}) {
  const variants = {
    solid: {
      background: 'var(--color-primary)',
      color: 'var(--text-on-dark)',
      border: '1px solid var(--color-primary)'
    },
    soft: {
      background: 'var(--surface-tint)',
      color: 'var(--lct-teal-600)',
      border: '1px solid var(--surface-tint-strong)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--color-primary)',
      border: '1px solid var(--color-primary)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--fs-small)',
      lineHeight: 1,
      padding: '8px 16px',
      borderRadius: 'var(--radius-pill)',
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Pill.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Laura Capes Terry — SectionHeading
 * The site's standard section opener: teal uppercase overline,
 * a Cormorant Garamond heading, and an optional lead paragraph.
 */
function SectionHeading({
  overline,
  title,
  lead,
  align = 'left',
  level = 'h2',
  style,
  ...rest
}) {
  const Tag = level;
  const sizes = {
    h1: 'var(--fs-h1)',
    h2: 'var(--fs-h2)',
    h3: 'var(--fs-h3)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      maxWidth: align === 'center' ? 720 : 'none',
      marginInline: align === 'center' ? 'auto' : 0,
      ...style
    }
  }, rest), overline && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--fs-overline)',
      letterSpacing: 'var(--ls-overline)',
      textTransform: 'uppercase',
      color: 'var(--color-primary)',
      marginBottom: 12
    }
  }, overline), /*#__PURE__*/React.createElement(Tag, {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      color: 'var(--text-heading)',
      fontSize: sizes[level] || sizes.h2,
      lineHeight: 'var(--lh-tight)',
      letterSpacing: 'var(--ls-tight)',
      margin: 0
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-lead)',
      lineHeight: 1.5,
      color: 'var(--text-body)',
      margin: '16px 0 0'
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Laura Capes Terry — Input
 * Text field with optional label + helper/error text. Teal focus ring,
 * soft 4px corners, warm neutral border. Pairs with newsletter and
 * contact forms across the site.
 */
function Input({
  label,
  id,
  type = 'text',
  placeholder,
  helper,
  error,
  required = false,
  value,
  defaultValue,
  onChange,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? `lct-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const borderColor = error ? 'var(--lct-error)' : focus ? 'var(--color-primary)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--fs-small)',
      color: 'var(--text-heading)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--lct-error)'
    }
  }, " *")), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    placeholder: placeholder,
    required: required,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-heading)',
      background: 'var(--surface-card)',
      padding: '12px 14px',
      borderRadius: 'var(--radius-sm)',
      border: `1px solid ${borderColor}`,
      boxShadow: focus ? '0 0 0 3px var(--surface-tint-strong)' : 'none',
      outline: 'none',
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)'
    }
  }, rest)), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-caption)',
      color: error ? 'var(--lct-error)' : 'var(--text-muted)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
/* Laura Capes Terry — Website UI kit: Footer */
function Footer({
  onNavigate
}) {
  const links = ['About', 'Services', 'The Unbridled Creative Podcast', 'Be Locally Loved Podcast', 'Bootcamp', 'BeLocal', 'Reviews', 'Blog', 'Contact'];
  const map = {
    About: 'Home',
    Services: 'Services',
    Reviews: 'Home',
    Blog: 'Blog',
    Contact: 'Home',
    BeLocal: 'Home',
    Bootcamp: 'Home',
    'The Unbridled Creative Podcast': 'Home',
    'Be Locally Loved Podcast': 'Home'
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-card)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '48px var(--container-gutter) 40px',
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      gap: 32,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(window.Logo, {
    onClick: () => onNavigate('Home'),
    footer: true
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9,
      textAlign: 'center'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    onClick: () => onNavigate(map[l] || 'Home'),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-body)',
      cursor: 'pointer',
      textDecoration: 'none'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "\xA9 2026 Grayson Media LLC"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, ['facebook-f', 'instagram', 'linkedin-in'].map(ic => /*#__PURE__*/React.createElement("a", {
    key: ic,
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: 'var(--color-primary)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 14,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `fa-brands fa-${ic}`
  })))))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
/* Laura Capes Terry — Website UI kit: Header (sticky nav) */
const LCT = window.LauraCapesTerryDesignSystem_1d8d61;
function Logo({
  onClick,
  footer
}) {
  return /*#__PURE__*/React.createElement("a", {
    onClick: onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-horizontal.png",
    alt: "Laura Capes Terry \u2014 strategic marketing guidance",
    style: {
      height: footer ? 52 : 46,
      width: 'auto',
      display: 'block'
    }
  }));
}
window.Logo = Logo;
function Header({
  current,
  onNavigate,
  onCTA
}) {
  const {
    Button
  } = LCT;
  const links = ['About', 'Services', 'Reviews', 'Podcast', 'BeLocal', 'Blog', 'Contact'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '12px var(--container-gutter)',
      display: 'flex',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    onClick: () => onNavigate('Home')
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 20,
      marginLeft: 'auto',
      alignItems: 'center'
    }
  }, links.map(l => {
    const active = current === l;
    return /*#__PURE__*/React.createElement("a", {
      key: l,
      onClick: () => onNavigate(l),
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 15,
        fontWeight: active ? 700 : 400,
        color: active ? 'var(--color-primary)' : 'var(--text-body)',
        cursor: 'pointer',
        textDecoration: 'none'
      }
    }, l);
  }), /*#__PURE__*/React.createElement("a", {
    onClick: onCTA,
    title: "Call Laura",
    style: {
      color: 'var(--color-primary)',
      cursor: 'pointer',
      fontSize: 17
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-phone"
  })), /*#__PURE__*/React.createElement(Button, {
    size: "small",
    onClick: onCTA
  }, "Work With Laura"))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
/* Laura Capes Terry — Website UI kit: app shell + simple view routing */
function App() {
  const [view, setView] = React.useState('Home');
  const [toast, setToast] = React.useState(false);
  function navigate(target) {
    const map = {
      About: 'Home',
      Reviews: 'Home',
      Podcast: 'Home',
      BeLocal: 'Home',
      Contact: 'Home'
    };
    const v = ['Home', 'Services', 'Blog'].includes(target) ? target : map[target] || 'Home';
    setView(v);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  function cta() {
    setToast(true);
    clearTimeout(window.__lctToast);
    window.__lctToast = setTimeout(() => setToast(false), 2600);
  }
  const Views = {
    Home: window.HomeView,
    Services: window.ServicesView,
    Blog: window.BlogView
  };
  const Current = Views[view];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
    current: view,
    onNavigate: navigate,
    onCTA: cta
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Current, {
    onCTA: cta
  })), /*#__PURE__*/React.createElement(Footer, {
    onNavigate: navigate
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: '50%',
      bottom: 28,
      transform: `translateX(-50%) translateY(${toast ? 0 : 20}px)`,
      opacity: toast ? 1 : 0,
      pointerEvents: 'none',
      transition: 'all var(--dur-normal) var(--ease-standard)',
      background: 'var(--text-heading)',
      color: '#fff',
      padding: '14px 22px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 600,
      boxShadow: 'var(--shadow-lg)',
      zIndex: 100
    }
  }, "\u2713 This is a demo \u2014 Laura's real booking opens her Calendly."));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/views.jsx
try { (() => {
/* Laura Capes Terry — Website UI kit: page views */
const V = window.LauraCapesTerryDesignSystem_1d8d61;
const CONTAINER = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 var(--container-gutter)'
};
const T = t => /*#__PURE__*/React.createElement("span", {
  style: {
    color: 'var(--color-primary)',
    fontWeight: 700
  }
}, t);

/* ---------------- HOME ---------------- */
function HomeView({
  onCTA
}) {
  const {
    Button,
    Input
  } = V;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#e7e8e6 url(../../assets/hero-homepage.png) no-repeat right center',
      backgroundSize: 'cover'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CONTAINER,
      minHeight: 520,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 460,
      padding: '64px 0'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 46,
      lineHeight: 1.08,
      color: 'var(--text-heading)',
      margin: '0 0 18px',
      letterSpacing: '-0.01em'
    }
  }, "Be seen. Be trusted. Be chosen."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      margin: '0 0 26px',
      maxWidth: 420
    }
  }, "Helping ", T('local business owners'), " build magnetic brands people love and trust by blending ", T('modern tools'), " with ", T('timeless wisdom'), "."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    onClick: onCTA
  }, "Work With Laura"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CONTAINER,
      paddingTop: 18,
      paddingBottom: 18,
      display: 'flex',
      gap: 24,
      justifyContent: 'space-between',
      flexWrap: 'wrap'
    }
  }, ['Clarity in an AI-Driven World', 'Authentic, Human Marketing', 'Confident, Sustainable Growth'].map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      flex: '1 1 0',
      textAlign: 'center',
      fontFamily: 'var(--font-heading)',
      fontWeight: 500,
      fontSize: 18,
      color: '#fff'
    }
  }, t)))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CONTAINER,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'start',
      paddingTop: 72,
      paddingBottom: 72
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 30,
      color: 'var(--text-heading)',
      margin: '0 0 10px'
    }
  }, "AI is changing everything."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      fontWeight: 700,
      fontStyle: 'italic',
      color: 'var(--text-heading)',
      margin: '0 0 18px'
    }
  }, "And most business owners are drowning in distraction and overwhelm."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: 1.65,
      color: 'var(--text-body)',
      margin: '0 0 16px'
    }
  }, "You know marketing matters, but:"), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '0 0 18px',
      counterReset: 'lct',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, [['You’re on the edge of your expertise', '—unsure which AI tools, trends, and tactics actually support your goals, and which ones just add noise.'], ['You’re out of time', '—juggling too many roles to slow down, think strategically, and create marketing that truly reflects your voice and values.'], ['You’re feeling disconnected', '—craving authentic, human connection in a world that’s becoming faster, louder, and more automated by the day.']].map(([h, b], i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 24,
      height: 24,
      borderRadius: '50%',
      background: 'var(--surface-tint)',
      color: 'var(--color-primary)',
      fontWeight: 700,
      fontSize: 13,
      fontFamily: 'var(--font-body)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 2
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15.5,
      lineHeight: 1.6,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--color-primary)'
    }
  }, h), b)))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: 1.65,
      color: 'var(--text-body)',
      margin: '0 0 24px'
    }
  }, "AI was supposed to make things easier. But without clear guidance and experienced marketing leadership, it often does the opposite\u2014amplifying confusion, diluting your message, and pulling your attention in too many directions at once."), /*#__PURE__*/React.createElement(Button, {
    onClick: onCTA
  }, "Work With Laura")), /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'start'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/overwhelm-its-not-working.png",
    alt: "Overwhelmed business owner",
    style: {
      width: '100%',
      height: 'auto',
      display: 'block'
    }
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-tint)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CONTAINER,
      display: 'grid',
      gridTemplateColumns: '1fr 1.15fr',
      gap: 48,
      alignItems: 'center',
      paddingTop: 72,
      paddingBottom: 72
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/laura-all-in-with-ai.png",
    alt: "Laura Capes Terry",
    style: {
      width: '100%',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-md)'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 27,
      lineHeight: 1.2,
      color: 'var(--text-heading)',
      margin: '0 0 18px'
    }
  }, "Meet Laura Capes Terry, MBA\u2014", /*#__PURE__*/React.createElement("br", null), "Fractional CMO + Media Consultant"), ['After 30 years in media, branding, and marketing leadership, Laura has seen too many talented entrepreneurs burn out trying to keep up with marketing trends and constant change.', 'She believes there’s a better way — one that blends wisdom, faith, and modern tools, guided by experienced marketing leadership.', 'That’s why Laura guides faith-filled entrepreneurs in harnessing AI with wisdom, clarity, and purpose. Her goal is to help you simplify your marketing, strengthen your message, and scale your business with confidence.'].map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15.5,
      lineHeight: 1.65,
      color: 'var(--text-body)',
      margin: '0 0 14px'
    }
  }, p)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15.5,
      lineHeight: 1.65,
      color: 'var(--text-heading)',
      fontStyle: 'italic',
      fontWeight: 700,
      margin: '0 0 14px'
    }
  }, "AI doesn\u2019t replace heart \u2014 it amplifies it. And you don\u2019t have to figure it out alone."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15.5,
      lineHeight: 1.65,
      color: 'var(--text-body)',
      margin: '0 0 26px'
    }
  }, "Whether you need clarity, consistency, or a complete refresh, Laura meets you at the decision table and helps you move forward with confidence \u2014 one strategic step at a time."), /*#__PURE__*/React.createElement(Button, {
    onClick: onCTA
  }, "Schedule a Discovery Call")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CONTAINER,
      paddingTop: 48,
      paddingBottom: 48,
      display: 'flex',
      gap: 28,
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, [['georgetowns-best-2025.png', 'Georgetown’s Best 2025 — Gold'], ['texas-downtown-award-winner.png', 'Texas Downtown Award Winner'], ['georgetowns-best-2024.png', 'Georgetown’s Best 2024 — Gold'], ['georgetowns-best-2023.png', 'Georgetown’s Best 2023 — Gold'], ['fg-society-certified-marketer.png', 'FG Society Certified Marketer'], ['storybrand-certified-guide.png', 'StoryBrand Certified Guide']].map(([f, alt]) => /*#__PURE__*/React.createElement("img", {
    key: f,
    src: `../../assets/awards/${f}`,
    alt: alt,
    title: alt,
    style: {
      height: 92,
      width: 'auto',
      objectFit: 'contain'
    }
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CONTAINER,
      paddingTop: 'var(--section-pad-y)',
      paddingBottom: 'var(--section-pad-y)'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    title: "How We Can Work Together",
    sub: /*#__PURE__*/React.createElement(React.Fragment, null, "Every partnership begins with clarity and leadership. Laura helps faith-filled entrepreneurs use ", /*#__PURE__*/React.createElement("strong", null, "modern marketing"), " and ", /*#__PURE__*/React.createElement("strong", null, "AI with strategy, purpose, and heart"), "\u2014so you can stop reacting to trends and start leading with focus and confidence.")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 40,
      marginTop: 48
    }
  }, [['AI Strategy Sessions', 'Private 90-minute consultation to evaluate your marketing strategy and identify what’s working, what’s not, and where AI can support your strategy, save time, and amplify your message.', 'Ideal for solopreneurs and business owners ready to simplify their marketing and move forward with direction and peace of mind.'], ['Fractional Strategy & Mentorship', 'Ongoing strategic partnership for growing businesses ready to scale with clarity and consistency. Includes executive-level guidance, AI integration, and a proven system for sustainable growth—without the full-time, executive cost.', 'Ideal for growing teams that want consistent guidance, accountability, and long-term growth.'], ['Leadership Training & Speaking', 'Leadership training for entrepreneurs and teams navigating growth, AI, and constant change—with clarity, discernment, and confidence to use modern tools responsibly—without losing their voice, values, or human connection.', 'Ideal for business owners and leadership teams who want to bring authentic human connection and trust back to their marketing in the age of AI.']].map(([t, b, ideal]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 58,
      height: 58,
      margin: '0 auto 18px',
      borderRadius: 14,
      background: 'var(--surface-tint)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-arrow-trend-up",
    style: {
      color: 'var(--color-primary)',
      fontSize: 24
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 19,
      color: 'var(--text-heading)',
      margin: '0 0 12px'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      margin: '0 0 14px'
    }
  }, b), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--text-heading)',
      fontWeight: 700,
      margin: 0
    }
  }, ideal)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CONTAINER,
      paddingTop: 'var(--section-pad-y)',
      paddingBottom: 'var(--section-pad-y)'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    title: "How to Get Started",
    sub: "Here\u2019s how Laura helps business owners simplify their strategy, save time, and grow with confidence."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 40,
      marginTop: 48,
      marginBottom: 44
    }
  }, [['1', 'Start a Conversation', 'Laura begins by understanding where you are, what you’re working toward, and what’s currently getting in the way.', 'This is a focused, intentional conversation — not a sales pitch.'], ['2', 'Identify What Matters Most', 'Together, you’ll surface quick wins, areas of unnecessary complexity, and where AI or modern tools could help — or where they’re adding noise.', 'You’ll leave with clearer priorities and a recommended next step.'], ['3', 'Decide the Right Path Forward', 'If it makes sense to go deeper, Laura will outline what that could look like.', 'If not, you’ll still walk away with clarity, direction, and confidence about what to do next.']].map(([n, t, b, b2]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      margin: '0 auto 18px',
      borderRadius: '50%',
      background: 'var(--surface-tint-strong)',
      color: 'var(--color-primary)',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--text-heading)',
      margin: '0 0 12px'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      margin: '0 0 10px'
    }
  }, b), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      margin: 0
    }
  }, b2)))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onCTA
  }, "Work With Laura")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CONTAINER,
      paddingTop: 'var(--section-pad-y)',
      paddingBottom: 'var(--section-pad-y)'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    title: "What Clients Say",
    sub: /*#__PURE__*/React.createElement(React.Fragment, null, "Here\u2019s what business owners and leaders say about working with Laura. ", /*#__PURE__*/React.createElement("a", {
      onClick: onCTA,
      style: {
        color: 'var(--color-primary)',
        fontWeight: 700,
        cursor: 'pointer'
      }
    }, "Read testimonials."))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 36,
      marginTop: 44,
      marginBottom: 44
    }
  }, [['Since partnering with Laura, she’s been an invaluable guide, helping us identify and implement the right strategies for our business. We only regret not reaching out to her sooner.', 'Wendy Del Rio, An Idea Front'], ['We had no experience in marketing and no idea where to start. Laura immediately understood our situation and clearly laid out the steps we needed to take. For the first time, we could see a clear path forward.', 'Wesley Heinige, Bowen Door'], ['From the moment I met Laura, I knew I was in good hands. She’s incredibly knowledgeable, genuinely cares about business owners, and leads with integrity—not pressure.', 'Terry Bingman, The AG Company']].map(([q, who], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-quote-right",
    style: {
      color: 'var(--color-accent)',
      fontSize: 26,
      marginBottom: 14,
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      lineHeight: 1.7,
      color: 'var(--text-body)',
      fontStyle: 'italic',
      margin: '0 0 14px'
    }
  }, q), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      fontWeight: 700,
      color: 'var(--text-heading)',
      margin: 0
    }
  }, who)))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onCTA
  }, "Start a Conversation")))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--surface-dark)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/laura-office-writing.jpg",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.18
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...CONTAINER,
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 48,
      alignItems: 'center',
      paddingTop: 64,
      paddingBottom: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      padding: 28,
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lct-overline",
    style: {
      textAlign: 'center',
      marginBottom: 12
    }
  }, "Free Guide"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 21,
      color: 'var(--text-heading)',
      textAlign: 'center',
      margin: '0 0 12px',
      lineHeight: 1.25
    }
  }, "Does your website clearly explain what you do\u2014and what to do next?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      textAlign: 'center',
      margin: '0 0 18px'
    }
  }, "Download this clarity-first guide to identify what\u2019s working, what\u2019s confusing, and how to make simple homepage improvements that actually help visitors take action."), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onCTA();
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Name",
    "aria-label": "Name"
  }), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Email",
    type: "email",
    "aria-label": "Email"
  }), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Company Name",
    "aria-label": "Company Name"
  }), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Website",
    "aria-label": "Website"
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    fullWidth: true
  }, "Get the Website Clarity Guide")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-muted)',
      textAlign: 'center',
      margin: '12px 0 0'
    }
  }, "We won\u2019t send spam. Unsubscribe at any time.")), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 32,
      margin: '0 0 10px'
    }
  }, "Building Better Websites"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      fontStyle: 'italic',
      color: 'var(--lct-sky-200)',
      margin: '0 0 20px'
    }
  }, "Six clarity-first website fixes \u2014 plus AI prompts to help you implement them faster"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15.5,
      lineHeight: 1.65,
      color: 'rgba(255,255,255,0.92)',
      margin: '0 0 14px'
    }
  }, "If your website feels \u201Calmost right\u201D but not quite effective, it\u2019s often a clarity issue \u2014 not a design problem."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15.5,
      lineHeight: 1.65,
      color: 'rgba(255,255,255,0.92)',
      margin: '0 0 12px'
    }
  }, "This free guide walks you through six simple, high-impact fixes focused on your homepage above the fold so visitors can quickly understand:"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: '0 0 14px',
      paddingLeft: 22,
      color: '#fff',
      fontFamily: 'var(--font-body)',
      fontSize: 15.5,
      lineHeight: 1.9
    }
  }, /*#__PURE__*/React.createElement("li", null, "Who you help"), /*#__PURE__*/React.createElement("li", null, "What you offer"), /*#__PURE__*/React.createElement("li", null, "And what to do next")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15.5,
      lineHeight: 1.65,
      color: 'rgba(255,255,255,0.92)',
      margin: 0
    }
  }, "You\u2019ll also find optional AI prompts you can use as a thinking partner to help you evaluate and improve your site faster \u2014 without losing your voice or overcomplicating the process.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CONTAINER,
      paddingTop: 'var(--section-pad-y)',
      paddingBottom: 'var(--section-pad-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620,
      margin: '0 auto',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-md)',
      border: '1px solid var(--border-subtle)',
      padding: 40
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 28,
      color: 'var(--text-heading)',
      textAlign: 'center',
      margin: '0 0 12px'
    }
  }, "Let\u2019s Start a Conversation"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15.5,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      textAlign: 'center',
      margin: '0 0 26px'
    }
  }, "This is a short, intentional conversation to understand your goals, identify low-hanging opportunities, and recommend a smart next step."), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onCTA();
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Name",
    "aria-label": "Name"
  }), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Email",
    type: "email",
    "aria-label": "Email"
  }), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Company Name",
    "aria-label": "Company Name"
  }), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Phone Number",
    "aria-label": "Phone Number"
  }), /*#__PURE__*/React.createElement(Input, {
    placeholder: "What\u2019s feeling most unclear in your marketing now?",
    "aria-label": "Message"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "submit"
  }, "Start a Conversation")))))));
}

/* Shared bits */
function SectionTitle({
  title,
  sub
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 760,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 30,
      color: 'var(--text-heading)',
      margin: '0 0 14px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      margin: 0
    }
  }, sub));
}
function Placeholder({
  label,
  ratio
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: ratio || '4 / 3',
      borderRadius: 'var(--radius-sm)',
      background: 'repeating-linear-gradient(135deg, #eef2f3, #eef2f3 14px, #e6edef 14px, #e6edef 28px)',
      border: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-muted)',
      fontStyle: 'italic'
    }
  }, label));
}

/* ---------------- SERVICES ---------------- */
function ServicesView({
  onCTA
}) {
  const {
    Button,
    Pill,
    SectionHeading,
    FeatureCard
  } = V;
  const services = [['Fractional CMO', 'Ongoing leadership', 'Strategic marketing direction for your team and message — without the full-time hire. Roadmaps, brand stewardship, and a steady hand at the decision table.'], ['AI Consulting', 'Clarity & systems', 'Adopt the right tools with wisdom and purpose. We simplify your stack, protect your voice, and turn AI into leverage instead of overwhelm.'], ['Brand & Storytelling', 'Message that resonates', 'Sharpen who you are and why people should choose you. StoryBrand-informed messaging that sounds like you and connects with your community.'], ['Local Media', 'BeLocal Georgetown', 'Get in front of the people who matter most through award-winning local media built for Georgetown businesses.']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-tint)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CONTAINER,
      paddingTop: 72,
      paddingBottom: 56,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    style: {
      marginBottom: 18
    }
  }, "Services"), /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    level: "h1",
    title: "Experienced marketing leadership, on your terms",
    lead: "Whether you need clarity, consistency, or a complete refresh, Laura meets you where you are \u2014 one strategic step at a time."
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CONTAINER,
      paddingTop: 'var(--section-pad-y)',
      paddingBottom: 'var(--section-pad-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, services.map(([t, e, b]) => /*#__PURE__*/React.createElement(FeatureCard, {
    key: t,
    eyebrow: e,
    title: t,
    hoverable: true,
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "small",
      onClick: onCTA
    }, "Discuss this")
  }, b))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "large",
    onClick: onCTA
  }, "Schedule a Discovery Call")))));
}

/* ---------------- BLOG ---------------- */
function BlogView({
  onCTA
}) {
  const {
    Pill,
    SectionHeading,
    FeatureCard,
    Button
  } = V;
  const posts = [['Why most businesses measure ROI all wrong', 'Strategy', '../../assets/laura-candid.jpg'], ['Before you hire your next marketing expert, read this', 'Hiring', '../../assets/laura-office-writing.jpg'], ['Marketing should be the lifeline of your business', 'Mindset', '../../assets/belocal-georgetown-cover.jpg'], ['Just launched: the BeLocally Loved podcast', 'News', '../../assets/laura-all-in-with-ai.png']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CONTAINER,
      paddingTop: 64,
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    variant: "soft",
    style: {
      marginBottom: 16
    }
  }, "The Blog"), /*#__PURE__*/React.createElement(SectionHeading, {
    level: "h1",
    title: "Ideas for being seen, trusted & chosen",
    lead: "Practical, faith-informed marketing wisdom for local business owners navigating an AI-driven world."
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CONTAINER,
      paddingTop: 48,
      paddingBottom: 'var(--section-pad-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 24
    }
  }, posts.map(([t, cat, img]) => /*#__PURE__*/React.createElement(FeatureCard, {
    key: t,
    image: img,
    eyebrow: cat,
    title: t,
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "small",
      onClick: onCTA
    }, "Read article \u2192")
  }, "A quick, human take you can put to work this week."))))));
}
Object.assign(window, {
  HomeView,
  ServicesView,
  BlogView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/views.jsx", error: String((e && e.message) || e) }); }

// views.jsx
try { (() => {
/* Laura Capes Terry — Website UI kit: page views */
const V = window.LauraCapesTerryDesignSystem_1d8d61;
const CONTAINER = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 var(--container-gutter)'
};
const T = t => /*#__PURE__*/React.createElement("span", {
  style: {
    color: 'var(--color-primary)',
    fontWeight: 700
  }
}, t);

/* ---------------- HOME ---------------- */
function HomeView({
  onCTA
}) {
  const {
    Button,
    Input
  } = V;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#e7e8e6 url(../../assets/hero-homepage.png) no-repeat right center',
      backgroundSize: 'cover'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CONTAINER,
      minHeight: 520,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 460,
      padding: '64px 0'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 46,
      lineHeight: 1.08,
      color: 'var(--text-heading)',
      margin: '0 0 18px',
      letterSpacing: '-0.01em'
    }
  }, "Be seen. Be trusted. Be chosen."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      margin: '0 0 26px',
      maxWidth: 420
    }
  }, "Helping ", T('local business owners'), " build magnetic brands people love and trust by blending ", T('modern tools'), " with ", T('timeless wisdom'), "."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    onClick: onCTA
  }, "Work With Laura"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CONTAINER,
      paddingTop: 18,
      paddingBottom: 18,
      display: 'flex',
      gap: 24,
      justifyContent: 'space-between',
      flexWrap: 'wrap'
    }
  }, ['Clarity in an AI-Driven World', 'Authentic, Human Marketing', 'Confident, Sustainable Growth'].map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      flex: '1 1 0',
      textAlign: 'center',
      fontFamily: 'var(--font-heading)',
      fontWeight: 500,
      fontSize: 18,
      color: '#fff'
    }
  }, t)))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CONTAINER,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'start',
      paddingTop: 72,
      paddingBottom: 72
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 30,
      color: 'var(--text-heading)',
      margin: '0 0 10px'
    }
  }, "AI is changing everything."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      fontWeight: 700,
      fontStyle: 'italic',
      color: 'var(--text-heading)',
      margin: '0 0 18px'
    }
  }, "And most business owners are drowning in distraction and overwhelm."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: 1.65,
      color: 'var(--text-body)',
      margin: '0 0 16px'
    }
  }, "You know marketing matters, but:"), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '0 0 18px',
      counterReset: 'lct',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, [['You’re on the edge of your expertise', '—unsure which AI tools, trends, and tactics actually support your goals, and which ones just add noise.'], ['You’re out of time', '—juggling too many roles to slow down, think strategically, and create marketing that truly reflects your voice and values.'], ['You’re feeling disconnected', '—craving authentic, human connection in a world that’s becoming faster, louder, and more automated by the day.']].map(([h, b], i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 24,
      height: 24,
      borderRadius: '50%',
      background: 'var(--surface-tint)',
      color: 'var(--color-primary)',
      fontWeight: 700,
      fontSize: 13,
      fontFamily: 'var(--font-body)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 2
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15.5,
      lineHeight: 1.6,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--color-primary)'
    }
  }, h), b)))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: 1.65,
      color: 'var(--text-body)',
      margin: '0 0 24px'
    }
  }, "AI was supposed to make things easier. But without clear guidance and experienced marketing leadership, it often does the opposite\u2014amplifying confusion, diluting your message, and pulling your attention in too many directions at once."), /*#__PURE__*/React.createElement(Button, {
    onClick: onCTA
  }, "Work With Laura")), /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'start'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/overwhelm-its-not-working.png",
    alt: "Overwhelmed business owner",
    style: {
      width: '100%',
      height: 'auto',
      display: 'block'
    }
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-tint)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CONTAINER,
      display: 'grid',
      gridTemplateColumns: '1fr 1.15fr',
      gap: 48,
      alignItems: 'center',
      paddingTop: 72,
      paddingBottom: 72
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/laura-all-in-with-ai.png",
    alt: "Laura Capes Terry",
    style: {
      width: '100%',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-md)'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 27,
      lineHeight: 1.2,
      color: 'var(--text-heading)',
      margin: '0 0 18px'
    }
  }, "Meet Laura Capes Terry, MBA\u2014", /*#__PURE__*/React.createElement("br", null), "Fractional CMO + Media Consultant"), ['After 30 years in media, branding, and marketing leadership, Laura has seen too many talented entrepreneurs burn out trying to keep up with marketing trends and constant change.', 'She believes there’s a better way — one that blends wisdom, faith, and modern tools, guided by experienced marketing leadership.', 'That’s why Laura guides faith-filled entrepreneurs in harnessing AI with wisdom, clarity, and purpose. Her goal is to help you simplify your marketing, strengthen your message, and scale your business with confidence.'].map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15.5,
      lineHeight: 1.65,
      color: 'var(--text-body)',
      margin: '0 0 14px'
    }
  }, p)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15.5,
      lineHeight: 1.65,
      color: 'var(--text-heading)',
      fontStyle: 'italic',
      fontWeight: 700,
      margin: '0 0 14px'
    }
  }, "AI doesn\u2019t replace heart \u2014 it amplifies it. And you don\u2019t have to figure it out alone."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15.5,
      lineHeight: 1.65,
      color: 'var(--text-body)',
      margin: '0 0 26px'
    }
  }, "Whether you need clarity, consistency, or a complete refresh, Laura meets you at the decision table and helps you move forward with confidence \u2014 one strategic step at a time."), /*#__PURE__*/React.createElement(Button, {
    onClick: onCTA
  }, "Schedule a Discovery Call")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CONTAINER,
      paddingTop: 48,
      paddingBottom: 48,
      display: 'flex',
      gap: 28,
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, [['georgetowns-best-2025.png', 'Georgetown’s Best 2025 — Gold'], ['texas-downtown-award-winner.png', 'Texas Downtown Award Winner'], ['georgetowns-best-2024.png', 'Georgetown’s Best 2024 — Gold'], ['georgetowns-best-2023.png', 'Georgetown’s Best 2023 — Gold'], ['fg-society-certified-marketer.png', 'FG Society Certified Marketer'], ['storybrand-certified-guide.png', 'StoryBrand Certified Guide']].map(([f, alt]) => /*#__PURE__*/React.createElement("img", {
    key: f,
    src: `../../assets/awards/${f}`,
    alt: alt,
    title: alt,
    style: {
      height: 92,
      width: 'auto',
      objectFit: 'contain'
    }
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CONTAINER,
      paddingTop: 'var(--section-pad-y)',
      paddingBottom: 'var(--section-pad-y)'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    title: "How We Can Work Together",
    sub: /*#__PURE__*/React.createElement(React.Fragment, null, "Every partnership begins with clarity and leadership. Laura helps faith-filled entrepreneurs use ", /*#__PURE__*/React.createElement("strong", null, "modern marketing"), " and ", /*#__PURE__*/React.createElement("strong", null, "AI with strategy, purpose, and heart"), "\u2014so you can stop reacting to trends and start leading with focus and confidence.")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 40,
      marginTop: 48
    }
  }, [['AI Strategy Sessions', 'Private 90-minute consultation to evaluate your marketing strategy and identify what’s working, what’s not, and where AI can support your strategy, save time, and amplify your message.', 'Ideal for solopreneurs and business owners ready to simplify their marketing and move forward with direction and peace of mind.'], ['Fractional Strategy & Mentorship', 'Ongoing strategic partnership for growing businesses ready to scale with clarity and consistency. Includes executive-level guidance, AI integration, and a proven system for sustainable growth—without the full-time, executive cost.', 'Ideal for growing teams that want consistent guidance, accountability, and long-term growth.'], ['Leadership Training & Speaking', 'Leadership training for entrepreneurs and teams navigating growth, AI, and constant change—with clarity, discernment, and confidence to use modern tools responsibly—without losing their voice, values, or human connection.', 'Ideal for business owners and leadership teams who want to bring authentic human connection and trust back to their marketing in the age of AI.']].map(([t, b, ideal]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 58,
      height: 58,
      margin: '0 auto 18px',
      borderRadius: 14,
      background: 'var(--surface-tint)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-arrow-trend-up",
    style: {
      color: 'var(--color-primary)',
      fontSize: 24
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 19,
      color: 'var(--text-heading)',
      margin: '0 0 12px'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      margin: '0 0 14px'
    }
  }, b), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--text-heading)',
      fontWeight: 700,
      margin: 0
    }
  }, ideal)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CONTAINER,
      paddingTop: 'var(--section-pad-y)',
      paddingBottom: 'var(--section-pad-y)'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    title: "How to Get Started",
    sub: "Here\u2019s how Laura helps business owners simplify their strategy, save time, and grow with confidence."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 40,
      marginTop: 48,
      marginBottom: 44
    }
  }, [['1', 'Start a Conversation', 'Laura begins by understanding where you are, what you’re working toward, and what’s currently getting in the way.', 'This is a focused, intentional conversation — not a sales pitch.'], ['2', 'Identify What Matters Most', 'Together, you’ll surface quick wins, areas of unnecessary complexity, and where AI or modern tools could help — or where they’re adding noise.', 'You’ll leave with clearer priorities and a recommended next step.'], ['3', 'Decide the Right Path Forward', 'If it makes sense to go deeper, Laura will outline what that could look like.', 'If not, you’ll still walk away with clarity, direction, and confidence about what to do next.']].map(([n, t, b, b2]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      margin: '0 auto 18px',
      borderRadius: '50%',
      background: 'var(--surface-tint-strong)',
      color: 'var(--color-primary)',
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--text-heading)',
      margin: '0 0 12px'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      margin: '0 0 10px'
    }
  }, b), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      margin: 0
    }
  }, b2)))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onCTA
  }, "Work With Laura")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CONTAINER,
      paddingTop: 'var(--section-pad-y)',
      paddingBottom: 'var(--section-pad-y)'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    title: "What Clients Say",
    sub: /*#__PURE__*/React.createElement(React.Fragment, null, "Here\u2019s what business owners and leaders say about working with Laura. ", /*#__PURE__*/React.createElement("a", {
      onClick: onCTA,
      style: {
        color: 'var(--color-primary)',
        fontWeight: 700,
        cursor: 'pointer'
      }
    }, "Read testimonials."))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 36,
      marginTop: 44,
      marginBottom: 44
    }
  }, [['Since partnering with Laura, she’s been an invaluable guide, helping us identify and implement the right strategies for our business. We only regret not reaching out to her sooner.', 'Wendy Del Rio, An Idea Front'], ['We had no experience in marketing and no idea where to start. Laura immediately understood our situation and clearly laid out the steps we needed to take. For the first time, we could see a clear path forward.', 'Wesley Heinige, Bowen Door'], ['From the moment I met Laura, I knew I was in good hands. She’s incredibly knowledgeable, genuinely cares about business owners, and leads with integrity—not pressure.', 'Terry Bingman, The AG Company']].map(([q, who], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-quote-right",
    style: {
      color: 'var(--color-accent)',
      fontSize: 26,
      marginBottom: 14,
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      lineHeight: 1.7,
      color: 'var(--text-body)',
      fontStyle: 'italic',
      margin: '0 0 14px'
    }
  }, q), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      fontWeight: 700,
      color: 'var(--text-heading)',
      margin: 0
    }
  }, who)))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onCTA
  }, "Start a Conversation")))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--surface-dark)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/laura-office-writing.jpg",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.18
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...CONTAINER,
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 48,
      alignItems: 'center',
      paddingTop: 64,
      paddingBottom: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      padding: 28,
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lct-overline",
    style: {
      textAlign: 'center',
      marginBottom: 12
    }
  }, "Free Guide"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 21,
      color: 'var(--text-heading)',
      textAlign: 'center',
      margin: '0 0 12px',
      lineHeight: 1.25
    }
  }, "Does your website clearly explain what you do\u2014and what to do next?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      textAlign: 'center',
      margin: '0 0 18px'
    }
  }, "Download this clarity-first guide to identify what\u2019s working, what\u2019s confusing, and how to make simple homepage improvements that actually help visitors take action."), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onCTA();
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Name",
    "aria-label": "Name"
  }), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Email",
    type: "email",
    "aria-label": "Email"
  }), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Company Name",
    "aria-label": "Company Name"
  }), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Website",
    "aria-label": "Website"
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    fullWidth: true
  }, "Get the Website Clarity Guide")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-muted)',
      textAlign: 'center',
      margin: '12px 0 0'
    }
  }, "We won\u2019t send spam. Unsubscribe at any time.")), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 32,
      margin: '0 0 10px',
      color: "rgb(255, 255, 255)"
    }
  }, "Building Better Websites"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      fontStyle: 'italic',
      color: 'var(--lct-sky-200)',
      margin: '0 0 20px'
    }
  }, "Six clarity-first website fixes \u2014 plus AI prompts to help you implement them faster"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15.5,
      lineHeight: 1.65,
      color: 'rgba(255,255,255,0.92)',
      margin: '0 0 14px'
    }
  }, "If your website feels \u201Calmost right\u201D but not quite effective, it\u2019s often a clarity issue \u2014 not a design problem."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15.5,
      lineHeight: 1.65,
      color: 'rgba(255,255,255,0.92)',
      margin: '0 0 12px'
    }
  }, "This free guide walks you through six simple, high-impact fixes focused on your homepage above the fold so visitors can quickly understand:"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: '0 0 14px',
      paddingLeft: 22,
      color: '#fff',
      fontFamily: 'var(--font-body)',
      fontSize: 15.5,
      lineHeight: 1.9
    }
  }, /*#__PURE__*/React.createElement("li", null, "Who you help"), /*#__PURE__*/React.createElement("li", null, "What you offer"), /*#__PURE__*/React.createElement("li", null, "And what to do next")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15.5,
      lineHeight: 1.65,
      color: 'rgba(255,255,255,0.92)',
      margin: 0
    }
  }, "You\u2019ll also find optional AI prompts you can use as a thinking partner to help you evaluate and improve your site faster \u2014 without losing your voice or overcomplicating the process.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CONTAINER,
      paddingTop: 'var(--section-pad-y)',
      paddingBottom: 'var(--section-pad-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620,
      margin: '0 auto',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-md)',
      border: '1px solid var(--border-subtle)',
      padding: 40
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 28,
      color: 'var(--text-heading)',
      textAlign: 'center',
      margin: '0 0 12px'
    }
  }, "Let\u2019s Start a Conversation"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15.5,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      textAlign: 'center',
      margin: '0 0 26px'
    }
  }, "This is a short, intentional conversation to understand your goals, identify low-hanging opportunities, and recommend a smart next step."), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onCTA();
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Name",
    "aria-label": "Name"
  }), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Email",
    type: "email",
    "aria-label": "Email"
  }), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Company Name",
    "aria-label": "Company Name"
  }), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Phone Number",
    "aria-label": "Phone Number"
  }), /*#__PURE__*/React.createElement(Input, {
    placeholder: "What\u2019s feeling most unclear in your marketing now?",
    "aria-label": "Message"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "submit"
  }, "Start a Conversation")))))));
}

/* Shared bits */
function SectionTitle({
  title,
  sub
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 760,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontWeight: 700,
      fontSize: 30,
      color: 'var(--text-heading)',
      margin: '0 0 14px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      margin: 0
    }
  }, sub));
}
function Placeholder({
  label,
  ratio
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: ratio || '4 / 3',
      borderRadius: 'var(--radius-sm)',
      background: 'repeating-linear-gradient(135deg, #eef2f3, #eef2f3 14px, #e6edef 14px, #e6edef 28px)',
      border: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-muted)',
      fontStyle: 'italic'
    }
  }, label));
}

/* ---------------- SERVICES ---------------- */
function ServicesView({
  onCTA
}) {
  const {
    Button,
    Pill,
    SectionHeading,
    FeatureCard
  } = V;
  const services = [['Fractional CMO', 'Ongoing leadership', 'Strategic marketing direction for your team and message — without the full-time hire. Roadmaps, brand stewardship, and a steady hand at the decision table.'], ['AI Consulting', 'Clarity & systems', 'Adopt the right tools with wisdom and purpose. We simplify your stack, protect your voice, and turn AI into leverage instead of overwhelm.'], ['Brand & Storytelling', 'Message that resonates', 'Sharpen who you are and why people should choose you. StoryBrand-informed messaging that sounds like you and connects with your community.'], ['Local Media', 'BeLocal Georgetown', 'Get in front of the people who matter most through award-winning local media built for Georgetown businesses.']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-tint)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CONTAINER,
      paddingTop: 72,
      paddingBottom: 56,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    style: {
      marginBottom: 18
    }
  }, "Services"), /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    level: "h1",
    title: "Experienced marketing leadership, on your terms",
    lead: "Whether you need clarity, consistency, or a complete refresh, Laura meets you where you are \u2014 one strategic step at a time."
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CONTAINER,
      paddingTop: 'var(--section-pad-y)',
      paddingBottom: 'var(--section-pad-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, services.map(([t, e, b]) => /*#__PURE__*/React.createElement(FeatureCard, {
    key: t,
    eyebrow: e,
    title: t,
    hoverable: true,
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "small",
      onClick: onCTA
    }, "Discuss this")
  }, b))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "large",
    onClick: onCTA
  }, "Schedule a Discovery Call")))));
}

/* ---------------- BLOG ---------------- */
function BlogView({
  onCTA
}) {
  const {
    Pill,
    SectionHeading,
    FeatureCard,
    Button
  } = V;
  const posts = [['Why most businesses measure ROI all wrong', 'Strategy', '../../assets/laura-candid.jpg'], ['Before you hire your next marketing expert, read this', 'Hiring', '../../assets/laura-office-writing.jpg'], ['Marketing should be the lifeline of your business', 'Mindset', '../../assets/belocal-georgetown-cover.jpg'], ['Just launched: the BeLocally Loved podcast', 'News', '../../assets/laura-all-in-with-ai.png']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CONTAINER,
      paddingTop: 64,
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    variant: "soft",
    style: {
      marginBottom: 16
    }
  }, "The Blog"), /*#__PURE__*/React.createElement(SectionHeading, {
    level: "h1",
    title: "Ideas for being seen, trusted & chosen",
    lead: "Practical, faith-informed marketing wisdom for local business owners navigating an AI-driven world."
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...CONTAINER,
      paddingTop: 48,
      paddingBottom: 'var(--section-pad-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 24
    }
  }, posts.map(([t, cat, img]) => /*#__PURE__*/React.createElement(FeatureCard, {
    key: t,
    image: img,
    eyebrow: cat,
    title: t,
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "small",
      onClick: onCTA
    }, "Read article \u2192")
  }, "A quick, human take you can put to work this week."))))));
}
Object.assign(window, {
  HomeView,
  ServicesView,
  BlogView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "views.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Input = __ds_scope.Input;

})();
