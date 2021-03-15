import React from 'react';
import {Button, Modal} from "antd";

const ModalDelete = ({loading, onDelete, item, onVisible, visible}:any) => {

    return (
        <Modal
            width={350}
            title="Удаление филиала"
            visible={visible}
            onCancel={() => onVisible()}
            footer={null}
            className='modalBranch'
        >
            <div className='modalBranch__info'>
                <p>Вы действительно хотите удалить филиал:</p>
                <p>{item.sity}, {item.address}</p>
            </div>

            <div className='modalBranch__buttons'>
                <Button size='large' className='modalBranch__buttons-delete' loading={loading} onClick={onDelete} type="primary" danger>Удалить</Button>
                <Button onClick={onVisible} size='large' type="text">Отмена</Button>
            </div>

        </Modal>
    );
};

export default ModalDelete;