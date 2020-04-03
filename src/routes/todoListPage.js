import React, { Component} from 'react'
import 'antd/dist/antd.css';
import { Button, List, Input, message } from 'antd/lib'
import styles from './todoListPage.css';
import { connect } from 'dva'
import { addUserAction, delUserAction, loadUserAction } from '../actions'
class TodoListPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
    }
  }
  componentDidMount = () => {
    this.props.dispatch(loadUserAction())
  }
  inputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    })
  }
  addClick = () => {
    if (!this.state.inputValue) {
      message.error('pls input the value...')
      return
    }
    this.props.dispatch(addUserAction(this.state.inputValue))
  }
  deleteItem = (index) => {
    this.props.dispatch(delUserAction(index))
  }
  render() {
    console.log(this.props)
    return (
      <div className={styles.App}>
        <div className={styles.content}>
          <Input className={styles.input} onChange={this.inputChange} />
          <Button type="primary" onClick={this.addClick}>ADD</Button>
        </div>
          <List
            bordered
            dataSource={this.props.users}
            renderItem={(item,index) => (
              <List.Item key={index} onClick={()=>this.deleteItem(index)}>{item.name}</List.Item>
            )}
          />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    msg: state.todoList.msg,
    users: state.todoList.userList,
  }
}

export default connect(mapStateToProps)(TodoListPage) 