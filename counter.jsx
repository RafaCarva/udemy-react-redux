import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {inc, dec, stepChanged} from './src/counterActions'


const Counter = props =>(
    <div>       
        <h1>{props.counter.number}</h1>
        <input type="number"
            value={props.counter.step} onChange={props.stepChanged}/>
        <button onClick={props.dec} >DEC</button>
        <button onClick={props.inc} >INC</button>

    </div>
)

const mapStateToProps = state => ({counter: state.counter})
const mapDispatchToProps = dispatch => bindActionCreators({inc, dec, stepChanged}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Counter)
