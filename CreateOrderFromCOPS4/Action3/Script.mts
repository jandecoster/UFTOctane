Browser("GA 37-100 AP 230 | QAS").Page("GA 37-100 AP 230 | QAS").WebButton("CREATE ORDER(S)").Click
Browser("GA 37-100 AP 230 | QAS").Page("GA 37-100 AP 230 | QAS_2").WebRadioGroup("WebRadioGroup").Select DataTable("WebRadioGroup_Value", dtGlobalSheet)
Browser("GA 37-100 AP 230 | QAS").Page("GA 37-100 AP 230 | QAS_2").WebElement("Please select an order").Click
Browser("GA 37-100 AP 230 | QAS").Page("GA 37-100 AP 230 | QAS_2").WebElement("Breakdown").Click
Browser("GA 37-100 AP 230 | QAS").Page("GA 37-100 AP 230 | QAS_2").WebElement("Please select a description").Click
Browser("GA 37-100 AP 230 | QAS").Page("GA 37-100 AP 230 | QAS_2").WebElement("Low dew point").Click
Browser("GA 37-100 AP 230 | QAS").Page("GA 37-100 AP 230 | QAS_2").WebElement("Please select a business").Click
Browser("GA 37-100 AP 230 | QAS").Page("GA 37-100 AP 230 | QAS_2").WebElement("Fixed Price (FP)").Click
Browser("GA 37-100 AP 230 | QAS").Page("GA 37-100 AP 230 | QAS_2").WebButton("CREATE NEW ORDER").Click
Browser("GA 37-100 AP 230 | QAS").Page("Breakdown - Low dew point").WebButton("SAVE DRAFT").Click
Browser("GA 37-100 AP 230 | QAS").Page("Breakdown - Low dew point_2").WebButton("WebButton").Highlight @@ script infofile_;_ZIP::ssf2.xml_;_
'Browser("GA 37-100 AP 230 | QAS").Page("Breakdown - Low dew point_2").WebButton("WebButton").Click @@ script infofile_;_ZIP::ssf2.xml_;_
'Browser("GA 37-100 AP 230 | QAS").Page("Breakdown - Low dew point_2").WebButton("WebButton").FireEvent "OnMouseOver" @@ script infofile_;_ZIP::ssf2.xml_;_
wait 5

AiUtil.SetContext Browser("GA 37-100 AP 230 | QAS")
AIUtil("down_triangle", micNoText, micFromTop, 2).Hover
AIUtil("down_triangle", micNoText, micFromTop, 2).Click

x =Browser("GA 37-100 AP 230 | QAS").Page("Breakdown - Low dew point_2").WebButton("WebButton").GetROProperty("abs_x")
 y=Browser("GA 37-100 AP 230 | QAS").Page("Breakdown - Low dew point_2").WebButton("WebButton").GetROProperty("abs_y")
 Set obj=CreateObject("Mercury.DeviceReplay")
 obj.MouseMove x+2,y+2
 
 obj.MouseClick x+2,y+2,LEFT_MOUSE_BUTTON
 
Browser("GA 37-100 AP 230 | QAS").Page("Breakdown - Low dew point_2").WebMenu("SAVE DRAFT CREATE ORDER").Select DataTable("SAVE_DRAFT_CREATE_ORDER_Text", dtGlobalSheet) @@ script infofile_;_ZIP::ssf3.xml_;_

'long wait -  then fill PO Number

Browser("GA 37-100 AP 230 | QAS").Page("Breakdown - Low dew point_3").WebEdit("WebEdit").Set DataTable("WebEdit_Text", dtGlobalSheet) @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("GA 37-100 AP 230 | QAS").Page("Breakdown - Low dew point_3").WebEdit("WebEdit_2").Set DataTable("WebEdit_2_Text", dtGlobalSheet) @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("GA 37-100 AP 230 | QAS").Page("Breakdown - Low dew point_3").WebEdit("WebEdit_3").Set DataTable("WebEdit_3_Text", dtGlobalSheet) @@ script infofile_;_ZIP::ssf6.xml_;_
'Browser("GA 37-100 AP 230 | QAS").Page("Breakdown - Low dew point_3").WebElement("WebElement").Click @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("GA 37-100 AP 230 | QAS").Page("Breakdown - Low dew point_3").WebEdit("WebEdit_4").Set DataTable("WebEdit_4_Text", dtGlobalSheet) @@ script infofile_;_ZIP::ssf8.xml_;_


'Browser("GA 37-100 AP 230 | QAS").Page("Breakdown - Low dew point_3").WebButton("WebButton").Click @@ script infofile_;_ZIP::ssf9.xml_;_
 x=Browser("GA 37-100 AP 230 | QAS").Page("Breakdown - Low dew point_2").WebButton("WebButton").GetROProperty("abs_x")

 y=Browser("GA 37-100 AP 230 | QAS").Page("Breakdown - Low dew point_2").WebButton("WebButton").GetROProperty("abs_y")

 Set obj=CreateObject("Mercury.DeviceReplay")

 obj.MouseMove x+2,y+2
 obj.MouseClick x+2,y+2,LEFT_MOUSE_BUTTON


Browser("GA 37-100 AP 230 | QAS").Page("Breakdown - Low dew point_3").WebMenu("SAVE DRAFT CREATE ORDER").Select DataTable("SAVE_DRAFT_CREATE_ORDER_Text1", dtGlobalSheet) @@ script infofile_;_ZIP::ssf10.xml_;_
wait 15


Browser("GA 37-100 AP 230 | QAS").Page("402077220 | QAS | CTS").WebElement("SAP ID: 000402077220").Output CheckPoint("SAP ID: 000402077220") @@ script infofile_;_ZIP::ssf11.xml_;_

DataTable.Value("SAP ID_ 000402077220_innertext_out") = Right(DataTable("SAP ID_ 000402077220_innertext_out"),11)
