/**
 * Created by Pritok on 02.02.2016.
 */

// Object car has one property and three methods setSpeed(), getSpeed, clearSpeed
var car = {
    speedometer: 0,
    setSpeed: function(val) {
        this.setSpeedometer = val;
        return this
    },
    getSpeed: function() {
        return this.getSpeedometer;
    },
    clearSpeed: function() {
        return this.clearSpeedometer;
    }
};



Object.defineProperties(car,{
    "setSpeedometer": {
        set: function (val) {
            this.speedometer = val;
        },
        get: function () {
            return this.speedometer;
        }
    },
    "getSpeedometer": {
        get: function () {
            return this.speedometer;
        }
    },
    clearSpeedometer: {
        get: function () {
            this.speedometer = 0;
            return this;
        }
    }
});


console.log(car.setSpeed(200).setSpeed(300).clearSpeed().getSpeed());