import {List, Map} from 'immutable';
import {v4} from 'node-uuid';

export function createGame() {
    return Map({players: Map({})});
}

export function createPlayer(name) {
    return {name, id: v4(), hand: List.of()};
}