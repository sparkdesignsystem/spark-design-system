document.querySelectorAll('[data-state-changer-id]')
  .forEach(changer => {
    changer.addEventListener('change', event => {
      const value = event.target.value;
      const changerId = changer.getAttribute('data-state-changer-id');
      const templates = document.querySelectorAll('[data-template-id]');

      // map state changer to the right templates
      const matchingTemplates = Array.from(templates).filter(template => {
        const templateId = template.getAttribute('data-template-id');
        return templateId === changerId ||
          templateId === `${changerId}-error-state` ||
          templateId === `${changerId}-disabled-state`;
      });

      // loop through matches and decide whether to show / hide
      matchingTemplates.forEach(matchingTemplate => {
        const templateId = matchingTemplate.getAttribute('data-template-id');
        matchingTemplate.classList.add('hidden');
        if ((templateId === changerId && value === 'normal') ||
           templateId.includes(value)) {
          matchingTemplate.classList.remove('hidden');
        }
      });
    });
  });
