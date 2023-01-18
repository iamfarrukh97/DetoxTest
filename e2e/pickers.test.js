import Utilities from './helpers/Utilities'
describe('Add Member Screen drop down pickers', () => {
  beforeAll(async () => {
    await device.launchApp()
  })
  it('should fills dates', async () => {
    await element(by.id('Member_List')).tap()
    await element(by.id('add-member-icon')).tap()
    await element(by.id('formLabel-startDay')).tap()
    await Utilities.selectPickerValue(element(by.id('formPicker-startDay')), 'Monday')
    await element(by.id('member-form')).swipe('up')
    await element(by.id('formLabel-country')).tap()
    await Utilities.selectPickerValue(
      element(by.id('formPicker-country')),
      'Pakistan',
      'up',
    )
  })
})
