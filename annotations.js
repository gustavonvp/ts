const  { fromEvent } = Rx;
const { map } = RxOperators;

const input = document.createElement('input');
const container = document.querySelector('.container');
container.appendChild(input);

const observable = fromEvent(input, 'input')
	.pipe(
  	map(event => event.target.value),
    map(value => parseInt(value)),
    map(value => {
      if(isNaN(value)) {
        throw new Error('Enter a number!');
      	}
      return value;
      })
    )
 

observable;