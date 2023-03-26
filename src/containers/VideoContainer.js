import React from 'react';
import { Row, Col, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addVideo } from '../redux/actions/content';
import { v4 as uuidv4 } from 'uuid';

import styles from "../styles/Home.module.css";

//Components
import Card from '../components/Card/Content';
import ContentModal from "../components/Modals/Content";

const VideoContainer = () => {

  const [visible, setVisible] = React.useState(false);
  const dispatch = useDispatch();
  const videos = useSelector(state => state.videos);

  const handleOpen = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  const handleSubmit = (values) => {
    dispatch(addVideo({ id:uuidv4(), ...values}));
    handleClose();
  };
  return (
    <div style={{ padding: '2em'}}>
      <ContentModal handleSubmit={handleSubmit} visible={visible} close={handleClose} footer={null} destroyOnClose />
      <div className={styles.sub_header}>
      <h2 style={{marginBottom:30, marginTop:30 }}>Contents</h2>
      <Button type="primary" onClick={handleOpen}>Upload</Button>
      </div>
      <Row gutter={[40, 16]}>
        {videos.videos.map((video) => (
          <Col span={6} key={video.id} xs={23} sm={11} md={9} lg={5}>
            <Card name={video.name} mediaLink={video.contentLink} captionLink={video.captionLink} id={video.id}/>
          </Col>
        ))}
      </Row>

    </div>
  );
};

export default VideoContainer;