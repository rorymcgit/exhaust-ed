describe('Obstacle', function() {

  describe('a default obstacle', function() {
    var obstacle = new Obstacle();

    it("exists", function(){
      expect(obstacle).toBeDefined();
    });

    it('has a default width', function(){
      expect(obstacle.width).toEqual(1);
    });

    it('has a default height', function(){
      expect(obstacle.height).toEqual(100);
    });

    it('has a default colour', function(){
      expect(obstacle.colour).toEqual("black");
    });

    it('has a default X position', function(){
      expect(obstacle.xPosition).toEqual(100);
    });

    it('has a default Y position', function(){
      expect(obstacle.yPosition).toEqual(100);
    });

  });

  describe('a custom obstacle', function(){
    var obstacle = new Obstacle(10,50, "red", 150, 200);
  });

});
