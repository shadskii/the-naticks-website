
const checkBounds = (width, height) =>{
  const ratio = window.devicePixelRatio || 1;
  const screen = {
    width: Math.floor(window.screen.width * ratio),
    height: Math.floor(window.screen.height * ratio),
  };
  return screen.width === width && screen.height === height;
};

  /**
   * @return {Boolean} true if screen is iphone X and false otherwise.
   */
export function isIphoneX() {
  return isIos() && checkBounds(1125, 2436);
}

/**
   * @return {Boolean} True if device is iOS and false otherwise.
   */
export function isIos() {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test( userAgent );
}

/**
   * @return {Boolean} True if device is running as a progressive web app.
   */
export function isPwa() {
  return ('standalone' in window.navigator) && (window.navigator.standalone);
}

