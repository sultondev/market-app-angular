/**
 * @typedef Screens
 * @prop {number} phone The size phone
 * @prop {number} tablet The size tablet
 * @prop {number} xlTablet The size xlTablet
 * @prop {number} laptop The size laptop
 * @prop {number} pc The size pc
 * @prop {number} xlPc The size xlPc
 * @prop {number} xxlPc The size xxlPc
 */

/**
 * @typedef ScreensWithPx
 * @prop {string} phone The size phone
 * @prop {string} tablet The size tablet
 * @prop {string} xlTablet The size xlTablet
 * @prop {string} laptop The size laptop
 * @prop {string} pc The size pc
 * @prop {string} xlPc The size xlPc
 * @prop {string} xxlPc The size xxlPc
 */

/** @type {Screens} */
const screens = Object.freeze({
  phone: 414,
  xlPhone: 575,
  tablet: 768,
  miniXLTablet: 900,
  xlTablet: 992,
  laptop: 1200,
  pc: 1400,
  xlPc: 1600,
  xxlPc: 1700,
});

/** @type {ScreensWithPx} */
const screensWithPx = Object.freeze(
  Object.entries(screens).reduce((a, v) => ({ ...a, [v[0]]: v[1] + "px" }), {})
);

export { screens, screensWithPx };
