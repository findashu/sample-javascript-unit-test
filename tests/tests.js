// var mod = import('../project-modules/main');
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            chai.assert.equal(-1, [1, 2, 3].indexOf(5));
            chai.assert.equal(-1, [1, 2, 3].indexOf(0));
        });
    });
});

describe('Add Functions Tests', () => {
    it('should add 2 numbers', () => {
        chai.assert.equal(2,add(1,1));
        chai.assert.equal(5,add(2,3));
    });
    it('should return error when passed wrong parameter', () => {
        chai.assert.equal('Parameters should be type number',add('a',1))
        chai.assert.equal('Parameters should be type number',add(2,'a'))
    });
});

describe('AJAX Tests', function() {
    var expected = 200;
   

    it("should $.ajax &amp; invoke callback", function (done) {
        getUser("5c29f0fe16252fa125e47e2e", function (err,tweets) {
            chai.expect(tweets).to.equal(200);
            done();
        });
    });
})