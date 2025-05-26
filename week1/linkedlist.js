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


    print(){
        if(this.head==null){
            console.log("The List Is Empty");
        }else{
            let curr=this.head;
            let listValues=''
            while(curr){
                listValues+=`${curr.value}->`
                curr=curr.next
            }
            console.log(listValues)
        }
    }

}


let list=new LinkedList()

list.print()