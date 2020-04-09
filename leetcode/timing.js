module.exports = (func, ...param) => {
  let start = Date.now();
  const result = func(...param);
  let millis = Date.now() - start;
  console.log(`time elapsed = ${millis}`);
  console.log(result);
};
