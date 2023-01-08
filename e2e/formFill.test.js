import Utilities from './helpers/Utilities'
describe('Member List Screen', () => {
  beforeAll(async () => {
    await device.launchApp()
  })
  it('should have Members', async () => {
    await element(by.id('Member_List')).tap()
    await element(by.id('add-member-icon')).tap()
    // await element(by.id('formField-name')).typeText('farrukh')
    // await element(by.id('formField-surname')).typeText('ijaz')
    await waitFor(element(by.id('formLabel-startdate')))
      .toBeVisible()
      .whileElement(by.id('member-form'))
      .scroll(150, 'down')
    await element(by.id('formLabel-startdate')).tap()
    await element(by.id('member-form')).swipe('up')
    await Utilities.selectCalenderDate(
      'formField-startdate',
      'Monday',
      '20',
      'March',
      '2023',
    )
  })
})
