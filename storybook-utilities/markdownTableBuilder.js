const createTable = (tableData) => {
  const { headers, rows } = tableData;
  const table = `<table class="sprk-b-Table sprk-b-Table--spacing-medium">
    <thead>
      <tr>
        ${headers.map(header => `<th>${header}</th>`.trim()).join('')}
      </tr>
    </thead>
    <tbody>
      ${rows.map(row => `<tr>
        ${row.map(item => `<td>${item}</td>`.trim()).join('')}
      </tr>`.trim()).join('')}
    </tbody>
  </table>`;
  return table;
};

const markdownTableBuilder = (data) => {
  if (!data || typeof data !== 'object') {
    if (typeof data !== 'object') {
      console.error(
        'The data provided to markdownTableBuilder must be an object',
      );
    }
    return '';
  } else {
    const markdownTable = createTable(data);
    return `${markdownTable}`;
  }
};

export { markdownTableBuilder };
