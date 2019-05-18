// n kids sittin in circle
// k toys available to distribute
// i position to start from

// inputs  ===>>
/*

kids : 3
toys : 5
startFrom : 1

*/

// output  ===>>

/* 
The last kid who gets the last toy is number :  2 

*/

/*
const findTheLastKidWhoGetTheLastToy = (kids, toys, startFrom) => {
  let lastKids = 1;
  for (let i = startFrom; i <= toys; i++) {
    if (kids + 1 === i) {
      lastKids = 1;
    } else {
      lastKids++;
    }
  }
  return lastKids; 
};

*/

const findTheLastKidWhoGetTheLastToy = (kids, toys, startFrom) => {
  if (toys > kids) {
    return startFrom + (toys % kids) - 1;
  } else {
    return startFrom + kids - 1;
  }
};

console.log(findTheLastKidWhoGetTheLastToy(3, 5, 1));
