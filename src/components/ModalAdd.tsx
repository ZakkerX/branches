import React, {useEffect, useState} from 'react';
import {Modal, Form, Input, Button} from 'antd';
import {useActions} from "../hooks/useActions";
import {useTypesSelector} from "../hooks/useTypedSelector";


const ModalAdd:React.FC = () => {
    const [visible, setVisible] = useState(false);
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')

    const handleOk = () => {
        addBranch({id: '12', address, sity: 'Новосибирск', phone, officeManager: 'Задорожный К.Л.', officeAdministrator: 'Ефимова К.А.', status: true})
    };
    const {success, error, loading} = useTypesSelector(state => state.addBranch)
    const {addBranch, fetchBranches} = useActions()

    useEffect(() => {
        if(success) {
            setVisible(false);
            setAddress('')
            setPhone('')
        }
        fetchBranches()
    }, [success])

    return (
        <>
            <Button size='large' className='navigation__btn' type="primary" onClick={() => setVisible(true)}>
                Добавить
            </Button>
            <Modal
                className='modalBranch'
                width={300}
                title="Добавление филиала"
                visible={visible}
                onCancel={() => setVisible(false)}
                footer={null}
            >
                {error && <p>{error}</p>}
                <Form layout="vertical">
                    <Form.Item label="Адресс">
                        <Input required placeholder="" value={address} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}/>
                    </Form.Item>
                    <Form.Item label="Телефон">
                        <Input required type='tel' placeholder="" value={phone} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}/>
                    </Form.Item>
                    <div className='modalBranch__buttons'>
                        <Button size='large' className='modalBranch__buttons-save'
                                loading={loading}
                                onClick={handleOk}
                                type="primary"
                        >
                            Сохранить
                        </Button>
                        <Button onClick={() => setVisible(false)} type="text" size='large'>Отмена</Button>
                    </div>

                </Form>
            </Modal>

        </>
    )
}

export default ModalAdd;