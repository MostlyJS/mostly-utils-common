import fp from 'mostly-func';

/**
 * string formatting using shell style place holders
 *
 * format string with ${propertyName} placeholder(s) where propertyName is the path of a property of obj
 */
export default function formatter (str, obj) {
  if (typeof str !== "string") {
    return '';
  }

  return str.replace(/\\?\$\{([^\}]+)\}/gm, function (match, p1) {
    if (/^\\/.test(match)) {
      return match.substring(1);
    }
    return fp.dotPath(p1, obj) || '';
  });
}