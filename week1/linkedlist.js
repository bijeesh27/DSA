//Linked List

class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}


class LinkedList{
    constructor(){
        this.head=null;
    }

    prepend(value){
        let node = new Node(value)
        if(this.head==null){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
    }


    print(){
        if(this.head==null){
            console.log("The List Is Empty");
        }else{
            let curr=this.head;
            let listValues=''
            while(curr){
                listValues+=`${curr.value} -> `
                curr=curr.next
            }
            console.log(listValues)
        }
    }

}


let list=new LinkedList()

list.prepend(4)
list.prepend(2)
list.prepend(6)
list.prepend(3)

list.print()