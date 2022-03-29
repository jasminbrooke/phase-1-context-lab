/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employeeRecords) {
    return employeeRecords.map(employeeRecord => createEmployeeRecord(employeeRecord))
}

function createTimeInEvent(dateTime) {
    const timeInEvent = {}
    const [_date, hour] = dateTime.split(" ");
    timeInEvent.type = "TimeIn"
    timeInEvent.date = dateTime.split(" ")[0]
    timeInEvent.hour = parseInt(hour, 10)
    this.timeInEvents.push(timeInEvent)
    return this;
}

function createTimeOutEvent(dateTime) {
    const timeOutEvent = {}
    const [_date, hour] = dateTime.split(" ");
    timeOutEvent.type = "TimeOut"
    timeOutEvent.date = dateTime.split(" ")[0]
    timeOutEvent.hour = parseInt(hour, 10)
    this.timeOutEvents.push(timeOutEvent)
    return this;
}

function hoursWorkedOnDate(dateTime) {
    const timeIn = this.timeInEvents.find(obj => obj.date === dateTime).hour
    const timeOut = this.timeOutEvents.find(obj => obj.date === dateTime).hour
    return (timeOut - timeIn)/100
}

function wagesEarnedOnDate(dateTime) {
    const hours = hoursWorkedOnDate.call(this, dateTime)
    const payRate = this.payPerHour
    const wages = (payRate * hours)
    return wages
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(record => record.firstName === firstName)
}

function calculatePayroll(arrayOfEmployeeRecords) {
    return arrayOfEmployeeRecords.reduce(function(memo, record) {
        return memo + allWagesFor.call(record)
    }, 0)
}