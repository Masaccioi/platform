import CONFIG from '../constants/config'
import BaseService from './baseService'
import $ from 'jquery'

export default new class AppraisalService extends BaseService {
    
    setAppraisal(options = {}) {
        const { name, content, email = '', phone = '' } = options
        let apiUrl = `${CONFIG.platform.api}/customer/submit_form?name=${name}&&content=${content}`
        if(email) {
            apiUrl += `&email=${email}`
        }
        if(phone) {
            apiUrl += `&phone=${phone}`
        }
        return super.request({ apiUrl, method:'POST'})
    }
}
