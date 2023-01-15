/* eslint-disable @typescript-eslint/no-var-requires */
const assert = require('assert');
const { it, describe } = require('@jest/globals');
const { tick, getSeconds, getMinutes, resetTime } = require('tick.ts');
const { level } = require('level.ts');

describe('tick', () => {
    it('should increase seconds by 1 when tick', () => {
        resetTime();
        tick();
        assert.equal(getSeconds(), 1);

        tick();
        assert.equal(getSeconds(), 2);

        tick();
        assert.equal(getSeconds(), 3);
    });

    it('should increase minutes by 1 when tick 60 times', () => {
        resetTime();
        for (let i = 0; i < 60; i++) {
            tick();
        }
        assert.equal(getSeconds(), 0);
        assert.equal(getMinutes(), 1);
    });
});

describe('level', () => {
    it('should return 3', () => {
        const expected = 3;
        const levelName = 'level 1';

        assert.equal(level(levelName), expected);
    });
    it('should return 6', () => {
        const expected = 6;
        const levelName = 'level 2';

        assert.equal(level(levelName), expected);
    });
    it('should return 9', () => {
        const expected = 9;
        const levelName = 'level 3';

        assert.equal(level(levelName), expected);
    });
});

export {};
