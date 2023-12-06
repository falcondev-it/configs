/** @type {import('changelogithub').ChangelogOptions} */
export default {
  // output: 'CHANGELOG.md', // pass with --output
  types: {
    feat: { title: '✨ Enhancements' },
    fix: { title: '🐛 Fixes' },
    perf: { title: '🏎️ Performance' },
    refactor: { title: '🏗️ Refactors' },
    chore: { title: '🔧 Chore' },
    build: { title: '📦 Build' },
    docs: { title: '📖 Documentation' },
    style: { title: '🎨 Style' },
    test: { title: '✅ Tests' },
    types: { title: '🌊 Types' },
    ci: { title: '🤖 CI' },
    wip: { title: '🚧 Work in Progress' },
  },
  titles: {
    breakingChanges: '🚨 Breaking Changes',
  },
  contributors: true,
  capitalize: false,
  group: 'multiple',
  scopeMap: {},
}
