


import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { decrement, increment, selectCount } from './counterSlice';
import './counter.css'

function Counter() {


    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return (
        <div className="counter">



            <span >{count}</span>

            <div className="count-one">
                <button
                    onClick={() => dispatch(increment())}
                >
                    +1
                </button>

                <button
                    onClick={() => dispatch(decrement())}
                >
                    -1
                </button>
            </div>
            <div className="count-five">
                <button
                    onClick={() => dispatch(increment())}
                >
                    +5
                </button>

                <button
                    onClick={() => dispatch(decrement())}
                >
                    -5
                </button>
            </div>

        </div>
    )
}

export default Counter
