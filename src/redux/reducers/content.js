
const initialState = {
    videos: [],
    post: null,
  };
  
 const contentReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_VIDEO':
        return { ...state, videos: [...state.videos, action.payload] };
      case 'DELETE_VIDEO':
          return {
            ...state,
            videos: state.videos.filter(video => video.id !== action.payload)
          };
      case 'UPDATE_VIDEO':
          return {
          ...state,
          videos: state.videos.map(video =>
              video.id === action.payload.id ? { ...video, ...action.payload.updated } : video
          )
      };
      default:
        return state;
    }
  };

  export default contentReducer;