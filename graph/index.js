class Graph {
    constructor(isDirected = false) {
        this.isDirected = isDirected;
        this.vertices = [];
        this.adjList = {};
    }

    addVertex(v) {
        if (!this.vertices.includes(v)) {
            this.vertices.push(v);
            this.adjList[v] = [];
        }
    }

    addEdge(v, w) {
        if (!this.adjList[v]) {
            this.addVertex(v);
        }
        if (!this.adjList[w]) {
            this.addVertex(w);
        }
        this.adjList[v].push(w);
        if (!this.isDirected) {
            this.adjList[w].push(v);
        }
    }

    getVertices() {
        return this.vertices;
    }

    getAdjList() {
        return this.adjList;
    }

    toString() {
        let s = '';
        for (let i = 0; i < this.vertices.length; i++) {
            // {15}
            s += `${this.vertices[i]} -> `;
            const neighbors = this.adjList[this.vertices[i]]; // {16}
            for (let j = 0; j < neighbors.length; j++) {
                // {17}
                s += `${neighbors[j]} `;
            }
            s += '\n'; // {18}
        }
        return s;
    }
}

const graph = new Graph();

const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']; // {12}

for (let i = 0; i < myVertices.length; i++) {
    // {13}
    graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B'); // {14}
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log(graph.toString());
