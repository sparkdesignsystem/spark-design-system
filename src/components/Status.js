import React from 'react';
import { SprkTable } from '@sparkdesignsystem/spark-react';
import {
  SprkLink,
  SprkIcon,
  SprkDivider,
  SprkToggle,
  SprkAccordion,
  SprkAccordionItem
} from '@sparkdesignsystem/spark-react';

const Status = ({
    statusName,
    href
}) => {
    if (statusName == "ready") {
        return (
            <div>
                <SprkIcon className="
                    docs-status__Ready 
                    sprk-c-Icon--filled
                    sprk-c-Icon--l"
                    iconName="check-mark-filled"
                />
                <SprkLink
                    element="a"
                    href={href}
                    variant="simple"
                    additionalClasses="sprk-u-Color--green"
                >
                    Ready
                </SprkLink> 
            </div>
        );
    } else if (statusName == "underReview") {
        return (
            <div>
                <SprkIcon className="
                    docs-status__UnderReview
                    sprk-c-Icon--filled
                    sprk-c-Icon--l"
                    iconName="caution-filled"
                />
                <SprkLink
                    element="a"
                    href={href}
                    variant="simple"
                    additionalClasses="sprk-u-Color--yellow"
                >
                    Under Review
                </SprkLink>
            </div>
        );
    } else if (statusName == "updated") {
        return (
            <div>
                <SprkIcon className="
                    docs-status__Updated
                    sprk-c-Icon--filled
                    sprk-c-Icon--l"
                    iconName="recurring-update"
                />
                <SprkLink
                    element="a"
                    href={href}
                    variant="simple"
                    additionalClasses="sprk-u-Color--blue"
                >
                    Updated
                </SprkLink>
            </div>
        );
    } else if (statusName == "research") {
        return (
            <div>
                <SprkIcon className="
                    docs-c-status-Research 
                    sprk-c-Icon--filled
                    sprk-c-Icon--l"
                    iconName="search"
                />
                Research
            </div>
        );
    } else if (statusName == "build") {
        return (
            <div>
                 <SprkIcon className="
                    docs-c-status-Build 
                    sprk-c-Icon--filled
                    sprk-c-Icon--l"
                    iconName="settings-filled"
                />
                Build   
            </div>
        );
    } else if (statusName == "lowPriority") {
        return (
            <div class="sprk-u-Color--green">
                <SprkIcon className="
                    docs-c-status-LowPriority 
                    sprk-c-Icon--filled
                    sprk-c-Icon--l"
                    iconName="application-filled"
                />
                Low Priority
            </div>
        );
    } else if (statusName == "highPriority") {
        return (
            <div class="sprk-u-Color--red">
                <SprkIcon className="
                    docs-c-status-HighPriority 
                    sprk-c-Icon--filled
                    sprk-c-Icon--l"
                    iconName="application-filled"
                />
                High Priority
            </div>
        );
    } else if (statusName == "new") {
        return (
            <div class="sprk-u-Color--purple">
                <SprkIcon className="
                    docs-c-status-New 
                    sprk-c-Icon--filled
                    sprk-c-Icon--l"
                    iconName="vip-filled"
                />
                New
            </div>
        );
    }
    return (
        <div>
            Awaiting Info
        </div>
    );
};

export default Status;