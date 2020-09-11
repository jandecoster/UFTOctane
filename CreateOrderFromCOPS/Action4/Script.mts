x=Browser("Search | QAS | CTS operations").Page("Search | QAS | CTS operations").GetROProperty("abs_x") 
y=Browser("Search | QAS | CTS operations").Page("Search | QAS | CTS operations").GetROProperty("abs_y") 
Set obj=CreateObject("Mercury.DeviceReplay")
obj.MouseClick x,y,LEFT_MOUSE_BUTTON
