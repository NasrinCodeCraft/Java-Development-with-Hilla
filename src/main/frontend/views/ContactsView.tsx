import { ViewConfig } from '@vaadin/hilla-file-router/types.js';
import {AutoGrid} from "@vaadin/hilla-react-crud";
import {ContactService} from "Frontend/generated/endpoints";
import ContactModel from "Frontend/generated/com/example/application/data/ContactModel";
import {useState} from "react";
import Contact from "Frontend/generated/com/example/application/data/Contact";
import ContactFrom from "Frontend/components/ContactFrom";

export const config: ViewConfig = { menu: { order: 2, icon: 'line-awesome/svg/user.svg'}, title: 'Contact' };

export default function ContactsView() {
    const [selected, setSelected] = useState<Contact | null>();
    const [updateCount, setUpdateCount] = useState(0);

    async function onSubmit(contact: Contact) {
        const saved = await ContactService.save(contact);
        setSelected(saved);
        setUpdateCount(updateCount + 1);
    }

    return (
        <div className="p-m">
            <AutoGrid
                key={updateCount + 1}
                service={ContactService}
                model={ContactModel}
                onActiveItemChanged={e => setSelected(e.detail.value)}
                selectedItems={[selected]}
            />

            {selected && <ContactFrom contact={selected} onSubmit={onSubmit} />}

        </div>
    );
}
