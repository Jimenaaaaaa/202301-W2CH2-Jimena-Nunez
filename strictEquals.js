export const strictEquals = (x, y) => {
  if (Object.is(x, NaN) && Object.is(y, NaN)) {
    return false;
  } else if (Object.is(x, 0) && Object.is(y, -0)) {
    return true;
  } else if (Object.is(x, -0) && Object.is(y, 0)) {
    return true;
  } else {
    return Object.is(x, y);
  }
};
