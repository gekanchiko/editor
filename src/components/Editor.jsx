// import React from 'react';

import { Editor, EditorState } from 'draft-js';
import { Button } from 'antd';
import 'draft-js/dist/Draft.css';

const React = window.React;
const { useState } = React;

const MyEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onChange = newEditorState => {
    setEditorState(newEditorState);
  };

  return (
    <>
      Editor
      <Editor editorState={editorState} onChange={onChange} />
      <Button type="primary" loading style={{ marginTop: 20 }}>
        Loading
      </Button>
    </>
  );
};

// const MyEditor = () => {
//   return (
//     <div>
//       <p>MODULE 1 -> Editor edited</p>
//     </div>
//   );
// };

export default MyEditor;