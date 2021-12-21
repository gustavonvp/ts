const { Observable } = Rx;

const observable = new Observable((subscriber) => {
   // Throw the value 1 into our pipeline
 		subscriber.next(1);
  
  subscriber.error(new Error('terapia'));
  
  // Marks the observable as complete, no more values will come out
  subscriber.complete();

  
  
 
});

observable.subscribe({
  next(value)
  {
  	console.log('Got a value', value);
  
  },
  
  complete() { 
  		console.log('Observable is complete. Dont expect any more values');  
  },
  
  error(err){
  	console.log('BaD THING!!!!', err.message);
  },
  
});

observable;