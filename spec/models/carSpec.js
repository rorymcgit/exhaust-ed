
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

    it('has a default bhp', function(){
      expect(car.bhp).toEqual(0.05);
    });

    it('has a default colour', function(){
      expect(car.colour).toEqual("red");
    });

    it('has a default speed', function(){
      expect(car.speed).toEqual(0);
    });

    it('has a default X position', function(){
      expect(car.xPosition).toEqual(0);
    });

    it('has a default Y position', function(){
      expect(car.yPosition).toEqual(0);
    });

  });

  describe('a custom car', function() {

    var car = new Car(60, 30, "blue", 1, 10, 10, 0.01);

    it('has a width 60', function(){
      expect(car.width).toEqual(60);
    });

    it('has a height of 30', function(){
      expect(car.height).toEqual(30);
    });

    it('has a bhp', function(){
      expect(car.bhp).toEqual(0.01);
    });

    it('has a colour of blue', function(){
      expect(car.colour).toEqual("blue");
    });

    it('has a speed of 1', function(){
      expect(car.speed).toEqual(1);
    });

    it('has an X position of 10', function(){
      expect(car.xPosition).toEqual(10);
    });

    it('has a Y position of 10', function(){
      expect(car.yPosition).toEqual(10);
    });
  });

 describe('methods', function(){

   beforeEach(function(){
     car = new Car();
   });

   it("accelerate increases the speed",function(){
    car.accelerate();
    expect(car.speed).toEqual(0.05);
   });

  it("updates the car's position",function(){
    car.accelerate();
    car.moveForward();
    expect(car.getPosition()).toEqual({'xCoord': 0.05, 'yCoord':0});
  });

  it("can move the car up",function(){
    car.moveDown();
    car.moveUp();
    expect(car.yPosition).toEqual(0);
  });

  it("cannot move the car up past Y = 0",function(){
    car.moveUp();
    expect(car.yPosition).toEqual(0);
  });

  it("can move the car down",function(){
    car.moveDown();
    expect(car.yPosition).toEqual(1);
  });

  it("cannot move the car down past Y = MAX",function(){
    car.yPosition = 275;
    car.moveDown();
    expect(car.yPosition).toEqual(275);
  });

 });
});
