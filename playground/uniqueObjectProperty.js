const array = [
  {
    product: "phone",
    company: "apple"
  },
  {
    product: "computer",
    company: "sharpStore"
  },
  {
    product: "laptop",
    company: "apple"
  }
];

const getUniqueObjectProperty = array => {
  /*
  const tempCompanyArr = array.map(arrItem => {
    return arrItem.company;
  });
  const uniqueCompanyNameArr = [...new Set(tempCompanyArr)];
  return uniqueCompanyNameArr;

  */

  const uniqueCompanyNameArr = [
    ...array.reduce((sum, item) => {
      sum.add(item.company);
      return sum;
    }, new Set())
  ];
  return uniqueCompanyNameArr;
};

console.log(getUniqueObjectProperty(array));
