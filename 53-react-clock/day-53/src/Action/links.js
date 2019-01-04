import axios from 'axios';

export const loadLinkSuccess = (links) => {
    return {
        type: 'LOAD_LINK_SUCCESS',
        links
    }
}

export const loadLinkFailure = () => {
    return {
        type: 'LOAD_LINK_FAILURE'
    }
}

export const clear = () => {
    return {
        type: 'CLEAR'
    }
}

export function loadLink() {
    return (dispatch) => {
      return axios('https://www.reddit.com/r/programming.json').then((res) => {
        let threads = res.data;
        let links = threads.data.children.map((t) => ({
          title: t.data.title,
          url: t.data.url
        }));
        dispatch(loadLinkSuccess(links));
      }).catch((err) => {
        console.log('Failed', err);
        dispatch(loadLinkFailure());
      });
    };
  }