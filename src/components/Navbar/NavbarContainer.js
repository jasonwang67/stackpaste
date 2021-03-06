import { connect } from 'react-redux';
import NavbarComponent from './NavbarComponent';
import { createPasteThunk, createVersionThunk, resetPasteActionCreator, toggleTutorialActionCreator } from '../App/ducks/actions';
import { resetFilesActionCreator } from '../Files/ducks/actions';
import { resetNotesActionCreator } from '../Notes/ducks/actions';

const mapStateToProps = (state) => {
  return {
    short: state.app.short,
    files: state.files,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleTutorial: () => {
      dispatch(toggleTutorialActionCreator());
    },
    createPaste: () => {
      return dispatch(createPasteThunk());
    },
    createVersion: () => {
      return dispatch(createVersionThunk());
    },
    reset: () => {
      dispatch(resetPasteActionCreator());
      dispatch(resetFilesActionCreator());
      dispatch(resetNotesActionCreator());
    },
  };
};

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);

export default NavbarContainer;
