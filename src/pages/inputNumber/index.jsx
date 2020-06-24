import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import {
    WiInputNumber,
} from 'wi-ui'
import './index.scss'


export default class Index extends Component {
    constructor(props){
        super(props)
        this.state = {
            val:10
        }
    }
    componentWillMount () { }

    componentDidMount () { }

    componentWillUnmount () { }

    componentDidShow () { }

    componentDidHide () { }

    testOnErr(err){
        console.log(err)
    }

    testOnBlur(value){
        this.setState({
            val:value
        })
        console.log('当前值为',value)
    }

  config = {
      navigationBarTitleText: '计数器组件'
  }

  render () {
      return (
          <View className='index'>
              <WiInputNumber
                  min={1}
                  step={1}
                  value={this.state.val}
                  onErrorInput={this.testOnErr.bind(this)}
                  onBlur={this.testOnBlur.bind(this)}
                  onChange={this.testOnBlur.bind(this)}
              />
          </View>
      )
  }
}
