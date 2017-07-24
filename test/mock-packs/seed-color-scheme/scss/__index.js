module.exports = `
// Color :: Config

// Dependencies
@import "./_index";

@function _color($colors...) {
  @return _config(SEED_COLOR_SCHEME__GLOBAL, $colors...);
}
@mixin _color($colors...) {
  @include _config(SEED_COLOR_SCHEME__GLOBAL, $colors...);
}

// Default color scheme map
@if not global-variable-exists(SEED_COLOR_SCHEME__GLOBAL) {
  $SEED_COLOR_SCHEME__GLOBAL: true !global;

  // Base
  @include _color((
    white: #fff,
    black: #000,
  ))

  // Colors
  @include _color((
    // Primary
    blue: (
      default: #3197d6,
      100: #f7fcfe,
      200: #daf1ff,
      300: #aedfff,
      400: #71bff1,
      500: #3197d6,
      600: #237ab3,
      700: #1f5e89,
      800: #194c6e,
      900: #143d57
    ),

    charcoal: (
      default: #394956,
      200: #93a1af,
      300: #72808e,
      400: #4f5d6b,
      500: #394956,
      600: #2a3b47,
      700: #253540,
      800: #1d2b36
    ),

    grey: (
      default: #d6dde3,
      200: #f9fafa,
      300: #f1f3f5,
      400: #e3e8eb,
      500: #d6dde3,
      600: #c1cbd4,
      700: #b4c0ca,
      800: #a5b2bd
    ),

    // Secondary
    yellow: (
      default: #ffc646,
      100: #fffdf6,
      200: #fff6e2,
      300: #ffe8b5,
      400: #ffd56d,
      500: #ffc646,
      600: #f5b126,
      700: #d79400,
      800: #b37100,
      900: #875200
    ),

    green: (
      default: #4bc27d,
      100: #fafdfb,
      200: #e4fbe6,
      300: #c4f0ce,
      400: #81dc9e,
      500: #4bc27d,
      600: #3cb170,
      700: #2f9f62,
      800: #228350,
      900: #23633e
    ),

    red: (
      default: #e52f28,
      100: #fef7f6,
      200: #ffe3e2,
      300: #ffa2a2,
      400: #f45b55,
      500: #e52f28,
      600: #d21b14,
      700: #ba1f19,
      800: #9d1f1a,
      900: #731814
    ),

    purple: (
      default: #7e80e7,
      100: #fbfbfe,
      200: #eaeafc,
      300: #d1d2f6,
      400: #a3a4f3,
      500: #7e80e7,
      600: #696aca,
      700: #585b9e,
      800: #45467d,
      900: #383966
    ),

    orange: (
      default: #ff9139,
      100: #fff8f2,
      200: #ffead8,
      300: #ffd3ae,
      400: #ffa75a,
      500: #ff9139,
      600: #e87800,
      700: #c76400,
      800: #a45300,
      900: #813c00
    ),
  ), default);

  // Namespace: Brand
  @include _color((
    brand: (
      primary: _color(blue, 500),
      danger: _color(red, 500),
      error: _color(red, 500),
      info: _color(blue, 500),
      success: _color(green, 500),
      warning: _color(yellow, 500),
    ),
  ), default);

  // Namespace: Background
  @include _color((
    background: (
      body: #fff,
      ui: (
        default: #fff,
        lighter: _color(grey, 200),
        light: _color(grey, 300),
      ),
    ),
  ), default);

  // Namespace: Border
  @include _color((
    border: (
      default: _color(grey, 400),
      divider: _color(grey, 300),
      ui: (
        default: _color(grey, 500),
        dark: _color(grey, 600),
      ),
    ),
  ), default);

  // Namespace: Text
  @include _color((
    text: (
      default: _color(charcoal, 600),
      subtle: _color(charcoal, 400),
      muted: _color(charcoal, 200),
    ),
  ), default);

  // Namespace: Link
  @include _color((
    link: (
      default: _color(blue, 500),
      hover: _color(blue, 400),
    ),
  ), default);

  // Namespace: States
  @include _color((
    state: (
      danger: (
        background-color: _color(red, 200),
        border-color: _color(red, 500),
        color: _color(red, 800)
      ),
      error: (
        background-color: _color(red, 200),
        border-color: _color(red, 500),
        color: _color(red, 800)
      ),
      info: (
        background-color: _color(blue, 200),
        border-color: _color(blue, 500),
        color: _color(blue, 800)
      ),
      success: (
        background-color: _color(green, 200),
        border-color: _color(green, 500),
        color: _color(green, 800)
      ),
      warning: (
        background-color: _color(yellow, 200),
        border-color: _color(yellow, 500),
        color: _color(yellow, 800)
      ),
    ),
  ), default);
}
`;