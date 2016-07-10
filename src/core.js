import {List} from 'immutable';
import {v4} from 'node-uuid';

export function createPlayer(name) {
    return {name, id: v4(), hand: List.of()};
}
