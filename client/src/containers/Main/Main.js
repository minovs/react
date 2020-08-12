import React, {Component} from 'react'
import classes from './Main.css'

class Main extends Component{
    render(){
        return (
            <>
                <header>
                    <div className={classes.headContainer}>
                        <ul className={classes.menu}>
                            <li><a href="/analytics">аналитика</a></li>
                            <li><a href="/settings">настройки</a></li>
                            <li id="update"><a href="/update">обновить</a></li>
                            <li><a href="/logout">выйти</a></li>
                        </ul>
                    </div>
                </header>
                <main>
                    <h1>Hello</h1>
                </main>
            </>
        )
    }
}

export default Main