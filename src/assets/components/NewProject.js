import { useRef, useState } from "react";
import Input from "./Input";
import Modal from "./Modal";

function NewProject({ onAdd, onCancel }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  const modal = useRef();

  // const [projectInput, setProjectInput] = useState({ title: "", description: "", date: "" })

  // const handleProjectInput = (e) => {
  //   const { name, value } = e.target;
  //   setProjectInput((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = dateRef.current.value;
    const enteredDate = dateRef.current.value;

    // validation
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    const newProjectData = {
      titleRef: enteredTitle,
      descriptionRef: enteredDescription,
      dateRef: enteredDate,
    };
    onAdd(newProjectData);

    titleRef.current.value = "";
    descriptionRef.current.value = "";
    dateRef.current.value = "";
  }

  return (
    <div className="flex flex-col bg-slate-100 w-3/4  p-3 rounded">
      <div className="flex justify-end space-x-4 ">
        <button onClick={onCancel}>cancel </button>
        <button
          onClick={handleSave}
          className=" rounded bg-blue-900 text-white p-1 px-2"
        >
          Save
        </button>
      </div>

      <div>
        <Modal ref={modal}>
          <p>fill all the input</p>
          <button
            onClick={() => {
              modal.current.close();
            }}
          >
            Close
          </button>
        </Modal>
        <Input ref={dateRef} label={"title"} />
        <Input ref={titleRef} label={"description"} textarea />
        <Input ref={descriptionRef} label={"date"} type="date" />
      </div>
    </div>
  );
}

export default NewProject;
