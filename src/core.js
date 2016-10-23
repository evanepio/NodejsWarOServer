import {Map} from 'immutable';
import {v4} from 'node-uuid';

export function createGame() {
    return Map({id: 'someId', players: Map({})});
}
