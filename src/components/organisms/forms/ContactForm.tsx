import React from "react";
import Button from "src/components/ui/Button";

export interface Form {
  name: string;
  comments: string;
  submit: string;
}

export type Placeholders = {
  name: string;
  email: string;
  comments: string;
};

interface Props extends Form {
  placeholders: Placeholders;
}

const ContactForm: React.FC<Props> = ({
  comments,
  name,
  submit,
  placeholders,
}) => {
  return (
    <form
      action="https://formsubmit.co/36fd45573596bdfe935fcc119f220e27"
      method="POST"
    >
      <input
        type="hidden"
        name="_next"
        value="https://www.josuecuevas.com/"
      ></input>
      <div className="grid gap-6 mb-6">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium"
          >
            {name}
          </label>
          <input
            type="text"
            name="Nombre"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-60"
            placeholder={placeholders.name}
            required
          />
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder={placeholders.email}
          required
        />
      </div>

      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {comments}
      </label>
      <textarea
        id="message"
        name="comentarios"
        rows={4}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-50"
        placeholder={placeholders.comments}
      ></textarea>
      <div className="flex lg:justify-end">
        <Button type="submit" className="mt-8">
          {submit}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
