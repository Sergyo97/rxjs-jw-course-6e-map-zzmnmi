import { forkJoin } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

// Mike works at WellsFargo and likes to drink Corona

const randomName$ = ajax('https://random-data-api.com/api/v2/users').pipe(
  map((ajaxResponse) => ajaxResponse.response.first_name)
);

const randomBank$ = ajax('https://random-data-api.com/api/v2/banks').pipe(
  map((ajaxResponse) => ajaxResponse.response.bank_name)
);

const randomBeer$ = ajax('https://random-data-api.com/api/v2/beers').pipe(
  map((ajaxResponse) => ajaxResponse.response.name)
);

// randomName$.subscribe((value) => console.log(value));

// randomBank$.subscribe((value) => console.log(value));

// randomBeer$.subscribe((value) => console.log(value));

forkJoin(randomName$, randomBank$, randomBeer$).subscribe(
  ([name, bank, beer]) =>
    console.log(`${name} works at ${bank} and likes to drink ${beer}`)
);
