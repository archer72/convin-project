export const addBucket = (bucket) => {
    return {
      type: 'ADD_BUCKET',
      payload: bucket
    };
  };
  
  export const deleteBucket = (bucketId) => {
    return {
      type: 'DELETE_BUCKET',
      payload: bucketId
    };
  };
  
  export const updateBucket = (bucketId, updatedBucket) => {
    return {
      type: 'UPDATE_BUCKET',
      payload: { id: bucketId, updatedBucket }
    };
  };
  
  export const addVideoToBucket = (id , video) => ({
    type: 'ADD_VIDEO_TO_BUCKET',
    payload: { id : id, video : video  }
  });

  export const removeVideoFromBucket = (id, videoId) => ({
    type: 'REMOVE_VIDEO_FROM_BUCKET',
    payload: { id : id, videoId : videoId },
  });