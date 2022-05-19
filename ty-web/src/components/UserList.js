import React, {Component} from 'react';
import 'isomorphic-fetch';
import {Button} from 'react-bootstrap';

export default class userList extends Component {
    constructor() {
        super();
        this.state = {}
    }

    delete = (id) => {
        fetch('http://localhost:8080/api/users/' + id, {
            method: 'delete'
        }).then(response => response.json()).then(users => {this.setState({users})});
    }
    async componentDidMount() {
        let users = await (await fetch(`http://localhost:8080/api/users`)).json();//主要是从后台拿json数据
        this.setState({users});
    }
    render() {
        let {users = []} = this.state;
        return (
            <div>
                <table className='table'>
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>姓名</th>
                        <th>年龄</th>
                        <th>电话</th>
                        <th>邮箱</th>
                        <th>职位</th>
                        <th>编辑</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(({uid, name, age, telephone, job, email}) =>
                        <tr key={uid}>
                            <td>{uid}</td>
                            <td>{name}</td>
                            <td>{age}</td>
                            <td>{telephone}</td>
                            <td>{email}</td>
                            <td>{job}</td>
                            <td>
                                <Button onClick={() => this.delete(uid)}>删除</Button>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}

