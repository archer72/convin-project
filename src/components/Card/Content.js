import React from 'react';
import Image from 'next/image';
import { Card, Menu, Dropdown, Button, Space, Modal } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';

//Actions
import { deleteVideo, updateVideo } from '../../redux/actions/content';



//Componets
import UploadModal from "../Modals/Upload";
import ContentModal from "../Modals/Content";
import BucketsModal from "../Modals/Buckets";

const { Meta } = Card;

const CustomCard = ({ name, mediaLink, captionLink, id }) => {

  const [uploadVisible, setUploadVisible] = React.useState(false);
  const [contentVisible, setContentVisible] = React.useState(false);
  const [bucketVisible, setBucketVisible] = React.useState(false);

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

  const handleBucketOpen = () => {
    setBucketVisible(true);
  };

  const handleBucketClose = () => {
    setBucketVisible(false);
  };


  const handleMenuClick = (e) => {
    if (e.key === '2') {
        dispatch(deleteVideo(id));
    }
    else if(e.key === '1'){
        handleContentOpen();
    }
    else if(e.key === '3'){
      handleBucketOpen();
  }
  };

  const handleSubmit = (update) => {
    dispatch(updateVideo(id, update));
  };
             

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">Edit</Menu.Item>
      <Menu.Item key="2">Delete</Menu.Item>
      <Menu.Item key="3">Add to Bucket</Menu.Item>
    </Menu>
  );

  return (
    <>
    <ContentModal handleSubmit={handleSubmit} mode='edit' data={{name, mediaLink, captionLink}} visible={contentVisible} close={handleContentClose}  footer={null} />
    <UploadModal mediaLink={mediaLink} name={name} visible={uploadVisible} close={handleUploadClose} mode={'content'}/>
    <BucketsModal visible={bucketVisible} close={handleBucketClose} video={{ name, mediaLink, captionLink, id}} />
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <Image src={captionLink} height={135} width={240} />
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
