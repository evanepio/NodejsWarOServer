import {expect} from 'chai';

import {createGame} from '../src/core';

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
