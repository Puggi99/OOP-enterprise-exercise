// ORDINI
const order1 = new Order('Penna', 4, 2)
const order2 = new Order('Matita', 6, 1)
const order3 = new Order('Righello', 3, 2.50)
const order4 = new Order('Quaderno', 3, 7.30)
const order5 = new Order('Libro', 3, 8.50)

// console.log(order1)
// console.log(order2)
// console.log(order3)
// console.log(order4)
// console.log(order5)


// CLIENTI
const client1 = new Client('Andrei', 'Andrescu', 'Via Francia 88/2', [order1, order3, order5])
const client2 = new Client('Valentin', 'Tudureanu', 'Via Mario 32/4', [order2, order1, order4])
const client3 = new Client('Luca', 'Traverso', 'Via Genoa 44/1', [order3, order1, order4])
const client4 = new Client('Simone', 'Tagliafico', 'Via Letto 12/4', [order2, order5, order1])
const client5 = new Client('Simone', 'Incerti', 'Via FintoGenoano 10/2', [order4, order2, order5])
const client6 = new Client('Davide', 'Bartolozzi', 'Via Ragequit 4/10', [order1, order4, order5])


const client7 = new Client('Aurora', 'Bozzano', 'Via Fabbriche 18/1', [order3])
// console.log(client2.toString())
// console.log(client2)
// console.log(client3)
// console.log(client4)
// console.log(client5)


// IMPIEGATI

const employee1 = new Employee('Simona', 'Postelnicu', [client5, client3, client1])
const employee2 = new Employee('Angelica', 'Cistaro', [client1, client2, client6])
console.log(employee1.numberOfClients())

const employee3 = new Employee('Mirko', 'Puppo', [client1])

// console.log(employee1)
// console.log(employee1.sumOfEarnings())
// console.log(employee1.numberOfClients())
// employee1.addClient(client7)
// console.log(employee1.clients)
// console.log(employee1.numberOfClients())
// employee1.removeClient(client7)
// console.log(employee1.clients)


// MANAGER
const manager = new Manager('Daniele', 'Puggioni', [employee1, employee2])

// console.log(manager.allEarnings())
// manager.hire(employee3)
// console.log(manager.totalEmployee())
// manager.fire(employee1)
// console.log(manager.totalEmployee())
