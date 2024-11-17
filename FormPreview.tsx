import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormPreviewProps {
  schema: any;
}

const FormPreview: React.FC<FormPreviewProps> = ({ schema }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
    alert("Form submitted!");
  };

  if (!schema.fields) {
    return <p>No valid schema provided</p>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold">{schema.formTitle}</h2>
      <p className="text-gray-600">{schema.formDescription}</p>
      {schema.fields.map((field: any) => (
        <div key={field.id}>
          <label className="block mb-1">{field.label}</label>
          <input
            {...register(field.id, { required: field.required })}
            placeholder={field.placeholder}
            className="w-full p-2 border rounded-lg"
          />
          {errors[field.id] && <p className="text-red-500 text-sm">This field is required</p>}
        </div>
      ))}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">
        Submit
      </button>
    </form>
  );
};

export default FormPreview;
