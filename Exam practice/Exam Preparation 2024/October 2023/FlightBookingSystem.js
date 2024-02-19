class FlightBookingSystem {

    agencyName;

    constructor(agencyName) {

        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price) {

        const flightMatch = this.flights.find(flight => flight.flightNumber == flightNumber);

        if (flightMatch) {

            return `Flight ${flightNumber} to ${destination} is already available.`;

        } else {
            let flight = {
                flightNumber,
                destination,
                departureTime,
                price
            };
            this.flights.push(flight);
            return `Flight ${flightNumber} to ${destination} has been added to the system.`;
        }
    }

    bookFlight(passengerName, flightNumber) {

        const flightMatch = this.flights.find(flight => flight.flightNumber == flightNumber);

        if (!flightMatch) {
            return `Flight ${flightNumber} is not available for booking.`;

        } else {
            let booking = {
                passengerName,
                flightNumber,
                price: flightMatch.price,
            };
            this.bookings.push(booking);
            this.bookingsCount++;
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
        }
    }

    cancelBooking(passengerName, flightNumber) {

        const bookingMatch = this.bookings.find(flight => flight.passengerName == passengerName && flight.flightNumber == flightNumber);
        if (!bookingMatch) {
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
        } else {
            let bookingIndex = this.bookings.findIndex(flight => {
                return flight.passengerName == passengerName && flight.flightNumber == flightNumber;
            });
            this.bookings.splice(bookingIndex, 1);
            this.bookingsCount--;
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
        }
    }

    showBookings(criteria) {

        if (this.bookings.length == 0) {

            throw new Error(`No bookings have been made yet.`);
        }

        if (criteria == "all") {

            let result = [
                `All bookings(${this.bookingsCount}):`,
            ];
            for (const {passengerName, flightNumber} of this.bookings) {
                result.push(`${passengerName} booked for flight ${flightNumber}.`);
            }
            return result.join('\n');
            
        } else if (criteria == 'cheap') {
            let filteredCheap = this.bookings.filter(flight => flight.price <= 100);
            if (filteredCheap.length == 0) {
                return "No cheap bookings found.";
            } else {
                let result = [
                    'Cheap bookings:',
                ];
                for (const {passengerName, flightNumber} of filteredCheap) {
                    result.push(`${passengerName} booked for flight ${flightNumber}.`);
                }
                return result.join('\n');
            }
        } else if (criteria == 'expensive') {
            let filteredExpensive = this.bookings.filter(flight => flight.price > 100);
            if (filteredExpensive.length == 0) {
                return "No expensive bookings found."
            } else {
                let result = [
                    'Expensive bookings:',
                ];
                for (const {passengerName, flightNumber} of filteredExpensive) {
                    result.push(`${passengerName} booked for flight ${flightNumber}.`);
                }
                return result.join('\n');
            }
        }
    }
}

try {
    test1();
} catch (error) {
    console.error("------------Test 1--------------------");
}
try {
    test2();
} catch (error) {
    console.error("------------Test 2--------------------");
}
try {
    test3();
} catch (error) {
    console.error("------------Test 3--------------------");
}
try {
    test4();
} catch (error) {
    console.error("------------Test 4--------------------");
}
try {
    test5();
} catch (error) {
    console.error("------------Test 5--------------------");
}

function test1() {
    const system = new FlightBookingSystem("TravelWorld");
    console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
    console.log(system.addFlight("BB202", "New York", "10:30 AM", 100));
    console.log(system.addFlight("CC303", "Chicago", "11:45 AM", 120));
    console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
    console.log(system.bookFlight('Alice', "AA101"));
    console.log(system.bookFlight("Dan", "BB202"));
    console.log(system.cancelBooking("Alice", "AA101"));
    console.log(system.showBookings("cheap"));
}

function test2() {
    const system = new FlightBookingSystem("TravelWorld");
    console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
    console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
    console.log(system.bookFlight("Alice", "AA101"));
    console.log(system.bookFlight("Bob", "BB202"));
    console.log(system.bookFlight("Charlie", "CC303"));
}

function test3() {
    const system = new FlightBookingSystem("TravelWorld");
    console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
    console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
    console.log(system.bookFlight("Alice", "AA101"));
    console.log(system.bookFlight("Bob", "BB202"));
    console.log(system.cancelBooking("Alice", "AA101"));
}

function test4() {
    const system1 = new FlightBookingSystem("TravelWorld");
    console.log(system1.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
    console.log(system1.addFlight("BB202", "New York", "10:30 AM", 180));
    console.log(system1.bookFlight("Alice", "AA101"));
    console.log(system1.bookFlight("Bob", "BB202"));
    console.log(system1.showBookings("all"));
}

function test5() {
    const system = new FlightBookingSystem("TravelWorld");
    console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
    console.log(system.addFlight("BB202", "New York", "10:30 AM", 100));
    console.log(system.bookFlight("Alice", "AA101"));
    console.log(system.bookFlight("Bob", "BB202"));
    console.log(system.showBookings("expensive"));
    console.log(system.showBookings("cheap"));
}