import { COUNTER_CHANGE } from '../Constants';

export function changeCount(count) {
    return {
        type: COUNTER_CHANGE,
        payload: count
    }
}