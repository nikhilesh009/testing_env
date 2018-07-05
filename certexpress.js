describe('Test Automation', function() {
	var title;
	beforeEach(function(){
		console.log("*************** Test Case started *****************")
		//title = browser.getTitle();
	});
	
	afterEach(function(){
		browser.sleep(3000);
		console.log("*************** Test Case ended *****************")
		
	});
	

	
	 
  it('Test the login page', function() {
  
    browser.get('https://qa.certexpress.com/home/login',50000);
	
    browser.waitForAngular();
    element(by.model('user.email_address')).sendKeys('kris.nnair+7@gmail.com');
	element(by.model('user.password')).sendKeys('Pa33w0rd!');
	element(by.buttonText('Log In')).click();
	element(by.css("div[layout='column'] > div.layout-row >input.ng-pristine.ng-untouched.ng-valid.flex.ng-empty[ng-model='requestToken']:first-child")).sendKeys('LY-gM-PB-Gf');

	//element(by.css("input.ng-pristine.ng-valid.flex.ng-empty.ng-touched")).sendKeys("LY-gM-PB-Gf");
	/*
	 * tagName = input.className
	 * classNAme = .classname
	 * attribute = [ng-model='value']
	 * id = #id
	 *  * 
	 * 
	 */
	
	element(by.css("div[layout='column'] > div.layout-row >button.md-accent.md-raised.md-button.md-ink-ripple")).click();
	
	var bar = $('[type="checkbox"]');
	bar.click();
	
	element(by.buttonText("Fill Selected Exposures")).click();
	
	
	browser.sleep(15000);

	//element(by.css("input#gc_p_name.gencert.ng-pristine.md-input.ng-valid.ng-valid-required.ng-not-empty.ng-touched")).sendKeys('Nisha Automated Test Gencert 5000');
	browser.switchTo().frame("gencert_iframe");
	element(by.css("#purchaserForm")).click();
	
	element(by.css("#gc_p_name")).clear();
	element(by.css("#gc_p_name")).sendKeys("Nisha Automated Test Gencert 5000");
	element(by.css("#gc_p_phone_number")).clear();
	element(by.css("#gc_p_phone_number")).sendKeys("898-909-9090");
	element(by.css("#gc_p_addr")).sendKeys("Nisha Automated Test 898 arbor glen blvd");
	element(by.css("#gc_p_zip")).sendKeys("92108");
	
	browser.switchTo().defaultContent();
	//element(by.id('#gc_p_phone_number')).sendKeys('898-909-9090');
	//element(by.id('#gc_p_addr')).sendKeys('Nisha Automated Test 898 arbor glen blvd');
	//element(by.id('#gc_p_city')).sendKeys('San Mateo');
	//element(by.id('#select_value_label_0')).sendKeys('United States');
	//element(by.id('#select_value_label_243')).sendKeys('Illinois');
	//element(by.id('#gc_p_zip')).sendKeys('92108');
	//element(by.buttonText('Save and Continue')).click();
	//element(by.binding("GENCERT_URL")).getText().then(function(){
//		console.log("Text' " + Text);
	});
	//element.all(by.css("#select_215 option")).then(function(items){
	//	console.log("Total values in dropdown are : " + items.length)
	
	//element(by.model('chosenStates')).click();
	//});
	//element(by.xpath("/body/div[1]/md-content/div[1]/div/div[1]/add-request/div[2]/div/div/div[1]/input")).sendKeys('dQ-FX-GN-tY');
	//element(by.model('requestToken')).sendKeys('dQ-FX-GN-tY');
	//element(by.css('[ng-click="initiateRequest()"]')).click();

 // });
  
  
/*
  it('Test the Gencert', function() {  
	browser.sleep(300);
    browser.get('https://qa.certexpress.com/?r=LY-gM-PB-Gf');
    browser.waitForAngular();
    browser.sleep(3000);
      //expect(greeting.getText()).toEqual('Hello Julie!');
  

});
  
*/
  
 /* it('Test the Seller creation', function() {  
	    browser.get('https://qa.certexpress.com/home/login');
	    browser.waitForAngular();
	    element(by.model('user.email_address')).sendKeys('kris.nnair+7@gmail.com');
		element(by.model('user.password')).sendKeys('Pa33w0rd!');
		element(by.buttonText('Log In')).click();
	   // element.all(by.repeater('item in menu')).get(4).element(by.linkText('Vendor')).
	  //click();
		
		element(by.linkText('Vendor')).click();

	});*/

  
  

  
});
