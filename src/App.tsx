import React, {useEffect, useState} from 'react';
import './App.css';
import BranchesList from "./components/BranchesList";
import { Input, Layout} from "antd";
import Title from "antd/es/typography/Title";
import ModalAdd from "./components/ModalAdd";
import {SearchOutlined} from "@ant-design/icons";
import {useActions} from "./hooks/useActions";
const { Content } = Layout;
function App() {

    const [query, setQuery] = useState('')

    const {searchTracks} = useActions()

    useEffect(() => {
        searchTracks(query)
    }, [query])

  return (
    <Layout>
        <Content className="site-layout mainLayout">
            <Title>Филиалы</Title>
            <div className='navigation'>
                <Input className='navigation__input' value={query} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}  style={{ width: 400, borderRadius: 30 }} size="large" placeholder="Поиск" prefix={<SearchOutlined />} />
                <ModalAdd/>
            </div>
            <BranchesList/>
        </Content>
    </Layout>
  );
}

export default App;
