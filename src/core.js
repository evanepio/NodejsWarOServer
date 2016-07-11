import {List, Map} from 'immutable';
import {v4} from 'node-uuid';

export function createGame() {
    return Map({players: Map({})});
}

export function createPlayer(name) {
    return {name, id: v4(), hand: List.of()};
}

export function addPlayerToGame(game, player) {
    const players = game.get('players').set(player.id, player);
    const newGame = game.set('players', players);
    return newGame;
}