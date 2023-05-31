import React, { Component } from 'react'

export default class Categories extends Component {
    constructor(props){
        super(props);
        this.state = {
            categories : [
                {
                    key:"all",
                    name:"Всі"
                },
                {
                    key:"main",
                    name:"Головні"
                },
                {
                    key:"science",
                    name:"Наука"
                },
                {
                    key:"sport",
                    name:"Спорт"
                }
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
        </div>
    )
  }
}
