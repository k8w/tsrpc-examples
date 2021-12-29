module.exports = {
    require: [
        'ts-node/register',
    ],
    timeout: 999999,
    exit: true,
    'preserve-symlinks': true,
    spec: [
        './test/**/*.test.ts'
    ]
}