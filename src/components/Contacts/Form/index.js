import React, { useEffect, useState } from "react";

const initialFormValues = {fullName:"",phoneNumber:""}
const Form = ({addContact,contacts}) => {

    const [form, setForm] = useState({fullName:"",phoneNumber:""})

    const onChangeInput = (e) => {
        setForm({...form,[e.target.name] : e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault(); /*form'un default'undeki sayfa yenilenmesini engelliyor */
        if(form.fullName === '' || form.phoneNumber === ''){
            return false;
        }

        addContact([...contacts,form]);

    }

    useEffect(() =>{
        setForm(initialFormValues);
    },[contacts])


  return (
    <form onSubmit={onSubmit}>
      <div>
        <input value={form.fullName} name="fullName" placeholder="Full Name" onChange={onChangeInput}/>
      </div>
      <div>
        <input value={form.phoneNumber} name="phoneNumber" placeholder="Phone Number" onChange={onChangeInput}/>
      </div>
      <div className="btn">
        <button>Add</button>
      </div>
    </form>
  );
};

export default Form;
