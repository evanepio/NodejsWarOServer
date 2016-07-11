import {List,Map} from 'immutable';
import {expect} from 'chai';

import {createGame, createPlayer} from '../src/core';


describe('createGame', function() {
    it('sets default player map', function() {
        const game = createGame();

        expect(game.get('players')).to.equal(Map({}));
    });
    it('sets an empty player map', function() {
        const game = createGame();

        expect(game.get('players').count()).to.equal(0);
    });
});

describe('createPlayer', function() {
    it('sets name properly', function() {
        const name = 'someName';
        const player = createPlayer(name);

        expect(player.name).to.equal(name);
    });

    it('sets a non-empty ID', function() {
        const player = createPlayer('someName');

        expect(player.id).to.exist;
    });

    it('initializes an empty hand', function() {
        const player = createPlayer('someName');

        expect(player.hand).to.equal(List.of());
    });
});
