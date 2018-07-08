// 生产环境
const CONFIG = {
    uc: {
        host : 'aqapi.101.com',
        version : 'v0.93'
    },
    vOrg: {
        host : 'https://ucvorg.101.com',
        version : 'v0.1'
    },
    cs: {
        host : 'cs.101.com',
        version : 'v0.1',
        item : 'http://cs.101.com/v0.1/download?dentryId=',
        avatar: 'http://cs.101.com/v0.1/static/preproduction_content_cscommon/avatar'
    },
    app: {
        host: '',
        version: ''
    },
    wallet: {
        api: 'https://zhifu.101.com'
    }
}

window.CONFIG = CONFIG;
