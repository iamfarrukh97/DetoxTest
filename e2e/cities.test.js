import Utilities from './helpers/Utilities'

describe('Cities Images Screen', () => {
  beforeAll(async () => {
    await device.launchApp()
  })
  it('should have images', async () => {
    await element(by.id('ImagesFlow')).tap()
    await expect(element(by.id('continent-image-asia-0'))).toExist()
    // await expect(element(by.id('continent-image-europe-3'))).toExist()
    await expect(element(by.text('WATER COUNTER'))).not.toExist()
    await waitFor(element(by.id('continent-image-europe-3')))
      .toBeVisible()
      .whileElement(by.id('continent-scroll-europe'))
      .scroll(250, 'right')
    await waitFor(element(by.id('continent-image-europe-0')))
      .toBeVisible()
      .whileElement(by.id('continent-scroll-europe'))
      .scroll(250, 'left')
  })
})
