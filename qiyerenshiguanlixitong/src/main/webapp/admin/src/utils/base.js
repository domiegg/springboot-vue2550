const base = {
    get() {
        return {
            url : "http://localhost:8080/qiyerenshiguanlixitong/",
            name: "qiyerenshiguanlixitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/qiyerenshiguanlixitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "企业人事管理系统"
        } 
    }
}
export default base
