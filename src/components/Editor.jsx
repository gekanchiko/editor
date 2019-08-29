import { Editor, EditorState } from 'draft-js';
import { Button } from 'antd';
import store from '../store';

import 'draft-js/dist/Draft.css';

const React = store.get('react');
const { useState } = React;

const MyEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onChange = newEditorState => {
    setEditorState(newEditorState);
  };

  return (
    <div style={{ padding: 50 }}>
      Editor
      <Editor editorState={editorState} onChange={onChange} />
      <Button type="primary" loading style={{ marginTop: 20 }}>
        Loading
      </Button>
    </div>
  );
};

export default MyEditor;