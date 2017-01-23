const should = require("chai").should();
const expect = require("chai").expect;
calculateGCD = require("../js/GCD/calculateGCD");

describe("A series of test for calculate GCD of two no.", function(err){
  console.log("asdd");
  it("should calculate the rounded GCD", function(done){
    console.log("asddfd");
       var result=calculateGCD(5,10);
       console.log("asddqweeweq");
       result.should.be.equal(5);
       done();
    });

  it("should only accept numerical value", function(done){
    var result=calculateGCD();
    expect(result).to.be.NaN;
    done();
    });
   it("divisor should be greater than 0",function(done){
    var result=calculateGCD(-5,10);
    expect(result).to.be.NaN;
    done();
   });
   it("divisor should be greater than 0",function(done){
    var result=calculateGCD(-10,5);
    expect(result).to.be.NaN;
    done();
   });
  });
