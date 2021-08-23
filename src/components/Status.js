import React from 'react';
import {
  SprkLink,
  SprkIcon,
  SprkTooltip
} from '@sparkdesignsystem/spark-react';

const Status = ({
    statusName,
    href,
    additionalInfo
}) => {
    if (statusName === "ready") {
        return (
            <div>
                <SprkIcon className="
                    docs-status__ready 
                    sprk-c-Icon--filled
                    sprk-c-Icon--l"
                    iconName="check-mark-filled"
                />
                <SprkLink
                    element="a"
                    href={href}
                    variant="simple"
                    additionalClasses="sprk-u-Color--green docs-status__link--ready"
                >
                    Ready
                </SprkLink> 
            </div>
        );
    } else if (statusName === "underReview") {
        return (
            <div>
                <SprkIcon className="
                    docs-status__under-review
                    sprk-c-Icon--filled
                    sprk-c-Icon--l"
                    iconName="caution-filled"
                />
                <SprkLink
                    element="a"
                    href={href}
                    variant="simple"
                    additionalClasses="docs-status-text__Orange docs-status__link--under-review"
                >
                    Under Review
                </SprkLink>
                <SprkTooltip iconAdditionalClasses="docs-status__tooltip docs-status__tooltip--under-review">
                    {additionalInfo}
                    
                </SprkTooltip>
            </div>
        );
    } else if (statusName === "updated") {
        return (
            <div>
                <SprkIcon className="
                    docs-status__updated
                    sprk-c-Icon--filled
                    sprk-c-Icon--l"
                    iconName="recurring-update"
                />
                <SprkLink
                    element="a"
                    href={href}
                    variant="simple"
                    additionalClasses="sprk-u-Color--blue docs-status__link--updated"
                >
                    Updated
                </SprkLink>
                <SprkTooltip iconAdditionalClasses="docs-status__tooltip docs-status__tooltip--updated">
                    {additionalInfo}
                    
                </SprkTooltip>
            </div>
        );
    } else if (statusName === "research") {
        return (
            <div>
                <SprkIcon className="
                    docs-status__research 
                    sprk-c-Icon--filled
                    sprk-c-Icon--l"
                    iconName="search"
                />
                Research
            </div>
        );
    } else if (statusName === "build") {
        return (
            <div>
                <SprkIcon className="
                    docs-status__build 
                    sprk-c-Icon--filled
                    sprk-c-Icon--l"
                    iconName="settings-filled"
                />
                Build   
            </div>
        );
    } else if (statusName === "lowPriority") {
        return (
            <div class="docs-status__lightGreen">
                <SprkIcon className="
                    docs-status__low-priority 
                    sprk-c-Icon--filled
                    sprk-c-Icon--l"
                    iconName="application-filled"
                />
                Low Priority
            </div>
        );
    } else if (statusName === "highPriority") {
        return (
            <div class="sprk-u-Color--red">
                <SprkIcon className="
                    docs-status__high-priority 
                    sprk-c-Icon--filled
                    sprk-c-Icon--l"
                    iconName="application-filled"
                />
                High Priority
            </div>
        );
    } else if (statusName === "new") {
        return (
            <div class="sprk-u-Color--purple">
                <SprkIcon className="
                    docs-status__new 
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