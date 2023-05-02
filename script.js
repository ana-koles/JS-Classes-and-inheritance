function Builder (value) {
    this.value = value;
}

Builder.prototype.plus = function () {
        const arr = [...arguments];
        this.value = arr.reduce((sum, current) => sum += current, this.value);
        console.log(this.value);
        return this;
};

Builder.prototype.minus = function () {
    console.log("Not implemented");
};

Builder.prototype.multiply = function () {
    console.log("Not implemented");
};

Builder.prototype.divide= function () {
    console.log("Not implemented");
};

Builder.prototype.get = function () {
        return this.value;
};


class IntBuilder extends Builder {
    constructor (value) {
        super(value);
        if (typeof(value) !== 'number') {
            this.value = 0;
        }
    }

    static random (from, to) {
        console.log(Math.floor(Math.random() * (to - from) + from));
    };

    minus (...n) {
        for (let num of n) {
            this.value -= num;
        }
        console.log( this.value);
        return this;
    };

    multiply (n) {
        this.value = this.value * n;
        console.log(this.value);
        return this;
    };

    divide (n) {
        this.value = Math.floor(this.value / 4);
        console.log(this.value);
        return this;
    };

    mod(n) {
        this.value = this.value % n;
        console.log(this.value);
        return this;
    }
}


function StringBuilder (value) {
    Builder.call(this, value);

    if (typeof(this.value) !== 'string') {
        this.value = '';
    };
}

StringBuilder.prototype = Object.create(Builder.prototype);

StringBuilder.prototype.minus = function(n) {
    this.value = this.value.split('').slice(0, -n).join('');
    console.log(this.value);
    return this;
};

StringBuilder.prototype.multiply = function(int) {
    this.value = this.value.repeat(int);
    console.log(this.value);
    return this;
};

StringBuilder.prototype.divide = function(n) {
    const k = Math.floor(this.value.length / n);
    this.value = this.value.split('').slice(0, k).join('');
    console.log(this.value);
    return this;
};

StringBuilder.prototype.remove = function(n) {
    this.value = this.value.split('');
    for (let i = 0; i < this.value.length; i++) {
        if (this.value[i] === n) {
            this.value.splice(i, 1);
            i--;
        }
    }
    this.value = this.value.join("");
    console.log(this.value);
    return this;
};

StringBuilder.prototype.sub = function(from, n) {
    this.value = this.value.split('').slice(from, from+n).join('');
    console.log(this.value);
    return this;
};

let intBuilder = new IntBuilder(10);
intBuilder.plus(2, 3, 2)
          .minus(1, 2)
          .multiply(2)
          .divide(4)
          .mod(3)
          .get();

IntBuilder.random(10, 100);

let strBuilder = new StringBuilder('Hello');
strBuilder.plus(' all', '!')
          .minus(4)
          .multiply(3)
          .divide(4)
          .remove('l')
          .sub(1, 2)
          .get();


