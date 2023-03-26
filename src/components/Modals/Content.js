import React from 'react'
import { Modal, Form, Input, Button } from 'antd';

import styles from "../../styles/Home.module.css";

export default function Content({close, visible, handleSubmit, mode, data}) {
  return (
    <Modal visible={visible} onCancel={close} footer={null} destroyOnClose className={styles.content_modal}>
    <Form  layout={'vertical'} onFinish={handleSubmit} className={styles.content_form}>
      <Form.Item className={styles.content_form_item} label="Name" name="name" rules={[{ required: true, message: 'Please input your Name!' }]}>
        <Input defaultValue={mode === 'edit' || mode === 'bucket_edit' ? data.name : null} />
      </Form.Item>
    {mode === 'bucket' || mode === 'bucket_edit' ? null : <><Form.Item className={styles.content_form_item}
        label="Thumbnail"
        name="captionLink"
        rules={[{ required: true, message: 'Please input your Thumbnail!' }]}
      >
        <Input defaultValue={mode === 'edit' ? data.captionLink : null} />
      </Form.Item>
      <Form.Item className={styles.content_form_item}
        label="Link"
        name="contentLink"
        rules={[{ required: true, message: 'Please input your Link!' }]}
      >
        <Input defaultValue={mode === 'edit' ? data.mediaLink : null} />
      </Form.Item>
      </>}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          {mode === 'bucket' ? "Add" : "Upload"}
        </Button>
      </Form.Item>
    </Form>
  </Modal>
  )
}
