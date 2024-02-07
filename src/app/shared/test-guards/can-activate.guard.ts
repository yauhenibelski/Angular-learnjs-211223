import {CanActivateFn} from '@angular/router';
import {question} from './question';

export const canActivateGuard: CanActivateFn = (_route, _state) => {
    return question('Можно ли перейти по данному пути?');
};
