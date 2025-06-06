const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"人事管理",
                        "menuJump":"列表",
                        "tableName":"renshi"
                    }
                ],
                "menu":"人事管理"
            }
            
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    }
,
{
        "backMenu":[
			{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"部门管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryBumen"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"职位管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryZhiwei"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"考勤状态管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryKaoqin"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"请假类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryQingjia"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"合同管理",
                        "menuJump":"列表",
                        "tableName":"hetong"
                    }
                ],
                "menu":"合同管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"考勤管理",
                        "menuJump":"列表",
                        "tableName":"kaoqin"
                    }
                ],
                "menu":"考勤管理"
             }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "审核"
                        ],
                        "menu":"请假管理",
                        "menuJump":"列表",
                        "tableName":"qingjia"
                    }
                ],
                "menu":"请假管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"薪资管理",
                        "menuJump":"列表",
                        "tableName":"xinzi"
                    }
                ],
                "menu":"薪资管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "导入导出",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"员工管理",
                        "menuJump":"列表",
                        "tableName":"yuangong"
                    }
                ],
                "menu":"员工管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"人事",
        "tableName":"renshi"
    }
,
{
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"合同管理",
                        "menuJump":"列表",
                        "tableName":"hetong"
                    }
                ],
                "menu":"合同管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"考勤管理",
                        "menuJump":"列表",
                        "tableName":"kaoqin"
                    }
                ],
                "menu":"考勤管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除"
                        ],
                        "menu":"请假管理",
                        "menuJump":"列表",
                        "tableName":"qingjia"
                    }
                ],
                "menu":"请假管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"薪资管理",
                        "menuJump":"列表",
                        "tableName":"xinzi"
                    }
                ],
                "menu":"薪资管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"员工",
        "tableName":"yuangong"
    }
]
    }
}
export default menu;
