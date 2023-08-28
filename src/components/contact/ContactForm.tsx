import React from "react";
import { Form, Placeholders } from "../../interfaces/generalStructure";
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
            className="block mb-2 text-sm font-medium dark:text-white"
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
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
        <button
          type="submit"
          className="text-white my-8 w-full lg:w-1/3 lg:max-w-[6rem]  bg-accent-color hover:bg-blue-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
        >
          {submit}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
