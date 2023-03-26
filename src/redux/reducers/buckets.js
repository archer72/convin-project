const initialState = {
    buckets: []
  };

const bucketsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_BUCKET':
        return {
          ...state,
          buckets: [...state.buckets, action.payload]
        };
      case 'DELETE_BUCKET':
        return {
          ...state,
          buckets: state.buckets.filter(bucket => bucket.id !== action.payload)
        };
      case 'UPDATE_BUCKET':
        return {
          ...state,
          buckets: state.buckets.map(bucket =>
            bucket.id === action.payload.id ? { ...bucket, ...action.payload.updatedBucket } : bucket
          )
        };
      case 'ADD_VIDEO_TO_BUCKET':
          return {
            ...state,
            buckets: state.buckets.map(bucket =>
              bucket.id === action.payload.id ? {...bucket, videos : [...bucket.videos, {...action.payload.video}] } : bucket
            )
          };
      case 'REMOVE_VIDEO_FROM_BUCKET':
            return {
              ...state,
              buckets: state.buckets.map((bucket) => {
                if (bucket.id === action.payload.id) {
                  return {
                    ...bucket,
                    videos: bucket.videos.filter(
                      (video) => video.id !== action.payload.videoId
                    ),
                  };
                } else {
                  return bucket;
                }
              }),
            };
      default:
        return state;
    }
  };
  
  export default bucketsReducer;