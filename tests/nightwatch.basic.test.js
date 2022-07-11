// define module by using module.exports ={} Then name our test. In this case, we are calling it 'Confirming Form Page Title'.
// For this example, we are passing the function an argument of the browser object, which we call client for now.
// This test checks the assertion parameter against the URL title html tag. 
module.exports = {
    'Confirming Form Page Title': (client) => {
        client.url('https://www.oneyoungworld.com/')
        .waitForElementVisible('body')
        .assert.titleEquals('One Young World | Forum For Young Leaders');
    },
    // this test uses the .element() method to access the body tag and returns it in JSON with its ID for further testing if required. 
    'grab the body tag and return in json format' : function(browser) {
        browser.url('https://www.oneyoungworld.com/')
        .element('css selector', 'body', function(result) {
          console.log(result.value)
        });
      },
      // this test uses the .elements() method to access multiple elements. For example, we can grab all the divs with a class of 'container in JSON with their IDs.
      'grab all the input tags with type of text and return in json format' : function(browser) {
        browser.url('https://www.oneyoungworld.com/')
        .elements('css selector', 'div[class="container"]', function(result) {
          console.log(result.value)
        });
      },
      // this test waits by default 500ms for a selector to be 'visible'. In this example, we use an element with an id of 'bannerVideo'.
      'Check if video is visible at the bottom of page' : function(browser) {
        browser.url('https://www.oneyoungworld.com/')
        .waitForElementVisible('#bannerVideo', 'Video banner is visible')
      },
};