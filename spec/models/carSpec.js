
describe('Car', function() {
  

  describe('a default car', function() {
    var car = new Car();
    
    it("exists", function(){
      expect(car).toBeDefined();
    });

    it('has a default width', function(){
      expect(car.width).toEqual(40);
    });

    it('has a default height', function(){
      expect(car.height).toEqual(25);
    });

    it('has a default colour', function(){
      expect(car.colour).toEqual("red");
    });

    it('has a default speed', function(){
      expect(car.speed).toEqual(0);
    });

    it('has a default position', function(){
      expect(car.position).toEqual(0);
    });

  });

  describe('a custom car', function() {

    var car = new Car(60, 30, "blue", 1, 10);

    it('has a width 60', function(){
      expect(car.width).toEqual(60);
    });

    it('has a height of 30', function(){
      expect(car.height).toEqual(30);
    });

    it('has a colour of blue', function(){
      expect(car.colour).toEqual("blue");
    });

    it('has a speed of 1', function(){
      expect(car.speed).toEqual(1);
    });

    it('has a position of 10', function(){
      expect(car.position).toEqual(10);
    });
  });

 describe('car methods', function(){
   var car = new Car();
   
   it("accelerate increases the speed",function(){
    car.accelerate();
    expect(car.speed).toEqual(0.1);
  });
 });
});
