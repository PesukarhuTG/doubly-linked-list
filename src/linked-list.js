const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
        this._nodes = []; //в массиве хранятся все node (узлы), что были созданы по порядку
    }

    append(data) {
        var newNode = new Node(data, null, null);

        if (this.length == 0) {
           this._head = newNode; //при длине 0 head и tail совпадают
        }

        this._tail = newNode;

        this._nodes.push(newNode); //добавляем в массив

        this.length++; 

        return this; //для последней задачи


    }

    head() {
        if (this._head == null) {
            return null;
        }
        return this._head.data;
    }

    tail() {
        if (this._tail == null) {
            return null;
        }
        return this._tail.data;
    }

    at(index) {
       return this._nodes[index].data; //возвращаем данные i-той node (узла)
    }

    insertAt(index, data) {
       var newNode = new Node(data, null, null); //вставляем не просто data, а создаем новый узел
       this._nodes.splice(index, 0, newNode);
       this.length++; 
       return this; //для последней задачи
    }

    isEmpty() {
        if (this.length === 0) {
            return true;
        }
        return false;
    }

    clear() {
        this._nodes.splice(0, this.length);
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this; //для последней задачи

    }

    deleteAt(index) {
        this._nodes.splice(index, 1);
        this.length--;
        return this; //для последней задачи
    }

    reverse() {
        this._nodes.reverse();
        this._head = this._nodes[0];
        this._tail = this._nodes[this.length-1];
        return this; //для последней задачи
    }

    indexOf(data) {
        for (let i = 0; i < this.length; i++) {
            if (this._nodes[i].data === data) {
                return i;
            }
        }
        return -1;
    }
}

module.exports = LinkedList;
