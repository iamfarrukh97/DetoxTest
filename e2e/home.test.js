describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('should have Member List', async () => {
    await expect(element(by.id('Member_List'))).toBeVisible()
  })
  it('should have Cities', async () => {
    await expect(element(by.id('Cities'))).toBeVisible()
  })
})
