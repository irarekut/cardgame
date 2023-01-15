module.exports = {
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    modulePaths: ['<rootDir>'],
    moduleDirectories: ['node_modules', 'src/js'],
};
