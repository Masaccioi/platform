import CONFIG from '../constants/config'
import BaseService from '../services/baseService'
import $ from 'jquery'

export default new class HomeService extends BaseService {
    getNotice(page, pageSize) {
        let apiUrl = `${CONFIG.platform.api}/notice/query?page=${page}&pageSize=${pageSize}`
        return super.request({ apiUrl, method:'GET' })
    }
    getAdvice(page, pageSize) {
        let apiUrl = `${CONFIG.platform.api}/advice/query?page=${page}&pageSize=${pageSize}`
        return super.request({ apiUrl, method:'GET'})
    }
    getHotProduct() {
        let apiUrl = `${CONFIG.platform.api}/main/important_product`
        return super.request({ apiUrl, method:'GET'})
    }
    getOperator() {
        let apiUrl = `${CONFIG.platform.api}/operator/query`
        return super.request({ apiUrl, method:'GET'})
    }
    getMainProduct(id) {
        let apiUrl = `${CONFIG.platform.api}/main/show_product?operatorId=${id}`
        return super.request({ apiUrl, method:'GET'})
    }
}
