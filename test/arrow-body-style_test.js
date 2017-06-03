// @flow
import cli from './'


it('arrow-body-style', () => {

  const results = cli.executeOnText('const a = test => {}; a(1)\n')
    .results[0].messages

  expect(results).toEqual([])

})


it('arrow-body-style as-needed', () => {

  const results = cli.executeOnText('const a = test => 0; a(1)\n')
    .results[0].messages

  expect(results).toEqual([])

})


it('arrow-body-style as-needed no return', () => {

  const results = cli.executeOnText('const a = test => ({ test }); a(1)\n')
    .results[0].messages

  expect(results).toEqual([])

})
