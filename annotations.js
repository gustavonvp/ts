const  { fromEvent } = Rx;
const { map } = RxOperators;

const input = document.createElement('input');
const container = document.querySelector('.container');
container.appendChild(input);

const observable = fromEvent(input, 'input')
	.pipe(
  	map(event => console.log(event)),
    map(event => console.log(value))
    	)
 

observable;