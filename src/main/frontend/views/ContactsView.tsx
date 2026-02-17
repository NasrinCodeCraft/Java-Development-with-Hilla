import { ViewConfig } from '@vaadin/hilla-file-router/types.js';
import {AutoGrid} from "@vaadin/hilla-react-crud";
import {ContactService} from "Frontend/generated/endpoints";
import ContactModel from "Frontend/generated/com/example/application/data/ContactModel";
import {useState} from "react";
import Contact from "Frontend/generated/com/example/application/data/Contact";
export const config: ViewConfig = { menu: { order: 2, icon: 'line-awesome/svg/user.svg'}, title: 'Contact' };

export default function ContactsView() {
    const [selected, setSelected] = useState<Contact | null>();

    return (
        <div className="p-m">
            <AutoGrid
                service={ContactService}
                model={ContactModel}
                onActiveItemChanged={e => setSelected(e.detail.value)}
                selectedItems={[selected]}
            />

            {selected?.firstName}

        </div>
    );
}
