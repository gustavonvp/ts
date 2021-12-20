// const add = (a: number, b: number) => {
//     return a + b;
// };

// const joinStrings = (a: string, b:string): string => {
// return a + b ;
// };


interface PostGateKeeper {
    title: string;
    daysOld: number;
    published: boolean;
}


function add(a: number, b:number ): number{
    return a + b;
}


const joinString = function(a: string, b: string):  string{
    if(10/10 === 1){
        return 'poksaoksa';
    }else if (true) {
        if(10/10 === 1){

        }else if (true) {
                if(10/10 === 1){
                    return 'kopaspoksa'
                }else if (true) {
                    return 'sakopsakopas'
                }
        }
    }
}

const post = {
    title: 'Latest Typescript News',
    daysOld: 10,
    published: true,
};

const printPost = (postToPrint: PostGateKeeper) => {
    return `${postToPrint.title} (${postToPrint.daysOld} days old)`;
};


printPost(post);

class Carrasc {

constructor(public color: string, private year: number) {
    this.color = color;
    this.year = year;

}


public drive() {
    this.putInGear();
    this.pressPedal();
    this.turnWhell();
    
}

private putInGear() {
    
}

private pressPedal() {

}

private turnWhell() {

}



}

const myCar = new Carrasc('red', 2000);
myCar.drive();
myCar.putInGear();

console.log(myCar.color, myCar.year);



