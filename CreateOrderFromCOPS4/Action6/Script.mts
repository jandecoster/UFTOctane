
wait 3
SAPGuiSession("Session").SAPGuiWindow("Enter PM Order Confirmation:_2").SAPGuiEdit("Actual Work").Set DataTable("Actual_Work_Text4", dtGlobalSheet) @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf1.xml_;_
wait 3



SAPGuiSession("Session").SAPGuiWindow("Enter PM Order Confirmation:_2").SendKey F3 @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf4.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Enter PM Order Confirmation:_3").SendKey F11 @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf5.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Enter PM Order Confirmation:").SAPGuiStatusBar("StatusBar").Sync @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf6.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Enter PM Order Confirmation:").SAPGuiOKCode("OKCode").Set DataTable("OKCode_Text8", dtGlobalSheet) @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf7.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Enter PM Order Confirmation:").SendKey ENTER @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf7.xml_;_


Browser("ePAD_2").Page("ePAD").SAPTable("SAPTable").SelectCell DataTable("SAPTable_Row1", dtGlobalSheet), DataTable("SAPTable_Column1", dtGlobalSheet) @@ hightlight id_;_Browser("ePAD 2").Page("ePAD").SAPTable("SAPTable")_;_script infofile_;_ZIP::ssf12.xml_;_
Browser("ePAD_2").Page("ePAD").SAPTable("SAPTable").SelectCell DataTable("SAPTable_Row2", dtGlobalSheet), DataTable("SAPTable_Column2", dtGlobalSheet) @@ hightlight id_;_Browser("ePAD 2").Page("ePAD").SAPTable("SAPTable")_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("ePAD_2").Page("ePAD").SAPTable("SAPTable").SelectCell DataTable("SAPTable_Row3", dtGlobalSheet), DataTable("SAPTable_Column3", dtGlobalSheet) @@ hightlight id_;_Browser("ePAD 2").Page("ePAD").SAPTable("SAPTable")_;_script infofile_;_ZIP::ssf14.xml_;_
Browser("ePAD_2").Page("ePAD").SAPTable("SAPTable").ActivateCell DataTable("SAPTable_Row4", dtGlobalSheet), DataTable("SAPTable_Column4", dtGlobalSheet) @@ hightlight id_;_Browser("ePAD 2").Page("ePAD").SAPTable("SAPTable")_;_script infofile_;_ZIP::ssf16.xml_;_
Browser("ePAD_2").Page("ePAD").SAPTable("SAPTable").SelectCell DataTable("SAPTable_Row5", dtGlobalSheet), DataTable("SAPTable_Column5", dtGlobalSheet) @@ hightlight id_;_Browser("ePAD 2").Page("ePAD").SAPTable("SAPTable")_;_script infofile_;_ZIP::ssf17.xml_;_
Browser("ePAD_2").Page("ePAD").SAPTable("SAPTable").SelectCell DataTable("SAPTable_Row6", dtGlobalSheet), DataTable("SAPTable_Column6", dtGlobalSheet) @@ hightlight id_;_Browser("ePAD 2").Page("ePAD").SAPTable("SAPTable")_;_script infofile_;_ZIP::ssf18.xml_;_
Browser("ePAD_2").Page("ePAD").SAPDropDownMenu("Sort in Ascending Order").Select DataTable("Sort_in_Ascending_Order_Value1", dtGlobalSheet) @@ hightlight id_;_Browser("ePAD 2").Page("ePAD").SAPDropDownMenu("Sort in Ascending Order")_;_script infofile_;_ZIP::ssf19.xml_;_
'Browser("ePAD_2").Page("ePAD").SAPFrame("ePAD").SAPEdit("SerOrd").Set DataTable("SerOrd_Text1", dtGlobalSheet)
Browser("ePAD_2").Page("ePAD").SAPFrame("ePAD").SAPEdit("SerOrd").Set DataTable("SAP ID_ 000402077220_innertext_out", dtGlobalSheet) @@ hightlight id_;_Browser("ePAD 2").Page("ePAD").SAPFrame("ePAD").SAPEdit("SerOrd")_;_script infofile_;_ZIP::ssf20.xml_;_
 @@ hightlight id_;_Browser("ePAD 2").Page("ePAD").SAPDropDownMenu("Sort in Ascending Order")_;_script infofile_;_ZIP::ssf9.xml_;_
