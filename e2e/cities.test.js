import Utilities from './helpers/Utilities'

describe('Cities Images Screen', () => {
  beforeAll(async () => {
    await device.launchApp()
  })
  it('should have images', async () => {
    await element(by.id('ImagesFlow')).tap()
    await expect(element(by.id('continent-image-asia-0'))).toExist()
    await expect(element(by.id('continent-image-asia-2'))).toExist()
    await expect(element(by.text('WATER COUNTER'))).not.toExist()
  })
})
