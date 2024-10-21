/** @type {import('changelogithub').ChangelogOptions} */
export default {
  // output: 'CHANGELOG.md', // pass with --output
  types: {
    feat: { title: '✨ Enhancements' },
    fix: { title: '🐛 Fixes' },
    perf: { title: '🏎️ Performance' },
    revert: { title: '⏮️ Reverts' },
    refactor: { title: '🏗️ Refactors' },
    wip: { title: '🚧 Work in Progress' },
    chore: { title: '🔧 Chore' },
    build: { title: '📦 Build' },
    docs: { title: '📖 Documentation' },
    test: { title: '✅ Tests' },
    types: { title: '🌊 Types' },
    style: { title: '🎨 Style' },
    ci: { title: '🤖 CI' },
  },
  titles: {
    breakingChanges: '🚨 Breaking Changes',
  },
  contributors: true,
  capitalize: false,
  group: 'multiple',
  scopeMap: {},
}