Browser("ePAD_2").Page("ePAD").SAPFrame("ePAD").SAPButton("Filter").Click @@ hightlight id_;_Browser("ePAD 2").Page("ePAD").SAPFrame("ePAD").SAPButton("Filter")_;_script infofile_;_ZIP::ssf10.xml_;_
'long wait

'Browser("ePAD_2").Page("ePAD").SAPButton("402077220").Click @@ hightlight id_;_Browser("ePAD 2").Page("ePAD").SAPButton("402077220")_;_script infofile_;_ZIP::ssf21.xml_;_
'Browser("ePAD_2").Page("ePAD").SAPTabStrip("General").Select DataTable("General_Value2", dtGlobalSheet) @@ hightlight id_;_Browser("ePAD 2").Page("ePAD").SAPTabStrip("General")_;_script infofile_;_ZIP::ssf22.xml_;_
'Browser("ePAD_2").Page("ePAD").SAPTable("WorkcenterEx. Start DateEx.").SetCellData DataTable("WorkcenterEx__Start_DateEx__Row", dtGlobalSheet), DataTable("WorkcenterEx__Start_DateEx__Column", dtGlobalSheet), DataTable("WorkcenterEx__Start_DateEx__Data", dtGlobalSheet) @@ hightlight id_;_Browser("ePAD 2").Page("ePAD").SAPTable("WorkcenterEx. Start DateEx.")_;_script infofile_;_ZIP::ssf23.xml_;_
'Browser("ePAD_2").Page("ePAD").SAPTable("WorkcenterEx. Start DateEx.").SetCellData DataTable("WorkcenterEx__Start_DateEx__Row1", dtGlobalSheet), DataTable("WorkcenterEx__Start_DateEx__Column1", dtGlobalSheet), DataTable("WorkcenterEx__Start_DateEx__Data1", dtGlobalSheet) @@ hightlight id_;_Browser("ePAD 2").Page("ePAD").SAPTable("WorkcenterEx. Start DateEx.")_;_script infofile_;_ZIP::ssf24.xml_;_
'Browser("ePAD_2").Page("ePAD").SAPButton("Update confirmations").Click @@ hightlight id_;_Browser("ePAD 2").Page("ePAD").SAPButton("Update confirmations")_;_script infofile_;_ZIP::ssf25.xml_;_
'Browser("ePAD_2").Page("ePAD").SAPTable("WorkcenterEx. Start DateEx.").SetCellData DataTable("WorkcenterEx__Start_DateEx__Row2", dtGlobalSheet), DataTable("WorkcenterEx__Start_DateEx__Column2", dtGlobalSheet), DataTable("WorkcenterEx__Start_DateEx__Data2", dtGlobalSheet) @@ hightlight id_;_Browser("ePAD 2").Page("ePAD").SAPTable("WorkcenterEx. Start DateEx.")_;_script infofile_;_ZIP::ssf26.xml_;_
'Browser("ePAD_2").Page("ePAD").SAPTabStrip("General").Select DataTable("General_Value3", dtGlobalSheet) @@ hightlight id_;_Browser("ePAD 2").Page("ePAD").SAPTabStrip("General")_;_script infofile_;_ZIP::ssf27.xml_;_
'Browser("ePAD_2").Page("ePAD").SAPEdit("Labour").Set DataTable("Labour_Text", dtGlobalSheet) @@ hightlight id_;_Browser("ePAD 2").Page("ePAD").SAPEdit("Labour")_;_script infofile_;_ZIP::ssf28.xml_;_
'Browser("ePAD_2").Page("ePAD").SAPButton("Create Invoice").Click @@ hightlight id_;_Browser("ePAD 2").Page("ePAD").SAPButton("Create Invoice")_;_script infofile_;_ZIP::ssf29.xml_;_
'Browser("ePAD_2").Page("ePAD").SAPEdit("Material").Set DataTable("Material_Text", dtGlobalSheet) @@ hightlight id_;_Browser("ePAD 2").Page("ePAD").SAPEdit("Material")_;_script infofile_;_ZIP::ssf30.xml_;_
'Browser("ePAD_2").Page("ePAD").WebElement("WebElement").Check CheckPoint("WebElement")
