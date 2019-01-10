import React from 'react';
import PropTypes from 'prop-types';
import { MonacoDiffEditor } from 'react-monaco-editor';

function DiffTerminalComponent(props) {
  const { body, rootBody, updateBody } = props;

  return (
    <MonacoDiffEditor
      original={rootBody}
      value={body}
      options={{
        automaticLayout: true,
      }}
      language="text"
      onChange={updateBody}
    />
  );
}

DiffTerminalComponent.propTypes = {
  body: PropTypes.string.isRequired,
  rootBody: PropTypes.string.isRequired,
  updateBody: PropTypes.func.isRequired,
};

export default DiffTerminalComponent;
