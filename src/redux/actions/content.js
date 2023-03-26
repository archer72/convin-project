export const addVideo = (video) => ({
    type: 'ADD_VIDEO',
    payload: video,
  });
  
  export const addPost = (post) => ({
    type: 'ADD_POST',
    payload: post,
  });

  export const deleteVideo = (postId) => {
    return {
      type: 'DELETE_VIDEO',
      payload: postId
    };
  };

  export const updateVideo = (id, updated) => {
    return {
      type: 'UPDATE_VIDEO',
      payload: { id: id, updated }
    };
  };
  
  