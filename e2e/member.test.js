import Utilities from './helpers/Utilities'

describe('Member List Screen', () => {
  beforeAll(async () => {
    await device.launchApp()
  })
  it('should have Members', async () => {
    await expect(element(by.id('Member_List'))).toBeVisible()
    await element(by.id('Member_List')).tap()
    await expect(element(by.text('No Members added in the list'))).toBeVisible()
    await element(by.id('add-member-icon')).tap()
    if (device.getPlatform() === 'ios') {
      await element(by.traits(['button']))
        .atIndex(0)
        .tap()
    } else {
      await device.pressBack()
    }
    if (device.getPlatform() === 'ios') {
      await element(by.traits(['button']))
        .atIndex(0)
        .tap()
    } else {
      await device.pressBack()
    }
  })
})
