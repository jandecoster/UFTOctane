x=Browser("Search | QAS | CTS operations").Page("Search | QAS | CTS operations").GetROProperty("abs_x") 
y=Browser("SuccessFactors Aanmelden").Page("SuccessFactors: Candidates").WebElement("Enter the name and email").GetROProperty("abs_y") 
Set obj=CreateObject("Mercury.DeviceReplay")
obj.MouseMove x,y
