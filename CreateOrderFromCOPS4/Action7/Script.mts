SAPGuiSession("Session").SAPGuiWindow("SAP Easy Access").SAPGuiOKCode("OKCode").Set DataTable("OKCode_Text6", dtGlobalSheet) @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf1.xml_;_
SAPGuiSession("Session").SAPGuiWindow("SAP Easy Access").SendKey ENTER @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf1.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Display Order: Initial").SAPGuiEdit("Order").Set DataTable("Order_Text2", dtGlobalSheet) @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf2.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Display Order: Initial").SendKey ENTER @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf2.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Display CC Adhoc Service").SAPGuiButton("Document flow   (Ctrl+F11)").Click @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf3.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Display Document Flow").SAPGuiTree("TableTreeControl").ActivateItem DataTable("TableTreeControl_Path", dtGlobalSheet), DataTable("TableTreeControl_Item", dtGlobalSheet) @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf4.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Display Document Flow").SAPGuiButton("Display document").Click @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf5.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Display CC Service Sales").SAPGuiStatusBar("StatusBar").Sync @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf6.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Display CC Service Sales").SAPGuiButton("Display document flow").Click @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf7.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Document Flow").SAPGuiTree("TableTreeControl").SelectItem DataTable("TableTreeControl_Path1", dtGlobalSheet), DataTable("TableTreeControl_Item1", dtGlobalSheet) @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf8.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Document Flow").SAPGuiButton("Display document").Click @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf8.xml_;_
