 @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf10.xml_;_
SAPGuiSession("Session").SAPGuiWindow("SAP Easy Access").SAPGuiOKCode("OKCode").Set DataTable("OKCode_Text1", dtGlobalSheet) @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf11.xml_;_
SAPGuiSession("Session").SAPGuiWindow("SAP Easy Access").SendKey ENTER @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf11.xml_;_


SAPGuiSession("Session").SAPGuiWindow("Change Order: Initial").SAPGuiEdit("Order").Set DataTable("SAP ID_ 000402077220_innertext_out", dtGlobalSheet)  'Enter Order Number saved in previous step @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf19.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Change Order: Initial").SendKey ENTER @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf19.xml_;_

 @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf12.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Change CC Adhoc Service").SAPGuiTabStrip("TS_1100").Select DataTable("TS_1100_Value", dtGlobalSheet) @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf13.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Change CC Adhoc Service").SAPGuiTable("SAPLCOVGTCTRL_3010").Check CheckPoint("SAPLCOVGTCTRL_3010") @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf14.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Change CC Adhoc Service").SAPGuiButton("Release   (Ctrl+F1)").Click @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf15.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Change CC Adhoc Service").SAPGuiStatusBar("StatusBar").Sync @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf16.xml_;_
wait  8
SAPGuiSession("Session").SAPGuiWindow("Change CC Adhoc Service").SAPGuiStatusBar("StatusBar").Output CheckPoint("StatusBar") @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf18.xml_;_


