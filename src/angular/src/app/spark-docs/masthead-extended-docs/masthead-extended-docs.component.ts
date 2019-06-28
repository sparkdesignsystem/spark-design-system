import { Component } from '@angular/core';

@Component({
  selector: 'sprk-masthead-extended-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <sprk-masthead
        additionalClasses="angular-docs-u-Masthead-docs"
        [bigNavLinks]="links"
        [narrowNavLinks]="extendedNarrowLinks"
        [narrowSelector]="mySelector"
        idString="masthead-1"
      >
        <svg
          logo-slot
          class="sprk-c-Masthead__logo"
          height="49"
          viewBox="0 0 175 49"
          width="175"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
            <path
              d="m42.5897384 43.9901408 9.3126761-16.244668c1.3653924-2.3981891 1.3653924-5.3565392-.0175051-7.7372233l-2.6082494-4.4987927-6.4943662 11.1682092c.3325955 3.6585513-1.680483 7.1245473-5.0239437 8.6474849l-7.2995976 12.5686117 5.4440644-.0175051c2.7482897-.017505 5.3040242-1.4879275 6.6869215-3.8861167z"
              fill="#ff451a"
            ></path>
            <g fill="#000" transform="translate(57.42 2.32)">
              <path
                d="m17.7816098 26.5107847h-14.89678086c-.43762566 0-.85774634-.1750503-1.17283714-.4901408-.31509022-.3150906-.4901406-.7352113-.4901406-1.172837 0-.4376258.17505038-.8577466.4901406-1.1728371.3150908-.3150905.73521148-.4901408 1.17283714-.4901408h14.91428586c2.2056339 0 4.043662-1.732998 4.0961769-3.9211268.017505-1.0853119-.3851107-2.1356137-1.1378271-2.905835-.7527159-.7702213-1.8030182-1.2078471-2.8883299-1.2078471h-10.18792732c-4.04366198 0-7.38712285-3.2209255-7.43963796-7.26458753-.01750504-1.96056333.75271646-3.85110662 2.13561394-5.234004 1.3828969-1.40040241 3.25593556-2.17062374 5.21649854-2.17062374h14.8617709c.9102613 0 1.6629778.73521127 1.6629778 1.66297786 0 .43762576-.1750504.85774648-.4901406 1.17283703-.3150908.31509053-.7352115.49014085-1.1728372.49014085h-14.7917504c-2.20563386 0-4.04366198 1.73299795-4.0961775 3.92112678-.03500996 1.08531183.38511072 2.13561365 1.13782718 2.90583495s1.80301816 1.2078471 2.88832982 1.2078471h10.2929578c1.9605636 0 3.8336017.7877264 5.2164991 2.1706237 1.3828975 1.3828975 2.153119 3.2734407 2.135614 5.2340041-.0525155 4.043662-3.413481 7.2645875-7.457143 7.2645875z"
              ></path>
              <path
                d="m41.693481.37577465h-12.6911471v24.52454725c-.017505.6126761.2975858 1.1903421.8227364 1.4879276.5251511.2975855 1.1728371.3150905 1.6979883 0 .5251505-.3150906.8402413-.8927565.8227364-1.4879276v-21.18108652h9.4352109c2.2931593.01750504 4.1486924 1.83802818 4.2012073 4.13118717.017505 1.12032191-.4201206 2.18812875-1.2078471 2.97585515-.8052314.8227364-1.925553 1.2953722-3.0808851 1.2953722h-4.9189133c-.9102619.0350101-1.6279678.7702213-1.6279678 1.6804829s.7177059 1.6454728 1.6279678 1.6804829h4.9889332c2.0130785 0 3.9386321-.8052314 5.3565395-2.2406439 1.4179075-1.4354125 2.2056339-3.36096577 2.1881289-5.37404421 0-4.13118717-3.4309859-7.49215294-7.6146883-7.49215294z"
              ></path>
              <path
                d="m94.0335214 23.7274849-8.052314-8.2448692h.9977867c2.0130785 0 3.9386316-.8052314 5.356539-2.2406439s2.2056339-3.3784708 2.1881289-5.39154925c-.03501-4.13118717-3.4659959-7.4746479-7.6496983-7.4746479h-12.6911471v24.52454725c-.0175049.6126761.2975859 1.1903421.822737 1.4879276.5251506.3150905 1.1728366.3150905 1.6979877 0 .5251511-.3150906.8402414-.8927565.8227364-1.4879276v-21.18108652h9.4352115c2.2931587.01750504 4.1486918 1.83802818 4.2012068 4.13118717.0175049 1.12032191-.4201207 2.18812875-1.2078471 2.97585515-.8052314.8227364-1.9255531 1.2953722-3.0808852 1.2953722h-4.726358c-.7527164-.0875252-1.4879279.3501006-1.7680082 1.0678069-.2800802.7177062-.0350099 1.5229376.5776661 1.9780683l10.6605636 10.9231389c.665191.560161 1.6454727.5251509 2.2581488-.0875252.665191-.630181.7177059-1.6104628.1575454-2.2756539z"
              ></path>
              <path
                d="m116.019839 23.9200402-9.505231-11.4832998 8.314889-9.2426559c.612676-.68269617.560161-1.75050301-.122535-2.36317907-.682697-.61267605-1.750503-.56016097-2.363179.12253521l-11.745876 13.09376256v-12.0784708c.017505-.61267606-.297585-1.19034206-.8227359-1.48792757-.5251512-.31509054-1.1728372-.31509054-1.6979877 0-.5251512.31509054-.840242.89275654-.822737 1.48792757v22.9315895c-.017505.6126761.2975858 1.1903421.822737 1.4879276.5251505.3150905 1.1728365.3150905 1.6979877 0 .5251509-.3150906.8402409-.8927565.8227359-1.4879276v-5.829175l3.676057-4.0961771 9.190141 11.0981891c.28008.3501007.682696.560161 1.137826.5951711h.157546c.647686 0 1.242857-.3851107 1.505432-.9627767.262576-.595171.175051-1.2778672-.24507-1.7855131z"
              ></path>
              <path
                d="m70.8043462 24.4626962-9.9778676-22.73903423c-.4026157-.9277666-1.3303819-1.52293762-2.3456737-1.52293762-1.0152917 0-1.9430586.59517102-2.3456743 1.52293762l-9.977867 22.73903423c-.3676057.8402414.017505 1.8030181.8577464 2.1706237.8402413.3676056 1.8030181-.017505 2.1706239-.8402415l9.295171-21.18108643 3.2734406 7.45714283h-3.3084505c-.9627768 0-1.7505033.7877264-1.7505033 1.750503 0 .9627767.7877265 1.750503 1.7505033 1.750503h4.8488933l4.4812877 10.2229376c.3851107.8052314 1.3478869 1.1728371 2.1531183.8052314.840242-.3676056 1.2253521-1.3128772.8752519-2.1356136z"
              ></path>
              <path
                d="m3.9701406 31.7272837c3.44849092 0 5.35653954 2.1356137 5.35653954 5.6366197s-1.90804862 5.6541248-5.35653954 5.6541248h-3.71106614v-11.2907445zm-2.64325952 10.3279678h2.59074458c2.76579496 0 4.32374282-1.750503 4.32374282-4.6738431 0-2.92334-1.57545284-4.673843-4.32374282-4.673843h-2.59074458z"
              ></path>
              <path
                d="m17.9566602 43.0180282h-6.8269619v-11.2907445h6.8269619v.9627766h-5.7591552v4.0611671h5.4615694v.9627766h-5.4615694v4.3412475h5.7591552z"
              ></path>
              <path
                d="m20.3898594 40.0946881c.1400398 1.2953722 1.4354124 2.1881288 3.1684101 2.1881288 1.6979883 0 2.9058354-.9452716 2.9058354-2.2056338 0-1.0678068-.7702215-1.750503-2.5207247-2.1881288l-1.295372-.3325955c-2.118109-.525151-3.0108653-1.4179075-3.0108653-2.9408451 0-1.8205231 1.5754529-3.1334004 3.8686116-3.1334004 2.153119 0 3.7635818 1.2778672 3.8686116 2.9933602h-1.0853116c-.1750504-1.2078471-1.2603621-2.0130785-2.8183099-2.0130785-1.6279678 0-2.74829.8927565-2.74829 2.1181086 0 .9802817.7002015 1.5579477 2.4156942 1.9955734l1.1203222.2800805c2.3281687.577666 3.2909455 1.5054327 3.2909455 3.0983904 0 1.9780684-1.6279678 3.2909457-4.0961769 3.2909457-2.3281693 0-4.008652-1.2778672-4.1486924-3.1684105z"
              ></path>
              <path
                d="m29.2649092 43.0180282v-11.2907445h1.0853122v11.2907445z"
              ></path>
              <path
                d="m37.2121933 43.2630986c-3.0633802 0-5.0589537-2.328169-5.0589537-5.8816902 0-3.5535211 1.9955735-5.8816901 5.0414487-5.8816901 2.4156942 0 4.2187118 1.3828974 4.6213275 3.5360161h-1.0853116c-.4726357-1.6104628-1.7505033-2.5382294-3.5360159-2.5382294-2.3806842 0-3.9386321 1.9255533-3.9386321 4.8839034s1.5579479 4.9014085 3.9561371 4.9014085c2.2231389 0 3.6410463-1.4004024 3.6410463-3.5360161v-.3851106h-3.4484909v-.9627767h4.5162976v1.2603621c0 2.7832999-1.8555331 4.603823-4.708853 4.603823z"
              ></path>
              <path
                d="m43.7590744 43.0180282v-11.2907445h1.0503017l6.5818916 9.3826962h.1050299v-9.3826962h1.0503023v11.2907445h-1.0503023l-6.599396-9.3826962h-.1050305v9.3826962z"
              ></path>
              <path
                d="m59.040966 40.0946881c.1400399 1.2953722 1.4354124 2.1881288 3.1684101 2.1881288 1.6979883 0 2.9058354-.9452716 2.9058354-2.2056338 0-1.0678068-.7702215-1.750503-2.5207247-2.1881288l-1.295372-.3325955c-2.1181089-.525151-3.0108652-1.4179075-3.0108652-2.9408451 0-1.8205231 1.5754528-3.1334004 3.8686116-3.1334004 2.1706239 0 3.7635817 1.2778672 3.8686116 2.9933602h-1.0853117c-.1750504-1.2078471-1.260362-2.0130785-2.8358149-2.0130785-1.6279678 0-2.730785.8927565-2.730785 2.1181086 0 .9802817.7002015 1.5579477 2.4156942 1.9955734l1.1203222.2800805c2.3281687.577666 3.2909455 1.5054327 3.2909455 3.0983904 0 1.9780684-1.6279677 3.2909457-4.0961769 3.2909457-2.3281693 0-4.026157-1.2778672-4.1486924-3.1684105z"
              ></path>
              <path
                d="m70.9618916 43.0180282v-4.8839035l-4.0611675-6.406841h1.2253526l3.3084505 5.3215292h.1050299l3.3084511-5.3215292h1.2253521l-4.043662 6.406841v4.8839035z"
              ></path>
              <path
                d="m77.8413685 40.0946881c.1400398 1.2953722 1.4354124 2.1881288 3.1684101 2.1881288 1.6979882 0 2.9058353-.9452716 2.9058353-2.2056338 0-1.0678068-.7702214-1.750503-2.5207246-2.1881288l-1.295372-.3325955c-2.118109-.525151-3.0108653-1.4179075-3.0108653-2.9408451 0-1.8205231 1.5754529-3.1334004 3.8686116-3.1334004 2.1531189 0 3.7635817 1.2778672 3.8686116 2.9933602h-1.0853116c-.1750504-1.2078471-1.2603627-2.0130785-2.8183099-2.0130785-1.6279678 0-2.74829.8927565-2.74829 2.1181086 0 .9802817.7002015 1.5579477 2.4156942 1.9955734l1.1203222.2800805c2.3281687.577666 3.2909455 1.5054327 3.2909455 3.0983904 0 1.9780684-1.6279678 3.2909457-4.0961769 3.2909457-2.3281693 0-4.026157-1.2778672-4.1486925-3.1684105z"
              ></path>
              <path
                d="m89.7447885 43.0180282v-10.3279679h-3.7810861v-.9627766h8.6474845v.9627766h-3.7985911v10.3279679z"
              ></path>
              <path
                d="m102.926077 43.0180282h-6.8269622v-11.2907445h6.8269622v.9627766h-5.7416505v4.0611671h5.4615695v.9627766h-5.4615695v4.3412475h5.7416505z"
              ></path>
              <path
                d="m104.834125 43.0180282v-11.2907445h1.225352l4.166197 9.837827h.10503l4.148693-9.837827h1.242857v11.2907445h-.997787v-9.2076459h-.087526l-3.903621 9.1551308h-.927766l-3.903623-9.1551308h-.070019v9.2076459z"
              ></path>
            </g>
            <path
              d="m37.7408451 35.3426559c-.0175051.0175051-.0525151.0350101-.0700201.0350101l-16.0696177 7.3521127-3.0283703 5.1989939 11.8684105-.03501z"
              fill="#ff5c1c"
            ></path>
            <path
              d="m42.9748491 5.95171025-7.544668 12.97122735c3.9561368.560161 7.002012 3.7810865 7.3346077 7.7722334l6.4943662-11.1682093-5.2340041-8.99758543c-.2100603-.38511066-.612676-.59517106-1.0503018-.57766602z"
              fill="#ff5c1c"
            ></path>
            <path
              d="m21.0585513 42.9748491-5.7066398 2.6082495c-.4551308.2100603-.7352113.7002012-.6651912 1.1903421.0700201.4901408.4376258.9102615.9277666.9977867.5076459.1050301 1.0152918.1575452 1.5229376.1575452h.0175051 1.4179074l3.0283703-5.1989939z"
              fill="#ff721e"
            ></path>
            <path
              d="m35.4301811 18.9229376 7.544668-12.97122735c-.1400403 0-.2800805.03501008-.4201207.10503017l-3.5885312 1.59295776-11.8859155 5.26901412-6.4243461 11.045674 9.855332-4.3937626c1.5404427-.6826961 3.2559356-.9102615 4.9189135-.6476861z"
              fill="#ff721e"
            ></path>
            <path
              d="m17.3649899 17.2249497c-1.8905432.8402415-2.7832997 3.0458753-2.0130784 4.9014085.3851106.9277665 1.1378269 1.6629778 2.0830986 2.0480885.9452716.3676056 1.9955734.3501006 2.9058349-.0525151l.3150906-.1400403 6.4243461-11.063179z"
              fill="#ff8920"
            ></path>
            <path
              d="m37.5657948 25.9774648c-.3851107-.9277666-1.137827-1.6629779-2.0830986-2.0480885-.9452717-.3676056-1.9955735-.3501007-2.905835.052515l-.1225352.0525151-6.4243461 11.0631791 9.5227364-4.2187123c1.8905433-.8402414 2.8008048-3.0283702 2.0130785-4.9014084z"
              fill="#ff5c1c"
            ></path>
            <path
              d="m17.6275654 29.1983903-7.509658 12.9362174c.0875252-.0175051.1750504-.0350101.2450705-.0700202l3.5885312-1.5929577 12.0959758-5.3565392 6.4243461-11.0631791-10.0653924 4.4812877c-1.5054326.6651911-3.1684104.8927565-4.7788732.6651911z"
              fill="#ff721e"
            ></path>
            <path
              d="m31.859155 5.12897384 5.7066398-2.60824949c.4726358-.21006037.7352112-.70020121.6826961-1.20784709-.052515-.50764587-.4376257-.91026157-.9452716-.99778671-.5076458-.10503019-1.0152917-.15754528-1.5229376-.15754528h-.017505-1.2778673l-2.9758551 5.11146881z"
              fill="#ff721e"
            ></path>
            <path
              d="m10.8881288 24.2619718c-.3676057-.8227364-.6126761-1.6979879-.7177062-2.6082495l-6.44185117 11.0806841 5.14647889 8.8575453c.24507042.4201207.73521125.6476861 1.22535208.542656l7.527163-12.9362174c-2.9408451-.3851106-5.4790745-2.2406438-6.7394366-4.9364185z"
              fill="#ff8920"
            ></path>
            <path
              d="m15.3869216 12.6561368 16.1396377-7.36961768 2.9583501-5.11146881-11.8684104.03501005z"
              fill="#ff8920"
            ></path>
            <path
              d="m10.6605634 17.5925554c.8052314-2.1706238 2.4682092-3.9211268 4.5863179-4.8663985l.1400403-.0525151 7.2295774-12.4460764h-5.5841046c-2.7657948.01750502-5.3215292 1.48792756-6.7044266 3.88611669l-9.31267605 16.24466801c-1.36539235 2.3981892-1.34788732 5.3565392.03501006 7.7372234l2.67826962 4.6213279 6.44185117-11.0806841c-.17505037-1.3653923 0-2.7482897.4901408-4.0436619z"
              fill="#ffa022"
            ></path>
          </g>
        </svg>
        <sprk-link
          navItem-slot
          linkType="plain"
          additionalClasses="sprk-c-Masthead__link"
          href="#nogo"
        >
          Sign In
        </sprk-link>

        <div
          little-nav-slot
          class="sprk-o-Stack__item sprk-o-Stack__item--flex@xxs sprk-o-Stack sprk-o-Stack--center-column sprk-o-Stack--center-row"
        >
          <div class="sprk-o-Stack__item sprk-u-Position--relative">
            <sprk-dropdown
              dropdownType="informational"
              additionalTriggerClasses="sprk-c-Masthead__selector sprk-b-Link sprk-b-Link--plain sprk-o-Stack sprk-o-Stack--split@xxs sprk-o-Stack--center-column"
              triggerText="My Selector"
              additionalClasses="sprk-c-Masthead__selector-dropdown sprk-u-Width-100"
              triggerIconType="chevron-down"
              [choices]="siteDropdownChoices"
              selector="Select One"
              additionalIconClasses="sprk-c-Icon--stroke-current-color sprk-Stack__item"
              additionalTriggerTextClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@xxs"
            >
              <div
                class="sprk-c-Dropdown__footer sprk-u-TextAlign--center"
                sprkDropdownFooter
              >
                <a
                  class="sprk-c-Button sprk-c-Button--compact sprk-c-Button--tertiary"
                  href="#nogo"
                >
                  Placeholder
                </a>
              </div>
            </sprk-dropdown>
          </div>
        </div>

        <ul
          utility-slot
          class="sprk-o-Stack__item sprk-o-HorizontalList sprk-o-HorizontalList--spacing-medium sprk-o-Stack--center-column"
        >
          <li>
            <a
              class="sprk-b-Link sprk-b-Link--plain sprk-c-Masthead__link"
              href="#nogo"
            >
              Talk To Us
            </a>
          </li>

          <li>
            <sprk-dropdown
              [choices]="simpleChoices"
              dropdownType="simple"
              title="My Account"
              triggerIconType="user-account"
              additionalTriggerClasses="sprk-b-Link--plain sprk-c-Masthead__link"
              additionalIconClasses="sprk-c-Icon--l"
              additionalClasses="sprk-u-Right--zero sprk-u-mrm"
              screenReaderText="User Account"
            ></sprk-dropdown>
          </li>
        </ul>
      </sprk-masthead>

      <div class="sprk-o-CenteredColumn">
        <h2 class="drizzle-b-h2">Masthead (Extended)</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
        <sprk-alert
          alertType="info"
          idString="alert-info-1"
          analyticsString="object.action.event"
        >
          This is an info Spark alert!
        </sprk-alert>
        <h2 class="drizzle-b-h2">Masthead (Extended)</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
        <h2 class="drizzle-b-h2">Masthead (Extended)</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
        <h2 class="drizzle-b-h2">Masthead (Extended)</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
        <h2 class="drizzle-b-h2">Masthead (Extended)</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
        <h2 class="drizzle-b-h2">Masthead (Extended)</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
        <h2 class="drizzle-b-h2">Masthead (Extended)</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
        <h2 class="drizzle-b-h2">Masthead (Extended)</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
        <h2 class="drizzle-b-h2">Masthead (Extended)</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
        <h2 class="drizzle-b-h2">Masthead (Extended)</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
        <h2 class="drizzle-b-h2">Masthead (Extended)</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
        <h2 class="drizzle-b-h2">Masthead (Extended)</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
        <h2 class="drizzle-b-h2">Masthead (Extended)</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
        <h2 class="drizzle-b-h2">Masthead (Extended)</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </div>
    </div>
  `,
  styles: [``]
})
export class MastheadExtendedDocsComponent {
  links = [
    {
      text: 'Navigation Item',
      href: '/icons',
      active: false
    },
    {
      text: 'Your Item',
      active: false,
      subNav: [
        {
          text: 'Item 1',
          href: '/links'
        },
        {
          text: 'Item 2',
          href: '#nogo'
        },
        {
          text: 'Item 3',
          href: '#nogo'
        }
      ]
    },
    {
      text: 'Nav Item',
      href: '#nogo',
      active: false,
      leadingIcon: 'settings'
    },
    {
      text: 'Navigation Item',
      href: '#nogo',
      leadingIcon: 'chat-online',
      subNav: [
        {
          text: 'Item 1',
          href: '#nogo'
        },
        {
          text: 'Item 2',
          href: '#nogo'
        },
        {
          text: 'Item 3',
          href: '#nogo'
        }
      ]
    },
    {
      text: 'Item',
      href: '#nogo',
      active: false,
      leadingIcon: 'chat-online'
    }
  ];

  extendedNarrowLinks = [
    {
      text: 'Item 1',
      href: '#nogo',
      subNav: [
        {
          text: 'Item 1',
          href: '/links'
        },
        {
          text: 'Item 2',
          href: '/links'
        },
        {
          text: 'Item 3',
          href: '/links'
        }
      ]
    },
    {
      text: 'Item 2',
      href: '#nogo',
      active: true
    },
    {
      text: 'Item 3',
      href: '#nogo',
      subNav: [
        {
          text: 'Item 1',
          href: '/links'
        },
        {
          text: 'Item 2',
          href: '/links'
        },
        {
          text: 'Item 3',
          href: '/links'
        }
      ]
    },
    {
      text: 'Item 4',
      href: '#nogo'
    },
    {
      text: 'Item 5',
      href: '#nogo'
    },
    {
      text: '(586) 123-4567',
      href: '#nogo',
      active: false,
      leadingIcon: 'landline'
    },
    {
      text: 'Talk To Us',
      href: '#nogo',
      active: false,
      leadingIcon: 'call-team-member'
    },
    {
      text: 'Settings',
      href: '#nogo',
      active: false,
      leadingIcon: 'settings'
    },
    {
      text: 'My Account',
      href: '#nogo',
      active: false,
      leadingIcon: 'user',
      subNav: [
        {
          text: 'Change Username',
          href: '/links'
        },
        {
          text: 'Change Password',
          href: '#nogo'
        },
        {
          text: 'Sign Out',
          href: '#nogo'
        }
      ]
    }
  ];

  siteDropdownChoices = [
    {
      content: {
        title: 'Choice Title',
        infoLine1: 'Information about this choice',
        infoLine2: 'More Information'
      },
      value: 'Choice Title 1',
      active: false
    },
    {
      content: {
        title: 'Choice Title',
        infoLine1: 'Information about this choice',
        infoLine2: 'More Information'
      },
      value: 'Choice Title 2',
      active: true
    }
  ];

  simpleChoices = [
    {
      text: 'Change Username',
      value: 'change-username'
    },
    {
      text: 'Change Password',
      value: 'change-password'
    },
    {
      text: 'Sign Out',
      value: 'sign-out'
    }
  ];

  mySelector = {
    trigger: {
      text: 'Select One'
    },
    choices: [
      {
        content: {
          title: 'Choice Title',
          infoLine1: 'Information about this choice',
          infoLine2: 'More Information'
        },
        value: 'Choice Title 1',
        active: false
      },
      {
        content: {
          title: 'Choice Title',
          infoLine1: 'Information about this choice',
          infoLine2: 'More Information'
        },
        value: 'Choice Title 2',
        active: true
      }
    ],
    footer: {
      analyticsString: 'Go Elsewhere Link',
      text: 'Go Elsewhere',
      href: '/alerts'
    }
  };

  constructor() {}
}
