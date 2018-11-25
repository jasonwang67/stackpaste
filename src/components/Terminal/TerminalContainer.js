import { connect } from 'react-redux';
import TerminalComponent from './TerminalComponent';
import { updateBodyActionCreator } from './ducks/actions';

const mapStateToProps = (state) => {
  return {
    body: state.terminal.body,
    version: state.app.version,
    rootBody: state.terminal.rootBody,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateBody: (body) => {
      dispatch(updateBodyActionCreator(body));
    },
  };
};

const TerminalContainer = connect(mapStateToProps, mapDispatchToProps)(TerminalComponent);

export default TerminalContainer;
