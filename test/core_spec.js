import {List, Map} from 'immutable';
import {expect} from 'chai';

import {createGame, createPlayer, addPlayerToGame} from '../src/core';

describe('createGame', function () {
    it('sets default player map', function () {
        const game = createGame();

        expect(game.get('players')).to.equal(Map({}));
    });

    it('sets an empty player map', function () {
        const game = createGame();

        expect(game.get('players').count()).to.equal(0);
    });
});

describe('createPlayer', function () {
    it('sets name properly', function () {
        const name = 'someName';
        const player = createPlayer(name);

        expect(player.name).to.equal(name);
    });

    it('sets a non-empty ID', function () {
        const player = createPlayer('someName');

        expect(player.id).to.exist;
    });

    it('initializes an empty hand', function () {
        const player = createPlayer('someName');

        expect(player.hand).to.equal(List.of());
    });

    it('creates players with unique ids', function () {
        const player1 = createPlayer('someName');
        const player2 = createPlayer('someName');

        expect(player1.id).to.not.equal(player2.id);
    });
});

describe('addPlayerToGame', function () {
    it('increases player count to 1 when adding a player', function () {
        const player = createPlayer('someName');
        let game = createGame();

        const previousCount = game.get('players').count();

        game = addPlayerToGame(game, player);

        expect(previousCount).to.equal(0);
        expect(game.get('players').count()).to.equal(1);
    });

    it('increase player count to 2 when adding two players', function () {
        const player1 = createPlayer('someName');
        const player2 = createPlayer('someName');
        let game = createGame();

        game = addPlayerToGame(game, player1);
        game = addPlayerToGame(game, player2);

        expect(game.get('players').count()).to.equal(2);
    });

    it('does not allow a player to be added twice', function(){
        const player = createPlayer('someName');
        let game = createGame();

        game = addPlayerToGame(game, player);
        game = addPlayerToGame(game, player);

        expect(game.get('players').count()).to.equal(1);
    });
});