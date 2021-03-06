import React from 'react'
import {Row, Col} from 'antd'
import Utils from '../../utils/util.js'
import axios from '../../axios/'

import './index.less'

export default class Header extends React.Component {
    state = {}
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.setState({
            userName: 'Lingesin'
        })
        setInterval(() => {
            let sysTime = Utils.formateDate(new Date().getTime())
            this.setState({
                sysTime
            })
        })
        this.getWeatherAPIData()
    }

    getWeatherAPIData() {
        let city = '武汉'
        axios.jsonp({
            url: 'http://api.map.baidu.com/telematics/v3/weather?location=' + encodeURIComponent(city) + '&output=json&ak=uMRkveLIihGFR5NZZLn1Qw5sOTVHGpm0'
        }).then((res) => {

        })
    }
    
    render() {
        return (
        	<div className="header">
        		<Row className="header-top">
                    <Col span="24">
                        <span>欢迎，{this.state.userName}</span>
                        <a href="#"> 退出 </a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb-title"> 首页 </Col>
                    <Col span="20" className="weather">
                        <span className="date"> {this.state.sysTime} </span>
                        <span className="weather-detail"> 晴转多云 </span>
                    </Col>
                </Row>
        	</div>
        )
    }
}