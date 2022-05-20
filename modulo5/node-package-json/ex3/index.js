// // EX-3

const tarefas = ["Fumar Pedra", "Lutar com o vizinho", "Lavar Roupas"]

tarefas.push(`${process.argv[2]}`)

let i = 0

console.log("Lista de Tarefas:")
while (tarefas[i]) {
    console.log(`${1 + i} - ${tarefas[i]}`);
    i++
}