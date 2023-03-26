import React from 'react'
import { Modal, List } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';

//Actions
import { removeVideoFromBucket } from '../../redux/actions/buckets';

export default function Upload({close, visible, id,  mediaLink, name, mode, videos}) {

  const dispatch = useDispatch();
  return (
    <Modal
    visible={visible}
    onCancel={close}
    footer={null}
    width={800}
    centered
    bodyStyle={{ padding:20 }}
    destroyOnClose
  >
    {
      mode === "content" ? <> <h3 style={{marginBottom:30, marginTop:30 }}>{name}</h3>
       <iframe
      src={mediaLink}
      width="100%"
      height="400"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
      title={name}
    />
    </> : 
    videos.length ? <List
      header={<h3>All Videos</h3>}
      dataSource={videos}
      renderItem={(item, index) => (
        <List.Item style={{cursor:'pointer', marginTop: '10px', display: 'flex', justifyContent:'space-between'}}>
        <div style={{display:'flex', alignItems:'center'}}><img src={item.captionLink} width="70" height="50" style={{marginRight: 10}}  /> {item.name}</div><p><DeleteOutlined onClick={() => dispatch(removeVideoFromBucket(id, item.id)) } /></p>
        </List.Item>
      )}
    />  : <h4>No Videos Added</h4>
    }
  </Modal>
  )
}
