const objects = {
  name: "Tawhid Abdullah",
  roll: "967021"
};

const covertTheValueToAnArray = Object.values(objects);
console.log(covertTheValueToAnArray);

//////////////////////////////

const obj = {
  a: 1,
  b: 2,
  getA() {
    console.log(this.a);
    return this;
  },
  getB() {
    console.log(this.b);
  }
};

obj.getA().getB();

////////////////// CLONE A Object

const obj = {
  a: {
    b: {
      c: 1
    }
  }
};

const clone = JSON.parse(JSON.stringify(obj));
clone.a.b.c = "Tawhid Abdullah";

console.log(clone);
console.log("obj : ", obj);

// this binding

const obj = {
  a: 1,
  b: 2,
  getA() {
    const inner = function() {
      console.log(this.a);
    }.bind(this);
    inner();
  }
};

obj.getA();
