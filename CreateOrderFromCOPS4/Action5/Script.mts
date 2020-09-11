
SAPGuiSession("Session").SAPGuiWindow("Change CC Adhoc Service").Maximize @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf1.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Change CC Adhoc Service").SAPGuiToolbar("ToolBarControl").PressContextButton DataTable("ToolBarControl_Button", dtGlobalSheet) @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf1.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Choose an object").Close @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf2.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Change CC Adhoc Service").SendKey F3 @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf3.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Exit maintenance order").SAPGuiButton("Yes").Click @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf4.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Change Order: Initial").SAPGuiStatusBar("StatusBar").Sync @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf5.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Change Order: Initial").SendKey F3 @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf6.xml_;_
SAPGuiSession("Session").SAPGuiWindow("SAP Easy Access").SAPGuiOKCode("OKCode").Set DataTable("OKCode_Text7", dtGlobalSheet) @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf7.xml_;_
SAPGuiSession("Session").SAPGuiWindow("SAP Easy Access").SendKey ENTER @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf7.xml_;_


'SAPGuiSession("Session").SAPGuiWindow("Change Order: Initial").SAPGuiOKCode("OKCode").Set DataTable("OKCode_Text2", dtGlobalSheet)
'SAPGuiSession("Session").SAPGuiWindow("Change Order: Initial").SendKey ENTER
'SAPGuiSession("Session").SAPGuiWindow("Enter PM Order Confirmation:").SAPGuiEdit("Order").Set Right(DataTable("SAP ID_ 000402077220_innertext_out", dtGlobalSheet),11)  'Enter Order Number saved in previous step @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf2.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Enter PM Order Confirmation:").SAPGuiEdit("Order").Set DataTable("SAP ID_ 000402077220_innertext_out", dtGlobalSheet) @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf2.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Enter PM Order Confirmation:").SAPGuiEdit("Order").SetFocus @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf2.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Enter PM Order Confirmation:").SendKey ENTER @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf2.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Enter PM Order Confirmation:_2").SAPGuiButton("Select All   (Shift+F1)").Click @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf3.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Enter PM Order Confirmation:_2").SAPGuiButton("Actual Data   (F8)").Click @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf4.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Enter PM Order Confirmation:_3").SAPGuiEdit("Actual Work").Set DataTable("Actual_Work_Text", dtGlobalSheet) @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf5.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Enter PM Order Confirmation:_3").SAPGuiEdit("Actual Work").SetFocus @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf5.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Enter PM Order Confirmation:_3").SAPGuiButton("Next Operation   (Shift+F11)").Click @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf5.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Enter PM Order Confirmation:_3").SAPGuiEdit("Actual Work").Set DataTable("Actual_Work_Text1", dtGlobalSheet) @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf6.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Enter PM Order Confirmation:_3").SAPGuiEdit("Actual Work").SetFocus @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf6.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Enter PM Order Confirmation:_3").SAPGuiButton("Next Operation   (Shift+F11)").Click @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf6.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Enter PM Order Confirmation:_3").SAPGuiEdit("Actual Work").Set DataTable("Actual_Work_Text2", dtGlobalSheet) @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf7.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Enter PM Order Confirmation:_3").SAPGuiEdit("Actual Work").SetFocus @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf7.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Enter PM Order Confirmation:_3").SAPGuiButton("Next Operation   (Shift+F11)").Click @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf7.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Enter PM Order Confirmation:_3").SAPGuiEdit("Actual Work").Set DataTable("Actual_Work_Text3", dtGlobalSheet) @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf8.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Enter PM Order Confirmation:_3").SAPGuiEdit("Actual Work").SetFocus @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf8.xml_;_
'SAPGuiSession("Session").SAPGuiWindow("Enter PM Order Confirmation:").SAPGuiStatusBar("StatusBar").Sync @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf9.xml_;_
