const brands = [
  "apple",
  "huawei",
  "meizu",
  "samsung",
  "vestel",
  "xiaomi",
  "asus",
  "average"
];

function propertyCounter(brands) {
  const counter = {};
  for (let i = 0; i < brands.length; i++) {
    const brand = brands[i];
    counter[brand] = (counter[brand] || 0) + 1;
  }

  return counter;
}

console.log(propertyCounter(brands));
