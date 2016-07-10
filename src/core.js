import {List} from 'immutable';
import {v4} from 'node-uuid';

export function createPlayer(name) {
    return {name, id: v4(), hand: List.of()};
}

export function addPlayer(state, player) {
    return state.update(player.id, player);
}