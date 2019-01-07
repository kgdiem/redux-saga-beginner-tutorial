import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { posts } from './reducers'

import { rootPostSaga } from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(posts, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootPostSaga)

const action = type => store.dispatch({type})

function render() {
  const state = store.getState();

  ReactDOM.render(
    <div>
      <div>
        {state.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        )
      )}
      </div>
      <button onClick={() => action('FETCH_POSTS')}>
        Get Posts
      </button>
    </div>,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
