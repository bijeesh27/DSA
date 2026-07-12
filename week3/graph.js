// Graph Class Implementation
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    // Add a new vertex to the graph
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    // Add an edge (bidirectional) between two vertices
    addEdge(v1, v2) {
        if (!this.adjacencyList[v1]) this.addVertex(v1);
        if (!this.adjacencyList[v2]) this.addVertex(v2);
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    // Remove an edge between two vertices
    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
    }

    // Remove a vertex and all its edges
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

    // Breadth-First Search (BFS)
    bfs(start) {
        const result = [];
        const visited = {};
        const queue = [start];
        visited[start] = true;

        while (queue.length) {
            const vertex = queue.shift();
            result.push(vertex);

            for (let neighbor of this.adjacencyList[vertex]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
        return result;
    }

    // Depth-First Search (DFS) - Recursive
    dfsRecursive(start) {
        const result = [];
        const visited = {};

        const dfs = (vertex) => {
            if (!vertex) return;
            visited[vertex] = true;
            result.push(vertex);

            for (let neighbor of this.adjacencyList[vertex]) {
                if (!visited[neighbor]) {
                    dfs(neighbor);
                }
            }
        };

        dfs(start);
        return result;
    }

    // Depth-First Search (DFS) - Iterative
    dfsIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        visited[start] = true;

        while (stack.length) {
            const vertex = stack.pop();
            result.push(vertex);

            for (let neighbor of this.adjacencyList[vertex]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            }
        }
        return result;
    }

    // Print the graph's adjacency list
    print() {
        console.log("Graph:", this.adjacencyList);
    }
}

// Create a new graph instance and test the methods
const g = new Graph();

// Add vertices
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

// Add edges
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("E", "F");

// Print graph structure
g.print();

// Traverse the graph
console.log("BFS:", g.bfs("A"));
console.log("DFS Recursive:", g.dfsRecursive("A"));
console.log("DFS Iterative:", g.dfsIterative("A"));

