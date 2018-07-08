// 测试环境
const CONFIG = {
    uc: {
        host : 'ucbetapi.101.com',
        version : 'v0.93'
    },
    vOrg: {
        host : 'https://ucvorg-beta.101.com',
        version : 'v0.1'
    },
    cs: {
        host : 'betacs.101.com',
        version : 'v0.1',
        item : 'http://betacs.101.com/v0.1/download?dentryId=',
        avatar: 'http://betacs.101.com/v0.1/static/preproduction_content_cscommon/avatar'
    },
    app: {
        host: '',
        version: ''
    },
    wallet: {
        api: 'http://pbl4wallet.debug.web.nd'
    }
}

window.CONFIG = CONFIG;
