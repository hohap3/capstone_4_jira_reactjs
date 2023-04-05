import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useController } from "react-hook-form";

function EditorAdminField(props) {
  const { name, label, control, ...restProps } = props;
  const editorRef = useRef(null);

  const {
    field,
    formState: { errors },
    fieldState: { invalid },
  } = useController({ name, control });

  function handleEditorChange(content, editor) {
    field.onChange(content);
  }

  return (
    <div className="form__setting-item flex flex-col mb-4">
      <label className="text-sm text-gray-600 font-medium mb-4">{label}</label>
      <Editor
        name={field.name}
        value={field.value}
        onInit={(evt, editor) => (editorRef.current = editor)}
        onEditorChange={handleEditorChange}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
    </div>
  );
}

export default EditorAdminField;
