import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MonacoEditor from 'react-monaco-editor';

const styles = theme => ({
  wrapper: {
    height: 'calc(90% - 1px)',
    width: '100%',
    borderBottom: '1px solid #cfd0d2',
  },
});

const editorWillMount = (monaco) => {
  monaco.editor.defineTheme('myTheme', {
    base: 'vs',
    inherit: true,
    rules: [{ background: '#20262e' }],
  });
  monaco.editor.setTheme('myTheme');
};

const editorDidMount = (editor, monaco) => {
  editor.focus();
};

class CodeEditorComponent extends React.Component {
  handleChange = (body) => {
    const { fid, updateBody } = this.props;
    updateBody(fid, body);
  }

  render() {
    const { classes, file } = this.props;

    return (
      <div className={classes.wrapper}>
        <MonacoEditor
          options={{
            automaticLayout: true,
          }}
          value={file.body}
          editorDidMount={editorDidMount}
          editorWillMount={editorWillMount}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

CodeEditorComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  file: PropTypes.object.isRequired,
  fid: PropTypes.number.isRequired,
  updateBody: PropTypes.func.isRequired,
};

export default withStyles(styles)(CodeEditorComponent);