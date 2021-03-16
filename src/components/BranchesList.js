import React, {useEffect, useState} from 'react';
import {Badge, Input, Table} from 'antd';
import {CloseOutlined, SearchOutlined} from '@ant-design/icons';
import ModalDelete from "./ModalDelete";
import ModalAdd from "./ModalAdd";

const BranchesList= ({branches, loading, error}) => {
    const [visible, setVisible] = useState(false);
    const [item, setItem] = useState({})
    const [query, setQuery] = useState('')
    const [mockBranches, setMockBranches] = useState([])

    const onItem = (text) => {
        setItem(text)
        setVisible(true)
    }

    const onDelete = () => {
        const result = mockBranches.filter(br => br.id !== item.id)
        setMockBranches(result)
        setVisible(false)
    }

    const search = () => {
        const res = mockBranches.filter(item => {
            if(item.phone.includes(query)){
                return item
            }
        })
        setMockBranches(res)
    }

    const addHandler = (address, phone) => {

        const id = Math.floor(Math.random() * 100).toString()
        const  data = {
            id,
            address,
            sity: 'Новосибирск',
            phone,
            officeManager: 'Задорожный К.Л.',
            officeAdministrator: 'Ефимова К.А.',
            status: true
        }
        setMockBranches([...mockBranches, data])
    };

    useEffect(() => {
        search()
    }, [query])

    useEffect(() => {
        setMockBranches(branches)
    }, [branches])

    const columns = [
        {
            title: '№',
            dataIndex: '',
            key: 'index',
            sorter: {},
            render: (text, record, index) => (
                <span>{index + 1}</span>
            ),
        },
        {
            title: 'Адресс',
            dataIndex: '',
            key: 'address',
            sorter: {},
            render: (text) => (
                <div className='tableBranches__cell'>
                    <span className='tableBranches__cell-address'>{text.address}</span>
                    <span>{text.sity}</span>
                </div>
            ),
        },
        {
            title: 'Телефон',
            dataIndex: 'phone',
            key: 'phone',
            sorter: {},
            render: (phone) => (
                <div className='tableBranches__cell'>
                    {phone.split(' ').map((str, i) => {
                        return <span key={i}>{str}</span>
                    })}
                </div>
            ),
        },
        {
            title: 'Управляющий офиса',
            dataIndex: 'officeManager',
            key: 'officeManager',
            sorter: {}
        },
        {
            title: 'Администратор офиса',
            dataIndex: 'officeAdministrator',
            key: 'officeAdministrator',
            sorter: {}
        },
        {
            title: 'Статус',
            dataIndex: 'status',
            key: 'status',
            sorter: {},
            render: (status) => (
                <>
                    {status ? <Badge
                        count={'Активный' }
                        style={{ color: '#000', backgroundColor: '#D1F1DC' }}
                    /> : <Badge
                        count={'Неактивный'}
                        style={{ color: '#838B96', backgroundColor: '#E2E4E7' }}
                    />}
                </>
            ),
        },
        {
            title: 'Действия',
            dataIndex: '',
            key: 'x',
            render: (text) => (
                <div className='tableBranches__cell'>
                    <span  className='tableBranches__cell-delete'>
                         <CloseOutlined onClick={() => onItem(text)}/>
                     </span>
                </div>
            )
        }

    ];

    return (
        <>
            {error && <>{error}</>}
            <div className='navigation'>
                <Input className='navigation__input' value={query}
                       onChange={(e) => setQuery(e.target.value)}
                       size="large"
                       placeholder="Поиск"
                       prefix={<SearchOutlined />} />
                <ModalAdd addHandler={addHandler}/>
            </div>
            <div className="site-layout-background">
                <Table loading={loading}  className='tableBranches' columns={columns} dataSource={mockBranches} rowKey='id' />
                <ModalDelete
                    loading={loading}
                    visible={visible}
                    item={item}
                    onVisible={() => setVisible(false)}
                    onDelete={onDelete}
                />
            </div>
        </>
    )
}

export default BranchesList