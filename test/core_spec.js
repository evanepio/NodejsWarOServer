import {expect} from 'chai';

import {createGame} from '../src/core';

describe('createGame', function () {
    it('sets an id', function () {
        const game = createGame();

        expect(game.get('id')).to.exist;
    });

    it('sets an empty player map', function () {
        const game = createGame();

        expect(game.get('players').count()).to.equal(0);
    });
});
