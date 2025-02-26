// case insensitive, digits to number interpolation
export const naturalSort = function (as, bs) {
  let a,
    b,
    a1,
    b1,
    i = 0,
    L,
    rx = /(\d+)|(\D+)/g,
    rd = /\d/;
  if (isFinite(as) && isFinite(bs)) return as - bs;
  a = String(as).toLowerCase();
  b = String(bs).toLowerCase();
  if (a === b) return 0;
  if (!(rd.test(a) && rd.test(b))) return a > b ? 1 : -1;
  a = a.match(rx);
  b = b.match(rx);
  L = a.length > b.length ? b.length : a.length;
  while (i < L) {
    a1 = a[i];
    b1 = b[i++];
    if (a1 !== b1) {
      if (isFinite(a1) && isFinite(b1)) {
        if (a1.charAt(0) === '0') a1 = '.' + a1;
        if (b1.charAt(0) === '0') b1 = '.' + b1;
        return a1 - b1;
      } else return a1 > b1 ? 1 : -1;
    }
  }
  return a.length - b.length;
};

/**
 * Format durations
 */
export const to_duration = function (duration) {
  if (duration > 60 * 60 * 1000) {
    return to_hour_duration(duration);
  } else if (duration > 60 * 1000) {
    return to_min_duration(duration);
  }

  return to_secs_duration(duration);
};

export const to_secs_duration = function (duration) {
  const total_secs = duration / 1000;
  const secs = total_secs % 60;

  return `${Math.floor(secs)} segundos`;
};

export const to_min_duration = function (duration) {
  const total_secs = duration / 1000;
  const minutes = total_secs / 60;
  const secs = total_secs % 60;

  return `${Math.floor(minutes)}:${('' + Math.floor(secs)).padStart(2, 0)} min`;
};

export const to_hour_duration = function (duration) {
  const total_secs = duration / 1000;
  const total_minutes = total_secs / 60;
  const hours = total_minutes / 60;
  const minutes = total_minutes % 60;
  const secs = total_secs % 60;

  return `${('' + Math.floor(hours)).padStart(2, 0)}:${('' + Math.floor(minutes)).padStart(
    2,
    0
  )}:${('' + Math.floor(secs)).padStart(2, 0)} horas`;
};
