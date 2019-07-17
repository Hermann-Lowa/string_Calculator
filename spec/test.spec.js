var importer = require('../string_Cal');
var calculator = importer.add;

describe("Tests for a string calculator", function() {
    it("should return a zero if passed an empty string", function() {
        expect(calculator("")).toBe(0);
    });
    it("should be able to add two numbers", function() {
        expect(calculator("25,25")).toBe(50);
    });
    it("should be able to add multiple numbers", function() {
        expect(calculator("2,2,2,2")).toBe(8);
    });
    it("should be able to handle new lines between numbers", function() {
        expect(calculator("1\n2,3")).toBe(6);
    });
    it("should support multiple delimiters", function() {
        expect(calculator("//;\n1;2")).toBe(3);
    });
    it("should ignore numbers larger than 1000", function() {
        expect(calculator("1001, 24")).toBe(24);
    });
    
    it("should give an error if a negative number is contained within the string to be checked", function() {
        expect(function() {
         calculator("-2").toThrow(new Error("negatives are not allowed, -2"));
        });  
    });
    it("should be able to handle any length of delimiters", function() {
        expect(calculator("//[***]\n1***2***3")).toBe(6);
    });
    it("should allow multiple delimiters", function() {
        expect(calculator("//[*][%]\n1*2%3")).toBe(6);
    });
});