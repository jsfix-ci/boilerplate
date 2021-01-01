import { Reducer } from 'redux';
import { PROGRESS_ACTION, ProgressAction } from '@extensions/explorer/store/application/action';

export const reducer: Reducer<any, ProgressAction> = (state = false, action) => {
    if (action.type === PROGRESS_ACTION) {
        return action.progress;
    }
    return state;
}
