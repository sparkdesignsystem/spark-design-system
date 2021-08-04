import React from 'react';
import { SprkTable } from '@sparkdesignsystem/spark-react';
import {
  SprkLink,
  SprkIcon,
  SprkDivider,
  SprkToggle,
  SprkAccordion,
  SprkAccordionItem,
  SprkTooltip
} from '@sparkdesignsystem/spark-react';

const Status = ({
    statusName,
    href,
    additionalInfo
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
                <SprkTooltip iconAdditionalClasses="docs-status-question-mark docs-status-question-mark__yellow">
                    {additionalInfo}
                    
                </SprkTooltip>
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
                <SprkTooltip iconAdditionalClasses="docs-status-question-mark docs-status-question-mark__blue">
                    {additionalInfo}
                    
                </SprkTooltip>
            </div>
        );
    } else if (statusName == "research") {
        return (
            <div>
                <SprkIcon className="
                    docs-status__Research 
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
                    docs-status__Build 
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
                    docs-status__LowPriority 
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
                    docs-status__HighPriority 
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
                    docs-status__New 
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