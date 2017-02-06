$(function () {
	var days, hours, minutes, seconds
	var daysHolder, hoursHolder, minutesHolder, secondsHolder
	
	//main caller to start the timer
	initialize = function (daysHolder, hoursHolder, minutesHolder, secondsHolder) {
		var self = this;
		self.daysHolder = daysHolder;
		self.hoursHolder = hoursHolder;
		self.minutesHolder = minutesHolder;
		self.secondsHolder = secondsHolder;

		self.resetTimes();
		self.startTimer();
	}

	//resets times to zero
	resetTimes = function () {
		var self = this;
		self.days = 0;
		self.hours = 0;
		self.minutes = 0;
		self.seconds = 0;
	}

	//starts the timer
	startTimer = function () {
		var self = this;
		setInterval(function () {
			self.seconds += 1;
			$.when(self.adjustCounters()).done(self.updateUI());
		}, 1000);
	}

	//adjusts the internal Counters
	adjustCounters = function() {
		var self = this;
		if (self.seconds === 60) {
			self.seconds = 0;
			self.minutes += 1;
		}
		if (self.minutes === 60) {
			self.minutes = 0;
			self.hours += 1;
		}
		if (self.hours === 24) {
			self.hours = 0;
			self.days += 1;
		}
	}

	//updates the counters on the UI
	updateUI = function() {
		var self = this;
		self.daysHolder.html(self.days);
		self.hoursHolder.html(self.hours);
		self.minutesHolder.html(self.minutes);
		self.secondsHolder.html(self.seconds);
	}

});