import React, { useState, useRef, useEffect } from 'react';
import {
  IconButton,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  Code,
  Link,
  Undo,
  Redo,
  FormatClear,
  Fullscreen,
  FormatListNumbered,
  FormatListBulleted,
  FormatAlignLeft,
  FormatAlignCenter,
  FormatAlignRight,
  LooksOne,
  LooksTwo,
  Image,
  Movie,
  FormatColorText,
  FormatColorFill,
  PreviewOutlined,
} from '@mui/icons-material';
import { Editor, EditorState, RichUtils, convertToRaw, Modifier } from 'draft-js';
import { marked } from 'marked';
import 'draft-js/dist/Draft.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: '8px',
  },
  editorWrapper: {
    flexGrow: 1,
    backgroundColor: '#f9f9f9',
    padding: '16px',
    transition: 'background-color 0.2s ease-in-out',
  },
  preview: {
    padding: '16px',
  },
  saveButton: {
    marginLeft: 'auto',
  },
  wordCount: {
    marginRight: '16px',
  },
};

const CustomEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [dialogOpen, setDialogOpen] = useState(false);
  const editorRef = useRef(null);
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    const content = editorState.getCurrentContent();
    const text = content.getPlainText();
    const words = text.trim().split(/\s+/);
    setWordCount(words.length);
    setCharCount(text.length);
  }, [editorState]);

  const handleChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const handleLink = () => {
    const selection = editorState.getSelection();
    if (!selection.isCollapsed()) {
      const url = window.prompt('Enter the URL');
      const contentState = editorState.getCurrentContent();
      const contentWithLink = Modifier.applyInlineStyle(
        contentState,
        selection,
        'LINK',
        { url }
      );
      const newEditorState = EditorState.push(
        editorState,
        contentWithLink,
        'apply-inline-style'
      );
      setEditorState(newEditorState);
    }
  };

  const handleUndo = () => {
    setEditorState(EditorState.undo(editorState));
  };

  const handleRedo = () => {
    setEditorState(EditorState.redo(editorState));
  };

  const handleClearFormat = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'CODE'));
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'LINK'));
  };

  const handleFullscreen = () => {
    const editorWrapper = document.getElementById('editor-wrapper');
    if (editorWrapper) {
      editorWrapper.requestFullscreen();
    }
  };

  const handleSave = () => {
    const content = editorState.getCurrentContent();
    const rawContent = convertToRaw(content);
    console.log('Editor content:', rawContent);
  };

  const handlePreview = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };


  const handleAlignment = (alignment) => {
    const selection = editorState.getSelection();
    const contentState = editorState.getCurrentContent();
    const blockKey = selection.getStartKey();
    const block = contentState.getBlockForKey(blockKey);

    if (block) {
      const newContentState = contentState.setIn(
        ['blockMap', blockKey, 'data', 'text-align'],
        alignment
      );

      const newEditorState = EditorState.push(
        editorState,
        newContentState,
        'change-block-data'
      );

      setEditorState(newEditorState);
    }
  };







  const getAlignmentStyle = () => {
    const selection = editorState.getSelection();
    const block = editorState.getCurrentContent().getBlockForKey(selection.getStartKey());
    const textAlign = block.getData().get('text-align');
    if (textAlign) {
      return textAlign.replace('text-', '');
    }
    return 'left';
  };

  const renderPreview = () => {
    const content = editorState.getCurrentContent();
    const rawContent = convertToRaw(content);
    const markdown = marked(JSON.stringify(rawContent));
    return <div style={styles.preview} dangerouslySetInnerHTML={{ __html: markdown }} />;
  };

  const handleCodeSyntaxHighlighting = () => {
    const contentState = editorState.getCurrentContent();
    const selection = editorState.getSelection();
    const selectedBlock = contentState.getBlockForKey(selection.getStartKey());
    const blockType = selectedBlock.getType();
    const data = selectedBlock.getData();

    if (blockType === 'code-block') {
      const language = data.get('language') || 'javascript';
      const code = selectedBlock.getText();
      return (
        <SyntaxHighlighter language={language} style={solarizedlight}>
          {code}
        </SyntaxHighlighter>
      );
    }

    return null;
  };

  return (
    <div style={styles.container}>
      <div style={styles.toolbar}>
        <Tooltip title="Bold" placement="top">
          <IconButton onClick={() => setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'))}>
            <FormatBold />
          </IconButton>
        </Tooltip>
        <Tooltip title="Italic" placement="top">
          <IconButton onClick={() => setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'))}>
            <FormatItalic />
          </IconButton>
        </Tooltip>
        <Tooltip title="Underline" placement="top">
          <IconButton onClick={() => setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'))}>
            <FormatUnderlined />
          </IconButton>
        </Tooltip>
        <Tooltip title="Code" placement="top">
          <IconButton onClick={() => setEditorState(RichUtils.toggleInlineStyle(editorState, 'CODE'))}>
            <Code />
          </IconButton>
        </Tooltip>
        <Tooltip title="Link" placement="top">
          <IconButton onClick={handleLink}>
            <Link />
          </IconButton>
        </Tooltip>
        <Tooltip title="Undo" placement="top">
          <IconButton onClick={handleUndo}>
            <Undo />
          </IconButton>
        </Tooltip>
        <Tooltip title="Redo" placement="top">
          <IconButton onClick={handleRedo}>
            <Redo />
          </IconButton>
        </Tooltip>
        <Tooltip title="Clear Formatting" placement="top">
          <IconButton onClick={handleClearFormat}>
            <FormatClear />
          </IconButton>
        </Tooltip>
        <Tooltip title="Fullscreen" placement="top">
          <IconButton onClick={handleFullscreen}>
            <Fullscreen />
          </IconButton>
        </Tooltip>
        <Tooltip title="Numbered List" placement="top">
          <IconButton onClick={() => setEditorState(RichUtils.toggleBlockType(editorState, 'ordered-list-item'))}>
            <FormatListNumbered />
          </IconButton>
        </Tooltip>
        <Tooltip title="Bulleted List" placement="top">
          <IconButton onClick={() => setEditorState(RichUtils.toggleBlockType(editorState, 'unordered-list-item'))}>
            <FormatListBulleted />
          </IconButton>
        </Tooltip>
        <Tooltip title="Align Left" placement="top">
          <IconButton onClick={() => handleAlignment('left')}>
            <FormatAlignLeft />
          </IconButton>
        </Tooltip>
        <Tooltip title="Align Center" placement="top">
          <IconButton onClick={() => handleAlignment('center')}>
            <FormatAlignCenter />
          </IconButton>
        </Tooltip>
        <Tooltip title="Align Right" placement="top">
          <IconButton onClick={() => handleAlignment('right')}>
            <FormatAlignRight />
          </IconButton>
        </Tooltip>
        <Tooltip title="Heading 1" placement="top">
          <IconButton onClick={() => setEditorState(RichUtils.toggleBlockType(editorState, 'header-one'))}>
            <LooksOne />
          </IconButton>
        </Tooltip>
        <Tooltip title="Heading 2" placement="top">
          <IconButton onClick={() => setEditorState(RichUtils.toggleBlockType(editorState, 'header-two'))}>
            <LooksTwo />
          </IconButton>
        </Tooltip>
        <Tooltip title="Insert Image" placement="top">
          <IconButton>
            <Image />
          </IconButton>
        </Tooltip>
        <Tooltip title="Insert Video" placement="top">
          <IconButton>
            <Movie />
          </IconButton>
        </Tooltip>
        <Tooltip title="Text Color" placement="top">
          <IconButton>
            <FormatColorText />
          </IconButton>
        </Tooltip>
        <Tooltip title="Background Color" placement="top">
          <IconButton>
            <FormatColorFill />
          </IconButton>
        </Tooltip>
        <Tooltip title="Preview" placement="top">
          <IconButton onClick={handlePreview}>
            <PreviewOutlined />
          </IconButton>
        </Tooltip>
        <Button
          variant="contained"
          color="primary"
          style={styles.saveButton}
          onClick={handleSave}
        >
          Save
        </Button>
        <div style={styles.wordCount}>
          Words: {wordCount}, Characters: {charCount}
        </div>
      </div>
      <div
        id="editor-wrapper"
        style={{
          ...styles.editorWrapper,
          textAlign: getAlignmentStyle() || 'left',
        }}
        onClick={() => editorRef.current.focus()}
      >
        <Editor
          ref={editorRef}
          editorState={editorState}
          onChange={handleChange}
          spellCheck={true}
          placeholder="Start writing..."
        />
        {handleCodeSyntaxHighlighting()}
      </div>
      <Dialog open={dialogOpen} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <DialogTitle>Preview</DialogTitle>
        <DialogContent>{renderPreview()}</DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CustomEditor;
