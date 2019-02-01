export const UPDATE_TERMINAL_BODY = 'UPDATE_TERMINAL_BODY';
export const RECEIVE_TERMINAL = 'RECEIVE_TERMINAL';
export const RECEIVE_ROOT_TERMINAL = 'RECEIVE_ROOT_TERMINAL';
export const RESET_TERMINAL = 'RESET_TERMINAL';

export const resetTerminalActionCreator = () => {
  return {
    type: RESET_TERMINAL,
  };
};

export const updateBodyActionCreator = (body) => {
  return {
    type: UPDATE_TERMINAL_BODY,
    body,
  };
};

export const receiveTerminalActionCreator = (terminal) => {
  return {
    type: RECEIVE_TERMINAL,
    terminal,
  };
};

export const receiveRootTerminalActionCreator = (terminal) => {
  return {
    type: RECEIVE_ROOT_TERMINAL,
    terminal,
  };
};