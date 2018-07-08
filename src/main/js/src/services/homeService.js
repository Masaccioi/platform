import CONFIG from '../constants/config'
import BaseService from '../services/baseService'
import $ from 'jquery'

export default new class HomeService extends BaseService {
    getNotice(page, pageSize) {
        let apiUrl = `${CONFIG.platform.api}/notice/query?page=${page}&pageSize=${pageSize}`
        return super.request({ apiUrl, method:'GET', withAuthToken:true })
    }
    getAdvice(page, pageSize) {
        let apiUrl = `${CONFIG.platform.api}/advice/query?page=${page}&pageSize=${pageSize}`
        return super.request({ apiUrl, method:'GET', withAuthToken:true })
    }
}
