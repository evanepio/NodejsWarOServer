import {expect} from 'chai';
import {Map} from 'immutable';

import {createGame, setGame} from '../src/core';

describe('createGame', function () {
    it('sets an id', function () {
        const game = createGame();

        expect(game.get('id')).to.exist;
    });

    it('sets unique id for each game', function(){
        const game1 = createGame();
        const game2 = createGame();

        expect(game1.get('id')).to.not.equal(game2.get('id'));
    });

    it('sets an empty player map', function () {
        const game = createGame();

        expect(game.get('players').count()).to.equal(0);
    });
});

describe('setGame', function() {
    it('sets the game into the appState map', function(){
        const initialAppState = Map({});
        const game = createGame();

        const newAppState = setGame(initialAppState, game);

        expect(newAppState.get('games').count()).to.equal(1);
    });

    it('can set two games into the map', function() {
        const initialAppState = Map({});
        const game1 = createGame();
        const game2 = createGame();

        const newAppState = setGame(setGame(initialAppState, game1), game2);

        expect(newAppState.get('games').count()).to.equal(2);
    });
});