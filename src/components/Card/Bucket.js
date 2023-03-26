import React from 'react';
import { Card, Menu, Dropdown, Button, Space, Modal } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';

//Actions
import { deleteBucket, updateBucket } from '../../redux/actions/buckets';

//Componets
import UploadModal from "../Modals/Upload";
import ContentModal from "../Modals/Content";

const { Meta } = Card;

const CustomCard = ({ name, videos, id}) => {

  const [uploadVisible, setUploadVisible] = React.useState(false);
  const [contentVisible, setContentVisible] = React.useState(false);

  const dispatch = useDispatch();

  const handleUploadOpen = () => {
    setUploadVisible(true);
  };

  const handleUploadClose = () => {
    setUploadVisible(false);
  };

  const handleContentOpen = () => {
    setContentVisible(true);
  };

  const handleContentClose = () => {
    setContentVisible(false);
  };

  const handleMenuClick = (e) => {
    if(e.key === '2'){
        dispatch(deleteBucket(id));
    }
    else if (e.key === '1'){
        handleContentOpen();
    }
  };             

  const handleContentSubmit = (updated) => {
    dispatch(updateBucket(id, updated))
    handleContentClose();
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">Edit</Menu.Item>
      <Menu.Item key="2">Delete</Menu.Item>
    </Menu>
  );

  return (
    <>
    <UploadModal name={name} id={id} videos={videos} visible={uploadVisible} close={handleUploadClose} />
    <ContentModal handleSubmit={handleContentSubmit} visible={contentVisible} close={handleContentClose} footer={null} destroyOnClose mode={'bucket_edit'}  data={{name}} />
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <div style={{ width:"240px" , height:"135px", display:'flex' , justifyContent:'center', alignItems:'center'}}>
        <h4>{ videos ? videos.length : "0"} Video{videos.length > 1 ? 's' : null}</h4>
        </div>
      }
      onClick={handleUploadOpen}
    >
      <Meta title={name} style={{ textAlign:"center" }} />
    </Card>
    <Space key="options" size="middle">
      <Dropdown overlay={menu} trigger={['click']} >
        <Button type="text" icon={<EllipsisOutlined />} />
      </Dropdown>
    </Space>
    </>
  );
};

export default CustomCard;