const { Observable } = Rx;
const { tap, share  } = RxOperators;

const observable = new Observable((subscriber) => {
   // Throw the value 1 into our pipeline
 	subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
  
  subscriber.error(new Error('terapia'));
  
//   // Marks the observable as complete, no more values will come out
//   subscriber.complete();

 
}).pipe(tap(value => console.log('From tap:', value)),
    share()
);

observable.subscribe(
    (value) => console.log('Next value:', value),
    (err) => console.log('BaD THING!!!!', err.message),
    () => console.log('COMPLETE') //completition
);


observable.subscribe((value) => {
  console.log('From second subscribe'
, value);
});
  
//observable
new Observable(() => {});