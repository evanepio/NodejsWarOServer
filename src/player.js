import {List, Map} from 'immutable';
import {v4} from 'node-uuid';

export function createPlayer(name) {
    return Map({name, id: v4(), hand: List.of()});
}

export function addPlayerToGame(game, player) {
    const players = game.get('players').set(player.get('id'), player);
    return game.set('players', players);
}
