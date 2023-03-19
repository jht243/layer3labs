export function sleep (sec: number) {
  return new Promise((resolve) => setTimeout(resolve, sec * 1000))
}

export function romanize (num: number) {
  if (isNaN(num)) {
    return NaN;
  }

  const digits = String(+num).split('');
  const key = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM',
        '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC',
        '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
  let roman = '';
  let i = 3;

  while (i--) {
    if (digits) {
      // @ts-ignore
      roman = (key[+digits.pop() + (i * 10)] || '') + roman;
    }
  }
  return Array(+digits.join('') + 1).join('M') + roman;
}
