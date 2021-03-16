import React, {useEffect} from 'react';
import './App.css';
import BranchesList from "./components/BranchesList";
import { Layout} from "antd";

import {useActions} from "./hooks/useActions";
import {useTypesSelector} from "./hooks/useTypedSelector";

const { Content } = Layout;
function App() {

    const {branches, loading, error} = useTypesSelector(state => state.branch)

    const {fetchBranches} = useActions()

    useEffect(() => {
        fetchBranches()
    }, [])

  return (
    <Layout>
        <Content className="site-layout mainLayout">
            <h1 className='titleBranch'>Филиалы</h1>
            <BranchesList branches={branches} error={error} loading={loading}/>
        </Content>
    </Layout>
  );
}

export default App;
