var car = new Car();

describe("Car", function(){
  it("exists", function(){
    expect(car).toBeDefined();
  });

  it("has a default speed of 0", function(){
    expect(car.speed).toEqual(0);
  });

  it("pressing spacebar increases the speed",function(){
    car.accelerate();
    expect(car.speed).toEqual(0.1);
  });
});
