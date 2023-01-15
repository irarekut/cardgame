function level(levelName: string): number {
    if (levelName === 'level 1') {
        return 3;
    }
    if (levelName === 'level 2') {
        return 6;
    }
    if (levelName === 'level 3') {
        return 9;
    }
    return 0;
}

module.exports = { level };
