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
  })
})
