module.exports = {
  // this test returns the list of keyboard keys available to us to use in our site
  "should return key strokes": (client) => {
    client.url(
      "https://www.surveygizmo.com/s3/3319952/OverDrive-feedback",
      () => {
        console.log(JSON.stringify(client.Keys, null, "\t"));
      }
    );
  },
};

// run with./node_modules/.bin/nightwatch -t ./tests/user.actions.prompts.test.js
// tried TAU code as per the tutor but didn't print out the keystrokes. Tried docs and other online sources. Could not automate keystrokes.

describe("user actions api", function () {
  it("demo test", function () {
    browser
      .navigateTo("https://www.surveygizmo.com/s3/3319952/OverDrive-feedback")
      .perform(function () {
        const actions = this.actions({ async: true });

        return actions
          .keyDown(Keys.ARROW_LEFT)
          .keyUp(Keys.ARROW_LEFT)
          .keyDown(Keys.NUMPAD0)
          .keyUp(Keys.NUMPAD0)
          .pause(4000);
      });
  });
});
