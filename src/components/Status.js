import React from 'react';
import {
  SprkLink,
  SprkIcon,
  SprkTooltip
} from '@sparkdesignsystem/spark-react';
import classnames from 'classnames';

const Status = ({
    statusName,
    href,
    additionalInfo
}) => {
    
    const classNames = classnames(`sprk-c-Icon--filled
    sprk-c-Icon--l`, {
        'docs-status__ready': statusName === 'ready',
        'docs-status__under-review': statusName === 'underReview',
        'docs-status__updated': statusName === 'updated',
        'docs-status__research': statusName === 'research',
        'docs-status__build': statusName === 'build',
        'docs-status__low-priority': statusName === 'lowPriority',
        'docs-status__high-priority': statusName === 'highPriority',
        'docs-status__new': statusName === 'new',
    });

    const textColor = classnames({
        'docs-status__link--ready': statusName === 'ready',
        'docs-status__link--under-review': statusName === 'underReview',
        'docs-status__link--updated': statusName === 'updated',
        'docs-status__research': statusName === 'research',
        'docs-status__build': statusName === 'build',
        'docs-status__text--low-priority': statusName === 'lowPriority',
        'sprk-u-Color--red': statusName === 'highPriority',
        'sprk-u-Color--purple': statusName === 'new'
    });

    return (
        <div>
            <SprkIcon className={classNames}
                iconName={getIconName()}
                aria-hidden="true"
            />
            {getLink()}
        </div>
    );

    function getIconName() {
        if (statusName === 'ready'){
            return "check-mark-filled";
        } 
        if (statusName === 'underReview') {
            return "caution-filled";
        }
        if (statusName === 'updated') {
            return "recurring-update";
        }
        if (statusName === 'research') {
            return "search";
        }
        if (statusName === 'build') {
            return "settings-filled";
        }
        if (statusName === 'lowPriority') {
            return "application-filled";
        }
        if (statusName === 'highPriority') {
            return "application-filled";
        }
        if (statusName === 'new') {
            return "vip-filled";
        }
    }

    function getStatusText() {
        if (statusName === 'ready'){
            return "Ready";
        } 
        if (statusName === 'underReview') {
            return "Under Review";
        }
        if (statusName === 'updated') {
            return "Updated";
        }
        if (statusName === 'research') {
            return "Research";
        }
        if (statusName === 'build') {
            return "Build";
        }
        if (statusName === 'lowPriority') {
            return "Low Priority";
        }
        if (statusName === 'highPriority') {
            return "High Priority";
        }
        if (statusName === 'new') {
            return "New";
        }
    }

    function getLink() {
        if (statusName === 'ready' || statusName === 'underReview' || statusName === 'updated') {
            return <SprkLink
                element="a"
                href={href}
                variant="simple"
                additionalClasses={textColor}
            >
                {getStatusText()}
            </SprkLink> ;
        }
        return <span class={textColor}>{getStatusText()}</span>
        
    }
};

export default Status;