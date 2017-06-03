// @flow
import cli from './'


it('arrow-parens as-needed', () => {

  const results = cli.executeOnText('[1, 2].map(x => x + 1)\n')
    .results[0].messages

  expect(results).toEqual([])

})


it('arrow-parens as-needed multiple', () => {

  const text = `// @flow
const a = store => action => next => {

  // this is a comment
  if (action && action.type === 'ACTION') return next(action)
  store.dispatch({ type: 'ANOTHER_ACTION' })
  return next(action)

}

export default a
`
  const results = cli.executeOnText(text)
    .results[0].messages

  expect(results).toEqual([])

})


it('arrow-parens as-needed no return', () => {

  const results = cli.executeOnText('[1, 2].map(x => ({ x: x + 1 }))\n')
    .results[0].messages

  expect(results).toEqual([])

})
