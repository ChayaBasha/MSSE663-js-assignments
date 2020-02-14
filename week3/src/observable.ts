// Source code here
import {of} from 'rxjs';
import {map} from 'rxjs/operators';

export const heroine$ = of("Sarah","Rivkah", "Rachel", "Leah");

export const heroinesWithReference$ = heroine$.pipe(map((heroine: string, index: number) => heroine + " " + "Imanu" ));

heroinesWithReference$.subscribe(console.log);
