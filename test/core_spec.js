import {Map} from 'immutable';
import {expect} from 'chai';

import {createGame} from '../src/core';

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
