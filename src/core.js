import {Map} from 'immutable';
import {v4} from 'node-uuid';

export function createGame() {
    return Map({id: v4(), players: Map({})});
}

export function setGame(appState, game){
    const gameMap = Map({}).set(game.get('id'), game);

    return Map({'games': gameMap});
}