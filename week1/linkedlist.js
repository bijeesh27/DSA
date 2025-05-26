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

 // Prepend - adding an element to the START of the list
    
    prepend(value){
        let node = new Node(value)
        if(this.head==null){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
    }

// Append - adding an element to the END of the list

    append(value){
        let node= new Node(value)
        if(this.head==null){
            this.head=node
        }else{
            let prev=this.head
            while(prev.next){
                prev=prev.next
            }
            prev.next=node
        }
    }

// Print - display the contents of the list

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

list.append(2)
list.append(5)
list.append(8)
list.append(9)

list.print()