import Contact from "Frontend/generated/com/example/application/data/Contact";
import {useForm} from "@vaadin/hilla-react-form";
import ContactModel from "Frontend/generated/com/example/application/data/ContactModel";
import {useEffect} from "react";
import {Button, TextField} from "@vaadin/react-components";


interface ContactFromProps {
    contact: Contact;
    onSubmit: (contact: Contact) => Promise<void>;
}

export default function ContactFrom({contact, onSubmit}: ContactFromProps) {

    const {field, model, submit, read, invalid} = useForm(ContactModel, {onSubmit});

    useEffect(() => {
        read(contact)
    }, [contact])

    return (
        <div className="grid grid-cols-2 gap-2">
            <TextField label="First name" {...field(model.firstName)}/>
            <TextField label="Last name" {...field(model.lastName)}/>
            <TextField label="Email" {...field(model.email)}/>
            <TextField label="Phone" {...field(model.phone)}/>
            <Button onClick={submit} theme="primary" disabled={invalid}>Saved</Button>
        </div>
    )
};