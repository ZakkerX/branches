import React, {useEffect, useState} from 'react';
import {Modal, Form, Input, Button} from 'antd';

const ModalAdd = ({addHandler}) => {
    const [visible, setVisible] = useState(false);
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')

    const handleOk = () => {
        setPhone('')
        setAddress('')
        setVisible(false)
        addHandler(address, phone)
    }

    return (
        <>
            <Button size='large' className='navigation__btn' type="primary" onClick={() => setVisible(true)}>
                Добавить
            </Button>
            <Modal
                className='modalBranch'
                width={327}
                title="Добавление филиала"
                visible={visible}
                onCancel={() => setVisible(false)}
                footer={null}
            >
                <Form layout="vertical">
                    <Form.Item label="Адресс">
                        <Input required placeholder="" value={address} onChange={(e) => setAddress(e.target.value)}/>
                    </Form.Item>
                    <Form.Item label="Телефон">
                        <Input required type='tel' placeholder="" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    </Form.Item>
                    <div className='modalBranch__buttons'>
                        <Button size='large' className='modalBranch__buttons-save'
                                onClick={() => {

                                    handleOk(phone, address)
                                }}
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