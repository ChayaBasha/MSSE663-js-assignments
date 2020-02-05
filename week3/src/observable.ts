// Source code here
import {of} from 'rxjs';
import {map} from 'rxjs/operators';

const heroine$ = of("Sarah","Rivkah", "Rachel", "Leah");

const heroinesWithReference$ = heroine$.pipe(map((heroine: string, index: number) => heroine + " " + "Imanu" ));

heroinesWithReference$.subscribe(console.log);
