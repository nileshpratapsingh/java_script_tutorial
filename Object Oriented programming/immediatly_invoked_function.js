const a = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Chutiye");
    }, 800);
  });
};

(async () => {
  const f = await a();
  console.clear();
  console.log(f);
  const g = await a();
  console.log(g);
  const h = await a();
  console.log(h);
})();
