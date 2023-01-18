class Utlitieis {
  async sleep(miliseconds) {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve()
      }, miliseconds),
    )
  }
  // formField-startdate
  async selectCalenderDate(field, weekday, day, month, year) {
    while (
      (await this.softTextAssertion(
        element(by.id(`${field}.header.title`)),
        `${month} ${year}`,
      )) === false
    ) {
      await element(by.id(`${field}.header.rightArrow`)).tap()
    }
    await element(by.label(` ${weekday} ${day} ${month} ${year} `))
      .atIndex(0)
      .tap()
  }
  async softElementAssertion(mobileElement) {
    try {
      await expect(mobileElement).toBeVisible()
      return true
    } catch {
      return false
    }
  }
  async softTextAssertion(mobileElement, text) {
    try {
      await expect(mobileElement).toHaveText(text)
    } catch (error) {
      return false
    }
  }

  async selectPickerValue(picker, value, swipDirection) {
    if (device.getPlatform() === 'ios') {
      await picker.setColumnToValue(0, value)
    } else {
      await element(by.type('android.widget.Spinner')).tap()
      const optionSelect = element(
        by.type('android.widget.CheckedTextView').and(by.text(value)),
      )
      while ((await this.softElementAssertion(optionSelect)) === false) {
        await element(by.type('android.widget.ListView')).swipe(swipDirection, 'slow')
      }
      await optionSelect.tap()
    }
  }
}
export default new Utlitieis()
