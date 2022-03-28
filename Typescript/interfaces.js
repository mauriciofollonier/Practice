// Interfaces
var Role;
(function (Role) {
    Role[Role["Doctor"] = 0] = "Doctor";
    Role[Role["Nurse"] = 1] = "Nurse";
    Role[Role["Assistant"] = 2] = "Assistant";
    Role[Role["Security"] = 3] = "Security";
    Role[Role["Administrative"] = 4] = "Administrative";
})(Role || (Role = {}));
var John = {
    name: "John Baptist",
    email: "jbjonshon@test.com",
    role: Role.Doctor
};
var Johanna = {
    name: "Johanna Muller",
    email: "johan_muller@test.com",
    role: Role.Nurse,
    total: 250,
    currentTicket: function () {
        return "The total to pay is ".concat(this.total);
    }
};
// Without interface
/* const printStaff = (staff: {name: string, email: string, role: Role}) =>  {
    console.log(staff)
} */
// With interface
var printStaff = function (staff) {
    console.log(staff);
};
var printCurrentTicket = function (ticket) {
    console.log(ticket.currentTicket());
};
printStaff(John);
printCurrentTicket(Johanna);
// Differencies with Types
// Interface only can define the structure for Objects
// Types is more flexible and not only can define an Object also Data Types like array, string, number, etc
