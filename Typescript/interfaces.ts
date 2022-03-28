// Interfaces

enum Role { Doctor, Nurse, Assistant, Security, Administrative }

interface Staff {
  name: string,
  email: string,
  role: Role
}
interface Ticket {
  total: number,
  currentTicket(): string
}

const John = {
    name: "John Baptist",
    email: "jbjonshon@test.com",
    role: Role.Doctor
}
const Johanna = {
  name: "Johanna Muller",
  email: "johan_muller@test.com",
  role: Role.Nurse,
  total: 250,
  currentTicket() {
    return `The total to pay is ${this.total}`
  } 
}
// Without interface
/* const printStaff = (staff: {name: string, email: string, role: Role}) =>  {
    console.log(staff)
} */
// With interface
const printStaff = (staff: Staff) =>  {
  console.log(staff)
}
const printCurrentTicket = (ticket: Ticket) => {
  console.log(ticket.currentTicket())
}
printStaff(John)
printCurrentTicket(Johanna)


// Differencies with Types
// Interface only can define the structure for Objects
// Types is more flexible and not only can define an Object also Data Types like array, string, number, etc