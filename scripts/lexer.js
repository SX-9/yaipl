module.exports = (raw) => raw
  .split('\n')
  .map(line => {
    if (line.startsWith('#')) return;
    return line.split('#')[0].trim();
  })
  .filter(code => code)
  .map(code => code.match(/(?:[^\s"]+|"[^"]*")+/g))
  .map(i => 
    i.map(i2 => {
      if (!isNaN(i2)) return parseInt(i2);
      return i2.replace(/"/g, '');
    })
  );