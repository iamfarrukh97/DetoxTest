import Utilities from './helpers/Utilities'

describe('Counter', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  // beforeEach(async () => {
  //   await device.reloadReactNative()
  // })
  it('should have Counters', async () => {
    await expect(element(by.text('Counters'))).toBeVisible()
    await element(by.text('Counters')).tap()
    await element(by.text('WATER COUNTER')).tap()
    await element(by.text('ELECTRICITY COUNTER')).tap()
    await element(by.text('GAS COUNTER')).tap()
    await element(by.text('BROADBAND COUNTER')).tap()
    if (device.getPlatform() === 'ios') {
      await element(by.traits(['button']))
        .atIndex(0)
        .tap()
    } else {
      await device.pressBack()
    }
  })
  it('should have Members', async () => {
    await expect(element(by.id('Member_List'))).toBeVisible()
    await element(by.id('Member_List')).tap()
    await expect(element(by.text('No Members added in the list'))).toBeVisible()
    if (device.getPlatform() === 'ios') {
      await element(by.traits(['button']))
        .atIndex(0)
        .tap()
    } else {
      await device.pressBack()
    }
  })
})
