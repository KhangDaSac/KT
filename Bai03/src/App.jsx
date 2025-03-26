import { useState } from 'react'
import Counter from './Cau01/Counter'
import CounterReducer from './Cau02/CounterReducer'
import DataFetcher from './Cau03/DataFetcher'
import ReactMemoDemo from './Cau04/ReactMemoDemo'
import UseMemoDemo from './Cau04/UseMemoDemo'
import UseCallbackDemo from './Cau04/UseCallbackDemo'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Button, Card } from 'react-bootstrap'
import CustomHookDemo from './Cau05/CustomHookDemo'

function App() {


  return (
    <>
      <Container className="my-4">
        <h1 className="text-center mb-5">React Vite Project with React Bootstrap</h1>

        <h2 className="mb-3">Câu 1:</h2>
        <Counter />
        <hr className="my-5" />

        <h2 className="mb-3">Câu 2:</h2>
        <CounterReducer />
        <hr className="my-5" />

        <h2 className="mb-3">Câu 3:</h2>
        <DataFetcher />
        <hr className="my-5" />

        <h2 className="mb-3">Câu 4:</h2>
        <ReactMemoDemo />
        <UseMemoDemo />
        <UseCallbackDemo />

        <hr className="my-5" />

        <h2 className="mb-3">Câu 5:</h2>
        <CustomHookDemo />
        <hr className="my-5" />
      </Container>
    </>
  )
}

export default App
