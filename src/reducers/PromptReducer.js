export const initialState = {
  prompt: '',
  setting: {
    width: 1024,
    height: 1024,
    model: 'turbo',
  },
  response: {
    data: [],
    isLoading: false,
  },
  downloadImages:[

  ]
};

export const PromptReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PROMPT':
      return {
        ...state,
        prompt: action.payload,
      };
    case 'SET_SETTING':
      return {
        ...state,
        setting: action.payload,
      };
    case 'UPDATE_SIZE':
      return {
        ...state,
        setting: {
          ...state.setting,
          width: action.payload.width,
          height: action.payload.height,
        },
      };
    case 'SET_MODEL':
      return {
        ...state,
        setting: {
          ...state.setting,
          model: action.payload,
        },
      };
    case 'SET_RESPONSE':
      return {
        ...state,
        response: {
          ...state.response,
          data: action.payload,
        },
      };
    case 'SET_LOADING':
      return {
        ...state,
        response: {
          ...state.response,
          isLoading: action.payload,
        },
      };
    case 'SET_DOWNLOAD_IMAGES':
      return {
        ...state,
        downloadImages: [...state.downloadImages, action.payload],
      }
    default:
      return state;
  }
};
