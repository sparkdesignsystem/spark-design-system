const getArrowClass = (rect, scrollTop, innerHeight) => {
  const inputTop = scrollTop + rect.top;
  const aboveTop = inputTop - 366 - 8;
  const belowTop = inputTop + rect.height + 8;

  return aboveTop > 0 && belowTop + 366 > scrollTop + innerHeight
    ? 'dp-above-top'
    : 'dp-below-top';
};

export { getArrowClass as default };
