import React, { PropTypes } from 'react'
import '../../../styles/common/css/base/reset.css'
import styles from './styles.css'
import Input from 'antd/lib/input' 
import InputNumber from 'antd/lib/input-number' 
import Toast from '../common/toast/toast'
import autobind from '../../utils/autobind'
import Confirm from '../common/confirmBox/confirmBox'
const { TextArea } = Input
export default class Appraisal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '', 
            email: '', 
            phone: '', 
            content: '',
            dialogShow: false
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.setAppraisalFlag !== this.props.setAppraisalFlag) {
            if(nextProps.setAppraisalFlag == 2 ) {
                this.setState({
                    dialogShow: true
                })
            } else if (nextProps.setAppraisalFlag == 1) {
                this.refs.toast.makeText('送信に失敗しました', 3000)
            }
            
        }
        
    }
    @autobind
    onChange(type, e) {
        this.setState({
            [type]: e.target.value
        })
    }
    @autobind
    onConfirm() {
        const { name, email, phone, content } = this.state
        if(!name || !name.trim() || !content || !content.trim()) {
            this.refs.toast.makeText('情報を改善してください', 2000)
            return
        }
        if((!email || !email.trim()) && (!phone || !phone.trim())) {
            this.refs.toast.makeText('情報を改善してください', 2000)
            return
        }
        this.props.setAppraisal({
            name, 
            email, 
            phone, 
            content
        })
    }
    @autobind
    onChangeNumber(value) {
        this.setState({phone:value})
    }
    @autobind
    handleConfirm() {
        this.setState({
            dialogShow: false
        })
        this.setState({content:''})
    }
    @autobind
    handleCancel() {
        this.setState({
            dialogShow: false
        })
        window.location.href = '#/'
    }
    render() {
        const { name, email, phone, content } = this.state
        return (
            <div className={styles['container']}>
            <div className={styles['form-box']}>
                <strong className={styles['form-title']}>無料査定・お問い合わせ </strong>
                <div className={styles['input-box']}>
                    <div className={styles['icon-box']}>
                        <i className={styles['icon'] + ' ' + styles['icon-user']}/>
                    </div>
                    <Input className={styles['input']}
                        value={name}
                        onChange={this.onChange.bindArgs('name')}
                        placeholder={'お名前'}
                    />
                </div>
               <div className={styles['input-box']}>
                    <div className={styles['icon-box']}>
                        <i className={styles['icon'] + ' ' + styles['icon-email']}/>
                    </div>
                    <Input className={styles['input']}
                        value={email}
                        onChange={this.onChange.bindArgs('email')}
                        placeholder={'メールアドレス'}
                    />
                </div>
                <div className={styles['input-box']}>
                    <div className={styles['icon-box']}>
                        <i className={styles['icon'] + ' ' + styles['icon-phone']}/>
                    </div>
                    <InputNumber className={styles['number-input']}
                        value={phone}
                        onChange={this.onChangeNumber}                        
                        placeholder={'電話番号'}
                    />
                </div>
                <TextArea value={content}
                    onChange={this.onChange.bindArgs('content')}
                    className={styles['textarea']}
                    placeholder={'お問い合わせ内容（ 商品型番・JANコード・状態・台数など ）'}
                    row={5}
                />
                <div className={styles['button']} onClick={this.onConfirm}>送信する</div>
                </div>
                <Toast ref='toast'/>
                {
                    <Confirm
                        show={this.state.dialogShow}
                        comfirmTips={'提出された'}
                        onConfirm={this.handleConfirm}
                        onCancelConfirm={this.handleCancel}
                    >
                        <div>提出された</div>
                    </Confirm>
                }
            </div>
        )
    }
}
Appraisal.propTypes = {
    setAppraisalFlag: PropTypes.number,
    setAppraisal: PropTypes.func
}

