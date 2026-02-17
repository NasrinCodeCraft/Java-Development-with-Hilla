import { ViewConfig } from '@vaadin/hilla-file-router/types.js';
import {AutoGrid} from "@vaadin/hilla-react-crud";
import {ContactService} from "Frontend/generated/endpoints";
import ContactModel from "Frontend/generated/com/example/application/data/ContactModel";
export const config: ViewConfig = { menu: { order: 2, icon: 'line-awesome/svg/user.svg'}, title: 'Contact' };

export default function ContactsView() {
    return (
        <div className="p-m">
            <AutoGrid service={ContactService} model={ContactModel}  />
        </div>
    );
}
