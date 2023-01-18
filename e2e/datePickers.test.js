import Utilities from './helpers/Utilities'
describe('Add Member Screen date picker native', () => {
  beforeAll(async () => {
    await device.launchApp()
  })
  it('should fills dates', async () => {
    await element(by.id('Member_List')).tap()
    await element(by.id('add-member-icon')).tap()
    await element(by.id('formLabel-dateOfBirth')).tap()
    if (device.getPlatform() === 'ios') {
      await element(by.id('dateOfBirth')).setDatePickerDate(`20-03-1997`, 'dd-MM-yyyy')
      await element(by.id('buttonConfirm-dateOfBirth')).tap()
    } else {
      // await element(by.text('2005')).tap()
      // while ((await Utilities.softElementAssertion(element(by.text('1997')))) === false) {
      //   await element(by.type('android.widget.ListView')).swipe('down', 'slow', 0.3)
      // }
      // await element(by.text('1997')).tap()
      // // await element(by.text('20')).tap()
      // await element(by.text('OK')).tap()
      await element(by.type('android.widget.EditText')).atIndex(2).typeText('1997')
      await element(by.type('android.widget.EditText')).atIndex(1).typeText('21')
      await element(by.type('android.widget.EditText')).atIndex(0).tap()
      await element(by.type('android.widget.EditText')).atIndex(0).clearText()
      await element(by.type('android.widget.EditText')).atIndex(0).typeText('Mar')
      await element(by.text('OK')).tap()
      await Utilities.sleep(5000)
    }
  })
})

// describe('Add Member Screen Native', () => {
//   beforeAll(async () => {
//     await device.launchApp()
//   })
//   it('should fills dates', async () => {
//     await element(by.id('Member_List')).tap()
//     await element(by.id('add-member-icon')).tap()
//     await element(by.id('formLabel-dateOfBirth')).tap()
//     await element(by.id('dateOfBirth')).setDatePickerDate(`20-03-1997`, 'dd-MM-yyyy')
//     await element(by.id('buttonConfirm-dateOfBirth')).tap()
//   })
// })
