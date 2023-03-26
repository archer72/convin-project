import React from 'react'
import { Modal, List } from 'antd';

import { useDispatch, useSelector } from 'react-redux';


//Actions
import { addVideoToBucket } from '../../redux/actions/buckets';


import styles from "../../styles/Home.module.css";

export default function Content({close, visible, video}) {
  const buckets = useSelector(state => state.buckets);
  const dispatch = useDispatch();

  const handleClick = (bucketId) => {
    dispatch(addVideoToBucket(bucketId, video))
    close();
  }
  return (
    <Modal visible={visible} onCancel={close} footer={null} destroyOnClose className={styles.content_modal}> 
    {buckets.buckets.length ? <List
      header={<h3>All Buckets</h3>}
      dataSource={buckets.buckets}
      renderItem={(item) => (
        <List.Item onClick= {() => handleClick(item.id)} style={{cursor:'pointer', marginTop: '10px'}}>
        {item.name}
        </List.Item>
      )}
    />  : <h4>No buckets Created</h4>}
  </Modal>
  )
}
