import {List} from 'immutable';
import {expect} from 'chai';

import {createGame, createPlayer} from '../src/core';


describe('createGame', () => {
    it('sets default player map', () => {
        const game = createGame();

        expect(game.players).to.exist;
    });
    it('sets an empty player map', () => {
        const game = createGame();

        expect(game.players).to.be.empty;
    });
});

describe('createPlayer', () => {
    it('sets name properly', () => {
        const name = 'someName';
        const player = createPlayer(name);

        expect(player.name).to.equal(name);
    });

    it('sets a non-empty ID', () => {
        const player = createPlayer('someName');

        expect(player.id).to.exist;
    });

    it('initializes an empty hand', () => {
        const player = createPlayer('someName');

        expect(player.hand).to.equal(List.of());
    });
});
