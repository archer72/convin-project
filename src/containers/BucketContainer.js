import React from 'react';
import { Row, Col, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addBucket } from '../redux/actions/buckets';
import { v4 as uuidv4 } from 'uuid';

import styles from "../styles/Home.module.css";

//Components
import Card from '../components/Card/Bucket';
import ContentModal from "../components/Modals/Content";

const VideoContainer = () => {

  const [visible, setVisible] = React.useState(false);
  const dispatch = useDispatch();
  const buckets = useSelector(state => state.buckets);

  const handleOpen = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  const handleSubmit = (values) => {
    dispatch(addBucket({ id:uuidv4(), videos:[] , ...values}));
    handleClose();
  };
  return (
    <div style={{ padding: '2em'}}>
      <ContentModal handleSubmit={handleSubmit} visible={visible} close={handleClose} footer={null} destroyOnClose mode={'bucket'} />
      <div className={styles.sub_header}>
      <h2 style={{marginBottom:30, marginTop:30 }}>Buckets</h2>
      <Button type="primary" onClick={handleOpen}>Add</Button>
      </div>
      <Row gutter={[40, 16]}>
        {buckets.buckets.map((bucket) => (
          <Col span={6} key={bucket.id} xs={23} sm={11} md={9} lg={5}>
            <Card name={bucket.name} id={bucket.id} videos={bucket.videos} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default VideoContainer;