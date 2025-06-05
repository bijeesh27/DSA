// Hash Table

class Hash{
    constructor(size){
        this.size=size
        this.table=new Array(size)
    }

    hash(key){
        let hash=0
        for(let char of key){
            hash += char.charCodeAt(0)
        }
        return hash%this.size
    }

    set(key,value){
        let index=this.hash(key)
        this.table[index]=value
    }

    get(key){
        let index=this.hash(key)
        return this.table[index]
    }
    
    remove(key){
        let index=this.hash(key)
        this.table[index]=undefined
    }

    display(){
        console.log(this.table)
    }

}


let h=new Hash(10)

// h.set("name","bijeesh")
// h.set('ma','jenitta')

// h.set('age',22)
// h.remove("name")
// console.log(h.get("name"))


h.display()



