import React, { useRef, useState, useEffect } from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useDropzone } from 'react-dropzone';

import './CustomEditor.css';

const CustomEditor = React.forwardRef((props, ref) => {
  const editorRef = useRef(null);
  const [editorMode, setEditorMode] = useState('balloon');
  const [showTooltip, setShowTooltip] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [editorContent, setEditorContent] = useState('');
  const [markdownContent, setMarkdownContent] = useState('');
  const [codeBlockMode, setCodeBlockMode] = useState(false);
  const [theme, setTheme] = useState('default'); // Theme state

  const handleContentChange = (content) => {
    const plainText = content.replace(/<[^>]+>/g, '');
    const words = plainText.trim().split(/\s+/).filter((word) => word !== '');
    const characterCount = plainText.length;

    setWordCount(words.length);
    setCharacterCount(characterCount);
    setEditorContent(content);
    setMarkdownContent(plainText);

    console.log('Editor content:', content);
  };

  const handleSelectionChange = () => {
    const selection = window.getSelection();
    const editorContent = editorRef.current?.editor.getContents();
    const lastLineIndex = editorContent?.length - 1;

    if (selection.rangeCount > 0 && selection.toString().trim() !== '') {
      setEditorMode('bubble');
      setShowTooltip(true);
    } else if (
      selection.isCollapsed &&
      selection.focusNode &&
      selection.focusNode.nodeName === '#text' &&
      selection.focusNode.parentNode &&
      selection.focusNode.parentNode.nodeName === 'DIV' &&
      selection.focusNode.parentNode.getAttribute('data-index') === lastLineIndex?.toString()
    ) {
      setEditorMode('bubble');
      setShowTooltip(true);
    } else {
      setEditorMode('balloon-always');
      setShowTooltip(false);
    }
  };

  useEffect(() => {
    document.addEventListener('selectionchange', handleSelectionChange);
    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange);
    };
  }, []);

  useEffect(() => {
    const updateCounts = () => {
      const editorContent = editorRef.current?.editor.getContents();
      if (editorContent) {
        const plainText = editorContent
          .replace(/<[^>]+>/g, '')
          .replace(/&nbsp;|&#160;/gi, ' ');
        const words = plainText.trim().split(/\s+/).filter((word) => word !== '');
        const characterCount = plainText.length;

        setWordCount(words.length);
        setCharacterCount(characterCount);
      }
    };

    const interval = setInterval(updateCounts, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSave = () => {
    const content = editorRef.current?.editor.getContents();
    console.log('Saving content:', content);
  };

  const convertToHtml = (content) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = content;
    return wrapper.innerHTML;
  };

  const handlePrint = () => {
    const jsonContent = editorContent;
    const htmlContent = convertToHtml(jsonContent);
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>Custom Print Title</title>
          <style>
            /* Custom styles for print */
          </style>
        </head>
        <body>
          <div>${htmlContent}</div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  const handleButtonClick = () => {
    setShowTooltip(!showTooltip);
  };

  const handleCodeBlockToggle = () => {
    setCodeBlockMode(!codeBlockMode);
  };

  const handleImageUpload = async (acceptedFiles) => {
    for (const file of acceptedFiles) {
      const formData = new FormData();
      formData.append('image', file);

      // Upload the image to your server using an API endpoint or library
      // Replace `YOUR_IMAGE_UPLOAD_ENDPOINT` with your actual endpoint
      const response = await fetch('YOUR_IMAGE_UPLOAD_ENDPOINT', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const imageUrl = await response.json();
        const editorInstance = editorRef.current?.editor;
        if (editorInstance) {
          const range = editorInstance.getSelection();
          const insertIndex = range.index;
          editorInstance.insertHTML(insertIndex, `<img src="${imageUrl}" alt="Uploaded Image" />`);
        }
      }
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleImageUpload,
    multiple: true,
    accept: 'image/*',
  });

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  const editorOptions = {
    mode: editorMode,
    buttonList: [
      ['undo', 'redo'],
      ['bold', 'italic', 'underline', 'strike'],
      ['font', 'fontSize', 'formatBlock'],
      ['fontColor', 'hiliteColor', 'removeFormat'],
      ['outdent', 'indent'],
      ['align', 'horizontalRule', 'list', 'table'],
      ['link', 'image', 'video'],
      ['codeView'],
    ],
  };

  if (theme !== 'default') {
    editorOptions.plugins = [
      window['SunEditor'].Plugins.font,
      window['SunEditor'].Plugins.fontSize,
      window['SunEditor'].Plugins.formatBlock,
      window['SunEditor'].Plugins.style,
      window['SunEditor'].Plugins.align,
      window['SunEditor'].Plugins.horizontalRule,
      window['SunEditor'].Plugins.list,
      window['SunEditor'].Plugins.table,
      window['SunEditor'].Plugins.link,
      window['SunEditor'].Plugins.image,
      window['SunEditor'].Plugins.video,
    ];
    editorOptions.buttonList = [
      ['undo', 'redo'],
      ['bold', 'italic', 'underline', 'strike'],
      ['font', 'fontSize', 'formatBlock'],
      ['fontColor', 'hiliteColor', 'removeFormat'],
      ['outdent', 'indent'],
      ['align', 'horizontalRule', 'list', 'table'],
      ['link', 'image', 'video'],
      ['codeView'],
      ['fullScreen', 'showBlocks', 'codeBlock'],
    ];
  }


  return (
    <div className="custom-editor-container">
      <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
        <input {...getInputProps()} />
        <p>Drag and drop images here or click to select files</p>
      </div>
      <SunEditor
        ref={editorRef}
        setOptions={editorOptions}
        onChange={handleContentChange}
        setContents={editorContent}
        lang="en"
        onLoad={() => ref && ref.current && ref.current.focus()}
        placeholder="Start typing..."
        setDefaultStyle="color:#000"
        autoFocus={true}
      />
      {showTooltip && (
        <div className="tooltip">
          <button className="tooltip-button" onClick={handleCodeBlockToggle}>
            {codeBlockMode ? 'Disable Code Block' : 'Enable Code Block'}
          </button>
        </div>
      )}
      <div className="editor-controls">
        <div className="editor-info">
          <span>Word Count: {wordCount}</span>
          <span>Character Count: {characterCount}</span>
        </div>
        <div className="editor-buttons">
          <button onClick={handleSave}>Save</button>
          <button onClick={handlePrint}>Print</button>
          <button onClick={handleButtonClick}>{showTooltip ? 'Hide Tooltip' : 'Show Tooltip'}</button>
          <select value={theme} onChange={handleThemeChange}>
            <option value="default">Default Theme</option>
            <option value="solarizedlight">Solarized Light Theme</option>
          </select>
        </div>
      </div>
      {markdownContent && (
        <div className="markdown-preview">
          <SyntaxHighlighter language="markdown" style={solarizedlight}>
            {markdownContent}
          </SyntaxHighlighter>
          <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </div>
      )}
    </div>
  );
});

CustomEditor.displayName = "CustomEditor"

export default CustomEditor;





