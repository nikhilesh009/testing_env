exports.config = {
	
	
  framework: 'jasmine',
  specs: ['CustomerLogin.js'],
 
	 multiCapabilities: [{
  'browserName': 'firefox'
}, {
  'browserName': 'chrome'
}],
	 
  seleniumAddress: 'http://localhost:32768',
  allScriptsTimeout: 50000,
  
  onPrepare: function(){
    browser.manage().timeouts().implicitlyWait(15000);
},
  
jasmineNodeOpts: {
defaultTimeoutInterval: 50000
}
}