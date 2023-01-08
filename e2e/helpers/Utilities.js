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
  async softTextAssertion(mobileElement, text) {
    try {
      await expect(mobileElement).toHaveText(text)
    } catch (error) {
      return false
    }
  }
}
export default new Utlitieis()
