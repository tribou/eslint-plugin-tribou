// @flow
import cli from './'

it('arrow-body-style', () => {

  const results = cli.executeOnText('const a = (test) => {}; a(1)\n')
    .results[0].messages

  expect(results).toEqual([])

})
