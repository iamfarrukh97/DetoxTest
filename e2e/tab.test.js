import Utilities from './helpers/Utilities'

describe('Member List Screen', () => {
  beforeAll(async () => {
    await device.launchApp()
  })
  it('should have Members', async () => {
    await element(by.id('ImagesFlow')).tap()
    await element(by.id('MembersFlow')).tap()
    await element(by.id('HomeFlow')).tap()
  })
})
