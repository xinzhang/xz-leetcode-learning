function test(val) {
  return "abc " + val;
}

test.prototype.name = n => {
  console.log(n);
};

const t = new test("ghz");
t.name("abc");
