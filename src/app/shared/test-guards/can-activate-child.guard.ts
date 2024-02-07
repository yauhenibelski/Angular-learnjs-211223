import {CanActivateChildFn} from '@angular/router';
import {question} from './question';

export const canActivateChildGuard: CanActivateChildFn = (_childRoute, _state) => {
    return question('можно перейти по дочерним путям?');
};
