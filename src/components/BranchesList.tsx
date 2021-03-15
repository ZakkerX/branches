import React, {useEffect, useState} from 'react';
import {Badge, Table} from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import ModalDelete from "./ModalDelete";
import {useTypesSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";



const BranchesList:React.FC = () => {

    const [visible, setVisible] = useState(false);
    const [item, setItem] = useState({})

    const onItem = (text:any) => {
        setItem(text)
        setVisible(true)
    }

    const onDelete = () => {
        deleteBranch(item)
        setVisible(false)
    }

    const {branches, error, loading} = useTypesSelector(state => state.branch)

    const {success, error: deleteError, loading: deleteLoading} = useTypesSelector(state => state.deleteBranch)

    const {fetchBranches, deleteBranch} = useActions()

    useEffect(() => {
        fetchBranches()
    }, [success])


    const columns = [
        {
            title: '№',
            dataIndex: '',
            key: 'index',
            sorter: {},
            render: (text:any, record:any, index:number) => (
                <span>{index + 1}</span>
            ),
        },
        {
            title: 'Адресс',
            dataIndex: '',
            key: 'address',
            sorter: {},
            render: (text:any) => (
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
            render: (phone:string) => (
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
            render: (status:boolean) => (
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
            render: (text:any) => (
                <div className='tableBranches__cell'>
                    <span  className='tableBranches__cell-delete'>
                         <CloseOutlined onClick={() => onItem(text)}/>
                     </span>
                </div>
            )
        }

    ];

    return (

        <div className="site-layout-background">
            <Table loading={loading}  className='tableBranches' columns={columns} dataSource={branches} rowKey='id' />
            <ModalDelete loading={loading} visible={visible} item={item} onVisible={() => setVisible(false)} onDelete={onDelete}/>
        </div>

    )
}

export default BranchesList