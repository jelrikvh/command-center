import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'

const store = createStore(rootReducer, {
    "incidents": [
        {
            key: 'A-12-345',
            title: 'Rioolpomp verstopt',
            location: 'Toiletten houtloods',
            active: true
        },
        {
            key: 'T-12-345',
            title: 'Begeleiding hulpdiensten',
            location: 'Nieuwe Plantage - pad hoofdingang',
            active: false
        },
        {
            key: 'E-12-345',
            title: 'Reanimatie',
            location: 'Nieuwe Plantage - pad hoofdingang',
            active: true
        },
    ]
}
)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
